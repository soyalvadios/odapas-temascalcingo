"use client";

import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { useEffect, useMemo, useRef, useState } from "react";

export type LatLng = { lat: number; lng: number };

export type MapPickerProps = {
  value: LatLng;
  onChange: (v: LatLng) => void;
};

type NominatimSearchResult = {
  lat: string;
  lon: string;
};

const pinSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 24 24"><path fill="#0ea5e9" d="M12 2c-3.866 0-7 3.134-7 7c0 5.25 7 13 7 13s7-7.75 7-13c0-3.866-3.134-7-7-7zm0 10a3 3 0 1 1 0-6a3 3 0 0 1 0 6z"/></svg>`;
const DEFAULT_CENTER: LatLng = { lat: 19.916, lng: -100.005 };

export default function MapPicker({ value, onChange }: MapPickerProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<L.Map | null>(null);
  const markerRef = useRef<L.Marker | null>(null);

  const [q, setQ] = useState("");
  const [searching, setSearching] = useState(false);
  const [message, setMessage] = useState("");

  const pinIcon = useMemo(
    () =>
      new L.Icon({
        iconUrl: `data:image/svg+xml;base64,${btoa(pinSvg)}`,
        iconSize: [34, 34],
        iconAnchor: [17, 34],
      }),
    []
  );

  useEffect(() => {
    if (!containerRef.current) return;

    if (mapRef.current) {
      mapRef.current.remove();
      mapRef.current = null;
      markerRef.current = null;
    }

    const container = containerRef.current as HTMLDivElement & {
      _leaflet_id?: number;
    };

    if (container._leaflet_id !== undefined) {
      delete container._leaflet_id;
    }

    const map = L.map(container, {
      center: [value.lat, value.lng],
      zoom: 15,
      scrollWheelZoom: true,
    });

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: "&copy; OpenStreetMap",
    }).addTo(map);

    const marker = L.marker([value.lat, value.lng], {
      icon: pinIcon,
      draggable: true,
    }).addTo(map);

    marker.on("dragend", () => {
      const point = marker.getLatLng();
      onChange({ lat: point.lat, lng: point.lng });
    });

    map.on("click", (event: L.LeafletMouseEvent) => {
      marker.setLatLng(event.latlng);
      onChange({ lat: event.latlng.lat, lng: event.latlng.lng });
    });

    mapRef.current = map;
    markerRef.current = marker;

    return () => {
      map.remove();
      mapRef.current = null;
      markerRef.current = null;
    };
  }, [onChange, pinIcon, value.lat, value.lng]);

  useEffect(() => {
    if (!mapRef.current || !markerRef.current) return;

    markerRef.current.setLatLng([value.lat, value.lng]);
    mapRef.current.setView([value.lat, value.lng], mapRef.current.getZoom(), {
      animate: true,
    });
  }, [value.lat, value.lng]);

  async function search() {
    const query = q.trim();
    if (!query) {
      setMessage("Escribe una dirección para buscar.");
      return;
    }

    setSearching(true);
    setMessage("");

    try {
      const url = `https://nominatim.openstreetmap.org/search?format=json&limit=1&q=${encodeURIComponent(query)}`;
      const response = await fetch(url, {
        headers: { Accept: "application/json" },
      });

      if (!response.ok) {
        throw new Error("No se pudo consultar Nominatim");
      }

      const data = (await response.json()) as NominatimSearchResult[];
      if (!data.length) {
        setMessage("No se encontró esa dirección.");
        return;
      }

      onChange({ lat: Number(data[0].lat), lng: Number(data[0].lon) });
      setMessage("Ubicación encontrada.");
    } catch {
      setMessage("Error al buscar. Intenta de nuevo.");
    } finally {
      setSearching(false);
    }
  }

  function resetMap() {
    onChange(DEFAULT_CENTER);
    setMessage("Mapa restablecido.");
  }

  return (
    <div>
      <div className="mapTools">
        <input
          className="input"
          value={q}
          onChange={(e) => setQ(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              e.preventDefault();
              void search();
            }
          }}
          placeholder="Buscar dirección (ej. Calle + colonia + Temascalcingo)"
        />
        <div className="mapToolRow">
          <button className="btn" type="button" onClick={() => void search()} disabled={searching}>
            {searching ? "Buscando..." : "Buscar"}
          </button>
          <button className="btn" type="button" onClick={resetMap}>
            Restablecer
          </button>
        </div>
        <p className="muted small">
          Da clic en el mapa o arrastra el marcador para ajustar la ubicación exacta.
        </p>
        {message && <p className="statusText">{message}</p>}
      </div>

      <div className="mapFrame">
        <div ref={containerRef} style={{ height: 320, width: "100%", borderRadius: 14 }} />
      </div>

      <div className="grid2" style={{ marginTop: 10 }}>
        <div className="card pad">
          <div className="cardH">Latitud</div>
          <div className="codeBox">{value.lat.toFixed(6)}</div>
        </div>
        <div className="card pad">
          <div className="cardH">Longitud</div>
          <div className="codeBox">{value.lng.toFixed(6)}</div>
        </div>
      </div>
    </div>
  );
}

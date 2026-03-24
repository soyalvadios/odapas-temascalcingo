"use client";

import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { useEffect, useRef, useMemo, useState } from "react";

export type LatLng = { lat: number; lng: number };

const pinSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 24 24"><path fill="#0ea5e9" d="M12 2c-3.866 0-7 3.134-7 7c0 5.25 7 13 7 13s7-7.75 7-13c0-3.866-3.134-7-7-7zm0 10a3 3 0 1 1 0-6a3 3 0 0 1 0 6z"/></svg>`;

export default function MapPicker({
  value,
  onChange,
}: {
  value: LatLng;
  onChange: (v: LatLng) => void;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const mapRef       = useRef<L.Map | null>(null);
  const markerRef    = useRef<L.Marker | null>(null);

  const [q, setQ]                 = useState("");
  const [searching, setSearching] = useState(false);
  const [message, setMessage]     = useState("");

  const pinIcon = useMemo(
    () =>
      new L.Icon({
        iconUrl: `data:image/svg+xml;base64,${btoa(pinSvg)}`,
        iconSize: [34, 34],
        iconAnchor: [17, 34],
      }),
    []
  );

  // ── Inicializar mapa con Leaflet puro (sin react-leaflet) ──────────────
  useEffect(() => {
    if (!containerRef.current) return;

    // Destruir instancia previa si existe (HMR / Strict Mode)
    if (mapRef.current) {
      mapRef.current.remove();
      mapRef.current    = null;
      markerRef.current = null;
    }

    // Limpiar flag interno que Leaflet graba en el elemento DOM
    const el = containerRef.current as HTMLDivElement & { _leaflet_id?: number };
    if (el._leaflet_id !== undefined) {
      delete el._leaflet_id;
    }

    const map = L.map(containerRef.current, {
      center:          [value.lat, value.lng],
      zoom:            15,
      scrollWheelZoom: true,
    });

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: "&copy; OpenStreetMap",
    }).addTo(map);

    const marker = L.marker([value.lat, value.lng], {
      icon:      pinIcon,
      draggable: true,
    }).addTo(map);

    marker.on("dragend", () => {
      const p = marker.getLatLng();
      onChange({ lat: p.lat, lng: p.lng });
    });

    map.on("click", (e) => {
      marker.setLatLng(e.latlng);
      onChange({ lat: e.latlng.lat, lng: e.latlng.lng });
    });

    mapRef.current    = map;
    markerRef.current = marker;

    return () => {
      map.remove();
      mapRef.current    = null;
      markerRef.current = null;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // ── Mover marcador y vista cuando value cambia externamente ────────────
  useEffect(() => {
    if (!mapRef.current || !markerRef.current) return;
    markerRef.current.setLatLng([value.lat, value.lng]);
    mapRef.current.setView([value.lat, value.lng], mapRef.current.getZoom(), {
      animate: true,
    });
  }, [value]);

  // ── Buscar dirección por texto ─────────────────────────────────────────
  async function search() {
    const query = q.trim();
    if (!query) { setMessage("Escribe una dirección para buscar."); return; }
    setSearching(true);
    setMessage("");
    try {
      const url = `https://nominatim.openstreetmap.org/search?format=json&limit=1&q=${encodeURIComponent(query)}`;
      const res  = await fetch(url, { headers: { Accept: "application/json" } });
      if (!res.ok) throw new Error();
      const data = (await res.json()) as Array<{ lat: string; lon: string }>;
      if (!data.length) { setMessage("No se encontró esa dirección."); return; }
      onChange({ lat: Number(data[0].lat), lng: Number(data[0].lon) });
      setMessage("Ubicación encontrada.");
    } catch {
      setMessage("Error al buscar. Intenta de nuevo.");
    } finally {
      setSearching(false);
    }
  }

  function resetMap() {
    onChange({ lat: 19.916, lng: -100.005 });
    setMessage("Mapa restablecido.");
  }

  return (
    <div>
      <div className="mapTools">
        <input
          className="input"
          value={q}
          onChange={(e) => setQ(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && (e.preventDefault(), search())}
          placeholder="Buscar dirección (ej. Calle + colonia + Temascalcingo)"
        />
        <div className="mapToolRow">
          <button className="btn" type="button" onClick={search} disabled={searching}>
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
        <div
          ref={containerRef}
          style={{ height: 320, width: "100%", borderRadius: 14 }}
        />
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

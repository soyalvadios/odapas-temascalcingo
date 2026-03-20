"use client";

import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { useEffect, useMemo, useState } from "react";
import { MapContainer, Marker, TileLayer, useMap, useMapEvents } from "react-leaflet";

export type LatLng = { lat: number; lng: number };

const pinSvg = `
<svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 24 24">
  <path fill="#0ea5e9" d="M12 2c-3.866 0-7 3.134-7 7c0 5.25 7 13 7 13s7-7.75 7-13c0-3.866-3.134-7-7-7zm0 10a3 3 0 1 1 0-6a3 3 0 0 1 0 6z"/>
</svg>`;

const pinIcon = new L.Icon({
  iconUrl: `data:image/svg+xml;base64,${typeof window !== "undefined" ? window.btoa(pinSvg) : ""}`,
  iconSize: [34, 34],
  iconAnchor: [17, 34],
});

function RecenterMap({ center }: { center: LatLng }) {
  const map = useMap();

  useEffect(() => {
    map.setView(center, map.getZoom(), { animate: true });
  }, [center, map]);

  return null;
}

function ClickToSetMarker({
  value,
  onChange,
}: {
  value: LatLng;
  onChange: (v: LatLng) => void;
}) {
  const [pos, setPos] = useState<LatLng>(value);

  useEffect(() => {
    setPos(value);
  }, [value]);

  useMapEvents({
    click(e) {
      const nextValue = { lat: e.latlng.lat, lng: e.latlng.lng };
      setPos(nextValue);
      onChange(nextValue);
    },
  });

  return (
    <Marker
      position={pos}
      draggable
      icon={pinIcon}
      eventHandlers={{
        dragend: (e) => {
          const marker = e.target as L.Marker;
          const point = marker.getLatLng();
          const nextValue = { lat: point.lat, lng: point.lng };
          setPos(nextValue);
          onChange(nextValue);
        },
      }}
    />
  );
}

export default function MapPicker({
  value,
  onChange,
}: {
  value: LatLng;
  onChange: (v: LatLng) => void;
}) {
  const [q, setQ] = useState("");
  const [searching, setSearching] = useState(false);
  const [message, setMessage] = useState("");

  const initialZoom = useMemo(() => 15, []);

  async function search() {
    const query = q.trim();

    if (!query) {
      setMessage("Escribe una dirección o referencia para buscar.");
      return;
    }

    setSearching(true);
    setMessage("");

    try {
      const url = `https://nominatim.openstreetmap.org/search?format=json&limit=1&q=${encodeURIComponent(query)}`;

      const response = await fetch(url, {
        headers: {
          Accept: "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("No se pudo consultar el servicio de búsqueda.");
      }

      const data = (await response.json()) as Array<{ lat: string; lon: string }>;

      if (!data.length) {
        setMessage("No se encontró una ubicación con ese texto.");
        return;
      }

      onChange({
        lat: Number(data[0].lat),
        lng: Number(data[0].lon),
      });

      setMessage("Ubicación encontrada correctamente.");
    } catch {
      setMessage("Ocurrió un error al buscar la dirección. Intenta de nuevo.");
    } finally {
      setSearching(false);
    }
  }

  function resetMap() {
    onChange({ lat: 19.916, lng: -100.005 });
    setMessage("Mapa restablecido a la ubicación base.");
  }

  return (
    <div>
      <div className="mapTools">
        <input
          className="input"
          value={q}
          onChange={(e) => setQ(e.target.value)}
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
          Da click en el mapa o arrastra el marcador para ajustar la ubicación exacta.
        </p>

        {message ? <p className="statusText">{message}</p> : null}
      </div>

      <div className="mapFrame">
        <MapContainer
          center={value}
          zoom={initialZoom}
          style={{ height: 320, width: "100%", borderRadius: 14 }}
          scrollWheelZoom
        >
          <TileLayer
            attribution="&copy; OpenStreetMap"
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          <RecenterMap center={value} />
          <ClickToSetMarker value={value} onChange={onChange} />
        </MapContainer>
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
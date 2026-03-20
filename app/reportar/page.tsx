"use client";

import { useMemo, useState } from "react";
import dynamic from "next/dynamic";
import type { LatLng } from "@/components/MapPicker";

const MapPicker = dynamic(() => import("@/components/MapPicker"), { ssr: false });

type Address = {
  cp: string;
  estado: string;
  municipio: string;
  colonia: string;
  calle: string;
  no_ext: string;
  no_int: string;
  referencia: string;
};

async function reverseNominatim(lat: number, lng: number) {
  const url = `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${lat}&lon=${lng}`;
  const response = await fetch(url, {
    headers: { Accept: "application/json" },
  });

  if (!response.ok) {
    throw new Error("No se pudo obtener la dirección.");
  }

  return (await response.json()) as any;
}

export default function Reportar() {
  const defaultCenter: LatLng = useMemo(() => ({ lat: 19.916, lng: -100.005 }), []);
  const [geo, setGeo] = useState<LatLng>(defaultCenter);
  const [agreed, setAgreed] = useState(false);
  const [sending, setSending] = useState(false);
  const [autoFilling, setAutoFilling] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");

  const [addr, setAddr] = useState<Address>({
    cp: "",
    estado: "Estado de México",
    municipio: "Temascalcingo",
    colonia: "",
    calle: "",
    no_ext: "",
    no_int: "",
    referencia: "",
  });

  function setField<K extends keyof Address>(key: K, value: Address[K]) {
    setAddr((prev) => ({ ...prev, [key]: value }));
  }

  async function useMyLocationAndFill() {
    if (!navigator.geolocation) {
      setStatusMessage("Tu navegador no soporta geolocalización.");
      return;
    }

    setAutoFilling(true);
    setStatusMessage("");

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const lat = position.coords.latitude;
        const lng = position.coords.longitude;

        setGeo({ lat, lng });

        try {
          const data = await reverseNominatim(lat, lng);
          const a = data?.address || {};

          const municipio =
            a.city || a.town || a.village || a.municipality || a.county || addr.municipio;

          const colonia =
            a.suburb || a.neighbourhood || a.quarter || a.hamlet || a.village || addr.colonia;

          const calleBase =
            a.road || a.pedestrian || a.residential || a.footway || addr.calle;

          setAddr((prev) => ({
            ...prev,
            cp: a.postcode || prev.cp,
            estado: a.state || prev.estado,
            municipio: municipio || prev.municipio,
            colonia: colonia || prev.colonia,
            calle: calleBase || prev.calle,
          }));

          setStatusMessage("Ubicación obtenida y campos autocompletados.");
        } catch {
          setStatusMessage(
            "Se obtuvo la ubicación, pero no fue posible autocompletar todos los campos."
          );
        } finally {
          setAutoFilling(false);
        }
      },
      () => {
        setAutoFilling(false);
        setStatusMessage("No se pudo obtener tu ubicación. Revisa permisos del navegador.");
      },
      { enableHighAccuracy: true, timeout: 10000 }
    );
  }

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!agreed) {
      setStatusMessage("Debes aceptar el aviso de privacidad para continuar.");
      return;
    }

    setSending(true);
    setStatusMessage("");

    setTimeout(() => {
      setSending(false);
      setStatusMessage(
        `Reporte enviado correctamente (demo). Coordenadas: ${geo.lat.toFixed(6)}, ${geo.lng.toFixed(6)}`
      );

      e.currentTarget.reset();
      setGeo(defaultCenter);
      setAgreed(false);

      setAddr({
        cp: "",
        estado: "Estado de México",
        municipio: "Temascalcingo",
        colonia: "",
        calle: "",
        no_ext: "",
        no_int: "",
        referencia: "",
      });
    }, 900);
  }

  return (
    <div className="container page">
      <h1>Reportar fuga / incidencia</h1>
      <p className="muted">
        Usa tu ubicación para rellenar campos y ajustar el marcador al punto exacto del problema.
      </p>

      {statusMessage ? <div className="statusBox">{statusMessage}</div> : null}

      <form onSubmit={onSubmit} className="reportGrid">
        <div className="card pad">
          <div className="cardH">Datos personales</div>

          <div className="row3">
            <div>
              <label className="label">Nombre(s)</label>
              <input className="input" name="nombre" required />
            </div>

            <div>
              <label className="label">Apellido paterno</label>
              <input className="input" name="ap_paterno" required />
            </div>

            <div>
              <label className="label">Apellido materno</label>
              <input className="input" name="ap_materno" />
            </div>
          </div>

          <div className="row2">
            <div>
              <label className="label">Correo</label>
              <input
                className="input"
                name="correo"
                type="email"
                placeholder="correo@ejemplo.com"
              />
            </div>

            <div>
              <label className="label">Teléfono</label>
              <input className="input" name="telefono" inputMode="tel" placeholder="10 dígitos" />
            </div>
          </div>

          <label className="label">Tipo de reporte</label>
          <select className="input" name="tipo" required>
            <option value="Fuga de agua">Fuga de agua</option>
            <option value="Falta de agua">Falta de agua</option>
            <option value="Drenaje">Drenaje</option>
            <option value="Alcantarillado">Alcantarillado</option>
            <option value="Otro">Otro</option>
          </select>

          <label className="label">Descripción de la problemática</label>
          <textarea className="input" name="descripcion" rows={5} required />

          <div className="divider" />
          <div className="cardH">Ubicación del problema</div>

          <div className="row3">
            <div>
              <label className="label">Código postal</label>
              <input
                className="input"
                name="cp"
                value={addr.cp}
                onChange={(e) => setField("cp", e.target.value)}
              />
            </div>

            <div>
              <label className="label">Estado</label>
              <input
                className="input"
                name="estado"
                value={addr.estado}
                onChange={(e) => setField("estado", e.target.value)}
              />
            </div>

            <div>
              <label className="label">Municipio</label>
              <input
                className="input"
                name="municipio"
                value={addr.municipio}
                onChange={(e) => setField("municipio", e.target.value)}
              />
            </div>
          </div>

          <div className="row2">
            <div>
              <label className="label">Colonia / comunidad</label>
              <input
                className="input"
                name="colonia"
                value={addr.colonia}
                onChange={(e) => setField("colonia", e.target.value)}
              />
            </div>

            <div>
              <label className="label">Calle</label>
              <input
                className="input"
                name="calle"
                value={addr.calle}
                onChange={(e) => setField("calle", e.target.value)}
              />
            </div>
          </div>

          <div className="row3">
            <div>
              <label className="label">No. exterior</label>
              <input
                className="input"
                name="no_ext"
                value={addr.no_ext}
                onChange={(e) => setField("no_ext", e.target.value)}
              />
            </div>

            <div>
              <label className="label">No. interior</label>
              <input
                className="input"
                name="no_int"
                value={addr.no_int}
                onChange={(e) => setField("no_int", e.target.value)}
              />
            </div>

            <div>
              <label className="label">Referencia</label>
              <input
                className="input"
                name="referencia"
                value={addr.referencia}
                onChange={(e) => setField("referencia", e.target.value)}
                placeholder="Entre calles, frente a..."
              />
            </div>
          </div>

          <label className="label">Subir imagen (opcional)</label>
          <input className="input" name="evidencia" type="file" accept="image/*" />

          <div className="privacyRow">
            <input
              id="priv"
              type="checkbox"
              checked={agreed}
              onChange={(e) => setAgreed(e.target.checked)}
            />
            <label htmlFor="priv" className="muted small">
              He leído y acepto el{" "}
              <a href="/aviso-privacidad">
                <strong>aviso de privacidad</strong>
              </a>
              .
            </label>
          </div>

          <button className="btn primary" type="submit" disabled={sending}>
            {sending ? "Enviando..." : "Enviar reporte"}
          </button>
        </div>

        <div className="card pad">
          <div className="cardH">Localización geográfica</div>

          <div className="mapToolRow" style={{ marginBottom: 10 }}>
            <button
              className="btn primary"
              type="button"
              onClick={useMyLocationAndFill}
              disabled={autoFilling}
            >
              {autoFilling ? "Obteniendo ubicación..." : "Usar mi ubicación y autocompletar"}
            </button>
          </div>

          <MapPicker value={geo} onChange={setGeo} />
        </div>
      </form>
    </div>
  );
}
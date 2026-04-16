"use client";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Reportar fuga o incidencia",
  description:
    "Reporta fugas e incidencias relacionadas con el servicio de agua en Temascalcingo.",
  alternates: {
    canonical: "/reportar",
  },
};
import { useMemo, useState } from "react";
import dynamic from "next/dynamic";
import type { LatLng, MapPickerProps } from "@/components/MapPicker";
import { WHATSAPP_NUMBER } from "@/lib/constants";

const MapPicker = dynamic<MapPickerProps>(
  () => import("@/components/MapPicker").then((mod) => mod.default),
  { ssr: false }
);

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

type ReverseNominatimResult = {
  address?: {
    postcode?: string;
    state?: string;
    city?: string;
    town?: string;
    village?: string;
    municipality?: string;
    suburb?: string;
    neighbourhood?: string;
    quarter?: string;
    road?: string;
    pedestrian?: string;
    residential?: string;
  };
};

const ADDR_DEFAULT: Address = {
  cp: "",
  estado: "Estado de México",
  municipio: "Temascalcingo",
  colonia: "",
  calle: "",
  no_ext: "",
  no_int: "",
  referencia: "",
};

async function reverseNominatim(lat: number, lng: number): Promise<ReverseNominatimResult> {
  const response = await fetch(
    `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${lat}&lon=${lng}`,
    { headers: { Accept: "application/json" } }
  );

  if (!response.ok) {
    throw new Error("No se pudo consultar Nominatim");
  }

  return (await response.json()) as ReverseNominatimResult;
}

function buildWhatsAppMessage(payload: {
  nombre: string;
  apPaterno: string;
  apMaterno: string;
  correo: string;
  telefono: string;
  tipo: string;
  descripcion: string;
  addr: Address;
  geo: LatLng;
}): string {
  const nombreCompleto = [payload.nombre, payload.apPaterno, payload.apMaterno]
    .filter(Boolean)
    .join(" ");

  const direccion = [
    payload.addr.calle &&
      `${payload.addr.calle}${payload.addr.no_ext ? ` #${payload.addr.no_ext}` : ""}${payload.addr.no_int ? ` Int. ${payload.addr.no_int}` : ""}`,
    payload.addr.colonia && `Col. ${payload.addr.colonia}`,
    payload.addr.cp && `C.P. ${payload.addr.cp}`,
    payload.addr.municipio,
    payload.addr.estado,
  ]
    .filter(Boolean)
    .join(", ");

  const maps = `https://maps.google.com/?q=${payload.geo.lat.toFixed(6)},${payload.geo.lng.toFixed(6)}`;

  return [
    "🚨 *NUEVO REPORTE CIUDADANO*",
    "──────────────────────────",
    `📋 *Tipo:* ${payload.tipo}`,
    "",
    "👤 *Datos del ciudadano*",
    `• Nombre: ${nombreCompleto}`,
    payload.correo ? `• Correo: ${payload.correo}` : null,
    payload.telefono ? `• Teléfono: ${payload.telefono}` : null,
    "",
    "📍 *Ubicación del problema*",
    `• Dirección: ${direccion || "No especificada"}`,
    payload.addr.referencia ? `• Referencia: ${payload.addr.referencia}` : null,
    `• Mapa: ${maps}`,
    "",
    "📝 *Descripción*",
    payload.descripcion,
    "",
    "──────────────────────────",
    "_Enviado desde el portal ODAPAS Temascalcingo_",
  ]
    .filter((line): line is string => line !== null)
    .join("\n");
}

export default function ReportarPage() {
  const defaultCenter = useMemo<LatLng>(() => ({ lat: 19.916, lng: -100.005 }), []);

  const [geo, setGeo] = useState<LatLng>(defaultCenter);
  const [agreed, setAgreed] = useState(false);
  const [autoFilling, setAutoFilling] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");
  const [statusType, setStatusType] = useState<"info" | "error" | "">("");
  const [nombre, setNombre] = useState("");
  const [apPaterno, setApPaterno] = useState("");
  const [apMaterno, setApMaterno] = useState("");
  const [correo, setCorreo] = useState("");
  const [telefono, setTelefono] = useState("");
  const [tipo, setTipo] = useState("Fuga de agua");
  const [descripcion, setDescripcion] = useState("");
  const [addr, setAddr] = useState<Address>(ADDR_DEFAULT);

  function setField<K extends keyof Address>(key: K, value: Address[K]) {
    setAddr((prev) => ({ ...prev, [key]: value }));
  }

  function showStatus(message: string, type: "info" | "error") {
    setStatusMessage(message);
    setStatusType(type);

    window.setTimeout(() => {
      document.getElementById("statusBox")?.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
      });
    }, 100);
  }

  function useMyLocationAndFill() {
    if (!navigator.geolocation) {
      showStatus("Tu navegador no soporta geolocalización.", "error");
      return;
    }

    setAutoFilling(true);
    showStatus("Solicitando permiso de ubicación...", "info");

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const lat = position.coords.latitude;
        const lng = position.coords.longitude;

        setGeo({ lat, lng });
        showStatus("📍 Ubicación obtenida. Autocompletando campos...", "info");

        try {
          const data = await reverseNominatim(lat, lng);
          const address = data.address ?? {};

          setAddr((prev) => ({
            ...prev,
            cp: address.postcode || prev.cp,
            estado: address.state || prev.estado,
            municipio:
              address.city ||
              address.town ||
              address.village ||
              address.municipality ||
              prev.municipio,
            colonia:
              address.suburb || address.neighbourhood || address.quarter || prev.colonia,
            calle: address.road || address.pedestrian || address.residential || prev.calle,
          }));

          showStatus("✓ Ubicación obtenida y campos autocompletados.", "info");
        } catch {
          showStatus("✓ Ubicación obtenida. Ajusta los campos si es necesario.", "info");
        } finally {
          setAutoFilling(false);
        }
      },
      (error) => {
        setAutoFilling(false);

        if (error.code === 1) {
          showStatus(
            "Permiso denegado. Ve a la configuración del navegador y permite la ubicación para este sitio.",
            "error"
          );
          return;
        }

        if (error.code === 2) {
          showStatus(
            "No se pudo determinar tu ubicación. Intenta de nuevo o escribe la dirección.",
            "error"
          );
          return;
        }

        showStatus(
          "Tiempo agotado. Intenta de nuevo o escribe la dirección manualmente.",
          "error"
        );
      },
      { enableHighAccuracy: true, timeout: 15000, maximumAge: 0 }
    );
  }

  function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!agreed) {
      showStatus("Acepta el aviso de privacidad.", "error");
      return;
    }

    if (!nombre.trim() || !apPaterno.trim()) {
      showStatus("Completa tu nombre y apellido paterno.", "error");
      return;
    }

    if (!descripcion.trim()) {
      showStatus("Describe el problema antes de enviar.", "error");
      return;
    }

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
      buildWhatsAppMessage({
        nombre,
        apPaterno,
        apMaterno,
        correo,
        telefono,
        tipo,
        descripcion,
        addr,
        geo,
      })
    )}`;

    window.open(url, "_blank", "noopener,noreferrer");

    setNombre("");
    setApPaterno("");
    setApMaterno("");
    setCorreo("");
    setTelefono("");
    setTipo("Fuga de agua");
    setDescripcion("");
    setAddr(ADDR_DEFAULT);
    setGeo(defaultCenter);
    setAgreed(false);
    showStatus("✓ Se abrió WhatsApp con tu reporte. ¡Gracias por reportar!", "info");
  }

  return (
    <div className="container page">
      <h1>Reportar fuga / incidencia</h1>
      <p className="muted">
        Llena el formulario y te abriremos WhatsApp con toda la información lista para enviar.
      </p>

      {statusMessage && (
        <div
          id="statusBox"
          className={`statusBox ${statusType === "error" ? "statusBox--error" : ""}`}
        >
          {statusMessage}
        </div>
      )}

      <form onSubmit={onSubmit} className="reportGrid">
        <div className="card pad">
          <div className="cardH">Datos personales</div>

          <button
            className="btn primary"
            type="button"
            onClick={useMyLocationAndFill}
            disabled={autoFilling}
            style={{ width: "100%", marginTop: 6, marginBottom: 18 }}
          >
            {autoFilling ? "⏳ Obteniendo ubicación..." : "📍 Usar mi ubicación y autocompletar"}
          </button>

          <div className="row3">
            <div>
              <label className="label">Nombre(s) *</label>
              <input
                className="input"
                name="nombre"
                required
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
              />
            </div>
            <div>
              <label className="label">Apellido paterno *</label>
              <input
                className="input"
                name="ap_paterno"
                required
                value={apPaterno}
                onChange={(e) => setApPaterno(e.target.value)}
              />
            </div>
            <div>
              <label className="label">Apellido materno</label>
              <input
                className="input"
                name="ap_materno"
                value={apMaterno}
                onChange={(e) => setApMaterno(e.target.value)}
              />
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
                value={correo}
                onChange={(e) => setCorreo(e.target.value)}
              />
            </div>
            <div>
              <label className="label">Teléfono</label>
              <input
                className="input"
                name="telefono"
                inputMode="tel"
                placeholder="10 dígitos"
                value={telefono}
                onChange={(e) => setTelefono(e.target.value)}
              />
            </div>
          </div>

          <label className="label">Tipo de reporte *</label>
          <select className="input" name="tipo" required value={tipo} onChange={(e) => setTipo(e.target.value)}>
            <option value="Fuga de agua">Fuga de agua</option>
            <option value="Falta de agua">Falta de agua</option>
            <option value="Drenaje">Drenaje</option>
            <option value="Alcantarillado">Alcantarillado</option>
            <option value="Otro">Otro</option>
          </select>

          <label className="label">Descripción del problema *</label>
          <textarea
            className="input"
            name="descripcion"
            rows={4}
            required
            placeholder="Describe dónde y cómo está el problema..."
            value={descripcion}
            onChange={(e) => setDescripcion(e.target.value)}
          />

          <div className="divider" />
          <div className="cardH">Ubicación del problema</div>
          <p className="muted small" style={{ marginBottom: 10 }}>
            Los campos se llenan solos al usar tu ubicación, o escríbelos manualmente.
          </p>

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

          <div className="privacyRow">
            <input id="priv" type="checkbox" checked={agreed} onChange={(e) => setAgreed(e.target.checked)} />
            <label htmlFor="priv" className="muted small">
              He leído y acepto el <a href="/aviso-privacidad"><strong>aviso de privacidad</strong></a>.
            </label>
          </div>

          <button className="btn btnWhatsappSubmit" type="submit">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" style={{ flexShrink: 0 }}>
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
              <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.122 1.532 5.853L.054 23.447a.5.5 0 00.611.61l5.594-1.478A11.95 11.95 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.907 0-3.693-.504-5.235-1.385l-.374-.217-3.878 1.024 1.025-3.767-.228-.386A9.944 9.944 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
            </svg>
            Enviar reporte por WhatsApp
          </button>

          <p className="muted small" style={{ marginTop: 8, lineHeight: 1.5 }}>
            Se abrirá WhatsApp con el mensaje listo. Solo presiona <strong>Enviar</strong> en la app.
          </p>
        </div>

        <div className="card pad">
          <div className="cardH">Localización geográfica</div>
          <p className="muted small" style={{ marginBottom: 10 }}>
            Arrastra el marcador o toca el mapa para afinar el punto exacto.
          </p>
          <MapPicker value={geo} onChange={setGeo} />
          <p className="muted small" style={{ marginTop: 8 }}>
            Coordenadas: {geo.lat.toFixed(5)}, {geo.lng.toFixed(5)}
          </p>
        </div>
      </form>
    </div>
  );
}

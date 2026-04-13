"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { WHATSAPP_NUMBER } from "@/lib/constants";
type BotStep = "home" | "pagar" | "reportar" | "ubicacion" | "contacto" | "lgcg";

export default function OdapasBot() {
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState<BotStep>("home");

  const whatsapp = useMemo(() => {
    const telefono = "5215642275320";
    return {
      pagos: `https://wa.me/${telefono}?text=${encodeURIComponent("Hola, quiero información sobre mi pago del servicio de agua.")}`,
      reporte: `https://wa.me/${telefono}?text=${encodeURIComponent("Hola, quiero reportar una fuga o incidencia.")}`,
      general: `https://wa.me/${telefono}?text=${encodeURIComponent("Hola, necesito información de ODAPAS Temascalcingo.")}`,
    };
  }, []);

  function goHome() {
    setStep("home");
  }

  function closeAndHome() {
    setOpen(false);
    setStep("home");
  }

  return (
    <div className="odapasBotWrap">
      {open ? (
        <div className="odapasBotPanel" role="dialog" aria-label="Asistente ODAPAS">
          <div className="odapasBotHeader">
            <div className="odapasBotHeaderInfo">
              <img src="/mascota-odapas.png" alt="Mascota ODAPAS" className="odapasBotHeaderMascot" />
              <div>
                <div className="odapasBotTitle">Asistente ODAPAS</div>
                <div className="odapasBotSubtitle">Respuestas rápidas con botones</div>
              </div>
            </div>

            <button type="button" className="odapasBotClose" onClick={closeAndHome} aria-label="Cerrar asistente">
              ×
            </button>
          </div>

          <div className="odapasBotBody">
            {step === "home" ? (
              <>
                <div className="odapasBotBubble botBubbleMascot">
                  👋 Hola, soy el asistente de ODAPAS Temascalcingo.
                </div>
                <div className="odapasBotBubble">¿En qué te ayudo hoy?</div>

                <div className="odapasBotActions">
                  <button type="button" onClick={() => setStep("pagar")}>💳 Pagar</button>
                  <button type="button" onClick={() => setStep("reportar")}>🚰 Reportar fuga</button>
                  <button type="button" onClick={() => setStep("ubicacion")}>📍 Ubicación</button>
                  <button type="button" onClick={() => setStep("contacto")}>☎ Contacto</button>
                  <button type="button" onClick={() => setStep("lgcg")}>📄 LGCG</button>
                </div>
              </>
            ) : null}

            {step === "pagar" ? (
              <>
                <div className="odapasBotBubble">Te ayudo con el proceso de pago. Puedes ver los datos bancarios o mandar tu comprobante por WhatsApp.</div>
                <div className="odapasBotActions">
                  <Link href="/pagar" onClick={closeAndHome}>Ir a pagar</Link>
                  <a href={whatsapp.pagos} target="_blank" rel="noopener noreferrer">WhatsApp pagos</a>
                  <button type="button" onClick={goHome}>Volver</button>
                </div>
              </>
            ) : null}

            {step === "reportar" ? (
              <>
                <div className="odapasBotBubble">Puedes entrar al formulario con mapa o reportar directo por WhatsApp.</div>
                <div className="odapasBotActions">
                  <Link href="/reportar" onClick={closeAndHome}>Ir a reportar</Link>
                  <a href={whatsapp.reporte} target="_blank" rel="noopener noreferrer">WhatsApp reporte</a>
                  <button type="button" onClick={goHome}>Volver</button>
                </div>
              </>
            ) : null}

            {step === "ubicacion" ? (
              <>
                <div className="odapasBotBubble">Aquí puedes ver la ubicación oficial y los canales de atención.</div>
                <div className="odapasBotActions">
                  <Link href="/ubicaciones" onClick={closeAndHome}>Ver ubicación</Link>
                  <Link href="/contacto" onClick={closeAndHome}>Ver contacto</Link>
                  <button type="button" onClick={goHome}>Volver</button>
                </div>
              </>
            ) : null}

            {step === "contacto" ? (
              <>
                <div className="odapasBotBubble">Puedes usar la página de contacto o escribir al WhatsApp oficial.</div>
                <div className="odapasBotActions">
                  <Link href="/contacto" onClick={closeAndHome}>Ir a contacto</Link>
                  <a href={whatsapp.general} target="_blank" rel="noopener noreferrer">Abrir WhatsApp</a>
                  <button type="button" onClick={goHome}>Volver</button>
                </div>
              </>
            ) : null}

            {step === "lgcg" ? (
              <>
                <div className="odapasBotBubble">La información de LGCG está en el menú superior dentro de Información. También puedes entrar a Transparencia.</div>
                <div className="odapasBotActions">
                  <Link href="/transparencia" onClick={closeAndHome}>Ir a transparencia</Link>
                  <button type="button" onClick={goHome}>Volver</button>
                </div>
              </>
            ) : null}
          </div>
        </div>
      ) : null}

      <button type="button" className="odapasBotLauncher" onClick={() => setOpen((prev) => !prev)} aria-label="Abrir asistente ODAPAS">
        <img src="/mascota-odapas.png" alt="Mascota ODAPAS" className="odapasBotMascot" />
      </button>
    </div>
  );
}

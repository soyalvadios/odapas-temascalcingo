"use client";

import { useState } from "react";

export default function PagarClient() {
  const telefono = "5215642275320";

  const mensaje = encodeURIComponent(
    "Hola, quiero enviar mi comprobante de pago del servicio de agua."
  );

  const whatsappLink = `https://wa.me/${telefono}?text=${mensaje}`;

  const razonSocial =
    "Organismo Público Descentralizado Municipal para la Prestación de los Servicios de Agua Potable, Drenaje, Alcantarillado y Tratamiento de Aguas Residuales del Municipio de Temascalcingo, Estado de México";

  const banco = "BBVA";
  const cuenta = "0124367731";
  const clabe = "012180001243677314";
  const pagoMensual = "$110.00 MXN";
  const pagoAnual = "$1,320.00 MXN";

  const [copiedField, setCopiedField] = useState<"cuenta" | "clabe" | null>(null);

  const copiarTexto = async (texto: string, field: "cuenta" | "clabe") => {
    try {
      await navigator.clipboard.writeText(texto);
      setCopiedField(field);

      setTimeout(() => {
        setCopiedField(null);
      }, 2000);
    } catch (error) {
      console.error("No se pudo copiar el texto:", error);
      alert("No se pudo copiar automáticamente. Por favor, copia el dato manualmente.");
    }
  };

  return (
    <div className="container page">
      <h1>Pagar</h1>

      <p className="muted">
        Realiza tu pago mediante transferencia bancaria y envía tu comprobante por
        WhatsApp para su validación.
      </p>

      <div className="grid2">
        <div className="card pad">
          <div className="cardH">Datos para transferencia</div>

          <p>
            <strong>Razón social:</strong> {razonSocial}
          </p>

          <p>
            <strong>Banco:</strong> {banco}
          </p>

          <p style={{ marginBottom: 8 }}>
            <strong>Número de cuenta:</strong> {cuenta}
          </p>

          <button
            type="button"
            className="btn"
            onClick={() => copiarTexto(cuenta, "cuenta")}
            style={{ marginBottom: 14 }}
          >
            {copiedField === "cuenta" ? "Cuenta copiada" : "Copiar número de cuenta"}
          </button>

          <p style={{ marginBottom: 8 }}>
            <strong>CLABE:</strong> {clabe}
          </p>

          <button
            type="button"
            className="btn"
            onClick={() => copiarTexto(clabe, "clabe")}
            style={{ marginBottom: 14 }}
          >
            {copiedField === "clabe" ? "CLABE copiada" : "Copiar CLABE"}
          </button>

          <p className="muted small" style={{ marginTop: 12 }}>
            Asegúrate de capturar correctamente los datos bancarios antes de realizar
            tu transferencia.
          </p>
        </div>

        <div className="card pad">
          <div className="cardH">Tarifas del servicio</div>

          <div style={{ overflowX: "auto", marginTop: 12 }}>
            <table
              style={{
                width: "100%",
                borderCollapse: "collapse",
                fontSize: "0.95rem",
              }}
            >
              <thead>
                <tr>
                  <th
                    style={{
                      textAlign: "left",
                      padding: "10px",
                      borderBottom: "1px solid #ddd",
                    }}
                  >
                    Concepto
                  </th>
                  <th
                    style={{
                      textAlign: "left",
                      padding: "10px",
                      borderBottom: "1px solid #ddd",
                    }}
                  >
                    Importe
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td
                    style={{
                      padding: "10px",
                      borderBottom: "1px solid #eee",
                    }}
                  >
                    Pago mensual
                  </td>
                  <td
                    style={{
                      padding: "10px",
                      borderBottom: "1px solid #eee",
                      fontWeight: 600,
                    }}
                  >
                    {pagoMensual}
                  </td>
                </tr>
                <tr>
                  <td
                    style={{
                      padding: "10px",
                      borderBottom: "1px solid #eee",
                    }}
                  >
                    Pago anual
                  </td>
                  <td
                    style={{
                      padding: "10px",
                      borderBottom: "1px solid #eee",
                      fontWeight: 600,
                    }}
                  >
                    {pagoAnual}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="muted small" style={{ marginTop: 12 }}>
            Puedes realizar tu pago de manera mensual o cubrir el importe anual
            completo.
          </p>
        </div>

        <div className="card pad">
          <div className="cardH">Importante antes de enviar tu comprobante</div>

          <p>
            <strong>Referencia de pago:</strong> coloca tu <strong>número de contrato</strong>{" "}
            o el <strong>nombre completo del titular</strong> en el concepto o
            referencia de la transferencia.
          </p>

          <p className="muted small" style={{ marginTop: 12 }}>
            Esto ayuda a identificar correctamente tu pago y agiliza el proceso de
            validación.
          </p>

          <p className="muted small" style={{ marginTop: 12 }}>
            <strong>Importante:</strong> el pago será validado manualmente por el
            personal del organismo después de recibir tu comprobante.
          </p>
        </div>

        <div className="card pad cardLink">
          <div className="cardH">Enviar comprobante</div>

          <p className="muted small">
            Si ya realizaste tu transferencia, envía tu comprobante por WhatsApp para
            solicitar la validación de tu pago.
          </p>

          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn whatsappBtn"
            style={{ display: "inline-block", marginTop: 12 }}
          >
            Enviar comprobante por WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}
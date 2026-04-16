import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Consultar adeudo",
  description:
    "Consulta tu adeudo de agua en el portal oficial de ODAPAS Temascalcingo.",
  alternates: {
    canonical: "/consultar",
  },
};
export default function Consultar() {
  const telefono = "5215642275320";
  const mensaje = encodeURIComponent(
    "Hola, quiero consultar mi adeudo. Mi número de contrato es: "
  );
  const whatsappLink = "https://wa.me/" + telefono + "?text=" + mensaje;

  return (
    <div className="container page">
      <h1>Consultar adeudo</h1>
      <p className="muted">
        Para consultar tu adeudo, escríbenos por WhatsApp con tu número de
        contrato y un asesor te responde en horario de atención.
      </p>

      <div className="card pad">
        <div className="cardH">¿Cómo consultar?</div>

        <p className="muted small" style={{ marginTop: 8 }}>
          1. Da clic en el botón de abajo
          <br />
          2. Envía tu número de contrato
          <br />
          3. Un asesor te responde de Lunes a Viernes 9:00 am – 4:00 pm
        </p>

        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="btn whatsappBtn"
          style={{ marginTop: 32, display: "inline-block" }}
        >
          Consultar por WhatsApp
        </a>
      </div>
    </div>
  );
}
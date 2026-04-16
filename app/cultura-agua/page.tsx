import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cultura del agua",
  description:
    "Consulta información y contenidos de cultura del agua de ODAPAS Temascalcingo.",
  alternates: {
    canonical: "/cultura-agua",
  },
};
export default function CulturaAgua() {
  return (
    <div className="container page">
      <h1>Cultura del agua</h1>
      <p className="muted">
        Acciones y recomendaciones para fomentar el uso responsable del agua en el municipio.
      </p>

      <div className="grid3">
        <div className="card pad">
          <div className="badge">Hogar</div>
          <div className="cardH">Consejos de ahorro</div>
          <ul className="bullets">
            <li>Repara fugas en llaves, tuberías y sanitarios.</li>
            <li>Cierra la llave mientras te cepillas los dientes.</li>
            <li>Reutiliza agua cuando sea posible.</li>
            <li>Evita lavar banquetas con manguera.</li>
          </ul>
        </div>

        <div className="card pad">
          <div className="badge">Comunidad</div>
          <div className="cardH">Participación ciudadana</div>
          <ul className="bullets">
            <li>Reporta fugas de agua potable.</li>
            <li>Cuida coladeras, rejillas y drenajes.</li>
            <li>Evita tirar basura en la vía pública.</li>
            <li>Promueve el cuidado del agua en tu colonia.</li>
          </ul>
        </div>

        <div className="card pad">
          <div className="badge">Educación</div>
          <div className="cardH">Cultura ambiental</div>
          <p className="muted small">
            Esta sección puede crecer después con campañas escolares, materiales descargables y actividades comunitarias.
          </p>
        </div>
      </div>
    </div>
  );
}

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "¿Quiénes somos?",
  description:
    "Conoce la misión, funciones e información institucional de ODAPAS Temascalcingo.",
  alternates: {
    canonical: "/quienes-somos",
  },
};
export default function QuienesSomos() {
  return (
    <div className="container page">
      <h1>¿Quiénes somos?</h1>
      <p className="muted">
        ODAPAS Temascalcingo es el organismo municipal responsable de operar y administrar los servicios de
        agua potable, drenaje, alcantarillado y tratamiento de aguas residuales.
      </p>

      <div className="grid2">
        <div className="card pad">
          <div className="cardH">Misión</div>
          <p>
            Prestar con eficiencia, oportunidad, cantidad y calidad los servicios de suministro de agua potable,
            drenaje, alcantarillado y recepción de aguas residuales para su tratamiento, manejo y conducción en el
            municipio; con legalidad y transparencia, brindando sistemas simplificados para el pago y promoviendo el
            uso racional y cuidado del agua.
          </p>
        </div>

        <div className="card pad">
          <div className="cardH">Visión</div>
          <p>
            Administrar y regularizar el sistema de agua potable como una instancia eficaz y eficiente, generando un
            ambiente de tranquilidad y concordia mediante el diálogo y la conciliación, brindando la mejor atención
            en los servicios y trámites del organismo.
          </p>
        </div>
      </div>

      <div className="grid2" style={{ marginTop: 12 }}>
        <div className="card pad">
          <div className="cardH">Atribuciones (resumen)</div>
          <ul className="bullets">
            <li>Operar, mantener y mejorar los sistemas de agua potable, drenaje y alcantarillado.</li>
            <li>Formular y coordinar programas y obras para mejorar los servicios.</li>
            <li>Administrar recursos y proponer cuotas/tarifas conforme a la ley.</li>
            <li>Promover acciones para proteger la calidad del agua y el medio ambiente.</li>
          </ul>
        </div>

        <div className="card pad">
          <div className="cardH">Estructura orgánica (resumen)</div>
          <ul className="bullets">
            <li>Consejo Directivo</li>
            <li>Dirección General</li>
            <li>Auxiliares Administrativos (Brigada y Personal Operativo)</li>
            <li>Dirección de Administración y Finanzas</li>
            <li>Cultura del Agua</li>
          </ul>
        </div>
      </div>

      <div className="card pad" style={{ marginTop: 12 }}>
        <div className="cardH">Organigrama</div>
        <p className="muted small">
          <img src="/organigrama.png" alt="Organigrama de ODAPAS Temascalcingo" style={{ maxWidth: '100%' }} />
        </p>
      </div>
    </div>
  );
}

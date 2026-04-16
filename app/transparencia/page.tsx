import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Transparencia",
  description:
    "Consulta información de transparencia de ODAPAS Temascalcingo.",
  alternates: {
    canonical: "/transparencia",
  },
};

export default function TransparenciaPage() {
  return (
    <div className="container page">
      <h1>Transparencia</h1>
      <p className="muted">
        Consulta accesos directos a información pública, LGCG y documentos institucionales.
      </p>

      <div className="grid3" style={{ marginTop: 18 }}>
        <div className="card pad">
          <div className="badge">LGCG</div>
          <div className="cardH">Reportes y cuenta pública</div>
          <p className="muted small">
            Revisa reportes trimestrales, presupuestos y cuenta pública desde el menú Información &gt; LGCG.
          </p>
        </div>

        <div className="card pad cardLink">
          <div className="badge">Privacidad</div>
          <div className="cardH">Aviso de Privacidad</div>
          <p className="muted small">
            Consulta la versión web y el PDF oficial vigente del aviso de privacidad integral de ODAPAS Temascalcingo.
          </p>
          <Link href="/aviso-privacidad" className="btn">Ver aviso</Link>
        </div>

        <div className="card pad">
          <div className="badge">Datos</div>
          <div className="cardH">Protección de Datos Personales</div>
          <p className="muted small">
            Espacio para publicar lineamientos, derechos ARCO o documentos relacionados.
          </p>
        </div>
      </div>
    </div>
  );
}

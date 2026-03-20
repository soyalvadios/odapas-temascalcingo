import Link from "next/link";

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
            Consulta el aviso de privacidad aplicable a formularios, atención y servicios del portal.
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

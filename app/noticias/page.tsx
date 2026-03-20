export default function NoticiasPage() {
  return (
    <div className="container page">
      <h1>Noticias y avisos</h1>
      <p className="muted">Información sobre trabajos, avisos y actividades del organismo.</p>

      <div className="grid3">
        <div className="card pad">
          <div className="badge">Aviso</div>
          <div className="cardH">Corte programado</div>
          <p className="muted small">Se informará sobre suspensiones temporales del servicio.</p>
        </div>

        <div className="card pad">
          <div className="badge">Obra</div>
          <div className="cardH">Reparación de fugas</div>
          <p className="muted small">Información sobre trabajos de mantenimiento en la red hidráulica.</p>
        </div>

        <div className="card pad">
          <div className="badge">Comunidad</div>
          <div className="cardH">Cultura del agua</div>
          <p className="muted small">Campañas y actividades para fomentar el cuidado del agua.</p>
        </div>
      </div>
    </div>
  );
}

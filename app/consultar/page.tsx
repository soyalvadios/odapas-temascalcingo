export default function Consultar(){
  return (
    <div className="container page">
      <h1>Consultar</h1>
      <p className="muted">Consulta de adeudo/pagos</p>
      <div className="card pad">
        <label className="label">Número de cuenta / contrato</label>
        <input className="input" placeholder="Ej. 00012345" />
        <div className="mapToolRow" style={{marginTop:12}}>
          <button className="btn primary">Consultar</button>
        </div>
      </div>
    </div>
  )
}

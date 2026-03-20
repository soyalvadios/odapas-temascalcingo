export default function CulturaAgua(){

  return (
    <div className="container page">

      <h1>Cultura del agua</h1>

      <p className="muted">
        Recomendaciones para el cuidado responsable del agua.
      </p>

      <div className="grid3">

        <div className="card pad">

          <div className="badge">Hogar</div>

          <div className="cardH">
            Ahorro de agua
          </div>

          <ul>
            <li>Reparar fugas domésticas.</li>
            <li>Cerrar la llave al cepillarse.</li>
            <li>Reutilizar agua cuando sea posible.</li>
          </ul>

        </div>

        <div className="card pad">

          <div className="badge">Comunidad</div>

          <div className="cardH">
            Participación ciudadana
          </div>

          <ul>
            <li>Reportar fugas.</li>
            <li>No tirar basura en drenajes.</li>
            <li>Promover el cuidado del agua.</li>
          </ul>

        </div>

        <div className="card pad">

          <div className="badge">Educación</div>

          <div className="cardH">
            Programas educativos
          </div>

          <p className="muted small">
            Actividades escolares y campañas comunitarias.
          </p>

        </div>

      </div>

    </div>
  )

}


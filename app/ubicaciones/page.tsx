import Link from "next/link";

export default function UbicacionesPage() {
  return (
    <div className="container page">
      <h1>Ubicación</h1>
      <p className="muted">Dirección y ubicación del organismo operador de agua.</p>

      <div className="grid2">
        <div className="card pad">
          <div className="cardH">Oficina principal</div>
          <p>
            Centro Cultural “José Manzur Mondragón”, Cruz Ruiz Manzana 016, Temascalcingo,
            50400 Temascalcingo de José María Velasco, Méx.
          </p>
          <p className="muted small">Consulta ubicación, horarios y medios de atención.</p>
          <div className="quickActions" style={{ marginTop: 12 }}>
            <Link href="/contacto" className="btn">Ver contacto</Link>
            <a className="btn" href="https://maps.google.com/?q=19.9163957,-100.0046592" target="_blank" rel="noopener noreferrer">
              Abrir en Google Maps
            </a>
          </div>
        </div>

        <div className="card pad">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15004.760092225246!2d-100.0046592!3d19.9163957!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d2fb9e5a170b49%3A0xb7cfb2421dc205d7!2sCentro%20Integrador%20%22SERVIDORES%20DE%20LA%20NACI%C3%93N%22!5e0!3m2!1ses-419!2smx!4v1773329681312!5m2!1ses-419!2smx"
            width="100%"
            height="420"
            style={{ border: 0, borderRadius: 12 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Ubicación de ODAPAS Temascalcingo"
          />
        </div>
      </div>
    </div>
  );
}

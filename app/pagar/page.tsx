export default function Pagar() {
  const telefono = "5212207402561";
  const mensaje = encodeURIComponent(
    "Hola, quiero enviar mi comprobante de pago del servicio de agua."
  );
  const whatsappLink = `https://wa.me/${telefono}?text=${mensaje}`;

  return (
    <div className="container page">
      <h1>Pagar</h1>
      <p className="muted">
        Aquí va información bancaria y el flujo para enviar comprobante por WhatsApp.
      </p>

      <div className="grid2">
        <div className="card pad">
          <div className="cardH">Datos para transferencia</div>
          <p><strong>Razón social:</strong> (pendiente)</p>
          <p><strong>Banco:</strong> (pendiente)</p>
          <p><strong>Cuenta:</strong> (pendiente)</p>
          <p><strong>CLABE:</strong> (pendiente)</p>
          <p className="muted small" style={{ marginTop: 12 }}>
            Una vez que realices tu transferencia, envía tu comprobante por WhatsApp.
          </p>
        </div>

        <div className="card pad cardLink">
          <div className="cardH">Enviar comprobante</div>
          <p className="muted small">
            Si ya realizaste el pago, utiliza el botón para mandar tu comprobante y solicitar validación.
          </p>

          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn whatsappBtn"
          >
            Enviar comprobante por WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}

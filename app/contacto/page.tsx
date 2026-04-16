import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contacto",
  description:
    "Consulta los medios de contacto oficiales de ODAPAS Temascalcingo.",
  alternates: {
    canonical: "/contacto",
  },
};
export default function Contacto(){
  return (
    <div className="container page">
      <h1>Contacto</h1>
      <div className="card pad">
        <label className="label">Nombre</label>
        <input className="input" />
        <label className="label">Correo</label>
        <input className="input" type="email" />
        <label className="label">Mensaje</label>
        <textarea className="input" rows={5} />
        <div className="mapToolRow" style={{marginTop:12}}>
          <button className="btn primary">Enviar</button>
        </div>
      </div>
    </div>
  )
}

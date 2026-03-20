import Link from "next/link";
import HeroRotator from "@/components/HeroRotator";

export default function HomePage() {
  return (
    <div>
      <HeroRotator />

      <section className="container page">
        <div className="sectionHead">
          <h2>Servicios principales</h2>
          <p className="muted">Accesos rápidos para trámites, reportes y atención ciudadana.</p>
        </div>

        <div className="grid3">
          <div className="card pad cardLink">
            <div className="badge">Servicio</div>
            <div className="cardH">Pago en línea</div>
            <p className="muted small">Consulta la información para realizar tu pago y enviar comprobante.</p>
            <Link href="/pagar" className="btn primary">Ir a pagar</Link>
          </div>

          <div className="card pad cardLink">
            <div className="badge">Atención</div>
            <div className="cardH">Reportar fuga o incidencia</div>
            <p className="muted small">Envía reportes de fugas, falta de agua, drenaje o alcantarillado.</p>
            <Link href="/reportar" className="btn primary">Hacer reporte</Link>
          </div>

          <div className="card pad cardLink">
            <div className="badge">Consulta</div>
            <div className="cardH">Consultar adeudo</div>
            <p className="muted small">Revisa tu referencia o número de cuenta para seguimiento.</p>
            <Link href="/consultar" className="btn primary">Consultar</Link>
          </div>
        </div>
      </section>

      <section className="container page pageTight">
        <div className="sectionHead">
          <h2>Información institucional</h2>
          <p className="muted">Consulta información pública, documentos y acciones del organismo.</p>
        </div>

        <div className="grid3">
          <div className="card pad cardLink">
            <div className="badge">Institucional</div>
            <div className="cardH">¿Quiénes somos?</div>
            <p className="muted small">Conoce la misión, visión y atribuciones de ODAPAS Temascalcingo.</p>
            <Link href="/quienes-somos" className="btn">Ver información</Link>
          </div>

          <div className="card pad cardLink">
            <div className="badge">Transparencia</div>
            <div className="cardH">LGCG y acceso público</div>
            <p className="muted small">Accede a reportes, presupuestos, cuenta pública y aviso de privacidad.</p>
            <Link href="/transparencia" className="btn">Ir a transparencia</Link>
          </div>

          <div className="card pad cardLink">
            <div className="badge">Comunidad</div>
            <div className="cardH">Cultura del agua</div>
            <p className="muted small">Recomendaciones y acciones para el cuidado responsable del agua.</p>
            <Link href="/cultura-agua" className="btn">Ver contenido</Link>
          </div>
        </div>
      </section>

      <section className="container page pageTight">
        <div className="sectionHead">
          <h2>Noticias y avisos</h2>
          <p className="muted">Mantente al tanto de avisos, trabajos y campañas del organismo.</p>
        </div>

        <div className="grid3">
          <div className="card pad">
            <div className="badge">Aviso</div>
            <div className="cardH">Cortes programados o mantenimiento</div>
            <p className="muted small">Publica aquí avisos oficiales sobre suspensión temporal del servicio.</p>
          </div>

          <div className="card pad">
            <div className="badge">Obras</div>
            <div className="cardH">Trabajos y acciones del organismo</div>
            <p className="muted small">Espacio para informar reparaciones, ampliaciones y mejoras.</p>
          </div>

          <div className="card pad cardLink">
            <div className="badge">Portal</div>
            <div className="cardH">Ver todas las noticias</div>
            <p className="muted small">Consulta comunicados, campañas y publicaciones recientes.</p>
            <Link href="/noticias" className="btn">Ir a noticias</Link>
          </div>
        </div>
      </section>

      <section className="container page pageTight">
        <div className="quickActions">
          <Link href="/reportar" className="btn primary">Reportar fuga</Link>
          <Link href="/pagar" className="btn">Pago en línea</Link>
          <Link href="/contacto" className="btn">Contacto</Link>
          <Link href="/ubicaciones" className="btn">Ubicación oficial</Link>
        </div>
      </section>
    </div>
  );
}

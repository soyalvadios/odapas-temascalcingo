import Link from "next/link";
import HeroRotator from "@/components/HeroRotator";
import { AnimOnScroll } from "@/hooks/useInView";
import { WHATSAPP_URL } from "@/lib/constants";

export default function HomePage() {
  return (
    <div>
      <HeroRotator />

      {/* Barra accesos rapidos movil */}
      <section className="mobileQuickBar">
        <Link href="/reportar" className="mqbItem mqbItem--primary">
          <span className="mqbIcon">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
          </span>
          <span className="mqbLabel">Reportar</span>
        </Link>
        <Link href="/pagar" className="mqbItem">
          <span className="mqbIcon">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><rect x="1" y="4" width="22" height="16" rx="2"/><line x1="1" y1="10" x2="23" y2="10"/></svg>
          </span>
          <span className="mqbLabel">Pagar</span>
        </Link>
        <Link href="/consultar" className="mqbItem">
          <span className="mqbIcon">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
          </span>
          <span className="mqbLabel">Consultar</span>
        </Link>
        <Link href="/contacto" className="mqbItem">
          <span className="mqbIcon">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.6 19.79 19.79 0 01.03 2.02 2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92z"/></svg>
          </span>
          <span className="mqbLabel">Contacto</span>
        </Link>
      </section>

      {/* Servicios principales */}
      <section className="container page">
        <AnimOnScroll>
          <div className="sectionHead">
            <h2>Servicios principales</h2>
            <p className="muted">Trámites, reportes y atención ciudadana.</p>
          </div>
        </AnimOnScroll>

        <div className="serviceGrid">
          <AnimOnScroll delay={0}>
            <Link href="/pagar" className="serviceCard serviceCard--blue">
              <span className="serviceCard__icon">
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="1" y="4" width="22" height="16" rx="2"/><line x1="1" y1="10" x2="23" y2="10"/></svg>
              </span>
              <span className="serviceCard__title">Pago en línea</span>
              <span className="serviceCard__desc">Transfiere y envía comprobante</span>
            </Link>
          </AnimOnScroll>

          <AnimOnScroll delay={80}>
            <Link href="/reportar" className="serviceCard serviceCard--red">
              <span className="serviceCard__icon">
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
              </span>
              <span className="serviceCard__title">Reportar fuga</span>
              <span className="serviceCard__desc">Fugas, drenaje, alcantarillado</span>
            </Link>
          </AnimOnScroll>

          <AnimOnScroll delay={160}>
            <Link href="/consultar" className="serviceCard serviceCard--teal">
              <span className="serviceCard__icon">
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
              </span>
              <span className="serviceCard__title">Consultar adeudo</span>
              <span className="serviceCard__desc">Número de contrato</span>
            </Link>
          </AnimOnScroll>

          <AnimOnScroll delay={240}>
            <Link href="/ubicaciones" className="serviceCard serviceCard--gray">
              <span className="serviceCard__icon">
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
              </span>
              <span className="serviceCard__title">Ubicación</span>
              <span className="serviceCard__desc">Oficina y horarios</span>
            </Link>
          </AnimOnScroll>
        </div>
      </section>

      {/* Informacion institucional */}
      <section className="container pageTight">
        <AnimOnScroll>
          <div className="sectionHead">
            <h2>Información institucional</h2>
            <p className="muted">Documentos y acciones del organismo.</p>
          </div>
        </AnimOnScroll>

        <div className="infoGrid">
          <AnimOnScroll delay={0}>
            <Link href="/quienes-somos" className="infoCard">
              <span className="infoCard__title">¿Quiénes somos?</span>
              <span className="infoCard__arrow">→</span>
            </Link>
          </AnimOnScroll>
          <AnimOnScroll delay={60}>
            <Link href="/transparencia" className="infoCard">
              <span className="infoCard__title">LGCG y transparencia</span>
              <span className="infoCard__arrow">→</span>
            </Link>
          </AnimOnScroll>
          <AnimOnScroll delay={120}>
            <Link href="/cultura-agua" className="infoCard">
              <span className="infoCard__title">Cultura del agua</span>
              <span className="infoCard__arrow">→</span>
            </Link>
          </AnimOnScroll>
          <AnimOnScroll delay={180}>
            <Link href="/noticias" className="infoCard">
              <span className="infoCard__title">Noticias y avisos</span>
              <span className="infoCard__arrow">→</span>
            </Link>
          </AnimOnScroll>
        </div>
      </section>

      {/* Noticias solo desktop */}
      <section className="container page pageTight desktopOnly">
        <AnimOnScroll>
          <div className="sectionHead">
            <h2>Noticias y avisos</h2>
            <p className="muted">Mantente al tanto de avisos, trabajos y campañas.</p>
          </div>
        </AnimOnScroll>
        <div className="grid3">
          <AnimOnScroll delay={0}>
            <div className="card pad">
              <div className="badge">Aviso</div>
              <div className="cardH">Cortes programados o mantenimiento</div>
              <p className="muted small">Avisos sobre suspensión temporal del servicio.</p>
            </div>
          </AnimOnScroll>
          <AnimOnScroll delay={80}>
            <div className="card pad">
              <div className="badge">Obras</div>
              <div className="cardH">Trabajos y acciones del organismo</div>
              <p className="muted small">Reparaciones, ampliaciones y mejoras.</p>
            </div>
          </AnimOnScroll>
          <AnimOnScroll delay={160}>
            <div className="card pad cardLink">
              <div className="badge">Portal</div>
              <div className="cardH">Ver todas las noticias</div>
              <p className="muted small">Comunicados y publicaciones recientes.</p>
              <Link href="/noticias" className="btn">Ir a noticias</Link>
            </div>
          </AnimOnScroll>
        </div>
      </section>

      {/* Contacto rapido */}
      <section className="container page pageTight">
        <AnimOnScroll>
          <div className="contactStrip">
            <div className="contactStrip__item">
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.6 19.79 19.79 0 01.03 2.02 2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92z"/></svg>
              <a href="tel:+5215642275320" className="contactStrip__link">5215642275320</a>
            </div>
            <div className="contactStrip__divider" />
            <div className="contactStrip__item">
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
              <a href="/ubicaciones" className="contactStrip__link">Ver ubicación</a>
            </div>
            <div className="contactStrip__divider" />
            <div className="contactStrip__item">
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#25D366" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"/></svg>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="contactStrip__link contactStrip__link--wa">WhatsApp</a>
            </div>
          </div>
        </AnimOnScroll>
      </section>

      {/* quickActions desktop */}
      <section className="container pageTight desktopOnly" style={{ paddingBottom: 32 }}>
        <AnimOnScroll>
          <div className="quickActions">
            <Link href="/reportar" className="btn primary">Reportar fuga</Link>
            <Link href="/pagar" className="btn">Pago en línea</Link>
            <Link href="/contacto" className="btn">Contacto</Link>
            <Link href="/ubicaciones" className="btn">Ubicación oficial</Link>
          </div>
        </AnimOnScroll>
      </section>
    </div>
  );
}

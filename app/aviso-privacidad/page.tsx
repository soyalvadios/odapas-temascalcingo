import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Aviso de privacidad",
  description:
    "Consulta el aviso de privacidad simplificado de ODAPAS Temascalcingo.",
  alternates: {
    canonical: "/aviso-privacidad",
  },
};
const finalidadesPrincipales = [
  "Alta y baja de tomas de agua.",
  "Instalación o reubicación de tomas de agua y conexiones de drenaje.",
  "Ajuste de cuenta, inspecciones, convenios y certificados de no adeudo.",
  "Atención de quejas, denuncias, sugerencias y seguimiento a trámites.",
  "Cobros y descuentos por servicios de agua potable, drenaje, alcantarillado y tratamiento de aguas residuales.",
];

const datosParticulares = [
  "Nombre y domicilio.",
  "Credencial de elector.",
  "Número telefónico.",
  "RFC y CURP.",
  "Firma.",
  "Geolocalización.",
  "Fecha de nacimiento.",
  "Correo electrónico.",
  "Número de cuenta registrado en el padrón de usuarios.",
  "Documentos comprobatorios de identidad y datos declarados.",
];

const derechosArco = [
  "Acceso: conocer qué datos personales tiene el organismo y para qué se usan.",
  "Rectificación: solicitar corrección cuando la información sea inexacta, incompleta o desactualizada.",
  "Cancelación: pedir la eliminación cuando considere que el tratamiento no se apega a la ley.",
  "Oposición: negarse al uso de sus datos para finalidades específicas.",
];

export default function AvisoPrivacidad() {
  return (
    <div className="container page privacyPage">
      <section className="privacyHero card">
        <div className="badge">Protección de datos</div>
        <h1>Aviso de privacidad simplificado</h1>
        <p className="muted privacyLead">
          Consulta la versión vigente del aviso de privacidad del Organismo Público Descentralizado Municipal
          para la Prestación de los Servicios de Agua Potable, Drenaje, Alcantarillado y Tratamiento de Aguas
          Residuales del Municipio de Temascalcingo (ODAPAS).
        </p>

        <div className="privacyHero__actions">
          <a
            href="/docs/aviso-privacidad-simplificado-odapas-temascalcingo-2026.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="btn primary"
          >
            Ver PDF oficial
          </a>
          <a
            href="/docs/aviso-privacidad-simplificado-odapas-temascalcingo-2026.pdf"
            download
            className="btn"
          >
            Descargar PDF
          </a>
        </div>

        <div className="privacyMeta">
          <div className="privacyMeta__item">
            <span className="privacyMeta__label">Versión publicada</span>
            <strong>Abril 2026</strong>
          </div>
          <div className="privacyMeta__item">
            <span className="privacyMeta__label">Responsable</span>
            <strong>ODAPAS Temascalcingo</strong>
          </div>
          <div className="privacyMeta__item">
            <span className="privacyMeta__label">Atención</span>
            <strong>Unidad de Transparencia y Dirección General</strong>
          </div>
        </div>
      </section>

      <section className="grid2 privacyTopGrid">
        <article className="card privacyCard">
          <h2>¿A quién va dirigido?</h2>
          <p>
            A personas servidoras públicas del organismo, particulares e instituciones que participen en algún
            trámite, programa, servicio o relación institucional con ODAPAS Temascalcingo.
          </p>
          <p className="muted small">
            El aviso informa cómo se recaban, usan, resguardan y, en su caso, transfieren los datos personales.
          </p>
        </article>

        <article className="card privacyCard">
          <h2>Responsable del tratamiento</h2>
          <p>
            <strong>Organismo Público Descentralizado Municipal para la Prestación de los Servicios de Agua
            Potable, Drenaje, Alcantarillado y Tratamiento de Aguas Residuales del Municipio de Temascalcingo.</strong>
          </p>
          <ul className="bullets privacyBullets">
            <li><strong>Administrador:</strong> Amador Flores Martínez.</li>
            <li><strong>Cargo:</strong> Director General.</li>
            <li><strong>Correo:</strong> odapas@temascalcingo.gob.mx</li>
            <li><strong>Teléfono:</strong> 718 126 06 51</li>
          </ul>
        </article>
      </section>

      <section className="privacySection">
        <div className="sectionHead">
          <h2>Datos personales que pueden recabarse</h2>
          <p className="muted">El tratamiento depende del trámite, servicio o procedimiento solicitado.</p>
        </div>

        <div className="grid3 privacyInfoGrid">
          <article className="card privacyCard">
            <div className="badge">Particulares</div>
            <ul className="bullets privacyBullets">
              {datosParticulares.map((dato) => (
                <li key={dato}>{dato}</li>
              ))}
            </ul>
          </article>

          <article className="card privacyCard">
            <div className="badge">Servidores públicos</div>
            <ul className="bullets privacyBullets">
              <li>Nombre, CURP, RFC y número de credencial de elector.</li>
              <li>Género, edad y estado civil.</li>
              <li>Localidad, municipio y entidad federativa.</li>
              <li>Domicilio, teléfono y código postal.</li>
            </ul>
          </article>

          <article className="card privacyCard">
            <div className="badge">Personas jurídico colectivas</div>
            <ul className="bullets privacyBullets">
              <li>Razón social.</li>
              <li>Acta constitutiva y representatividad.</li>
              <li>Localidad, municipio y entidad federativa.</li>
              <li>Domicilio, correo electrónico, teléfono y código postal.</li>
            </ul>
          </article>
        </div>

        <div className="privacyNotice card">
          <strong>Dato relevante:</strong> el organismo también cuenta con sistema de videovigilancia interior para
          fines de seguridad, administración, control, vigilancia y sanción conforme a las disposiciones aplicables.
        </div>
      </section>

      <section className="privacySection grid2">
        <article className="card privacyCard">
          <h2>Finalidades principales</h2>
          <ul className="bullets privacyBullets">
            {finalidadesPrincipales.map((finalidad) => (
              <li key={finalidad}>{finalidad}</li>
            ))}
          </ul>
        </article>

        <article className="card privacyCard">
          <h2>Finalidades complementarias</h2>
          <ul className="bullets privacyBullets">
            <li>Generación de estadísticas y control interno del organismo.</li>
            <li>Seguimiento a orientaciones, asesorías, quejas y asuntos planteados.</li>
            <li>Verificaciones e inspecciones en inmuebles relacionados con el trámite o servicio.</li>
            <li>Integración de evidencia fotográfica cuando sea necesaria para el expediente o transparencia institucional.</li>
          </ul>
        </article>
      </section>

      <section className="privacySection grid2">
        <article className="card privacyCard">
          <h2>Transferencias y negativa al tratamiento</h2>
          <p>
            De manera general, los datos personales son considerados información confidencial. Únicamente podrán
            transferirse en los supuestos previstos por la ley.
          </p>
          <p>
            Si la persona titular decide no proporcionar los datos necesarios, podría quedar imposibilitada para
            realizar el trámite, servicio o registro correspondiente.
          </p>
          <p className="muted small">
            También pueden utilizarse datos disociados para fines estadísticos y de control.
          </p>
        </article>

        <article className="card privacyCard">
          <h2>Derechos ARCO</h2>
          <ul className="bullets privacyBullets">
            {derechosArco.map((derecho) => (
              <li key={derecho}>{derecho}</li>
            ))}
          </ul>
          <p>
            Las solicitudes pueden presentarse a través de SARCOEM y de la Plataforma Nacional de Transparencia,
            o directamente ante la Unidad de Transparencia del Ayuntamiento de Temascalcingo.
          </p>
        </article>
      </section>

      <section className="privacySection grid2">
        <article className="card privacyCard">
          <h2>Revocación del consentimiento</h2>
          <p>
            Cuando legalmente proceda, la revocación debe presentarse mediante escrito libre dirigido a la Unidad
            de Transparencia, indicando nombre completo, sistema de datos personales, datos sobre los que se revoca
            el consentimiento, manifestación de conocimiento de consecuencias y firma autógrafa o huella digital.
          </p>
          <p>
            Después de presentar el escrito, la persona titular debe comparecer ante el organismo dentro del plazo
            indicado en el aviso oficial para ratificar su voluntad.
          </p>
        </article>

        <article className="card privacyCard">
          <h2>Contacto y orientación</h2>
          <ul className="bullets privacyBullets">
            <li><strong>Domicilio de ODAPAS:</strong> Av. de La Paz s/n, esquina Miguel Hidalgo (Ex Seminario), Col. Centro, Temascalcingo, Estado de México, C.P. 50400.</li>
            <li><strong>Unidad de Transparencia:</strong> Av. de La Paz, esquina Miguel Hidalgo (Ex Seminario), Col. Centro, Estado de México, C.P. 50400. Tel. 718 126 0145.</li>
            <li><strong>INFOEM:</strong> 722 226 19 80 y 800 821 04 41.</li>
            <li><strong>Portal informativo:</strong> infoem.org.mx</li>
            <li><strong>Correo del CAT:</strong> cat@infoem.org.mx</li>
          </ul>
        </article>
      </section>

      <section className="card privacyFooterCard">
        <div>
          <h2>Consulta la versión simplificada vigente</h2>
          <p className="muted">
            Esta página presenta una versión web de consulta rápida. Para efectos formales, legales y de impresión,
            revisa el documento completo publicado por el organismo.
          </p>
        </div>

        <div className="privacyFooterCard__actions">
          <a
            href="/docs/aviso-privacidad-simplificado-odapas-temascalcingo-2026.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="btn primary"
          >
            Abrir documento oficial
          </a>
          <Link href="/transparencia" className="btn">
            Volver a Transparencia
          </Link>
        </div>
      </section>
    </div>
  );
}

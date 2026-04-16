import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Noticias y trabajos",
  description:
    "Consulta noticias, trabajos, avisos y acciones de ODAPAS Temascalcingo.",
  alternates: {
    canonical: "/noticias",
  },
};
const fotosTrabajo = [
  "/noticias/trabajos-odapas-1.png",
  "/noticias/trabajos-odapas-2.png",
  "/noticias/trabajos-odapas-3.png",
  "/noticias/trabajos-odapas-4.png",
];

export default function NoticiasPage() {
  return (
    <div className="container page newsPage">
      <section className="newsHero card">
        <div className="badge">Noticias y avisos</div>
        <h1>Trabajos, avisos y actividades del organismo</h1>
        <p className="muted newsLead">
          Publicaciones informativas sobre acciones operativas, atención a la ciudadanía, mantenimiento y
          seguimiento de servicios de ODAPAS Temascalcingo.
        </p>
      </section>

      <section className="grid3 newsTopCards">
        <article className="card pad">
          <div className="badge">Avisos</div>
          <div className="cardH">Comunicados de servicio</div>
          <p className="muted small">
            Espacio para informar cortes programados, mantenimiento preventivo y avisos generales a la población.
          </p>
        </article>

        <article className="card pad">
          <div className="badge">Trabajos</div>
          <div className="cardH">Acciones operativas del organismo</div>
          <p className="muted small">
            Reparación, limpieza, inspección, desazolve, mantenimiento y atención en campo.
          </p>
        </article>

        <article className="card pad">
          <div className="badge">Comunidad</div>
          <div className="cardH">Información institucional</div>
          <p className="muted small">
            Publicaciones sobre actividades, campañas y acciones que fortalecen el servicio y la atención ciudadana.
          </p>
        </article>
      </section>

      <section className="newsArticle card">
        <div className="newsArticle__header">
          <div>
            <div className="badge">Trabajos</div>
            <h2>Trabajos de atención y operación en campo</h2>
            <p className="muted">
              Registro fotográfico de personal operativo y unidad especializada durante maniobras de atención,
              revisión y ejecución de trabajos del organismo en Temascalcingo.
            </p>
          </div>
          <div className="newsMeta">
            <span className="newsMeta__pill">ODAPAS Temascalcingo</span>
            <span className="newsMeta__pill">Trabajo en sitio</span>
          </div>
        </div>

        <div className="newsGallery">
          {fotosTrabajo.map((src, index) => (
            <figure key={src} className="newsGallery__item">
              <Image
                src={src}
                alt={`Trabajo operativo de ODAPAS Temascalcingo en campo, fotografía ${index + 1}`}
                width={1600}
                height={1200}
                className="newsGallery__image"
              />
            </figure>
          ))}
        </div>

        <div className="grid2 newsDetailGrid">
          <article className="card newsMiniCard">
            <h3>Descripción</h3>
            <p>
              Las imágenes muestran labores operativas con personal en sitio y unidad especializada, como parte de
              los trabajos de atención, revisión y seguimiento de acciones del organismo.
            </p>
          </article>
          <article className="card newsMiniCard">
            <h3>Objetivo de publicación</h3>
            <p>
              Informar a la ciudadanía sobre los trabajos realizados por ODAPAS Temascalcingo y documentar acciones
              institucionales de servicio y mantenimiento.
            </p>
          </article>
        </div>
      </section>
    </div>
  );
}

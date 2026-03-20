"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const slides = [
  {
    id: 1,
    image: "/slides/slide1.jpg",
    badge: "Atención ciudadana",
    title: "ODAPAS Temascalcingo",
    text: "Portal informativo y de atención para consulta, pagos, reportes y servicios municipales relacionados con agua potable.",
    buttonText: "Reportar incidencia",
    buttonLink: "/reportar",
  },
  {
    id: 2,
    image: "/slides/slide1.png",
    badge: "Servicios",
    title: "Consulta y pago de servicios",
    text: "Accede a información del organismo, realiza trámites y conoce los medios disponibles para atención ciudadana.",
    buttonText: "Ir a pagar",
    buttonLink: "/pagar",
  },
  {
    id: 3,
    image: "/slides/slide3.jpg",
    badge: "Ubicación",
    title: "Ubicación y contacto",
    text: "Consulta la dirección oficial, horarios de atención y canales disponibles para comunicarte con ODAPAS Temascalcingo.",
    buttonText: "Ver ubicación",
    buttonLink: "/ubicaciones",
  },
];

export default function HeroRotator() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  function goToSlide(index: number) {
    setCurrent(index);
  }

  function prevSlide() {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  }

  function nextSlide() {
    setCurrent((prev) => (prev + 1) % slides.length);
  }

  const activeSlide = slides[current];

  return (
    <section className="heroRotator" aria-label="Banner principal">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`heroSlide ${index === current ? "active" : ""}`}
          style={{ backgroundImage: `url(${slide.image})` }}
          aria-hidden={index !== current}
        >
          <div className="heroSlideOverlay" />
        </div>
      ))}

      <div className="container heroRotatorContent">
        <div className="heroRotatorInner">
          {activeSlide.badge ? <div className="badge heroBadge">{activeSlide.badge}</div> : null}

          <h1 className="heroTitle">{activeSlide.title}</h1>
          <p className="heroText">{activeSlide.text}</p>

          <div className="heroActions">
            <Link href={activeSlide.buttonLink} className="btn primary">
              {activeSlide.buttonText}
            </Link>

            <Link href="/contacto" className="btn">
              Contacto
            </Link>
          </div>
        </div>
      </div>

      <button
        className="heroArrow heroArrowLeft"
        onClick={prevSlide}
        aria-label="Imagen anterior"
        type="button"
      >
        ‹
      </button>

      <button
        className="heroArrow heroArrowRight"
        onClick={nextSlide}
        aria-label="Siguiente imagen"
        type="button"
      >
        ›
      </button>

      <div className="heroDots" role="tablist" aria-label="Diapositivas del banner">
        {slides.map((slide, index) => (
          <button
            key={slide.id}
            type="button"
            className={`heroDot ${index === current ? "active" : ""}`}
            onClick={() => goToSlide(index)}
            aria-label={`Ir a la diapositiva ${index + 1}`}
            aria-selected={index === current}
            role="tab"
          />
        ))}
      </div>
    </section>
  );
}
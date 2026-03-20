"use client";

import { useState, useEffect } from "react";

const slides = [
  {
    img: "/slide1.jpg",
    title: "ODAPAS Temascalcingo",
    text: "Organismo encargado del agua potable y drenaje del municipio.",
  },
  {
    img: "/slide2.jpg",
    title: "Reporta fugas fácilmente",
    text: "Utiliza nuestro portal para reportar fugas o incidencias.",
  },
  {
    img: "/slide4.jpg",
    title: "Paga tu servicio en línea",
    text: "Envía tu comprobante y mantente al corriente.",
  },
];

export default function HeroSlider() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const slide = slides[index];

  return (
    <section
      className="heroSlider"
      style={{ backgroundImage: `url(${slide.img})` }}
    >
      <div className="heroSliderOverlay">
        <div className="container heroSliderContent">
          <h1>{slide.title}</h1>
          <p>{slide.text}</p>
        </div>
      </div>
    </section>
  );
}
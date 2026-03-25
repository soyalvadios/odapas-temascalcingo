"use client";

import { useEffect, useRef, useState } from "react";

interface UseInViewOptions {
  threshold?: number;   // qué tanto del elemento debe ser visible (0–1)
  rootMargin?: string;  // margen extra antes de activar
  once?: boolean;       // solo animar una vez (recomendado)
}

export function useInView(options: UseInViewOptions = {}) {
  const { threshold = 0.12, rootMargin = "0px 0px -40px 0px", once = true } = options;
  const ref = useRef<HTMLElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Si el navegador no soporta IntersectionObserver (muy raro), mostrar directo
    if (!("IntersectionObserver" in window)) {
      setInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          if (once) observer.unobserve(el);
        } else if (!once) {
          setInView(false);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, rootMargin, once]);

  return { ref, inView };
}

// Componente wrapper para animar cualquier bloque al hacer scroll
// Uso: <AnimOnScroll delay={100}><div>...</div></AnimOnScroll>
interface AnimOnScrollProps {
  children: React.ReactNode;
  delay?: number;       // delay en ms para stagger (0, 100, 200...)
  className?: string;
  style?: React.CSSProperties;
  as?: keyof JSX.IntrinsicElements;
}

export function AnimOnScroll({
  children,
  delay = 0,
  className = "",
  style = {},
  as: Tag = "div",
}: AnimOnScrollProps) {
  const { ref, inView } = useInView();

  return (
    <Tag
      ref={ref as any}
      className={`anim-block ${inView ? "anim-visible" : "anim-hidden"} ${className}`}
      style={{ transitionDelay: `${delay}ms`, ...style }}
    >
      {children}
    </Tag>
  );
}

"use client";

import { useEffect, useRef, useState, CSSProperties, ReactNode } from "react";

type UseInViewOptions = {
  threshold?: number;
  rootMargin?: string;
  once?: boolean;
};

export function useInView(options: UseInViewOptions = {}) {
  const {
    threshold = 0.12,
    rootMargin = "0px 0px -40px 0px",
    once = true,
  } = options;

  const ref = useRef<HTMLDivElement | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    if (!("IntersectionObserver" in window)) {
      setInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          if (once) observer.unobserve(element);
        } else if (!once) {
          setInView(false);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [threshold, rootMargin, once]);

  return { ref, inView };
}

type AnimOnScrollProps = {
  children: ReactNode;
  delay?: number;
  className?: string;
  style?: CSSProperties;
};

export function AnimOnScroll({
  children,
  delay = 0,
  className = "",
  style,
}: AnimOnScrollProps) {
  const { ref, inView } = useInView();

  return (
    <div
      ref={ref}
      className={`anim-block ${inView ? "anim-visible" : "anim-hidden"} ${className}`}
      style={{ transitionDelay: `${delay}ms`, ...style }}
    >
      {children}
    </div>
  );
}
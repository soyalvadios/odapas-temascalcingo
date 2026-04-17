import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Reportar fuga o incidencia",
  description:
    "Reporta fugas e incidencias relacionadas con el servicio de agua en Temascalcingo.",
  alternates: {
    canonical: "/reportar",
  },
};

export default function ReportarLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
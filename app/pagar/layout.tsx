import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pagar servicio de agua",
  description:
    "Realiza tu pago del servicio de agua en Temascalcingo. Transfiere y envía tu comprobante por WhatsApp a ODAPAS.",
  alternates: {
    canonical: "/pagar",
  },
};

export default function PagarLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
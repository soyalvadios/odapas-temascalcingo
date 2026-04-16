import "./globals.css";
import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import OdapasBot from "@/components/OdapasBot";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.odapastemascalcingo.com.mx"),
  title: {
    default: "ODAPAS Temascalcingo | Portal oficial",
    template: "%s | ODAPAS Temascalcingo",
  },
  description:
    "Portal oficial de ODAPAS Temascalcingo. Consulta adeudos, realiza pagos, reporta fugas, revisa noticias, transparencia y datos de contacto.",
  keywords: [
    "ODAPAS Temascalcingo",
    "agua Temascalcingo",
    "pago de agua Temascalcingo",
    "consulta adeudo ODAPAS",
    "reportar fuga Temascalcingo",
    "transparencia ODAPAS",
    "aviso de privacidad ODAPAS",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "ODAPAS Temascalcingo | Portal oficial",
    description:
      "Consulta adeudos, realiza pagos, reporta fugas y revisa información oficial de ODAPAS Temascalcingo.",
    url: "https://www.odapastemascalcingo.com.mx/",
    siteName: "ODAPAS Temascalcingo",
    locale: "es_MX",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ODAPAS Temascalcingo | Portal oficial",
    description:
      "Consulta adeudos, realiza pagos, reporta fugas y revisa información oficial de ODAPAS Temascalcingo.",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" data-scroll-behavior="smooth">
      <body>
        <div className="site">
          <SiteHeader />

          <main className="main">{children}</main>

          <footer className="footer">
            <div className="container footerGrid">
              <div>
                <div className="footerTitle">ODAPAS Temascalcingo</div>
                <p className="muted">
                  Portal oficial de atención ciudadana. Consulta adeudos, realiza
                  pagos, reporta fugas y revisa información pública del organismo.
                </p>
              </div>

              <div>
                <div className="footerTitle">Accesos</div>
                <ul className="list">
                  <li>
                    <Link href="/pagar">Pagar</Link>
                  </li>
                  <li>
                    <Link href="/consultar">Consultar</Link>
                  </li>
                  <li>
                    <Link href="/reportar">Reportar</Link>
                  </li>
                  <li>
                    <Link href="/ubicaciones">Ubicación</Link>
                  </li>
                </ul>
              </div>

              <div>
                <div className="footerTitle">Información</div>
                <ul className="list">
                  <li>
                    <Link href="/quienes-somos">¿Quiénes somos?</Link>
                  </li>
                  <li>
                    <Link href="/noticias">Noticias</Link>
                  </li>
                  <li>
                    <Link href="/transparencia">Transparencia</Link>
                  </li>
                  <li>
                    <Link href="/aviso-privacidad">Aviso de privacidad</Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="container footerBottom">
              <span className="muted">
                © {new Date().getFullYear()} ODAPAS Temascalcingo
              </span>
            </div>
          </footer>

          <OdapasBot />
        </div>
      </body>
    </html>
  );
}
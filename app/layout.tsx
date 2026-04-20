import "./globals.css";
import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import OdapasBot from "@/components/OdapasBot";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.odapastemascalcingo.com.mx"),
  title: {
    default: "ODAPAS Temascalcingo | Portal oficial de agua potable",
    template: "%s | ODAPAS Temascalcingo",
  },
  description:
    "Portal oficial de ODAPAS Temascalcingo. Paga tu servicio de agua, consulta adeudos, reporta fugas y conoce información institucional del municipio.",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    title: "ODAPAS Temascalcingo | Portal oficial de agua potable",
    description:
      "Portal oficial de ODAPAS Temascalcingo. Paga tu servicio de agua, consulta adeudos, reporta fugas y conoce información institucional del municipio.",
    url: "https://www.odapastemascalcingo.com.mx/",
    siteName: "ODAPAS Temascalcingo",
    locale: "es_MX",
    type: "website",
    images: [
      {
        url: "/logo-odapas-oficial.png",
        width: 1200,
        height: 1200,
        alt: "Logo oficial de ODAPAS Temascalcingo 2025-2027",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ODAPAS Temascalcingo | Portal oficial de agua potable",
    description:
      "Portal oficial de ODAPAS Temascalcingo. Paga tu servicio de agua, consulta adeudos, reporta fugas y conoce información institucional del municipio.",
    images: ["/logo-odapas-oficial.png"],
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "ODAPAS Temascalcingo",
  url: "https://www.odapastemascalcingo.com.mx",
  logo: "https://www.odapastemascalcingo.com.mx/logo-odapas-oficial.png",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" data-scroll-behavior="smooth">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />

        <div className="site">
          <SiteHeader />

          <main className="main">{children}</main>

          <footer className="footer">
            <div className="container footerGrid">
              <div>
                <div className="footerTitle">ODAPAS Temascalcingo</div>
                <p className="muted">
                  Portal informativo y de atención ciudadana. Para emergencias, utiliza los contactos oficiales.
                </p>
              </div>
              <div>
                <div className="footerTitle">Accesos</div>
                <ul className="list">
                  <li><Link href="/pagar">Pagar</Link></li>
                  <li><Link href="/consultar">Consultar</Link></li>
                  <li><Link href="/reportar">Reportar</Link></li>
                  <li><Link href="/ubicaciones">Ubicación</Link></li>
                </ul>
              </div>
              <div>
                <div className="footerTitle">Información</div>
                <ul className="list">
                  <li><Link href="/quienes-somos">¿Quiénes somos?</Link></li>
                  <li><Link href="/transparencia">Transparencia</Link></li>
                  <li><Link href="/aviso-privacidad">Aviso de privacidad</Link></li>
                </ul>
              </div>
            </div>

            <div className="container footerBottom">
              <span className="muted">© {new Date().getFullYear()} ODAPAS Temascalcingo</span>
            </div>
          </footer>

          <OdapasBot />
        </div>
      </body>
    </html>
  );
}
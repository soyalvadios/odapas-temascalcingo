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
  alternates: { canonical: "/" },
  verification: { google: "0qlUtp7L0ITMR23yIAZi2oeKSOElmVMW16glS2VBCFA" },
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
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "GovernmentOrganization",
  name: "ODAPAS Temascalcingo",
  alternateName:
    "Organismo Descentralizado de Agua Potable, Alcantarillado y Saneamiento de Temascalcingo",
  url: "https://www.odapastemascalcingo.com.mx",
  logo: "https://www.odapastemascalcingo.com.mx/banner.png",
  telephone: "+5215642275320",
  sameAs: ["https://www.facebook.com/odapastemascalcingo/"],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Temascalcingo",
    addressRegion: "Estado de México",
    addressCountry: "MX",
  },
  areaServed: { "@type": "City", name: "Temascalcingo" },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+5215642275320",
    contactType: "customer service",
    availableLanguage: "Spanish",
    url: "https://www.odapastemascalcingo.com.mx/contacto",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" data-scroll-behavior="smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body>
        <div className="site">
          <SiteHeader />

          <main className="main">{children}</main>

          <footer className="footer">
            <div className="container footerGrid">
              <div>
                <div className="footerTitle">ODAPAS Temascalcingo</div>
                <p className="muted">
                  Portal informativo y de atención ciudadana. Para emergencias,
                  utiliza los contactos oficiales.
                </p>

                <div style={{ display: "flex", gap: 14, marginTop: 14 }}>
                  <a
                    href="https://www.facebook.com/odapastemascalcingo/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Facebook de ODAPAS Temascalcingo"
                    style={{
                      color: "#1877F2",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <svg
                      width="22"
                      height="22"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path d="M24 12.073C24 5.404 18.627 0 12 0S0 5.404 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.41c0-3.025 1.792-4.697 4.533-4.697 1.312 0 2.686.236 2.686.236v2.97h-1.513c-1.491 0-1.956.93-1.956 1.886v2.269h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z" />
                    </svg>
                  </a>

                  <a
                    href="https://wa.me/525642275320"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="WhatsApp de ODAPAS Temascalcingo"
                    style={{
                      color: "#25D366",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <svg
                      width="22"
                      height="22"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                      <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.122 1.532 5.853L.054 23.447a.5.5 0 00.611.61l5.594-1.478A11.95 11.95 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.907 0-3.693-.504-5.235-1.385l-.374-.217-3.878 1.024 1.025-3.767-.228-.386A9.944 9.944 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
                    </svg>
                  </a>
                </div>
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

              <div style={{ display: "flex", gap: 16, alignItems: "center" }}>
                <a
                  href="https://www.facebook.com/odapastemascalcingo/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="muted"
                  style={{ fontSize: "0.8rem" }}
                >
                  Facebook
                </a>

                <a
                  href="https://wa.me/525642275320"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="muted"
                  style={{ fontSize: "0.8rem" }}
                >
                  WhatsApp
                </a>
              </div>
            </div>
          </footer>

          {/* Botón flotante WhatsApp directo */}
          <a
            href="https://wa.me/525642275320"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Contactar ODAPAS por WhatsApp"
            style={{
              position: "fixed",
              bottom: "110px",
              right: "20px",
              width: "50px",
              height: "50px",
              borderRadius: "50%",
              backgroundColor: "#25D366",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "0 4px 12px rgba(0,0,0,0.25)",
              zIndex: 999,
            }}
          >
            <svg
              width="26"
              height="26"
              viewBox="0 0 24 24"
              fill="white"
              aria-hidden="true"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
              <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.122 1.532 5.853L.054 23.447a.5.5 0 00.611.61l5.594-1.478A11.95 11.95 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.907 0-3.693-.504-5.235-1.385l-.374-.217-3.878 1.024 1.025-3.767-.228-.386A9.944 9.944 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
            </svg>
          </a>

          <OdapasBot />
        </div>
      </body>
    </html>
  );
}
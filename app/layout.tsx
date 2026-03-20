import "./globals.css";
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import OdapasBot from "@/components/OdapasBot";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>
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

 💧 ODAPAS Temascalcingo Portal

Portal web institucional para el Organismo Público Descentralizado Municipal (ODAPAS) de Temascalcingo, Estado de México.

Este sistema permite a los ciudadanos:
- Consultar información del organismo
- Reportar incidencias
- Realizar pagos mediante transferencia
- Enviar comprobantes por WhatsApp
- Acceder a información pública y servicios

---

## 🧠 Tecnologías utilizadas

- **Next.js (App Router)**
- **React + TypeScript**
- **Vercel (deployment)**
- **CSS personalizado**
- **OpenStreetMap + Leaflet (mapas)**
- **WhatsApp API (enlace directo)**

---

## 🚀 Despliegue

El proyecto está desplegado en:


https://odapas-temascalcingo.vercel.app


Deploy automático mediante GitHub + Vercel.

---

## 📁 Estructura del proyecto


app/
├── page.tsx # Home
├── pagar/ # Página de pagos
├── reportar/ # Reporte de incidencias
├── contacto/ # Contacto
├── consultar/ # Consulta vía WhatsApp
├── ubicaciones/ # Ubicación del organismo
├── quienes-somos/ # Información institucional
├── noticias/ # Noticias (estático)
├── transparencia/ # Información pública
└── aviso-privacidad/ # Aviso de privacidad

components/
├── HeroRotator.tsx
├── MapPicker.tsx
├── OdapasBot.tsx
└── SiteHeader.tsx

hooks/
└── useInView.tsx # Animaciones al hacer scroll

public/
└── assets estáticos


---

## 💰 Flujo de pagos

1. El usuario realiza transferencia bancaria
2. Usa los datos mostrados en `/pagar`
3. Envía comprobante por WhatsApp
4. El personal valida manualmente el pago

### Datos bancarios

- Banco: BBVA
- Cuenta: 0124367731
- CLABE: 012180001243677314
- RFC: OPD140421GE1

### Tarifas

- Mensual: $110 MXN
- Anual: $1,320 MXN

---

## 📲 Flujo de reporte de incidencias

1. Usuario entra a `/reportar`
2. Selecciona ubicación (mapa interactivo)
3. Describe problema
4. Se genera mensaje automático a WhatsApp
5. Se envía al personal del organismo

---

## ⚠️ Consideraciones importantes

- No existe backend aún (MVP funcional)
- Validación de pagos es manual
- No hay base de datos persistente
- No hay autenticación de usuarios

---

## 🛠️ Instalación local

```bash
npm install
npm run dev

Abrir en:

http://localhost:3000
🏗️ Build de producción
npm run build
npm start
🔄 Deploy manual (opcional)
vercel --prod
📦 Variables de entorno

Actualmente no se requieren variables de entorno.

🧪 Estado del proyecto
✅ Producción en Vercel
✅ Funcional para uso ciudadano
⚠️ Sin backend (fase MVP)
🔜 Escalable a sistema completo
🚀 Roadmap futuro
Panel administrativo
Base de datos
Validación automática de pagos
Integración con WhatsApp Business API
Sistema de tickets
Dashboard institucional
👨‍💻 Autor

Desarrollado por:

David Alvarado Correa
📧 alvaradoccdavidyt@gmail.com

📄 Licencia

Uso institucional para ODAPAS Temascalcingo.

🧠 Nota para IA

Este proyecto es un portal institucional MVP sin backend.

Cualquier mejora futura debe:

Mantener compatibilidad con Next.js App Router
Evitar romper flujos existentes
Priorizar simplicidad y estabilidad
Considerar futura integración con backend Node.js + MySQL
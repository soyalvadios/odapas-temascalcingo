# ODAPAS Temascalcingo

Portal web informativo y de atención ciudadana para **ODAPAS Temascalcingo**, desplegado en un **VPS Ubuntu** con **Nginx + PM2 + Next.js**, y publicado bajo el dominio:

- https://odapastemascalcingo.com.mx
- https://www.odapastemascalcingo.com.mx

---

## Estado actual del proyecto

### Producción
El proyecto se encuentra **operando en producción** en un VPS con Ubuntu.

### Dominio y DNS
El dominio ya está apuntando correctamente al servidor:

- `odapastemascalcingo.com.mx` → `207.210.229.96`
- `www.odapastemascalcingo.com.mx` → `207.210.229.96`

Actualmente el dominio está funcionando correctamente sobre **HTTP y HTTPS**.

### HTTPS / SSL
Se configuró **Let's Encrypt** con renovación automática.

Certificado activo para:

- `odapastemascalcingo.com.mx`
- `www.odapastemascalcingo.com.mx`

### Reverse proxy
Nginx quedó configurado como proxy hacia la aplicación Next.js que corre localmente en:

- `http://127.0.0.1:3000`

### Proceso de aplicación
La aplicación se ejecuta con **PM2** bajo el proceso:

- `odapas`

---

## Stack actual

- **Framework:** Next.js
- **Runtime:** Node.js
- **Gestor de procesos:** PM2
- **Servidor web / reverse proxy:** Nginx
- **Sistema operativo:** Ubuntu Server
- **Control de versiones:** Git + GitHub

---

## Estructura general del proyecto

Proyecto ubicado en el VPS en:

```bash
/var/www/odapas-temascalcingo
```

Estructura principal observada:

```text
app/
components/
hooks/
lib/
public/
cultura-agua/
next.config.mjs
next.config.ts
package.json
package-lock.json
tsconfig.json
README.md
```

---

## Funcionalidades principales del portal

- Página principal institucional
- Apartado de pago en línea
- Apartado de consulta
- Reporte de fugas
- Transparencia
- Ubicaciones
- Contacto
- Cultura del agua
- Aviso de privacidad
- Noticias
- Sección institucional “¿Quiénes somos?”

---

## Cambios recientes aplicados

### 1. Menú LGCG / Transparencia
Se actualizó la estructura del menú desplegable de transparencia para alinearlo con la organización del portal de referencia de ODAPAS Temascalcingo.

Se integraron apartados como:

- Reglamentación
- Reportes Trimestrales
- Presupuestos
- Cuenta Pública
- Subniveles y documentos relacionados
- Inclusión de apartados faltantes como Título IV y Título V en la estructura correspondiente

### 2. Ajustes de scroll del menú LGCG
Se trabajó el comportamiento del scroll interno del menú desplegable LGCG.

**Estado actual:**
- En **teléfono / móvil** el comportamiento ya quedó funcional
- En **PC** todavía puede requerir un ajuste fino adicional si se desea perfeccionar la experiencia de navegación en menús largos

### 3. Corrección de teléfono visible
Se corrigieron inconsistencias del número telefónico mostrado en la interfaz principal.

### 4. Dominio y publicación final
Se completó la salida a dominio propio con:

- Configuración DNS
- Ajuste de nameservers
- Configuración Nginx
- Certificado SSL
- Validación final por `curl` y navegador

---

## Comandos útiles de operación

### Entrar al proyecto en el VPS
```bash
cd /var/www/odapas-temascalcingo
```

### Actualizar desde GitHub
```bash
git pull origin main
npm install
npm run build
pm2 restart odapas
```

### Ver estado de PM2
```bash
pm2 list
pm2 show odapas
pm2 logs odapas --lines 50
```

### Validar Nginx
```bash
sudo nginx -t
sudo systemctl reload nginx
```

### Probar dominio desde servidor
```bash
curl -I https://odapastemascalcingo.com.mx
curl -I https://www.odapastemascalcingo.com.mx
```

---

## Flujo recomendado de despliegue

### Desarrollo
Los cambios deben hacerse **en máquina local**, no directamente en producción salvo emergencia.

### Flujo recomendado
```bash
git add .
git commit -m "Descripción del cambio"
git push origin main
```

Después, en el VPS:

```bash
cd /var/www/odapas-temascalcingo
git pull origin main
npm install
npm run build
pm2 restart odapas
```

---

## Configuración actual de Nginx

El dominio está configurado para:

- redirigir tráfico
- servir HTTPS
- hacer proxy a la app Next.js en `127.0.0.1:3000`

La configuración funcional final quedó asociada al sitio:

```bash
/etc/nginx/sites-available/odapas-temascalcingo
```

y enlazada en:

```bash
/etc/nginx/sites-enabled/odapas-temascalcingo
```

---

## Certificados SSL

Ruta actual del certificado:

```bash
/etc/letsencrypt/live/odapastemascalcingo.com.mx/fullchain.pem
```

Llave privada:

```bash
/etc/letsencrypt/live/odapastemascalcingo.com.mx/privkey.pem
```

Renovación automática configurada por Certbot.

---

## Notas importantes

- El portal ya responde correctamente en dominio raíz y subdominio `www`
- La aplicación ya quedó sirviendo por HTTPS
- El menú LGCG quedó funcional, especialmente en móvil
- En escritorio todavía puede pulirse el comportamiento de scroll si se desea una experiencia más fina
- El proyecto debe seguir administrándose vía Git para evitar diferencias entre local y producción

---

## Próximos pendientes sugeridos

1. Ajuste fino del scroll del menú LGCG en escritorio
2. Limpieza de archivos de respaldo o archivos temporales en servidor si aún existen
3. Revisión general de estilos responsivos en pantallas grandes
4. Documentar usuarios, accesos y credenciales operativas en un documento privado aparte
5. Respaldar la configuración final de Nginx y SSL

---

## Repositorio

Repositorio remoto actual:

```bash
https://github.com/soyalvadios/odapas-temascalcingo.git
```

---

## Resumen ejecutivo

El proyecto **ODAPAS Temascalcingo** ya se encuentra:

- desplegado
- funcionando en producción
- conectado a dominio propio
- protegido con HTTPS
- administrado por GitHub
- servido por Nginx y PM2 sobre Ubuntu

El sistema está en un estado **estable y funcional**, con un pendiente menor de mejora visual en el scroll del menú LGCG en escritorio.

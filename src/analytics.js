// Reemplaza este valor con tu Measurement ID de Google Analytics 4
// Ejemplo: "G-XXXXXXXXXX"
// Lo encuentras en: GA4 → Administrar → Flujos de datos → tu sitio web
export const GA_ID = "";

export function loadGA() {
  if (!GA_ID || window._gaLoaded) return;
  window._gaLoaded = true;
  const s = document.createElement("script");
  s.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
  s.async = true;
  document.head.appendChild(s);
  window.dataLayer = window.dataLayer || [];
  window.gtag = function () { window.dataLayer.push(arguments); };
  window.gtag("js", new Date());
  window.gtag("config", GA_ID, { send_page_view: false });
}

export function pageview(path) {
  if (!GA_ID || !window.gtag) return;
  window.gtag("event", "page_view", { page_path: path });
}

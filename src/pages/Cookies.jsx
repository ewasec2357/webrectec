import { COMPANY } from "../constants.js";

const CY = new Date().getFullYear();

export default function Cookies({ setTab }) {
  const clearCookies = () => {
    localStorage.removeItem("rt_cookie_consent");
    window.location.reload();
  };

  return (
    <div className="legal-page fade">
      <div className="legal-hero">
        <div className="sec-label">Legal</div>
        <h1>Política de Cookies</h1>
        <p>Última actualización: abril de {CY}</p>
      </div>

      <div className="legal-body">

        <div className="legal-section">
          <h2>1. ¿Qué son las cookies?</h2>
          <p>
            Las cookies son pequeños archivos de texto que se almacenan en su dispositivo cuando visita un
            sitio web. Permiten que el sitio recuerde sus preferencias y mejoren su experiencia de navegación.
          </p>
        </div>

        <div className="legal-section">
          <h2>2. Cookies que utilizamos</h2>
          <div className="legal-table">
            <div className="legal-table-head">
              <div>Nombre</div>
              <div>Tipo</div>
              <div>Finalidad</div>
              <div>Duración</div>
            </div>
            <div className="legal-table-row">
              <div><code>rt_cookie_consent</code></div>
              <div>Técnica</div>
              <div>Guarda su preferencia sobre cookies (aceptar / solo esenciales)</div>
              <div>1 año</div>
            </div>
            <div className="legal-table-row">
              <div><code>_ga, _gid</code></div>
              <div>Analítica</div>
              <div>Google Analytics — mide visitas y comportamiento anónimo de los usuarios</div>
              <div>2 años / 24 h</div>
            </div>
          </div>
          <p style={{ marginTop: 12 }}>
            <strong>Nota:</strong> Google Analytics solo se activa si usted acepta todas las cookies.
            Si elige "Solo esenciales", únicamente se usa la cookie técnica de preferencia.
          </p>
        </div>

        <div className="legal-section">
          <h2>3. Cookies de terceros</h2>
          <p>
            Si usted hace clic en un enlace a WhatsApp, Facebook o Instagram, esas plataformas pueden
            instalar sus propias cookies. Estas están fuera del control de Recursos Tecnológicos S.A.C.
            y se rigen por las políticas de privacidad de cada plataforma.
          </p>
        </div>

        <div className="legal-section">
          <h2>4. Cómo desactivar las cookies</h2>
          <p>Puede gestionar las cookies de las siguientes formas:</p>
          <ul>
            <li>
              <strong>Desde este sitio:</strong> haga clic en el botón de abajo para restablecer su
              preferencia de cookies y volver a ver el banner.
            </li>
            <li>
              <strong>Desde su navegador:</strong> acceda a la configuración de privacidad de su
              navegador (Chrome, Firefox, Edge, Safari) y elimine o bloquee las cookies.
            </li>
          </ul>
          <button className="btn-primary" style={{ marginTop: 12, fontSize: 14 }} onClick={clearCookies}>
            Restablecer preferencia de cookies
          </button>
        </div>

        <div className="legal-section">
          <h2>5. Base legal</h2>
          <p>
            El uso de cookies analíticas está sujeto a su consentimiento, conforme a la Ley N° 29733
            (Ley de Protección de Datos Personales del Perú) y las directrices aplicables.
            Las cookies técnicas son estrictamente necesarias para el funcionamiento del sitio.
          </p>
        </div>

        <div className="legal-section">
          <h2>6. Contacto</h2>
          <p>
            Si tiene preguntas sobre nuestra política de cookies, contáctenos en{" "}
            <a href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a>.
          </p>
        </div>

      </div>
    </div>
  );
}

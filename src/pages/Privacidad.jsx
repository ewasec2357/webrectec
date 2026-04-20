import { COMPANY } from "../constants.js";

const CY = new Date().getFullYear();

export default function Privacidad({ setTab }) {
  return (
    <div className="legal-page fade">
      <div className="legal-hero">
        <div className="sec-label">Legal</div>
        <h1>Política de Privacidad</h1>
        <p>Última actualización: abril de {CY}</p>
      </div>

      <div className="legal-body">

        <div className="legal-alert">
          <strong>Responsable del tratamiento:</strong> Recursos Tecnológicos S.A.C. · RUC 20605469729 · Lima, Perú
        </div>

        <div className="legal-section">
          <h2>1. ¿Quiénes somos?</h2>
          <p>
            Recursos Tecnológicos S.A.C. (RUC 20605469729) es una empresa peruana especializada en fabricación y
            reparación de baterías de litio, vehículos eléctricos, sistemas de energía solar y agencia de aduanas,
            con sede en Lima, Perú. Somos responsables del sitio web <strong>www.recursostecnologicos.com</strong>.
          </p>
        </div>

        <div className="legal-section">
          <h2>2. Datos que recopilamos</h2>
          <p>Recopilamos únicamente los datos que usted nos proporciona voluntariamente a través de:</p>
          <ul>
            <li><strong>Formulario de contacto y cotización:</strong> nombre, servicio requerido y descripción del caso.</li>
            <li><strong>Libro de Reclamaciones:</strong> nombre completo, DNI/RUC, email, teléfono, tipo de reclamación y descripción.</li>
            <li><strong>WhatsApp:</strong> los datos que comparte en la conversación con nuestros asesores.</li>
          </ul>
          <p>No recopilamos datos de forma automática más allá de las cookies técnicas indicadas en nuestra <button className="legal-link" onClick={() => setTab("cookies")}>Política de Cookies</button>.</p>
        </div>

        <div className="legal-section">
          <h2>3. Finalidad del tratamiento</h2>
          <p>Los datos recopilados se utilizan exclusivamente para:</p>
          <ul>
            <li>Responder consultas, cotizaciones y reclamaciones.</li>
            <li>Gestionar la relación comercial con el cliente.</li>
            <li>Cumplir obligaciones legales ante INDECOPI y entidades competentes.</li>
          </ul>
          <p><strong>Sus datos no son vendidos ni cedidos a terceros con fines comerciales.</strong></p>
        </div>

        <div className="legal-section">
          <h2>4. Base legal</h2>
          <p>
            El tratamiento de sus datos personales se rige por la <strong>Ley N° 29733 — Ley de Protección de Datos
            Personales del Perú</strong> y su Reglamento (D.S. N° 003-2013-JUS). El tratamiento se realiza sobre la
            base del consentimiento del titular y la ejecución de la relación contractual o precontractual.
          </p>
        </div>

        <div className="legal-section">
          <h2>5. Conservación de los datos</h2>
          <p>
            Los datos se conservan durante el tiempo necesario para atender su solicitud y cumplir con las
            obligaciones legales aplicables. Los datos del Libro de Reclamaciones se conservan conforme al
            D.S. N° 011-2011-PCM.
          </p>
        </div>

        <div className="legal-section">
          <h2>6. Derechos del titular</h2>
          <p>Como titular de datos personales, usted tiene derecho a:</p>
          <ul>
            <li><strong>Acceso:</strong> conocer qué datos tenemos sobre usted.</li>
            <li><strong>Rectificación:</strong> corregir datos inexactos o incompletos.</li>
            <li><strong>Cancelación:</strong> solicitar la supresión de sus datos.</li>
            <li><strong>Oposición:</strong> oponerse al tratamiento en determinadas circunstancias.</li>
          </ul>
          <p>Para ejercer estos derechos contáctenos en: <a href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a></p>
        </div>

        <div className="legal-section">
          <h2>7. Seguridad</h2>
          <p>
            Adoptamos medidas técnicas y organizativas razonables para proteger sus datos contra acceso no
            autorizado, pérdida o alteración. La comunicación con nuestros asesores se realiza a través de
            plataformas seguras (WhatsApp, Gmail).
          </p>
        </div>

        <div className="legal-section">
          <h2>8. Contacto</h2>
          <div className="legal-contact-card">
            <div><strong>Recursos Tecnológicos S.A.C.</strong></div>
            <div>RUC: 20605469729</div>
            <div>Lima, Perú</div>
            <div><a href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a></div>
            <div><a href={`tel:${COMPANY.phone}`}>{COMPANY.phone}</a></div>
          </div>
        </div>

      </div>
    </div>
  );
}

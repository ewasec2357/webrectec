import { COMPANY } from "../constants.js";

const CY = new Date().getFullYear();

export default function Terminos({ setTab }) {
  return (
    <div className="legal-page fade">
      <div className="legal-hero">
        <div className="sec-label">Legal</div>
        <h1>Términos y Condiciones</h1>
        <p>Última actualización: abril de {CY}</p>
      </div>

      <div className="legal-body">

        <div className="legal-alert">
          Al utilizar este sitio web, usted acepta los presentes Términos y Condiciones en su totalidad.
        </div>

        <div className="legal-section">
          <h2>1. Titular del sitio</h2>
          <p>
            El presente sitio web es operado por <strong>Recursos Tecnológicos S.A.C.</strong>, con RUC 20605469729,
            empresa constituida bajo las leyes de la República del Perú, con domicilio en Lima, Perú.
          </p>
        </div>

        <div className="legal-section">
          <h2>2. Objeto</h2>
          <p>
            Este sitio web tiene como finalidad informar sobre los productos y servicios de Recursos Tecnológicos S.A.C.,
            que incluyen fabricación y reparación de baterías de litio, sistemas de energía solar, vehículos eléctricos
            y servicios de asesoría técnica.
          </p>
        </div>

        <div className="legal-section">
          <h2>3. Uso del sitio</h2>
          <p>El usuario se compromete a:</p>
          <ul>
            <li>Utilizar el sitio de forma lícita y conforme a estos términos.</li>
            <li>No reproducir ni distribuir el contenido sin autorización expresa.</li>
            <li>No realizar acciones que puedan dañar, sobrecargar o deteriorar el sitio.</li>
            <li>Proporcionar información veraz al utilizar formularios de contacto.</li>
          </ul>
        </div>

        <div className="legal-section">
          <h2>4. Precios y cotizaciones</h2>
          <p>
            Los productos y servicios mostrados en este sitio <strong>no tienen precios fijos publicados</strong>.
            Todos los precios son cotizables y dependen de las especificaciones técnicas, cantidad, disponibilidad
            de stock y condiciones del mercado. Para obtener una cotización, contáctenos a través de WhatsApp o
            el formulario de contacto.
          </p>
        </div>

        <div className="legal-section">
          <h2>5. Garantías y responsabilidades</h2>
          <p>
            Recursos Tecnológicos S.A.C. garantiza sus productos y servicios conforme a lo indicado en cada
            certificado técnico entregado al cliente. Las garantías aplican bajo uso correcto del producto
            según las especificaciones técnicas proporcionadas.
          </p>
          <p>
            La empresa no se hace responsable por daños derivados del uso incorrecto de los productos,
            modificaciones no autorizadas o condiciones ambientales fuera de las especificaciones técnicas.
          </p>
        </div>

        <div className="legal-section">
          <h2>6. Propiedad intelectual</h2>
          <p>
            Todo el contenido de este sitio (textos, imágenes, logotipos, diseño) es propiedad de
            Recursos Tecnológicos S.A.C. o de sus proveedores con la debida licencia, y está protegido
            por las leyes de propiedad intelectual vigentes en el Perú.
          </p>
        </div>

        <div className="legal-section">
          <h2>7. Jurisdicción y ley aplicable</h2>
          <p>
            Los presentes Términos y Condiciones se rigen por la legislación peruana. Cualquier controversia
            derivada de su interpretación o aplicación será sometida a los juzgados y tribunales competentes
            de la ciudad de Lima, Perú, renunciando expresamente el usuario a cualquier otro fuero que
            pudiera corresponderle.
          </p>
        </div>

        <div className="legal-section">
          <h2>8. Modificaciones</h2>
          <p>
            Recursos Tecnológicos S.A.C. se reserva el derecho de modificar estos Términos y Condiciones
            en cualquier momento. Las modificaciones entrarán en vigor desde su publicación en este sitio.
            El uso continuado del sitio implica la aceptación de los términos vigentes.
          </p>
        </div>

        <div className="legal-section">
          <h2>9. Contacto</h2>
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

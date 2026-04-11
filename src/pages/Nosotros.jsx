export default function Nosotros() {
  return (
    <div className="fade">
      <div className="about-grid">
        <div className="about-text">
          <div className="sec-label" style={{marginBottom:12}}>Quiénes somos</div>
          <h2>Ingenieros,<br/><em>no técnicos</em></h2>
          <p>Recursos Tecnológicos S.A.C. es una empresa peruana especializada en baterías de litio, vehículos eléctricos y energía solar. Cada trabajo es realizado y certificado por ingenieros. Esa es la diferencia fundamental.</p>
          <p>Contamos con alianzas estratégicas internacionales en fabricación de baterías LiFePO4 y tecnología solar, lo que nos permite ofrecer productos certificados, garantías reales y soporte técnico de clase mundial directamente en el Perú.</p>
          <p style={{marginBottom:0}}>Estas alianzas nos otorgan importación directa con todas las certificaciones requeridas, precios de fabricante para nuestros clientes y acceso a tecnología de última generación sin intermediarios.</p>
        </div>
        <div>
          <div className="sec-label" style={{marginBottom:14}}>Documentación que entregamos</div>
          <div className="cert-list">
            {[
              ["📋","Informe de Diagnóstico","Análisis completo: voltajes, celdas, BMS y recomendaciones técnicas."],
              ["🏭","Informe de Fabricación","Especificaciones del pack, configuración y materiales utilizados."],
              ["✅","Certificado de Funcionamiento","Avala el estado óptimo con pruebas de carga y autonomía documentadas."],
              ["🛡️","Certificado de Garantía","6–12 meses firmado por el ingeniero responsable del trabajo."],
              ["📝","Guía de Recepción","Protocolo de entrega con inventario, estado y condiciones de operación."],
            ].map(([ic,ti,de]) => (
              <div className="cert-item" key={ti}>
                <div className="cert-icon">{ic}</div>
                <div><div className="cert-title">{ti}</div><div className="cert-desc">{de}</div></div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ALIANZAS */}
      <div className="alb">
        <div>
          <div className="al-tag">Alianzas estratégicas internacionales</div>
          <div className="alb-h">Respaldo global,<br/><em>garantía local</em></div>
          <div className="alb-p">Trabajamos con socios estratégicos internacionales líderes en fabricación de baterías LiFePO4 y tecnología solar. Estas alianzas nos convierten en el puente entre tecnología de clase mundial y el mercado peruano, con todas las certificaciones y garantías reales para nuestros clientes.</div>
        </div>
        <div className="blist">
          {[
            ["🌐","Importación directa certificada","Productos con certificaciones internacionales para ingreso legal al Perú sin complicaciones aduaneras."],
            ["💰","Precios de fabricante","Acceso a costos de fabricación que trasladamos directamente a nuestros clientes peruanos."],
            ["🔬","Tecnología de última generación","Baterías LiFePO4 con 6,000 ciclos, kits solares de alto rendimiento y componentes premium verificados."],
            ["📞","Soporte técnico global","Respaldo de ingeniería del fabricante para casos técnicos complejos y proyectos de gran escala."],
            ["📦","Stock disponible en Lima","Inventario local que permite tiempos de entrega inmediatos sin esperar importaciones por encargo."],
          ].map(([ic,ti,de]) => (
            <div className="bitem" key={ti}>
              <div className="bico">{ic}</div>
              <div><div className="bti">{ti}</div><div className="bsu">{de}</div></div>
            </div>
          ))}
        </div>
      </div>

      <div className="sec-label" style={{marginBottom:18}}>Nuestros valores</div>
      <div className="vals-grid">
        {[
          ["🔬","Rigor técnico","Documentamos, medimos y certificamos cada trabajo. Sin improvisación, sin estimaciones."],
          ["🌿","Energía limpia","Impulsamos la transición a energías limpias en todos los sectores productivos del Perú."],
          ["🤝","Atención directa","Hablas con el ingeniero que hará tu trabajo. Respuestas claras, honestas y rápidas."],
          ["🏆","Calidad verificada","Solo usamos celdas Gama Alta A+ con ficha técnica comprobada en cada proyecto."],
          ["📡","Respaldo internacional","Alianzas con fabricantes globales. Tecnología de primer nivel con garantía local."],
          ["📐","Asesoría integral","Proyectos desde 1 kWp residencial hasta plantas industriales de gran escala."],
        ].map(([ic,ti,de]) => (
          <div className="val" key={ti}><div className="val-ic">{ic}</div><h3>{ti}</h3><p>{de}</p></div>
        ))}
      </div>
    </div>
  );
}

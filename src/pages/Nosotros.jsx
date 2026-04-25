const PROBLEMS = [
  ["⚠️", "Sin ingenieros responsables", "La mayoría de talleres operan sin certificación profesional. Cualquier falla queda sin respaldo técnico ni legal para el cliente."],
  ["📄", "Sin documentación real", "Packs armados sin informe técnico, sin certificado de garantía y sin trazabilidad de los materiales utilizados."],
  ["🌍", "Sin acceso a tecnología de punta", "Importaciones sin certificaciones, baterías de grado desconocido y tecnología solar de segunda mano sin soporte post-venta."],
];

const SERVICES_LIST = [
  "Diseño y fabricación de packs de litio a medida (Li-Ion y LiFePO4)",
  "Diagnóstico, reparación y recertificación de baterías",
  "Instalación de sistemas solares on-grid, off-grid e híbridos",
  "Conversión de batería plomo-ácido a litio sin modificar el cableado existente",
  "Asesoría técnica y cálculo de sistemas de almacenamiento energético",
];

const ALLIANCES = [
  ["🔋", "Fabricantes LiFePO4 certificados", "Celdas de Grado A con más de 6,000 ciclos y certificación CE / UN38.3. Importación directa, sin intermediarios."],
  ["☀️", "Proveedores de tecnología solar", "Paneles monocristalinos e inversores híbridos con certificación internacional e ingreso legal al Perú."],
  ["📦", "Stock disponible en Lima", "Inventario en Chorrillos para entrega inmediata. Sin tiempos de espera para pedidos dentro del catálogo estándar."],
  ["💰", "Precios de fabricante directos", "Sin cadena de distribución. El ahorro se traslada al cliente con garantía de origen y factura verificable."],
  ["📞", "Soporte técnico del fabricante", "Respaldo de ingeniería del fabricante para proyectos de gran escala y casos técnicos fuera del estándar."],
];

const VALUES = [
  ["🔬", "Rigor técnico", "Cada trabajo incluye informe de diagnóstico, certificado de funcionamiento y garantía de 12 a 24 meses firmada por ingeniero responsable."],
  ["🌿", "Compromiso con energía limpia", "Calculamos el retorno de inversión antes de proponer cualquier solución. No vendemos tecnología que no se justifique técnicamente."],
  ["🤝", "Atención directa al ingeniero", "Hablas con el ingeniero que ejecutará tu trabajo, no con un asesor de ventas. Respuestas técnicas, honestas y sin promesas vacías."],
  ["🏆", "Solo celdas Grado A verificadas", "Cada celda llega con ficha técnica del fabricante y es medida individualmente antes del ensamblaje. Sin componentes de origen desconocido."],
  ["📡", "Tecnología con trazabilidad", "Todos nuestros componentes tienen certificaciones internacionales (CE, RoHS, UN38.3) e ingreso legal al Perú con documentación aduanera completa."],
  ["📐", "Proyectos de cualquier escala", "Desde 1 kWp residencial hasta instalaciones industriales. El mismo estándar de ingeniería aplica sin importar el tamaño del proyecto."],
];

const DOCS = [
  ["📋", "Informe de Diagnóstico", "Análisis completo celda por celda: voltajes individuales, impedancia interna, estado del BMS y recomendaciones técnicas documentadas."],
  ["🏭", "Informe de Fabricación", "Especificaciones del pack fabricado: configuración, materiales utilizados, BMS instalado y parámetros de operación del sistema."],
  ["✅", "Certificado de Funcionamiento", "Avala el estado óptimo con pruebas de carga completa, descarga controlada y autonomía documentada post-trabajo."],
  ["🛡️", "Certificado de Garantía", "12 a 24 meses firmado por el ingeniero responsable, con número único y condiciones de cobertura detalladas."],
  ["📝", "Guía de Recepción", "Protocolo de entrega con inventario de componentes, instrucciones de operación y condiciones de mantenimiento."],
];

export default function Nosotros() {
  return (
    <div className="fade">

      {/* ── 1. HERO ── */}
      <div className="page-hero" style={{ marginBottom: 40 }}>
        <div className="ph-inner" style={{ maxWidth: 700 }}>
          <div className="ph-label">Quiénes somos</div>
          <h2>Ingenieros especializados en <em>energía limpia</em> para el Perú</h2>
          <p style={{ marginBottom: 0 }}>
            El Perú carecía de un servicio técnico serio en baterías de litio y vehículos eléctricos:
            sin ingenieros responsables, sin certificaciones verificables, sin garantías reales.
            Recursos Tecnológicos S.A.C. existe para resolver exactamente eso.
          </p>
        </div>
      </div>

      {/* ── 2. EL PROBLEMA ── */}
      <div style={{ marginBottom: 40 }}>
        <div className="sec-label" style={{ marginBottom: 12 }}>El problema que resolvemos</div>
        <h2 className="sec-h2" style={{ marginBottom: 10 }}>Lo que faltaba en el <em>mercado peruano</em></h2>
        <p className="sec-sub" style={{ marginBottom: 24 }}>
          Antes de que existiéramos, el mercado de baterías de litio y vehículos eléctricos en el Perú operaba sin ingenieros, sin certificaciones y sin garantías reales.
        </p>
        <div className="vals-grid">
          {PROBLEMS.map(([ic, ti, de]) => (
            <div key={ti} className="val" style={{ textAlign: "left", padding: "24px 20px" }}>
              <div style={{ fontSize: 26, marginBottom: 12 }}>{ic}</div>
              <h3 style={{ fontSize: 14, marginBottom: 8, textAlign: "left" }}>{ti}</h3>
              <p style={{ fontSize: 12, textAlign: "justify" }}>{de}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ── 3. CÓMO LO RESOLVEMOS ── */}
      <div className="about-grid" style={{ marginBottom: 40 }}>

        {/* Columna izquierda: equipo de ingeniería */}
        <div className="about-text">
          <div className="sec-label" style={{ marginBottom: 12 }}>Nuestro equipo</div>
          <h2>Ingenieros,<br /><em>no técnicos</em></h2>
          <p>
            Cada trabajo en Recursos Tecnológicos es ejecutado y firmado por ingenieros colegiados.
            No subcontratamos ni tercerizamos. El ingeniero que diseña tu sistema es el mismo que
            lo instala, lo prueba y firma el certificado de garantía.
          </p>
          <p>Operamos desde Chorrillos, Lima, con taller propio y capacidad de atención en campo para proyectos residenciales, comerciales e industriales.</p>
          <div style={{ display: "flex", flexDirection: "column", gap: 10, marginTop: 6 }}>
            {SERVICES_LIST.map(item => (
              <div key={item} style={{ display: "flex", alignItems: "flex-start", gap: 10, fontSize: 13, color: "var(--text-muted)", lineHeight: 1.6 }}>
                <span style={{ color: "var(--blue)", fontWeight: 700, flexShrink: 0 }}>→</span>
                {item}
              </div>
            ))}
          </div>
        </div>

        {/* Columna derecha: alianzas */}
        <div style={{ background: "var(--blue-dd)", borderRadius: 16, padding: "32px 28px" }}>
          <div className="al-tag">Alianzas estratégicas internacionales</div>
          <div className="alb-h" style={{ fontSize: "clamp(20px,2.2vw,28px)", marginBottom: 20 }}>
            Respaldo global,<br /><em>garantía local</em>
          </div>
          <div className="blist">
            {ALLIANCES.map(([ic, ti, de]) => (
              <div className="bitem" key={ti}>
                <div className="bico">{ic}</div>
                <div>
                  <div className="bti">{ti}</div>
                  <div className="bsu">{de}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* ── 4. VALORES CON EVIDENCIA ── */}
      <div className="sec-label" style={{ marginBottom: 12 }}>Por qué confiar en nosotros</div>
      <h2 className="sec-h2" style={{ marginBottom: 10 }}>Estándares con <em>evidencia real</em></h2>
      <p className="sec-sub" style={{ marginBottom: 24 }}>
        Cada afirmación viene respaldada por un proceso concreto y documentado, no por marketing.
      </p>
      <div className="vals-grid" style={{ marginBottom: 40 }}>
        {VALUES.map(([ic, ti, de]) => (
          <div className="val" key={ti}>
            <div className="val-ic">{ic}</div>
            <h3>{ti}</h3>
            <p>{de}</p>
          </div>
        ))}
      </div>

      {/* ── 5. DOCUMENTACIÓN ── */}
      <div style={{ background: "var(--white)", border: "1px solid var(--border-s)", borderRadius: 16, padding: "36px 40px", boxShadow: "0 2px 8px var(--sh)" }}>
        <div className="sec-label" style={{ marginBottom: 12 }}>Documentación que entregamos</div>
        <h2 className="sec-h2" style={{ marginBottom: 10 }}>Cada trabajo, <em>completamente documentado</em></h2>
        <p className="sec-sub" style={{ marginBottom: 26 }}>
          Todo trabajo finaliza con un paquete formal firmado por el ingeniero responsable.
          No es opcional — es parte del estándar de servicio de Recursos Tecnológicos.
        </p>
        <div className="cert-list">
          {DOCS.map(([ic, ti, de]) => (
            <div className="cert-item" key={ti}>
              <div className="cert-icon">{ic}</div>
              <div>
                <div className="cert-title">{ti}</div>
                <div className="cert-desc">{de}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}

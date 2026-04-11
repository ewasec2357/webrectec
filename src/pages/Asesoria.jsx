import { wm } from "../constants.js";

export default function Asesoria() {
  return (
    <div className="fade">
      <div className="page-hero"><div className="ph-inner">
        <div className="ph-label">Asesoría de proyectos solares</div>
        <h2>Tu Proyecto Solar,<br/><em>Diseñado por Ingenieros</em></h2>
        <p>Desde paneles para tu hogar hasta plantas solares industriales. Evaluamos tu caso, diseñamos el sistema óptimo, calculamos el retorno de inversión y acompañamos todo el proceso hasta la puesta en marcha.</p>
        <a href={wm("Quiero asesoría para proyecto solar")} className="btn-primary" style={{display:"inline-flex",textDecoration:"none"}} target="_blank" rel="noreferrer">
          📐 Iniciar mi proyecto
        </a>
      </div></div>

      <div className="sec-hdr">
        <div className="sec-label">Escala del proyecto</div>
        <h2 className="sec-h2" style={{fontSize:30}}>Asesoramos proyectos de cualquier tamaño</h2>
        <p className="sec-sub">Cada proyecto recibe diagnóstico técnico personalizado, propuesta de diseño y análisis de retorno de inversión.</p>
      </div>

      <div className="as-scales">
        {[
          { cls:"peq", bc:"bpeq", lbl:"PEQUEÑA ESCALA", ti:"Residencial y Pequeño Comercio", rng:"1 – 15 kWp", rc:"var(--blue)", de:"Hogares, tiendas, talleres y oficinas. Recuperación de inversión en 3–5 años.",
            li:["Evaluación de consumo y sombras","Diseño del arreglo fotovoltaico","Selección de inversor y baterías","Gestión de trámites con distribuidora","Instalación y puesta en marcha"] },
          { cls:"med", bc:"bmed", lbl:"MEDIANA ESCALA", ti:"Empresas e Industria Mediana", rng:"15 – 100 kWp", rc:"var(--amber)", de:"Fábricas, colegios, clínicas y hoteles. Net metering y posible inyección a red.",
            li:["Auditoría energética completa","Diseño estructural y eléctrico","Dimensionamiento de almacenamiento","Análisis financiero y ROI detallado","Monitoreo post-instalación"] },
          { cls:"gra", bc:"bgra", lbl:"GRAN ESCALA", ti:"Industria y Proyectos Especiales", rng:"100+ kWp", rc:"var(--blue-dd)", de:"Plantas industriales, minería y telecomunicaciones. Soluciones híbridas de alta potencia.",
            li:["Estudio de factibilidad técnica","Ingeniería de detalle completa","Gestión de financiamiento","Permisos y certificaciones oficiales","Soporte y mantenimiento continuo"] },
        ].map(s => (
          <div className={`asc ${s.cls}`} key={s.ti}>
            <span className={`sbadge ${s.bc}`}>{s.lbl}</span>
            <h3>{s.ti}</h3>
            <div className="range" style={{color:s.rc}}>{s.rng}</div>
            <p>{s.de}</p>
            <ul>{s.li.map(l => <li key={l}>{l}</li>)}</ul>
          </div>
        ))}
      </div>

      <div className="sec-hdr">
        <div className="sec-label">Proceso de trabajo</div>
        <h2 className="sec-h2" style={{fontSize:30}}>¿Cómo funciona nuestra asesoría?</h2>
      </div>

      <div className="steps" style={{marginBottom:32}}>
        {[
          { n:"1", ti:"Consulta inicial",    su:"Evaluamos tu caso y consumo actual"    },
          { n:"2", ti:"Visita técnica",      su:"Inspección del sitio y sombras"        },
          { n:"3", ti:"Diseño del sistema",  su:"Propuesta técnica con especificaciones" },
          { n:"4", ti:"Análisis financiero", su:"ROI, ahorro proyectado y financiamiento"},
          { n:"5", ti:"Instalación",         su:"Puesta en marcha y monitoreo"          },
        ].map(s => (
          <div className="step" key={s.n}>
            <div className="step-num">{s.n}</div>
            <div className="step-ti">{s.ti}</div>
            <div className="step-su">{s.su}</div>
          </div>
        ))}
      </div>

      <div className="g3">
        {[
          ["💰","Análisis de ROI detallado","Proyecciones a 5, 10 y 20 años según tu consumo y tarifa eléctrica actual. Con escenarios optimista, base y conservador."],
          ["📄","Gestión de permisos","Tramitamos todos los permisos con la distribuidora eléctrica y los entes reguladores del sector energético."],
          ["🔧","Soporte post-instalación","Monitoreo continuo, mantenimiento preventivo y soporte técnico remoto después de la instalación."],
        ].map(([ic,ti,de]) => (
          <div className="card" key={ti}><div className="card-accent"/><div className="c-icon">{ic}</div><h3>{ti}</h3><p>{de}</p></div>
        ))}
      </div>
    </div>
  );
}

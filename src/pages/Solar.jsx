import { wm } from "../constants.js";

const Q = "?auto=format&fit=crop&w=800&q=80";

const imgs = [
  { src:`https://images.unsplash.com/photo-1509391366360-2e959784a276${Q}`, cap:"Paneles solares residenciales" },
  { src:`https://images.unsplash.com/photo-1508514177221-188b1cf16e9d${Q}`, cap:"Planta solar de mediana escala" },
  { src:`https://images.unsplash.com/photo-1497440001374-f26997328c1b${Q}`, cap:"Instalación en techo comercial" },
  { src:`https://images.unsplash.com/photo-1466611653911-95081537e5b7${Q}`, cap:"Parque solar industrial — Lima, Perú" },
  { src:`https://images.unsplash.com/photo-1545208075-95a3e09c1ea1${Q}`, cap:"Inversor híbrido + controlador MPPT" },
  { src:`https://images.unsplash.com/photo-1559302504-64aae6ca6b6d${Q}`, cap:"Baterías LiFePO4 de pared y rack" },
];

export default function Solar() {
  return (
    <div>
      <div className="page-hero"><div className="ph-inner">
        <div className="ph-label">Energía solar</div>
        <h2>Autonomía Energética<br/><em>impulsada por litio y sol</em></h2>
        <p>Sistemas completos con almacenamiento LiFePO4. Reducción del 70–80% en costos vs diésel. On-grid, off-grid e híbrido para hogares, empresas y proyectos industriales en todo el Perú.</p>
        <a href={wm("Quiero información sobre sistema solar")} className="btn-primary" style={{display:"inline-flex",textDecoration:"none"}} target="_blank" rel="noreferrer">
          ☀️ Diseñar mi sistema solar
        </a>
      </div></div>

      <div className="sol-metrics">
        {[["70–80%","Ahorro vs diésel"],["6,000","Ciclos LiFePO4"],["95%","Eficiencia del sistema"],["+ 10 años","Vida útil garantizada"]].map(([v,k]) => (
          <div className="smet" key={k}><div className="smet-v">{v}</div><div className="smet-k">{k}</div></div>
        ))}
      </div>

      {/* GALERÍA */}
      <div className="sec-hdr">
        <div className="sec-label">Instalaciones</div>
        <h2 className="sec-h2">Paneles · Inversores · <em>MPPT · Baterías</em></h2>
        <p className="sec-sub">Diseñamos e instalamos sistemas completos. Cada proyecto incluye ingeniería, montaje y puesta en marcha.</p>
      </div>
      <div className="img-gallery">
        {imgs.map((im, i) => (
          <div className="igcard" key={i}>
            <img src={im.src} alt={im.cap} loading="lazy" />
            <div className="igcard-cap">{im.cap}</div>
          </div>
        ))}
      </div>

      <div className="sec-hdr">
        <div className="sec-label">Componentes</div>
        <h2 className="sec-h2" style={{fontSize:30}}>Todo en un solo lugar</h2>
      </div>

      <div className="g3" style={{marginBottom:28}}>
        {[
          ["🌞","Paneles Solares","Diseño e instalación de arreglos fotovoltaicos residenciales, comerciales e industriales. Cálculo de rendimiento y orientación óptima."],
          ["🔄","Inversores Híbridos","On/off-grid: conmutación automática entre red eléctrica, paneles solares y baterías sin intervención del usuario."],
          ["📊","Controladores MPPT","Máxima extracción de energía solar en cualquier condición. Compatibles con LiFePO4, Li-Ion y plomo-ácido."],
          ["🏠","Baterías de Pared LiFePO4","6,000 ciclos, +10 años de vida útil. Almacenamiento residencial y comercial compatible con cualquier sistema solar."],
          ["🗄️","Baterías Rackeables","Escalables de 100Wh a 243KWh para telecomunicaciones, industria y proyectos rurales remotos."],
          ["📡","Monitoreo Inteligente","Control en tiempo real desde smartphone: producción, consumo y estado de baterías 24/7."],
        ].map(([ic,ti,de]) => (
          <div className="card" key={ti}><div className="card-accent"/><div className="c-icon">{ic}</div><h3>{ti}</h3><p>{de}</p></div>
        ))}
      </div>

      <div className="sec-hdr">
        <div className="sec-label">Sectores que atendemos</div>
        <h2 className="sec-h2" style={{fontSize:30}}>El poder del litio en todos los sectores</h2>
      </div>

      <div className="g3">
        {[
          ["⛏️","Minería y Construcción","Energía constante para maquinaria pesada y operaciones remotas. Elimina costos de combustible y tiempos muertos."],
          ["🌾","Agricultura y Pesca","Riego automatizado, refrigeración móvil y electrificación de equipos en campo y faenas productivas."],
          ["🏥","Salud","Energía sin interrupción en áreas críticas, cadena de frío asegurada y protección de equipos sensibles."],
          ["📡","Telecomunicaciones","Respaldo confiable para antenas, redes rurales y sistemas de comunicación de emergencia."],
          ["🏕️","Zonas Rurales","Energía limpia en comunidades sin acceso a red eléctrica. Proyectos sostenibles de electrificación rural."],
          ["🏭","Industria","Respaldo UPS y energía autónoma para producción continua sin interrupciones ni pérdidas por cortes."],
        ].map(([ic,ti,de]) => (
          <div className="card" key={ti}><div className="card-accent"/><div className="c-icon">{ic}</div><h3>{ti}</h3><p>{de}</p></div>
        ))}
      </div>
    </div>
  );
}

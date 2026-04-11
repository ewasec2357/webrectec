import { wm } from "../constants.js";

const Q = "?auto=format&fit=crop&w=800&q=80";

const imgs = [
  { src:`https://images.unsplash.com/photo-1558618666-fcd25c85cd64${Q}`, cap:"Scooter eléctrico — diagnóstico y reparación" },
  { src:`https://images.unsplash.com/photo-1571068316344-75bc76f77890${Q}`, cap:"Moto eléctrica — pack a medida" },
  { src:`https://images.unsplash.com/photo-1568772585407-9361f9bf3a87${Q}`, cap:"Mototaxi eléctrico — conversión litio" },
  { src:`https://images.unsplash.com/photo-1449965408869-eaa3f722e40d${Q}`, cap:"Motocarga eléctrica — mayor autonomía" },
];

export default function Vehiculos() {
  return (
    <div>
      <div className="sec-hdr">
        <div className="sec-label">Vehículos eléctricos</div>
        <h2 className="sec-h2">Reparamos y Optimizamos<br/><em>todo Vehículo Eléctrico</em></h2>
        <p className="sec-sub">Diagnóstico completo, reparación de batería, motor y controlador. Si tiene batería de litio, lo atendemos con informe técnico incluido.</p>
      </div>

      {/* GALERÍA */}
      <div className="img-gallery g2c" style={{marginBottom:32}}>
        {imgs.map((im, i) => (
          <div className="igcard" key={i}>
            <img src={im.src} alt={im.cap} loading="lazy" />
            <div className="igcard-cap">{im.cap}</div>
          </div>
        ))}
      </div>

      <div className="evg">
        {[
          ["🛵","Scooters eléctricos","Diagnóstico de batería, motor y controlador. Reemplazo de pack con certificado técnico."],
          ["🏍️","Motos eléctricas","Fabricación de pack a medida. Mejora de autonomía y potencia con celdas A+."],
          ["🛺","Motocargas eléctricas","Conversión plomo→litio. Hasta 3x más autonomía y 60% menos peso."],
          ["🚐","Motaxis eléctricos","Optimización del sistema de propulsión con diagnóstico completo e informe técnico."],
          ["🦽","Sillas eléctricas","Baterías 7S LiFePO4 para máxima durabilidad y seguridad en uso continuo."],
          ["🛴","Scooters personales","Diagnóstico BMS, reemplazo de celdas y balanceo certificado."],
        ].map(([ic,ti,de]) => (
          <div className="evc" key={ti}>
            <div className="evi">{ic}</div><h3>{ti}</h3><p>{de}</p>
          </div>
        ))}
      </div>

      <div className="conv-ban">
        <div>
          <h3>⚡ Conversión plomo → litio</h3>
          <p>Reemplaza tu batería de plomo por litio: hasta 3x más autonomía, 60% menos peso, mayor vida útil y carga más rápida. Incluye análisis de compatibilidad con tu controlador y motor.</p>
        </div>
        <a href={wm("Quiero conversión de plomo a litio")} className="btn-primary" style={{display:"inline-flex",textDecoration:"none",flexShrink:0}} target="_blank" rel="noreferrer">
          Consultar →
        </a>
      </div>

      <div className="g3">
        {[
          ["🔍","Diagnóstico gratuito","Revisión de voltaje, salud de celdas, capacidad y balanceo. Informe técnico sin costo en la consulta inicial."],
          ["🛡️","Garantía certificada","Certificado de funcionamiento y garantía de 6–12 meses firmada por el ingeniero responsable del trabajo."],
          ["⚙️","BMS especializado","Identificamos, diagnosticamos y reemplazamos el BMS de cualquier vehículo eléctrico del mercado peruano."],
        ].map(([ic,ti,de]) => (
          <div className="card" key={ti}><div className="card-accent"/><div className="c-icon">{ic}</div><h3>{ti}</h3><p>{de}</p></div>
        ))}
      </div>
    </div>
  );
}

import { WaIcon } from "../components/Icons.jsx";
import { wm } from "../constants.js";

const imgs = [
  { src:"https://images.unsplash.com/photo-1620714223084-8fcacc2107bc?auto=format&fit=crop&w=800&q=80",    cap:"Celdas Li-Ion 18650 — EVE 26V Gama A+" },
  { src:"https://www.evlithium.com/Upfile/image/20230629/20230629170865896589.webp",                       cap:"Celdas Li-Ion 21700 — EVE 50E (5,000 mAh)" },
  { src:"https://www.evlithium.com/Upfile/image/20230222/20230222103788448844.webp",                       cap:"Celdas LiFePO4 33140 — EVE C33 (15 Ah)" },
  { src:"https://resource.evemall.com/Public/Uploads/uploadfile2/images/20250303/fangxinglinsuan.jpg",     cap:"Celdas prismáticas LiFePO4 — gama completa EVE" },
  { src:"https://www.evlithium.com/upfile/20240105/17044190424108549.jpg",                                 cap:"EVE LF280K — 280 Ah prismática para solar" },
  { src:"https://www.evlithium.com/Upfile/image/20230717/20230717090049544954.webp",                       cap:"Pack de 16S LiFePO4 armado con BMS certificado" },
];

export default function Baterias() {
  return (
    <div>
      <div className="page-hero"><div className="ph-inner">
        <div className="ph-label">Baterías de litio</div>
        <h2>Fabricación y Reparación<br/><em>de Packs de Litio</em></h2>
        <p>Celdas Gama Alta A+ con 600–1,200 ciclos garantizados. BMS incluido, balanceo certificado e informe técnico firmado por ingeniero en cada trabajo.</p>
        <a href={wm("Quiero cotizar batería de litio")} className="btn-primary" style={{display:"inline-flex",textDecoration:"none"}} target="_blank" rel="noreferrer">
          <WaIcon /> Cotizar mi batería
        </a>
      </div></div>

      {/* GALERÍA DE CELDAS */}
      <div className="sec-hdr">
        <div className="sec-label">Tipos de celdas</div>
        <h2 className="sec-h2">18650 · 21700 · 33140 · <em>LiFePO4 Prismática</em></h2>
        <p className="sec-sub">Trabajamos con todas las celdas del mercado. Cada pack se arma con celdas A+ verificadas con equipo de medición calibrado.</p>
      </div>
      <div className="img-gallery">
        {imgs.map((im, i) => (
          <div className="igcard" key={i}>
            <img src={im.src} alt={im.cap} loading="lazy" />
            <div className="igcard-cap">{im.cap}</div>
          </div>
        ))}
      </div>

      <div className="batt-layout">
        <div>
          <div className="sec-hdr">
            <div className="sec-label">Pack destacado</div>
            <h2 className="sec-h2" style={{fontSize:28}}>16S5P — 57.6V / 12.5Ah / 720Wh</h2>
            <p className="sec-sub">Pack más popular para scooters eléctricos. Celdas Gama Alta A+ verificadas, BMS con protección completa. Autonomía ~33km, carga en 4 horas.</p>
          </div>
          <a href={wm("Quiero cotizar batería 16S5P 57.6V")} className="btn-primary" style={{display:"inline-flex",textDecoration:"none"}} target="_blank" rel="noreferrer">
            <WaIcon /> Cotizar este pack
          </a>
        </div>
        <div className="batt-specs">
          {[["57.6V","Voltaje nominal"],["12.5Ah","Capacidad"],["720Wh","Energía total"],["~33km","Autonomía est."],["0.2C","C-rate de carga"],["4h","Carga completa"]].map(([v,k]) => (
            <div className="spec-box" key={k}><div className="spec-val">{v}</div><div className="spec-key">{k}</div></div>
          ))}
        </div>
      </div>

      <div className="sec-hdr">
        <div className="sec-label">Calidad de celdas</div>
        <h2 className="sec-h2" style={{fontSize:30}}>No todas las celdas son iguales</h2>
        <p className="sec-sub">La marca no garantiza el rendimiento — la ficha técnica sí. Usamos exclusivamente Gama Alta A+.</p>
      </div>

      <div className="cycles">
        {[
          { l:"GAMA C — BAJA", c:"bad", t:"100–300 ciclos", d:"Celdas recicladas. Voltaje inestable, capacidad reducida y riesgo de ignición.", b:"bb" },
          { l:"GAMA B — MEDIA", c:"mid", t:"300–600 ciclos", d:"Se degradan rápido. Capacidad se reduce notoriamente después del primer año.", b:"bm" },
          { l:"✓ GAMA A+ — NUESTRA", c:"ok", t:"600–1,200 ciclos", d:"Capacidad real y estable. Celdas certificadas con ficha técnica verificable. Seguridad muy alta.", b:"bg" },
        ].map(c => (
          <div className={`cyc ${c.c==="ok"?"best":""}`} key={c.t}>
            <div className={`cyc-lbl ${c.c}`}>{c.l}</div>
            <h3>{c.t}</h3><p>{c.d}</p>
            <div className="bar"><div className={`bf ${c.b}`}/></div>
          </div>
        ))}
      </div>

      <div className="cmp">
        <div className="cmp-hdr">
          <div className="cmp-col">Parámetro</div>
          <div className="cmp-col g">⚡ Litio A+</div>
          <div className="cmp-col d">🪫 Plomo-ácido</div>
        </div>
        {[
          ["Durabilidad","2,000–5,000 ciclos","g","300–500 ciclos","r"],
          ["Peso","60% más ligera","g","Pesada y voluminosa","r"],
          ["Eficiencia",">95%","g","70–80%","r"],
          ["Mantenimiento","Casi ninguno","g","Periódico","r"],
          ["Tiempo de carga","3–5 horas","g","8–12 horas","r"],
          ["Retorno de inversión","Recupera en <2 años","g","Mayor costo total","r"],
        ].map(([p,l,lc,pl,pc]) => (
          <div className="cmp-row" key={p}>
            <div className="cmp-p">{p}</div>
            <div className={`cmp-v ${lc}`}>{l}</div>
            <div className={`cmp-v ${pc}`}>{pl}</div>
          </div>
        ))}
      </div>

      <div className="g3">
        {[
          ["🏭","Fabricación a medida","Packs desde 7S LiFePO4 para sillas eléctricas hasta 24S para motocargas industriales. Cualquier voltaje y capacidad."],
          ["🔧","Reparación y balanceo","Reemplazo de celdas dañadas, cambio de BMS defectuoso y balanceo certificado de packs existentes."],
          ["📋","Documentación técnica","Informe de diagnóstico, fabricación, certificado de funcionamiento y garantía firmada por ingeniero responsable."],
        ].map(([ic,ti,de]) => (
          <div className="card" key={ti}>
            <div className="card-accent"/><div className="c-icon">{ic}</div><h3>{ti}</h3><p>{de}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

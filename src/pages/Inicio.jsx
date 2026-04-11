import { useEffect, useRef } from "react";
import { WaIcon } from "../components/Icons.jsx";
import { wm } from "../constants.js";

export default function Inicio({ setTab }) {
  const videoRef = useRef(null);

  useEffect(() => {
    const vid = videoRef.current;
    if (!vid) return;
    const onEnded = () => {
      setTimeout(() => {
        vid.currentTime = 0;
        vid.play();
      }, 1000);
    };
    vid.addEventListener("ended", onEnded);
    return () => vid.removeEventListener("ended", onEnded);
  }, []);
  return (
    <div className="fade">
      <span className="seohide">Recursos Tecnológicos SAC Lima baterías litio vehículos eléctricos energía solar paneles solares inversores asesoría proyectos solares scooter moto Lima Chorrillos LiFePO4</span>

      {/* HERO — full bleed con video */}
      <div className="hero-full">
        <video
          ref={videoRef}
          className="hero-video"
          autoPlay muted playsInline
          disablePictureInPicture
          x-webkit-airplay="deny"
        >
          <source src="/hero-video.mp4" type="video/mp4" />
        </video>
        <div className="hero-full-overlay" />
        <div className="hero-full-content">
          <div className="hero-full-text">
            <div className="hero-eyebrow">INGENIERÍA EN ENERGÍA · LIMA, PERÚ</div>
            <h1>
              BATERÍAS,<br/>
              <em>Solar</em>
              & MOVILIDAD
            </h1>
            <p className="hero-desc">
              Fabricamos y reparamos baterías de litio, diseñamos sistemas de energía solar
              y damos vida a vehículos eléctricos. Ingenieros certificados en Lima, Perú.
            </p>
            <div className="hero-btns">
              <a href={wm("Hola, quiero una cotización")} className="btn-primary" target="_blank" rel="noreferrer">
                <WaIcon /> Cotizar ahora
              </a>
              <button className="btn-ghost-light" onClick={() => setTab("productos")}>
                Ver nuestros productos
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* STATS */}
      <div className="stats-row">
        {[["1,200","ciclos garantizados Li-Ion"],["6,000","ciclos garantizados LiFePO4"],["95%","eficiencia energética solar"],["100%","ingenieros certificados"]].map(([v,k]) => (
          <div className="stat-card" key={k}><div className="stat-val">{v}</div><div className="stat-key">{k}</div></div>
        ))}
      </div>

      {/* SERVICE CARDS */}
      <div className="g2" style={{ marginBottom: 18 }}>
        {[
          { ic:"🔋", ti:"Baterías de Litio",  de:"Fabricación y reparación de packs personalizados 7S–24S. Celdas Gama Alta A+ con 600–1,200 ciclos. BMS, balanceo certificado e informe técnico en cada trabajo.", tags:["Li-Ion","LiFePO4","A medida","Certificado"], tab:"productos" },
          { ic:"☀️", ti:"Energía Solar",       de:"Sistemas completos: paneles, inversores híbridos, controladores MPPT y almacenamiento LiFePO4. Asesoría para proyectos residenciales, empresariales y de gran escala.", tags:["Paneles","Inverter","MPPT","On/Off-grid"], tab:"asesoria" },
        ].map(c => (
          <div className="card" key={c.ti} style={{ cursor:"pointer" }} onClick={() => setTab(c.tab)}>
            <div className="card-accent"/>
            <div className="c-icon">{c.ic}</div>
            <h3>{c.ti}</h3>
            <p>{c.de}</p>
            <div className="tags">{c.tags.map(t => <span className="tag" key={t}>{t}</span>)}</div>
          </div>
        ))}
      </div>

      <div className="g3">
        {[
          { ic:"📐", ti:"Asesoría de Proyectos Solares", de:"Diseño y dimensionamiento a pequeña, mediana y gran escala. Evaluación técnica, cálculo de ROI y gestión de permisos.", tab:"asesoria"  },
          { ic:"🛵", ti:"Vehículos Eléctricos",          de:"Reparación de motos, scooters, motocargas y motaxis. Conversión de plomo a litio con 3x más autonomía.",               tab:"productos" },
          { ic:"🤝", ti:"Alianzas Internacionales",      de:"Socios estratégicos globales en fabricación de baterías LiFePO4 y tecnología solar. Productos certificados con garantía real.", tab:"nosotros"  },
        ].map(c => (
          <div className="card" key={c.ti} style={{ cursor:"pointer" }} onClick={() => setTab(c.tab)}>
            <div className="card-accent"/>
            <div className="c-icon">{c.ic}</div>
            <h3>{c.ti}</h3>
            <p>{c.de}</p>
          </div>
        ))}
      </div>

      {/* GALERÍA DE TRABAJOS */}
      <div className="sec-hdr" style={{ marginTop: 52 }}>
        <div className="sec-label">Nuestros Trabajos</div>
        <h2 className="sec-h2">Galería de <em>Proyectos</em></h2>
        <p className="sec-sub">Instalaciones reales, realizadas por nuestros ingenieros en Lima, Perú.</p>
      </div>
      <div className="img-gallery">
        {[
          { src:"https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=800&q=80", cap:"Sistema solar residencial" },
          { src:"https://images.unsplash.com/photo-1620714223084-8fcacc2107bc?auto=format&fit=crop&w=800&q=80", cap:"Pack de baterías de litio 18650" },
          { src:"https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800&q=80", cap:"Scooter eléctrico reparado" },
          { src:"https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&w=800&q=80", cap:"Planta solar mediana escala" },
          { src:"https://images.unsplash.com/photo-1593941707882-a5bba14938c7?auto=format&fit=crop&w=800&q=80", cap:"Baterías LiFePO4 instaladas" },
          { src:"https://images.unsplash.com/photo-1571068316344-75bc76f77890?auto=format&fit=crop&w=800&q=80", cap:"Conversión moto eléctrica litio" },
        ].map((im, i) => (
          <div className="igcard" key={i}>
            <img src={im.src} alt={im.cap} loading="lazy" />
            <div className="igcard-cap">{im.cap}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

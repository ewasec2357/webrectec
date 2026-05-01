import { useEffect, useRef, useState } from "react";
import { WaIcon } from "../components/Icons.jsx";
import { wm } from "../constants.js";

const CLIENTES = [
  {
    id: "personas",
    num: "01",
    icon: "🏠",
    titulo: "Personas",
    sub: "Moto, hogar, scooter",
    desc: "Conversión a litio · solar residencial · reparación de packs.",
    panel: {
      badge: "SOLUCIÓN PARA · PERSONAS",
      h: "Lo que ofrecemos para ti",
      p: "Conversión a litio · solar residencial · reparación de packs.",
      servicios: ["Conversión de batería plomo → litio", "Sistema solar residencial completo", "Reparación y diagnóstico de packs"],
      tab: "productos",
    },
  },
  {
    id: "empresas",
    num: "02",
    icon: "🏢",
    titulo: "Empresas / Talleres",
    sub: "PYME y comercios",
    desc: "Solar empresarial · UPS · respaldo de baterías · ahorro mensual.",
    panel: {
      badge: "SOLUCIÓN PARA · EMPRESAS",
      h: "Reducí tu factura de energía",
      p: "Solar empresarial · UPS industrial · respaldo de baterías · ahorro mensual garantizado.",
      servicios: ["Sistema solar empresarial On/Off-grid", "UPS con batería LiFePO4", "Respaldo y almacenamiento de energía"],
      tab: "asesoria",
    },
  },
  {
    id: "proyectos",
    num: "03",
    icon: "🏭",
    titulo: "Proyectos Grandes",
    sub: "Industria, minería",
    desc: "Plantas solares mediana/gran escala · LiFePO4 industrial · ROI.",
    panel: {
      badge: "SOLUCIÓN PARA · PROYECTOS GRANDES",
      h: "Ingeniería a gran escala",
      p: "Plantas solares mediana/gran escala · baterías LiFePO4 industriales · análisis de ROI detallado.",
      servicios: ["Diseño de planta solar a gran escala", "Baterías LiFePO4 industriales", "Asesoría técnica y cálculo de ROI"],
      tab: "asesoria",
    },
  },
  {
    id: "gobierno",
    num: "04",
    icon: "🏛️",
    titulo: "Gobierno / Municipios",
    sub: "Sector público",
    desc: "Licitaciones · alumbrado solar · proyectos comunitarios.",
    panel: {
      badge: "SOLUCIÓN PARA · SECTOR PÚBLICO",
      h: "Energía limpia para tu comunidad",
      p: "Licitaciones · alumbrado público solar · proyectos comunitarios de energía renovable.",
      servicios: ["Alumbrado público solar", "Proyectos solares comunitarios", "Gestión de licitaciones técnicas"],
      tab: "contacto",
    },
  },
];

export default function Inicio({ setTab }) {
  const videoRef = useRef(null);
  const [activo, setActivo] = useState(0);

  useEffect(() => {
    const vid = videoRef.current;
    if (!vid) return;
    const onEnded = () => {
      setTimeout(() => { vid.currentTime = 0; vid.play(); }, 1000);
    };
    vid.addEventListener("ended", onEnded);
    return () => vid.removeEventListener("ended", onEnded);
  }, []);

  const panel = CLIENTES[activo].panel;

  return (
    <div className="fade">
      <span className="seohide">Recursos Tecnológicos SAC Lima baterías litio vehículos eléctricos energía solar paneles solares inversores asesoría proyectos solares scooter moto Lima Chorrillos LiFePO4</span>

      {/* HERO — full bleed con video */}
      <div className="hero-full">
        <video ref={videoRef} className="hero-video" autoPlay muted playsInline disablePictureInPicture x-webkit-airplay="deny">
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

      {/* ── SECCIÓN 1: ¿QUIÉN ERES? ── */}
      <section className="qs-wrap">
        <div className="sec-hdr" style={{ textAlign: "center", marginBottom: 28 }}>
          <div className="sec-label" style={{ justifyContent: "center" }}>01 · ¿Quién eres?</div>
          <h2 className="sec-h2" style={{ fontSize: "clamp(26px,3.5vw,42px)" }}>
            Trabajamos con <em>4 tipos</em> de cliente.
          </h2>
          <p className="sec-sub" style={{ margin: "8px auto 0", textAlign: "center" }}>
            Elige el tuyo y vemos qué necesitas.
          </p>
        </div>

        <div className="qs-grid">
          {CLIENTES.map((c, i) => (
            <button
              key={c.id}
              className={`qs-card${activo === i ? " qs-card--active" : ""}`}
              onClick={() => setActivo(i)}
            >
              <div className="qs-card-top">
                <div className="qs-icon">{c.icon}</div>
                <span className="qs-num">{c.num}</span>
              </div>
              <div className="qs-titulo">{c.titulo}</div>
              <div className="qs-sub">{c.sub}</div>
              <p className="qs-desc">{c.desc}</p>
            </button>
          ))}
        </div>

        {/* Panel de detalle */}
        <div className="qs-panel">
          <div className="qs-panel-left">
            <span className="qs-panel-badge">{panel.badge}</span>
            <h3 className="qs-panel-h">{panel.h}</h3>
            <p className="qs-panel-p">{panel.p}</p>
          </div>
          <div className="qs-panel-center">
            {panel.servicios.map(s => (
              <div key={s} className="qs-check">
                <span className="qs-check-ic">✓</span>
                <span>{s}</span>
              </div>
            ))}
          </div>
          <div className="qs-panel-right">
            <div className="qs-case-ph">caso de uso</div>
            <button className="qs-ver-btn" onClick={() => setTab(panel.tab)}>
              Ver solución completa →
            </button>
          </div>
        </div>
      </section>

      {/* ── SECCIÓN 2: CTA NARANJA ── */}
      <div className="cta-amber">
        <div className="cta-amber-icon">🔧</div>
        <div className="cta-amber-text">
          <div className="cta-amber-h">Asesoría &amp; diagnóstico <u>GRATIS</u></div>
          <div className="cta-amber-s">Realiza tu consulta sin compromiso alguno.</div>
        </div>
        <a href={wm("Hola, quiero agendar una asesoría gratuita")} className="cta-amber-btn" target="_blank" rel="noreferrer">
          📅 AGENDAR
        </a>
      </div>

      {/* ── SECCIÓN 3: LO QUE HACEMOS ── */}
      <section style={{ marginTop: 52 }}>
        <div className="sec-hdr" style={{ marginBottom: 24 }}>
          <div className="sec-label">02 · Lo que hacemos</div>
          <h2 className="sec-h2">Tres pilares · <em>una sola empresa</em></h2>
        </div>
        <div className="pilares-grid">
          {[
            { num: "01", ic: "🔋", ti: "Baterías de Litio",    de: "Fabricación, reparación y venta. Li-Ion / LiFePO4.", tab: "productos" },
            { num: "02", ic: "☀️", ti: "Energía Solar",        de: "Diseño, venta e instalación. Residencial a industrial.", tab: "asesoria" },
            { num: "03", ic: "⚡", ti: "Vehículos Eléctricos", de: "Conversión a litio · 3× autonomía · garantía.", tab: "productos" },
          ].map(p => (
            <div key={p.ti} className="pilar-card">
              <div className="pilar-num">{p.num}</div>
              <div className="pilar-body">
                <div className="pilar-ic">{p.ic}</div>
                <div>
                  <div className="pilar-ti">{p.ti}</div>
                  <div className="pilar-de">{p.de}</div>
                  <button className="pilar-link" onClick={() => setTab(p.tab)}>Ver más →</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── SECCIÓN 4: CONFIANZA ── */}
      <section className="trust-row">
        {/* Bloque izquierdo: Alianzas */}
        <div className="trust-left">
          <div className="sec-label">03 · Alianzas directas</div>
          <h2 className="sec-h2" style={{ marginBottom: 6 }}>
            Trabajamos directo con <em>fábricas A1.</em>
          </h2>
          <p className="sec-sub" style={{ marginBottom: 20 }}>= mejor precio + garantía real.</p>
          <div className="aliados-grid">
            {[
              { src: "/partners/partner-eve.avif",     alt: "EVE Energy" },
              { src: "/partners/partner-daly.webp",    alt: "Daly BMS" },
              { src: "/partners/partner-h2.avif",      alt: "Partner H2" },
              { src: "/partners/partner-sairifo.png",  alt: "SAIRIFO Solar" },
            ].map(p => (
              <div key={p.alt} className="aliado-logo">
                <img src={p.src} alt={p.alt} loading="lazy" />
              </div>
            ))}
          </div>
        </div>

        {/* Bloque derecho: Certificaciones */}
        <div className="trust-right">
          <div className="cert-card">
            <div className="sec-label">04 · Certificamos todo</div>
            <h2 className="sec-h2" style={{ marginBottom: 14 }}>
              Cada trabajo lleva <em>informe técnico</em> firmado.
            </h2>
            <div className="cert-stats">
              {[
                ["100%", "ingenieros certificados"],
                ["A1",   "celdas y componentes"],
                ["95%",  "eficiencia solar"],
                ["24h",  "respuesta a tu consulta"],
              ].map(([v, k]) => (
                <div key={k} className="cstat">
                  <div className="cstat-val">{v}</div>
                  <div className="cstat-key">{k}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── SECCIÓN 5: CTA FINAL ── */}
      <div className="final-cta">
        <div className="final-cta-left">
          <div className="final-cta-eyebrow">tu siguiente paso →</div>
          <div className="final-cta-h">Agenda tu diagnóstico gratis hoy.</div>
        </div>
        <div className="final-cta-btns">
          <a href={wm("Hola, quiero agendar una asesoría gratuita")} className="final-btn-amber" target="_blank" rel="noreferrer">
            📅 AGENDAR
          </a>
          <a href={wm("Hola")} className="final-btn-ghost" target="_blank" rel="noreferrer">
            <WaIcon /> WHATSAPP
          </a>
        </div>
      </div>
    </div>
  );
}

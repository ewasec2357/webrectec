import { useState, Fragment, useEffect, useRef } from "react";
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
  const [activo, setActivo] = useState(0);
  const gridRef = useRef(null);
  const benefGridRef = useRef(null);
  const [isMobile, setIsMobile] = useState(() => window.innerWidth <= 900);
  const autoTimer = useRef(null);
  const touchStartX = useRef(0);

  // Detectar mobile
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= 900);
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  // Auto-avance: en mobile mueve el carrusel, en desktop cicla el card activo
  useEffect(() => {
    autoTimer.current = setInterval(() => {
      setActivo(a => (a + 1) % CLIENTES.length);
    }, 2500);
    return () => clearInterval(autoTimer.current);
  }, []);

  // Touch swipe para navegación manual
  const onTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
    clearInterval(autoTimer.current);
  };
  const onTouchEnd = (e) => {
    const dx = e.changedTouches[0].clientX - touchStartX.current;
    if (dx < -40) setActivo(a => Math.min(a + 1, CLIENTES.length - 1));
    else if (dx > 40) setActivo(a => Math.max(a - 1, 0));
  };

  // Reveal loop de beneficio-cards: aparecen al bajar, se ocultan al subir
  useEffect(() => {
    const grid = benefGridRef.current;
    if (!grid) return;
    const cards = Array.from(grid.querySelectorAll('.beneficio-card'));
    let timeouts = [];

    const io = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        timeouts = cards.map((card, i) =>
          setTimeout(() => card.classList.add('in'), i * 200)
        );
      } else {
        timeouts.forEach(clearTimeout);
        timeouts = [];
        cards.forEach(card => card.classList.remove('in'));
      }
    }, { threshold: 0.1 });

    io.observe(grid);
    return () => { io.disconnect(); timeouts.forEach(clearTimeout); };
  }, []);

  const panel = CLIENTES[activo].panel;

  return (
    <div className="fade">
      <span className="seohide">Recursos Tecnológicos SAC Lima baterías litio vehículos eléctricos energía solar paneles solares inversores asesoría proyectos solares scooter moto Lima Chorrillos LiFePO4</span>

      {/* HERO — full bleed con video */}
      <div className="hero-full">
        <video className="hero-video" autoPlay muted loop playsInline preload="auto" poster="/hero-poster.avif" disablePictureInPicture x-webkit-airplay="deny">
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

          <h2 className="sec-h2" style={{ fontSize: "clamp(26px,3.5vw,42px)" }}>
            Trabajamos con <em>4 tipos</em> de cliente.
          </h2>
          <p className="sec-sub" style={{ margin: "8px auto 0", textAlign: "center" }}>
            Elige el tuyo y vemos qué necesitas.
          </p>
        </div>

        <div className="qs-carousel-outer" onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}>
        <div
          className="qs-grid"
          style={isMobile ? {
            transform: `translateX(calc(-${activo} * 80vw - ${activo * 12}px))`,
            transition: 'transform 0.55s ease',
          } : {}}
        >
          {CLIENTES.map((c, i) => (
            <Fragment key={c.id}>
              <button
                className={`qs-card${activo === i ? " qs-card--active" : ""}`}
                onClick={() => { clearInterval(autoTimer.current); setActivo(i); }}
              >
                <div className="qs-card-top">
                  <div className="qs-icon">{c.icon}</div>
                </div>
                <div className="qs-titulo">{c.titulo}</div>
                <div className="qs-sub">{c.sub}</div>
                <p className="qs-desc">{c.desc}</p>
              </button>
              {activo === i && (
                <div className="qs-panel qs-panel-inline">
                  <div className="qs-panel-left">
                    <span className="qs-panel-badge">{c.panel.badge}</span>
                    <h3 className="qs-panel-h">{c.panel.h}</h3>
                    <p className="qs-panel-p">{c.panel.p}</p>
                  </div>
                  <div className="qs-panel-center">
                    {c.panel.servicios.map(s => (
                      <div key={s} className="qs-check">
                        <span className="qs-check-ic">✓</span>
                        <span>{s}</span>
                      </div>
                    ))}
                  </div>
                  <div className="qs-panel-right">
                    <div className="qs-case-ph">caso de uso</div>
                    <button className="qs-ver-btn" onClick={() => setTab(c.panel.tab)}>
                      Ver solución completa →
                    </button>
                  </div>
                </div>
              )}
            </Fragment>
          ))}
        </div>
        </div>

        {/* Panel de detalle — solo mobile (carrusel) */}
        <div className="qs-panel qs-panel-mobile" key={activo}>
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

        {/* Panel de detalle — solo desktop */}
        <div className="qs-panel qs-panel-desktop">
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

      {/* ── SECCIÓN 3: BENEFICIOS LITIO ── */}
      <section className="beneficios-wrap">
        <div className="sec-hdr" style={{ textAlign: "center", marginBottom: 36 }}>
          <h2 className="sec-h2">Beneficios de la <em>Tecnología de Litio</em></h2>
        </div>
        <div className="beneficios-grid" ref={benefGridRef}>
          {[
            { icon: "⚡", ti: "Energía Continua y Confiable",                 de: "Elimina el riesgo de corte eléctrico, que afectaría la producción y/o las operaciones en áreas críticas." },
            { icon: "🛡️", ti: "Protección para Equipos de Alta Sensibilidad", de: "Protección integrada frente a defectos y distorsiones de la red eléctrica, evitando el deterioro de los equipos." },
            { icon: "💰", ti: "Reducción de Costos",                           de: "Ahorra en consumo y mantenimiento correctivo. No requiere equipos de protección o estabilización de la red eléctrica." },
            { icon: "🌱", ti: "Energía Limpia y Eficiente",                    de: "Transición hacia soluciones basadas en energía limpia y eficiente, reduciendo el uso de combustibles fósiles." },
            { icon: "📈", ti: "Escalabilidad y Flexibilidad",                  de: "Adapta sistemas modulares a cualquier etapa del proyecto, desde los pilotos hasta los proyectos de gran escala." },
            { icon: "🔧", ti: "Respaldo Técnico con Garantía Certificada",     de: "Garantiza sistemas de almacenamiento con baterías certificadas y respaldo técnico especializado." },
          ].map((b, i) => (
            <div key={b.ti} className="beneficio-card reveal">
              <div className="beneficio-ic">{b.icon}</div>
              <div className="beneficio-ti">{b.ti}</div>
              <p className="beneficio-de">{b.de}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── SECCIÓN 4: CONFIANZA ── */}
      <section className="trust-row">
        {/* Bloque izquierdo: Alianzas */}
        <div className="trust-left">

          <h2 className="sec-h2" style={{ marginBottom: 6 }}>
            Trabajamos directo con <em>fábricas A1.</em>
          </h2>

          <div className="aliados-ticker">
            <div className="aliados-track">
              {[
                { src: "/partners/partner-eve.avif",    alt: "EVE Energy" },
                { src: "/partners/partner-daly.webp",   alt: "Daly BMS" },
                { src: "/partners/partner-h2.avif",     alt: "Partner H2" },
                { src: "/partners/partner-sairifo.png", alt: "SAIRIFO Solar" },
                { src: "/partners/partner-eve.avif",    alt: "EVE Energy 2" },
                { src: "/partners/partner-daly.webp",   alt: "Daly BMS 2" },
                { src: "/partners/partner-h2.avif",     alt: "Partner H2 2" },
                { src: "/partners/partner-sairifo.png", alt: "SAIRIFO Solar 2" },
              ].map(p => (
                <div key={p.alt} className="aliado-logo">
                  <img src={p.src} alt={p.alt} loading="lazy" />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bloque derecho: Certificaciones */}
        <div className="trust-right">
          <div className="cert-card">

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

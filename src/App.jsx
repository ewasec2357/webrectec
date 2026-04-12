import { useState, useCallback, useEffect, useRef } from "react";
import "./styles.css";
import { TABS, PRODUCTS, SERVICES, wm, COMPANY } from "./constants.js";
import { WaIcon, CompanyLogo } from "./components/Icons.jsx";
import Splash      from "./components/Splash.jsx";
import MegaMenu    from "./components/MegaMenu.jsx";
import MobileMenu  from "./components/MobileMenu.jsx";
import Inicio    from "./pages/Inicio.jsx";
import Productos from "./pages/Productos.jsx";
import Servicios from "./pages/Servicios.jsx";
import Asesoria  from "./pages/Asesoria.jsx";
import Nosotros  from "./pages/Nosotros.jsx";
import Contacto  from "./pages/Contacto.jsx";

const CY = new Date().getFullYear();

const MEGA_DATA = { productos: PRODUCTS, servicios: SERVICES };

function Nav({ tab, setTab, menuOpen, setMenuOpen, setSelectedProduct }) {
  const [megaOpen, setMegaOpen] = useState(null); // null | "productos" | "servicios"
  const [scrolled, setScrolled] = useState(false);
  const navRef = useRef(null);
  const closeTimer = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function openMega(id)  {
    clearTimeout(closeTimer.current);
    setMegaOpen(id);
  }
  function closeMega() {
    closeTimer.current = setTimeout(() => setMegaOpen(null), 120);
  }

  return (
    <nav className={`nav${scrolled ? " nav-scrolled" : ""}`} ref={navRef}>
      <div className="nav-wrap">
        {/* LOGO */}
        <div className="nav-logo" onClick={() => { setTab("inicio"); setMegaOpen(false); }}>
          <CompanyLogo size={64} dark={true} />
          <div>
            <div className="logo-name">RECURSOS TECNOLÓGICOS</div>
            <div className="logo-tag">S.A.C. · Lima, Perú</div>
          </div>
        </div>

        {/* TABS desktop */}
        <div className="tab-strip">
          {TABS.map(t => t.hasMega ? (
            <div
              key={t.id}
              className="mega-trigger"
              onMouseEnter={() => openMega(t.id)}
              onMouseLeave={closeMega}
            >
              <button
                className={`tab-link ${tab === t.id ? "active" : ""} ${megaOpen === t.id ? "mega-open" : ""}`}
                onClick={() => { setTab(t.id); setMegaOpen(null); }}
              >
                {t.label}
                <svg className="mega-arrow" viewBox="0 0 10 6" width="10" height="10" fill="none">
                  <path d="M1 1l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              </button>
            </div>
          ) : (
            <button
              key={t.id}
              className={`tab-link ${tab === t.id ? "active" : ""}`}
              onClick={() => { setTab(t.id); setMegaOpen(null); }}
            >
              {t.label}
            </button>
          ))}
        </div>

        {/* CTA desktop */}
        <div className="nav-cta">
          <a href={wm("Hola, quiero cotizar")} className="btn-wa" target="_blank" rel="noreferrer">
            <WaIcon /> Cotizar
          </a>
        </div>

        {/* Hamburguesa mobile */}
        <button
          className="nav-hamburger"
          onClick={() => setMenuOpen(true)}
          aria-label="Abrir menú"
        >
          <span /><span /><span />
        </button>
      </div>

      {/* Mega panel — fuera del nav-wrap para no afectar el flex layout */}
      {megaOpen && MEGA_DATA[megaOpen] && (
        <div
          className="mega-panel-wrap"
          onMouseEnter={() => openMega(megaOpen)}
          onMouseLeave={closeMega}
        >
          <MegaMenu
            data={MEGA_DATA[megaOpen]}
            tabId={megaOpen}
            setTab={setTab}
            onClose={() => setMegaOpen(null)}
            onResetProduct={() => setSelectedProduct(null)}
          />
        </div>
      )}
    </nav>
  );
}

function Footer({ setTab }) {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-top">
          <div>
            <div className="footer-logo">
              <div className="footer-logo-mark">
                <CompanyLogo size={44} dark />
              </div>
              <div>
                <div className="footer-logo-name">RECURSOS TECNOLÓGICOS</div>
                <div className="footer-logo-tag">S.A.C. · Lima, Perú</div>
              </div>
            </div>
            <p className="footer-desc">
              Especialistas en baterías de litio, vehículos eléctricos y energía solar.
              Ingenieros certificados en Lima, Perú.
            </p>
            <div className="fcl-list">
              <div className="fcl-item"><div className="fcl-dot"/><a href={wm("")} target="_blank" rel="noreferrer">{COMPANY.phone}</a></div>
              <div className="fcl-item"><div className="fcl-dot"/><a href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a></div>
              <div className="fcl-item"><div className="fcl-dot"/><span style={{fontSize:14,color:"rgba(255,255,255,.5)"}}>{COMPANY.address}</span></div>
              <div className="fcl-item"><div className="fcl-dot"/><span style={{fontSize:14,color:"rgba(255,255,255,.5)"}}>{COMPANY.address2}</span></div>
            </div>
          </div>

          <div className="footer-col">
            <h4>Productos</h4>
            <ul>
              {[["Baterías de Litio"],["Energía Solar"],["Vehículos Eléctricos"]].map(([l]) => (
                <li key={l}><a onClick={() => setTab("productos")}>{l}</a></li>
              ))}
            </ul>
          </div>

          <div className="footer-col">
            <h4>Empresa</h4>
            <ul>
              <li><a onClick={() => setTab("asesoria")}>Asesoría Solar</a></li>
              <li><a onClick={() => setTab("nosotros")}>Nosotros</a></li>
              <li><a onClick={() => setTab("contacto")}>Contacto</a></li>
              <li><a href={COMPANY.facebook} target="_blank" rel="noreferrer">Facebook</a></li>
              <li><a href={COMPANY.instagram} target="_blank" rel="noreferrer">Instagram</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-copy">
            <p><strong>© {CY} Recursos Tecnológicos S.A.C.</strong> — Todos los derechos reservados. Lima, Perú.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  const [tab, setTab]                       = useState("inicio");
  const [menuOpen, setMenuOpen]             = useState(false);
  const [splashDone, setSplashDone]         = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [selectedService, setSelectedService] = useState(null);

  const handleSplashDone = useCallback(() => setSplashDone(true), []);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
    setSelectedProduct(null);
    setSelectedService(null);
  }, [tab]);

  const anim = {
    inicio:    "anim-up",
    productos: "anim-scale",
    servicios: "anim-up",
    asesoria:  "anim-blur",
    nosotros:  "anim-up-slow",
    contacto:  "anim-fade",
  };

  const pages = {
    inicio:    <Inicio    setTab={setTab} />,
    productos: <Productos selected={selectedProduct} setSelected={setSelectedProduct} />,
    servicios: <Servicios selected={selectedService} setSelected={setSelectedService} />,
    asesoria:  <Asesoria  />,
    nosotros:  <Nosotros  />,
    contacto:  <Contacto  />,
  };

  if (!splashDone) return <Splash onDone={handleSplashDone} />;

  return (
    <div className="app">
      <Nav tab={tab} setTab={setTab} menuOpen={menuOpen} setMenuOpen={setMenuOpen} setSelectedProduct={setSelectedProduct} />

      <MobileMenu
        tab={tab}
        setTab={setTab}
        open={menuOpen}
        onClose={() => setMenuOpen(false)}
        setSelectedProduct={setSelectedProduct}
        setSelectedService={setSelectedService}
      />

      {((tab === "productos" && selectedProduct) || (tab === "servicios" && selectedService)) && (
        <button
          className="prod-back"
          onClick={() => {
            setSelectedProduct(null);
            setSelectedService(null);
            window.scrollTo({ top: 0, behavior: "instant" });
          }}
        >
          ← Retroceder
        </button>
      )}

      <main className={`page ${anim[tab] ?? "anim-up"}`} key={tab}>
        {pages[tab]}
      </main>

      <Footer setTab={setTab} />

      <a
        href={wm("Hola, necesito información")}
        className="waf"
        target="_blank"
        rel="noreferrer"
        title="Escríbenos por WhatsApp"
        aria-label="Contactar por WhatsApp"
      >
        <WaIcon size={30} />
      </a>
    </div>
  );
}

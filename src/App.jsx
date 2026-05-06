import { useState, useCallback, useEffect, useRef, useMemo } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./styles.css";
import { TABS, PRODUCTS, SERVICES, wm, COMPANY } from "./constants.js";
import { loadGA, pageview } from "./analytics.js";
import { WaIcon, CompanyLogo } from "./components/Icons.jsx";
import Splash      from "./components/Splash.jsx";
import MegaMenu    from "./components/MegaMenu.jsx";
import MobileMenu  from "./components/MobileMenu.jsx";
import Inicio              from "./pages/Inicio.jsx";
import Productos           from "./pages/Productos.jsx";
import Servicios           from "./pages/Servicios.jsx";
import Asesoria            from "./pages/Asesoria.jsx";
import Nosotros            from "./pages/Nosotros.jsx";
import Contacto            from "./pages/Contacto.jsx";
import Privacidad          from "./pages/Privacidad.jsx";
import Terminos            from "./pages/Terminos.jsx";
import Cookies             from "./pages/Cookies.jsx";
import LibroReclamaciones  from "./pages/LibroReclamaciones.jsx";
import NotFound            from "./pages/NotFound.jsx";
import CookieBanner        from "./components/CookieBanner.jsx";
import BottomNav           from "./components/BottomNav.jsx";

const CY = new Date().getFullYear();

const MEGA_DATA = { productos: PRODUCTS, servicios: SERVICES };

function Nav({ tab, setTab, menuOpen, setMenuOpen, setSelectedProduct, setSelectedService }) {
  const [megaOpen, setMegaOpen] = useState(null); // null | "productos" | "servicios"
  const [megaClosing, setMegaClosing] = useState(false);
  const megaKey = useRef(null);
  const [scrolled, setScrolled] = useState(false);
  const navRef = useRef(null);
  const closeTimer = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function openMega(id) {
    clearTimeout(closeTimer.current);
    setMegaClosing(false);
    setMegaOpen(id);
    megaKey.current = id;
  }
  function closeMega() {
    setMegaClosing(true);
    closeTimer.current = setTimeout(() => {
      setMegaOpen(null);
      setMegaClosing(false);
    }, 280);
  }

  return (
    <nav className={`nav${scrolled ? " nav-scrolled" : ""}`} ref={navRef}>
      <div className="nav-wrap">
        {/* LOGO */}
        <div className="nav-logo" onClick={() => { setTab("inicio"); setMegaOpen(false); setSelectedProduct(null); setSelectedService(null); }}>
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
                onClick={() => { setTab(t.id); setMegaOpen(null); setSelectedProduct(null); setSelectedService(null); }}
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
          <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <line x1="3" y1="6"  x2="21" y2="6"  />
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </svg>
        </button>
      </div>

      {/* Mega panel — fuera del nav-wrap para no afectar el flex layout */}
      {(megaOpen || megaClosing) && MEGA_DATA[megaKey.current] && (
        <div
          className={`mega-panel-wrap${megaClosing ? " mega-closing" : ""}`}
          onMouseEnter={() => megaOpen && openMega(megaOpen)}
          onMouseLeave={closeMega}
        >
          <MegaMenu
            data={MEGA_DATA[megaKey.current]}
            tabId={megaKey.current}
            setTab={setTab}
            onClose={() => { setMegaOpen(null); setMegaClosing(false); }}
            onResetProduct={() => { setSelectedProduct(null); setSelectedService(null); }}
            onSelectItem={(item) => {
              if (megaKey.current === "productos") { setSelectedProduct(item); setSelectedService(null); }
              if (megaKey.current === "servicios") { setSelectedService(item); setSelectedProduct(null); }
            }}
          />
        </div>
      )}
    </nav>
  );
}

function Footer({ setTab }) {
  const [open, setOpen] = useState({});
  const toggle = (k) => setOpen(o => ({ ...o, [k]: !o[k] }));

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

          <div className={`footer-col${open.productos ? " fc-open" : ""}`}>
            <h4 onClick={() => toggle("productos")}>Productos</h4>
            <ul>
              {[["Baterías de Litio"],["Energía Solar"],["Vehículos Eléctricos"]].map(([l]) => (
                <li key={l}><a onClick={() => setTab("productos")}>{l}</a></li>
              ))}
            </ul>
          </div>

          <div className={`footer-col${open.empresa ? " fc-open" : ""}`}>
            <h4 onClick={() => toggle("empresa")}>Empresa</h4>
            <ul>
              <li><a onClick={() => setTab("asesoria")}>Asesoría Solar</a></li>
              <li><a onClick={() => setTab("nosotros")}>Nosotros</a></li>
              <li><a onClick={() => setTab("contacto")}>Contacto</a></li>
              <li><a href={COMPANY.facebook} target="_blank" rel="noreferrer">Facebook</a></li>
              <li><a href={COMPANY.instagram} target="_blank" rel="noreferrer">Instagram</a></li>
            </ul>
          </div>

          <div className={`footer-col${open.legal ? " fc-open" : ""}`}>
            <h4 onClick={() => toggle("legal")}>Legal</h4>
            <ul>
              <li><a onClick={() => setTab("privacidad")}>Política de Privacidad</a></li>
              <li><a onClick={() => setTab("terminos")}>Términos y Condiciones</a></li>
              <li><a onClick={() => setTab("cookies")}>Política de Cookies</a></li>
              <li><a onClick={() => setTab("reclamaciones")} className="footer-reclamos">📋 Libro de Reclamaciones</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-copy">
            <p><strong>© {CY} Recursos Tecnológicos S.A.C.</strong> — RUC 20605469729 — Todos los derechos reservados. Lima, Perú.</p>
          </div>
          <div className="footer-legal-links">
            <a onClick={() => setTab("privacidad")}>Privacidad</a>
            <span>·</span>
            <a onClick={() => setTab("terminos")}>Términos</a>
            <span>·</span>
            <a onClick={() => setTab("cookies")}>Cookies</a>
            <span>·</span>
            <a onClick={() => setTab("reclamaciones")}>Reclamaciones</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

const PAGE_TITLES = {
  inicio:        "Recursos Tecnológicos S.A.C. | Baterías de Litio y Energía Solar Lima Perú",
  productos:     "Productos | Baterías LiFePO4, Solar y Celdas · Recursos Tecnológicos",
  servicios:     "Servicios | Fabricación y Reparación de Baterías · Recursos Tecnológicos",
  asesoria:      "Asesoría Solar | Proyectos Fotovoltaicos en Lima · Recursos Tecnológicos",
  nosotros:      "Nosotros | Ingenieros Certificados en Lima · Recursos Tecnológicos",
  contacto:      "Contacto | Recursos Tecnológicos S.A.C. Lima Perú",
  privacidad:    "Política de Privacidad | Recursos Tecnológicos S.A.C.",
  terminos:      "Términos y Condiciones | Recursos Tecnológicos S.A.C.",
  cookies:       "Política de Cookies | Recursos Tecnológicos S.A.C.",
  reclamaciones: "Libro de Reclamaciones | Recursos Tecnológicos S.A.C.",
  "404":         "Página no encontrada | Recursos Tecnológicos S.A.C.",
};

const PAGE_DESCRIPTIONS = {
  inicio:        "Fabricación y reparación de baterías de litio para vehículos eléctricos. Sistemas de energía solar: paneles, inversores, MPPT. Ingenieros certificados en Chorrillos, Lima, Perú.",
  productos:     "Catálogo completo: baterías LiFePO4, celdas 18650/21700/prismáticas, paneles solares SAIRIFO, inversores híbridos TechFine y materiales de fabricación. Lima, Perú.",
  servicios:     "Fabricación de packs de batería a medida, reparación de baterías, reemplazo de BMS y conversión plomo-ácido a litio. Ingenieros certificados en Lima, Perú.",
  asesoria:      "Asesoría en proyectos solares residenciales, comerciales e industriales en Lima. Diseño, cálculo de ROI y acompañamiento hasta la puesta en marcha.",
  nosotros:      "Ingenieros certificados especializados en baterías de litio, vehículos eléctricos y energía solar. Más de 5 años de experiencia en Lima, Perú.",
  contacto:      "Contáctanos para cotizar baterías de litio, sistemas solares o reparación. Respondemos en menos de 2 horas. Av. Alameda Sur 547, Chorrillos, Lima.",
  privacidad:    "Política de Privacidad de Recursos Tecnológicos S.A.C. Tratamiento de datos personales conforme a la Ley 29733 del Perú.",
  terminos:      "Términos y Condiciones de Recursos Tecnológicos S.A.C. Condiciones de compra, garantía y uso de productos y servicios.",
  cookies:       "Política de Cookies de Recursos Tecnológicos S.A.C. Información sobre cookies de analítica y funcionales en nuestro sitio web.",
  reclamaciones: "Libro de Reclamaciones virtual conforme al D.S. N° 011-2011-PCM. Registra tu reclamo o queja. Respuesta en 30 días hábiles.",
};

const VALID_TABS = new Set(["inicio","productos","servicios","asesoria","nosotros","contacto","privacidad","terminos","cookies","reclamaciones"]);

export default function App() {
  const navigate   = useNavigate();
  const location   = useLocation();
  const [menuOpen, setMenuOpen]     = useState(false);
  const [splashDone, setSplashDone] = useState(false);

  const [seg0, seg1] = (location.pathname.replace(/^\//, "") || "").split("/");

  const tab = useMemo(() => {
    if (!seg0) return "inicio";
    return VALID_TABS.has(seg0) ? seg0 : "404";
  }, [seg0]);

  const selectedProduct = useMemo(() =>
    seg0 === "productos" && seg1
      ? PRODUCTS.flatMap(c => c.items).find(i => i.id === seg1) ?? null
      : null,
  [seg0, seg1]);

  const selectedService = useMemo(() =>
    seg0 === "servicios" && seg1
      ? SERVICES.flatMap(c => c.items).find(i => i.id === seg1) ?? null
      : null,
  [seg0, seg1]);

  const setTab = useCallback((id) => {
    navigate(id === "inicio" ? "/" : `/${id}`);
  }, [navigate]);

  const setSelectedProduct = useCallback((item) => {
    if (item) navigate(`/productos/${item.id}`);
  }, [navigate]);

  const setSelectedService = useCallback((item) => {
    if (item) navigate(`/servicios/${item.id}`);
  }, [navigate]);

  const handleSplashDone = useCallback(() => setSplashDone(true), []);
  const _preloaded = useRef([]);

  useEffect(() => {
    _preloaded.current = [...PRODUCTS, ...SERVICES]
      .flatMap(c => c.items)
      .filter(item => item.img)
      .map(item => { const img = new Image(); img.src = item.img; return img; });
  }, []);

  useEffect(() => {
    if (localStorage.getItem("rt_cookie_consent") === "all") loadGA();
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
    const item = selectedProduct || selectedService;
    document.title = item
      ? `${item.name} | Recursos Tecnológicos S.A.C.`
      : (PAGE_TITLES[tab] ?? PAGE_TITLES.inicio);
    const descEl = document.querySelector('meta[name="description"]');
    if (descEl) descEl.setAttribute("content", item?.desc
      ? item.desc.slice(0, 155) + (item.desc.length > 155 ? "..." : "")
      : (PAGE_DESCRIPTIONS[tab] ?? PAGE_DESCRIPTIONS.inicio));
    const canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) canonical.setAttribute("href", `https://www.recursostecnologicos.com${location.pathname === "/" ? "" : location.pathname}`);
    pageview(location.pathname || "/");
  }, [location.pathname]);


  const anim = {
    inicio:    "anim-up",
    productos: "anim-scale",
    servicios: "anim-up",
    asesoria:  "anim-blur",
    nosotros:  "anim-up-slow",
    contacto:  "anim-fade",
  };

  const pages = {
    inicio:              <Inicio    setTab={setTab} />,
    productos:           <Productos selected={selectedProduct} setSelected={setSelectedProduct} />,
    servicios:           <Servicios selected={selectedService} setSelected={setSelectedService} />,
    asesoria:            <Asesoria  />,
    nosotros:            <Nosotros  />,
    contacto:            <Contacto  />,
    privacidad:          <Privacidad setTab={setTab} />,
    terminos:            <Terminos  setTab={setTab} />,
    cookies:             <Cookies   setTab={setTab} />,
    reclamaciones:       <LibroReclamaciones />,
    "404":               <NotFound setTab={setTab} />,
  };

  return (
    <div className="app">
      {/* Precarga de videos — renderizan desde t=0 durante el splash */}
      <div style={{ position: "absolute", width: 0, height: 0, overflow: "hidden", pointerEvents: "none" }}>
        <video src="/hero-video.mp4" preload="auto" muted />
        <video src="/asesoria-solar.mp4" preload="auto" muted />
        <video src="/servicios/fabricacion/soldadura-punto/soldadura.mp4" preload="metadata" muted />
        <video src="/servicios/fabricacion/fab-conversion/conversion.mp4" preload="metadata" muted />
      </div>

      {!splashDone ? <Splash onDone={handleSplashDone} /> : <>
        <Nav tab={tab} setTab={setTab} menuOpen={menuOpen} setMenuOpen={setMenuOpen} setSelectedProduct={setSelectedProduct} setSelectedService={setSelectedService} />

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
            onClick={() => navigate(`/${tab}`)}
          >
            ← Retroceder
          </button>
        )}

        <main className={`page ${anim[tab] ?? "anim-up"}`} key={tab}>
          {pages[tab]}
        </main>

        <Footer setTab={setTab} />

        <BottomNav tab={tab} setTab={setTab} setSelectedProduct={setSelectedProduct} setSelectedService={setSelectedService} />

        <CookieBanner setTab={setTab} />

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
      </>}
    </div>
  );
}

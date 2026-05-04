import { useState, useRef } from "react";
import { TABS, PRODUCTS, SERVICES, wm } from "../constants.js";
import { WaIcon, CompanyLogo } from "./Icons.jsx";

const MEGA_DATA = { productos: PRODUCTS, servicios: SERVICES };

export default function MobileMenu({ tab, setTab, open, onClose, setSelectedProduct, setSelectedService }) {
  const [panel, setPanel]             = useState(0);
  const [activeMega, setActiveMega]   = useState(null);
  const [activeCat, setActiveCat]     = useState(null);
  const [renderedCat, setRenderedCat] = useState(null);
  const slideTimer = useRef(null);

  function resetAll() {
    clearTimeout(slideTimer.current);
    setPanel(0); setActiveMega(null); setActiveCat(null); setRenderedCat(null);
  }

  function go(id) {
    setSelectedProduct?.(null); setSelectedService?.(null);
    setTab(id); onClose(); resetAll();
  }

  function openMega(megaId) { setActiveMega(megaId); setPanel(1); }

  function openCat(catId) {
    clearTimeout(slideTimer.current);
    setRenderedCat(null);
    setActiveCat(catId);
    setPanel(2);
    slideTimer.current = setTimeout(() => setRenderedCat(catId), 360);
  }

  function goBack() {
    clearTimeout(slideTimer.current);
    const next = panel - 1;
    if (next < 2) setRenderedCat(null);
    setPanel(next);
  }

  function goItem(itemId) {
    const item = (MEGA_DATA[activeMega] ?? []).flatMap(c => c.items).find(i => i.id === itemId);
    if (activeMega === "productos" && item) { setSelectedProduct?.(item); setSelectedService?.(null); }
    if (activeMega === "servicios" && item) { setSelectedService?.(item); setSelectedProduct?.(null); }
    setTab(activeMega); onClose(); resetAll();
  }

  const cats       = activeMega ? (MEGA_DATA[activeMega] ?? []) : [];
  const currentCat = cats.find(c => c.id === activeCat) ?? null;
  const panelTitle = panel === 1
    ? (activeMega === "productos" ? "Productos" : "Servicios")
    : currentCat?.label ?? "";

  return (
    <>
      <div className={`mmenu-overlay ${open ? "open" : ""}`} onClick={() => { onClose(); resetAll(); }} aria-hidden="true" />
      <div className={`mmenu ${open ? "open" : ""}`} role="dialog" aria-modal="true">

        <div className="mmenu-hdr">
          {panel > 0 ? (
            <button className="mmenu-back" onClick={goBack} aria-label="Volver">
              <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="15 18 9 12 15 6" />
              </svg>
            </button>
          ) : (
            <div className="mmenu-brand" onClick={() => go("inicio")}>
              <CompanyLogo size={36} />
              <div>
                <div className="mmenu-name">RECURSOS TECNOLÓGICOS</div>
                <div className="mmenu-tag">S.A.C. · Lima, Perú</div>
              </div>
            </div>
          )}
          {panel > 0 && <span className="mmenu-panel-title">{panelTitle}</span>}
          <button className="mmenu-close" onClick={() => { onClose(); resetAll(); }} aria-label="Cerrar">
            <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        <div className="mmenu-slides">
          <div className="mmenu-slides-inner" style={{ transform: `translateX(${panel * -33.3333}%)` }}>

            <div className="mmenu-panel">
              <nav className="mmenu-nav">
                {TABS.map(t => (
                  <button key={t.id} className={`mmenu-link ${tab === t.id ? "active" : ""}`}
                    onClick={() => t.hasMega ? openMega(t.id) : go(t.id)}>
                    {t.label}
                    <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6" /></svg>
                  </button>
                ))}
              </nav>
            </div>

            <div className="mmenu-panel">
              <nav className="mmenu-nav">
                {cats.map(cat => (
                  <button key={cat.id} className="mmenu-link" onClick={() => openCat(cat.id)}>
                    <span className="mmenu-cat-row"><span className="mmenu-cat-icon">{cat.icon}</span>{cat.label}</span>
                    <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6" /></svg>
                  </button>
                ))}
              </nav>
            </div>

            <div className="mmenu-panel mmenu-panel--dark">
              <div className="mmenu-items">
                {renderedCat && currentCat?.items.map((item, i) => (
                  <button key={item.id} className="mmenu-item" style={{ animationDelay: `${i * 60}ms` }} onClick={() => goItem(item.id)}>
                    {item.img && <img src={item.img} alt={item.name} className="mmenu-item-img" />}
                    <div className="mmenu-item-txt">
                      <span className="mmenu-item-name">{item.name}</span>
                      {item.tagline && <span className="mmenu-item-tag">{item.tagline}</span>}
                    </div>
                    <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink:0, opacity:.4 }}><polyline points="9 18 15 12 9 6" /></svg>
                  </button>
                ))}
              </div>
            </div>

          </div>
        </div>

        <div className="mmenu-footer">
          <a href={wm("Hola, quiero cotizar")} className="mmenu-cta" target="_blank" rel="noreferrer" onClick={() => { onClose(); resetAll(); }}>
            <WaIcon size={18} /> Cotizar por WhatsApp
          </a>
        </div>
      </div>
    </>
  );
}

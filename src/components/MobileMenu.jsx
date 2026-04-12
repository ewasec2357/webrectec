import { useState } from "react";
import { TABS, PRODUCTS, SERVICES, wm } from "../constants.js";
import { WaIcon, CompanyLogo } from "./Icons.jsx";

const MEGA_DATA = { productos: PRODUCTS, servicios: SERVICES };

export default function MobileMenu({ tab, setTab, open, onClose, setSelectedProduct, setSelectedService }) {
  const [expanded, setExpanded] = useState(null);

  function go(id) {
    setTab(id);
    onClose();
    setExpanded(null);
  }

  function goItem(tabId, itemId) {
    if (setSelectedProduct) setSelectedProduct(null);
    if (setSelectedService) setSelectedService(null);
    setTab(tabId);
    onClose();
    setExpanded(null);
    setTimeout(() => {
      const el = document.getElementById(`prod-${itemId}`);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "center" });
    }, 380);
  }

  function toggle(id) {
    setExpanded(prev => prev === id ? null : id);
  }

  return (
    <>
      <div className={`mmenu-overlay ${open ? "open" : ""}`} onClick={onClose} aria-hidden="true" />

      <div className={`mmenu ${open ? "open" : ""}`} role="dialog" aria-modal="true">
        {/* Header */}
        <div className="mmenu-hdr">
          <div className="mmenu-brand" onClick={() => go("inicio")}>
            <CompanyLogo size={36} />
            <div>
              <div className="mmenu-name">RECURSOS TECNOLÓGICOS</div>
              <div className="mmenu-tag">S.A.C. · Lima, Perú</div>
            </div>
          </div>
          <button className="mmenu-close" onClick={onClose} aria-label="Cerrar menú">
            <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        {/* Nav */}
        <nav className="mmenu-nav">
          {TABS.map(t => t.hasMega ? (
            <div key={t.id} className="mmenu-accordion">
              {/* Tab principal con toggle */}
              <button
                className={`mmenu-link ${tab === t.id ? "active" : ""} ${expanded === t.id ? "expanded" : ""}`}
                onClick={() => toggle(t.id)}
              >
                {t.label}
                <svg
                  className={`mmenu-chevron ${expanded === t.id ? "open" : ""}`}
                  viewBox="0 0 10 6" width="12" height="12" fill="none"
                >
                  <path d="M1 1l4 4 4-4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
                </svg>
              </button>

              {/* Sub-categorías expandidas */}
              {expanded === t.id && (
                <div className="mmenu-sub">
                  {MEGA_DATA[t.id].map(cat => (
                    <div key={cat.id} className="mmenu-cat">
                      <div className="mmenu-cat-label">{cat.icon} {cat.label}</div>
                      {cat.items.map(item => (
                        <button
                          key={item.id}
                          className="mmenu-item"
                          onClick={() => goItem(t.id, item.id)}
                        >
                          <span>{item.name}</span>
                          <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="9 18 15 12 9 6" />
                          </svg>
                        </button>
                      ))}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ) : (
            <button
              key={t.id}
              className={`mmenu-link ${tab === t.id ? "active" : ""}`}
              onClick={() => go(t.id)}
            >
              {t.label}
              <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </button>
          ))}
        </nav>

        {/* CTA */}
        <div className="mmenu-footer">
          <a href={wm("Hola, quiero cotizar")} className="mmenu-cta" target="_blank" rel="noreferrer" onClick={onClose}>
            <WaIcon size={18} /> Cotizar por WhatsApp
          </a>
        </div>
      </div>
    </>
  );
}

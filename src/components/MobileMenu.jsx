import { TABS, wm } from "../constants.js";
import { WaIcon, CompanyLogo } from "./Icons.jsx";

export default function MobileMenu({ tab, setTab, open, onClose }) {
  function go(id) {
    setTab(id);
    onClose();
  }

  return (
    <>
      {/* Overlay */}
      <div
        className={`mmenu-overlay ${open ? "open" : ""}`}
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Panel lateral */}
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
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        {/* Links */}
        <nav className="mmenu-nav">
          {TABS.map(t => (
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
          <a
            href={wm("Hola, quiero cotizar")}
            className="mmenu-cta"
            target="_blank"
            rel="noreferrer"
            onClick={onClose}
          >
            <WaIcon size={18} /> Cotizar por WhatsApp
          </a>
        </div>
      </div>
    </>
  );
}

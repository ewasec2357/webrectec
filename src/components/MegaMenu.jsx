import { useState } from "react";
import { PRODUCTS } from "../constants.js";

export default function MegaMenu({ setTab, onClose }) {
  const [activeId, setActiveId] = useState(PRODUCTS[0].id);
  const active = PRODUCTS.find(p => p.id === activeId);

  function go(id) {
    setTab("productos");
    onClose();
    // Scroll al anchor después de que React re-renderice
    setTimeout(() => {
      const el = document.getElementById(`prod-${id}`);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 80);
  }

  return (
    <div className="mega-panel" onMouseDown={e => e.stopPropagation()}>
      <div className="mega-inner">
        {/* ── Columna izquierda: categorías ── */}
        <div className="mega-cats">
          <div className="mega-cats-label">Categorías</div>
          {PRODUCTS.map(cat => (
            <button
              key={cat.id}
              className={`mega-cat-btn ${cat.id === activeId ? "active" : ""}`}
              onMouseEnter={() => setActiveId(cat.id)}
              onClick={() => go(cat.id)}
            >
              <span className="mega-cat-icon">{cat.icon}</span>
              {cat.label}
            </button>
          ))}
        </div>

        {/* ── Columna derecha: productos ── */}
        <div>
          <div className="mega-cats-label">{active.label}</div>
          <div className="mega-products">
            {active.items.map(item => (
              <div
                key={item.id}
                className="mega-prod-card"
                onClick={() => go(item.id)}
              >
                <div className="mega-prod-img">
                  <img src={item.img} alt={item.name} loading="lazy" />
                </div>
                <div className="mega-prod-info">
                  <div className="mega-prod-badge">{item.badge}</div>
                  <div className="mega-prod-name">{item.name}</div>
                  <div className="mega-prod-tag">{item.tagline}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

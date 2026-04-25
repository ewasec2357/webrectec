import { useState, useEffect } from "react";

export default function MegaMenu({ data, setTab, tabId, onClose, onResetProduct, onSelectItem }) {
  const [activeId, setActiveId] = useState(data[0].id);
  useEffect(() => { setActiveId(data[0].id); }, [data]);
  const active = data.find(p => p.id === activeId) ?? data[0];

  function goCategory(catId) {
    if (onResetProduct) onResetProduct();
    setTab(tabId);
    onClose();
    setTimeout(() => {
      const el = document.getElementById(`prod-${catId}`);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "center" });
    }, 150);
  }

  function goItem(item) {
    if (onSelectItem) onSelectItem(item);
    setTab(tabId);
    onClose();
    window.scrollTo({ top: 0, behavior: "instant" });
  }

  return (
    <div className="mega-panel" onMouseDown={e => e.stopPropagation()}>
      <div className="mega-inner">
        {/* ── Columna izquierda: categorías ── */}
        <div className="mega-cats">
          <div className="mega-cats-label">Categorías</div>
          {data.map(cat => (
            <button
              key={cat.id}
              className={`mega-cat-btn ${cat.id === activeId ? "active" : ""}`}
              onMouseEnter={() => setActiveId(cat.id)}
              onClick={() => goCategory(cat.id)}
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
                onClick={() => goItem(item)}
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

import { useState } from "react";
import { PRODUCTS, wm } from "../constants.js";
import { WaIcon } from "../components/Icons.jsx";

/* ── Vista de detalle de un producto ── */
function ProductDetail({ item, onBack }) {
  return (
    <div className="prod-detail fade">
      <button className="prod-back" onClick={onBack}>
        ← Volver a productos
      </button>
      <div className="prod-detail-inner">
        <div className="prod-detail-img">
          <img src={item.imgL} alt={item.name} />
          <span className="prod-badge">{item.badge}</span>
        </div>
        <div className="prod-detail-body">
          <h2 className="prod-name">{item.name}</h2>
          <p className="prod-tagline">{item.tagline}</p>
          <p className="prod-desc">{item.desc}</p>
          <div className="prod-specs">
            <div className="prod-specs-title">Especificaciones técnicas</div>
            {item.specs.map(([k, v]) => (
              <div className="prod-spec-row" key={k}>
                <span className="prod-spec-k">{k}</span>
                <span className="prod-spec-v">{v}</span>
              </div>
            ))}
          </div>
          <a
            href={wm(item.waMsg)}
            className="prod-cta"
            target="_blank"
            rel="noreferrer"
          >
            <WaIcon size={16} /> Cotizar por WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}

/* ── Card de producto en la cuadrícula ── */
function ProductThumb({ item, onClick }) {
  return (
    <div className="prod-thumb" onClick={onClick}>
      <div className="prod-thumb-img">
        <img src={item.img} alt={item.name} loading="lazy" />
        <span className="prod-badge">{item.badge}</span>
      </div>
      <div className="prod-thumb-body">
        <div className="prod-thumb-name">{item.name}</div>
        <div className="prod-thumb-tagline">{item.tagline}</div>
        <div className="prod-thumb-cta">Ver detalles →</div>
      </div>
    </div>
  );
}

export default function Productos() {
  const [selected, setSelected] = useState(null);

  /* Si llega un anchor desde el mega-menu, pre-seleccionar */
  const allItems = PRODUCTS.flatMap(c => c.items);

  if (selected) {
    return (
      <ProductDetail
        item={selected}
        onBack={() => {
          setSelected(null);
          window.scrollTo({ top: 0, behavior: "instant" });
        }}
      />
    );
  }

  return (
    <div>
      {/* HERO */}
      <div className="page-hero" style={{ marginBottom: 48 }}>
        <div className="ph-inner">
          <div className="ph-label">Catálogo de Productos</div>
          <h2>Tecnología de <em>Alta Ingeniería</em></h2>
          <p>
            Baterías de litio, sistemas de energía solar y vehículos eléctricos.
            Todos nuestros productos incluyen certificado técnico y garantía firmada por ingeniero responsable.
          </p>
          <a
            href={wm("Hola, quiero ver el catálogo de productos")}
            className="btn-primary"
            style={{ display: "inline-flex", textDecoration: "none" }}
            target="_blank"
            rel="noreferrer"
          >
            <WaIcon /> Solicitar catálogo completo
          </a>
        </div>
      </div>

      {/* CATEGORÍAS con grid de thumbs */}
      {PRODUCTS.map(cat => (
        <section key={cat.id} id={`prod-${cat.id}`} style={{ marginBottom: 56 }}>
          <div className="prod-cat-hdr">
            <div className="sec-label">{cat.icon} {cat.label}</div>
            <h2 className="sec-h2">{cat.label}</h2>
            <div className="prod-cat-line" />
          </div>
          <div className="prod-thumb-grid">
            {cat.items.map(item => (
              <ProductThumb
                key={item.id}
                item={item}
                onClick={() => {
                  setSelected(item);
                  window.scrollTo({ top: 0, behavior: "instant" });
                }}
              />
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}

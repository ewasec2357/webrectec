import { PRODUCTS, wm } from "../constants.js";
import { WaIcon } from "../components/Icons.jsx";

function ProductCard({ item }) {
  return (
    <div className="prod-card" id={`prod-${item.id}`}>
      <div className="prod-img">
        <img src={item.imgL} alt={item.name} loading="lazy" />
        <span className="prod-badge">{item.badge}</span>
      </div>
      <div className="prod-body">
        <h3 className="prod-name">{item.name}</h3>
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
  );
}

export default function Productos() {
  return (
    <div>
      {/* HERO */}
      <div className="page-hero" style={{ marginBottom: 52 }}>
        <div className="ph-inner">
          <div className="ph-label">Catálogo de Productos</div>
          <h2>Tecnología de <em>Alta Ingeniería</em></h2>
          <p>
            Baterías de litio, sistemas de energía solar y vehículos eléctricos.
            Todos nuestros productos incluyen certificado técnico y garantía real firmada por ingeniero responsable.
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

      {/* CATEGORÍAS */}
      {PRODUCTS.map((cat, ci) => (
        <section key={cat.id} id={`prod-${cat.id}`} style={{ marginBottom: 72 }}>
          {/* Encabezado de categoría */}
          <div className="prod-cat-hdr">
            <div className="sec-label">
              {cat.icon} {cat.label}
            </div>
            <h2 className="sec-h2">{cat.label}</h2>
            <div className="prod-cat-line" />
          </div>

          {/* Grid de productos */}
          <div className="prod-grid">
            {cat.items.map(item => (
              <ProductCard key={item.id} item={item} />
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}

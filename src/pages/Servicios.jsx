import { useState } from "react";
import { SERVICES, wm } from "../constants.js";
import { WaIcon } from "../components/Icons.jsx";

/* ── Detalle de servicio individual ── */
function ServiceDetail({ item }) {
  return (
    <div className="prod-detail fade">
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
            <div className="prod-specs-title">Detalle del servicio</div>
            {item.specs.map(([k, v]) => (
              <div className="prod-spec-row" key={k}>
                <span className="prod-spec-k">{k}</span>
                <span className="prod-spec-v">{v}</span>
              </div>
            ))}
          </div>
          <a href={wm(item.waMsg)} className="prod-cta" target="_blank" rel="noreferrer">
            <WaIcon size={16} /> Consultar por WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}

/* ── Thumb del catálogo ── */
function ServiceThumb({ item, onClick }) {
  return (
    <div id={`prod-${item.id}`} className="prod-thumb" onClick={onClick}>
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

/* ── Página principal de Servicios ── */
export default function Servicios({ selected, setSelected }) {
  function open(item) {
    setSelected(item);
    window.scrollTo({ top: 0, behavior: "instant" });
  }

  if (selected) return <ServiceDetail item={selected} />;

  return (
    <div>
      <div className="page-hero" style={{ marginBottom: 48 }}>
        <div className="ph-inner">
          <div className="ph-label">Nuestros Servicios</div>
          <h2>Soluciones <em>Técnicas Especializadas</em></h2>
          <p>
            Fabricamos baterías a medida y reparamos packs dañados con celdas Grado A
            y certificado técnico firmado por ingeniero responsable.
          </p>
          <a
            href={wm("Hola, quiero información sobre sus servicios")}
            className="btn-primary"
            style={{ display: "inline-flex", textDecoration: "none" }}
            target="_blank" rel="noreferrer"
          >
            <WaIcon /> Consultar por WhatsApp
          </a>
        </div>
      </div>

      {SERVICES.map(cat => (
        <section key={cat.id} id={`prod-${cat.id}`} style={{ marginBottom: 48 }}>
          <div className="prod-cat-hdr">
            <div className="sec-label">{cat.icon} {cat.label}</div>
            <h2 className="sec-h2">{cat.label}</h2>
            <div className="prod-cat-line" />
          </div>
          <div className="prod-thumb-grid">
            {cat.items.map(item => (
              <ServiceThumb key={item.id} item={item} onClick={() => open(item)} />
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}

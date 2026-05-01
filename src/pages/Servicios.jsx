import { useState, useEffect, useRef } from "react";
import { SERVICES, wm } from "../constants.js";
import { WaIcon } from "../components/Icons.jsx";

/* ── Carrusel de imágenes ── */
function Carousel({ images, badge }) {
  const [idx, setIdx]       = useState(0);
  const [loaded, setLoaded] = useState(false);
  const timerRef = useRef(null);

  function resetTimer() {
    clearInterval(timerRef.current);
    timerRef.current = setInterval(() => setIdx(i => (i + 1) % images.length), 3000);
  }

  useEffect(() => {
    setIdx(0);
    setLoaded(false);
    resetTimer();
    images.forEach(src => { const img = new Image(); img.src = src; });
    return () => clearInterval(timerRef.current);
  }, [images[0]]);

  useEffect(() => { setLoaded(false); }, [idx]);

  const prev = () => { setIdx(i => (i - 1 + images.length) % images.length); resetTimer(); };
  const next = () => { setIdx(i => (i + 1) % images.length); resetTimer(); };

  return (
    <div className="carousel">
      {!loaded && <div className="car-skeleton" />}
      <img
        src={images[idx]}
        alt=""
        onLoad={() => setLoaded(true)}
        style={{ opacity: loaded ? 1 : 0 }}
      />
      <span className="prod-badge">{badge}</span>
      <button className="car-btn car-prev" onClick={prev}>‹</button>
      <button className="car-btn car-next" onClick={next}>›</button>
      <div className="car-dots">
        {images.map((_, i) => (
          <button key={i} className={`car-dot${i === idx ? " active" : ""}`}
            onClick={() => { setIdx(i); resetTimer(); }} />
        ))}
      </div>
    </div>
  );
}

/* ── Tabla de comparación ── */
function ComparisonTable({ data }) {
  return (
    <div className="cmp-wrap">
      <div className="cmp-title">Comparación de tecnologías</div>
      <div className="cmp-table">
        {/* Header */}
        <div className="cmp-head-row">
          <div className="cmp-head-label" />
          {data.cols.map((col, ci) => (
            <div key={col.name} className={`cmp-head-col${col.recommended ? " cmp-head-rec" : " cmp-head-std"}`}>
              {col.recommended && <div className="cmp-rec-badge">★ Recomendado</div>}
              <div className="cmp-head-name">{col.name}</div>
            </div>
          ))}
        </div>
        {/* Rows */}
        {data.rows.map((row, ri) => (
          <div key={row.label} className={`cmp-data-row${ri % 2 === 1 ? " cmp-data-alt" : ""}`}>
            <div className="cmp-row-label">
              <span className="cmp-row-icon">{row.icon}</span>
              {row.label}
            </div>
            {row.vals.map((v, ci) => (
              <div key={ci} className={`cmp-data-cell${ci === row.best ? " cmp-best" : row.win.includes(ci) ? " cmp-good" : " cmp-bad"}`}>
                {ci === row.best && <span className="cmp-star">✓</span>}
                <span>{v}</span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

const SPECS_PREVIEW = 3;

/* ── Detalle de servicio individual ── */
function ServiceDetail({ item }) {
  const [showAll, setShowAll] = useState(false);
  const visible = showAll ? item.specs : item.specs.slice(0, SPECS_PREVIEW);
  const hasMore = item.specs.length > SPECS_PREVIEW;

  return (
    <div className="prod-detail fade">
      <div className="prod-detail-inner">
        <div className="prod-detail-img">
          {item.video
            ? (
              <div className="carousel" style={{ background: "#0a0f1e" }}>
                <video src={item.video} autoPlay muted loop playsInline preload="auto" poster={item.imgL} />
                <span className="prod-badge">{item.badge}</span>
              </div>
            )
            : item.images
              ? <Carousel images={item.images} badge={item.badge} />
              : <><img src={item.imgL} alt={item.name} /><span className="prod-badge">{item.badge}</span></>
          }
        </div>
        <div className="prod-detail-body">
          <h2 className="prod-name">{item.name}</h2>
          <p className="prod-tagline">{item.tagline}</p>
          <p className="prod-desc">{item.desc}</p>
          {item.comparison && <ComparisonTable data={item.comparison} />}
          <div className="prod-specs">
            <div className="prod-specs-title">Detalle del Servicio</div>
            {visible.map(([k, v], i) => (
              v === "__section__"
                ? <div className="prod-spec-section-hdr" key={i}>{k}</div>
                : <div className="prod-spec-row" key={i}>
                    <span className="prod-spec-k">{k}</span>
                    <span className="prod-spec-v">{v}</span>
                  </div>
            ))}
            {hasMore && (
              <button className="specs-toggle" onClick={() => setShowAll(o => !o)}>
                {showAll ? "Mostrar menos ▲" : `Mostrar más (${item.specs.length - SPECS_PREVIEW} más) ▼`}
              </button>
            )}
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

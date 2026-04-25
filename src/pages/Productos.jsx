import { useState, useEffect, useRef } from "react";
import { PRODUCTS, wm } from "../constants.js";
import { WaIcon } from "../components/Icons.jsx";

/* ── Carrusel de imágenes ── */
function Carousel({ images, badge }) {
  const [idx, setIdx] = useState(0);
  const timerRef = useRef(null);

  function resetTimer() {
    clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setIdx(i => (i + 1) % images.length);
    }, 3000);
  }

  useEffect(() => {
    setIdx(0);
    resetTimer();
    return () => clearInterval(timerRef.current);
  }, [images[0]]);

  const prev = () => { setIdx(i => (i - 1 + images.length) % images.length); resetTimer(); };
  const next = () => { setIdx(i => (i + 1) % images.length); resetTimer(); };

  return (
    <div className="carousel">
      <img src={images[idx]} alt="" />
      <span className="prod-badge">{badge}</span>
      <button className="car-btn car-prev" onClick={prev}>‹</button>
      <button className="car-btn car-next" onClick={next}>›</button>
      <div className="car-dots">
        {images.map((_, i) => (
          <button key={i} className={`car-dot${i === idx ? " active" : ""}`} onClick={() => { setIdx(i); resetTimer(); }} />
        ))}
      </div>
    </div>
  );
}

const SPECS_PREVIEW = 3;

/* ── Página de detalle: UN solo producto ── */
function ProductDetail({ item }) {
  const [showAll, setShowAll] = useState(false);
  const visible = showAll ? item.specs : item.specs.slice(0, SPECS_PREVIEW);
  const hasMore = item.specs.length > SPECS_PREVIEW;

  return (
    <div className="prod-detail fade">
      <div className="prod-detail-inner">
        <div className="prod-detail-img">
          {item.images
            ? <Carousel images={item.images} badge={item.badge} />
            : <><img src={item.imgL} alt={item.name} /><span className="prod-badge">{item.badge}</span></>
          }
        </div>
        <div className="prod-detail-body">
          <h2 className="prod-name">{item.name}</h2>
          <p className="prod-tagline">{item.tagline}</p>
          <p className="prod-desc">{item.desc}</p>
          <div className="prod-specs">
            <div className="prod-specs-title">Especificaciones Técnicas</div>
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
            <WaIcon size={16} /> Cotizar por WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}

/* ── Thumb del catálogo ── */
function ProductThumb({ item, onClick }) {
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

/* ── Página principal de Productos ── */
export default function Productos({ selected, setSelected }) {
  function open(item) {
    setSelected(item);
    window.scrollTo({ top: 0, behavior: "instant" });
  }

  /* Vista de producto individual */
  if (selected) return <ProductDetail item={selected} />;

  /* Vista de catálogo */
  return (
    <div>
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
            target="_blank" rel="noreferrer"
          >
            <WaIcon /> Solicitar catálogo completo
          </a>
        </div>
      </div>

      {PRODUCTS.map(cat => (
        <section key={cat.id} id={`prod-${cat.id}`} style={{ marginBottom: 48 }}>
          <div className="prod-cat-hdr">
            <div className="sec-label">{cat.icon} {cat.label}</div>
            <h2 className="sec-h2">{cat.label}</h2>
            <div className="prod-cat-line" />
          </div>
          <div className="prod-thumb-grid">
            {cat.items.map(item => (
              <ProductThumb key={item.id} item={item} onClick={() => open(item)} />
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}

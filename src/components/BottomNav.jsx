import { useState } from "react";
import { CompanyLogo } from "./Icons.jsx";
import { PRODUCTS, SERVICES } from "../constants.js";

// Outline (inactivo)
import {
  RectangleStackIcon,
  LightBulbIcon,
  UsersIcon,
  EnvelopeIcon,
} from "@heroicons/react/24/outline";

// Solid / filled (activo)
import {
  RectangleStackIcon as RectangleStackSolid,
  LightBulbIcon      as LightBulbSolid,
  UsersIcon          as UsersSolid,
  EnvelopeIcon       as EnvelopeSolid,
} from "@heroicons/react/24/solid";

const CHEVRON = (
  <svg viewBox="0 0 24 24" width="13" height="13" fill="none"
    stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="9 18 15 12 9 6" />
  </svg>
);

const BACK_ICON = (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="none"
    stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="15 18 9 12 15 6" />
  </svg>
);

const ICON_SIZE = { width: 28, height: 28 };
const DIM  = "rgba(255,255,255,.42)";
const LIT  = "#ffffff";

export default function BottomNav({ tab, setTab, setSelectedProduct, setSelectedService }) {
  const [drawerOpen, setDrawerOpen]         = useState(false);
  const [activeCategory, setActiveCategory] = useState(null); // { cat, type } | null

  const catalogoActive = tab === "productos" || tab === "servicios" || drawerOpen;
  const asesoriaActive = tab === "asesoria"  && !drawerOpen;
  const nosotrosActive = tab === "nosotros"  && !drawerOpen;
  const contactoActive = tab === "contacto"  && !drawerOpen;

  function closeDrawer() {
    setDrawerOpen(false);
    setActiveCategory(null);
  }

  function goTab(id) { setSelectedProduct(null); setSelectedService(null); setTab(id); closeDrawer(); }

  function openCategory(cat, type) {
    cat.items.forEach(item => { if (item.img) new Image().src = item.img; });
    setActiveCategory({ cat, type });
  }

  function selectItem(item, type) {
    if (type === "productos") {
      setSelectedProduct(item);
      setSelectedService(null);
      setTab("productos");
    } else {
      setSelectedService(item);
      setSelectedProduct(null);
      setTab("servicios");
    }
    closeDrawer();
  }

  const drawerTitle = activeCategory ? activeCategory.cat.label : "Catálogo & Servicios";

  return (
    <>
      {/* Preload oculto de thumbnails */}
      <div style={{ position: "absolute", width: 1, height: 1, overflow: "hidden", opacity: 0, pointerEvents: "none" }}>
        {[...PRODUCTS, ...SERVICES].flatMap(c => c.items).map(item =>
          item.img ? <img key={item.id} src={item.img} alt="" width="1" height="1" /> : null
        )}
      </div>

      {/* Backdrop */}
      {drawerOpen && (
        <div className="bnav-backdrop" onClick={closeDrawer} />
      )}

      {/* Drawer slide-up */}
      <div className={`bnav-drawer${drawerOpen ? " bnav-drawer--open" : ""}`}>
        <div className="bnav-drawer-handle" />
        <div className="bnav-drawer-hdr">
          {activeCategory && (
            <button className="bnav-drawer-back" onClick={() => setActiveCategory(null)}>
              {BACK_ICON}
            </button>
          )}
          <span className="bnav-drawer-title">{drawerTitle}</span>
          <button className="bnav-drawer-close" onClick={closeDrawer}>
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none"
              stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
            </svg>
          </button>
        </div>

        {/* Nivel 0 — categorías */}
        {!activeCategory && (
          <>
            <div className="bnav-drawer-section">
              <div className="bnav-drawer-sec-label">Productos</div>
              {PRODUCTS.map(cat => (
                <button key={cat.id} className="bnav-drawer-item" onClick={() => openCategory(cat, "productos")}>
                  <span className="bnav-drawer-ic">{cat.icon}</span>
                  <span className="bnav-drawer-item-name">{cat.label}</span>
                  {CHEVRON}
                </button>
              ))}
            </div>

            <div className="bnav-drawer-section">
              <div className="bnav-drawer-sec-label">Servicios</div>
              {SERVICES.map(cat => (
                <button key={cat.id} className="bnav-drawer-item" onClick={() => openCategory(cat, "servicios")}>
                  <span className="bnav-drawer-ic">{cat.icon}</span>
                  <span className="bnav-drawer-item-name">{cat.label}</span>
                  {CHEVRON}
                </button>
              ))}
            </div>
          </>
        )}

        {/* Nivel 1 — ítems de la categoría seleccionada */}
        {activeCategory && (
          <div className="bnav-drawer-section">
            {activeCategory.cat.items.map(item => (
              <button
                key={item.id}
                className="bnav-drawer-item bnav-drawer-item--product"
                onClick={() => selectItem(item, activeCategory.type)}
              >
                {item.img && (
                  <img className="bnav-drawer-thumb" src={item.img} alt={item.name} />
                )}
                <span className="bnav-drawer-item-info">
                  <span className="bnav-drawer-item-name">{item.name}</span>
                  <span className="bnav-drawer-item-tagline">{item.tagline}</span>
                </span>
                {CHEVRON}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Barra de navegación */}
      <nav className="bottom-nav">

        {/* 1 — Catálogo */}
        <button
          className={`bnav-item${catalogoActive ? " bnav-item--active" : ""}`}
          onClick={() => setDrawerOpen(v => !v)}
        >
          <div className="bnav-icon">
            {catalogoActive
              ? <RectangleStackSolid style={{ ...ICON_SIZE, color: LIT }} />
              : <RectangleStackIcon  style={{ ...ICON_SIZE, color: DIM }} />}
          </div>
          <span className="bnav-label">Catálogo</span>
        </button>

        {/* 2 — Asesoría */}
        <button
          className={`bnav-item${asesoriaActive ? " bnav-item--active" : ""}`}
          onClick={() => goTab("asesoria")}
        >
          <div className="bnav-icon">
            {asesoriaActive
              ? <LightBulbSolid style={{ ...ICON_SIZE, color: LIT }} />
              : <LightBulbIcon  style={{ ...ICON_SIZE, color: DIM }} />}
          </div>
          <span className="bnav-label">Asesoría</span>
        </button>

        {/* 3 — Logo centro (Inicio) */}
        <button className="bnav-item bnav-item--logo" onClick={() => goTab("inicio")}>
          <div className="bnav-logo-wrap">
            <div className="bnav-logo-ring" />
            <div className="bnav-logo-inner">
              <CompanyLogo size={51} dark />
            </div>
          </div>
        </button>

        {/* 4 — Nosotros */}
        <button
          className={`bnav-item${nosotrosActive ? " bnav-item--active" : ""}`}
          onClick={() => goTab("nosotros")}
        >
          <div className="bnav-icon">
            {nosotrosActive
              ? <UsersSolid style={{ ...ICON_SIZE, color: LIT }} />
              : <UsersIcon  style={{ ...ICON_SIZE, color: DIM }} />}
          </div>
          <span className="bnav-label">Nosotros</span>
        </button>

        {/* 5 — Contacto */}
        <button
          className={`bnav-item${contactoActive ? " bnav-item--active" : ""}`}
          onClick={() => goTab("contacto")}
        >
          <div className="bnav-icon">
            {contactoActive
              ? <EnvelopeSolid style={{ ...ICON_SIZE, color: LIT }} />
              : <EnvelopeIcon  style={{ ...ICON_SIZE, color: DIM }} />}
          </div>
          <span className="bnav-label">Contacto</span>
        </button>

      </nav>
    </>
  );
}

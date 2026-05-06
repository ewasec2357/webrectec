import { wm } from "../constants.js";

export default function NotFound({ setTab }) {
  return (
    <div className="fade" style={{ display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center", minHeight:"60vh", padding:"80px 24px", textAlign:"center" }}>
      <div style={{ fontSize:72, fontWeight:700, fontFamily:"'Outfit',sans-serif", color:"var(--blue)", lineHeight:1, marginBottom:16 }}>404</div>
      <h2 style={{ fontFamily:"'Outfit',sans-serif", fontSize:24, fontWeight:700, color:"var(--text)", marginBottom:12 }}>Página no encontrada</h2>
      <p style={{ color:"var(--text-muted)", fontSize:15, maxWidth:380, marginBottom:36 }}>
        La página que buscas no existe o fue movida. Usa el menú para navegar.
      </p>
      <div style={{ display:"flex", gap:12, justifyContent:"center", flexWrap:"wrap" }}>
        <button className="btn-primary" style={{ border:"none", cursor:"pointer" }} onClick={() => setTab("inicio")}>
          ← Ir al inicio
        </button>
        <a href={wm("Hola, necesito información")} className="btn-wa" target="_blank" rel="noreferrer" style={{ textDecoration:"none" }}>
          Contactar
        </a>
      </div>
    </div>
  );
}

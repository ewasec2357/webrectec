import { useState } from "react";
import { wm, COMPANY } from "../constants.js";

export default function LibroReclamaciones() {
  const [form, setForm] = useState({
    nombre: "", dni: "", email: "", telefono: "",
    tipo: "Reclamo", producto: "", descripcion: "",
  });
  const [enviado, setEnviado] = useState(false);

  const set = (k) => (e) => setForm(f => ({ ...f, [k]: e.target.value }));

  const send = () => {
    const msg =
      `📋 *LIBRO DE RECLAMACIONES*\n` +
      `*Tipo:* ${form.tipo}\n` +
      `*Nombre:* ${form.nombre}\n` +
      `*DNI/RUC:* ${form.dni}\n` +
      `*Email:* ${form.email}\n` +
      `*Teléfono:* ${form.telefono}\n` +
      `*Producto/Servicio:* ${form.producto}\n` +
      `*Descripción:* ${form.descripcion}`;
    window.open(wm(msg), "_blank");
    setEnviado(true);
  };

  const valido = form.nombre && form.dni && form.descripcion;

  return (
    <div className="legal-page fade">
      <div className="legal-hero lr-hero">
        <div className="sec-label">Atención al cliente</div>
        <h1>Libro de Reclamaciones</h1>
        <p>Conforme al D.S. N° 011-2011-PCM · Código de Protección y Defensa del Consumidor</p>
      </div>

      <div className="legal-body">

        <div className="lr-indecopi">
          <div className="lr-indecopi-icon">📋</div>
          <div>
            <div className="lr-indecopi-title">Conforme a Ley</div>
            <div className="lr-indecopi-text">
              Recursos Tecnológicos S.A.C. (RUC 20605469729) pone a disposición de sus clientes
              el presente Libro de Reclamaciones Virtual, de acuerdo con el Decreto Supremo
              N° 011-2011-PCM y la Ley N° 29571 (Código de Protección y Defensa del Consumidor).
              Recibirá respuesta en un plazo máximo de <strong>30 días hábiles</strong>.
            </div>
          </div>
        </div>

        <div className="lr-tipo-row">
          {["Reclamo", "Queja"].map(t => (
            <button
              key={t}
              className={`lr-tipo-btn${form.tipo === t ? " lr-tipo-active" : ""}`}
              onClick={() => setForm(f => ({ ...f, tipo: t }))}
            >
              <span className="lr-tipo-icon">{t === "Reclamo" ? "⚠️" : "💬"}</span>
              <span className="lr-tipo-name">{t}</span>
              <span className="lr-tipo-desc">
                {t === "Reclamo"
                  ? "Producto o servicio que no cumplió lo ofrecido"
                  : "Malestar o descontento que no implica incumplimiento"}
              </span>
            </button>
          ))}
        </div>

        {enviado ? (
          <div className="lr-success">
            <div className="lr-success-icon">✅</div>
            <h3>Reclamación enviada</h3>
            <p>
              Su {form.tipo.toLowerCase()} ha sido enviado a nuestro equipo por WhatsApp.
              Le responderemos en un plazo máximo de <strong>30 días hábiles</strong>.
            </p>
            <button className="btn-primary" style={{ marginTop: 16 }} onClick={() => { setEnviado(false); setForm({ nombre:"",dni:"",email:"",telefono:"",tipo:"Reclamo",producto:"",descripcion:"" }); }}>
              Nueva reclamación
            </button>
          </div>
        ) : (
          <div className="lr-form">
            <h3>Datos del reclamante</h3>
            <div className="lr-grid2">
              <div className="fg">
                <label>Nombre completo *</label>
                <input type="text" placeholder="Nombres y apellidos" value={form.nombre} onChange={set("nombre")} />
              </div>
              <div className="fg">
                <label>DNI / RUC *</label>
                <input type="text" placeholder="Número de documento" value={form.dni} onChange={set("dni")} />
              </div>
              <div className="fg">
                <label>Email</label>
                <input type="email" placeholder="correo@ejemplo.com" value={form.email} onChange={set("email")} />
              </div>
              <div className="fg">
                <label>Teléfono</label>
                <input type="tel" placeholder="+51 9XXXXXXXX" value={form.telefono} onChange={set("telefono")} />
              </div>
            </div>

            <h3 style={{ marginTop: 24 }}>Detalle de la reclamación</h3>
            <div className="fg">
              <label>Producto o servicio involucrado</label>
              <select value={form.producto} onChange={set("producto")}>
                <option value="">Selecciona...</option>
                {[
                  "Fabricación de batería de litio",
                  "Reparación de batería de litio",
                  "Reparación de BMS",
                  "Conversión a litio",
                  "Panel solar",
                  "Inversor híbrido",
                  "Controlador MPPT",
                  "Celda de litio 18650",
                  "Celda de litio 21700",
                  "Celda LiFePO4 33140",
                  "Celda LiFePO4 prismática",
                  "Asesoría solar",
                  "Otro",
                ].map(o => <option key={o} value={o}>{o}</option>)}
              </select>
            </div>
            <div className="fg">
              <label>Descripción detallada *</label>
              <textarea
                placeholder="Describa claramente el motivo de su reclamo o queja, incluyendo fechas, montos y cualquier información relevante..."
                value={form.descripcion}
                onChange={set("descripcion")}
                rows={5}
              />
            </div>

            <div className="lr-aviso">
              <strong>Aviso:</strong> Al enviar este formulario, su {form.tipo.toLowerCase()} será remitido
              a nuestro equipo vía WhatsApp. Guardamos un registro de todas las reclamaciones conforme al
              D.S. N° 011-2011-PCM. La respuesta se brindará en un plazo máximo de 30 días hábiles.
            </div>

            <button className="btn-submit" onClick={send} disabled={!valido} style={{ opacity: valido ? 1 : .5 }}>
              Enviar {form.tipo} por WhatsApp ↗
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

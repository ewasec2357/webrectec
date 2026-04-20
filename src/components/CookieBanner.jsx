import { useState, useEffect } from "react";

export default function CookieBanner({ setTab }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("rt_cookie_consent");
    if (!consent) setVisible(true);
  }, []);

  const accept = () => {
    localStorage.setItem("rt_cookie_consent", "all");
    setVisible(false);
  };

  const essential = () => {
    localStorage.setItem("rt_cookie_consent", "essential");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="cookie-banner">
      <div className="cookie-inner">
        <div className="cookie-icon">🍪</div>
        <div className="cookie-text">
          <strong>Usamos cookies</strong> para mejorar tu experiencia y analizar el tráfico del sitio
          (Google Analytics). Puedes aceptar todas o solo las estrictamente necesarias.{" "}
          <button className="cookie-link" onClick={() => setTab("cookies")}>
            Política de Cookies
          </button>
        </div>
        <div className="cookie-actions">
          <button className="cookie-btn-essential" onClick={essential}>Solo esenciales</button>
          <button className="cookie-btn-accept" onClick={accept}>Aceptar todas</button>
        </div>
      </div>
    </div>
  );
}

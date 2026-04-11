import { useEffect } from "react";

export default function Splash({ onDone }) {
  useEffect(() => {
    const done = setTimeout(() => onDone(), 2800);
    return () => clearTimeout(done);
  }, [onDone]);

  return (
    <div className="splash">
      <img src="/logo-light.jpeg" alt="Recursos Tecnológicos" className="splash-logo" />
      <div className="splash-name">RECURSOS TECNOLÓGICOS</div>
      <div className="splash-tag">S.A.C. · Lima, Perú</div>
      <div className="splash-spinner" />
      <div className="splash-loading">Cargando</div>
    </div>
  );
}

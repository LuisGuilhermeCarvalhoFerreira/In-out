import { useState } from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-inner">
        <div className="logo">IN OUT 🌲</div>

        <button className="hamburger" onClick={() => setOpen((s) => !s)}>
          <span className="hamburger-bar" />
          <span className="hamburger-bar" />
          <span className="hamburger-bar" />
        </button>

        <div className={`nav-links ${open ? "open" : ""}`}>
          <NavLink to="/" className="nav-link" onClick={() => setOpen(false)}>Explorar</NavLink>
          <NavLink to="/reservas" className="nav-link" onClick={() => setOpen(false)}>Reservas</NavLink>
          <NavLink to="/perfil" className="nav-link" onClick={() => setOpen(false)}>Perfil</NavLink>
        </div>

        <div className="nav-actions">
          <NavLink to="/login" className="btn-ghost">Entrar</NavLink>
          <NavLink to="/cadastro" className="btn-reserva" style={{padding: '8px 15px', marginLeft: '10px'}}>Cadastrar</NavLink>
        </div>
      </div>
    </nav>
  );
}
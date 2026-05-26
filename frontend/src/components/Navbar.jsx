import { useState } from 'react'; // Removi o useEffect pois não será necessário aqui
import { Link, useNavigate } from 'react-router-dom';

export default function Navbar() {
  const navigate = useNavigate();

  // Inicializamos o estado já buscando o valor. 
  // O React só executa essa função na primeiríssima vez que o componente carrega.
  const [userName, setUserName] = useState(() => {
    const savedName = localStorage.getItem('userName');
    return savedName || ''; 
  });

  const handleLogout = () => {
    localStorage.clear();
    setUserName('');
    navigate('/login');
  };

  return (
    <nav className="navbar">
      <div className="navbar-inner">
        <Link to="/" className="logo">In<span>Out</span></Link>

        <div className="nav-links">
          <Link to="/" className="nav-link">Explorar</Link>
          <Link to="/destinos" className="nav-link">Destinos</Link>
          {/* CORRIGIDO AQUI: Apontando para a rota certa das viagens */}
          <Link to="/minhas-viagens" className="nav-link">Minhas Viagens</Link>
        </div>

        <div className="nav-actions">
          {userName ? (
            <div className="user-logged">
              <span className="user-greeting">Olá, <strong>{userName}</strong></span>
              <button onClick={handleLogout} className="btn-logout">Sair</button>
            </div>
          ) : (
            <div className="nav-auth-btns">
              <Link to="/login" className="btn-login">Entrar</Link>
              <Link to="/register" className="btn-cta">Começar Agora</Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
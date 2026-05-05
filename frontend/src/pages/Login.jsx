import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

function Login() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3001/login', {
        email,
        senha
      });

      alert(`Bem-vindo, ${response.data.user.nome}!`);
      
      // Salva o nome do usuário no navegador para saber que ele está logado
      localStorage.setItem('usuario', response.data.user.nome);
      
      navigate('/'); // Manda o usuário para a Home
    } catch (error) {
      alert(error.response?.data?.message || "Erro ao tentar fazer login!");
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2 style={{ color: 'var(--verde-floresta)' }}>Entrar no In Out</h2>
        <p style={{ color: 'var(--texto-suave)', marginBottom: '1.5rem' }}>
          Que bom ver você de novo!
        </p>

        <form onSubmit={handleLogin}>
          <input 
            type="email" 
            placeholder="Seu e-mail" 
            onChange={(e) => setEmail(e.target.value)} 
            required 
          />
          <input 
            type="password" 
            placeholder="Sua senha" 
            onChange={(e) => setSenha(e.target.value)} 
            required 
          />
          <button type="submit" className="btn-reserva">Entrar</button>
        </form>

        <p style={{ marginTop: '1rem' }}>
          Ainda não tem conta? <Link to="/cadastro" style={{color: 'var(--verde-floresta)', fontWeight: 'bold', textDecoration: 'none'}}> Cadastre-se</Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
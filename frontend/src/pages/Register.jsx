import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

function Register() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      // Envia os dados para o seu servidor Node na porta 3001
      const response = await axios.post('http://localhost:3001/register', {
        nome,
        email,
        senha
      });
      
      alert(response.data.message);
      navigate('/login'); // Redireciona para o login após sucesso
    } catch (error) {
      // Pega a mensagem de erro que vem do backend (ex: "E-mail já cadastrado")
      alert(error.response?.data?.message || "Erro ao conectar com o servidor!");
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2 style={{ color: 'var(--verde-floresta)' }}>Criar Conta In Out</h2>
        <p style={{ color: 'var(--texto-suave)', marginBottom: '1.5rem' }}>
          Junte-se à nossa comunidade de viajantes.
        </p>
        
        <form onSubmit={handleRegister}>
          <input 
            type="text" 
            placeholder="Nome completo" 
            value={nome}
            onChange={(e) => setNome(e.target.value)} 
            required 
          />
          <input 
            type="email" 
            placeholder="Seu melhor e-mail" 
            value={email}
            onChange={(e) => setEmail(e.target.value)} 
            required 
          />
          <input 
            type="password" 
            placeholder="Crie uma senha" 
            value={senha}
            onChange={(e) => setSenha(e.target.value)} 
            required 
          />
          <button type="submit" className="btn-reserva">Finalizar Cadastro</button>
        </form>
        
        <p style={{ marginTop: '1rem' }}>
          Já tem conta? <Link to="/login" style={{color: 'var(--verde-floresta)', fontWeight: 'bold', textDecoration: 'none'}}> Faça Login</Link>
        </p>
      </div>
    </div>
  );
}

export default Register;
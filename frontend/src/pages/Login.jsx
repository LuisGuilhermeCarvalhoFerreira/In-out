import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function Login() {
  // 2. ESTADOS PARA CAPTURAR OS INPUTS E ERROS
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [erro, setErro] = useState('');
  const [carregando, setCarregando] = useState(false);

  const navigate = useNavigate();

  // 3. FUNÇÃO QUE DISPARA O LOGIN
  const handleLogin = async (e) => {
    e.preventDefault();
    setErro('');
    setCarregando(true);

    // Validação básica antes de enviar
    if (!email || !senha) {
      setErro('Por favor, preencha todos os campos.');
      setCarregando(false);
      return;
    }

    try {
      // Enviando os dados via POST com Axios para o seu Back-end
      const resposta = await axios.post('http://localhost:3001/login', {
        email: email,
        senha: senha
      });

      // Se o back-end retornar sucesso (Geralmente status 200)
      if (resposta.data) {
        console.log('Login efetuado com sucesso!', resposta.data);
        
        // Exemplo: Salvar o token ou dados do usuário no localStorage
        // localStorage.setItem('usuario', JSON.stringify(resposta.data));

        // Redireciona o usuário para a página de destinos ou home
        navigate('/destinos');
      }

    } catch (error) {
      // Captura o erro vindo do servidor Express (ex: "Senha incorreta")
      if (error.response && error.response.data) {
        setErro(error.response.data.message || 'Erro ao fazer login. Verifique suas credenciais.');
      } else {
        setErro('Não foi possível conectar ao servidor. O back-end está ligado?');
      }
    } finally {
      setCarregando(false);
    }
  };

  return (
    <div style={{ display: 'flex', height: 'calc(100vh - 70px)', fontFamily: '"Inter", sans-serif', backgroundColor: '#f9fafb' }}>
      
      {/* HERO LATERAL (Esquerda) */}
      <div style={{
        flex: '1',
        position: 'relative',
        display: 'none',
        background: 'linear-gradient(rgba(47, 89, 44, 0.7), rgba(17, 24, 39, 0.85)), url("https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1000&auto=format&fit=crop&q=80")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        padding: '60px',
        flexDirection: 'column',
        justifyContent: 'space-between',
        color: '#ffffff'
      }} className="login-hero">
        <style>{`
          @media (min-width: 992px) {
            .login-hero { display: flex !important; }
          }
        `}</style>
        
        <div style={{ fontSize: '2rem', fontWeight: '800', letterSpacing: '-0.05em' }}>In Out</div>
        
        <div style={{ marginBottom: '40px' }}>
          <h1 style={{ fontSize: '3rem', fontWeight: '800', lineHeight: '1.1', marginBottom: '20px', letterSpacing: '-0.03em' }}>
            Planeje experiências <br />inesquecíveis.
          </h1>
          <p style={{ color: '#e5e7eb', fontSize: '1.1rem', maxWidth: '420px', lineHeight: '1.6' }}>
            Descubra destinos fascinantes, organize seus roteiros e compartilhe memórias ao redor do mundo.
          </p>
        </div>

        <div style={{ fontSize: '0.85rem', color: '#9ca3af', display: 'flex', alignItems: 'center', gap: '8px' }}>
          🔒 Login seguro e criptografado.
        </div>
      </div>

      {/* CARD DE LOGIN (Direita) */}
      <div style={{ flex: '1', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '40px' }}>
        <div style={{ width: '100%', maxWidth: '400px' }}>
          
          <div style={{ marginBottom: '32px' }}>
            <h2 style={{ fontSize: '2rem', fontWeight: '800', color: '#111827', marginBottom: '8px', letterSpacing: '-0.02em' }}>
              Sua próxima aventura começa aqui.
            </h2>
            <p style={{ color: '#6b7280', fontSize: '0.95rem' }}>
              Bem-vindo de volta ao In Out.
            </p>
          </div>

          {/* EXIBIÇÃO DE ERRO PREMIUM SE HOUVER */}
          {erro && (
            <div style={{ 
              backgroundColor: '#fef2f2', 
              color: '#991b1b', 
              padding: '12px 16px', 
              borderRadius: '10px', 
              fontSize: '0.9rem', 
              fontWeight: '600',
              marginBottom: '20px',
              border: '1px solid #fee2e2'
            }}>
              ⚠️ {erro}
            </div>
          )}

          {/* FORMULÁRIO COM O HANDLER DE SUBMIT */}
          <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div>
              <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: '600', color: '#374151', marginBottom: '6px' }}>E-mail</label>
              <input 
                type="email" 
                placeholder="nome@exemplo.com" 
                value={email}
                onChange={(e) => setEmail(e.target.value)} // Vincula o input ao estado
                style={{ width: '100%', padding: '14px 16px', borderRadius: '12px', border: '1px solid #e5e7eb', outline: 'none', fontSize: '0.95rem', boxSizing: 'border-box', transition: 'border 0.2s' }}
                onFocus={(e) => e.target.style.borderColor = '#2f592c'}
                onBlur={(e) => e.target.style.borderColor = '#e5e7eb'}
              />
            </div>

            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
                <label style={{ fontSize: '0.85rem', fontWeight: '600', color: '#374151' }}>Senha</label>
                <a href="#" style={{ fontSize: '0.85rem', color: '#2f592c', fontWeight: '600', textDecoration: 'none' }}>Esqueceu?</a>
              </div>
              <input 
                type="password" 
                placeholder="••••••••" 
                value={senha}
                onChange={(e) => setSenha(e.target.value)} // Vincula o input ao estado
                style={{ width: '100%', padding: '14px 16px', borderRadius: '12px', border: '1px solid #e5e7eb', outline: 'none', fontSize: '0.95rem', boxSizing: 'border-box' }}
                onFocus={(e) => e.target.style.borderColor = '#2f592c'}
                onBlur={(e) => e.target.style.borderColor = '#e5e7eb'}
              />
            </div>

            <button 
              type="submit" 
              disabled={carregando}
              style={{ 
                width: '100%', 
                backgroundColor: carregando ? '#9ca3af' : '#2f592c', 
                color: '#ffffff', 
                border: 'none', 
                padding: '14px', 
                borderRadius: '12px', 
                fontSize: '1rem', 
                fontWeight: '700', 
                cursor: carregando ? 'not-allowed' : 'pointer', 
                marginTop: '8px', 
                boxShadow: '0 4px 12px rgba(47, 89, 44, 0.15)',
                transition: 'background-color 0.2s'
              }}
            >
              {carregando ? 'Conectando...' : 'Entrar na conta'}
            </button>
          </form>

          {/* SEPARADOR VISUAL */}
          <div style={{ display: 'flex', alignItems: 'center', margin: '24px 0', color: '#9ca3af', fontSize: '0.85rem' }}>
            <div style={{ flex: 1, height: '1px', backgroundColor: '#e5e7eb' }}></div>
            <span style={{ padding: '0 16px' }}>ou continue com</span>
            <div style={{ flex: 1, height: '1px', backgroundColor: '#e5e7eb' }}></div>
          </div>

          {/* SOCIAL LOGIN */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <button type="button" style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', padding: '12px', borderRadius: '12px', border: '1px solid #e5e7eb', backgroundColor: '#ffffff', fontWeight: '600', fontSize: '0.95rem', color: '#374151', cursor: 'pointer' }}>
              <img src="https://fonts.gstatic.com/s/i/productlogos/googleg/v6/24px.svg" alt="Google" style={{ width: '18px' }} />
              Google
            </button>
            <button type="button" style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', padding: '12px', borderRadius: '12px', border: '1px solid #e5e7eb', backgroundColor: '#ffffff', fontWeight: '600', fontSize: '0.95rem', color: '#374151', cursor: 'pointer' }}>
              <span style={{ fontSize: '1.1rem' }}></span> Apple
            </button>
          </div>

          <p style={{ textAlign: 'center', color: '#6b7280', fontSize: '0.9rem', marginTop: '32px' }}>
            Não tem uma conta? <Link to="/register" style={{ color: '#2f592c', fontWeight: '700', textDecoration: 'none' }}>Cadastre-se</Link>
          </p>

        </div>
      </div>

    </div>
  );
}
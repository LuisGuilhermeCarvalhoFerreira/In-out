import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function Register() {
  // 2. ESTADOS PARA O FORMULÁRIO e FEEDBACKS
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [interesses, setInteresses] = useState([]);
  const [erro, setErro] = useState('');
  const [sucesso, setSucesso] = useState(false);
  const [carregando, setCarregando] = useState(false);

  const navigate = useNavigate();
  const listaInteresses = ['🏖️ Praia', '⛰️ Natureza', '🏙️ Cidade', '🌋 Aventura', '🍳 Gastronomia', '🏛️ Cultura'];

  // Função para marcar/desmarcar os interesses na tela
  const toggleInteresse = (inter) => {
    if (interesses.includes(inter)) {
      setInteresses(interesses.filter(i => i !== inter));
    } else {
      setInteresses([...interesses, inter]);
    }
  };

  // 3. FUNÇÃO QUE ENVIA OS DADOS PARA O BACK-END
  const handleRegister = async (e) => {
    e.preventDefault();
    setErro('');
    setSucesso(false);
    setCarregando(true);

    // Validação básica no Front
    if (!nome || !email || !senha) {
      setErro('Por favor, preencha todos os campos obrigatórios (Nome, E-mail e Senha).');
      setCarregando(false);
      return;
    }

    try {
      // Fazendo a requisição POST com Axios para a rota de cadastro do Node
      const resposta = await axios.post('http://localhost:3001/register', {
        nome: nome,
        email: email,
        senha: senha,
        interesses: interesses // Envia as tags selecionadas como um Array
      });

      if (resposta.status === 201 || resposta.data) {
        setSucesso(true);
        console.log('Usuário cadastrado com sucesso!', resposta.data);
        
        // Aguarda 2 segundos exibindo a mensagem de sucesso e joga o usuário pro Login
        setTimeout(() => {
          navigate('/login');
        }, 2000);
      }

    } catch (error) {
      // Captura o erro do Express (Ex: se o e-mail já estiver cadastrado no MySQL)
      if (error.response && error.response.data) {
        setErro(error.response.data.message || 'Erro ao criar conta. Tente novamente.');
      } else {
        setErro('Não foi possível conectar ao servidor. O back-end está ativo?');
      }
    } finally {
      setCarregando(false);
    }
  };

  return (
    <div style={{ minHeight: 'calc(100vh - 70px)', padding: '60px 20px', backgroundColor: '#f3f4f6', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: '"Inter", sans-serif' }}>
      
      <div style={{
        width: '100%',
        maxWidth: '900px',
        backgroundColor: 'rgba(255, 255, 255, 0.9)',
        backdropFilter: 'blur(12px)',
        borderRadius: '24px',
        boxShadow: '0 20px 40px rgba(0,0,0,0.04)',
        border: '1px solid rgba(255, 255, 255, 0.7)',
        display: 'flex',
        overflow: 'hidden'
      }} className="register-container">
        <style>{`
          @media (max-width: 768px) {
            .register-container { flex-direction: column !important; }
            .register-benefits { display: none !important; }
          }
        `}</style>

        {/* COLUNA DE BENEFÍCIOS (Esquerda) */}
        <div className="register-benefits" style={{ flex: '1', backgroundColor: '#2f592c', padding: '45px', color: '#ffffff', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <h3 style={{ fontSize: '1.8rem', fontWeight: '800', marginBottom: '24px', letterSpacing: '-0.02em' }}>Sua jornada começa aqui.</h3>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
              <span style={{ backgroundColor: 'rgba(255,255,255,0.2)', padding: '4px 8px', borderRadius: '6px', fontSize: '0.9rem' }}>✔</span>
              <p style={{ margin: 0, fontSize: '0.95rem', lineHeight: '1.4' }}><b>Parceiro de Exploração:</b> Guarde os lugares dos seus sonhos num clique.</p>
            </div>
            <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
              <span style={{ backgroundColor: 'rgba(255,255,255,0.2)', padding: '4px 8px', borderRadius: '6px', fontSize: '0.9rem' }}>✔</span>
              <p style={{ margin: 0, fontSize: '0.95rem', lineHeight: '1.4' }}><b>Organize viagens:</b> Monte roteiros e datas de forma simples e intuitiva.</p>
            </div>
            <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
              <span style={{ backgroundColor: 'rgba(255,255,255,0.2)', padding: '4px 8px', borderRadius: '6px', fontSize: '0.9rem' }}>✔</span>
              <p style={{ margin: 0, fontSize: '0.95rem', lineHeight: '1.4' }}><b>Recomendações:</b> Receba sugestões com base no seu perfil de interesse.</p>
            </div>
          </div>
        </div>

        {/* COLUNA DO FORMULÁRIO (Direita) */}
        <div style={{ flex: '1.2', padding: '45px', backgroundColor: '#ffffff' }}>
          
          {/* Barra de Progresso Visual */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '32px' }}>
            <span style={{ fontSize: '0.75rem', fontWeight: '700', backgroundColor: '#2f592c', color: '#fff', padding: '4px 10px', borderRadius: '99px' }}>1</span>
            <span style={{ fontSize: '0.85rem', fontWeight: '700', color: '#111827' }}>Conta e Preferências</span>
            <div style={{ flex: 1, height: '2px', backgroundColor: '#e5e7eb', margin: '0 8px' }}></div>
            <span style={{ fontSize: '0.75rem', fontWeight: '700', backgroundColor: '#e5e7eb', color: '#9ca3af', padding: '4px 10px', borderRadius: '99px' }}>2</span>
          </div>

          <h2 style={{ fontSize: '1.8rem', fontWeight: '800', color: '#111827', marginBottom: '8px', letterSpacing: '-0.02em' }}>
            Crie sua conta e explore o mundo.
          </h2>
          <p style={{ color: '#6b7280', fontSize: '0.9rem', marginBottom: '28px' }}>Seus dados estão protegidos.</p>

          {/* ALERTAS DE ERRO OU SUCESSO PREMIUM */}
          {erro && (
            <div style={{ backgroundColor: '#fef2f2', color: '#991b1b', padding: '12px 16px', borderRadius: '10px', fontSize: '0.9rem', fontWeight: '600', marginBottom: '20px', border: '1px solid #fee2e2' }}>
              ⚠️ {erro}
            </div>
          )}

          {sucesso && (
            <div style={{ backgroundColor: '#f0fdf4', color: '#166534', padding: '12px 16px', borderRadius: '10px', fontSize: '0.9rem', fontWeight: '600', marginBottom: '20px', border: '1px solid #bbf7d0' }}>
              🎉 Conta criada com sucesso! Redirecionando...
            </div>
          )}

          {/* FORMULÁRIO */}
          <form onSubmit={handleRegister} style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
            <div>
              <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: '600', color: '#374151', marginBottom: '6px' }}>Nome Completo</label>
              <input 
                type="text" 
                placeholder="Seu nome" 
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                style={{ width: '100%', padding: '12px 14px', borderRadius: '10px', border: '1px solid #e5e7eb', outline: 'none', fontSize: '0.95rem', boxSizing: 'border-box' }} 
              />
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: '600', color: '#374151', marginBottom: '6px' }}>E-mail</label>
              <input 
                type="email" 
                placeholder="nome@exemplo.com" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={{ width: '100%', padding: '12px 14px', borderRadius: '10px', border: '1px solid #e5e7eb', outline: 'none', fontSize: '0.95rem', boxSizing: 'border-box' }} 
              />
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: '600', color: '#374151', marginBottom: '6px' }}>Senha</label>
              <input 
                type="password" 
                placeholder="Mínimo 8 caracteres" 
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
                style={{ width: '100%', padding: '12px 14px', borderRadius: '10px', border: '1px solid #e5e7eb', outline: 'none', fontSize: '0.95rem', boxSizing: 'border-box' }} 
              />
            </div>

            {/* ESCOLHA DE INTERESSES (Tags Clicáveis) */}
            <div style={{ marginTop: '8px' }}>
              <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: '600', color: '#374151', marginBottom: '8px' }}>
                Quais tipos de destinos você mais curte?
              </label>
              <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                {listaInteresses.map((inter) => {
                  const ativo = interesses.includes(inter);
                  return (
                    <button
                      type="button"
                      key={inter}
                      onClick={() => toggleInteresse(inter)}
                      style={{
                        padding: '8px 14px',
                        borderRadius: '99px',
                        border: '1px solid',
                        borderColor: ativo ? '#2f592c' : '#e5e7eb',
                        backgroundColor: ativo ? '#e6f4ea' : '#ffffff',
                        color: ativo ? '#137333' : '#4b5563',
                        fontSize: '0.85rem',
                        fontWeight: '600',
                        cursor: 'pointer',
                        transition: 'all 0.1s ease'
                      }}
                    >
                      {inter}
                    </button>
                  );
                })}
              </div>
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
                borderRadius: '10px', 
                fontSize: '1rem', 
                fontWeight: '700', 
                cursor: carregando ? 'not-allowed' : 'pointer', 
                marginTop: '12px', 
                boxShadow: '0 4px 12px rgba(47, 89, 44, 0.15)' 
              }}
            >
              {carregando ? 'Criando conta...' : 'Criar minha conta'}
            </button>
          </form>

          <p style={{ textAlign: 'center', color: '#6b7280', fontSize: '0.9rem', marginTop: '24px', marginBottom: 0 }}>
            Já tem cadastro? <Link to="/login" style={{ color: '#2f592c', fontWeight: '700', textDecoration: 'none' }}>Fazer Login</Link>
          </p>

        </div>
      </div>

    </div>
  );
}

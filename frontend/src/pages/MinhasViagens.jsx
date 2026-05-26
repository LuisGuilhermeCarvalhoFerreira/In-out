import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function MinhasViagens() {
  // Estado para simular as viagens do usuário (Mock Data Premium)
  const [viagens, setViagens] = useState([
    {
      id: 1,
      destino: "Tóquio",
      pais: "Japão",
      bandeira: "🇯🇵",
      data: "15 a 28 de Março, 2026",
      status: "Confirmada", // Confirmada, Planejando, Em andamento, Finalizada
      orcamento: "R$ 8.500",
      clima: "14°C ⛅",
      diasFaltam: 45,
      imagem: "https://images.unsplash.com/photo-1540959733332-eab4deceeaf7?w=1000&auto=format&fit=crop&q=80",
      checklist: { passagens: true, hotel: true, roteiro: false, documentos: true },
      amigos: 2
    },
    {
      id: 2,
      destino: "Santiago",
      pais: "Chile",
      bandeira: "🇨🇱",
      data: "10 a 18 de Julho, 2026",
      status: "Planejando",
      orcamento: "R$ 3.200",
      clima: "8°C ❄️",
      diasFaltam: 162,
      imagem: "https://images.unsplash.com/photo-1517596041049-601f010b9388?w=1000&auto=format&fit=crop&q=80",
      checklist: { passagens: false, hotel: false, roteiro: true, documentos: false },
      amigos: 0
    }
  ]);

  // Função para definir a cor do Badge de Status
  const getStatusStyle = (status) => {
    switch(status) {
      case 'Confirmada': return { bg: '#dcfce7', color: '#166534', dot: '🟢' };
      case 'Planejando': return { bg: '#e0e7ff', color: '#3730a3', dot: '🔵' };
      case 'Em andamento': return { bg: '#ffedd5', color: '#9a3412', dot: '🟠' };
      default: return { bg: '#f3f4f6', color: '#374151', dot: '⚫' };
    }
  };

  return (
    <div style={{ minHeight: 'calc(100vh - 70px)', backgroundColor: '#f9fafb', padding: '40px 20px', fontFamily: '"Inter", sans-serif' }}>
      
      <style>{`
        .viagem-card {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .viagem-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 20px 40px rgba(0,0,0,0.06) !important;
        }
        @media (max-width: 768px) {
          .viagem-layout { flex-direction: column !important; }
          .viagem-img { height: 200px !important; width: 100% !important; }
        }
      `}</style>

      <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
        
        {/* TOPO: Título Emocional e Resumo do Usuário */}
        <div style={{ marginBottom: '40px' }}>
          <h1 style={{ fontSize: '2.5rem', fontWeight: '800', color: '#111827', letterSpacing: '-0.03em', marginBottom: '16px' }}>
            Suas Aventuras
          </h1>
          
          {/* Estatísticas Pessoais Premium (Gamificação) */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px' }}>
            <div style={{ backgroundColor: '#ffffff', padding: '20px', borderRadius: '16px', border: '1px solid #e5e7eb', display: 'flex', alignItems: 'center', gap: '16px' }}>
              <div style={{ fontSize: '2rem' }}>🌍</div>
              <div>
                <span style={{ display: 'block', fontSize: '0.85rem', color: '#6b7280', fontWeight: '600' }}>Países Visitados</span>
                <span style={{ fontSize: '1.4rem', fontWeight: '800', color: '#111827' }}>3</span>
              </div>
            </div>
            <div style={{ backgroundColor: '#ffffff', padding: '20px', borderRadius: '16px', border: '1px solid #e5e7eb', display: 'flex', alignItems: 'center', gap: '16px' }}>
              <div style={{ fontSize: '2rem' }}>✈️</div>
              <div>
                <span style={{ display: 'block', fontSize: '0.85rem', color: '#6b7280', fontWeight: '600' }}>Quilômetros</span>
                <span style={{ fontSize: '1.4rem', fontWeight: '800', color: '#111827' }}>12.400 km</span>
              </div>
            </div>
            <div style={{ backgroundColor: '#2f592c', padding: '20px', borderRadius: '16px', display: 'flex', alignItems: 'center', gap: '16px', color: '#ffffff', boxShadow: '0 10px 25px rgba(47, 89, 44, 0.2)' }}>
              <div style={{ fontSize: '2rem' }}>⏳</div>
              <div>
                <span style={{ display: 'block', fontSize: '0.85rem', color: '#d1d5db', fontWeight: '600' }}>Próxima Viagem</span>
                <span style={{ fontSize: '1.4rem', fontWeight: '800' }}>45 dias</span>
              </div>
            </div>
          </div>
        </div>

        {/* MEIO: Próximas Viagens (Cards Widescreen) */}
        <div>
          <h2 style={{ fontSize: '1.4rem', fontWeight: '700', color: '#374151', marginBottom: '20px' }}>Próximos Destinos</h2>
          
          {viagens.length === 0 ? (
            /* EMPTY STATE INTELIGENTE */
            <div style={{ textAlign: 'center', padding: '60px 20px', backgroundColor: '#ffffff', borderRadius: '24px', border: '1px dashed #d1d5db' }}>
              <div style={{ fontSize: '3rem', marginBottom: '16px' }}>🗺️</div>
              <h3 style={{ fontSize: '1.2rem', color: '#111827', marginBottom: '8px' }}>Você ainda não planejou nenhuma aventura.</h3>
              <p style={{ color: '#6b7280', marginBottom: '24px' }}>O mundo é gigante. Que tal começar a explorar agora?</p>
              <Link to="/destinos">
                <button style={{ backgroundColor: '#2f592c', color: '#ffffff', border: 'none', padding: '12px 24px', borderRadius: '99px', fontWeight: '700', cursor: 'pointer', boxShadow: '0 4px 12px rgba(47, 89, 44, 0.15)' }}>
                  Explorar Destinos
                </button>
              </Link>
            </div>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              {viagens.map(viagem => {
                const statusStyle = getStatusStyle(viagem.status);
                
                return (
                  <div key={viagem.id} className="viagem-card viagem-layout" style={{ display: 'flex', backgroundColor: '#ffffff', borderRadius: '24px', overflow: 'hidden', border: '1px solid #e5e7eb', boxShadow: '0 4px 6px rgba(0,0,0,0.02)' }}>
                    
                    {/* Imagem Widescreen */}
                    <div className="viagem-img" style={{ width: '320px', position: 'relative' }}>
                      <img src={viagem.imagem} alt={viagem.destino} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                      <div style={{ position: 'absolute', top: '16px', left: '16px', backgroundColor: 'rgba(255,255,255,0.9)', backdropFilter: 'blur(4px)', padding: '6px 12px', borderRadius: '99px', fontSize: '0.8rem', fontWeight: '700', color: '#111827' }}>
                        ⏳ Faltam {viagem.diasFaltam} dias
                      </div>
                    </div>

                    {/* Detalhes da Viagem */}
                    <div style={{ padding: '30px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                      
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '16px' }}>
                        <div>
                          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                            <span style={{ fontSize: '0.85rem', color: '#6b7280', fontWeight: '600' }}>📍 {viagem.pais} {viagem.bandeira}</span>
                          </div>
                          <h3 style={{ fontSize: '1.8rem', fontWeight: '800', color: '#111827', margin: 0 }}>{viagem.destino}</h3>
                          <p style={{ color: '#6b7280', fontSize: '0.95rem', margin: '4px 0 0 0' }}>🗓 {viagem.data}</p>
                        </div>
                        
                        {/* Status Visual Premium */}
                        <div style={{ backgroundColor: statusStyle.bg, color: statusStyle.color, padding: '6px 14px', borderRadius: '99px', fontSize: '0.85rem', fontWeight: '700', display: 'flex', alignItems: 'center', gap: '6px' }}>
                          {statusStyle.dot} {viagem.status}
                        </div>
                      </div>

                      {/* Timeline / Checklist Inteligente */}
                      <div style={{ backgroundColor: '#f9fafb', padding: '16px', borderRadius: '12px', marginBottom: '20px', border: '1px solid #f3f4f6' }}>
                        <span style={{ display: 'block', fontSize: '0.8rem', color: '#6b7280', fontWeight: '700', marginBottom: '10px', textTransform: 'uppercase' }}>Progresso do Planejamento</span>
                        <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                          <span style={{ fontSize: '0.9rem', color: viagem.checklist.passagens ? '#166534' : '#9ca3af', fontWeight: '500' }}>
                            {viagem.checklist.passagens ? '✅' : '⬜'} Passagens
                          </span>
                          <span style={{ fontSize: '0.9rem', color: viagem.checklist.hotel ? '#166534' : '#9ca3af', fontWeight: '500' }}>
                            {viagem.checklist.hotel ? '✅' : '⬜'} Hotel
                          </span>
                          <span style={{ fontSize: '0.9rem', color: viagem.checklist.roteiro ? '#166534' : '#9ca3af', fontWeight: '500' }}>
                            {viagem.checklist.roteiro ? '✅' : '⬜'} Roteiro
                          </span>
                          <span style={{ fontSize: '0.9rem', color: viagem.checklist.documentos ? '#166534' : '#9ca3af', fontWeight: '500' }}>
                            {viagem.checklist.documentos ? '✅' : '⬜'} Documentos
                          </span>
                        </div>
                      </div>

                      {/* Funcionalidades "Fake" de Startup */}
                      <div style={{ marginTop: 'auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '16px', borderTop: '1px solid #e5e7eb' }}>
                        <div style={{ display: 'flex', gap: '16px' }}>
                          <span style={{ fontSize: '0.9rem', color: '#4b5563', fontWeight: '600' }}>💰 {viagem.orcamento}</span>
                          <span style={{ fontSize: '0.9rem', color: '#4b5563', fontWeight: '600' }}>{viagem.clima}</span>
                          {viagem.amigos > 0 && (
                            <span style={{ fontSize: '0.9rem', color: '#4b5563', fontWeight: '600' }}>👥 +{viagem.amigos} Amigos</span>
                          )}
                        </div>
                        <button style={{ backgroundColor: '#ffffff', color: '#111827', border: '1px solid #d1d5db', padding: '8px 16px', borderRadius: '8px', fontWeight: '600', cursor: 'pointer', transition: 'all 0.2s' }} className="btn-gerenciar">
                          Gerenciar Viagem
                        </button>
                      </div>

                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
        
      </div>
    </div>
  );
}
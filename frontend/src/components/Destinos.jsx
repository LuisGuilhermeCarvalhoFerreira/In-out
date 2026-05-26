import React, { useState } from 'react';

export default function Destinos() {
  // 1. Estado para controlar qual filtro está ativo
  const [filtroAtivo, setFiltroAtivo] = useState('Todos');

  // 2. Dados ricos dos destinos baseados na sua ideia estratégica
  const [destinosData] = useState([
    {
      id: 1,
      nome: "Paris",
      pais: "França",
      bandeira: "🇫🇷",
      categoria: "Urbano",
      nota: "4.9",
      precoMedio: "R$ 3.500",
      melhorEpoca: "Primavera (Abr-Jun)",
      tagStatus: "Mais procurado",
      dadosSocial: "12 mil pessoas visitaram este mês",
      imagem: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=600&auto=format&fit=crop&q=80"
    },
    {
      id: 2,
      nome: "Tóquio",
      pais: "Japão",
      bandeira: "🇯🇵",
      categoria: "Luxo",
      nota: "5.0",
      precoMedio: "R$ 5.200",
      melhorEpoca: "Outono (Out-Nov)",
      tagStatus: "Tendência de 2026",
      dadosSocial: "Mais reservado da semana",
      imagem: "https://images.unsplash.com/photo-1540959733332-eab4deceeaf7?w=600&auto=format&fit=crop&q=80"
    },
    {
      id: 3,
      nome: "Santorini",
      pais: "Grécia",
      bandeira: "🇬🇷",
      categoria: "Praia",
      nota: "4.8",
      precoMedio: "R$ 4.100",
      melhorEpoca: "Verão (Jun-Set)",
      tagStatus: "Mais procurado",
      dadosSocial: "Alta temporada",
      imagem: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=600&auto=format&fit=crop&q=80"
    },
    {
      id: 4,
      nome: "Rio de Janeiro",
      pais: "Brasil",
      bandeira: "🇧🇷",
      categoria: "Econômico",
      nota: "4.7",
      precoMedio: "R$ 800",
      melhorEpoca: "Inverno (Jun-Ago)",
      tagStatus: "Preço Imperdível",
      dadosSocial: "8 mil buscas hoje",
      imagem: "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?w=600&auto=format&fit=crop&q=80"
    }
  ]);

  // Lista de filtros que você planejou
  const categoriasFiltros = ['Todos', 'Praia', 'Montanha', 'Urbano', 'Luxo', 'Econômico'];

  // Filtragem dinâmica dos cards
  const destinosFiltrados = filtroAtivo === 'Todos' 
    ? destinosData 
    : destinosData.filter(d => d.categoria === filtroAtivo);

  return (
    <div style={{ padding: '60px 20px', maxWidth: '1200px', margin: '0 auto', fontFamily: '"Inter", sans-serif' }}>
      
      {/* Estilos CSS injetados para efeitos premium de Hover */}
      <style>{`
        .destino-card {
          transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.4s ease;
        }
        .destino-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.08) !important;
        }
        .filtro-btn {
          transition: all 0.2s ease;
        }
        .filtro-btn:hover {
          background-color: #f3f4f6;
        }
      `}</style>

      {/* 1. Título Forte com pegada premium */}
      <div style={{ marginBottom: '40px' }}>
        <h2 style={{ fontSize: '2.5rem', fontWeight: '800', color: '#111827', letterSpacing: '-0.03em', marginBottom: '8px' }}>
          Explore Lugares Incríveis
        </h2>
        <p style={{ color: '#6b7280', fontSize: '1.1rem' }}>
          Destinos em alta escolhidos a dedo para sua próxima descoberta.
        </p>
      </div>

      {/* 2. Filtro Visual */}
      <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', marginBottom: '45px' }}>
        {categoriasFiltros.map((cat) => (
          <button
            key={cat}
            onClick={() => setFiltroAtivo(cat)}
            className="filtro-btn"
            style={{
              padding: '10px 20px',
              borderRadius: '99px',
              border: '1px solid',
              borderColor: filtroAtivo === cat ? '#2f592c' : '#e5e7eb',
              backgroundColor: filtroAtivo === cat ? '#2f592c' : '#ffffff',
              color: filtroAtivo === cat ? '#ffffff' : '#4b5563',
              fontSize: '0.95rem',
              fontWeight: '600',
              cursor: 'pointer',
              outline: 'none'
            }}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid de exibição dos cartões */}
      {destinosFiltrados.length === 0 ? (
        <div style={{ textAlign: 'center', padding: '40px', color: '#9ca3af' }}>
          <p style={{ fontSize: '1.2rem' }}>Nenhum destino cadastrado nesta categoria ainda. 🏕️</p>
        </div>
      ) : (
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
          gap: '32px' 
        }}>
          {destinosFiltrados.map((destino) => (
            <div 
              key={destino.id} 
              className="destino-card"
              style={{
                backgroundColor: '#ffffff',
                borderRadius: '20px',
                overflow: 'hidden',
                boxShadow: '0 4px 16px rgba(0,0,0,0.03)',
                border: '1px solid #f3f4f6',
                display: 'flex',
                flexDirection: 'column',
                position: 'relative'
              }}
            >
              {/* Imagem Grande com gradiente suave */}
              <div style={{ width: '100%', height: '240px', position: 'relative', overflow: 'hidden' }}>
                <img 
                  src={destino.imagem} 
                  alt={destino.nome} 
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                />
                
                {/* Tag flutuante ("Mais procurado", etc) */}
                <div style={{
                  position: 'absolute',
                  top: '16px',
                  left: '16px',
                  backgroundColor: 'rgba(255, 255, 255, 0.95)',
                  backdropFilter: 'blur(4px)',
                  padding: '6px 14px',
                  borderRadius: '99px',
                  fontSize: '0.75rem',
                  fontWeight: '700',
                  color: '#15803d',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.05)'
                }}>
                  ✨ {destino.tagStatus}
                </div>

                {/* Sombra gradiente sutil na base da imagem */}
                <div style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  height: '60px',
                  background: 'linear-gradient(transparent, rgba(0,0,0,0.2))'
                }} />
              </div>

              {/* Corpo das Informações */}
              <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                
                {/* Nome do lugar + País + Nota */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px' }}>
                  <div>
                    <h3 style={{ margin: 0, fontSize: '1.4rem', fontWeight: '700', color: '#111827' }}>
                      {destino.nome} <span style={{ fontSize: '1.2rem' }}>{destino.bandeira}</span>
                    </h3>
                    <p style={{ margin: '2px 0 0 0', fontSize: '0.85rem', color: '#9ca3af', fontWeight: '500' }}>
                      📍 {destino.pais}
                    </p>
                  </div>
                  
                  {/* Badge de Nota ⭐ */}
                  <div style={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    gap: '4px', 
                    backgroundColor: '#fef9c3', 
                    padding: '4px 10px', 
                    borderRadius: '8px',
                    fontWeight: '700',
                    fontSize: '0.9rem',
                    color: '#854d0e'
                  }}>
                    ⭐ {destino.nota}
                  </div>
                </div>

                {/* Detalhes Inteligentes do Card */}
                <div style={{ 
                  display: 'grid', 
                  gridTemplateColumns: '1fr 1fr', 
                  gap: '12px', 
                  backgroundColor: '#f9fafb', 
                  padding: '12px', 
                  borderRadius: '12px',
                  marginBottom: '16px'
                }}>
                  <div>
                    <span style={{ fontSize: '0.75rem', color: '#9ca3af', display: 'block', marginBottom: '2px' }}>✈️ MELHOR ÉPOCA</span>
                    <span style={{ fontSize: '0.85rem', fontWeight: '600', color: '#374151' }}>{destino.melhorEpoca}</span>
                  </div>
                  <div>
                    <span style={{ fontSize: '0.75rem', color: '#9ca3af', display: 'block', marginBottom: '2px' }}>💰 PREÇO MÉDIO</span>
                    <span style={{ fontSize: '0.85rem', fontWeight: '600', color: '#374151' }}>{destino.precoMedio}</span>
                  </div>
                </div>

                {/* Pegada de Produto (Métricas Sociais) */}
                <div style={{ 
                  marginTop: 'auto', 
                  paddingTop: '16px', 
                  borderTop: '1px solid #f3f4f6', 
                  display: 'flex', 
                  justifyContent: 'space-between', 
                  alignItems: 'center' 
                }}>
                  <span style={{ fontSize: '0.8rem', color: '#6b7280', fontWeight: '500', maxWidth: '140px' }}>
                    🔥 {destino.dadosSocial}
                  </span>
                  
                  <button style={{ 
                    backgroundColor: '#2f592c', 
                    color: '#ffffff', 
                    border: 'none', 
                    padding: '10px 18px', 
                    borderRadius: '10px', 
                    fontWeight: '700', 
                    fontSize: '0.9rem',
                    cursor: 'pointer',
                    boxShadow: '0 4px 12px rgba(47, 89, 44, 0.15)'
                  }}>
                    Explorar
                  </button>
                </div>

              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
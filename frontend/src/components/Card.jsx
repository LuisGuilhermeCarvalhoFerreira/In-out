// Card.jsx
export default function Card({ destino, onReserve }) {
  // Verificação de segurança: se 'destino' não chegar, não quebra a tela
  if (!destino) return null;

  return (
    <div className="card-container">
      <div className="card-image-wrapper">
        <img
          src={destino.imagem}
          alt={destino.nome}
          className="card-image"
          loading="lazy"
          onError={(e) => { e.currentTarget.src = 'https://via.placeholder.com/300x200?text=Sem+Imagem'; }}
        />
        <div className="card-badge">Destaque InOut</div>
      </div>

      <div className="card-info">
        <div className="card-header">
          <h3 className="card-title">{destino.nome}</h3>
          <span className="card-rating">⭐ 4.9</span>
        </div>

        <p className="card-description">Estadia inteira • Localização privilegiada</p>

        <div className="card-footer">
          <div className="card-price-container">
            <span className="card-currency">R$</span>
            <span className="card-price-amount">{destino.preco}</span>
            <span className="card-price-period">/noite</span>
          </div>

          <button
            className="card-button"
            onClick={() => onReserve?.(destino)}
            type="button"
          >
            Reservar
          </button>
        </div>
      </div>
    </div>
  );
}
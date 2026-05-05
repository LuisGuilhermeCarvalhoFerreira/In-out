// Card.jsx
export default function Card({ item, onReserve }) {
  return (
    <div className="card" role="article" aria-label={item.nome}>
      <div className="card-media">
        <img
          src={item.imagem}
          alt={item.nome}
          className="card-img"
          loading="lazy"
          onError={(e) => { e.currentTarget.src = '/placeholder.jpg'; }}
        />
      </div>

      <div className="card-content">
        <h3 className="card-title">{item.nome}</h3>

        <p className="card-sub">
          Estadia inteira • Destino InOut
        </p>

        <div className="card-row">
          <div className="card-price">
            R$ <span className="price-value">{item.preco}</span>
            <span className="price-suffix"> / noite</span>
          </div>

          <button
            className="btn-reserva"
            onClick={() => onReserve?.(item)}
            aria-label={`Reservar ${item.nome}`}
            type="button"
          >
            Reservar agora
          </button>
        </div>
      </div>
    </div>
  );
}

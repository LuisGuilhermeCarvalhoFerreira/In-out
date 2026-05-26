export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <h1 className="hero-title">
          Explore o mundo <br /> 
          <span>com a In Out</span>
        </h1>
        
        <div className="search-container">
          <div className="search-field">
            <label>Onde?</label>
            <input type="text" placeholder="Destino" />
          </div>
          <div className="search-field border-left">
            <label>Quando?</label>
            <input type="date" />
          </div>
          <button className="btn-search">🔍</button>
        </div>
      </div>
    </section>
  );
}
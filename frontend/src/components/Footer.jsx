// components/Footer.jsx
export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        
        <div className="footer-column">
          <h3 className="footer-logo">In<span>Out</span></h3>
          <p>Sua plataforma de conexão com destinos incríveis e hospedagens exclusivas.</p>
        </div>

        <div className="footer-column">
          <h4>Navegação</h4>
          <a href="/">Explorar</a>
          <a href="/destinos">Destinos</a>
          <a href="/hospedagens">Hospedagens</a>
        </div>

        <div className="footer-column">
          <h4>Suporte</h4>
          <a href="/faq">FAQ</a>
          <a href="/contato">Contato</a>
          <a href="/termos">Termos de Uso</a>
        </div>

        <div className="footer-column">
          <h4>Redes Sociais</h4>
          <div className="social-icons">
            <span>Instagram</span>
            <span>LinkedIn</span>
          </div>
        </div>

      </div>
      <div className="footer-bottom">
        <p>&copy; 2026 In Out - Todos os direitos reservados.</p>
      </div>
    </footer>
  );
} 
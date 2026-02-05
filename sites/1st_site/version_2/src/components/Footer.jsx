import './Footer.css'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p className="footer-copyright">© 2026 «Clash Royale»</p>
        <div className="footer-links">
          <p>
            <a 
              href="https://clashroyale.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="footer-link"
            >
              Официальный сайт разрабов: Clash Royale
            </a>
          </p>
          <p>
            Разработчик: 
            <a 
              href="https://t.me/legenda_cr" 
              target="_blank" 
              rel="noopener noreferrer"
              className="footer-link"
            >
              Ilya Matveevsky
            </a>
          </p>
          <p>Контактная почта: legenda.devops@gmail.com</p>
          <p>
            VK: 
            <a 
              href="https://vk.com/legenda_crx" 
              target="_blank" 
              rel="noopener noreferrer"
              className="footer-link"
            >
              Ilya Matveevsky
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

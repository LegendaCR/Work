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
              href="https://vk.com/legenda1ru1" 
              target="_blank" 
              rel="noopener noreferrer"
              className="footer-link"
            >
              Илья Legenda
            </a>
          </p>
          <p>Контактный телефон: +79223385488</p>
          <p>
            Я в вк: 
            <a 
              href="https://vk.com/legenda1ru1" 
              target="_blank" 
              rel="noopener noreferrer"
              className="footer-link"
            >
              Илья Матвеевский
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

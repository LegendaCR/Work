import './AboutMe.css'

function AboutMe() {
  return (
    <div className="about-me-page">
      <div className="content-wrapper">
        <div className="main-content-area">
          <section className="map-section">
            <div className="map-container">
              <iframe
                src="https://yandex.ru/map-widget/v1/?um=constructor%3A0706efb12092839e0f7282a8ae64b4e333d739cf61872b90454a807990e28166&amp;source=constructor"
                width="100%"
                height="550"
                frameBorder="0"
                title="Yandex Map"
              ></iframe>
            </div>
          </section>

          <section className="contact-section">
            <h2>Как меня найти?</h2>
            <div className="contact-info">
              <div className="contact-links">
                <p>По вопросам сотрудничества и рекламы</p>
                <p>
                  Telegram: 
                  <a 
                    href="https://t.me/Legenda_1Cr" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="contact-link"
                  >
                    Click on me
                  </a>
                </p>
                <p>
                  VK: 
                  <a 
                    href="https://vk.com/legenda1ru1" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="contact-link"
                  >
                    Click on me
                  </a>
                </p>
                <p>
                  Twitter: 
                  <a 
                    href="https://twitter.com/Legenda_Cr?t=4C1c6ohGDffHFoGCPqrVqw&s=09" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="contact-link"
                  >
                    Click on me
                  </a>
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}

export default AboutMe

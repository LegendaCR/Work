import { useState, useEffect } from 'react'
import './Developers.css'

const developerImages = [
  '/allimeges/Update_6.jpg',
  '/allimeges/for-the-planet-alliance.jpg',
  '/allimeges/Games-4.jpg',
  '/allimeges/maxrult.jpg',
  '/allimeges/Update_6.jpg',
  '/allimeges/3.jpg'
]

function Developers() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % developerImages.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  const goToSlide = (index) => {
    setCurrentIndex(index)
  }

  return (
    <div className="developers-page">
      <div className="content-wrapper">
        <div className="main-content-area">
          <section className="slider-section">
            <div className="slider-container">
              {developerImages.map((image, index) => (
                <div
                  key={index}
                  className={`slide ${index === currentIndex ? 'active' : ''}`}
                >
                  <img src={image} alt={`Supercell ${index + 1}`} />
                </div>
              ))}
            </div>
            <div className="slider-controls">
              {developerImages.map((_, index) => (
                <button
                  key={index}
                  className={`slider-dot ${index === currentIndex ? 'active' : ''}`}
                  onClick={() => goToSlide(index)}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </section>

          <section className="company-history">
            <h2>История компании Supercell</h2>
            <div className="history-text">
              <p>
                Компания Supercell была основана Илккой Паананеном и Микко Кодисойей, ранее работавших 
                в мобильной игровой компании Sumea. Кодисойя был одним из основателей Sumea в 1999 году, 
                Илкка Паананен был принят на работу в качестве генерального директора компании в 2000 году. 
                В 2004 году Sumea приобрела компания American Digital Chocolate, разместив в Финляндии свою 
                европейскую штаб-квартиру. Паананен стал управляющим американской компании в Европе, Кодисойя 
                сохранил должность креативного директора. В 2010 году оба покинули компанию.
              </p>
              <p>
                Паананен вначале работал в финансовой компании Lifeline Ventures, но затем решил стать 
                предпринимателем. В 2010 году он, Кодисойя, Петри Стурман, Ласси Леппинен (главный программист 
                в Sumea и Digital Chocolate), Виса Форстен и Нико Дером основали в Нииттюкумпу, районе города 
                Эспоо, свою игровую компанию, в которой руководители не должны были вмешиваться в работу 
                разработчиков игр. Кодисойя и Паананен инвестировали в новую компанию 250 000 евро из своих 
                сбережений, сделанных за время работы в Sumea. Кроме того, им удалось получить кредит в размере 
                400 000 евро от финского агентства по финансированию технологических инноваций Tekes. Ещё одним 
                инвестором стала Lifeline Ventures. Вскоре Supercell привлекла ещё 750 000 евро от нескольких 
                инвесторов, среди которых были London Ventures Partner и Initial Capital.
              </p>
              <p>
                21 июня 2016 года, Tencent, китайский телеком гигант, владеющий WeChat, выкупает контрольный 
                пакет акций Supercell у японцев из SoftBank. Стоимость — 8.57 миллиарда долларов при оценке 
                компании в 10.2 миллиарда.
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}

export default Developers

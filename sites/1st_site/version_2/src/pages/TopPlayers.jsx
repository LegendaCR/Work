import { Link } from 'react-router-dom'
import './TopPlayers.css'

function TopPlayers() {
  return (
    <div className="top-players-page">
      <div className="content-wrapper">
        <div className="main-content-area">
          <section className="video-section">
            <div className="video-container">
              <iframe
                width="100%"
                height="400"
                src="https://www.youtube.com/embed/EbnZHVBZgUM"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </section>

          <section className="players-section">
            <h2>Топ игроки:</h2>
            
            <div className="players-list">
              <div className="player-card">
                <div className="player-rank">🏆 1 Место</div>
                <h3>Mohamed Light</h3>
                <p>
                  Заслуженно присуждается Мохамеду Лайту, на сегодняшний день лучший из лучших, 
                  сотни раз попадал в топ 100 мира и около 10-15 раз занимал 1 место в мире
                </p>
                <Link to="/player/mohamed-light" className="player-link">
                  Подробнее →
                </Link>
              </div>

              <div className="player-card">
                <div className="player-rank">🏆 2 Место</div>
                <h3>Mugi</h3>
                <p>
                  Всё тоже самое что и у Мохамеда, но вот первых мест меньше, и 1vs1 Мохамед 
                  выигрывает частенько Муги
                </p>
                <Link to="/player/mugi" className="player-link">
                  Подробнее →
                </Link>
              </div>

              <div className="player-card">
                <div className="player-rank">🏆 3 Место</div>
                <h3>Anaban</h3>
                <p>
                  Хоть этот игрок и играет очень хорошо, но снайпит он еще лучше, так как в глобале 
                  показывает только результаты, а вот на турнирах мировых на заднем плане
                </p>
                <Link to="/player/anaban" className="player-link">
                  Подробнее →
                </Link>
              </div>
            </div>

          </section>
        </div>
      </div>
    </div>
  )
}

export default TopPlayers


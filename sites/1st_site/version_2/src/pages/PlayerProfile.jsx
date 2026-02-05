import { useParams } from 'react-router-dom'
import './PlayerProfile.css'

const playersData = {
  'mohamed-light': {
    name: 'Mohamed Light',
    images: [
      '/allimeges/lt.jpg',
      '/allimeges/2022-06-09 (27).png'
    ],
    youtubeChannel: 'https://www.youtube.com/channel/UCjFrTvMA5zvCnb9EAX9MNVw',
    youtubeImage: '/allimeges/-png.png'
  },
  'mugi': {
    name: 'Mugi',
    images: [
      '/allimeges/efult.jpg',
      '/allimeges/2022-06-09 (30).png'
    ],
    youtubeChannel: 'https://www.youtube.com/channel/UCP-8B0SIqLVBwM2B5IW-QYg',
    youtubeImage: '/allimeges/-png.png'
  },
  'anaban': {
    name: 'Anaban',
    images: [
      '/allimeges/i.jpg',
      '/allimeges/2022-06-09 (31).png'
    ],
    youtubeChannel: 'https://www.youtube.com/channel/UCLBaJrEYJtMmCQyf7YuaIpw',
    youtubeImage: '/allimeges/-png.png'
  }
}

function PlayerProfile() {
  const { name } = useParams()
  const player = playersData[name]

  if (!player) {
    return (
      <div className="player-profile-page">
        <div className="error-message">
          <h2>Игрок не найден</h2>
          <p>Пожалуйста, вернитесь на страницу с топ игроками.</p>
        </div>
      </div>
    )
  }

  return (
    <div className="player-profile-page">
      <div className="content-wrapper">
        <div className="main-content-area">
          <section className="player-header">
            <h2>{player.name}</h2>
          </section>

          <section className="player-info">
            <div className="player-description">
              <p>
                {player.name === 'Mohamed Light' && 'Лучший игрок Clash Royale, многократный чемпион мира.'}
                {player.name === 'Mugi' && 'Один из топовых игроков, известный своими стратегиями.'}
                {player.name === 'Anaban' && 'Профессиональный игрок с уникальным стилем игры.'}
              </p>
            </div>

            <section className="player-youtube">
              <a 
                href={player.youtubeChannel} 
                target="_blank" 
                rel="noopener noreferrer"
                className="youtube-channel-link"
              >
                <span className="youtube-link-text">📺 YouTube канал</span>
              </a>
            </section>
          </section>
        </div>
      </div>
    </div>
  )
}

export default PlayerProfile

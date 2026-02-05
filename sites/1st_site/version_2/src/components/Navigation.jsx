import { Link, useLocation } from 'react-router-dom'
import { useState } from 'react'
import './Navigation.css'

function Navigation() {
  const [activeDropdown, setActiveDropdown] = useState(null)
  const location = useLocation()

  const handleMouseEnter = (dropdown) => {
    setActiveDropdown(dropdown)
  }

  const handleMouseLeave = () => {
    setActiveDropdown(null)
  }

  const isActive = (path) => {
    return location.pathname === path
  }

  return (
    <nav className="navbar">
      <ul className="nav-list">
        <li className="nav-item">
          <Link 
            to="/" 
            className={`nav-link ${isActive('/') ? 'active' : ''}`}
          >
            Главная
          </Link>
        </li>
        
        <li 
          className="nav-item dropdown"
          onMouseEnter={() => handleMouseEnter('players')}
          onMouseLeave={handleMouseLeave}
        >
          <Link 
            to="/top-players" 
            className={`nav-link ${location.pathname.startsWith('/top-players') || location.pathname.startsWith('/player') ? 'active' : ''}`}
          >
            Топ игроки
          </Link>
          {activeDropdown === 'players' && (
            <ul className="dropdown-menu">
              <li>
                <Link to="/player/mohamed-light" className="dropdown-link">
                  Mohamed Light
                </Link>
              </li>
              <li>
                <Link to="/player/mugi" className="dropdown-link">
                  Mugi
                </Link>
              </li>
              <li>
                <Link to="/player/anaban" className="dropdown-link">
                  Anaban
                </Link>
              </li>
            </ul>
          )}
        </li>

        <li 
          className="nav-item dropdown"
          onMouseEnter={() => handleMouseEnter('about')}
          onMouseLeave={handleMouseLeave}
        >
          <Link 
            to="/about-me" 
            className={`nav-link ${isActive('/about-me') || isActive('/top-youtubers') ? 'active' : ''}`}
          >
            Немного обо мне
          </Link>
          {activeDropdown === 'about' && (
            <ul className="dropdown-menu">
              <li>
                <a 
                  href="https://www.youtube.com/channel/UCNrKTLLoke23GyMF7EI9HvA" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="dropdown-link"
                >
                  Ютуб
                </a>
              </li>
              <li>
                <a 
                  href="https://vk.com/legenda1ru1" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="dropdown-link"
                >
                  VK
                </a>
              </li>
              <li>
                <Link to="/top-youtubers" className="dropdown-link">
                  Топ ютуберы по роялю
                </Link>
              </li>
            </ul>
          )}
        </li>

        <li className="nav-item">
          <Link 
            to="/developers" 
            className={`nav-link ${isActive('/developers') ? 'active' : ''}`}
          >
            О разработчиках
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navigation

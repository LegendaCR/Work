import { Link, useLocation } from 'react-router-dom'
import { useState, useEffect, useRef } from 'react'
import './Navigation.css'

function Navigation() {
  const [activeDropdown, setActiveDropdown] = useState(null)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const location = useLocation()
  const navRef = useRef(null)

  const handleMouseEnter = (dropdown) => {
    setActiveDropdown(dropdown)
  }

  const handleMouseLeave = () => {
    setActiveDropdown(null)
  }

  const toggleDropdown = (dropdown, e) => {
    // Проверяем, является ли это мобильным устройством
    const isMobile = window.innerWidth <= 768
    if (isMobile) {
      e?.preventDefault()
      if (activeDropdown === dropdown) {
        setActiveDropdown(null)
      } else {
        setActiveDropdown(dropdown)
      }
    }
  }

  const isActive = (path) => {
    return location.pathname === path
  }

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
    setActiveDropdown(null)
  }

  // Закрываем меню при клике вне его
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setIsMobileMenuOpen(false)
        setActiveDropdown(null)
      }
    }

    if (isMobileMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isMobileMenuOpen])

  // Закрываем меню при изменении маршрута
  useEffect(() => {
    closeMobileMenu()
  }, [location.pathname])

  return (
    <nav className="navbar" ref={navRef}>
      <button 
        className="burger-menu"
        onClick={toggleMobileMenu}
        aria-label="Toggle menu"
        aria-expanded={isMobileMenuOpen}
      >
        <span className={`burger-line ${isMobileMenuOpen ? 'active' : ''}`}></span>
        <span className={`burger-line ${isMobileMenuOpen ? 'active' : ''}`}></span>
        <span className={`burger-line ${isMobileMenuOpen ? 'active' : ''}`}></span>
      </button>
      
      <ul className={`nav-list ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
        <li className="nav-item">
          <Link 
            to="/" 
            className={`nav-link ${isActive('/') ? 'active' : ''}`}
            onClick={closeMobileMenu}
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
            className={`nav-link ${location.pathname.startsWith('/top-players') || location.pathname.startsWith('/player') ? 'active' : ''} ${activeDropdown === 'players' ? 'active-dropdown' : ''}`}
            onClick={(e) => {
              toggleDropdown('players', e)
              if (window.innerWidth > 768) {
                closeMobileMenu()
              }
            }}
          >
            Топ игроки
          </Link>
          <ul 
            className={`dropdown-menu ${activeDropdown === 'players' ? 'active' : ''}`}
            onMouseEnter={() => handleMouseEnter('players')}
            onMouseLeave={handleMouseLeave}
          >
            <li>
              <Link to="/player/mohamed-light" className="dropdown-link" onClick={closeMobileMenu}>
                Mohamed Light
              </Link>
            </li>
            <li>
              <Link to="/player/mugi" className="dropdown-link" onClick={closeMobileMenu}>
                Mugi
              </Link>
            </li>
            <li>
              <Link to="/player/anaban" className="dropdown-link" onClick={closeMobileMenu}>
                Anaban
              </Link>
            </li>
          </ul>
        </li>

        <li 
          className="nav-item dropdown"
          onMouseEnter={() => handleMouseEnter('about')}
          onMouseLeave={handleMouseLeave}
        >
          <Link 
            to="/about-me" 
            className={`nav-link ${isActive('/about-me') || isActive('/top-youtubers') ? 'active' : ''} ${activeDropdown === 'about' ? 'active-dropdown' : ''}`}
            onClick={(e) => {
              toggleDropdown('about', e)
              if (window.innerWidth > 768) {
                closeMobileMenu()
              }
            }}
          >
            Немного обо мне
          </Link>
          <ul 
            className={`dropdown-menu ${activeDropdown === 'about' ? 'active' : ''}`}
            onMouseEnter={() => handleMouseEnter('about')}
            onMouseLeave={handleMouseLeave}
          >
            <li>
              <a 
                href="https://www.youtube.com/channel/UCNrKTLLoke23GyMF7EI9HvA" 
                target="_blank" 
                rel="noopener noreferrer"
                className="dropdown-link"
                onClick={closeMobileMenu}
              >
                Ютуб
              </a>
            </li>
            <li>
              <a 
                href="https://vk.com/legenda_crx" 
                target="_blank" 
                rel="noopener noreferrer"
                className="dropdown-link"
                onClick={closeMobileMenu}
              >
                VK
              </a>
            </li>
            <li>
              <Link to="/top-youtubers" className="dropdown-link" onClick={closeMobileMenu}>
                Топ ютуберы по роялю
              </Link>
            </li>
          </ul>
        </li>

        <li className="nav-item">
          <Link 
            to="/developers" 
            className={`nav-link ${isActive('/developers') ? 'active' : ''}`}
            onClick={closeMobileMenu}
          >
            О разработчиках
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navigation

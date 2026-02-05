import { Link } from 'react-router-dom'
import Navigation from './Navigation'
import './Header.css'

function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <Link to="/" className="site-title-link">
          <h1 className="site-title">Clash Royale</h1>
        </Link>
        <Navigation />
      </div>
    </header>
  )
}

export default Header

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import TopPlayers from './pages/TopPlayers'
import AboutMe from './pages/AboutMe'
import Developers from './pages/Developers'
import TopYouTubers from './pages/TopYouTubers'
import PlayerProfile from './pages/PlayerProfile'

function App() {
  // Для GitHub Pages используем basename, для локальной разработки - нет
  // Проверяем base path из vite.config.js через import.meta.env.BASE
  // BASE будет '/Work/1st_site/version_2/' для деплоя или '/' для локального запуска
  const basename = import.meta.env.BASE && import.meta.env.BASE !== '/' 
    ? import.meta.env.BASE.replace(/\/$/, '') // Убираем trailing slash
    : ''
  
  return (
    <Router basename={basename}>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/top-players" element={<TopPlayers />} />
          <Route path="/about-me" element={<AboutMe />} />
          <Route path="/developers" element={<Developers />} />
          <Route path="/top-youtubers" element={<TopYouTubers />} />
          <Route path="/player/:name" element={<PlayerProfile />} />
        </Routes>
      </Layout>
    </Router>
  )
}

export default App

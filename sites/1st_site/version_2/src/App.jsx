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
  // В production всегда используем basename для GitHub Pages
  // В development basename всегда пустой
  const basename = import.meta.env.PROD ? '/Work/1st_site/version_2' : ''
  
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

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import TopPlayers from './pages/TopPlayers'
import AboutMe from './pages/AboutMe'
import Developers from './pages/Developers'
import TopYouTubers from './pages/TopYouTubers'
import PlayerProfile from './pages/PlayerProfile'

function App() {
  return (
    <Router>
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

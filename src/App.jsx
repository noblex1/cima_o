import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Arbitration from './pages/Arbitration'
import Mediation from './pages/Mediation'
import Rules from './pages/Rules'
import About from './pages/About'
import News from './pages/News'
import Events from './pages/Events'
import Contact from './pages/Contact'

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/arbitration" element={<Arbitration />} />
          <Route path="/mediation" element={<Mediation />} />
          <Route path="/rules" element={<Rules />} />
          <Route path="/about" element={<About />} />
          <Route path="/news" element={<News />} />
          <Route path="/events" element={<Events />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App

import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, ChevronDown } from 'lucide-react'
import './Header.css'
import logoImage from '../../assets/logo.png'

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState(null)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const handleDropdown = (dropdown) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown)
  }

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="header-container">
        <Link to="/" className="logo">
          <img src={logoImage} alt="CIMA Logo" className="logo-image" />
          <div className="logo-text">
            <span className="logo-title">Center for International</span>
            <span className="logo-subtitle">Mediators & Arbitrators</span>
          </div>
        </Link>

        <nav className={`nav ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
          <Link to="/" className="nav-link">Home</Link>

          <div className="nav-item dropdown">
            <button className="nav-link" onClick={() => handleDropdown('about')}>
              About CIMA <ChevronDown size={14} />
            </button>
            <div className="dropdown-menu">
              <Link to="/about" className="dropdown-item">About CIMA</Link>
              <Link to="/news" className="dropdown-item">News</Link>
              <Link to="/events" className="dropdown-item">Events</Link>
            </div>
          </div>

          <div className="nav-item dropdown">
            <button className="nav-link" onClick={() => handleDropdown('practice-areas')}>
              Practice Areas <ChevronDown size={14} />
            </button>
            <div className="dropdown-menu">
              <Link to="/arbitration" className="dropdown-item">Arbitration</Link>
              <Link to="/mediation" className="dropdown-item">Mediation</Link>
            </div>
          </div>

          <Link to="/about" className="nav-link">Membership</Link>
          <a href="https://cimalearn.thecima.org" className="nav-link">Courses</a>
          <Link to="/events" className="nav-link">Global 100</Link>
          <Link to="/contact" className="nav-link">Contact Us</Link>
        </nav>

        <div className="nav-actions">
          <a href="https://cimalearn.thecima.org" className="btn-primary" target="_blank" rel="noreferrer">Apply Now</a>
        </div>

        <button className="mobile-menu-btn" onClick={toggleMobileMenu}>
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </header>
  )
}

export default Header

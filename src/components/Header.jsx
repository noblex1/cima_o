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

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false)
    setActiveDropdown(null)
  }, [location])

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const handleDropdown = (dropdown) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown)
  }

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
    setActiveDropdown(null)
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
          <Link to="/" className="nav-link" onClick={closeMobileMenu}>Home</Link>

          <div className="nav-item dropdown">
            <button className="nav-link" onClick={() => handleDropdown('about')}>
              About CIMA <ChevronDown size={14} />
            </button>
            <div className="dropdown-menu">
              <Link to="/about" className="dropdown-item" onClick={closeMobileMenu}>About CIMA</Link>
              <Link to="/governance" className="dropdown-item" onClick={closeMobileMenu}>Governance & Leadership</Link>
              <Link to="/oxfordshire" className="dropdown-item" onClick={closeMobileMenu}>Oxfordshire</Link>
              <Link to="/campaigns" className="dropdown-item" onClick={closeMobileMenu}>Campaigns</Link>
              <Link to="/news" className="dropdown-item" onClick={closeMobileMenu}>News</Link>
              <Link to="/resources" className="dropdown-item" onClick={closeMobileMenu}>Resources</Link>
              <Link to="/careers" className="dropdown-item" onClick={closeMobileMenu}>Careers</Link>
              <Link to="/gallery" className="dropdown-item" onClick={closeMobileMenu}>Gallery</Link>
            </div>
          </div>

          <div className="nav-item dropdown">
            <button className="nav-link" onClick={() => handleDropdown('practice-areas')}>
              Practice Areas <ChevronDown size={14} />
            </button>
            <div className="dropdown-menu">
              <Link to="/practice-areas/commercial" className="dropdown-item" onClick={closeMobileMenu}>Commercial</Link>
              <Link to="/practice-areas/construction" className="dropdown-item" onClick={closeMobileMenu}>Construction</Link>
              <Link to="/practice-areas/investment" className="dropdown-item" onClick={closeMobileMenu}>Investment</Link>
              <Link to="/practice-areas/energy" className="dropdown-item" onClick={closeMobileMenu}>Energy</Link>
              <Link to="/practice-areas/financial" className="dropdown-item" onClick={closeMobileMenu}>Financial</Link>
              <Link to="/practice-areas/technology" className="dropdown-item" onClick={closeMobileMenu}>Technology</Link>
              <Link to="/practice-areas/maritime" className="dropdown-item" onClick={closeMobileMenu}>Maritime</Link>
              <Link to="/practice-areas/international" className="dropdown-item" onClick={closeMobileMenu}>International</Link>
              <Link to="/practice-areas/sports" className="dropdown-item" onClick={closeMobileMenu}>Sports</Link>
              <Link to="/practice-areas/labour" className="dropdown-item" onClick={closeMobileMenu}>Labour</Link>
              <Link to="/practice-areas/intellectual-property" className="dropdown-item" onClick={closeMobileMenu}>Intellectual Property</Link>
              <Link to="/practice-areas/financial-crime" className="dropdown-item" onClick={closeMobileMenu}>Financial Crime</Link>
              <Link to="/practice-areas/customary-arbitration" className="dropdown-item" onClick={closeMobileMenu}>Customary Arbitration</Link>
            </div>
          </div>

          <div className="nav-item dropdown">
            <button className="nav-link" onClick={() => handleDropdown('membership')}>
              Membership <ChevronDown size={14} />
            </button>
            <div className="dropdown-menu">
              <Link to="/membership/qualification-pathway" className="dropdown-item" onClick={closeMobileMenu}>CIMA Qualification Pathway</Link>
              <Link to="/membership/roll-of-mediators-arbitrators" className="dropdown-item" onClick={closeMobileMenu}>Roll of Mediators & Arbitrators</Link>
              <Link to="/membership/renewals" className="dropdown-item" onClick={closeMobileMenu}>Membership Renewals</Link>
              <Link to="/membership/young-forum" className="dropdown-item" onClick={closeMobileMenu}>CIMA Young Forum</Link>
            </div>
          </div>
          <a href="https://cimalearn.thecima.org" className="nav-link">Courses</a>
          <Link to="/global-100" className="nav-link" onClick={closeMobileMenu}>Global 100</Link>
          
          <div className="nav-item dropdown">
            <button className="nav-link" onClick={() => handleDropdown('contact')}>
              Contact Us <ChevronDown size={14} />
            </button>
            <div className="dropdown-menu">
              <Link to="/contact/submit-dispute" className="dropdown-item" onClick={closeMobileMenu}>Submit a Dispute</Link>
              <Link to="/contact/register-arbitrator" className="dropdown-item" onClick={closeMobileMenu}>Register as an Arbitrator</Link>
            </div>
          </div>
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

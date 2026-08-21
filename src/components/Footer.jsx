import React from 'react'
import { Link } from 'react-router-dom'
import { Mail, Phone, MapPin, Linkedin, Twitter } from 'lucide-react'
import './Footer.css'
import logoImage from '../../assets/logo.png'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          <div className="footer-section">
            <div className="footer-logo">
              <img src={logoImage} alt="CIMA Logo" className="footer-logo-image" />
              <div className="footer-logo-text">
                <span>Center for International</span>
                <span>Mediators & Arbitrators</span>
              </div>
            </div>
            <p className="footer-description">
              Empowering lawyers, ADR practitioners, and students through internationally 
              benchmarked training and certification across 33+ countries worldwide.
            </p>
            <div className="footer-social">
              <a href="#" className="social-link" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
              <a href="#" className="social-link" aria-label="Twitter">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          <div className="footer-section">
            <h4 className="footer-title">Our Programs</h4>
            <ul className="footer-links">
              <li><Link to="/arbitration">Arbitration Training</Link></li>
              <li><Link to="/mediation">Mediation Training</Link></li>
              <li><Link to="/rules">Rules & Publications</Link></li>
              <li><a href="https://cimalearn.thecima.org" target="_blank" rel="noreferrer">Training Portal</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4 className="footer-title">About CIMA</h4>
            <ul className="footer-links">
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/news">News</Link></li>
              <li><Link to="/events">Events</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4 className="footer-title">Contact Us</h4>
            <ul className="footer-contact">
              <li>
                <MapPin size={18} />
                <span>CIMA House, 4 Naa Shika Avenue<br />Haatso-Mabey, Accra, Ghana</span>
              </li>
              <li>
                <MapPin size={18} />
                <span>Oxford, United Kingdom</span>
              </li>
              <li>
                <Mail size={18} />
                <span>info@thecima.org</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Center for International Mediators and Arbitrators. All rights reserved.</p>
          <div className="footer-bottom-links">
            <Link to="/privacy">Privacy Policy</Link>
            <Link to="/terms">Terms of Service</Link>
            <Link to="/cookie-policy">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

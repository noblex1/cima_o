import React from 'react'
import { Link } from 'react-router-dom'
import { Mail, Phone, Linkedin, Twitter, Facebook, Youtube, MapPin } from 'lucide-react'
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
              benchmarked training and certification across 33+ jurisdictions worldwide.
            </p>
            <div className="footer-social">
              <a href="https://web.facebook.com/cimaADR" className="social-link" aria-label="Facebook" target="_blank" rel="noreferrer">
                <Facebook size={20} />
              </a>
              <a href="https://youtube.com/@thecimarb?si=kW2Ym85PhUA4LuD7" className="social-link" aria-label="YouTube" target="_blank" rel="noreferrer">
                <Youtube size={20} />
              </a>
              <a href="https://www.linkedin.com/company/center-for-international-mediators-and-arbitrators/posts/?feedView=all" className="social-link" aria-label="LinkedIn" target="_blank" rel="noreferrer">
                <Linkedin size={20} />
              </a>
              <a href="https://x.com/the_cima_" className="social-link" aria-label="Twitter" target="_blank" rel="noreferrer">
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
            <h4 className="footer-title">Visit other CIMA Sites</h4>
            <ul className="footer-links">
              <li>
                <a href="https://cimalearn.thecima.org" target="_blank" rel="noreferrer">
                  CIMA Learn <span className="external-icon">↗</span>
                </a>
              </li>
              <li>
                <a href="https://cimaai.thecima.org" target="_blank" rel="noreferrer">
                  CIMA AI <span className="external-icon">↗</span>
                </a>
              </li>
            </ul>
          </div>

          <div className="footer-section footer-locations-section">
            <h4 className="footer-title">Our Locations</h4>
            <div className="footer-locations">
              <div className="footer-location">
                <h5>Global Headquarters:</h5>
                <p>Center for International Mediators and Arbitrators</p>
                <p>Incorporated in England &amp; Wales, Company No: 16140063</p>
                <p>Registered Office:<br />26 St. Gabriel, Wantage, OX12 8FJ, United Kingdom</p>
                <p>International Programmes Office:<br />Regus, Oxford Science Park<br />Robert Robinson Avenue, John Eccles House,<br />Oxford, OX4 4GP, England</p>
                <div className="footer-location-actions">
                  <a href="mailto:info@thecima.org" className="footer-contact-link">
                    <Mail size={16} aria-hidden="true" />
                    <span>info@thecima.org</span>
                  </a>
                  <a 
                    href="https://www.google.com/maps/search/?api=1&query=Oxford+Science+Park+Robert+Robinson+Avenue+Oxford+OX4+4GP+England" 
                    className="footer-map-link" 
                    target="_blank" 
                    rel="noreferrer"
                  >
                    <MapPin size={16} aria-hidden="true" />
                    <span>View on Map</span>
                  </a>
                </div>
              </div>
              <div className="footer-location">
                <h5>Africa Headquarters:</h5>
                <p>Center for International Mediators and Arbitrators</p>
                <p>World Law Building<br />4 Naa Shika Avenue, Haatso-Mabey,<br />Accra, Ghana</p>
                <div className="footer-location-actions">
                  <a href="tel:+2330241022964" className="footer-contact-link">
                    <Phone size={16} aria-hidden="true" />
                    <span>+233 0241 022 964</span>
                  </a>
                  <a 
                    href="https://www.google.com/maps/search/?api=1&query=World+Law+Building+4+Naa+Shika+Avenue+Haatso-Mabey+Accra+Ghana" 
                    className="footer-map-link" 
                    target="_blank" 
                    rel="noreferrer"
                  >
                    <MapPin size={16} aria-hidden="true" />
                    <span>View on Map</span>
                  </a>
                </div>
              </div>
            </div>
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

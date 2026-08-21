import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Users, Scale, Globe, FileText, CheckCircle, Award } from 'lucide-react'
import './PracticeArea.css'

const CustomaryArbitration = () => {
  return (
    <div className="practice-area-page">
      <section className="practice-hero customary-hero">
        <div className="practice-hero-overlay"></div>
        <div className="practice-hero-content">
          <div className="practice-hero-text">
            <h1 className="practice-hero-title">Customary Mediation and Arbitration</h1>
            <p className="practice-hero-subtitle">
              Integrating traditional dispute resolution mechanisms with modern ADR practices for culturally appropriate conflict resolution
            </p>
          </div>
        </div>
      </section>

      <section className="practice-overview">
        <div className="container">
          <div className="overview-content">
            <div className="overview-main">
              <h2>Overview</h2>
              <p>
                CIMA recognizes the importance of traditional and customary dispute resolution mechanisms, 
                particularly in communities where customary law and practices hold significant social and 
                legal authority. Our customary mediation and arbitration services bridge traditional practices 
                with modern ADR standards.
              </p>
              <p>
                We provide training and support for integrating customary dispute resolution with formal 
                legal systems, ensuring culturally appropriate resolution while maintaining procedural 
                fairness, enforceability, and compliance with fundamental human rights principles.
              </p>
            </div>
            <div className="overview-sidebar">
              <div className="sidebar-card">
                <h3>Key Elements</h3>
                <ul className="advantages-list">
                  <li><CheckCircle size={18} /> Traditional Law Integration</li>
                  <li><CheckCircle size={18} /> Community-Based Resolution</li>
                  <li><CheckCircle size={18} /> Cultural Sensitivity</li>
                  <li><CheckCircle size={18} /> Hybrid Mechanisms</li>
                  <li><CheckCircle size={18} /> Indigenous Rights Protection</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="final-cta">
        <div className="container">
          <div className="final-cta-content">
            <h2>Customary Dispute Resolution</h2>
            <p>Bridge traditional practices with modern ADR for culturally appropriate conflict resolution</p>
            <div className="final-cta-buttons">
              <a href="https://cimalearn.thecima.org" className="btn-cta-primary" target="_blank" rel="noreferrer">
                Training Programs
              </a>
              <Link to="/contact" className="btn-cta-secondary">Contact Us</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default CustomaryArbitration

import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Ship, Anchor, Waves, FileText, CheckCircle, Award } from 'lucide-react'
import './PracticeArea.css'

const Maritime = () => {
  return (
    <div className="practice-area-page">
      <section className="practice-hero maritime-hero">
        <div className="practice-hero-overlay"></div>
        <div className="practice-hero-content">
          <div className="practice-hero-text">
            <h1 className="practice-hero-title">Maritime Mediation & Arbitration</h1>
            <p className="practice-hero-subtitle">
              Specialized resolution of shipping, charterparty, cargo, and maritime insurance disputes
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
                CIMA provides specialized training and case management for maritime disputes, covering 
                charterparty disputes, cargo claims, ship sale and purchase, collision and salvage, 
                marine insurance, and offshore energy installations.
              </p>
              <p>
                Our maritime arbitration services address the international nature of shipping disputes, 
                with arbitrators experienced in admiralty law, international conventions (Hague-Visby, 
                Hamburg, Rotterdam Rules), and maritime commercial practices.
              </p>
            </div>
            <div className="overview-sidebar">
              <div className="sidebar-card">
                <h3>Maritime Disputes</h3>
                <ul className="advantages-list">
                  <li><CheckCircle size={18} /> Charterparty Disputes</li>
                  <li><CheckCircle size={18} /> Cargo Claims & Damage</li>
                  <li><CheckCircle size={18} /> Ship Sale & Purchase</li>
                  <li><CheckCircle size={18} /> Marine Insurance Claims</li>
                  <li><CheckCircle size={18} /> Offshore & Shipbuilding</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="final-cta">
        <div className="container">
          <div className="final-cta-content">
            <h2>Maritime Dispute Resolution</h2>
            <p>Expert handling of complex shipping and maritime disputes</p>
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

export default Maritime

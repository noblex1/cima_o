import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Zap, Wind, Droplets, FileText, CheckCircle, Award, Users, Scale, Globe } from 'lucide-react'
import './PracticeArea.css'

const Energy = () => {
  return (
    <div className="practice-area-page">
      <section className="practice-hero energy-hero">
        <div className="practice-hero-overlay"></div>
        <div className="practice-hero-content">
          <div className="practice-hero-text">
            <h1 className="practice-hero-title">Energy Arbitration</h1>
            <p className="practice-hero-subtitle">
              Specialized resolution of complex energy sector disputes across oil & gas, renewables, and power infrastructure projects
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
                CIMA provides specialized training and case management services for energy sector disputes, 
                covering the full spectrum from upstream oil and gas exploration to downstream distribution, 
                renewable energy projects, and power generation infrastructure.
              </p>
              <p>
                Our energy arbitration expertise encompasses contract disputes, joint venture disagreements, 
                regulatory conflicts, and investment treaty claims in the energy sector. We understand the 
                technical complexity, high stakes, and international nature of energy disputes.
              </p>
            </div>
            <div className="overview-sidebar">
              <div className="sidebar-card">
                <h3>Energy Sectors</h3>
                <ul className="advantages-list">
                  <li><CheckCircle size={18} /> Oil & Gas (Upstream/Downstream)</li>
                  <li><CheckCircle size={18} /> Renewable Energy (Solar, Wind)</li>
                  <li><CheckCircle size={18} /> Power Generation & Distribution</li>
                  <li><CheckCircle size={18} /> LNG & Pipeline Projects</li>
                  <li><CheckCircle size={18} /> Energy Transition Disputes</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="final-cta">
        <div className="container">
          <div className="final-cta-content">
            <h2>Energy Dispute Resolution Expertise</h2>
            <p>Access specialized training and case management for energy sector arbitration and mediation</p>
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

export default Energy

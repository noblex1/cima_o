import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Globe, MapPin, Languages, FileText, CheckCircle, Award } from 'lucide-react'
import './PracticeArea.css'

const International = () => {
  return (
    <div className="practice-area-page">
      <section className="practice-hero international-hero">
        <div className="practice-hero-overlay"></div>
        <div className="practice-hero-content">
          <div className="practice-hero-text">
            <h1 className="practice-hero-title">International Arbitration</h1>
            <p className="practice-hero-subtitle">
              Cross-border dispute resolution for complex multi-jurisdictional commercial and treaty disputes
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
                CIMA provides comprehensive training and case management for international arbitration, 
                addressing cross-border commercial disputes, multi-party proceedings, and complex 
                jurisdictional challenges. Our services cover ICC, LCIA, SIAC, and other major 
                institutional rules.
              </p>
              <p>
                We specialize in truly international disputes involving multiple jurisdictions, diverse 
                legal systems, and complex choice-of-law issues, with arbitrators experienced in 
                international commercial law and cross-border enforcement.
              </p>
            </div>
            <div className="overview-sidebar">
              <div className="sidebar-card">
                <h3>Key Features</h3>
                <ul className="advantages-list">
                  <li><CheckCircle size={18} /> Multi-Jurisdictional Disputes</li>
                  <li><CheckCircle size={18} /> Choice of Law & Seat Issues</li>
                  <li><CheckCircle size={18} /> International Institutions (ICC, LCIA)</li>
                  <li><CheckCircle size={18} /> Cross-Border Enforcement</li>
                  <li><CheckCircle size={18} /> Multi-Party Proceedings</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="final-cta">
        <div className="container">
          <div className="final-cta-content">
            <h2>International Dispute Resolution</h2>
            <p>Navigate complex cross-border disputes with global arbitration expertise</p>
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

export default International

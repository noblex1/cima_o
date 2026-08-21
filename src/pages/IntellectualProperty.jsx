import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Lightbulb, Copyright, Shield, FileText, CheckCircle, Award } from 'lucide-react'
import './PracticeArea.css'

const IntellectualProperty = () => {
  return (
    <div className="practice-area-page">
      <section className="practice-hero ip-hero">
        <div className="practice-hero-overlay"></div>
        <div className="practice-hero-content">
          <div className="practice-hero-text">
            <h1 className="practice-hero-title">Intellectual Property Arbitration</h1>
            <p className="practice-hero-subtitle">
              Specialized resolution of patent, trademark, copyright, and trade secret disputes
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
                CIMA provides expert training and case management for intellectual property disputes, 
                covering patent infringement, trademark conflicts, copyright violations, trade secret 
                misappropriation, and licensing disagreements.
              </p>
              <p>
                Our IP arbitration services combine legal expertise with technical knowledge, offering 
                confidential resolution that protects sensitive business information while addressing 
                complex questions of innovation, creativity, and intellectual property rights.
              </p>
            </div>
            <div className="overview-sidebar">
              <div className="sidebar-card">
                <h3>IP Disputes</h3>
                <ul className="advantages-list">
                  <li><CheckCircle size={18} /> Patent Infringement</li>
                  <li><CheckCircle size={18} /> Trademark Conflicts</li>
                  <li><CheckCircle size={18} /> Copyright Violations</li>
                  <li><CheckCircle size={18} /> Trade Secret Disputes</li>
                  <li><CheckCircle size={18} /> IP Licensing Agreements</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="final-cta">
        <div className="container">
          <div className="final-cta-content">
            <h2>IP Dispute Resolution</h2>
            <p>Protect your innovations with specialized intellectual property arbitration</p>
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

export default IntellectualProperty

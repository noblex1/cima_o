import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Cpu, Code, Smartphone, FileText, CheckCircle, Award, Cloud } from 'lucide-react'
import './PracticeArea.css'

const Technology = () => {
  return (
    <div className="practice-area-page">
      <section className="practice-hero technology-hero">
        <div className="practice-hero-overlay"></div>
        <div className="practice-hero-content">
          <div className="practice-hero-text">
            <h1 className="practice-hero-title">Telecommunications, Media & Technology Arbitration</h1>
            <p className="practice-hero-subtitle">
              Specialized dispute resolution for IT, telecommunications, software, and digital media conflicts
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
                CIMA provides expert training and case management for technology sector disputes, covering 
                software licensing, cloud computing, telecommunications infrastructure, data privacy, 
                cybersecurity, and digital media rights.
              </p>
              <p>
                Our technology arbitration services address the fast-paced nature of tech disputes, including 
                SaaS agreements, API licensing, platform disputes, blockchain conflicts, and AI-related 
                disagreements, with arbitrators who understand both legal and technical aspects.
              </p>
            </div>
            <div className="overview-sidebar">
              <div className="sidebar-card">
                <h3>Tech Disputes</h3>
                <ul className="advantages-list">
                  <li><CheckCircle size={18} /> Software & SaaS Licensing</li>
                  <li><CheckCircle size={18} /> Telecommunications Infrastructure</li>
                  <li><CheckCircle size={18} /> Data Privacy & Cybersecurity</li>
                  <li><CheckCircle size={18} /> Cloud Computing Disputes</li>
                  <li><CheckCircle size={18} /> Digital Media & Content Rights</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="final-cta">
        <div className="container">
          <div className="final-cta-content">
            <h2>Technology Dispute Resolution</h2>
            <p>Navigate complex tech disputes with specialized arbitration expertise</p>
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

export default Technology

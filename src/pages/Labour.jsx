import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Users, Briefcase, Scale, FileText, CheckCircle, Award } from 'lucide-react'
import './PracticeArea.css'

const Labour = () => {
  return (
    <div className="practice-area-page">
      <section className="practice-hero labour-hero">
        <div className="practice-hero-overlay"></div>
        <div className="practice-hero-content">
          <div className="practice-hero-text">
            <h1 className="practice-hero-title">Labour Mediation & Arbitration</h1>
            <p className="practice-hero-subtitle">
              Effective resolution of employment disputes, collective bargaining conflicts, and workplace disagreements
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
                CIMA provides specialized training and case management for labour and employment disputes, 
                including wrongful termination, discrimination claims, collective bargaining disagreements, 
                wage disputes, and workplace harassment cases.
              </p>
              <p>
                Our labour mediation and arbitration services preserve workplace relationships while 
                ensuring fair resolution, with mediators and arbitrators experienced in employment law, 
                labour regulations, and workplace dynamics across diverse industries.
              </p>
            </div>
            <div className="overview-sidebar">
              <div className="sidebar-card">
                <h3>Labour Disputes</h3>
                <ul className="advantages-list">
                  <li><CheckCircle size={18} /> Wrongful Termination</li>
                  <li><CheckCircle size={18} /> Discrimination & Harassment</li>
                  <li><CheckCircle size={18} /> Collective Bargaining</li>
                  <li><CheckCircle size={18} /> Wage & Benefits Disputes</li>
                  <li><CheckCircle size={18} /> Union-Management Relations</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="final-cta">
        <div className="container">
          <div className="final-cta-content">
            <h2>Labour Dispute Resolution</h2>
            <p>Preserve workplace relationships while ensuring fair employment dispute outcomes</p>
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

export default Labour

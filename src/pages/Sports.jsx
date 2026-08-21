import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Trophy, Users, Target, FileText, CheckCircle, Award } from 'lucide-react'
import './PracticeArea.css'

const Sports = () => {
  return (
    <div className="practice-area-page">
      <section className="practice-hero sports-hero">
        <div className="practice-hero-overlay"></div>
        <div className="practice-hero-content">
          <div className="practice-hero-text">
            <h1 className="practice-hero-title">Sports Arbitration</h1>
            <p className="practice-hero-subtitle">
              Specialized dispute resolution for athlete contracts, doping cases, transfer disputes, and sports governance
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
                CIMA offers specialized training and case management for sports-related disputes, covering 
                athlete contracts, transfer and registration disputes, doping violations, commercial rights, 
                governance conflicts, and disciplinary proceedings.
              </p>
              <p>
                Our sports arbitration services understand the unique time-sensitive nature of sports 
                disputes, the need for specialized expertise in sports regulations, and the importance 
                of maintaining fairness while protecting the integrity of sport.
              </p>
            </div>
            <div className="overview-sidebar">
              <div className="sidebar-card">
                <h3>Sports Disputes</h3>
                <ul className="advantages-list">
                  <li><CheckCircle size={18} /> Athlete Contracts & Transfers</li>
                  <li><CheckCircle size={18} /> Doping & Anti-Doping</li>
                  <li><CheckCircle size={18} /> Disciplinary Proceedings</li>
                  <li><CheckCircle size={18} /> Commercial & Sponsorship</li>
                  <li><CheckCircle size={18} /> Governance & Eligibility</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="final-cta">
        <div className="container">
          <div className="final-cta-content">
            <h2>Sports Dispute Resolution</h2>
            <p>Fast-track resolution for time-sensitive sports disputes</p>
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

export default Sports

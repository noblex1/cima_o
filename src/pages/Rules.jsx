import React from 'react'
import { Link } from 'react-router-dom'
import { FileText, Download, Book, Scale } from 'lucide-react'
import './CommonPages.css'

const Rules = () => {
  return (
    <div className="page">
      <section className="page-hero small">
        <div className="hero-overlay"></div>
        <img 
          src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=2070" 
          alt="Rules"
          className="hero-image"
        />
        <div className="hero-content">
          <h1 className="hero-title">Rules & Procedures</h1>
          <p className="hero-subtitle">
            Comprehensive guidelines for efficient dispute resolution
          </p>
        </div>
      </section>

      <section className="page-content">
        <div className="container">
          <div className="rules-intro">
            <p className="lead-text">
              CIMA's rules provide a flexible, efficient framework for resolving international 
              commercial disputes. Our procedures balance party autonomy with procedural efficiency 
              to ensure fair, cost-effective outcomes.
            </p>
          </div>

          <div className="rules-grid">
            <div className="rule-card">
              <div className="rule-icon">
                <Scale size={32} />
              </div>
              <h3>Arbitration Rules</h3>
              <p>
                Comprehensive procedures for conducting arbitrations under CIMA administration, 
                covering everything from case filing to award issuance.
              </p>
              <div className="rule-meta">
                <span className="version">Version 2026</span>
                <span className="effective">Effective: January 1, 2026</span>
              </div>
              <button className="btn-download">
                <Download size={18} />
                Download PDF
              </button>
            </div>

            <div className="rule-card">
              <div className="rule-icon">
                <FileText size={32} />
              </div>
              <h3>Mediation Rules</h3>
              <p>
                Guidelines for conducting mediations, designed to facilitate efficient and 
                constructive settlement discussions between parties.
              </p>
              <div className="rule-meta">
                <span className="version">Version 2026</span>
                <span className="effective">Effective: January 1, 2026</span>
              </div>
              <button className="btn-download">
                <Download size={18} />
                Download PDF
              </button>
            </div>

            <div className="rule-card">
              <div className="rule-icon">
                <Book size={32} />
              </div>
              <h3>Expedited Rules</h3>
              <p>
                Streamlined procedures for disputes under €100,000, providing faster resolution 
                with simplified processes and reduced costs.
              </p>
              <div className="rule-meta">
                <span className="version">Version 2026</span>
                <span className="effective">Effective: January 1, 2026</span>
              </div>
              <button className="btn-download">
                <Download size={18} />
                Download PDF
              </button>
            </div>
          </div>

          <div className="key-features">
            <h2>Key Features of CIMA Rules</h2>
            <div className="features-grid-two">
              <div className="feature-box">
                <h4>Flexible Procedures</h4>
                <p>
                  Rules designed to adapt to the specific needs of each case while maintaining 
                  procedural fairness and efficiency.
                </p>
              </div>

              <div className="feature-box">
                <h4>Fast-Track Options</h4>
                <p>
                  Expedited procedures available for urgent matters and lower-value disputes 
                  requiring quick resolution.
                </p>
              </div>

              <div className="feature-box">
                <h4>Cost Management</h4>
                <p>
                  Transparent fee structures and cost-control mechanisms to ensure predictable 
                  and reasonable arbitration expenses.
                </p>
              </div>

              <div className="feature-box">
                <h4>Technology Integration</h4>
                <p>
                  Provisions for virtual hearings, electronic document submission, and digital 
                  case management tools.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Rules

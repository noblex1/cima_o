import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, AlertTriangle, ShieldAlert, Search, FileText, CheckCircle, Award } from 'lucide-react'
import './PracticeArea.css'

const FinancialCrime = () => {
  return (
    <div className="practice-area-page">
      <section className="practice-hero financial-crime-hero">
        <div className="practice-hero-overlay"></div>
        <div className="practice-hero-content">
          <div className="practice-hero-text">
            <h1 className="practice-hero-title">Financial Crime, Compliance & AML Disputes</h1>
            <p className="practice-hero-subtitle">
              Specialized resolution of money laundering, sanctions compliance, and financial crime-related commercial disputes
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
                CIMA offers specialized training and case management for disputes involving financial crime 
                compliance, including AML/CTF program failures, sanctions breach allegations, regulatory 
                enforcement actions, and commercial disputes arising from compliance obligations.
              </p>
              <p>
                Our services address the intersection of regulatory compliance and commercial disputes, 
                with arbitrators and mediators who understand both financial crime regulations and 
                business realities, ensuring confidential resolution of sensitive compliance matters.
              </p>
            </div>
            <div className="overview-sidebar">
              <div className="sidebar-card">
                <h3>Compliance Disputes</h3>
                <ul className="advantages-list">
                  <li><CheckCircle size={18} /> AML/CTF Compliance Failures</li>
                  <li><CheckCircle size={18} /> Sanctions Breach Disputes</li>
                  <li><CheckCircle size={18} /> KYC/CDD Disagreements</li>
                  <li><CheckCircle size={18} /> Regulatory Enforcement</li>
                  <li><CheckCircle size={18} /> Fraud & Corruption Claims</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="final-cta">
        <div className="container">
          <div className="final-cta-content">
            <h2>Financial Crime Dispute Resolution</h2>
            <p>Navigate sensitive compliance disputes with specialized confidential arbitration</p>
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

export default FinancialCrime

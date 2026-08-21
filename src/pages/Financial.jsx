import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, DollarSign, TrendingUp, CreditCard, FileText, CheckCircle, Award, Users } from 'lucide-react'
import './PracticeArea.css'

const Financial = () => {
  return (
    <div className="practice-area-page">
      <section className="practice-hero financial-hero">
        <div className="practice-hero-overlay"></div>
        <div className="practice-hero-content">
          <div className="practice-hero-text">
            <h1 className="practice-hero-title">Financial Mediation & Arbitration</h1>
            <p className="practice-hero-subtitle">
              Expert resolution of banking, securities, insurance, and financial services disputes
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
                CIMA offers specialized training and case management for financial sector disputes, including 
                banking conflicts, securities litigation, insurance claims, derivatives disputes, and fintech 
                disagreements. Our services address the unique regulatory and technical aspects of financial services.
              </p>
              <p>
                We provide expertise in cross-border financial disputes, regulatory compliance issues, and 
                complex financial instruments, ensuring efficient resolution while maintaining confidentiality 
                and market stability.
              </p>
            </div>
            <div className="overview-sidebar">
              <div className="sidebar-card">
                <h3>Financial Disputes</h3>
                <ul className="advantages-list">
                  <li><CheckCircle size={18} /> Banking & Lending Disputes</li>
                  <li><CheckCircle size={18} /> Securities & Derivatives</li>
                  <li><CheckCircle size={18} /> Insurance Claims</li>
                  <li><CheckCircle size={18} /> Fintech & Digital Finance</li>
                  <li><CheckCircle size={18} /> Regulatory Compliance</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="final-cta">
        <div className="container">
          <div className="final-cta-content">
            <h2>Financial Dispute Resolution</h2>
            <p>Specialized expertise for complex financial services disputes</p>
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

export default Financial

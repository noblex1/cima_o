import React from 'react'
import { Link } from 'react-router-dom'
import { Scale, Clock, Users, FileText, ArrowRight } from 'lucide-react'
import './CommonPages.css'

const Arbitration = () => {
  return (
    <div className="page">
      <section className="page-hero">
        <div className="hero-overlay"></div>
        <img 
          src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=2070" 
          alt="Arbitration"
          className="hero-image"
        />
        <div className="hero-content">
          <h1 className="hero-title">Arbitration Training & Certification</h1>
          <p className="hero-subtitle">
            Professional development programs for aspiring and practicing arbitrators
          </p>
        </div>
      </section>

      <section className="page-content">
        <div className="container">
          <div className="content-grid">
            <div className="content-main">
              <h2>Comprehensive Arbitration Training Programs</h2>
              <p>
                CIMA offers internationally benchmarked arbitration training and certification programs 
                designed for lawyers, legal professionals, and students aspiring to become certified 
                arbitrators. Our courses combine theoretical knowledge with practical, hands-on experience 
                through mock proceedings and AI-driven simulations.
              </p>

              <h3>Certification Levels</h3>
              <div className="features-list">
                <div className="feature-item-horizontal">
                  <Scale size={24} />
                  <div>
                    <h4>Associate (ACIMArb)</h4>
                    <p>Introductory-level certification for professionals beginning their arbitration career with foundational knowledge and skills</p>
                  </div>
                </div>

                <div className="feature-item-horizontal">
                  <Clock size={24} />
                  <div>
                    <h4>Member (MCIMArb)</h4>
                    <p>Advanced certification for experienced practitioners demonstrating competence in managing complex arbitration matters</p>
                  </div>
                </div>

                <div className="feature-item-horizontal">
                  <Users size={24} />
                  <div>
                    <h4>Fellowship (FCIMArb)</h4>
                    <p>Elite recognition for distinguished arbitrators with proven expertise and significant contributions to the field</p>
                  </div>
                </div>

                <div className="feature-item-horizontal">
                  <FileText size={24} />
                  <div>
                    <h4>International Recognition</h4>
                    <p>CIMA credentials are recognized across 33+ countries with growing global acceptance</p>
                  </div>
                </div>
              </div>

              <h3>Training Pathway</h3>
              <div className="process-steps">
                <div className="step-item">
                  <div className="step-number">01</div>
                  <h4>Foundation Course</h4>
                  <p>Complete CIMA-certified international arbitration training covering principles, procedures, and best practices</p>
                </div>

                <div className="step-item">
                  <div className="step-number">02</div>
                  <h4>Practical Simulations</h4>
                  <p>Participate in mock arbitrations and AI-driven simulations to develop real-world competencies</p>
                </div>

                <div className="step-item">
                  <div className="step-number">03</div>
                  <h4>Assessment</h4>
                  <p>Successfully complete written and practical assessments demonstrating mastery of arbitration skills</p>
                </div>

                <div className="step-item">
                  <div className="step-number">04</div>
                  <h4>Certification</h4>
                  <p>Receive your CIMA certification and join our global roster of qualified arbitrators</p>
                </div>
              </div>
            </div>

            <aside className="content-sidebar">
              <div className="sidebar-card">
                <h3>Quick Links</h3>
                <ul className="sidebar-links">
                  <li><Link to="/rules">Arbitration Rules 2025</Link></li>
                  <li><a href="https://cimalearn.thecima.org" target="_blank" rel="noreferrer">Training Portal</a></li>
                  <li><Link to="/events">Upcoming Programs</Link></li>
                  <li><Link to="/contact">Contact Us</Link></li>
                </ul>
              </div>

              <div className="sidebar-card cta-card">
                <h3>Ready to Start?</h3>
                <p>Begin your arbitration training and certification journey</p>
                <a href="https://cimalearn.thecima.org" className="btn-sidebar" target="_blank" rel="noreferrer">
                  Enroll Now <ArrowRight size={18} />
                </a>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Arbitration

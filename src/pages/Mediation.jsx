import React from 'react'
import { Link } from 'react-router-dom'
import { Users, Heart, TrendingUp, Clock, ArrowRight } from 'lucide-react'
import './CommonPages.css'

const Mediation = () => {
  return (
    <div className="page">
      <section className="page-hero">
        <div className="hero-overlay"></div>
        <img 
          src="https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=2069" 
          alt="Mediation"
          className="hero-image"
        />
        <div className="hero-content">
          <h1 className="hero-title">Mediation Training & Certification</h1>
          <p className="hero-subtitle">
            Professional development programs for aspiring and practicing mediators
          </p>
        </div>
      </section>

      <section className="page-content">
        <div className="container">
          <div className="content-grid">
            <div className="content-main">
              <h2>Comprehensive Mediation Training Programs</h2>
              <p>
                CIMA offers internationally benchmarked mediation training and certification programs 
                designed for lawyers, legal professionals, and students aspiring to become certified 
                mediators. Our courses emphasize practical skills, ethical conduct, and effective 
                facilitation techniques through hands-on simulations and mock proceedings.
              </p>

              <h3>Program Highlights</h3>
              <div className="features-list">
                <div className="feature-item-horizontal">
                  <Heart size={24} />
                  <div>
                    <h4>Practical Training</h4>
                    <p>Develop core mediation skills through role-playing exercises and real-world scenarios</p>
                  </div>
                </div>

                <div className="feature-item-horizontal">
                  <Clock size={24} />
                  <div>
                    <h4>Flexible Learning</h4>
                    <p>In-person intensive courses and online programs to accommodate diverse schedules</p>
                  </div>
                </div>

                <div className="feature-item-horizontal">
                  <TrendingUp size={24} />
                  <div>
                    <h4>International Standards</h4>
                    <p>Training aligned with global best practices and internationally recognized credentials</p>
                  </div>
                </div>

                <div className="feature-item-horizontal">
                  <Users size={24} />
                  <div>
                    <h4>Expert Faculty</h4>
                    <p>Learn from experienced mediators and leading practitioners in the field</p>
                  </div>
                </div>
              </div>

              <h3>Certification Pathway</h3>
              <div className="process-steps">
                <div className="step-item">
                  <div className="step-number">01</div>
                  <h4>Foundation Training</h4>
                  <p>Complete CIMA-certified international mediation training covering theory, techniques, and ethics</p>
                </div>

                <div className="step-item">
                  <div className="step-number">02</div>
                  <h4>Simulation Practice</h4>
                  <p>Engage in mediation simulations and mock proceedings to build confidence and competence</p>
                </div>

                <div className="step-item">
                  <div className="step-number">03</div>
                  <h4>Assessment & Evaluation</h4>
                  <p>Demonstrate proficiency through practical assessments and performance evaluations</p>
                </div>

                <div className="step-item">
                  <div className="step-number">04</div>
                  <h4>Professional Certification</h4>
                  <p>Earn your CIMA mediation certification and join our international roster</p>
                </div>
              </div>

              <div className="info-box">
                <h4>Who Should Attend</h4>
                <ul>
                  <li>Lawyers seeking to expand their ADR practice</li>
                  <li>Corporate professionals handling workplace disputes</li>
                  <li>HR professionals and organizational development specialists</li>
                  <li>Law students and early-career practitioners</li>
                  <li>Anyone interested in becoming a certified mediator</li>
                </ul>
              </div>
            </div>

            <aside className="content-sidebar">
              <div className="sidebar-card">
                <h3>Quick Links</h3>
                <ul className="sidebar-links">
                  <li><Link to="/rules">Mediation Rules 2025</Link></li>
                  <li><a href="https://cimalearn.thecima.org" target="_blank" rel="noreferrer">Training Portal</a></li>
                  <li><Link to="/events">Upcoming Programs</Link></li>
                  <li><Link to="/contact">Contact Us</Link></li>
                </ul>
              </div>

              <div className="sidebar-card cta-card">
                <h3>Start Your Journey</h3>
                <p>Begin your mediation training and certification today</p>
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

export default Mediation

import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Scale, Briefcase, Users, FileText, CheckCircle, Award } from 'lucide-react'
import './Commercial.css'

const Commercial = () => {
  return (
    <div className="commercial-page">
      {/* Hero Section */}
      <section className="practice-hero">
        <div className="practice-hero-overlay"></div>
        <div className="practice-hero-content">
          <div className="practice-hero-text">
            <h1 className="practice-hero-title">Commercial Arbitration</h1>
            <p className="practice-hero-subtitle">
              Expert resolution of complex business disputes through efficient, confidential arbitration proceedings
            </p>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="practice-overview">
        <div className="container">
          <div className="overview-content">
            <div className="overview-main">
              <h2>Overview</h2>
              <p>
                The Center for International Mediators and Arbitrators (CIMA) provides globally recognized 
                training and expert case management services in commercial arbitration. As part of its core 
                practice areas, CIMA supports individuals, knowledge, and institutional best practices necessary 
                to resolve commercial disputes effectively and efficiently.
              </p>
              <p>
                CIMA's commercial arbitration expertise covers a wide range of business disputes, from contract 
                breaches and partnership disagreements to shareholder conflicts and international trade issues. 
                Our training programs blend international best practice with local pragmatism for global enforceability.
              </p>
            </div>
            <div className="overview-sidebar">
              <div className="sidebar-card">
                <h3>Key Advantages</h3>
                <ul className="advantages-list">
                  <li><CheckCircle size={18} /> Confidential proceedings</li>
                  <li><CheckCircle size={18} /> Flexible procedures</li>
                  <li><CheckCircle size={18} /> Expert arbitrators</li>
                  <li><CheckCircle size={18} /> Enforceable awards</li>
                  <li><CheckCircle size={18} /> Cost-effective resolution</li>
                  <li><CheckCircle size={18} /> Time-efficient process</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="practice-services">
        <div className="container">
          <div className="section-header">
            <h2>Our Commercial Arbitration Services</h2>
            <p>Comprehensive support for businesses and ADR professionals in commercial dispute resolution</p>
          </div>

          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon">
                <Scale size={32} />
              </div>
              <h3>Case Administration</h3>
              <p>
                Full case management services including appointment of arbitrators, administration of proceedings, 
                and provision of institutional support tailored to commercial disputes.
              </p>
            </div>

            <div className="service-card">
              <div className="service-icon">
                <Award size={32} />
              </div>
              <h3>Professional Training</h3>
              <p>
                Comprehensive training programs for aspiring and experienced commercial arbitrators, featuring 
                simulations, mock proceedings, and practical case experience.
              </p>
            </div>

            <div className="service-card">
              <div className="service-icon">
                <Users size={32} />
              </div>
              <h3>Panel of Arbitrators</h3>
              <p>
                Access to CIMA's roster of experienced commercial arbitrators with expertise across various 
                business sectors and legal systems worldwide.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Types of Disputes */}
      <section className="dispute-types">
        <div className="container">
          <h2>Types of Commercial Disputes We Handle</h2>
          <div className="dispute-grid">
            <div className="dispute-item">
              <Briefcase size={24} />
              <h3>Contract Disputes</h3>
              <p>Breach of contract, interpretation issues, and performance disputes</p>
            </div>

            <div className="dispute-item">
              <FileText size={24} />
              <h3>Partnership & Shareholder Disputes</h3>
              <p>Business separation, equity valuation, and governance conflicts</p>
            </div>

            <div className="dispute-item">
              <Scale size={24} />
              <h3>International Trade</h3>
              <p>Cross-border transactions, trade agreements, and supply chain disputes</p>
            </div>

            <div className="dispute-item">
              <Users size={24} />
              <h3>Joint Venture Disputes</h3>
              <p>Collaboration agreements, profit-sharing, and exit arrangements</p>
            </div>

            <div className="dispute-item">
              <Briefcase size={24} />
              <h3>Distribution & Agency</h3>
              <p>Distributor agreements, commission disputes, and territory conflicts</p>
            </div>

            <div className="dispute-item">
              <FileText size={24} />
              <h3>Licensing & Franchising</h3>
              <p>License terms, royalty disputes, and franchise agreement issues</p>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="practice-statistics">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-item">
              <div className="stat-number">500+</div>
              <div className="stat-label">Professionals Trained</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">25+</div>
              <div className="stat-label">Countries Represented</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">100+</div>
              <div className="stat-label">Expert Arbitrators</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">95%</div>
              <div className="stat-label">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose CIMA */}
      <section className="why-choose-cima">
        <div className="container">
          <div className="section-header">
            <h2>Why Choose CIMA for Commercial Arbitration</h2>
            <p>World-class expertise combined with practical, efficient dispute resolution</p>
          </div>

          <div className="features-grid">
            <div className="feature-item">
              <Award size={28} />
              <h3>International Standards</h3>
              <p>Our rules and procedures align with globally recognized best practices while maintaining flexibility for commercial realities</p>
            </div>

            <div className="feature-item">
              <Users size={28} />
              <h3>Experienced Panel</h3>
              <p>Access to arbitrators with deep commercial expertise across various industries and jurisdictions</p>
            </div>

            <div className="feature-item">
              <Scale size={28} />
              <h3>Efficient Process</h3>
              <p>Streamlined procedures designed to resolve disputes quickly without compromising thoroughness or fairness</p>
            </div>

            <div className="feature-item">
              <FileText size={28} />
              <h3>Enforceable Awards</h3>
              <p>Awards recognized and enforceable under the New York Convention across 170+ countries worldwide</p>
            </div>
          </div>
        </div>
      </section>

      {/* Training Programs */}
      <section className="training-programs">
        <div className="container">
          <div className="training-content">
            <div className="training-text">
              <h2>Commercial Arbitration Training</h2>
              <p>
                CIMA offers comprehensive training programs for professionals seeking to develop or enhance 
                their commercial arbitration skills. Our courses combine theoretical knowledge with practical 
                simulations and real-world case studies.
              </p>
              <ul className="training-highlights">
                <li><CheckCircle size={20} /> Certification at Associate, Member, and Fellowship levels</li>
                <li><CheckCircle size={20} /> Mock arbitration proceedings with experienced mentors</li>
                <li><CheckCircle size={20} /> AI-driven case simulations and scenario analysis</li>
                <li><CheckCircle size={20} /> International faculty with diverse commercial expertise</li>
                <li><CheckCircle size={20} /> Continuing professional development opportunities</li>
              </ul>
              <div className="training-cta">
                <a href="https://cimalearn.thecima.org" className="btn-primary" target="_blank" rel="noreferrer">
                  Explore Training Programs
                </a>
                <Link to="/contact" className="btn-secondary">Contact Us</Link>
              </div>
            </div>
            <div className="training-image">
              <img 
                src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070" 
                alt="Commercial arbitration training session"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Rules & Resources */}
      <section className="rules-resources">
        <div className="container">
          <h2>Rules & Resources</h2>
          <div className="resources-grid">
            <div className="resource-card">
              <FileText size={32} />
              <h3>CIMA Arbitration Rules 2025</h3>
              <p>Comprehensive rules blending international best practice with practical efficiency</p>
              <Link to="/rules" className="resource-link">
                View Rules <ArrowRight size={16} />
              </Link>
            </div>

            <div className="resource-card">
              <Briefcase size={32} />
              <h3>Model Clauses</h3>
              <p>Standard arbitration clauses for commercial contracts and agreements</p>
              <Link to="/resources" className="resource-link">
                Download Clauses <ArrowRight size={16} />
              </Link>
            </div>

            <div className="resource-card">
              <Users size={32} />
              <h3>Panel Directory</h3>
              <p>Browse our roster of experienced commercial arbitrators worldwide</p>
              <Link to="/about" className="resource-link">
                View Panel <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="final-cta">
        <div className="container">
          <div className="final-cta-content">
            <h2>Ready to Resolve Your Commercial Dispute?</h2>
            <p>Get started with CIMA's expert commercial arbitration services or explore our professional training programs</p>
            <div className="final-cta-buttons">
              <Link to="/contact" className="btn-cta-primary">Start a Case</Link>
              <a href="https://cimalearn.thecima.org" className="btn-cta-secondary" target="_blank" rel="noreferrer">
                Training Programs
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Commercial

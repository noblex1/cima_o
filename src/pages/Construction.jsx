import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, HardHat, Building2, Users, FileText, CheckCircle, Award, Hammer, ClipboardList } from 'lucide-react'
import './Construction.css'

const Construction = () => {
  return (
    <div className="construction-page">
      {/* Hero Section */}
      <section className="practice-hero">
        <div className="practice-hero-overlay"></div>
        <div className="practice-hero-content">
          <div className="practice-hero-text">
            <h1 className="practice-hero-title">Construction Adjudication</h1>
            <p className="practice-hero-subtitle">
              Fast-track resolution of construction disputes through expert adjudication services across Africa, Asia, and the Middle East
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
                The Center for International Mediators and Arbitrators (CIMA) delivers world-class training 
                and case management services in Construction Adjudication. Recognizing the unique and 
                time-sensitive nature of construction disputes—often involving multiple parties, complex 
                technical issues, and significant financial stakes—CIMA offers practical and specialized 
                training for lawyers, engineers, project managers, quantity surveyors, and adjudicators.
              </p>
              <p>
                CIMA also offers a dedicated Construction Adjudication Case Management Service, facilitating 
                the nomination of adjudicators, administering proceedings, and ensuring compliance with 
                fair and impartial processes. Our services are particularly suited for jurisdictions with 
                evolving construction dispute mechanisms, including those in Africa, Asia, and the Middle East.
              </p>
              <p>
                Where CIMA plays a vital role in bridging international best practice with local enforcement 
                realities. By promoting speed, cost-efficiency, and industry expertise in dispute resolution, 
                CIMA ensures that construction projects are not unduly delayed by legal conflict—protecting 
                commercial interests and preserving working relationships.
              </p>
            </div>
            <div className="overview-sidebar">
              <div className="sidebar-card">
                <h3>Key Benefits</h3>
                <ul className="advantages-list">
                  <li><CheckCircle size={18} /> Rapid dispute resolution (28-42 days)</li>
                  <li><CheckCircle size={18} /> Industry expert adjudicators</li>
                  <li><CheckCircle size={18} /> Cost-effective process</li>
                  <li><CheckCircle size={18} /> Preserves working relationships</li>
                  <li><CheckCircle size={18} /> Keeps projects moving forward</li>
                  <li><CheckCircle size={18} /> Locally enforceable decisions</li>
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
            <h2>Our Construction Adjudication Services</h2>
            <p>Comprehensive support for construction professionals and dispute resolution practitioners</p>
          </div>

          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon">
                <ClipboardList size={32} />
              </div>
              <h3>Case Management Services</h3>
              <p>
                Full administration of construction adjudication proceedings, including nomination of adjudicators, 
                process management, and ensuring compliance with fair and impartial procedures.
              </p>
            </div>

            <div className="service-card">
              <div className="service-icon">
                <Award size={32} />
              </div>
              <h3>Professional Training</h3>
              <p>
                Specialized training programs for lawyers, engineers, project managers, quantity surveyors, 
                and adjudicators featuring practical simulations and real-world case studies.
              </p>
            </div>

            <div className="service-card">
              <div className="service-icon">
                <Users size={32} />
              </div>
              <h3>Expert Adjudicator Panel</h3>
              <p>
                Access to CIMA's roster of experienced construction adjudicators with technical expertise 
                across engineering, architecture, and construction law disciplines.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Types of Disputes */}
      <section className="dispute-types">
        <div className="container">
          <h2>Types of Construction Disputes We Handle</h2>
          <div className="dispute-grid">
            <div className="dispute-item">
              <FileText size={24} />
              <h3>Payment Disputes</h3>
              <p>Interim payments, final accounts, variations, and retention releases</p>
            </div>

            <div className="dispute-item">
              <HardHat size={24} />
              <h3>Delay & Extension of Time</h3>
              <p>Programme analysis, critical path delays, and time-related claims</p>
            </div>

            <div className="dispute-item">
              <Building2 size={24} />
              <h3>Defects & Quality Issues</h3>
              <p>Workmanship disputes, materials quality, and rectification costs</p>
            </div>

            <div className="dispute-item">
              <Hammer size={24} />
              <h3>Variations & Changes</h3>
              <p>Scope changes, additional works, and valuation disagreements</p>
            </div>

            <div className="dispute-item">
              <ClipboardList size={24} />
              <h3>Professional Negligence</h3>
              <p>Design errors, supervision failures, and professional liability</p>
            </div>

            <div className="dispute-item">
              <Users size={24} />
              <h3>Multi-Party Disputes</h3>
              <p>Main contractor, subcontractor, and employer disagreements</p>
            </div>
          </div>
        </div>
      </section>

      {/* Regional Focus */}
      <section className="regional-focus">
        <div className="container">
          <div className="section-header">
            <h2>Regional Expertise</h2>
            <p>Bridging international best practice with local enforcement realities</p>
          </div>

          <div className="regions-grid">
            <div className="region-card">
              <div className="region-icon">🌍</div>
              <h3>Africa</h3>
              <p>Leading construction adjudication services across the continent, supporting infrastructure development and construction industry growth.</p>
            </div>

            <div className="region-card">
              <div className="region-icon">🌏</div>
              <h3>Asia</h3>
              <p>Expertise in rapidly developing Asian construction markets with understanding of regional practices and legal frameworks.</p>
            </div>

            <div className="region-card">
              <div className="region-icon">🕌</div>
              <h3>Middle East</h3>
              <p>Specialized knowledge of Middle Eastern construction practices, mega-projects, and regional enforcement mechanisms.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="practice-statistics">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-item">
              <div className="stat-number">28-42</div>
              <div className="stat-label">Days Average Resolution</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">200+</div>
              <div className="stat-label">Cases Administered</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">50+</div>
              <div className="stat-label">Expert Adjudicators</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">92%</div>
              <div className="stat-label">Decisions Upheld</div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose CIMA */}
      <section className="why-choose-cima">
        <div className="container">
          <div className="section-header">
            <h2>Why Choose CIMA for Construction Adjudication</h2>
            <p>Industry expertise combined with rapid, practical dispute resolution</p>
          </div>

          <div className="features-grid">
            <div className="feature-item">
              <Award size={28} />
              <h3>Technical Expertise</h3>
              <p>Adjudicators with deep construction industry knowledge including engineering, architecture, and quantity surveying</p>
            </div>

            <div className="feature-item">
              <HardHat size={28} />
              <h3>Speed & Efficiency</h3>
              <p>Fast-track proceedings designed to resolve disputes within 28-42 days, keeping projects on track</p>
            </div>

            <div className="feature-item">
              <Building2 size={28} />
              <h3>Regional Understanding</h3>
              <p>Deep knowledge of Africa, Asia, and Middle East construction markets and enforcement mechanisms</p>
            </div>

            <div className="feature-item">
              <Users size={28} />
              <h3>Relationship Preservation</h3>
              <p>Process designed to resolve disputes while maintaining working relationships for ongoing projects</p>
            </div>
          </div>
        </div>
      </section>

      {/* Training Programs */}
      <section className="training-programs">
        <div className="container">
          <div className="training-content">
            <div className="training-text">
              <h2>Construction Adjudication Training</h2>
              <p>
                CIMA offers specialized training programs for construction professionals seeking to develop 
                adjudication skills. Our courses are tailored for lawyers, engineers, project managers, 
                quantity surveyors, and aspiring adjudicators.
              </p>
              <ul className="training-highlights">
                <li><CheckCircle size={20} /> Practical training for multi-disciplinary professionals</li>
                <li><CheckCircle size={20} /> Mock adjudication proceedings with real case scenarios</li>
                <li><CheckCircle size={20} /> Technical and legal aspects of construction disputes</li>
                <li><CheckCircle size={20} /> Regional variations and enforcement mechanisms</li>
                <li><CheckCircle size={20} /> Certification and roster inclusion opportunities</li>
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
                src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2031" 
                alt="Construction adjudication training session"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Process Overview */}
      <section className="process-overview">
        <div className="container">
          <h2>The Adjudication Process</h2>
          <p className="process-intro">A streamlined approach to construction dispute resolution</p>
          
          <div className="process-steps">
            <div className="process-step">
              <div className="step-number">1</div>
              <h3>Notice of Adjudication</h3>
              <p>Party initiates adjudication by submitting notice to CIMA and the other party</p>
            </div>

            <div className="process-step">
              <div className="step-number">2</div>
              <h3>Adjudicator Appointment</h3>
              <p>CIMA nominates qualified adjudicator within 5 days of receiving the notice</p>
            </div>

            <div className="process-step">
              <div className="step-number">3</div>
              <h3>Referral & Response</h3>
              <p>Referring party submits case details; responding party provides counter-arguments</p>
            </div>

            <div className="process-step">
              <div className="step-number">4</div>
              <h3>Decision</h3>
              <p>Adjudicator issues binding decision within 28 days (extendable by 14 days)</p>
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
              <h3>CIMA Adjudication Rules</h3>
              <p>Comprehensive rules tailored for construction disputes in Africa, Asia, and Middle East</p>
              <Link to="/rules" className="resource-link">
                View Rules <ArrowRight size={16} />
              </Link>
            </div>

            <div className="resource-card">
              <ClipboardList size={32} />
              <h3>Model Adjudication Clauses</h3>
              <p>Standard adjudication clauses for construction contracts and agreements</p>
              <Link to="/resources" className="resource-link">
                Download Clauses <ArrowRight size={16} />
              </Link>
            </div>

            <div className="resource-card">
              <Users size={32} />
              <h3>Adjudicator Directory</h3>
              <p>Browse our panel of construction experts and technical adjudicators</p>
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
            <h2>Need Fast Resolution of a Construction Dispute?</h2>
            <p>Start your adjudication case today or explore our specialized training programs for construction professionals</p>
            <div className="final-cta-buttons">
              <Link to="/contact" className="btn-cta-primary">Start Adjudication</Link>
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

export default Construction

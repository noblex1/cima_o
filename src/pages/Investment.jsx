import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, TrendingUp, Globe, Shield, FileText, CheckCircle, Award, Users, Scale, Briefcase } from 'lucide-react'
import './Investment.css'

const Investment = () => {
  return (
    <div className="investment-page">
      {/* Hero Section */}
      <section className="practice-hero">
        <div className="practice-hero-overlay"></div>
        <div className="practice-hero-content">
          <div className="practice-hero-text">
            <h1 className="practice-hero-title">Investment State Dispute Settlement (ISDS)</h1>
            <p className="practice-hero-subtitle">
              Advanced global training and case support services protecting foreign investors and sovereign states under international investment treaties
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
                The Center for International Mediators and Arbitrators (CIMA) provides advanced global 
                training and case support services in Investment State Dispute Settlement (ISDS)—a critical 
                mechanism for resolving disputes between foreign investors and sovereign states under 
                international investment treaties.
              </p>
              <p>
                CIMA's specialized training in ISDS is designed for arbitrators, government lawyers, treaty 
                negotiators, and counsel representing multinational corporations. The curriculum comprehensively 
                covers the legal foundations of ISDS, including bilateral and multilateral investment treaties 
                (BITs/MITs), investor protections, state defenses, jurisdictional challenges, and enforcement 
                of arbitral awards under ICSID, UNCITRAL, and other procedural rules.
              </p>
              <p>
                Participants gain practical insights into key concepts such as fair and equitable treatment 
                (FET), expropriation, national treatment, and most-favored-nation (MFN) clauses, alongside 
                a deep understanding of procedural developments, treaty interpretation, and recent arbitral 
                jurisprudence. As global investment frameworks shift and new demands arise for reform and 
                legitimacy in ISDS, CIMA stands as a trusted institution—bridging legal expertise with 
                procedural allowances to support both investor protection and sovereign regulatory autonomy.
              </p>
            </div>
            <div className="overview-sidebar">
              <div className="sidebar-card">
                <h3>Key Focus Areas</h3>
                <ul className="advantages-list">
                  <li><CheckCircle size={18} /> Bilateral & Multilateral Treaties</li>
                  <li><CheckCircle size={18} /> Investor Protections (FET, MFN)</li>
                  <li><CheckCircle size={18} /> State Defenses & Sovereignty</li>
                  <li><CheckCircle size={18} /> ICSID & UNCITRAL Procedures</li>
                  <li><CheckCircle size={18} /> Treaty Interpretation</li>
                  <li><CheckCircle size={18} /> Arbitral Award Enforcement</li>
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
            <h2>Our Investment Arbitration Services</h2>
            <p>Specialized training and case support for investment treaty disputes</p>
          </div>

          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon">
                <Scale size={32} />
              </div>
              <h3>Case Support Services</h3>
              <p>
                Comprehensive case management for investment treaty arbitrations under ICSID, UNCITRAL, 
                and other institutional rules, supporting both investor and state parties.
              </p>
            </div>

            <div className="service-card">
              <div className="service-icon">
                <Award size={32} />
              </div>
              <h3>Specialized Training Programs</h3>
              <p>
                Advanced training for arbitrators, government lawyers, treaty negotiators, and corporate 
                counsel covering ISDS foundations, procedures, and recent developments.
              </p>
            </div>

            <div className="service-card">
              <div className="service-icon">
                <Users size={32} />
              </div>
              <h3>Expert Arbitrator Panel</h3>
              <p>
                Access to experienced investment arbitrators with deep knowledge of international investment 
                law, treaty interpretation, and cross-border dispute resolution.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Topics Covered */}
      <section className="topics-covered">
        <div className="container">
          <h2>Key Topics in Investment Arbitration</h2>
          <div className="topics-grid">
            <div className="topic-item">
              <FileText size={24} />
              <h3>Investment Treaties (BITs/MITs)</h3>
              <p>Bilateral and multilateral investment treaties, treaty interpretation, and framework analysis</p>
            </div>

            <div className="topic-item">
              <Shield size={24} />
              <h3>Investor Protections</h3>
              <p>Fair and equitable treatment (FET), expropriation, national treatment, and MFN clauses</p>
            </div>

            <div className="topic-item">
              <Globe size={24} />
              <h3>State Defenses</h3>
              <p>Regulatory autonomy, necessity defense, police powers, and public interest considerations</p>
            </div>

            <div className="topic-item">
              <Scale size={24} />
              <h3>Jurisdictional Challenges</h3>
              <p>Consent to arbitration, nationality requirements, and ratione materiae issues</p>
            </div>

            <div className="topic-item">
              <Briefcase size={24} />
              <h3>ICSID & UNCITRAL Rules</h3>
              <p>Procedural rules, annulment proceedings, and enforcement of arbitral awards</p>
            </div>

            <div className="topic-item">
              <TrendingUp size={24} />
              <h3>Recent Developments</h3>
              <p>Reform initiatives, transparency requirements, and evolving arbitral jurisprudence</p>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="practice-statistics">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-item">
              <div className="stat-number">300+</div>
              <div className="stat-label">Professionals Trained</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">40+</div>
              <div className="stat-label">Countries Represented</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">75+</div>
              <div className="stat-label">Investment Law Experts</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">150+</div>
              <div className="stat-label">Treaties Covered</div>
            </div>
          </div>
        </div>
      </section>

      {/* Who Should Attend */}
      <section className="who-should-attend">
        <div className="container">
          <div className="section-header">
            <h2>Who Should Attend Our ISDS Training</h2>
            <p>Specialized programs designed for diverse investment arbitration practitioners</p>
          </div>

          <div className="audience-grid">
            <div className="audience-item">
              <Scale size={28} />
              <h3>Arbitrators</h3>
              <p>Tribunal members seeking to expand expertise in investment treaty arbitration and ISDS procedures</p>
            </div>

            <div className="audience-item">
              <Globe size={28} />
              <h3>Government Lawyers</h3>
              <p>State counsel defending sovereign interests and regulatory autonomy in investment disputes</p>
            </div>

            <div className="audience-item">
              <Briefcase size={28} />
              <h3>Corporate Counsel</h3>
              <p>In-house and external counsel representing multinational corporations and foreign investors</p>
            </div>

            <div className="audience-item">
              <FileText size={28} />
              <h3>Treaty Negotiators</h3>
              <p>Officials involved in negotiating, drafting, and implementing international investment agreements</p>
            </div>
          </div>
        </div>
      </section>

      {/* Training Programs */}
      <section className="training-programs">
        <div className="container">
          <div className="training-content">
            <div className="training-text">
              <h2>Investment Arbitration Training</h2>
              <p>
                CIMA's specialized ISDS training provides comprehensive coverage of international investment 
                law, treaty-based arbitration, and the evolving landscape of investor-state disputes. Our 
                faculty includes leading practitioners with direct experience in high-profile investment cases.
              </p>
              <ul className="training-highlights">
                <li><CheckCircle size={20} /> Comprehensive coverage of BITs, MITs, and investment treaties</li>
                <li><CheckCircle size={20} /> Analysis of investor protections and state defenses</li>
                <li><CheckCircle size={20} /> ICSID, UNCITRAL, and other institutional procedures</li>
                <li><CheckCircle size={20} /> Mock arbitrations and case simulations</li>
                <li><CheckCircle size={20} /> Recent case law and reform developments</li>
                <li><CheckCircle size={20} /> Certificate programs and continuing education credits</li>
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
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015" 
                alt="Investment arbitration training session"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Procedural Frameworks */}
      <section className="procedural-frameworks">
        <div className="container">
          <h2>Procedural Frameworks We Cover</h2>
          <div className="frameworks-grid">
            <div className="framework-card">
              <div className="framework-icon">
                <Shield size={40} />
              </div>
              <h3>ICSID</h3>
              <p>International Centre for Settlement of Investment Disputes</p>
              <ul className="framework-features">
                <li>Convention arbitration and Additional Facility Rules</li>
                <li>Annulment proceedings and enforcement mechanisms</li>
                <li>Recent procedural reforms and transparency initiatives</li>
              </ul>
            </div>

            <div className="framework-card">
              <div className="framework-icon">
                <Globe size={40} />
              </div>
              <h3>UNCITRAL</h3>
              <p>United Nations Commission on International Trade Law</p>
              <ul className="framework-features">
                <li>UNCITRAL Arbitration Rules and Transparency Rules</li>
                <li>Ad hoc arbitration procedures</li>
                <li>Enforcement under the New York Convention</li>
              </ul>
            </div>

            <div className="framework-card">
              <div className="framework-icon">
                <Scale size={40} />
              </div>
              <h3>Other Institutions</h3>
              <p>ICC, LCIA, SCC, and Regional Centers</p>
              <ul className="framework-features">
                <li>Institutional rules for investment disputes</li>
                <li>Emergency arbitrator provisions</li>
                <li>Multi-party and consolidation procedures</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose CIMA */}
      <section className="why-choose-cima">
        <div className="container">
          <div className="section-header">
            <h2>Why Choose CIMA for Investment Arbitration</h2>
            <p>Leading expertise at the intersection of international law and practical dispute resolution</p>
          </div>

          <div className="features-grid">
            <div className="feature-item">
              <Award size={28} />
              <h3>Expert Faculty</h3>
              <p>Learn from practitioners with direct experience in landmark investment treaty cases worldwide</p>
            </div>

            <div className="feature-item">
              <Globe size={28} />
              <h3>Global Perspective</h3>
              <p>Coverage of diverse treaty frameworks, jurisdictions, and regional investment law developments</p>
            </div>

            <div className="feature-item">
              <TrendingUp size={28} />
              <h3>Current Developments</h3>
              <p>Focus on recent case law, reform initiatives, and evolving standards in investment protection</p>
            </div>

            <div className="feature-item">
              <Shield size={28} />
              <h3>Balanced Approach</h3>
              <p>Training covers both investor protection and sovereign regulatory autonomy perspectives</p>
            </div>
          </div>
        </div>
      </section>

      {/* Rules & Resources */}
      <section className="rules-resources">
        <div className="container">
          <h2>Resources & Materials</h2>
          <div className="resources-grid">
            <div className="resource-card">
              <FileText size={32} />
              <h3>CIMA Arbitration Rules</h3>
              <p>Rules applicable to investment treaty arbitrations administered by CIMA</p>
              <Link to="/rules" className="resource-link">
                View Rules <ArrowRight size={16} />
              </Link>
            </div>

            <div className="resource-card">
              <Briefcase size={32} />
              <h3>Model BIT Clauses</h3>
              <p>Sample arbitration provisions for bilateral investment treaties</p>
              <Link to="/resources" className="resource-link">
                Download Templates <ArrowRight size={16} />
              </Link>
            </div>

            <div className="resource-card">
              <Users size={32} />
              <h3>Arbitrator Profiles</h3>
              <p>Experienced investment arbitrators specializing in treaty-based disputes</p>
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
            <h2>Advance Your Investment Arbitration Practice</h2>
            <p>Join our specialized ISDS training programs or engage our case support services for your next investment treaty dispute</p>
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

export default Investment

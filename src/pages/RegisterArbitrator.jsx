import React from 'react'
import { Link } from 'react-router-dom'
import { Award, FileCheck, Users, Briefcase, GraduationCap, CheckCircle2, ArrowRight, Target } from 'lucide-react'
import './Contact.css'
import './RegisterArbitrator.css'

const RegisterArbitrator = () => {
  return (
    <div className="contact-page">
      {/* Hero Section */}
      <section className="contact-hero">
        <div className="contact-hero-overlay"></div>
        <div className="contact-hero-content">
          <div className="contact-hero-text">
            <h1 className="contact-hero-title">Register as an Arbitrator</h1>
            <p className="contact-hero-subtitle">
              Join CIMA's prestigious Roll of Arbitrators and Mediators. Gain recognition, expand your practice, and resolve disputes across the globe.
            </p>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="register-overview">
        <div className="container">
          <div className="overview-intro">
            <h2>Become a CIMA-Registered Neutral</h2>
            <p className="lead-text">
              Registration on CIMA's Roll of Arbitrators and Mediators provides international recognition, appointment opportunities, and professional credibility in alternative dispute resolution.
            </p>
          </div>

          <div className="register-benefits-grid">
            <div className="register-benefit-card">
              <Award size={32} />
              <h3>Professional Recognition</h3>
              <p>Gain credibility and recognition as a qualified neutral in the global ADR community</p>
            </div>
            <div className="register-benefit-card">
              <Users size={32} />
              <h3>Appointment Opportunities</h3>
              <p>Be selected for appointments in arbitration and mediation cases across multiple jurisdictions</p>
            </div>
            <div className="register-benefit-card">
              <Target size={32} />
              <h3>Global Visibility</h3>
              <p>Your profile featured on CIMA's public Roll accessible to parties and counsel worldwide</p>
            </div>
            <div className="register-benefit-card">
              <Briefcase size={32} />
              <h3>Practice Development</h3>
              <p>Access to training, resources, and networking opportunities to grow your ADR practice</p>
            </div>
          </div>
        </div>
      </section>

      {/* Eligibility Requirements */}
      <section className="eligibility-section">
        <div className="container">
          <div className="section-header">
            <h2>Eligibility Requirements</h2>
            <p>CIMA maintains rigorous standards to ensure the quality and competence of registered neutrals</p>
          </div>

          <div className="eligibility-tiers">
            <div className="eligibility-tier">
              <div className="tier-badge">
                <Award size={24} />
              </div>
              <h3>Associate Member (ACIArb)</h3>
              <div className="tier-requirements">
                <h4>Minimum Requirements:</h4>
                <ul className="requirements-list">
                  <li><CheckCircle2 size={18} /> <span>Completion of CIMA Foundation Training Course or equivalent</span></li>
                  <li><CheckCircle2 size={18} /> <span>Bachelor's degree or professional qualification in law, engineering, business, or related field</span></li>
                  <li><CheckCircle2 size={18} /> <span>Understanding of arbitration/mediation principles and procedures</span></li>
                  <li><CheckCircle2 size={18} /> <span>Good standing with professional body (if applicable)</span></li>
                </ul>
                <div className="tier-note">
                  <strong>Ideal for:</strong> Early-career professionals seeking ADR training and certification
                </div>
              </div>
            </div>

            <div className="eligibility-tier featured">
              <div className="tier-badge">
                <Award size={24} />
              </div>
              <h3>Member (MCIArb)</h3>
              <div className="tier-requirements">
                <h4>Minimum Requirements:</h4>
                <ul className="requirements-list">
                  <li><CheckCircle2 size={18} /> <span>Completion of CIMA Advanced Practitioner Course or equivalent</span></li>
                  <li><CheckCircle2 size={18} /> <span>Minimum 3-5 years professional experience in law, engineering, business, or relevant sector</span></li>
                  <li><CheckCircle2 size={18} /> <span>Demonstrated knowledge of arbitration/mediation practice</span></li>
                  <li><CheckCircle2 size={18} /> <span>Professional references from qualified practitioners</span></li>
                  <li><CheckCircle2 size={18} /> <span>Active engagement in ADR activities (training, conferences, publications)</span></li>
                </ul>
                <div className="tier-note">
                  <strong>Ideal for:</strong> Experienced professionals ready to serve as arbitrators/mediators
                </div>
              </div>
            </div>

            <div className="eligibility-tier">
              <div className="tier-badge">
                <Award size={24} />
              </div>
              <h3>Fellow (FCIArb)</h3>
              <div className="tier-requirements">
                <h4>Minimum Requirements:</h4>
                <ul className="requirements-list">
                  <li><CheckCircle2 size={18} /> <span>Senior practitioner with 10+ years professional experience</span></li>
                  <li><CheckCircle2 size={18} /> <span>Demonstrated experience sitting as arbitrator/mediator in multiple cases</span></li>
                  <li><CheckCircle2 size={18} /> <span>Significant contributions to ADR (publications, teaching, thought leadership)</span></li>
                  <li><CheckCircle2 size={18} /> <span>International recognition in ADR field</span></li>
                  <li><CheckCircle2 size={18} /> <span>Endorsement from current CIMA Fellows or recognized ADR leaders</span></li>
                </ul>
                <div className="tier-note">
                  <strong>Ideal for:</strong> Senior practitioners with distinguished ADR careers
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Registration Process */}
      <section className="registration-process">
        <div className="container">
          <div className="section-header">
            <h2>Registration Process</h2>
            <p>Follow these steps to join CIMA's Roll of Arbitrators and Mediators</p>
          </div>

          <div className="process-flow">
            <div className="process-flow-step">
              <div className="flow-step-number">1</div>
              <div className="flow-step-content">
                <h3>Complete Application Form</h3>
                <p>Download and complete the Registration Application Form. Provide detailed information about your education, professional experience, ADR training, and practice areas.</p>
                <a href="https://cimalearn.thecima.org" className="download-btn" target="_blank" rel="noreferrer">
                  <FileCheck size={18} />
                  Download Application Form
                </a>
              </div>
            </div>

            <div className="process-flow-step">
              <div className="flow-step-number">2</div>
              <div className="flow-step-content">
                <h3>Prepare Supporting Documents</h3>
                <p>Gather all required supporting documents:</p>
                <ul className="document-checklist">
                  <li><CheckCircle2 size={16} /> Professional CV highlighting ADR experience</li>
                  <li><CheckCircle2 size={16} /> Copies of academic qualifications and certifications</li>
                  <li><CheckCircle2 size={16} /> Evidence of ADR training (CIMA or equivalent)</li>
                  <li><CheckCircle2 size={16} /> Professional references (2-3 required)</li>
                  <li><CheckCircle2 size={16} /> Professional indemnity insurance (if applicable)</li>
                  <li><CheckCircle2 size={16} /> Recent passport-sized photograph</li>
                </ul>
              </div>
            </div>

            <div className="process-flow-step">
              <div className="flow-step-number">3</div>
              <div className="flow-step-content">
                <h3>Submit Application with Fee</h3>
                <p>Submit your completed application along with supporting documents and the application fee. Fees vary by membership level:</p>
                <div className="fee-structure">
                  <div className="fee-item">
                    <span className="fee-level">Associate</span>
                    <span className="fee-amount">$200</span>
                  </div>
                  <div className="fee-item">
                    <span className="fee-level">Member</span>
                    <span className="fee-amount">$400</span>
                  </div>
                  <div className="fee-item">
                    <span className="fee-level">Fellow</span>
                    <span className="fee-amount">$600</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="process-flow-step">
              <div className="flow-step-number">4</div>
              <div className="flow-step-content">
                <h3>Application Review</h3>
                <p>CIMA's Admissions Committee reviews all applications to ensure compliance with eligibility criteria. The review process typically takes 4-6 weeks.</p>
              </div>
            </div>

            <div className="process-flow-step">
              <div className="flow-step-number">5</div>
              <div className="flow-step-content">
                <h3>Acceptance & Listing</h3>
                <p>Upon acceptance, you will receive your membership certificate and designation. Your profile will be published on CIMA's public Roll of Arbitrators and Mediators.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Practice Areas Selection */}
      <section className="practice-areas-selection">
        <div className="container">
          <h2>Select Your Practice Areas</h2>
          <p className="section-subtitle">
            Registered neutrals can indicate their areas of expertise to enhance appointment opportunities in specialized disputes
          </p>

          <div className="practice-areas-tags">
            <span className="practice-tag">Commercial Arbitration</span>
            <span className="practice-tag">Construction & Engineering</span>
            <span className="practice-tag">Investment & ISDS</span>
            <span className="practice-tag">Energy & Natural Resources</span>
            <span className="practice-tag">Financial Services</span>
            <span className="practice-tag">Technology & IP</span>
            <span className="practice-tag">Maritime & Shipping</span>
            <span className="practice-tag">International Trade</span>
            <span className="practice-tag">Sports Disputes</span>
            <span className="practice-tag">Labour & Employment</span>
            <span className="practice-tag">Real Estate</span>
            <span className="practice-tag">Healthcare</span>
            <span className="practice-tag">Insurance & Reinsurance</span>
            <span className="practice-tag">Banking & Finance</span>
          </div>
        </div>
      </section>

      {/* Ongoing Requirements */}
      <section className="ongoing-requirements">
        <div className="container">
          <h2>Ongoing Requirements for Registered Neutrals</h2>
          <div className="requirements-grid">
            <div className="requirement-card">
              <GraduationCap size={32} />
              <h3>Continuing Professional Development</h3>
              <p>All registered neutrals must complete minimum CPD hours annually:</p>
              <ul>
                <li>Associates: 10 hours per year</li>
                <li>Members: 15 hours per year</li>
                <li>Fellows: 20 hours per year</li>
              </ul>
            </div>

            <div className="requirement-card">
              <FileCheck size={32} />
              <h3>Annual Renewal</h3>
              <p>Registration must be renewed annually with payment of renewal fees and confirmation of CPD compliance.</p>
            </div>

            <div className="requirement-card">
              <Award size={32} />
              <h3>Professional Standards</h3>
              <p>Maintain high ethical standards, comply with CIMA Code of Conduct, and uphold professional integrity in all ADR matters.</p>
            </div>

            <div className="requirement-card">
              <Briefcase size={32} />
              <h3>Active Practice</h3>
              <p>Demonstrate ongoing engagement in ADR through case work, training, publications, or other professional activities.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="register-cta">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Join CIMA's Roll?</h2>
            <p>Take the next step in your ADR career. Register today and gain international recognition as a qualified neutral.</p>
            <div className="cta-buttons">
              <a href="https://cimalearn.thecima.org" className="btn-primary" target="_blank" rel="noreferrer">
                Download Application Form
              </a>
              <Link to="/membership/qualification-pathway" className="btn-secondary">
                Learn About Qualification Pathway <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Contact for Questions */}
      <section className="register-contact">
        <div className="container">
          <div className="contact-box">
            <h3>Questions About Registration?</h3>
            <p>Our Membership team is here to assist with your application and answer any questions.</p>
            <div className="contact-details">
              <p><strong>Email:</strong> membership@thecima.org</p>
              <p><strong>Phone:</strong> +44 (0) 1865 520 520</p>
            </div>
            <Link to="/contact" className="contact-link">
              Contact Membership Team <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default RegisterArbitrator

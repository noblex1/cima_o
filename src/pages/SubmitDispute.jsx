import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FileText, Clock, Shield, Users, CheckCircle2, ArrowRight, AlertCircle } from 'lucide-react'
import './Contact.css'
import './SubmitDispute.css'

const SubmitDispute = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phoneNumber: '',
    email: '',
    message: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    alert('Thank you for submitting your dispute. Our team will review and contact you within 3 business days.')
    setFormData({
      firstName: '',
      lastName: '',
      phoneNumber: '',
      email: '',
      message: ''
    })
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }
  return (
    <div className="contact-page">
      {/* Hero Section */}
      <section className="contact-hero">
        <div className="contact-hero-overlay"></div>
        <div className="contact-hero-content">
          <div className="contact-hero-text">
            <h1 className="contact-hero-title">Submit a Dispute</h1>
            <p className="contact-hero-subtitle">
              Initiate your dispute resolution process with CIMA. Our streamlined procedure ensures efficient case management and expert resolution.
            </p>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="dispute-overview">
        <div className="container">
          <div className="overview-intro">
            <h2>Begin Your Dispute Resolution Journey</h2>
            <p className="lead-text">
              CIMA provides comprehensive arbitration and mediation services for commercial, construction, investment, and other disputes. Our process is designed to deliver fair, efficient, and enforceable outcomes.
            </p>
          </div>

          <div className="dispute-types-grid">
            <div className="dispute-type-card">
              <div className="dispute-type-icon">
                <FileText size={28} />
              </div>
              <h3>Commercial Arbitration</h3>
              <p>International and domestic commercial disputes, contract disagreements, trade disputes</p>
            </div>
            <div className="dispute-type-card">
              <div className="dispute-type-icon">
                <Shield size={28} />
              </div>
              <h3>Construction Adjudication</h3>
              <p>Construction contract disputes, engineering claims, project delays, payment disputes</p>
            </div>
            <div className="dispute-type-card">
              <div className="dispute-type-icon">
                <Users size={28} />
              </div>
              <h3>Investment Disputes</h3>
              <p>Investor-State disputes, treaty-based claims, international investment protection</p>
            </div>
            <div className="dispute-type-card">
              <div className="dispute-type-icon">
                <Clock size={28} />
              </div>
              <h3>Mediation Services</h3>
              <p>Facilitated negotiations, settlement discussions, pre-arbitration mediation</p>
            </div>
          </div>
        </div>
      </section>

      {/* Submission Process */}
      <section className="submission-process">
        <div className="container">
          <div className="section-header">
            <h2>How to Submit a Dispute</h2>
            <p>Follow these simple steps to initiate your dispute resolution process with CIMA</p>
          </div>

          <div className="process-timeline">
            <div className="timeline-step">
              <div className="timeline-number">1</div>
              <div className="timeline-content">
                <h3>Review Requirements</h3>
                <p>Ensure your dispute falls within CIMA's jurisdiction and gather all relevant documents including contracts, correspondence, and supporting evidence.</p>
                <ul className="timeline-checklist">
                  <li><CheckCircle2 size={18} /> <span>Arbitration agreement or clause</span></li>
                  <li><CheckCircle2 size={18} /> <span>Contract documents</span></li>
                  <li><CheckCircle2 size={18} /> <span>Correspondence between parties</span></li>
                  <li><CheckCircle2 size={18} /> <span>Supporting evidence and exhibits</span></li>
                </ul>
              </div>
            </div>

            <div className="timeline-step">
              <div className="timeline-number">2</div>
              <div className="timeline-content">
                <h3>Complete Request Form</h3>
                <p>Download and complete the Request for Arbitration/Mediation form. Provide comprehensive details about the dispute, parties involved, and relief sought.</p>
                <a href="https://cimalearn.thecima.org" className="download-btn" target="_blank" rel="noreferrer">
                  <FileText size={18} />
                  Download Request Form
                </a>
              </div>
            </div>

            <div className="timeline-step">
              <div className="timeline-number">3</div>
              <div className="timeline-content">
                <h3>Submit with Filing Fee</h3>
                <p>Submit your completed form along with the required filing fee. The registration fee covers initial case administration and is calculated based on the claim amount.</p>
                <div className="fee-info-box">
                  <AlertCircle size={20} />
                  <div>
                    <strong>Filing Fee Structure:</strong>
                    <p>Fees range from $500 to $25,000 based on claim amount. Contact our registry for specific fee calculation.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="timeline-step">
              <div className="timeline-number">4</div>
              <div className="timeline-content">
                <h3>Case Registration & Confirmation</h3>
                <p>Once submitted, CIMA's Registry will review your submission and confirm case registration within 3 business days. You will receive a case reference number and assigned case manager.</p>
              </div>
            </div>

            <div className="timeline-step">
              <div className="timeline-number">5</div>
              <div className="timeline-content">
                <h3>Tribunal Constitution</h3>
                <p>The parties select arbitrators/mediators from CIMA's Roll or propose qualified practitioners. CIMA assists with constitution of the tribunal and commencement of proceedings.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Submission Form */}
      <section className="dispute-submission-form">
        <div className="container">
          <div className="form-section-header">
            <h2>Submit a Dispute</h2>
            <p>"Submit a Dispute" is a streamlined and user-friendly online process through which individuals, organizations or states can formally present their conflicts or disagreements for resolution. This method typically involves providing essential details about the dispute, such as the nature of the issue, relevant parties involved, and supporting documentation. The aim is to initiate a structured dispute resolution procedure, whether through negotiation, mediation, or arbitration. The goal of reaching a fair and impartial resolution. This straightforward submission mechanism ensures a systematic approach to addressing conflicts while facilitating a more efficient and effective resolution process.</p>
          </div>

          <div className="dispute-form-wrapper">
            <form onSubmit={handleSubmit} className="dispute-form">
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="firstName">First Name</label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    className="form-input"
                    placeholder="Enter your first name"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="lastName">Last Name</label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                    className="form-input"
                    placeholder="Enter your last name"
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="phoneNumber">* Phone Number</label>
                  <input
                    type="tel"
                    id="phoneNumber"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    required
                    className="form-input"
                    placeholder="Enter your phone number"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">* Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="form-input"
                    placeholder="Enter your email address"
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="message">Leave a message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="6"
                  className="form-textarea"
                  placeholder="Provide details about your dispute..."
                ></textarea>
              </div>

              <button type="submit" className="btn-submit-dispute">
                Submit
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Why Choose CIMA */}
      <section className="why-choose-cima">
        <div className="container">
          <h2>Why Choose CIMA for Dispute Resolution</h2>
          <div className="benefits-grid">
            <div className="benefit-feature">
              <Shield size={32} />
              <h3>Expert Neutrals</h3>
              <p>Access to highly qualified arbitrators and mediators with specialized expertise across all practice areas</p>
            </div>
            <div className="benefit-feature">
              <Clock size={32} />
              <h3>Efficient Process</h3>
              <p>Streamlined procedures designed to minimize delays and deliver timely outcomes</p>
            </div>
            <div className="benefit-feature">
              <CheckCircle2 size={32} />
              <h3>Enforceable Awards</h3>
              <p>Awards are enforceable under the New York Convention in over 160 jurisdictions worldwide</p>
            </div>
            <div className="benefit-feature">
              <Users size={32} />
              <h3>Case Management Support</h3>
              <p>Dedicated registry support throughout the entire dispute resolution process</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="dispute-contact-info">
        <div className="container">
          <div className="contact-info-grid">
            <div className="contact-info-card">
              <h3>Submit Your Dispute</h3>
              <p>For dispute submissions and general enquiries:</p>
              <div className="contact-details">
                <p><strong>Email:</strong> registry@thecima.org</p>
                <p><strong>Phone:</strong> +44 (0) 1865 520 520</p>
                <p><strong>Address:</strong> CIMA Registry, Oxford, United Kingdom</p>
              </div>
            </div>

            <div className="contact-info-card highlight">
              <h3>Need Assistance?</h3>
              <p>Our Registry team is here to help with your submission and answer any questions about the process.</p>
              <Link to="/contact" className="contact-btn">
                Contact Registry Team <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Resources */}
      <section className="dispute-resources">
        <div className="container">
          <h2>Helpful Resources</h2>
          <div className="resources-grid">
            <Link to="/rules" className="resource-card">
              <FileText size={28} />
              <h3>CIMA Arbitration Rules</h3>
              <p>Review the complete arbitration and mediation rules and procedures</p>
              <span className="resource-link">View Rules <ArrowRight size={16} /></span>
            </Link>
            <Link to="/membership/roll-of-mediators-arbitrators" className="resource-card">
              <Users size={28} />
              <h3>Roll of Arbitrators</h3>
              <p>Browse qualified arbitrators and mediators available for appointment</p>
              <span className="resource-link">View Roll <ArrowRight size={16} /></span>
            </Link>
            <a href="https://cimalearn.thecima.org" className="resource-card" target="_blank" rel="noreferrer">
              <Shield size={28} />
              <h3>Fee Schedule</h3>
              <p>Download the complete fee schedule for arbitration and mediation services</p>
              <span className="resource-link">View Fees <ArrowRight size={16} /></span>
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default SubmitDispute

import React from 'react'
import { Helmet } from 'react-helmet-async'
import { ArrowRight } from 'lucide-react'
import './Opportunities.css'
import businessImage from '../../assets/business.jpeg'

const Opportunities = () => {
  return (
    <div className="opportunities-page">
      <Helmet>
        <title>Career Opportunities | CIMA</title>
        <meta name="description" content="Join CIMA's global team. Explore job openings, internships, and volunteer opportunities in international arbitration and mediation." />
      </Helmet>

      {/* Hero Section */}
      <section className="opportunities-hero">
        <div className="opportunities-hero-overlay"></div>
        <img src={businessImage} alt="Business professionals collaborating" className="opportunities-hero-image" />
        <div className="opportunities-hero-content">
          <h1>Join Our Global Team</h1>
          <p>Shape the future of international dispute resolution with CIMA</p>
        </div>
      </section>

      {/* Flyer Section */}
      <section className="opportunities-flyer-section">
        <div className="container">
          <div className="flyer-container">
            <img src={businessImage} alt="Business Development Volunteers - Complete Details" className="full-flyer" />
          </div>
          
          <div className="application-actions">
            <a href="mailto:info@thecima.org?subject=Business Development Volunteer Application" className="btn-apply-large">
              Apply Now via Email
              <ArrowRight size={20} />
            </a>
            <a href="mailto:info@thecima.org?subject=Inquiry about Business Development Volunteer Role" className="btn-inquire">
              Ask a Question
            </a>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="opportunities-cta">
        <div className="container">
          <div className="cta-box">
            <h2>Have Questions?</h2>
            <p>Our team is here to help you learn more about opportunities at CIMA and answer any questions you may have.</p>
            <a href="mailto:info@thecima.org?subject=Career Opportunities Inquiry" className="btn-contact">
              Contact Us
              <ArrowRight size={20} />
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Opportunities

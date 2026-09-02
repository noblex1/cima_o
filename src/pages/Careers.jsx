import React from 'react'
import { Link } from 'react-router-dom'
import { Briefcase, MapPin, Clock, ArrowRight, Users, Target, Heart, Zap } from 'lucide-react'
import './CommonPages.css'
import businessFlyer from '../../assets/business.jpeg'

const Careers = () => {
  const jobOpenings = [
    {
      id: 1,
      title: "ACCOUNTANT (PART-TIME)",
      location: "Nairobi",
      type: "Part-time",
      description: "Manage financial records, prepare reports, and ensure compliance with accounting standards"
    },
    {
      id: 2,
      title: "DEPUTY JURISDICTION LEAD - KENYA",
      location: "Nairobi",
      type: "Full-time",
      description: "Lead strategic initiatives and operations for CIMA's Kenya branch and expansion activities"
    },
    {
      id: 3,
      title: "2025 KENYA INTERNSHIP",
      location: "Nairobi",
      type: "Internship",
      description: "Gain hands-on experience in ADR administration, event coordination, and member services"
    },
    {
      id: 4,
      title: "LEGAL OFFICER (internship, mid-level/senior, full-time or contract)",
      location: "Accra",
      type: "Multiple",
      description: "Provide legal support for arbitration and mediation proceedings, review agreements"
    },
    {
      id: 5,
      title: "WEB PORTAL DEVELOPER (contract)",
      location: "Remote",
      type: "Contract",
      description: "Build and maintain CIMA's member portal and e-learning platform"
    },
    {
      id: 6,
      title: "ADR OFFICER (RESEARCH & CURRICULUM DEVELOPMENT)",
      location: "Accra",
      type: "Full-time",
      description: "Develop training curricula, conduct research, and create educational materials"
    },
    {
      id: 7,
      title: "Event + Training Coordinator (2025 - 2027 AMA)",
      location: "Accra",
      type: "Contract",
      description: "Coordinate training programs, mock proceedings, and professional development events"
    },
    {
      id: 8,
      title: "CIMA Course Completion Policy",
      location: "Various",
      type: "Policy",
      description: "Guidelines for instructors and coordinators on course completion standards"
    },
    {
      id: 9,
      title: "ADR LECTURER & Practitioner: Lecturer",
      location: "Accra/Remote",
      type: "Part-time",
      description: "Teach arbitration and mediation courses, mentor students and practitioners"
    },
    {
      id: 10,
      title: "Professional Liability (or ADR FUND)",
      location: "Various",
      type: "Policy",
      description: "Information on professional liability coverage for certified practitioners"
    },
    {
      id: 11,
      title: "Policy Officer",
      location: "Accra",
      type: "Full-time",
      description: "Develop and implement organizational policies and governance frameworks"
    },
    {
      id: 12,
      title: "WEB DESIGNER - OXFORD, UK - £50-75K",
      location: "Oxford",
      type: "Full-time",
      description: "Design and maintain CIMA's digital presence and web properties"
    },
    {
      id: 13,
      title: "Membership Officer",
      location: "Accra",
      type: "Full-time",
      description: "Manage member relations, applications, and certification processes"
    },
    {
      id: 14,
      title: "PR and EDI Education for law students + ADR FAQ",
      location: "Various",
      type: "Contract",
      description: "Create educational content and manage public relations initiatives"
    },
    {
      id: 15,
      title: "Mock T&T Engineer & Coordinator (for arbitration or mediation)",
      location: "Accra",
      type: "Contract",
      description: "Design and facilitate mock proceedings and practical training exercises"
    },
    {
      id: 16,
      title: "Research Officer/ADR Policy Analyst (100% Remote)",
      location: "Remote",
      type: "Full-time",
      description: "Conduct research on ADR trends, analyze policies, and produce reports"
    },
    {
      id: 17,
      title: "Fundraiser/Charity",
      location: "Various",
      type: "Full-time",
      description: "Develop fundraising strategies and manage donor relationships"
    },
    {
      id: 18,
      title: "FAQ",
      location: "N/A",
      type: "Resource",
      description: "Frequently asked questions about careers at CIMA"
    },
    {
      id: 19,
      title: "Continuing Professional Development",
      location: "Various",
      type: "Program",
      description: "Ongoing education opportunities for CIMA staff and members"
    }
  ]

  const benefits = [
    {
      icon: <Users size={32} />,
      title: "Global Network",
      description: "Connect with ADR professionals across 33+ jurisdictions and leading institutions"
    },
    {
      icon: <Target size={32} />,
      title: "Professional Growth",
      description: "Access world-class training, certifications, and career development opportunities"
    },
    {
      icon: <Heart size={32} />,
      title: "Purpose-Driven",
      description: "Make a meaningful impact on global dispute resolution and justice delivery"
    },
    {
      icon: <Zap size={32} />,
      title: "Innovation",
      description: "Work with cutting-edge AI-driven simulations and modern ADR methodologies"
    }
  ]

  return (
    <div className="common-page">
      {/* Hero Section */}
      <section className="page-hero careers-hero">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1 className="page-title">Careers at CIMA</h1>
          <p className="hero-subtitle">
            Join our mission to advance alternative dispute resolution worldwide
          </p>
        </div>
      </section>

      {/* Why CIMA Section */}
      <section className="content-section">
        <div className="container">
          <div className="careers-intro">
            <h2>Why Join CIMA?</h2>
            <p>
              The Center for International Mediators and Arbitrators is at the forefront of alternative dispute resolution. 
              We're building a global community of professionals committed to excellence, integrity, and innovation in ADR practice.
            </p>
          </div>

          <div className="benefits-grid">
            {benefits.map((benefit, index) => (
              <div key={index} className="benefit-card">
                <div className="benefit-icon">{benefit.icon}</div>
                <h3>{benefit.title}</h3>
                <p>{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Business Development Volunteers Section */}
      <section className="opportunities-teaser">
        <div className="container">
          <div className="opportunities-teaser-content">
            <div className="opportunities-flyer">
              <img src={businessFlyer} alt="Business Development Volunteers - Join CIMA" />
            </div>
            <div className="opportunities-teaser-actions">
              <Link to="/opportunities" className="btn-view-details">
                View Full Details <ArrowRight size={20} />
              </Link>
              <a href="mailto:info@thecima.org?subject=Business Development Volunteer Application" className="btn-apply-now">
                Apply Now
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Team Culture Image */}
      <section className="image-divider">
        <img 
          src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070" 
          alt="CIMA team culture"
        />
      </section>

      {/* Job Openings Section */}
      <section className="content-section careers-openings-section">
        <div className="container">
          <div className="section-header-careers">
            <h2>Current Opportunities</h2>
            <p>Explore open positions across our global operations</p>
          </div>

          <div className="careers-grid">
            {jobOpenings.map((job) => (
              <div key={job.id} className="career-card">
                <div className="career-card-header">
                  <div className="career-icon">
                    <Briefcase size={24} />
                  </div>
                  <span className="career-type">{job.type}</span>
                </div>
                <h3>{job.title}</h3>
                <div className="career-meta">
                  <span className="career-location">
                    <MapPin size={16} />
                    {job.location}
                  </span>
                </div>
                <p>{job.description}</p>
                <button className="career-apply-btn">
                  <span>Apply Now</span>
                  <ArrowRight size={16} />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="careers-cta-section">
        <div className="container">
          <div className="careers-cta-content">
            <h2>Don't See the Right Role?</h2>
            <p>
              We're always looking for talented individuals passionate about alternative dispute resolution. 
              Send us your CV and tell us how you'd like to contribute to CIMA's mission.
            </p>
            <a href="mailto:info@thecima.org" className="btn-careers-contact">
              Send Your CV <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </section>

      {/* Subscribe Section */}
      <section className="subscribe-section">
        <div className="container">
          <div className="subscribe-content">
            <div className="subscribe-text">
              <h3>Subscribe for career updates</h3>
              <p>Get notified about new job openings and opportunities at CIMA</p>
            </div>
            <div className="subscribe-form">
              <input type="email" placeholder="Email" className="subscribe-input" />
              <button className="subscribe-btn">Subscribe</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Careers

import React from 'react'
import { Link } from 'react-router-dom'
import { Users, Target, Lightbulb, Network, BookOpen, Trophy, Calendar, ArrowRight, MessageCircle, Globe } from 'lucide-react'
import './Contact.css'
import './YoungForum.css'

const YoungForum = () => {
  return (
    <div className="contact-page">
      {/* Hero Section */}
      <section className="contact-hero">
        <div className="contact-hero-overlay"></div>
        <div className="contact-hero-content">
          <div className="contact-hero-text">
            <h1 className="contact-hero-title">CIMA Young Forum</h1>
            <p className="contact-hero-subtitle">
              Empowering the next generation of dispute resolution professionals through mentorship, networking, and professional development.
            </p>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="young-forum-overview">
        <div className="container">
          <div className="overview-content">
            <div className="overview-text">
              <h2>Welcome to the CIMA Young Forum</h2>
              <p className="lead-text">
                The CIMA Young Forum is a vibrant community designed for young professionals, students, and early-career practitioners in alternative dispute resolution. We provide a dynamic platform for learning, networking, and professional growth in arbitration, mediation, and related fields.
              </p>
              <p>
                Whether you're a law student exploring ADR, a young lawyer building your practice, or an aspiring arbitrator or mediator, the Young Forum offers resources, mentorship, and opportunities to connect with peers and experienced practitioners across the globe.
              </p>
            </div>
            <div className="overview-stats">
              <div className="stat-box">
                <div className="stat-icon">
                  <Users size={32} />
                </div>
                <div className="stat-number">500+</div>
                <div className="stat-label">Young Members</div>
              </div>
              <div className="stat-box">
                <div className="stat-icon">
                  <Globe size={32} />
                </div>
                <div className="stat-number">25+</div>
                <div className="stat-label">Countries</div>
              </div>
              <div className="stat-box">
                <div className="stat-icon">
                  <Calendar size={32} />
                </div>
                <div className="stat-number">50+</div>
                <div className="stat-label">Annual Events</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="mission-vision">
        <div className="container">
          <div className="mission-vision-grid">
            <div className="mission-card">
              <Target size={40} />
              <h3>Our Mission</h3>
              <p>
                To cultivate the next generation of ADR practitioners by providing accessible training, mentorship, and networking opportunities that foster professional excellence and ethical practice.
              </p>
            </div>
            <div className="mission-card">
              <Lightbulb size={40} />
              <h3>Our Vision</h3>
              <p>
                To be the leading global platform for young ADR professionals, driving innovation, diversity, and accessibility in international dispute resolution.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="young-forum-benefits">
        <div className="container">
          <div className="section-header">
            <h2>Why Join the CIMA Young Forum?</h2>
            <p>Unlock exclusive opportunities designed for young professionals</p>
          </div>

          <div className="benefits-grid">
            <div className="benefit-card">
              <div className="benefit-icon">
                <BookOpen size={32} />
              </div>
              <h3>Professional Development</h3>
              <p>Access specialized training programs, workshops, and webinars tailored for early-career ADR practitioners.</p>
            </div>

            <div className="benefit-card">
              <div className="benefit-icon">
                <Users size={32} />
              </div>
              <h3>Mentorship Program</h3>
              <p>Connect with experienced arbitrators and mediators who provide guidance, career advice, and insights into ADR practice.</p>
            </div>

            <div className="benefit-card">
              <div className="benefit-icon">
                <Network size={32} />
              </div>
              <h3>Global Network</h3>
              <p>Build relationships with young professionals from around the world through events, online forums, and collaborative projects.</p>
            </div>

            <div className="benefit-card">
              <div className="benefit-icon">
                <Trophy size={32} />
              </div>
              <h3>Competitions & Moots</h3>
              <p>Participate in mock arbitrations, mediation competitions, and case study challenges to build practical skills.</p>
            </div>

            <div className="benefit-card">
              <div className="benefit-icon">
                <MessageCircle size={32} />
              </div>
              <h3>Thought Leadership</h3>
              <p>Contribute to CIMA publications, speak at events, and engage in policy discussions shaping the future of ADR.</p>
            </div>

            <div className="benefit-card">
              <div className="benefit-icon">
                <Calendar size={32} />
              </div>
              <h3>Events & Conferences</h3>
              <p>Attend exclusive young practitioner events, networking sessions, and discounted conference registrations.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Membership Eligibility */}
      <section className="membership-eligibility">
        <div className="container">
          <h2>Membership Eligibility</h2>
          <div className="eligibility-content">
            <p className="eligibility-intro">
              The CIMA Young Forum is open to individuals who meet the following criteria:
            </p>
            <div className="eligibility-list">
              <div className="eligibility-item">
                <div className="check-icon">✓</div>
                <div className="eligibility-text">
                  <strong>Age:</strong> Under 40 years old (or within 5 years of entering the legal/dispute resolution profession)
                </div>
              </div>
              <div className="eligibility-item">
                <div className="check-icon">✓</div>
                <div className="eligibility-text">
                  <strong>Students:</strong> Law students, graduate students in ADR-related fields, or recent graduates
                </div>
              </div>
              <div className="eligibility-item">
                <div className="check-icon">✓</div>
                <div className="eligibility-text">
                  <strong>Practitioners:</strong> Early-career lawyers, arbitrators, mediators, or professionals working in dispute resolution
                </div>
              </div>
              <div className="eligibility-item">
                <div className="check-icon">✓</div>
                <div className="eligibility-text">
                  <strong>Interest:</strong> Demonstrated interest in arbitration, mediation, or alternative dispute resolution
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Activities & Programs */}
      <section className="activities-programs">
        <div className="container">
          <h2>Activities & Programs</h2>
          <div className="activities-grid">
            <div className="activity-card">
              <div className="activity-header">
                <BookOpen size={28} />
                <h3>Training & Workshops</h3>
              </div>
              <ul className="activity-list">
                <li>Introductory courses on arbitration and mediation</li>
                <li>Skills workshops (drafting awards, advocacy, negotiation)</li>
                <li>Webinars on emerging trends in ADR</li>
                <li>Certificate programs for young practitioners</li>
              </ul>
            </div>

            <div className="activity-card">
              <div className="activity-header">
                <Trophy size={28} />
                <h3>Competitions & Moots</h3>
              </div>
              <ul className="activity-list">
                <li>Annual CIMA Young Forum Mock Arbitration</li>
                <li>Mediation advocacy competitions</li>
                <li>Case study challenges and hackathons</li>
                <li>Regional and international moot collaborations</li>
              </ul>
            </div>

            <div className="activity-card">
              <div className="activity-header">
                <Network size={28} />
                <h3>Networking Events</h3>
              </div>
              <ul className="activity-list">
                <li>Young practitioner networking sessions</li>
                <li>Meet-the-experts panels and Q&A sessions</li>
                <li>Virtual coffee chats and regional meetups</li>
                <li>Annual Young Forum Conference</li>
              </ul>
            </div>

            <div className="activity-card">
              <div className="activity-header">
                <MessageCircle size={28} />
                <h3>Publications & Research</h3>
              </div>
              <ul className="activity-list">
                <li>Young Forum newsletter and blog</li>
                <li>Contribute articles to CIMA publications</li>
                <li>Research collaborations on ADR topics</li>
                <li>Social media engagement and thought leadership</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* How to Join */}
      <section className="how-to-join">
        <div className="container">
          <div className="join-content">
            <h2>How to Join</h2>
            <p className="join-intro">
              Becoming a member of the CIMA Young Forum is simple and provides immediate access to our global community and resources.
            </p>
            <div className="join-steps">
              <div className="join-step">
                <div className="step-number">1</div>
                <div className="step-content">
                  <h3>Complete Application</h3>
                  <p>Fill out the Young Forum membership application form with your details and areas of interest.</p>
                </div>
              </div>
              <div className="join-step">
                <div className="step-number">2</div>
                <div className="step-content">
                  <h3>Submit Documents</h3>
                  <p>Provide proof of age/student status and a brief statement of interest in ADR.</p>
                </div>
              </div>
              <div className="join-step">
                <div className="step-number">3</div>
                <div className="step-content">
                  <h3>Join the Community</h3>
                  <p>Upon approval, you'll receive access to all Young Forum resources, events, and networking opportunities.</p>
                </div>
              </div>
            </div>

            <div className="join-cta">
              <h3>Membership Fee</h3>
              <p className="fee-amount">$50 per year</p>
              <p className="fee-description">
                Reduced rates available for students and professionals from developing countries
              </p>
              <a href="https://cimalearn.thecima.org" className="btn-join" target="_blank" rel="noreferrer">
                Apply Now
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="young-forum-contact">
        <div className="container">
          <div className="contact-box-centered">
            <h2>Get Involved with the Young Forum</h2>
            <p>
              Have questions about membership or want to learn more about our activities? Our Young Forum team is here to help.
            </p>
            <div className="contact-info-simple">
              <p><strong>Email:</strong> youngforum@thecima.org</p>
              <p><strong>Follow us:</strong> LinkedIn | Twitter | Instagram</p>
            </div>
            <Link to="/contact" className="btn-contact">
              Contact Us <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default YoungForum

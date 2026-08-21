import React from 'react'
import { Link } from 'react-router-dom'
import './CommonPages.css'

const Governance = () => {
  const boardMembers = [
    {
      name: "Dr. Osei Bonsu Dickson, FCIMArb",
      role: "CIMA World Fellow & Professor of Practice",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=400",
      bio: "A top-tier international lawyer with expertise in cybersecurity law, international commercial arbitration, maritime strategy, national security law and investor-state dispute settlement. Course Director of the Oxford-Africa Forum on International Arbitration."
    },
    {
      name: "Board Member",
      role: "Trustee",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400",
      bio: "Distinguished member of CIMA's Board of Trustees, providing strategic oversight and guidance for the organization's mission and vision."
    },
    {
      name: "Board Member",
      role: "Trustee",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400",
      bio: "Respected leader in the ADR community with extensive experience in alternative dispute resolution and professional training."
    }
  ]

  const leadershipTeam = [
    {
      name: "Nana Ama Okyere",
      role: "Executive Director",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=400",
      bio: "Nana Ama leads CIMA's strategic vision and day-to-day operations, working to expand access to world-class ADR training."
    },
    {
      name: "Kwame Mensah",
      role: "Director of Programs",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=400",
      bio: "Kwame oversees CIMA's certification programs and ensures quality standards across all training initiatives."
    },
    {
      name: "Akosua Boateng",
      role: "Head of Research & Development",
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=400",
      bio: "Akosua leads innovation in ADR methodologies and develops new curricula for emerging dispute resolution challenges."
    }
  ]

  return (
    <div className="common-page">
      {/* Hero Section */}
      <section className="page-hero governance-hero">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1 className="page-title">Governance & Leadership</h1>
        </div>
      </section>

      {/* Governance Section */}
      <section className="content-section">
        <div className="container">
          <div className="section-intro">
            <h2 className="section-title governance-title">Governance</h2>
            <p className="section-description">
              CIMA is governed by a distinguished Board of Trustees comprised of seasoned professionals in arbitration and mediation. The Board guides CIMA's strategic direction, ensuring the organization stays true to its mission of advancing ADR excellence globally.
            </p>
            <div className="governance-structure">
              <div className="governance-item">
                <h3>Board Trustees</h3>
                <p>Provide strategic oversight to ensure CIMA's mission and vision are achieved</p>
              </div>
              <div className="governance-item">
                <h3>Appointed Trustees</h3>
                <p>Offer specialized expertise across key advisory sectors including law, policy, education, and industry</p>
              </div>
            </div>

            <div className="governance-docs">
              <Link to="/about" className="btn-outline">
                View Board <span>→</span>
              </Link>
            </div>
          </div>

          <div className="profiles-section">
            <h3 className="profiles-subtitle">Board of Trustees</h3>
            <div className="profiles-grid">
              {boardMembers.map((member, index) => (
                <div key={index} className="profile-card">
                  <div className="profile-image">
                    <img src={member.image} alt={member.name} />
                  </div>
                  <div className="profile-info">
                    <h4 className="profile-name">{member.name}</h4>
                    <p className="profile-role">{member.role}</p>
                    <p className="profile-bio">{member.bio}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Image Divider */}
      <section className="image-divider">
        <img 
          src="https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=2074" 
          alt="CIMA team collaboration"
        />
      </section>

      {/* Leadership Section */}
      <section className="content-section alt-bg">
        <div className="container">
          <div className="section-intro">
            <h2 className="section-title governance-title">Leadership Team</h2>
            <p className="section-description">
              At the core of CIMA's operations is a dedicated leadership team committed to advancing alternative dispute resolution across borders. With diverse backgrounds and a shared vision, our leaders champion innovation, inclusion, and excellence at every level, leading us as we empower ADR professionals worldwide.
            </p>
          </div>

          <div className="profiles-section">
            <h3 className="profiles-subtitle">Profiles</h3>
            <div className="profiles-grid">
              {leadershipTeam.map((leader, index) => (
                <div key={index} className="profile-card">
                  <div className="profile-image">
                    <img src={leader.image} alt={leader.name} />
                  </div>
                  <div className="profile-info">
                    <h4 className="profile-name">{leader.name}</h4>
                    <p className="profile-role">{leader.role}</p>
                    <p className="profile-bio">{leader.bio}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="content-section">
        <div className="container">
          <div className="video-feature">
            <div className="video-header">
              <h3>Law, Practice and Procedures in International Arbitration - Dr. Gael Brown Diawuo, FCIArb, FCIMArb, Barrister</h3>
            </div>
            <div className="video-wrapper">
              <iframe
                width="100%"
                height="500"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                title="CIMA Leadership Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Subscribe Section */}
      <section className="subscribe-section">
        <div className="container">
          <div className="subscribe-content">
            <div className="subscribe-text">
              <h3>Subscribe for latest updates & insights</h3>
              <p>Stay informed about CIMA's training programs, events, and thought leadership in alternative dispute resolution</p>
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

export default Governance

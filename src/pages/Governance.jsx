import React from 'react'
import { Link } from 'react-router-dom'
import './CommonPages.css'
import presidentCampagnaImage from '../../gallery/frn.jpeg'
import vicePresidentDicksonImage from '../../gallery/DOB.jpeg'
import governanceTeamImage from '../../assets/gg.jpeg'
import mariekeImage from '../../assets/marieke.jpg'
import marcoImage from '../../assets/marco.jpg'
import kwasiImage from '../../assets/kwasi.jpg'
import kaurImage from '../../assets/Kaur.png'
import patrickImage from '../../assets/Patrick.png'
import davidImage from '../../assets/David updated.jpg'
import mishaImage from '../../assets/Misha.jpg'
import simonImage from '../../assets/Simon.jpg'
import kolawoleImage from '../../assets/Kolawole.jpg'

const Governance = () => {
  const boardMembers = [
    {
      name: "Francesco Campagna, FCIMArb",
      role: "Honorary President, CIMA",
      image: presidentCampagnaImage,
      bio: "Francesco Campagna, Esq. FCIMArb, brings a wealth of experience and expertise to the role as an Honorary President. With a background in arbitration and a deep understanding of governance principles, he provides strategic guidance and oversight to ensure the organization's objectives are met effectively."
    },
    {
      name: "Dr. Osei Bonsu Dickson, FCIMArb",
      role: "Global Vice-President (Africa) & Dean, CIMA",
      image: vicePresidentDicksonImage,
      bio: "International lawyer with expertise in cybersecurity law, international commercial arbitration, maritime strategy, and investor-state dispute settlement. CIMA World Fellow and Professor of Practice. Course Director of the Oxford-Africa Forum on International Arbitration. Ranked Global No. 3 and Africa No. 1 on the 2023 Thinkers360 Global List of Top 100 National Security Thought Leaders."
    },
    {
      name: "Marieke Witkamp, FClArb, FCIMArb",
      role: "International Arbitration Expert",
      image: mariekeImage,
      bio: "Distinguished international arbitration specialist with extensive experience in complex commercial disputes and cross-border arbitration matters."
    },
    {
      name: "Marco Casano, FCIMArb",
      role: "International Arbitrator",
      image: marcoImage,
      bio: "Experienced international arbitrator specializing in commercial arbitration with a focus on international dispute resolution and ADR practices."
    },
    {
      name: "Kwasi Prempeh, Esq. FCIMArb",
      role: "Legal Expert & Arbitrator",
      image: kwasiImage,
      bio: "Distinguished legal practitioner and arbitrator with extensive experience in alternative dispute resolution and commercial arbitration."
    }
  ]

  const leadershipTeam = [
    {
      name: "Mankiranjit Kaur",
      role: "Director of Legal, National Legal Academy, Malaysia",
      image: kaurImage,
      bio: "Heads legal programmes at National Legal Academy, Malaysia. Holds Diploma in International Commercial Arbitration from CIArb University of Oxford. Arbitrator with BICAM and BDAC, and Adjudicator with AIAC. Expertise in ADR, law reforms, and dispute resolution."
    },
    {
      name: "David A. Asiedu",
      role: "Legal Practitioner & ADR Specialist",
      image: davidImage,
      bio: "Experienced legal practitioner specializing in alternative dispute resolution and commercial arbitration across multiple jurisdictions."
    },
    {
      name: "Dr. Misha Kumar",
      role: "ADR Scholar & Practitioner",
      image: mishaImage,
      bio: "Leading academic and practitioner in alternative dispute resolution with extensive experience in mediation and arbitration training."
    },
    {
      name: "Dr. Simon Peter Tsekpo",
      role: "International Arbitration Expert",
      image: simonImage,
      bio: "Expert in international commercial arbitration with focus on cross-border dispute resolution and ADR capacity building."
    },
    {
      name: "Dr. Kolawale Mayomi",
      role: "Research Director & ADR Specialist",
      image: kolawoleImage,
      bio: "Research Director with expertise in ADR innovation and development of new dispute resolution methodologies for emerging challenges."
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
              CIMA is governed by a distinguished International Advisory Board comprised of seasoned professionals in arbitration and mediation. The Board guides CIMA's strategic direction, ensuring the organization stays true to its mission of advancing ADR excellence globally.
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
            <h3 className="profiles-subtitle">International Advisory Board</h3>
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
          src={governanceTeamImage}
          alt="CIMA team collaboration"
        />
      </section>

      {/* Leadership Section */}
      <section className="content-section alt-bg">
        <div className="container">
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

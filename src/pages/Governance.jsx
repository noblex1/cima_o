import React from 'react'
import { Link } from 'react-router-dom'
import './CommonPages.css'
import justiceAdjeiImage from '../../assets/justice-adjei.jpeg'
import presidentCampagnaImage from '../../assets/president-campagna.jpg'
import vicePresidentDicksonImage from '../../assets/vicepresident-dickson.jpg'
import governanceTeamImage from '../../assets/gg.jpeg'
import kaurImage from '../../assets/Kaur.png'
import patrickImage from '../../assets/Patrick.png'
import davidImage from '../../assets/David updated.jpg'
import mishaImage from '../../assets/Misha.jpg'
import simonImage from '../../assets/Simon.jpg'
import kolawoleImage from '../../assets/Kolawole.jpg'

const Governance = () => {
  const boardMembers = [
    {
      name: "Francesco Campagna, Esq. FCIMArb",
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
      name: "Justice Dennis Dominic Adjei, JSC, FGA",
      role: "Justice of the Supreme Court of Ghana",
      image: justiceAdjeiImage,
      bio: "Ghanaian jurist and active Justice of the Supreme Court of Ghana. Previously served as Justice of the African Court on Human and Peoples' Rights and Justice of the Court of Appeal of Ghana. Known for his commitment to ensuring justice is accessible to all."
    },
    {
      name: "W. Patrick McPhilamy III",
      role: "International Mediator & Arbitrator",
      image: patrickImage,
      bio: "Seasoned international mediator, arbitrator, and ADR attorney based in California. Earned Master of Laws (LL.M.) from Cambridge University. Focuses on guiding parties toward amicable and lasting settlements in complex disputes. Over 40 years of experience in practice."
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
      name: "Abasiemdiong Etuk",
      role: "Commercial Arbitrator",
      image: "https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?q=80&w=400",
      bio: "Specialized in commercial arbitration and mediation with extensive experience in regional and international dispute resolution."
    },
    {
      name: "Michael Smith",
      role: "Senior ADR Consultant",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=400",
      bio: "Senior consultant in alternative dispute resolution with focus on institutional development and professional training programs."
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
          src={governanceTeamImage}
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

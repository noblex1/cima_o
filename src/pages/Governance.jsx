import React from 'react'
import './CommonPages.css'
import presidentCampagnaImage from '../../gallery/frn.jpeg'
import vicePresidentDicksonImage from '../../gallery/governance/bonsu.jpeg'
import mariekeImage from '../../gallery/governance/marieke.jpeg'
import marcoImage from '../../gallery/governance/marc.jpeg'
import kwasiImage from '../../gallery/governance/kwasi.jpeg'
import patrickImage from '../../gallery/governance/phil.jpeg'
import misharImage from '../../gallery/governance/kumar.jpeg'

const Governance = () => {
  const boardMembers = [
    {
      name: "Francesco Campagna, FCIMArb",
      role: "Honorary President, CIMA",
      image: presidentCampagnaImage,
      bio: "Francesco Campagna, Esq. FCIMArb, brings a wealth of experience and expertise to the role as an Honorary President. With a background in arbitration and a deep understanding of governance principles, he provides strategic guidance and oversight to ensure the organization's objectives are met effectively."
    },
    {
      name: "Dr Osei Bonsu Dickson, FCIMArb",
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
    },
    {
      name: "W. Patrick McPhilamy III",
      role: "International Arbitration Expert",
      image: patrickImage,
      bio: "Leading expert in international arbitration with extensive experience in complex commercial disputes and cross-border arbitration matters."
    },
    {
      name: "Dr Mishar Kumar FCIArb",
      role: "ADR Expert & Mediator",
      image: misharImage,
      bio: "Distinguished expert in alternative dispute resolution with extensive experience in mediation and international arbitration."
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

      {/* Advisory Board Section */}
      <section className="content-section">
        <div className="container">
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


    </div>
  )
}

export default Governance

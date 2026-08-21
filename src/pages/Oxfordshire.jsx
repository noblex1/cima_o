import React from 'react'
import { Link } from 'react-router-dom'
import { MapPin, Users, BookOpen, Globe } from 'lucide-react'
import './CommonPages.css'

const Oxfordshire = () => {
  const highlights = [
    {
      icon: <MapPin size={32} />,
      title: "Strategic Location",
      description: "Located in Oxford Science Park, connecting African practitioners with UK and European legal, cultural, and commercial environments"
    },
    {
      icon: <Users size={32} />,
      title: "Knowledge Transfer",
      description: "Facilitates high-level mediation and arbitration programs, fosters international scholarly exchange, and builds networks across regions"
    },
    {
      icon: <BookOpen size={32} />,
      title: "Thought Leadership Platform",
      description: "Hosts thought leadership events that influence CIMA's global curriculum by addressing justice delivery challenges in real time"
    },
    {
      icon: <Globe size={32} />,
      title: "Global Outreach",
      description: "Contributes to CIMA's strategy by situating African legal issues in dialogue with best practices from Europe and North America"
    }
  ]

  return (
    <div className="common-page">
      {/* Hero Section */}
      <section className="page-hero oxfordshire-hero">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1 className="page-title">Oxfordshire</h1>
        </div>
      </section>

      {/* About Section */}
      <section className="content-section">
        <div className="container">
          <div className="section-intro">
            <h2 className="section-title oxfordshire-title">About the Oxfordshire–Africa Forum on International Arbitration</h2>
            <p className="oxfordshire-address">
              <MapPin size={18} style={{ display: 'inline', marginRight: '8px' }} />
              Regus Oxford, John Eccles House, Robert Robinson Avenue, Oxford Science Park, Oxford, OX4 4GP, United Kingdom
            </p>
            <div className="oxfordshire-content">
              <p>
                The Oxfordshire–Africa Forum on International Arbitration is a flagship initiative of the Center for International Mediators and Arbitrators (CIMA) headquartered in England and Wales. Established to bridge legal traditions, economic realities, and dispute resolution practices between Africa and Europe, the Forum plays a critical role in advancing CIMA's mission: to elevate standards in mediation and arbitration, deepen dialogue, and foster pan-African access to world-class training practices.
              </p>
              
              <h3>Purpose:</h3>
              <p>
                The Forum was established with the mission to promote accessible, world-class arbitration and mediation education, especially to underresourced regions like Africa. Through the Forum, CIMA serves as a bridge between UK institutions and African legal frameworks and communities, providing:
              </p>
              
              <ul className="oxfordshire-list">
                <li>Co-branding publications in collaborations with Oxford institutions</li>
                <li>In-person and online training sessions that bridge Africa and Oxfordshire</li>
                <li>Prestigious affiliation that strengthens CIMA's global brand by conveying international expertise for inclusion systems that reflect Africa's unique legal, cultural, and commercial environments</li>
                <li>Thought Leadership Platform: Through the Forum, CIMA hosts high-level lectures and conferences that address key current issues in ADR, inclusive systems that reflect Africa's unique legal, cultural, and commercial environments</li>
                <li>Network Expansion: For its members from different regions and professional stages, ensuring partnership with law schools and arbitral centers</li>
                <li>Credibility Building: Through CIMA white papers and joint publications and conferences with Oxford partners, the Forum ensures access to ADR and international platforms for African economies, in pushing sector-specific arbitration models</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Image Gallery */}
      <section className="oxfordshire-gallery">
        <div className="gallery-grid">
          <div className="gallery-item">
            <img 
              src="https://images.unsplash.com/photo-1543373014-cfe4f4bc1cdf?q=80&w=2000" 
              alt="Oxford University buildings"
            />
          </div>
          <div className="gallery-item">
            <img 
              src="https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?q=80&w=2000" 
              alt="Oxford Science Park"
            />
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="content-section alt-bg">
        <div className="container">
          <div className="highlights-grid">
            {highlights.map((item, index) => (
              <div key={index} className="highlight-card">
                <div className="highlight-icon">{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Visit Oxfordshire Section */}
      <section className="content-section">
        <div className="container">
          <div className="visit-oxfordshire-section">
            <h2 className="section-title">Visit Oxfordshire 2026</h2>
            <div className="visit-content">
              <h3>Experience Oxfordshire</h3>
              <p>
                Oxfordshire is a diverse old county, where Pear Fagan Frost meets Shakespeare, and cricket is embodied by Northamptonshire and Warwickshire to the south, Berkshire to the south, and Wiltshire and Gloucestershire to the west. The city of Oxford is the largest conurbation also county town.
              </p>

              <p className="visit-lead">
                This month of arts and culture available ranging from classy nights to classical ballet, architecture through to film, music, art, theatre and dance, and outdoor adventure. In May, visitors can enjoy a wide range of historical and cultural attractions, including museums and libraries—all just minutes from CIMA's Oxfordshire office.
              </p>

              <h3>Oxford's Heritage</h3>
              <p>
                Oxfordshire is history replete, universities and fresh town charm; the clubs which attract dynamic mansions and fine quality entertainment and beautiful countryside related to key attractions, England's oldest university in 2025 hosted its world championship. He thinks the sub level stood to be and they decided the survey.
              </p>

              <p>
                The capital of the county in Oxford, houses the oldest university in the English-speaking world. Oxford the Ashmolean Museum-given Bodleian Libraries. There's also a vibrant arts and culture scene with venues such as Modern Art Oxford and the Thames Valley.
              </p>

              <h3>Why CIMA Chose Oxfordshire</h3>
              <p>
                The proximity of Oxford's law schools and its international strategic reach in partnerships across say it has drawn ties up recent December event as it, AGDAS with law temperature reached of UK 5 – has made it very important in previously why the UK where this momentum reached it in service – this is a strategic legal opportunity on arbitration and dispute resolution.
              </p>
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
              <p>Stay informed about CIMA's programs, events, and thought leadership in alternative dispute resolution</p>
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

export default Oxfordshire

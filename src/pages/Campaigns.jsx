import React from 'react'
import { Users, BookOpen, Award } from 'lucide-react'
import './CommonPages.css'

const Campaigns = () => {
  const faqs = [
    "Is it for junior or mid-level career lawyers, CPD seekers",
    "Can I based at CiArb in believe as mediator?",
    "What will I learn? How to draft an arbitration clause? How should ADR?",
    "Do I need a law degree? Where do I get the curriculum?",
    "What are the advantages of using arbitration and why would one use?",
    "What are the quality of education obtained from such an ADR institution?",
    "Can this mediate conflicts involving an individual? Can the institution handle?",
    "Does CIMA in Ghana meet with other similar members? Where?",
    "How does CIMA fit in the profession together and can they know?",
    "I had a case in another dispute but had CiArb?",
    "Who is membership for and from where will can I join?",
    "Do I have to see how LCIA got the recognition?",
    "Do I get info on case law after mediation?",
    "How does the future trend the new-coming generation?",
    "How do you apply the three ADR in a court case at different dates?",
    "What happens to a case who did not consider a complaint if made in world wide?",
    "Do I want to be an ADR officer?",
    "Do you know any good law firm or individuals for mediation or trust in court?",
    "What if you reach on it use a consumer it can't reach other?",
    "If I'm teaching can we have the career option?"
  ]

  return (
    <div className="common-page">
      {/* Hero Section */}
      <section className="page-hero campaigns-hero">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1 className="page-title">Campaigns</h1>
        </div>
      </section>

      {/* Mission Statement with Image */}
      <section className="content-section">
        <div className="container">
          <div className="campaign-mission">
            <h2>We're fueling Arbitration and Mediation in Africa, Asia and Latin America</h2>
            
            <div className="campaign-stats">
              <div className="campaign-stat">
                <div className="stat-number">150+</div>
                <div className="stat-label">Partners</div>
              </div>
              <div className="campaign-stat">
                <div className="stat-number">1300+</div>
                <div className="stat-label">Trained Lawyers</div>
              </div>
              <div className="campaign-stat">
                <div className="stat-number">54+</div>
                <div className="stat-label">AI Agents</div>
              </div>
            </div>

            {/* Split Image Section */}
            <div className="campaign-image-split">
              <div className="split-image-item">
                <img 
                  src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=2084" 
                  alt="Team collaboration"
                />
              </div>
              <div className="split-image-item">
                <img 
                  src="https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?q=80&w=2069" 
                  alt="Professional workspace"
                />
              </div>
            </div>

            <div className="campaign-message">
              <h3>What Trainers Say</h3>
              <p>
                "As Law Professors and Practitioners at Universities and Professional Institutes, we have a high sense of urgency in bringing the next generation of highly educated ADR practitioners who practice conflict resolution through research. We have joined CIMA because it helps us access professional recognition and credibility through a globally recognized professional grade."
              </p>
              
              <div className="trainer-profile">
                <div className="trainer-image">
                  <img 
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400" 
                    alt="Annanto Dabo"
                  />
                </div>
                <div className="trainer-info">
                  <h4>Annanto Dabo</h4>
                  <p>ADR Lecturer, [Institution]</p>
                </div>
              </div>
            </div>

            <div className="campaign-cta-section">
              <p className="cta-label">CIMA provides...</p>
              <a href="https://cimalearn.thecima.org" className="btn-campaign-primary" target="_blank" rel="noreferrer">
                Career Clarity →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="faqs-section">
        <div className="container">
          <h2 className="faqs-title">FAQs</h2>
          <p className="faqs-subtitle">
            Everything you need to know about CIMA and our ADR training programs
          </p>
          
          <div className="faqs-list">
            {faqs.map((faq, index) => (
              <div key={index} className="faq-item">
                <div className="faq-question">
                  <span className="faq-icon">Q</span>
                  <p>{faq}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="faqs-cta">
            <p>Still have questions? We're here to help</p>
            <a href="mailto:info@thecima.org" className="btn-faqs">Contact Us</a>
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

export default Campaigns

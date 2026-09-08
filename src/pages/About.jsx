import React, { useEffect, useState } from 'react'
import { Award, Globe, Users, TrendingUp } from 'lucide-react'
import './CommonPages.css'
import oxfordOfficeImage from '../../gallery/governance/oxford.jpeg'

const About = () => {
  const [statsCounted, setStatsCounted] = useState(false)

  useEffect(() => {
    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !statsCounted) {
          setStatsCounted(true)
          animateCounters()
        }
      })
    }

    const observer = new IntersectionObserver(observerCallback, {
      threshold: 0.3
    })

    const statsSection = document.querySelector('.stats-section')
    if (statsSection) {
      observer.observe(statsSection)
    }

    return () => {
      if (statsSection) {
        observer.unobserve(statsSection)
      }
    }
  }, [statsCounted])

  const animateCounters = () => {
    const counters = [
      { id: 'about-stat-1', target: 33, suffix: '+' },
      { id: 'about-stat-2', target: 500, suffix: '+' },
      { id: 'about-stat-3', target: 100, suffix: '+' },
      { id: 'about-stat-4', target: 3, suffix: ' Levels' }
    ]

    counters.forEach((counter) => {
      const element = document.getElementById(counter.id)
      if (!element) return

      let current = 0
      const increment = counter.target / 50
      const duration = 2000
      const stepTime = duration / 50

      const timer = setInterval(() => {
        current += increment
        if (current >= counter.target) {
          element.textContent = counter.target + counter.suffix
          clearInterval(timer)
        } else {
          element.textContent = Math.floor(current) + counter.suffix
        }
      }, stepTime)
    })
  }
  return (
    <div className="page">
      <section className="page-hero">
        <div className="hero-overlay"></div>
        <img 
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070" 
          alt="About"
          className="hero-image"
        />
        <div className="hero-content">
          <h1 className="hero-title">About CIMA</h1>
          <p className="hero-subtitle">
            Center for International Mediators and Arbitrators
          </p>
        </div>
      </section>

      <section className="page-content">
        <div className="container">
          <div className="office-showcase">
            <h2>CIMA International Program Office</h2>
            <p className="section-description">
              Our International Program Office is located at the prestigious Oxford Science Park in Oxfordshire, United Kingdom—a hub of innovation and excellence.
            </p>
            <div className="office-image-container">
              <img 
                src={oxfordOfficeImage} 
                alt="CIMA International Program Office Building at Oxford Science Park" 
                className="office-image"
              />
            </div>
          </div>

          <div className="about-intro">
            <h2>Mission</h2>
            <p className="lead-text">
              Our mission is to advance the global practice of Alternative Dispute Resolution (ADR) by establishing rigorous professional standards, accrediting world-class training programs, and certifying an elite roster of dispute resolution practitioners. Through international collaboration, statutory integration, and absolute commitment to ethical integrity, we empower commercial, public, and private entities worldwide to resolve conflicts with speed, fairness, and finality.
            </p>
          </div>

          <div className="about-intro">
            <h2>Vision</h2>
            <p className="lead-text">
              Our vision is to be recognized as one of the world's premier, self-governing international authority in Alternative Dispute Resolution (ADR), setting global standards of excellence, issuing elite professional credentials, and shaping the future of cross-border dispute resolution in 193 jurisdictions.
            </p>
          </div>

          <div className="mission-section">
            <div className="mission-content">
              <h2>How our Global Vision and Mission Work Together</h2>
              <p>
                <strong>Where CIMA is going:</strong> Our vision defines the destination—becoming the premier, self-governing international authority that sets the rules and benchmarks global ADR excellence.
              </p>
              <p>
                <strong>How CIMA gets there:</strong> Our mission outlines the daily execution—training, setting standards, auditing and accrediting institutions, certifying elite practitioners, and enforcing legal and ethical excellence across its global network.
              </p>
            </div>
          </div>

          <div className="stats-section">
            <div className="stat-card">
              <div className="stat-icon">
                <Globe size={28} />
              </div>
              <div className="stat-number" id="about-stat-1">0+</div>
              <div className="stat-label">Jurisdictions with Members</div>
            </div>

            <div className="stat-card">
              <div className="stat-icon">
                <Users size={28} />
              </div>
              <div className="stat-number" id="about-stat-2">0+</div>
              <div className="stat-label">Professionals Trained</div>
            </div>

            <div className="stat-card">
              <div className="stat-icon">
                <TrendingUp size={28} />
              </div>
              <div className="stat-number" id="about-stat-3">0+</div>
              <div className="stat-label">Expert Instructors</div>
            </div>

            <div className="stat-card">
              <div className="stat-icon">
                <Award size={28} />
              </div>
              <div className="stat-number" id="about-stat-4">0 Levels</div>
              <div className="stat-label">Certification Programs</div>
            </div>
          </div>

          <div className="values-section">
            <h2>Our Oxfordshire Values</h2>
            <p className="section-description">
              CIMA is anchored on the Oxfordshire values. These values guide our global governance, standard-setting, training and the professional conduct of every certified CIMA practitioner worldwide.
            </p>
            <div className="values-grid">
              <div className="value-card">
                <h3>Rigorous Excellence</h3>
                <p>
                  We maintain the highest standards of professional competence. From the strict auditing of Oxfordshire training, to the demanding qualifications required for our Fellowships, we ensure the CIMA designation always signifies elite, world-class expertise.
                </p>
              </div>

              <div className="value-card">
                <h3>Independence & Neutrality</h3>
                <p>
                  We protect the absolute impartiality of the dispute resolution process. We operate free from external commercial, political, or institutional influence, ensuring that our panels, rules, and adjudicative processes remain fair to all parties.
                </p>
              </div>

              <div className="value-card">
                <h3>Integrity</h3>
                <p>
                  We demand ethical transparency in everything we do. We hold our institution and our certified neutrals to a strict, enforceable code of ethics, ensuring accountability, preventing conflicts of interest, and preserving the public and judicial trust.
                </p>
              </div>

              <div className="value-card">
                <h3>Global Inclusivity & Portability</h3>
                <p>
                  We build bridges across diverse legal jurisdictions and cultural landscapes. Through our international network, we champion ADR practices that are globally respected, regionally adaptable, and seamlessly portable across borders.
                </p>
              </div>

              <div className="value-card">
                <h3>Innovation in Resolution</h3>
                <p>
                  We proactively adapt to the evolving nature of global conflict. We embrace modern digital dispute mechanisms, evolving commercial realities, and forward-thinking technologies to ensure disputes are resolved with maximum efficiency, speed, and finality.
                </p>
              </div>
            </div>
          </div>

          <div className="values-section">
            <h2>Strategic Goals</h2>
            <div className="values-grid">
              <div className="value-card">
                <h3>Goal 1: Establish Institutional Autonomy & Governance Excellence</h3>
                <p>
                  Separate within 3 years regulatory oversight from educational delivery, ensuring the highest level of standard-setting.
                </p>
                <ul style={{textAlign: 'left', marginTop: '10px'}}>
                  <li>Codify and publish the official CIMA International Arbitration & Mediation Rules to serve as an open-source, contract-ready framework for commercial disputes globally.</li>
                  <li>Convene an independent CIMA ADR Standards Council by 2027, composed of external global legal scholars, retired justices, and international corporate counsel to oversee all credentialing frameworks.</li>
                </ul>
              </div>

              <div className="value-card">
                <h3>Goal 2: Scale the Global Accreditation Ecosystem</h3>
                <p>
                  Transition by 2029 from a training provider to an accrediting body that benchmarks external ADR programs worldwide.
                </p>
                <ul style={{textAlign: 'left', marginTop: '10px'}}>
                  <li>Launch the CIMA Qualifying Assessment Program (QAP) 2026, establishing a formal framework to audit and accredit universities, law schools, and domestic ADR centers.</li>
                  <li>Expand CIMA's global footprint by embedding this institutional accreditation model across all 33 regional desks by 2028.</li>
                </ul>
              </div>

              <div className="value-card">
                <h3>Goal 3: Achieve Peer Alignment and Global Portability</h3>
                <p>
                  Secure high-level international recognition, ensuring that CIMA post-nominals (ACIMArb, MCIMArb, FCIMArb) grant frictionless professional mobility.
                </p>
                <ul style={{textAlign: 'left', marginTop: '10px'}}>
                  <li>Align CIMA's mediation curricula with the International Mediation Institute (IMI) guidelines to achieve reciprocal program recognition.</li>
                  <li>Secure institutional membership within the International Federation of Commercial Arbitration Institutions (IFCAI) and pursue observer status with UNCITRAL Working Groups.</li>
                </ul>
              </div>

              <div className="value-card">
                <h3>Goal 4: Drive Statutory Integration and Court-Connected Recognition</h3>
                <p>
                  Anchor CIMA's panel of neutrals into the statutory legal frameworks of core operating jurisdictions, particularly across Africa, Latin America and Asia.
                </p>
                <ul style={{textAlign: 'left', marginTop: '10px'}}>
                  <li>Establish formal partnerships with national judiciaries (e.g., the Judicial Service of Ghana under the ADR Act) to fast-track CIMA Fellows onto court-annexed rosters.</li>
                  <li>Campaign to position CIMA as the default appointing authority in state-level public-private partnership (PPP) and infrastructure procurement contracts.</li>
                </ul>
              </div>

              <div className="value-card">
                <h3>Goal 5: Enforce Public Trust through Accountability and Professional Development</h3>
                <p>
                  Safeguard the integrity of the CIMA credentials by strictly regulating practitioner ethics and continuous education.
                </p>
                <ul style={{textAlign: 'left', marginTop: '10px'}}>
                  <li>Implement a mandatory, audited Continuous Professional Development (CPD) tracking system required for annual credential renewal.</li>
                  <li>Empower an autonomous Disciplinary and Ethics Board with a transparent, public mechanism to investigate complaints and enforce sanctions against professional malpractice.</li>
                  <li>Ensure periodic internal board review.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About

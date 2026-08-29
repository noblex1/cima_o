import React, { useEffect, useState } from 'react'
import { Award, Globe, Users, TrendingUp } from 'lucide-react'
import './CommonPages.css'

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
            Empowering ADR professionals across 33+ jurisdictions worldwide
          </p>
        </div>
      </section>

      <section className="page-content">
        <div className="container">
          <div className="about-intro">
            <h2>Leading ADR Training & Certification Organization</h2>
            <p className="lead-text">
              The Center for International Mediators and Arbitrators (CIMA), headquartered in Oxford and Accra, 
              is dedicated to empowering lawyers, ADR practitioners, and students through internationally 
              benchmarked training and certification. With members in more than 33 jurisdictions, we provide 
              AI-driven simulations, thought-leadership events, practical mock proceedings, and comprehensive 
              professional development programs.
            </p>
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
            <h2>Our Core Services</h2>
            <div className="values-grid">
              <div className="value-card">
                <h3>Training & Certification</h3>
                <p>
                  Professional ADR courses, executive training, sector-specific programs, and certification 
                  at Associate (ACIMArb), Member (MCIMArb), and Fellowship (FCIMArb) levels.
                </p>
              </div>

              <div className="value-card">
                <h3>Membership & Recognition</h3>
                <p>
                  Individual and institutional membership programs providing professional standing, 
                  roster inclusion, accreditation, and global recognition.
                </p>
              </div>

              <div className="value-card">
                <h3>Rules & Publications</h3>
                <p>
                  Arbitration rules, practice manuals, journals, policy briefs, research reports, 
                  and comprehensive digital knowledge resources.
                </p>
              </div>

              <div className="value-card">
                <h3>Simulations & Research</h3>
                <p>
                  Mock arbitrations, mediation simulations, AI-driven training platforms, and 
                  advanced research services for practitioners and institutions.
                </p>
              </div>
            </div>
          </div>

          <div className="mission-section">
            <div className="mission-content">
              <h2>Our Mission</h2>
              <p>
                To empower lawyers, ADR practitioners, and students through internationally benchmarked 
                training and certification programs. We are committed to promoting excellence, diversity, 
                and inclusion in alternative dispute resolution while creating rules and frameworks that 
                reflect global realities and remain internationally enforceable. CIMA serves as an Official 
                CPD Provider and training partner to institutions worldwide, fostering the next generation 
                of mediators and arbitrators.
              </p>
            </div>
            <div className="mission-image">
              <img 
                src="https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=2074" 
                alt="Team collaboration"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About

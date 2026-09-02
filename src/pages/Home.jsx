import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Users, Globe, Award, BookOpenCheck, Calendar } from 'lucide-react'
import './Home.css'
import heroImage from '../../assets/LONDON.jpg'
import chinaImage from '../../assets/CHINA-1.jpg'
import accraTwoImage from '../../assets/ACCRA-2.jpg'
import accraOneImage from '../../assets/ACCRA-1.jpg'
import summerSchoolPoster from '../../assets/WhatsApp Image 2026-08-22 at 17.14.01.jpeg'
import asiaAfricaPoster from '../../assets/WhatsApp Image 2026-08-21 at 08.15.32.jpeg'
import certificate1 from '../../assets/WhatsApp Image 2026-08-25 at 18.29.53.jpeg'
import summerSchoolBrochure from '../../assets/2026 CIMA Summer School (2) (1).pdf'
import asiaAfricaBrochure from '../../assets/Asia-Africa Mock Arbitration Flyer (1).pdf'
import logo1 from '../../assets/trusted/trustedby/AAA.png'
import logo2 from '../../assets/trusted/trustedby/AF BAR.png'
import logo3 from '../../assets/trusted/trustedby/GBA.webp'
import logo4 from '../../assets/trusted/trustedby/HARVARD.webp'
import logo5 from '../../assets/trusted/trustedby/images.jfif'
import logo6 from '../../assets/trusted/trustedby/LAW SOCIETY.png'
import logo7 from '../../assets/trusted/trustedby/LCIA.png'
import logo8 from '../../assets/trusted/trustedby/LSK.png'
import logo9 from '../../assets/trusted/trustedby/OXFORD U.webp'
import logo10 from '../../assets/trusted/trustedby/TAS.png'
import iainSharpImage from '../../assets/ian.jpeg'
import amandaLeeImage from '../../assets/lee.jpeg'
import accreditImage from '../../assets/accredit.jpeg'
import businessFlyer from '../../assets/business.jpeg'
import iccLogo from '../../assets/arbitration-logos/icc-logo.png'
import lciaLogo from '../../assets/arbitration-logos/lcia-logo.jpg'
import siacLogo from '../../assets/arbitration-logos/siac-logo.jpg'
import hkiacLogo from '../../assets/arbitration-logos/hkiac-logo.png'
import sccLogo from '../../assets/arbitration-logos/scc-logo.png'
import icdrLogo from '../../assets/arbitration-logos/icdr-logo.png'

const heroImages = [
  { source: heroImage, alt: 'Professional business meeting in London' },
  { source: chinaImage, alt: 'Professional business meeting in China' },
  { source: accraTwoImage, alt: 'Professional business meeting in Accra' },
  { source: accraOneImage, alt: 'Professional business meeting in Accra' },
]

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)
  const [statsCounted, setStatsCounted] = useState(false)

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    const updateMotionPreference = () => setPrefersReducedMotion(mediaQuery.matches)

    updateMotionPreference()
    mediaQuery.addEventListener('change', updateMotionPreference)
    return () => mediaQuery.removeEventListener('change', updateMotionPreference)
  }, [])

  useEffect(() => {
    if (isPaused || prefersReducedMotion) return undefined

    const timer = window.setInterval(() => {
      setCurrentSlide((slide) => (slide + 1) % heroImages.length)
    }, 5000)

    return () => window.clearInterval(timer)
  }, [isPaused, prefersReducedMotion])

  // Counter animation for statistics
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

    const statsSection = document.querySelector('.statistics')
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
      { id: 'stat-1', target: 1500, suffix: '+' },
      { id: 'stat-2', target: 33, suffix: '+' },
      { id: 'stat-3', target: 75, suffix: '+' },
      { id: 'stat-4', target: 193, suffix: '+' }
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
    <div className="home">
      {/* Hero Section */}
      <section
        className="hero"
        aria-label="CIMA highlights"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onFocus={() => setIsPaused(true)}
        onBlur={() => setIsPaused(false)}
      >
        <div
          className="hero-slides"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          aria-live="polite"
        >
          {heroImages.map((image, index) => (
            <img
              key={image.source}
              src={image.source}
              alt={image.alt}
              className="hero-image"
              aria-hidden={index !== currentSlide}
            />
          ))}
        </div>
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              Advancing Arbitration and Mediation Worldwide
            </h1>
            <p className="hero-subtext">Training • Membership • Accreditation • Global Programmes</p>
            <p className="hero-subtitle">
            </p>
            <p className="hero-description">
            </p>
            <div className="hero-buttons">
              <a href="https://cimalearn.thecima.org" className="btn-hero-primary" target="_blank" rel="noreferrer">
                Explore Training Programs
              </a>
              <a href="https://cimaai.thecima.org" className="btn-hero-secondary" target="_blank" rel="noreferrer">
                Try CIMA AI
              </a>
            </div>
          </div>
        </div>
        <div className="hero-controls" aria-label="Hero image controls">
          {heroImages.map((image, index) => (
            <button
              key={image.source}
              type="button"
              className={`hero-dot${index === currentSlide ? ' active' : ''}`}
              aria-label={`Show hero image ${index + 1}`}
              aria-current={index === currentSlide ? 'true' : undefined}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="upcoming-events">
        <div className="container">
          <div className="events-header">
            <div>
              <h2>Upcoming Events</h2>
              <p>Join our training programs, mock proceedings, and thought-leadership events</p>
            </div>
            <Link to="/events" className="view-all">View all events</Link>
          </div>

          <div className="events-grid">
            <div className="event-card">
              <div className="event-image">
                <img 
                  src={summerSchoolPoster} 
                  alt="CIMA Summer School"
                />
              </div>
              <div className="event-content">
                <div className="event-date">
                  <Calendar size={18} />
                  <span>26 Aug - 4 Sept, 2026</span>
                </div>
                <h3>2026 CIMA Summer School on International Arbitration</h3>
                <div className="event-actions">
                  <Link to="/events/summer-school-2026" className="btn-event-register">
                    Register
                  </Link>
                  <a href={summerSchoolBrochure} download="CIMA_Summer_School_2026_Brochure.pdf" className="btn-event-download">
                    Download Brochure
                  </a>
                </div>
              </div>
            </div>

            <div className="event-card">
              <div className="event-image">
                <img 
                  src={asiaAfricaPoster} 
                  alt="Asia-Africa Mock Arbitration Programme"
                />
              </div>
              <div className="event-content">
                <div className="event-date">
                  <Calendar size={18} />
                  <span>2026</span>
                </div>
                <h3>Asia-Africa Mock Arbitration Programme</h3>
                <div className="event-actions">
                  <a href="https://cimalearn.thecima.org" target="_blank" rel="noreferrer" className="btn-event-register">
                    Register
                  </a>
                  <a href={asiaAfricaBrochure} download="CIMA_Asia_Africa_Mock_Arbitration_Flyer.pdf" className="btn-event-download">
                    Download Brochure
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="statistics">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-item">
              <div className="stat-number" id="stat-1">0+</div>
              <div className="stat-label">Professionals Trained</div>
            </div>
            <div className="stat-item">
              <div className="stat-number" id="stat-2">0+</div>
              <div className="stat-label">Member Jurisdictions</div>
            </div>
            <div className="stat-item">
              <div className="stat-number" id="stat-3">0+</div>
              <div className="stat-label">Expert Instructors</div>
            </div>
            <div className="stat-item">
              <div className="stat-number" id="stat-4">0+</div>
              <div className="stat-label">Countries Covered</div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="why-choose">
        <div className="container">
          <div className="section-header">
            <h2>The Oxfordshire Advantage</h2>
            <p>Leverage Oxfordshire's global connection and knowledge ecosystem.</p>
          </div>

          <div className="features-grid">
            <div className="feature-item">
              <Award size={28} />
              <h3>Global Certification</h3>
              <p>Internationally benchmarked training and credentials recognized across 33+ jurisdictions</p>
            </div>

            <div className="feature-item">
              <Users size={28} />
              <h3>World-Class Faculty</h3>
              <p>Learn from experienced ADR professionals, educators, and practitioners from around the world</p>
            </div>

            <div className="feature-item">
              <BookOpenCheck size={28} />
              <h3>Practiced-Based Learning</h3>
              <p>Build practical skills through simulations, mock proceedings, and hands-on ADR training</p>
            </div>

            <div className="feature-item">
              <Globe size={28} />
              <h3>Global Network</h3>
              <p>Connect with ADR professionals and institutions across a growing international community</p>
            </div>
          </div>
        </div>
      </section>

      {/* Global Arbitration Resource Hub */}
      <section className="resource-hub">
        <div className="container">
          <div className="section-header-center">
            <h2>Global Arbitration Resource Hub</h2>
            <p>A curated gateway to leading arbitration institutions and professional resources.</p>
          </div>

          <div className="institutions-showcase">
            <a href="https://iccwbo.org/dispute-resolution/dispute-resolution-services/icc-international-court-of-arbitration/" target="_blank" rel="noopener noreferrer" className="institution-logo-card">
              <img src={iccLogo} alt="ICC International Court of Arbitration" />
            </a>
            <a href="https://www.lcia.org/" target="_blank" rel="noopener noreferrer" className="institution-logo-card">
              <img src={lciaLogo} alt="LCIA" />
            </a>
            <a href="https://siac.org.sg/" target="_blank" rel="noopener noreferrer" className="institution-logo-card">
              <img src={siacLogo} alt="SIAC" />
            </a>
            <a href="https://www.hkiac.org/" target="_blank" rel="noopener noreferrer" className="institution-logo-card">
              <img src={hkiacLogo} alt="HKIAC" />
            </a>
            <a href="https://sccarbitrationinstitute.se/" target="_blank" rel="noopener noreferrer" className="institution-logo-card">
              <img src={sccLogo} alt="SCC Arbitration Institute" />
            </a>
            <a href="https://www.icdr.org/" target="_blank" rel="noopener noreferrer" className="institution-logo-card">
              <img src={icdrLogo} alt="ICDR" />
            </a>
          </div>

          <Link to="/arbitration-resources" className="view-all-resources">
            View All Resources <ArrowRight size={18} />
          </Link>

          <div className="resource-hub-disclaimer">
            <p><strong>Disclaimer:</strong> External resources are provided for professional and educational reference. Inclusion does not imply affiliation, partnership or endorsement by CIMA or the organisations listed.</p>
          </div>
        </div>
      </section>

      {/* Image Banner */}
      <section className="image-banner">
        <img 
          src="https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=2074" 
          alt="Modern office collaboration"
          className="banner-image"
        />
      </section>

      {/* Latest News & Events */}
      <section className="news-events">
        <div className="container">
          <div className="news-events-header">
            <div>
              <h2>Latest News</h2>
              <p>Stay updated with CIMA's training programs and professional development initiatives</p>
            </div>
            <Link to="/news" className="view-all">View all news</Link>
          </div>

          <div className="news-grid">
            <article className="news-card">
              <img 
                src="https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=2069" 
                alt="News"
              />
              <div className="news-content">
                <span className="news-date">August 15, 2026</span>
                <h3>CIMA Arbitration and Mediation Rules 2025 Published</h3>
                <p>New comprehensive rules blending international best practice with local pragmatism for global enforceability.</p>
                <Link to="/news/1" className="read-more">Read more <ArrowRight size={16} /></Link>
              </div>
            </article>

            <article className="news-card">
              <img 
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070" 
                alt="News"
              />
              <div className="news-content">
                <span className="news-date">August 10, 2026</span>
                <h3>CIMA Becomes Official CPD Provider to Law Society of Kenya</h3>
                <p>Recognition expands professional development opportunities for legal practitioners across Kenya.</p>
                <Link to="/news/2" className="read-more">Read more <ArrowRight size={16} /></Link>
              </div>
            </article>

            <article className="news-card">
              <img 
                src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?q=80&w=2070" 
                alt="News"
              />
              <div className="news-content">
                <span className="news-date">July 28, 2026</span>
                <h3>2026 CIMA Summer School Announced</h3>
                <p>Comprehensive training program brings together ADR professionals from across the globe for intensive certification courses.</p>
                <Link to="/news/3" className="read-more">Read more <ArrowRight size={16} /></Link>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Global Professional Network */}
      <section className="institutional-network">
        <div className="container">
          <div className="section-header-center">
            <h2>TRUSTED BY PROFESSIONALS WORLDWIDE</h2>
            <p>Our growing community includes professionals affiliated with leading institutions and organisations worldwide.</p>
          </div>
          <div className="logos-grid">
            <div className="logo-card">
              <img src={logo1} alt="Partner organization" />
            </div>
            <div className="logo-card">
              <img src={logo2} alt="Partner organization" />
            </div>
            <div className="logo-card">
              <img src={logo3} alt="Partner organization" />
            </div>
            <div className="logo-card">
              <img src={logo4} alt="Partner organization" />
            </div>
            <div className="logo-card">
              <img src={logo5} alt="Partner organization" />
            </div>
            <div className="logo-card">
              <img src={logo6} alt="Partner organization" />
            </div>
            <div className="logo-card">
              <img src={logo7} alt="Partner organization" />
            </div>
            <div className="logo-card">
              <img src={logo8} alt="Partner organization" />
            </div>
            <div className="logo-card">
              <img src={logo9} alt="Partner organization" />
            </div>
            <div className="logo-card">
              <img src={logo10} alt="Partner organization" />
            </div>
          </div>
          <div className="logos-disclaimer">
            <p>Affiliations are stated for identification only and do not imply institutional endorsement, accreditation, sponsorship or partnership with CIMA.</p>
          </div>
        </div>
      </section>

      {/* Global Arbitrator Section */}
      <section className="global-arbitrator">
        <div className="container">
          <div className="section-header-center">
            <h2>Global Arbitrator Spotlight</h2>
            <p>A CIMA weekly profile featuring leading arbitrators, mediators and neutrals shaping global dispute resolution.</p>
          </div>

          <div className="arbitrator-grid">
            {/* Iain Sharp Profile */}
            <div className="arbitrator-card">
              <div className="arbitrator-image">
                <img 
                  src={iainSharpImage} 
                  alt="Iain Sharp FCIArb, FCIMArb"
                />
              </div>
              <div className="arbitrator-content">
                <div>
                  <h3>Iain Sharp</h3>
                  <p className="arbitrator-title">FCIArb, FCIMArb</p>
                </div>
                <p className="arbitrator-firm">Hill Dickinson LLP</p>
                <p className="arbitrator-preview">
                  An English solicitor and Partner at Hill Dickinson in Singapore, specialising in international commercial arbitration, international trade and commodities, energy and natural resources.
                </p>
                <Link to="/arbitrator/iain-sharp" className="btn-read-more">
                  Read More <ArrowRight size={18} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Student Success Stories */}
      <section className="success-stories">
        <div className="container">
          <div className="section-header-center">
            <h2>Student Success Stories</h2>
            <p>Real journeys from CIMA students achieving professional excellence in arbitration and mediation</p>
          </div>
          
          <div className="success-stories-grid">
            {/* Amanda Lee Success Story Card */}
            <div className="success-story-card">
              <div className="success-story-image">
                <img 
                  src={amandaLeeImage} 
                  alt="Amanda Lee ACIMArb"
                />
              </div>
              <div className="success-story-content">
                <div>
                  <h3>Amanda Lee</h3>
                  <p className="success-qualification">ACIMArb</p>
                </div>
                <p className="success-location">Singapore</p>
                <p className="success-preview">
                  Amanda Lee's CIMA journey began with one lecture. After hearing CIMA Fellow Iain Sharp speak at the 2026 CIMA Winter Academy, she took the next step and is now ACIMArb qualified.
                </p>
                <Link to="/success-story/amanda-lee" className="btn-read-more">
                  Read Story <ArrowRight size={18} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Career Opportunities Teaser */}
      <section className="opportunities-teaser">
        <div className="container">
          <div className="opportunities-teaser-content">
            <div className="opportunities-flyer">
              <img src={businessFlyer} alt="Business Development Volunteers - Join CIMA" />
            </div>
            <div className="opportunities-teaser-actions">
              <Link to="/opportunities" className="btn-view-details">
                View Details <ArrowRight size={20} />
              </Link>
              <a href="mailto:info@thecima.org?subject=Business Development Volunteer Application" className="btn-apply-now">
                Apply Now
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="final-cta">
        <div className="container">
          <div className="final-cta-wrapper">
            <div className="final-cta-image">
              <img src={accreditImage} alt="CIMA Accreditation" />
            </div>
            <div className="final-cta-content">
              <h2>Apply for CIMA Accreditation</h2>
              <p>Become a CIMA-Accredited ADR Center.</p>
              <div className="final-cta-buttons">
                <a href="mailto:info@thecima.org" className="btn-cta-primary">Apply Now: info@thecima.org</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home

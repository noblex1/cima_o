import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Users, Globe, Award, BookOpenCheck, Calendar } from 'lucide-react'
import './Home.css'
import heroImage from '../../assets/LONDON.jpg'
import chinaImage from '../../assets/CHINA-1.jpg'
import accraTwoImage from '../../assets/ACCRA-2.jpg'
import accraOneImage from '../../assets/ACCRA-1.jpg'
import logo1 from '../../assets/trusted/1.jpeg'
import logo2 from '../../assets/trusted/WhatsApp-Image-2026-05-05-at-08.45.jpg'
import logo3 from '../../assets/trusted/WhatsApp-Image-2026-05-12-at-12.34.07.jpeg'
import logo4 from '../../assets/trusted/WhatsApp-Image-2026-05-12-at-12.37.17.jpeg'
import logo5 from '../../assets/trusted/WhatsApp-Image-2026-05-12-at-12.42.17.jpeg'
import logo6 from '../../assets/trusted/WhatsApp-Image-2026-05-29-at-09.12.27.jpeg'

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
              Empowering ADR Professionals Worldwide<br />
            </h1>
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

      {/* Services Overview */}
      <section className="services-overview">
        <div className="container">
          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon">
                <svg viewBox="0 0 64 64" width="40" height="40" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <rect x="7" y="6" width="50" height="39" rx="4" />
                  <circle cx="32" cy="22" r="6" />
                  <path d="M20 41c0-6 4.5-10 12-10s12 4 12 10" />
                  <path d="M32 45v10M23 55h18" />
                </svg>
              </div>
              <h3>Live Training & Certification</h3>
              <p>Professional ADR courses, executive training, and certification at Associate, Member, and Fellowship levels.</p>
              <Link to="/arbitration" className="service-link">
                Learn more <ArrowRight size={16} />
              </Link>
            </div>

            <div className="service-card">
              <div className="service-icon">
                <Users size={32} />
              </div>
              <h3>Membership & Recognition</h3>
              <p>Individual and institutional membership, roster inclusion, accreditation, and professional standing.</p>
              <Link to="/mediation" className="service-link">
                Learn more <ArrowRight size={16} />
              </Link>
            </div>

            <div className="service-card">
              <div className="service-icon">
                <Globe size={32} />
              </div>
              <h3>Global Network</h3>
              <p>Join professionals across 33+ countries committed to excellence in alternative dispute resolution.</p>
              <Link to="/about" className="service-link">
                Learn more <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="statistics">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-item">
              <div className="stat-number">500+</div>
              <div className="stat-label">Professionals Trained</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">25+</div>
              <div className="stat-label">Countries Reached</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">100+</div>
              <div className="stat-label">Expert Instructors</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">15+</div>
              <div className="stat-label">Years of Excellence</div>
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
              <p>Internationally benchmarked training and credentials recognized across 33+ countries</p>
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
                <h3>CIMA Becomes Official CPD Provider to Law Society</h3>
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
                  src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=2070" 
                  alt="Conference"
                />
              </div>
              <div className="event-content">
                <div className="event-date">
                  <Calendar size={18} />
                  <span>August - September 2026</span>
                </div>
                <h3>CIMA Summer School on International Arbitration</h3>
                <p>Intensive certification courses for aspiring mediators and arbitrators with AI-driven simulations and practical experience.</p>
                <Link to="/events/1" className="event-link">Learn more <ArrowRight size={16} /></Link>
              </div>
            </div>

            <div className="event-card">
              <div className="event-image">
                <img 
                  src="https://images.unsplash.com/photo-1591115765373-5207764f72e7?q=80&w=2070" 
                  alt="Workshop"
                />
              </div>
              <div className="event-content">
                <div className="event-date">
                  <Calendar size={18} />
                  <span>2026</span>
                </div>
                <h3>CIMA Asia-Africa Mock Arbitration Programme</h3>
                <p>A practical, hands-on training program where participants prepare cases, present arguments, examine evidence, deliberate, and deliver reasoned awards.</p>
                <Link to="/events/2" className="event-link">Learn more <ArrowRight size={16} /></Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Global Professional Network */}
      <section className="institutional-network">
        <div className="container">
          <div className="section-header-center">
            <h2>Trusted by Global Law Firms & International Organizations</h2>
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
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="final-cta">
        <div className="container">
          <div className="final-cta-content">
            <h2>Get Certified | Apply for Accreditation</h2>
            <p>Become a certified fellow (FCIMArb). Gain CIMA recognition for organization, institution or ADR programme.</p>
            <div className="final-cta-buttons">
              <a href="https://cimalearn.thecima.org" className="btn-cta-primary" target="_blank" rel="noreferrer">Explore Programs</a>
              <Link to="/contact" className="btn-cta-secondary">Contact Us</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home

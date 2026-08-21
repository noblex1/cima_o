import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Scale, Users, Globe, Award, TrendingUp, Calendar } from 'lucide-react'
import './Home.css'
import heroImage from '../../assets/LONDON.jpg'
import chinaImage from '../../assets/CHINA-1.jpg'
import accraTwoImage from '../../assets/ACCRA-2.jpg'
import accraOneImage from '../../assets/ACCRA-1.jpg'

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
              Empowering ADR Professionals<br />
              Through Excellence
            </h1>
            <p className="hero-subtitle">
              Internationally benchmarked training, certification, and professional development for mediators and arbitrators worldwide.
            </p>
            <p className="hero-description">
              CIMA is a leading international organization dedicated to training, certifying, and supporting 
              ADR professionals across 33+ countries. We provide world-class education, certification programs, 
              and professional development opportunities for lawyers, arbitrators, mediators, and ADR practitioners.
            </p>
            <div className="hero-buttons">
              <a href="https://cimalearn.thecima.org" className="btn-hero-primary" target="_blank" rel="noreferrer">
                Explore Training Programs
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
                <Scale size={32} />
              </div>
              <h3>Training & Certification</h3>
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
            <h2>Why Choose CIMA</h2>
            <p>Empowering ADR professionals through internationally benchmarked training and certification</p>
          </div>

          <div className="features-grid">
            <div className="feature-item">
              <Award size={28} />
              <h3>International Standards</h3>
              <p>Training and certification programs benchmarked to international best practices and standards</p>
            </div>

            <div className="feature-item">
              <TrendingUp size={28} />
              <h3>AI-Driven Learning</h3>
              <p>Innovative simulations and technology-enhanced training for modern ADR practitioners</p>
            </div>

            <div className="feature-item">
              <Globe size={28} />
              <h3>Global Recognition</h3>
              <p>Professional credentials recognized across 33+ countries with growing international presence</p>
            </div>

            <div className="feature-item">
              <Users size={28} />
              <h3>Practical Experience</h3>
              <p>Mock proceedings, simulations, and hands-on training to build real-world competence</p>
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
                  <span>September 2026</span>
                </div>
                <h3>CIMA Autumn Training Academy</h3>
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
                  <span>October 2026</span>
                </div>
                <h3>Mock Arbitration Proceedings Workshop</h3>
                <p>Practical simulation-based training bridging theory and practice for ADR professionals and students.</p>
                <Link to="/events/2" className="event-link">Learn more <ArrowRight size={16} /></Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="final-cta">
        <div className="container">
          <div className="final-cta-content">
            <h2>Ready to Advance Your ADR Career?</h2>
            <p>Join professionals from 33+ countries and gain internationally recognized ADR certification</p>
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

import React from 'react'
import { Calendar, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import './CommonPages.css'

const News = () => {
  const newsItems = [
    {
      id: 1,
      date: 'August 15, 2026',
      title: 'CIMA Arbitration and Mediation Rules 2025 Published',
      excerpt: 'New comprehensive rules blending international best practice with local pragmatism for global enforceability.',
      image: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=2069',
      category: 'Rules & Regulations'
    },
    {
      id: 2,
      date: 'August 10, 2026',
      title: 'CIMA Becomes Official CPD Provider to Law Society',
      excerpt: 'Recognition expands professional development opportunities for legal practitioners across Kenya.',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070',
      category: 'Partnership'
    },
    {
      id: 3,
      date: 'July 28, 2026',
      title: '2026 CIMA Summer School Announced',
      excerpt: 'Comprehensive training program brings together ADR professionals from across the globe for intensive certification courses.',
      image: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?q=80&w=2070',
      category: 'Training'
    }
  ]

  const upcomingEvents = [
    {
      id: 1,
      date: 'August - September 2026',
      title: 'CIMA Summer School on International Arbitration',
      excerpt: 'Intensive certification courses for aspiring mediators and arbitrators with AI-driven simulations and practical experience.',
      image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=2070',
      link: '/events/1'
    },
    {
      id: 2,
      date: '2026',
      title: 'CIMA Asia-Africa Mock Arbitration Programme',
      excerpt: 'A practical, hands-on training program where participants prepare cases, present arguments, examine evidence, deliberate, and deliver reasoned awards.',
      image: 'https://images.unsplash.com/photo-1591115765373-5207764f72e7?q=80&w=2070',
      link: '/events/2'
    }
  ]

  return (
    <div className="page">
      <section className="page-hero small">
        <div className="hero-overlay"></div>
        <img 
          src="https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=2070" 
          alt="News"
          className="hero-image"
        />
        <div className="hero-content">
          <h1 className="hero-title">News & Events</h1>
          <p className="hero-subtitle">
            Stay updated with CIMA's latest developments and upcoming programs
          </p>
        </div>
      </section>

      {/* Latest News Section */}
      <section className="page-content news-section">
        <div className="container">
          <div className="section-header-news">
            <div>
              <h2>Latest News</h2>
              <p>Stay informed about CIMA's training programs and professional development initiatives</p>
            </div>
          </div>

          <div className="news-grid-enhanced">
            {newsItems.map((item) => (
              <article key={item.id} className="news-card-enhanced">
                <div className="news-card-image">
                  <img src={item.image} alt={item.title} />
                  <span className="news-category">{item.category}</span>
                </div>
                <div className="news-card-content">
                  <div className="news-card-date">
                    <Calendar size={16} />
                    <span>{item.date}</span>
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.excerpt}</p>
                  <Link to={`/news/${item.id}`} className="news-card-link">
                    Read more <ArrowRight size={16} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events Section */}
      <section className="page-content events-section-alt">
        <div className="container">
          <div className="section-header-news">
            <div>
              <h2>Upcoming Events</h2>
              <p>Join our training programs, mock proceedings, and thought-leadership events</p>
            </div>
            <Link to="/events" className="view-all-link">View all events</Link>
          </div>

          <div className="events-grid-enhanced">
            {upcomingEvents.map((event) => (
              <div key={event.id} className="event-card-enhanced">
                <div className="event-card-image">
                  <img src={event.image} alt={event.title} />
                </div>
                <div className="event-card-content">
                  <div className="event-card-date">
                    <Calendar size={18} />
                    <span>{event.date}</span>
                  </div>
                  <h3>{event.title}</h3>
                  <p>{event.excerpt}</p>
                  <Link to={event.link} className="event-card-link">
                    Learn more <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="news-cta-section">
        <div className="container">
          <div className="news-cta-content">
            <h2>Stay Connected with CIMA</h2>
            <p>Subscribe to receive the latest news, event announcements, and insights from the world of alternative dispute resolution</p>
            <div className="news-cta-form">
              <input type="email" placeholder="Enter your email" className="news-cta-input" />
              <button className="news-cta-btn">Subscribe</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default News

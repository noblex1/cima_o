import React from 'react'
import { Calendar, MapPin, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import './CommonPages.css'

const Events = () => {
  const upcomingEvents = [
    {
      id: 1,
      date: 'September 2026',
      title: 'CIMA Autumn Training Academy',
      location: 'Accra, Ghana & Online',
      description: 'Intensive certification courses for aspiring and practicing mediators and arbitrators featuring AI-driven simulations, mock proceedings, and internationally benchmarked training.',
      image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=2070',
      type: 'Training Program'
    },
    {
      id: 2,
      date: 'October 2026',
      title: 'Mock Arbitration Proceedings Workshop',
      location: 'Virtual Event',
      description: 'Practical simulation-based training bridging theory and practice for ADR professionals, law students, and practitioners seeking hands-on experience.',
      image: 'https://images.unsplash.com/photo-1591115765373-5207764f72e7?q=80&w=2070',
      type: 'Workshop'
    },
    {
      id: 3,
      date: 'November 2026',
      title: 'Advanced Mediation Skills Masterclass',
      location: 'Oxford, UK',
      description: 'Elite training for experienced mediators focusing on complex multi-party disputes, cross-cultural mediation, and advanced facilitation techniques.',
      image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2070',
      type: 'Masterclass'
    },
    {
      id: 4,
      date: 'December 2026',
      title: 'CIMA Thought Leadership Conference',
      location: 'Accra, Ghana',
      description: 'Annual conference bringing together ADR practitioners, academics, and policymakers to discuss emerging trends and innovations in alternative dispute resolution.',
      image: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?q=80&w=2070',
      type: 'Conference'
    }
  ]

  return (
    <div className="page">
      <section className="page-hero small">
        <div className="hero-overlay"></div>
        <img 
          src="https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=2012" 
          alt="Events"
          className="hero-image"
        />
        <div className="hero-content">
          <h1 className="hero-title">Events</h1>
          <p className="hero-subtitle">
            Join our training programs, mock proceedings, and thought-leadership events
          </p>
        </div>
      </section>

      <section className="page-content">
        <div className="container">
          <div className="events-list">
            {upcomingEvents.map((event) => (
              <article key={event.id} className="event-item-large">
                <div className="event-item-image">
                  <img src={event.image} alt={event.title} />
                  <span className="event-badge">{event.type}</span>
                </div>
                <div className="event-item-content">
                  <div className="event-meta">
                    <div className="event-meta-item">
                      <Calendar size={18} />
                      <span>{event.date}</span>
                    </div>
                    <div className="event-meta-item">
                      <MapPin size={18} />
                      <span>{event.location}</span>
                    </div>
                  </div>
                  <h2>{event.title}</h2>
                  <p>{event.description}</p>
                  <div className="event-actions">
                    <Link to={`/events/${event.id}`} className="btn-event-primary">
                      Register Now
                    </Link>
                    <Link to={`/events/${event.id}`} className="btn-event-secondary">
                      Learn More <ArrowRight size={16} />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Events

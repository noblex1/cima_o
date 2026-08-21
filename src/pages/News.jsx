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
      excerpt: 'New comprehensive rules blending international best practice with local pragmatism for global enforceability, reflecting the Global South\'s realities.',
      image: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=2069'
    },
    {
      id: 2,
      date: 'August 10, 2026',
      title: 'CIMA Becomes Official CPD Provider to Law Society of Kenya',
      excerpt: 'Official recognition expands professional development opportunities and continuing legal education for legal practitioners across Kenya.',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070'
    },
    {
      id: 3,
      date: 'July 28, 2026',
      title: '2026 CIMA Summer School Announced',
      excerpt: 'Comprehensive training program brings together ADR professionals from across the globe for intensive certification courses and practical simulations.',
      image: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?q=80&w=2070'
    },
    {
      id: 4,
      date: 'July 15, 2026',
      title: 'CIMA Launches AI-Driven Simulation Platform',
      excerpt: 'New technology platform enables enhanced arbitration and mediation training with artificial intelligence-powered scenarios and feedback.',
      image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=2070'
    },
    {
      id: 5,
      date: 'June 30, 2026',
      title: 'Membership Growth Across 33+ Countries',
      excerpt: 'CIMA reports significant expansion in international membership, reflecting growing recognition of professional ADR certification programs.',
      image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=2070'
    },
    {
      id: 6,
      date: 'June 18, 2026',
      title: 'Title Sponsor of MIMAC 2025 Competition',
      excerpt: 'CIMA announced as 2025 Title Sponsor and Training Partner of the MMCS International Maritime Arbitration Competition in the Maldives.',
      image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2070'
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
          <h1 className="hero-title">Latest News</h1>
          <p className="hero-subtitle">
            Stay updated with CIMA training programs and professional development initiatives
          </p>
        </div>
      </section>

      <section className="page-content">
        <div className="container">
          <div className="news-list">
            {newsItems.map((item) => (
              <article key={item.id} className="news-item-large">
                <div className="news-item-image">
                  <img src={item.image} alt={item.title} />
                </div>
                <div className="news-item-content">
                  <div className="news-item-date">
                    <Calendar size={16} />
                    <span>{item.date}</span>
                  </div>
                  <h2>{item.title}</h2>
                  <p>{item.excerpt}</p>
                  <Link to={`/news/${item.id}`} className="read-more">
                    Read full article <ArrowRight size={16} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default News

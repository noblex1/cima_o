import React, { useState } from 'react'
import { X, ZoomIn } from 'lucide-react'
import './CommonPages.css'

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null)
  const [selectedCategory, setSelectedCategory] = useState('all')

  const categories = [
    { id: 'all', name: 'All Photos' },
    { id: 'events', name: 'Events & Training' },
    { id: 'team', name: 'Team & Leadership' },
    { id: 'facilities', name: 'Facilities' }
  ]

  const galleryImages = [
    // CIMA Investiture and Recognition Sokoto 2025 - British Council
    {
      id: 1,
      src: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=2070',
      alt: 'CIMA Training Session',
      category: 'events',
      title: 'Summer School 2025',
      size: 'large'
    },
    {
      id: 2,
      src: 'https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=2069',
      alt: 'Award Ceremony',
      category: 'events',
      title: 'Recognition Ceremony',
      size: 'medium'
    },
    {
      id: 3,
      src: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?q=80&w=2070',
      alt: 'Group Photo',
      category: 'events',
      title: 'Certification Day',
      size: 'medium'
    },
    {
      id: 4,
      src: 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070',
      alt: 'Conference Hall',
      category: 'events',
      title: 'Annual Conference',
      size: 'wide'
    },
    
    // CIMA - Ghana Bar Association
    {
      id: 5,
      src: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=2074',
      alt: 'Speaker Presentation',
      category: 'team',
      title: 'Expert Panel Discussion',
      size: 'medium'
    },
    {
      id: 6,
      src: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=2073',
      alt: 'Leadership Team',
      category: 'team',
      title: 'Leadership Meeting',
      size: 'tall'
    },
    {
      id: 7,
      src: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=2087',
      alt: 'Professional Headshot',
      category: 'team',
      title: 'Board Member',
      size: 'medium'
    },
    {
      id: 8,
      src: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=2069',
      alt: 'Team Collaboration',
      category: 'team',
      title: 'Strategy Session',
      size: 'large'
    },
    {
      id: 9,
      src: 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070',
      alt: 'Virtual Meeting',
      category: 'team',
      title: 'Online Training',
      size: 'medium'
    },
    {
      id: 10,
      src: 'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?q=80&w=2069',
      alt: 'Office Building',
      category: 'facilities',
      title: 'Oxford Science Park',
      size: 'wide'
    },
    {
      id: 11,
      src: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069',
      alt: 'Modern Office',
      category: 'facilities',
      title: 'CIMA Headquarters',
      size: 'medium'
    },
    {
      id: 12,
      src: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=2069',
      alt: 'Training Room',
      category: 'facilities',
      title: 'Training Center',
      size: 'tall'
    },
    {
      id: 13,
      src: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070',
      alt: 'Workspace',
      category: 'facilities',
      title: 'Collaborative Space',
      size: 'medium'
    },
    {
      id: 14,
      src: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070',
      alt: 'Team Workshop',
      category: 'events',
      title: 'Mock Arbitration',
      size: 'large'
    },
    {
      id: 15,
      src: 'https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=2070',
      alt: 'International Event',
      category: 'events',
      title: 'Global ADR Summit',
      size: 'wide'
    },
    {
      id: 16,
      src: 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?q=80&w=2070',
      alt: 'Ghana Flag',
      category: 'facilities',
      title: 'Accra Office',
      size: 'medium'
    }
  ]

  const filteredImages = selectedCategory === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === selectedCategory)

  const openLightbox = (image) => {
    setSelectedImage(image)
    document.body.style.overflow = 'hidden'
  }

  const closeLightbox = () => {
    setSelectedImage(null)
    document.body.style.overflow = 'auto'
  }

  return (
    <div className="common-page">
      {/* Hero Section */}
      <section className="page-hero gallery-hero">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1 className="page-title">Gallery</h1>
          <p className="hero-subtitle">
            Capturing moments from our global ADR community
          </p>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="gallery-section">
        <div className="container">
          {/* Category Filter */}
          <div className="gallery-filters">
            {categories.map((category) => (
              <button
                key={category.id}
                className={`filter-btn ${selectedCategory === category.id ? 'active' : ''}`}
                onClick={() => setSelectedCategory(category.id)}
              >
                {category.name}
              </button>
            ))}
          </div>

          {/* Masonry Grid */}
          <div className="gallery-masonry">
            {filteredImages.map((image) => (
              <div
                key={image.id}
                className={`gallery-item ${image.size}`}
                onClick={() => openLightbox(image)}
              >
                <img src={image.src} alt={image.alt} loading="lazy" />
                <div className="gallery-overlay">
                  <div className="gallery-info">
                    <h3>{image.title}</h3>
                    <div className="zoom-icon">
                      <ZoomIn size={24} />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage && (
        <div className="lightbox" onClick={closeLightbox}>
          <button className="lightbox-close" onClick={closeLightbox}>
            <X size={32} />
          </button>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <img src={selectedImage.src} alt={selectedImage.alt} />
            <div className="lightbox-caption">
              <h3>{selectedImage.title}</h3>
            </div>
          </div>
        </div>
      )}

      {/* Subscribe Section */}
      <section className="subscribe-section">
        <div className="container">
          <div className="subscribe-content">
            <div className="subscribe-text">
              <h3>Stay updated with CIMA</h3>
              <p>Subscribe to receive news, event photos, and updates from our global community</p>
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

export default Gallery

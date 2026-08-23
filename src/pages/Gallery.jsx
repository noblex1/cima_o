import React, { useState } from 'react'
import { X, ZoomIn } from 'lucide-react'
import './CommonPages.css'

// Import all gallery images
import img1 from '../../gallery/DSC_3988-1-scaled.jpg'
import img2 from '../../gallery/DSC_3992-1-scaled.jpg'
import img3 from '../../gallery/DSC_4014-1-1-scaled.jpg'
import img4 from '../../gallery/WhatsApp-Image-2026-02-19-at-10.37.31-AM-2.jpeg'
import img5 from '../../gallery/WhatsApp-Image-2025-06-18-at-12.02.53-PM.jpeg'
import img6 from '../../gallery/DSC_3506-1-scaled.jpg'
import img7 from '../../gallery/DSC_3577-scaled.jpg'
import img8 from '../../gallery/DSC_3615-scaled.jpg'
import img9 from '../../gallery/DSC_3935-scaled.jpg'
import img10 from '../../gallery/DSC_3937-1-scaled.jpg'
import img11 from '../../gallery/DSC_3967-scaled.jpg'
import img12 from '../../gallery/DSC_3986-1-scaled.jpg'
import img13 from '../../gallery/DSC_4014-1-scaled.jpg'
import img14 from '../../gallery/DSC_5001-scaled.jpg'
import img15 from '../../gallery/DSC_5010-scaled.jpg'
import img16 from '../../gallery/ACCRA-2-scaled.jpg'
import img17 from '../../gallery/LONDON-1-scaled.jpg'
import img18 from '../../gallery/WhatsApp-Image-2025-06-16-at-5.07.30-PM.jpeg'
import img19 from '../../gallery/WhatsApp-Image-2025-06-16-at-5.10.48-PM.jpeg'
import img20 from '../../gallery/WhatsApp-Image-2025-11-06-at-15.46.15_f9a0f360.jpg'
import img21 from '../../gallery/WhatsApp-Image-2025-11-06-at-15.48.40_44cc2b50-e1763117022338.jpg'
import img22 from '../../gallery/WhatsApp-Image-2026-02-19-at-10.15.06-AM-3.jpeg'
import img23 from '../../gallery/WhatsApp-Image-2026-05-05-at-08.37.jpg'
import img24 from '../../gallery/2022_john_eccles_10_custom_800x533.jpg'
import img25 from '../../gallery/multiracial-workers-using-virtual-reality-headsets-2026-01-09-00-01-46-utc-scaled.jpg'

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null)
  const [selectedCategory, setSelectedCategory] = useState('all')

  const categories = [
    { id: 'all', name: 'All Photos' },
    { id: 'events', name: 'Events & Training' },
    { id: 'facilities', name: 'Facilities & Locations' },
    { id: 'team', name: 'Team & Activities' }
  ]

  const galleryImages = [
    {
      id: 1,
      src: img1,
      alt: 'CIMA Professional Event',
      category: 'events',
      title: 'Professional Development Event',
      size: 'large'
    },
    {
      id: 2,
      src: img2,
      alt: 'Training Session',
      category: 'events',
      title: 'Interactive Training Session',
      size: 'medium'
    },
    {
      id: 3,
      src: img3,
      alt: 'CIMA Workshop',
      category: 'events',
      title: 'ADR Workshop',
      size: 'medium'
    },
    {
      id: 4,
      src: img4,
      alt: 'Group Discussion',
      category: 'team',
      title: 'Collaborative Discussion',
      size: 'wide'
    },
    {
      id: 5,
      src: img5,
      alt: 'Conference Session',
      category: 'events',
      title: 'International Conference',
      size: 'medium'
    },
    {
      id: 6,
      src: img6,
      alt: 'Professional Gathering',
      category: 'events',
      title: 'Professional Network Event',
      size: 'tall'
    },
    {
      id: 7,
      src: img7,
      alt: 'Training Program',
      category: 'events',
      title: 'Certification Program',
      size: 'medium'
    },
    {
      id: 8,
      src: img8,
      alt: 'CIMA Session',
      category: 'events',
      title: 'Learning Session',
      size: 'large'
    },
    {
      id: 9,
      src: img9,
      alt: 'Event Presentation',
      category: 'events',
      title: 'Keynote Presentation',
      size: 'medium'
    },
    {
      id: 10,
      src: img10,
      alt: 'Professional Discussion',
      category: 'team',
      title: 'Expert Panel',
      size: 'medium'
    },
    {
      id: 11,
      src: img11,
      alt: 'Workshop Activity',
      category: 'events',
      title: 'Interactive Workshop',
      size: 'wide'
    },
    {
      id: 12,
      src: img12,
      alt: 'Team Collaboration',
      category: 'team',
      title: 'Team Building',
      size: 'medium'
    },
    {
      id: 13,
      src: img13,
      alt: 'CIMA Training',
      category: 'events',
      title: 'Professional Training',
      size: 'tall'
    },
    {
      id: 14,
      src: img14,
      alt: 'Conference Attendees',
      category: 'events',
      title: 'Global Conference',
      size: 'medium'
    },
    {
      id: 15,
      src: img15,
      alt: 'Professional Event',
      category: 'events',
      title: 'Annual Summit',
      size: 'large'
    },
    {
      id: 16,
      src: img16,
      alt: 'Accra Office',
      category: 'facilities',
      title: 'CIMA Africa Headquarters',
      size: 'wide'
    },
    {
      id: 17,
      src: img17,
      alt: 'London Location',
      category: 'facilities',
      title: 'CIMA Global Headquarters',
      size: 'medium'
    },
    {
      id: 18,
      src: img18,
      alt: 'Event Gathering',
      category: 'events',
      title: 'Community Event',
      size: 'medium'
    },
    {
      id: 19,
      src: img19,
      alt: 'Professional Meeting',
      category: 'team',
      title: 'Leadership Meeting',
      size: 'tall'
    },
    {
      id: 20,
      src: img20,
      alt: 'CIMA Activity',
      category: 'team',
      title: 'Team Activity',
      size: 'medium'
    },
    {
      id: 21,
      src: img21,
      alt: 'Professional Session',
      category: 'events',
      title: 'Training Certification',
      size: 'medium'
    },
    {
      id: 22,
      src: img22,
      alt: 'Group Photo',
      category: 'team',
      title: 'Team Photo',
      size: 'wide'
    },
    {
      id: 23,
      src: img23,
      alt: 'CIMA Event',
      category: 'events',
      title: 'Special Event',
      size: 'medium'
    },
    {
      id: 24,
      src: img24,
      alt: 'Oxford Facility',
      category: 'facilities',
      title: 'Oxford Science Park',
      size: 'large'
    },
    {
      id: 25,
      src: img25,
      alt: 'Modern Training',
      category: 'events',
      title: 'VR Training Session',
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
            Capturing moments from our global ADR community - training events, professional development, and international collaboration
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

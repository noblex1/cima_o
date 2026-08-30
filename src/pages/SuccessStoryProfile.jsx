import React, { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { ArrowLeft, Share2, Check, Award } from 'lucide-react'
import './SuccessStoryProfile.css'
import amandaLeeImage from '../../assets/lee.jpeg'
import certificate1 from '../../assets/WhatsApp Image 2026-08-25 at 18.29.53.jpeg'

// Success stories data
const successStoriesData = {
  'amanda-lee': {
    name: 'Amanda Lee',
    qualification: 'ACIMArb',
    location: 'Singapore',
    image: amandaLeeImage,
    certificate: certificate1,
    story: {
      intro: "Amanda Lee's CIMA journey began with one lecture.",
      body: `After hearing CIMA Fellow Iain Sharp, Partner at Hill Dickinson, speak at the 2026 CIMA Winter Academy on International Arbitration, she took the next step.

      Today, Amanda is ACIMArb qualified—with stronger professional credibility, an international ADR network and new opportunities in arbitration and mediation.`,
      quote: "One lecture. One decision. A world of opportunity."
    },
    achievements: [
      'ACIMArb Certified',
      'International ADR Network Member',
      'Arbitration & Mediation Professional'
    ]
  }
}

const SuccessStoryProfile = () => {
  const { storyId } = useParams()
  const story = successStoriesData[storyId]
  const [copied, setCopied] = useState(false)

  const handleShare = async () => {
    const shareUrl = window.location.href
    
    if (navigator.share) {
      try {
        await navigator.share({
          title: `${story.name}'s Success Story - CIMA`,
          text: `Read ${story.name}'s journey to becoming ${story.qualification}`,
          url: shareUrl
        })
        return
      } catch (err) {
        // Fall through to clipboard
      }
    }
    
    try {
      await navigator.clipboard.writeText(shareUrl)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      alert('Failed to copy link')
    }
  }

  if (!story) {
    return (
      <div className="page">
        <div className="container">
          <h1>Story not found</h1>
          <Link to="/" className="btn-back">Back to Home</Link>
        </div>
      </div>
    )
  }

  // Construct absolute URLs
  const storyUrl = `https://www.thecima.org/success-story/${storyId}`
  // Get the origin (works for both dev and production)
  const origin = typeof window !== 'undefined' ? window.location.origin : 'https://www.thecima.org'
  // For Vite imported images, they already contain the full path after build
  const imageUrl = story.image.startsWith('http') 
    ? story.image 
    : `${origin}${story.image.startsWith('/') ? '' : '/'}${story.image}`
  const description = `${story.story.intro} Read how ${story.name} achieved ${story.qualification} certification through CIMA's professional training programs.`

  return (
    <div className="success-story-profile-page">
      <Helmet>
        {/* Primary Meta Tags */}
        <title>{story.name}'s Success Story - {story.qualification} | CIMA</title>
        <meta name="title" content={`${story.name}'s Success Story - ${story.qualification} | CIMA`} />
        <meta name="description" content={description} />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="article" />
        <meta property="og:url" content={storyUrl} />
        <meta property="og:title" content={`${story.name}'s Success Story - ${story.qualification}`} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={imageUrl} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content={`${story.name} - CIMA Success Story`} />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content={storyUrl} />
        <meta name="twitter:title" content={`${story.name}'s Success Story - ${story.qualification}`} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={imageUrl} />

        {/* LinkedIn specific */}
        <meta property="og:site_name" content="CIMA - Center for International Mediators and Arbitrators" />
        <meta property="article:author" content={story.name} />
      </Helmet>

      {/* Navigation */}
      <div className="story-nav">
        <div className="story-navigation">
          <Link to="/" className="btn-back">
            <ArrowLeft size={20} />
            Back to Home
          </Link>
          <button onClick={handleShare} className="btn-share">
            {copied ? (
              <>
                <Check size={20} />
                Link Copied!
              </>
            ) : (
              <>
                <Share2 size={20} />
                Share Story
              </>
            )}
          </button>
        </div>
      </div>

      {/* Story Content */}
      <section className="story-profile-content">
        <div className="container-story">
          <div className="story-profile-grid">
            {/* Left Side - Profile & Story */}
            <div className="story-profile-section">
              <div className="profile-photo-large">
                <img 
                  src={story.image} 
                  alt={story.name}
                />
              </div>
              
              <div className="profile-info-card">
                <h3>Achievements</h3>
                <ul className="achievements-list">
                  {story.achievements.map((achievement, index) => (
                    <li key={index}>{achievement}</li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right Side - Full Story */}
            <div className="story-details-section">
              <div className="story-header">
                <div>
                  <h1>{story.name}</h1>
                  <p className="story-qual">{story.qualification}</p>
                </div>
                <p className="story-loc">{story.location}</p>
              </div>

              <div className="full-story">
                <h2>Journey to Success</h2>
                <p className="story-intro">{story.story.intro}</p>
                {story.story.body.split('\n\n').map((paragraph, index) => (
                  <p key={index}>{paragraph.trim()}</p>
                ))}
                <blockquote className="story-quote">
                  "{story.story.quote}"
                </blockquote>
              </div>

              {/* Certificate Display */}
              <div className="certificate-display">
                <h2>Certification</h2>
                <div className="certificate-container">
                  <div className="certificate-watermark">Sample</div>
                  <img 
                    src={story.certificate} 
                    alt={`${story.name}'s CIMA Certificate`}
                    className="certificate-img"
                  />
                  <div className="certificate-overlay-story">
                    <div className="certificate-badge-story">
                      <Award size={24} />
                      <span>Verified Certificate</span>
                    </div>
                  </div>
                </div>
                <p className="cert-caption">
                  {story.qualification} Certification — Associate of CIMA
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default SuccessStoryProfile

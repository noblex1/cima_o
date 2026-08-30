import React, { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { ArrowLeft, ExternalLink, Share2, Check } from 'lucide-react'
import './ArbitratorProfile.css'
import iainSharpImage from '../../assets/ian.jpeg'

// Arbitrator profiles data
const arbitratorsData = {
  'iain-sharp': {
    name: 'Iain Sharp',
    title: 'FCIArb, FCIMArb',
    subtitle: 'Partner, Hill Dickinson Singapore',
    image: iainSharpImage,
    bio: `Iain Sharp is an English solicitor and Partner at Hill Dickinson in Singapore, specialising in international commercial arbitration, international trade and commodities, energy and natural resources.

    With more than 25 years' experience across private practice and in-house roles, he has conducted major arbitrations across Europe, the Middle East and Asia under leading rules including ICC, LCIA, SIAC, HKIAC, CIETAC and UNCITRAL.

    A Fellow of both CIArb and CIMA, Iain brings formidable cross-border experience and commercial insight to international dispute resolution. His extensive background spans multiple jurisdictions and arbitral institutions, making him a leading figure in the field of international arbitration.`,
    expertise: [
      'International Commercial Arbitration',
      'International Trade & Commodities',
      'Energy & Natural Resources',
      'Cross-Border Disputes',
      'ICC, LCIA, SIAC, HKIAC Arbitrations',
      'CIETAC & UNCITRAL Proceedings'
    ],
    experience: '25+ years in private practice and in-house roles',
    regions: ['Europe', 'Middle East', 'Asia', 'Singapore'],
    firm: {
      name: 'Hill Dickinson',
      url: 'https://www.hilldickinson.com/our-people/iain-sharp/'
    }
  },
  // Add more profiles as needed
}

const ArbitratorProfile = () => {
  const { profileId } = useParams()
  const arbitrator = arbitratorsData[profileId]
  const [copied, setCopied] = useState(false)

  const handleShare = async () => {
    const shareUrl = window.location.href
    
    // Try native share API first (mobile)
    if (navigator.share) {
      try {
        await navigator.share({
          title: `${arbitrator.name} - Global Arbitrator Spotlight`,
          text: `Check out ${arbitrator.name}'s profile on CIMA`,
          url: shareUrl
        })
        return
      } catch (err) {
        // User cancelled or error, fall through to clipboard
      }
    }
    
    // Fallback to clipboard
    try {
      await navigator.clipboard.writeText(shareUrl)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      alert('Failed to copy link. Please copy manually: ' + shareUrl)
    }
  }

  if (!arbitrator) {
    return (
      <div className="page">
        <div className="container">
          <h1>Profile not found</h1>
          <Link to="/" className="btn-back">Back to Home</Link>
        </div>
      </div>
    )
  }

  return (
    <div className="arbitrator-profile-page">
      {/* Back Button */}
      <div className="profile-back">
        <div className="profile-navigation">
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
                Share Profile
              </>
            )}
          </button>
        </div>
      </div>

      {/* Profile Content */}
      <section className="profile-content">
        <div className="container-profile">
          <div className="profile-grid">
            {/* Left Side - Image */}
            <div className="profile-image-section">
              <div className="profile-image-wrapper">
                <img 
                  src={arbitrator.image} 
                  alt={arbitrator.name}
                  className="profile-image"
                />
              </div>
              <div className="profile-quick-info">
                <h3>Areas of Expertise</h3>
                <ul className="expertise-list">
                  {arbitrator.expertise.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
              {arbitrator.regions && (
                <div className="profile-quick-info">
                  <h3>Regions</h3>
                  <div className="regions-tags">
                    {arbitrator.regions.map((region, index) => (
                      <span key={index} className="region-tag">{region}</span>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Right Side - Biography */}
            <div className="profile-bio-section">
              <div className="profile-header">
                <div>
                  <h1>{arbitrator.name}</h1>
                  <p className="profile-title">{arbitrator.title}</p>
                </div>
                {arbitrator.subtitle && (
                  <p className="profile-subtitle">{arbitrator.subtitle}</p>
                )}
                {arbitrator.firm && (
                  <a 
                    href={arbitrator.firm.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="firm-link"
                  >
                    <ExternalLink size={16} />
                    {arbitrator.firm.name}
                  </a>
                )}
              </div>

              <div className="profile-bio">
                <h2>Biography</h2>
                {arbitrator.bio.split('\n\n').map((paragraph, index) => (
                  <p key={index}>{paragraph.trim()}</p>
                ))}
              </div>

              {arbitrator.experience && (
                <div className="profile-details">
                  <div className="detail-section">
                    <h3>Experience</h3>
                    <p className="experience-text">{arbitrator.experience}</p>
                  </div>
                </div>
              )}

              {(arbitrator.education || arbitrator.languages) && (
                <div className="profile-details">
                  {arbitrator.education && (
                    <div className="detail-section">
                      <h3>Education</h3>
                      <ul>
                        {arbitrator.education.map((item, index) => (
                          <li key={index}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {arbitrator.languages && (
                    <div className="detail-section">
                      <h3>Languages</h3>
                      <div className="languages-tags">
                        {arbitrator.languages.map((lang, index) => (
                          <span key={index} className="language-tag">{lang}</span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ArbitratorProfile

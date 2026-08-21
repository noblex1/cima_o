import React from 'react'
import { FileText, Download, ArrowRight } from 'lucide-react'
import './CommonPages.css'

const Resources = () => {
  const resources = [
    {
      id: 1,
      title: "ACCRA RULES 2025",
      category: "Rules",
      description: "Comprehensive arbitration and mediation rules for international disputes"
    },
    {
      id: 2,
      title: "CIMA RULES 2025",
      category: "Rules",
      description: "Official Center for International Mediators and Arbitrators rules and procedures"
    },
    {
      id: 3,
      title: "2026 ANNUAL WORKPLAN",
      category: "Planning",
      description: "Strategic objectives and programs for mediators and arbitrators community"
    },
    {
      id: 4,
      title: "Code of Ethics - For Lawyers and Mediators and Arbitrators",
      category: "Ethics",
      description: "Professional standards and ethical guidelines for ADR practitioners"
    },
    {
      id: 5,
      title: "Join CIMA",
      category: "Membership",
      description: "Become part of the global community of certified mediators and arbitrators"
    },
    {
      id: 6,
      title: "Member Login",
      category: "Portal",
      description: "Access your member dashboard, certificates, and exclusive resources"
    },
    {
      id: 7,
      title: "Equality, Diversity & Inclusion (EDI) Policy",
      category: "Policy",
      description: "CIMA's commitment to fostering an inclusive ADR community"
    },
    {
      id: 8,
      title: "CIMA Course Completion Policy",
      category: "Policy",
      description: "Requirements and standards for training program completion"
    },
    {
      id: 9,
      title: "CIMA Conflict Resolution Policy",
      category: "Policy",
      description: "Internal procedures for addressing disputes and conflicts"
    },
    {
      id: 10,
      title: "CIMA Code of Conduct and Ethics for Members",
      category: "Ethics",
      description: "Professional conduct standards for all CIMA members"
    },
    {
      id: 11,
      title: "CIMA Privacy Policy",
      category: "Policy",
      description: "How we collect, use, and protect your personal information"
    },
    {
      id: 12,
      title: "CIMA Terms & Conditions",
      category: "Legal",
      description: "Terms governing use of CIMA services and programs"
    },
    {
      id: 13,
      title: "Professional Liability and Indemnity",
      category: "Legal",
      description: "Coverage and protection for certified practitioners"
    },
    {
      id: 14,
      title: "Fees Schedule",
      category: "Financial",
      description: "Membership dues, training fees, and certification costs"
    },
    {
      id: 15,
      title: "FAQs",
      category: "Support",
      description: "Frequently asked questions about CIMA programs and services"
    },
    {
      id: 16,
      title: "Continuing Professional Development",
      category: "Training",
      description: "Ongoing education requirements and opportunities for members"
    },
    {
      id: 17,
      title: "E-Learning Platform",
      category: "Training",
      description: "Access online courses, webinars, and training materials"
    },
    {
      id: 18,
      title: "Member Referral List",
      category: "Directory",
      description: "Find certified mediators and arbitrators by location and specialty"
    },
    {
      id: 19,
      title: "Publications and Research",
      category: "Resources",
      description: "Journal articles, case studies, and ADR research papers"
    },
    {
      id: 20,
      title: "Events & Webinars",
      category: "Events",
      description: "Upcoming training sessions, conferences, and networking events"
    },
    {
      id: 21,
      title: "CIMA_PRACTICAL USER GUIDE FOR ADR_FINAL",
      category: "Guide",
      description: "Comprehensive guide for applying ADR principles in practice"
    },
    {
      id: 22,
      title: "Legal Information",
      category: "Legal",
      description: "Important legal notices and regulatory compliance information"
    }
  ]

  const getCategoryColor = (category) => {
    const colors = {
      'Rules': 'category-burgundy',
      'Policy': 'category-gold',
      'Ethics': 'category-burgundy',
      'Training': 'category-gold',
      'Legal': 'category-burgundy',
      'Membership': 'category-gold',
      'Portal': 'category-burgundy',
      'Financial': 'category-gold',
      'Support': 'category-burgundy',
      'Directory': 'category-gold',
      'Resources': 'category-burgundy',
      'Events': 'category-gold',
      'Guide': 'category-burgundy',
      'Planning': 'category-gold'
    }
    return colors[category] || 'category-default'
  }

  return (
    <div className="common-page">
      {/* Hero Section */}
      <section className="page-hero resources-hero">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1 className="page-title">Resources</h1>
          <p className="hero-subtitle">
            Access comprehensive guides, policies, and tools for ADR professionals
          </p>
        </div>
      </section>

      {/* Resources Grid Section */}
      <section className="content-section resources-main">
        <div className="container">
          <div className="resources-intro">
            <h2>Explore Our Resources</h2>
            <p>Everything you need to excel in alternative dispute resolution - from rules and policies to training materials and professional tools</p>
          </div>

          <div className="resources-grid">
            {resources.map((resource) => (
              <div key={resource.id} className="resource-card">
                <div className="resource-icon">
                  <FileText size={28} />
                </div>
                <div className="resource-content">
                  <span className={`resource-category ${getCategoryColor(resource.category)}`}>
                    {resource.category}
                  </span>
                  <h3>{resource.title}</h3>
                  <p>{resource.description}</p>
                </div>
                <button className="resource-btn">
                  <span>Download</span>
                  <Download size={16} />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="resources-cta">
        <div className="container">
          <div className="resources-cta-content">
            <div className="resources-cta-text">
              <h2>Need More Information?</h2>
              <p>Our team is ready to help you find the resources and support you need for your ADR practice</p>
            </div>
            <a href="mailto:info@thecima.org" className="btn-resources-contact">
              Contact Us <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </section>

      {/* Subscribe Section */}
      <section className="subscribe-section">
        <div className="container">
          <div className="subscribe-content">
            <div className="subscribe-text">
              <h3>Subscribe for latest updates & insights</h3>
              <p>Stay informed about new resources, policy updates, and professional development opportunities</p>
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

export default Resources

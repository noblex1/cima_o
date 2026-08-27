import React from 'react'
import { Download, FileText } from 'lucide-react'
import './Resources.css'
import legalFrameworkPDF from '../../assets/The-Legal-Framework-of-Domestic-and-International-Arbitration.pdf'

const Resources = () => {
  // Add more resources here as they become available
  const resources = [
    { 
      name: 'The Legal Framework of Domestic and International Arbitration', 
      type: 'PDF', 
      size: '1.1 MB',
      file: legalFrameworkPDF
    },
    // Add more resources below this line
  ]

  return (
    <div className="resources-page">
      {/* Hero Section */}
      <section className="resources-hero">
        <div className="container">
          <h1>ADR Professional Resources</h1>
          <p>Download essential materials, guides, and journals for alternative dispute resolution professionals</p>
        </div>
      </section>

      {/* Resources List */}
      <section className="resources-content">
        <div className="container">
          <div className="resources-list">
            {resources.map((resource, index) => (
              <div key={index} className="resource-item">
                <div className="resource-info">
                  <FileText size={24} />
                  <div>
                    <h4>{resource.name}</h4>
                    <span className="resource-meta">{resource.type} • {resource.size}</span>
                  </div>
                </div>
                <a href={resource.file} download className="btn-download">
                  <Download size={18} />
                  Download
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Coming Soon Notice */}
      <section className="coming-soon-notice">
        <div className="container">
          <div className="notice-box">
            <h3>More Resources Coming Soon</h3>
            <p>We're continuously updating our resource library with new materials for ADR professionals. Check back regularly for new additions.</p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Resources

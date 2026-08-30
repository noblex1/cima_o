import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft, ExternalLink } from 'lucide-react'
import './ArbitrationResources.css'

const ArbitrationResources = () => {
  return (
    <div className="arbitration-resources-page">
      <div className="resources-hero">
        <div className="container">
          <Link to="/" className="back-link">
            <ArrowLeft size={20} />
            Back to Home
          </Link>
          <h1>Global Arbitration Resource Hub</h1>
          <p>A curated gateway to leading institutions, legal frameworks, research platforms and professional resources shaping international arbitration.</p>
        </div>
      </div>

      <div className="resources-content">
        <div className="container">
          {/* Institutions */}
          <section className="resource-category-section">
            <h2>Institutions</h2>
            <div className="resources-grid">
              <a href="https://iccwbo.org/dispute-resolution/dispute-resolution-services/icc-international-court-of-arbitration/" target="_blank" rel="noopener noreferrer" className="resource-item">
                <span className="resource-name">ICC International Court of Arbitration</span>
                <ExternalLink size={16} />
              </a>
              <a href="https://www.lcia.org/" target="_blank" rel="noopener noreferrer" className="resource-item">
                <span className="resource-name">LCIA</span>
                <ExternalLink size={16} />
              </a>
              <a href="https://siac.org.sg/" target="_blank" rel="noopener noreferrer" className="resource-item">
                <span className="resource-name">SIAC</span>
                <ExternalLink size={16} />
              </a>
              <a href="https://www.hkiac.org/" target="_blank" rel="noopener noreferrer" className="resource-item">
                <span className="resource-name">HKIAC</span>
                <ExternalLink size={16} />
              </a>
              <a href="https://sccarbitrationinstitute.se/" target="_blank" rel="noopener noreferrer" className="resource-item">
                <span className="resource-name">SCC Arbitration Institute</span>
                <ExternalLink size={16} />
              </a>
              <a href="https://www.swissarbitration.org/" target="_blank" rel="noopener noreferrer" className="resource-item">
                <span className="resource-name">Swiss Arbitration Centre</span>
                <ExternalLink size={16} />
              </a>
              <a href="https://www.icdr.org/" target="_blank" rel="noopener noreferrer" className="resource-item">
                <span className="resource-name">ICDR</span>
                <ExternalLink size={16} />
              </a>
              <a href="https://www.cietac.org/" target="_blank" rel="noopener noreferrer" className="resource-item">
                <span className="resource-name">CIETAC</span>
                <ExternalLink size={16} />
              </a>
              <a href="https://www.diac.com/" target="_blank" rel="noopener noreferrer" className="resource-item">
                <span className="resource-name">DIAC</span>
                <ExternalLink size={16} />
              </a>
              <a href="https://www.disarb.org/" target="_blank" rel="noopener noreferrer" className="resource-item">
                <span className="resource-name">DIS</span>
                <ExternalLink size={16} />
              </a>
              <a href="https://www.viac.eu/" target="_blank" rel="noopener noreferrer" className="resource-item">
                <span className="resource-name">VIAC</span>
                <ExternalLink size={16} />
              </a>
              <a href="https://acica.org.au/" target="_blank" rel="noopener noreferrer" className="resource-item">
                <span className="resource-name">ACICA</span>
                <ExternalLink size={16} />
              </a>
              <a href="https://www.kcabinternational.or.kr/" target="_blank" rel="noopener noreferrer" className="resource-item">
                <span className="resource-name">KCAB International</span>
                <ExternalLink size={16} />
              </a>
              <a href="https://crcica.org/" target="_blank" rel="noopener noreferrer" className="resource-item">
                <span className="resource-name">CRCICA</span>
                <ExternalLink size={16} />
              </a>
              <a href="https://kiac.org.rw/" target="_blank" rel="noopener noreferrer" className="resource-item">
                <span className="resource-name">KIAC</span>
                <ExternalLink size={16} />
              </a>
              <a href="https://mcia.org.in/" target="_blank" rel="noopener noreferrer" className="resource-item">
                <span className="resource-name">MCIA</span>
                <ExternalLink size={16} />
              </a>
            </div>
          </section>

          {/* Rules & Law */}
          <section className="resource-category-section">
            <h2>Rules & Law</h2>
            <div className="resources-grid">
              <a href="https://uncitral.un.org/" target="_blank" rel="noopener noreferrer" className="resource-item">
                <span className="resource-name">UNCITRAL</span>
                <ExternalLink size={16} />
              </a>
              <a href="https://icsid.worldbank.org/" target="_blank" rel="noopener noreferrer" className="resource-item">
                <span className="resource-name">ICSID</span>
                <ExternalLink size={16} />
              </a>
              <a href="https://pca-cpa.org/" target="_blank" rel="noopener noreferrer" className="resource-item">
                <span className="resource-name">Permanent Court of Arbitration</span>
                <ExternalLink size={16} />
              </a>
            </div>
          </section>

          {/* Research & Cases */}
          <section className="resource-category-section">
            <h2>Research & Cases</h2>
            <div className="resources-grid">
              <a href="https://www.wolterskluwer.com/en/solutions/kluwerarbitration" target="_blank" rel="noopener noreferrer" className="resource-item">
                <span className="resource-name">Kluwer Arbitration</span>
                <ExternalLink size={16} />
              </a>
              <a href="https://jusmundi.com/" target="_blank" rel="noopener noreferrer" className="resource-item">
                <span className="resource-name">Jus Mundi</span>
                <ExternalLink size={16} />
              </a>
            </div>
          </section>

          {/* News & Insights */}
          <section className="resource-category-section">
            <h2>News & Insights</h2>
            <div className="resources-grid">
              <a href="https://globalarbitrationreview.com/" target="_blank" rel="noopener noreferrer" className="resource-item">
                <span className="resource-name">Global Arbitration Review</span>
                <ExternalLink size={16} />
              </a>
              <a href="https://legalblogs.wolterskluwer.com/arbitration-blog/" target="_blank" rel="noopener noreferrer" className="resource-item">
                <span className="resource-name">Kluwer Arbitration Blog</span>
                <ExternalLink size={16} />
              </a>
            </div>
          </section>

          {/* Professional Resources */}
          <section className="resource-category-section">
            <h2>Professional Resources</h2>
            <div className="resources-grid">
              <a href="https://www.arbitration-icca.org/" target="_blank" rel="noopener noreferrer" className="resource-item">
                <span className="resource-name">International Council for Commercial Arbitration (ICCA)</span>
                <ExternalLink size={16} />
              </a>
              <a href="https://www.ciarb.org/" target="_blank" rel="noopener noreferrer" className="resource-item">
                <span className="resource-name">Chartered Institute of Arbitrators (CIArb)</span>
                <ExternalLink size={16} />
              </a>
            </div>
          </section>

          {/* Disclaimer */}
          <div className="resources-disclaimer">
            <p><strong>Disclaimer:</strong> External resources are provided for professional and educational reference. Inclusion does not imply affiliation, partnership or endorsement by CIMA or the organisations listed.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ArbitrationResources

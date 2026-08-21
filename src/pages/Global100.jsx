import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Globe, Award, Users, Building2, MapPin, ChevronRight, Star } from 'lucide-react'
import './Global100.css'

const Global100 = () => {
  const [activeRegion, setActiveRegion] = useState('africa')

  const regions = [
    { id: 'africa', name: 'AFRICA' },
    { id: 'middle-east', name: 'MIDDLE EAST' },
    { id: 'europe', name: 'EUROPE' },
    { id: 'north-america', name: 'NORTH AMERICA' },
    { id: 'latin-america', name: 'LATIN AMERICA' },
    { id: 'asia', name: 'ASIA' }
  ]

  return (
    <div className="global100-page">
      <section className="global100-hero">
        <div className="global100-hero-overlay"></div>
        <div className="global100-hero-content">
          <div className="global100-hero-text">
            <h1 className="global100-hero-title">GLOBAL 100 ADR FIRMS AND LAWYERS</h1>
            <p className="global100-hero-subtitle">
              Find the Best ADR Law Firms and Lawyers on each Continent
            </p>
          </div>
        </div>
      </section>

      <section className="global100-intro">
        <div className="container">
          <div className="intro-content">
            <p className="intro-text">
              A continent-wise list of the best international firms, institutions and lawyers in Alternative 
              Dispute Resolution (ADR) — covering both domestic and international arbitration and mediation.
            </p>
            <p className="intro-highlight">
              In today's complex and increasingly globalized commercial environment, the importance of{' '}
              <strong>Alternative Dispute Resolution (ADR)</strong>—especially <strong>arbitration and mediation</strong>—has 
              grown exponentially. Whether resolving disputes arising from cross-border conflicts, infrastructure 
              projects, natural resources, or investment treaties, businesses and governments rely on specialized 
              lawyers and institutions skilled in ADR. This list showcases some of the best law firms and renowned 
              practitioners in ADR on each continent, offering a global map of excellence in dispute resolution.
            </p>
          </div>
        </div>
      </section>

      <section className="regions-selector">
        <div className="container">
          <div className="regions-tabs">
            {regions.map(region => (
              <button
                key={region.id}
                className={`region-tab ${activeRegion === region.id ? 'active' : ''}`}
                onClick={() => setActiveRegion(region.id)}
              >
                {region.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="leading-firms">
        <div className="container">
          <h2 className="section-title">Leading Law Firms</h2>
          
          <div className="firms-list">
            <div className="firm-item">
              <div className="firm-name">
                <Building2 size={20} />
                <span>Lex Mundi & Cercle PBLC</span>
              </div>
              <p className="firm-description">
                Africa's leading online ADR training site firm of the year
              </p>
            </div>

            <div className="firm-item">
              <div className="firm-name">
                <Building2 size={20} />
                <span>Miller & Chevalier (Nigeria)</span>
              </div>
              <p className="firm-description">
                A top-tier firm with a specialized arbitration team
              </p>
            </div>

            <div className="firm-item">
              <div className="firm-name">
                <Building2 size={20} />
                <span>Bowmans (South Africa, Kenya, Mauritius)</span>
              </div>
              <p className="firm-description">
                Known for international arbitration and cross-border dispute resolution
              </p>
            </div>

            <div className="firm-item">
              <div className="firm-name">
                <Building2 size={20} />
                <span>ENSafrica (South Africa)</span>
              </div>
              <p className="firm-description">
                Africa's largest law firm with a dedicated arbitration division
              </p>
            </div>

            <div className="firm-item">
              <div className="firm-name">
                <Building2 size={20} />
                <span>Dentons (South Africa, Kenya, Mauritius)</span>
              </div>
              <p className="firm-description">
                Global firm with strong Africa ADR practice, offices in Johannesburg, Nairobi, Moka (Mauritius)
              </p>
            </div>

            <div className="firm-item">
              <div className="firm-name">
                <Building2 size={20} />
                <span>Maliseli Bwaslienya & Ramsamy</span>
              </div>
              <p className="firm-description">
                Known for energy, construction, and infrastructure arbitration across MENA and Africa
              </p>
            </div>

            <div className="firm-item">
              <div className="firm-name">
                <Building2 size={20} />
                <span>Shaloi Law Firm</span>
              </div>
              <p className="firm-description">
                Handles cross-border disputes in oil and gas, active in OHADA and civil forums
              </p>
            </div>

            <div className="firm-item">
              <div className="firm-name">
                <Building2 size={20} />
                <span>Clyde & Co (Kenya, Nigeria)</span>
              </div>
              <p className="firm-description">
                International firm with substantial presence in Africa and ICSID arbitration
              </p>
            </div>

            <div className="firm-item">
              <div className="firm-name">
                <Building2 size={20} />
                <span>Ali Iamma & Company (Cairo Office)</span>
              </div>
              <p className="firm-description">
                Active in both international arbitration for both and African clients
              </p>
            </div>

            <div className="firm-item">
              <div className="firm-name">
                <Building2 size={20} />
                <span>Cerno & Co. (Kenya)</span>
              </div>
              <p className="firm-description">
                Strong in commercial mediation and arbitration
              </p>
            </div>

            <div className="firm-item">
              <div className="firm-name">
                <Building2 size={20} />
                <span>JCD & MB Legal Consultancy (Ghana)</span>
              </div>
              <p className="firm-description">
                Rising star in West Africa, skilled in domestic and IIA/investor arbitration
              </p>
            </div>

            <div className="firm-item">
              <div className="firm-name">
                <Building2 size={20} />
                <span>AB & Co. (Nigeria)</span>
              </div>
              <p className="firm-description">
                Strong in energy, arbitration and commercial disputes
              </p>
            </div>

            <div className="firm-item">
              <div className="firm-name">
                <Building2 size={20} />
                <span>Aelex Partners (Nigeria)</span>
              </div>
              <p className="firm-description">
                Prominent in commercial arbitration and infrastructure
              </p>
            </div>

            <div className="firm-item">
              <div className="firm-name">
                <Building2 size={20} />
                <span>Benton-Eyiofile, Letsa & Ankumah (Ghana)</span>
              </div>
              <p className="firm-description">
                Noted for commercial and telecom arbitration
              </p>
            </div>

            <div className="firm-item">
              <div className="firm-name">
                <Building2 size={20} />
                <span>K-Solutions & Partners (Kenya)</span>
              </div>
              <p className="firm-description">
                Focused on construction and procurement arbitration
              </p>
            </div>

            <div className="firm-item">
              <div className="firm-name">
                <Building2 size={20} />
                <span>Centurion (Nigeria)</span>
              </div>
              <p className="firm-description">
                Energy and infrastructure arbitration expertise
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="top-practitioners">
        <div className="container">
          <h2 className="section-title">Top ADR Practitioners</h2>
          
          <div className="practitioners-list">
            <div className="practitioner-item">
              <div className="practitioner-header">
                <Users size={20} />
                <h3>Prof. Dr. Mohamed Abdel Wahab</h3>
              </div>
              <p className="practitioner-description">
                Vice-Chair of ICC, renowned arbitrator in ICSID, DRCCA, ICC, and UNCITRAL cases
              </p>
            </div>

            <div className="practitioner-item">
              <div className="practitioner-header">
                <Users size={20} />
                <h3>Dr. Emilia Onyema</h3>
              </div>
              <p className="practitioner-description">
                Leading academic in international arbitration, active in LCIA and African ADR
              </p>
            </div>

            <div className="practitioner-item">
              <div className="practitioner-header">
                <Users size={20} />
                <h3>Dr. Karen Hutter</h3>
              </div>
              <p className="practitioner-description">
                Managing partner of Hutter Law Firm, active in investor-state disputes
              </p>
            </div>

            <div className="practitioner-item">
              <div className="practitioner-header">
                <Users size={20} />
                <h3>Monica Fardouk (CROCIA)</h3>
              </div>
              <p className="practitioner-description">
                Trainer and ADR expert, experienced in mediation development
              </p>
            </div>

            <div className="practitioner-item">
              <div className="practitioner-header">
                <Users size={20} />
                <h3>Dr. Ismail Selim</h3>
              </div>
              <p className="practitioner-description">
                Director of CROCIA, seasoned arbitrator and counsel
              </p>
            </div>

            <div className="practitioner-item">
              <div className="practitioner-header">
                <Users size={20} />
                <h3>Funke Adekoya, SAN (Nigeria)</h3>
              </div>
              <p className="practitioner-description">
                ICC Court member and respected arbitrator
              </p>
            </div>

            <div className="practitioner-item">
              <div className="practitioner-header">
                <Users size={20} />
                <h3>Hafez Virjee (Kenya)</h3>
              </div>
              <p className="practitioner-description">
                Arbitrator active in East African construction and infrastructure disputes
              </p>
            </div>

            <div className="practitioner-item">
              <div className="practitioner-header">
                <Users size={20} />
                <h3>John Ohaga (Kenya)</h3>
              </div>
              <p className="practitioner-description">
                Chair of Nairobi Centre for International Arbitration
              </p>
            </div>

            <div className="practitioner-item">
              <div className="practitioner-header">
                <Users size={20} />
                <h3>Georgina Francois, FCIMArb (Ghana)</h3>
              </div>
              <p className="practitioner-description">
                Chair of GHAMAA, advocate for mediation reform
              </p>
            </div>

            <div className="practitioner-item">
              <div className="practitioner-header">
                <Users size={20} />
                <h3>Oba Nsugbe, QC, SAN (Nigeria)</h3>
              </div>
              <p className="practitioner-description">
                Heavyweight barrister and ICC arbitrator with decades' experience
              </p>
            </div>

            <div className="practitioner-item">
              <div className="practitioner-header">
                <Users size={20} />
                <h3>Dr. Fai Tsekata (Ghana)</h3>
              </div>
              <p className="practitioner-description">
                Eminent arbitration counsel and energy law expert
              </p>
            </div>

            <div className="practitioner-item">
              <div className="practitioner-header">
                <Users size={20} />
                <h3>Dr. Kariuki Muigua (Kenya)</h3>
              </div>
              <p className="practitioner-description">
                Leading East African arbitrator and academic
              </p>
            </div>

            <div className="practitioner-item">
              <div className="practitioner-header">
                <Users size={20} />
                <h3>Babatale Oyelakin (Nigeria)</h3>
              </div>
              <p className="practitioner-description">
                Commercial arbitration expert and activist
              </p>
            </div>

            <div className="practitioner-item">
              <div className="practitioner-header">
                <Users size={20} />
                <h3>Dr. Osei Bonsu Dickson (Ghana)</h3>
              </div>
              <p className="practitioner-description">
                Rising ADR practitioner and academic with international reach
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="recognition-section">
        <div className="container">
          <div className="recognition-content">
            <Star size={48} />
            <h2>Recognition Criteria</h2>
            <p>
              The Global 100 list recognizes firms and practitioners based on their track record in ADR, 
              expertise across practice areas, international reach, successful case outcomes, thought 
              leadership, and contributions to the development of arbitration and mediation practices globally.
            </p>
            <div className="criteria-grid">
              <div className="criteria-item">
                <Award size={24} />
                <h4>Case Experience</h4>
                <p>Proven track record in complex international disputes</p>
              </div>
              <div className="criteria-item">
                <Globe size={24} />
                <h4>Global Reach</h4>
                <p>International practice and cross-border expertise</p>
              </div>
              <div className="criteria-item">
                <Users size={24} />
                <h4>Professional Standing</h4>
                <p>Recognition by peers and industry bodies</p>
              </div>
              <div className="criteria-item">
                <Building2 size={24} />
                <h4>Institutional Roles</h4>
                <p>Leadership in arbitral institutions and ADR development</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="regional-coverage">
        <div className="container">
          <h2>Regional Coverage</h2>
          <p className="section-subtitle">
            The Global 100 spans six continents, highlighting the best ADR talent worldwide
          </p>
          <div className="regions-grid">
            <div className="region-card">
              <MapPin size={32} />
              <h3>Africa</h3>
              <p>Leading firms and practitioners across East, West, and Southern Africa</p>
            </div>
            <div className="region-card">
              <MapPin size={32} />
              <h3>Middle East</h3>
              <p>Expertise in regional arbitration centers and energy disputes</p>
            </div>
            <div className="region-card">
              <MapPin size={32} />
              <h3>Europe</h3>
              <p>Established arbitration hubs and international commercial disputes</p>
            </div>
            <div className="region-card">
              <MapPin size={32} />
              <h3>North America</h3>
              <p>Leading practices in commercial and investment arbitration</p>
            </div>
            <div className="region-card">
              <MapPin size={32} />
              <h3>Latin America</h3>
              <p>Growing ADR market with specialized regional expertise</p>
            </div>
            <div className="region-card">
              <MapPin size={32} />
              <h3>Asia</h3>
              <p>Dynamic arbitration landscape with emerging regional centers</p>
            </div>
          </div>
        </div>
      </section>

      <section className="nomination-section">
        <div className="container">
          <div className="nomination-box">
            <h2>Nominate a Firm or Practitioner</h2>
            <p>
              Know an exceptional ADR firm or practitioner who deserves recognition? We welcome nominations 
              for inclusion in future Global 100 lists. Nominations are reviewed annually by our editorial team.
            </p>
            <Link to="/contact" className="btn-nominate">
              Submit Nomination <ChevronRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      <section className="final-cta">
        <div className="container">
          <div className="final-cta-content">
            <h2>Looking for ADR Expertise?</h2>
            <p>Connect with leading law firms and practitioners from the Global 100 for your dispute resolution needs</p>
            <div className="final-cta-buttons">
              <Link to="/contact" className="btn-cta-primary">Contact CIMA</Link>
              <Link to="/membership/roll-of-mediators-arbitrators" className="btn-cta-secondary">
                View Roll of Mediators & Arbitrators
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Global100

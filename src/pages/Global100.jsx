import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Globe, Award, Users, Building2, MapPin, ChevronRight, Star } from 'lucide-react'
import './Global100.css'

const Global100 = () => {
  const [activeRegion, setActiveRegion] = useState('all')

  const regions = [
    { id: 'all', name: 'ALL REGIONS' },
    { id: 'europe', name: 'EUROPE' },
    { id: 'north-america', name: 'NORTH AMERICA' },
    { id: 'latin-america', name: 'LATIN AMERICA' },
    { id: 'asia', name: 'ASIA' },
    { id: 'africa', name: 'AFRICA' },
    { id: 'oceania', name: 'AUSTRALIA & OCEANIA' }
  ]

  const firmsData = {
    europe: [
      { name: 'Freshfields', country: 'United Kingdom' },
      { name: 'Three Crowns', country: 'United Kingdom' },
      { name: 'Herbert Smith Freehills Kramer¹', country: 'United Kingdom' },
      { name: 'Clifford Chance', country: 'United Kingdom' },
      { name: 'A&O Shearman¹', country: 'United Kingdom' },
      { name: 'Linklaters', country: 'United Kingdom' },
      { name: 'Ashurst', country: 'United Kingdom' },
      { name: 'HFW', country: 'United Kingdom' },
      { name: 'Gaillard Banifatemi Shelbaya Disputes', country: 'France' },
      { name: 'Bredin Prat', country: 'France' },
      { name: 'Gide Loyrette Nouel', country: 'France' },
      { name: 'Lalive', country: 'Switzerland' },
      { name: 'Schellenberg Wittmer', country: 'Switzerland' },
      { name: 'Hanefeld', country: 'Germany' },
      { name: 'Hengeler Mueller', country: 'Germany' },
      { name: 'Hanotiau Tossens Goldman', country: 'Belgium' },
      { name: 'BonelliErede', country: 'Italy' }
    ],
    'north-america': [
      { name: 'Debevoise & Plimpton', country: 'United States' },
      { name: 'King & Spalding', country: 'United States' },
      { name: 'White & Case', country: 'United States' },
      { name: 'Quinn Emanuel Urquhart & Sullivan', country: 'United States' },
      { name: 'WilmerHale', country: 'United States' },
      { name: 'Arnold & Porter', country: 'United States' },
      { name: 'Chaffetz Lindsey', country: 'United States' },
      { name: 'Skadden', country: 'United States' },
      { name: 'Latham & Watkins', country: 'United States' },
      { name: 'Foley Hoag', country: 'United States' },
      { name: 'Sidley Austin', country: 'United States' },
      { name: 'Covington & Burling', country: 'United States' },
      { name: 'Gibson, Dunn & Crutcher', country: 'United States' },
      { name: 'Cleary Gottlieb Steen & Hamilton', country: 'United States' },
      { name: 'Vinson & Elkins', country: 'United States' },
      { name: 'Baker Botts', country: 'United States' }
    ],
    'latin-america': [
      { name: 'Bullard Falla Ezcurra+', country: 'Peru' },
      { name: 'RODRIGO, Elías & Medrano', country: 'Peru' },
      { name: 'Miranda & Amado', country: 'Peru' },
      { name: 'Carey', country: 'Chile' },
      { name: 'Jana & Gil Dispute Resolution', country: 'Chile' },
      { name: 'Claro & Cia.', country: 'Chile' },
      { name: 'Mattos Filho', country: 'Brazil' },
      { name: 'Pinheiro Neto Advogados', country: 'Brazil' },
      { name: 'TozziniFreire Advogados', country: 'Brazil' },
      { name: "Marval O'Farrell Mairal", country: 'Argentina' },
      { name: 'Bomchil', country: 'Argentina' },
      { name: 'Von Wobeser y Sierra', country: 'Mexico' },
      { name: 'Galicia Abogados', country: 'Mexico' },
      { name: 'Creel, García-Cuéllar, Aiza y Enríquez', country: 'Mexico' },
      { name: 'Posse Herrera Ruiz', country: 'Colombia' },
      { name: 'Pérez-Llorca Colombia²', country: 'Colombia' }
    ],
    asia: [
      { name: 'Allen & Gledhill', country: 'Singapore' },
      { name: 'WongPartnership', country: 'Singapore' },
      { name: 'Drew & Napier', country: 'Singapore' },
      { name: 'Rajah & Tann', country: 'Singapore' },
      { name: 'Kim & Chang', country: 'South Korea' },
      { name: 'Bae, Kim & Lee', country: 'South Korea' },
      { name: 'Yulchon', country: 'South Korea' },
      { name: 'AZB & Partners', country: 'India' },
      { name: 'Cyril Amarchand Mangaldas', country: 'India' },
      { name: 'Shardul Amarchand Mangaldas', country: 'India' },
      { name: 'Trilegal', country: 'India' },
      { name: 'Khaitan & Co', country: 'India' },
      { name: 'Mori Hamada & Matsumoto', country: 'Japan' },
      { name: 'Nishimura & Asahi', country: 'Japan' },
      { name: 'Nagashima Ohno & Tsunematsu', country: 'Japan' },
      { name: 'Fangda Partners', country: 'China' },
      { name: 'JunHe', country: 'China' },
      { name: 'YKVN', country: 'Vietnam' }
    ],
    africa: [
      { name: 'Zulficar & Partners', country: 'Egypt' },
      { name: 'Youssef + Partners', country: 'Egypt' },
      { name: 'Matouk Bassiouny', country: 'Egypt' },
      { name: 'Shalakany Law Office', country: 'Egypt' },
      { name: 'Shahid Law Firm', country: 'Egypt' },
      { name: 'ENS', country: 'South Africa' },
      { name: 'Bowmans', country: 'South Africa' },
      { name: 'Webber Wentzel', country: 'South Africa' },
      { name: 'AELEX', country: 'Nigeria' },
      { name: 'Aluko & Oyebode', country: 'Nigeria' },
      { name: 'TEMPLARS', country: 'Nigeria' },
      { name: 'G. Elias', country: 'Nigeria' },
      { name: 'Banwo & Ighodalo', country: 'Nigeria' },
      { name: 'Bentsi-Enchill, Letsa & Ankomah', country: 'Ghana' },
      { name: 'AB & David Africa', country: 'Ghana' },
      { name: 'Anjarwalla & Khanna', country: 'Kenya' },
      { name: 'Oraro & Company Advocates', country: 'Kenya' },
      { name: 'Iseme, Kamau & Maema Advocates', country: 'Kenya' }
    ],
    oceania: [
      { name: 'Allens', country: 'Australia' },
      { name: 'Corrs Chambers Westgarth', country: 'Australia' },
      { name: 'Clayton Utz', country: 'Australia' },
      { name: 'MinterEllison', country: 'Australia' },
      { name: 'Gilbert + Tobin', country: 'Australia' },
      { name: 'Johnson Winter Slattery', country: 'Australia' },
      { name: 'Thomson Geer', country: 'Australia' },
      { name: 'McCullough Robertson', country: 'Australia' },
      { name: 'Hall & Wilcox', country: 'Australia' },
      { name: 'HopgoodGanim Lawyers', country: 'Australia' },
      { name: 'Chapman Tripp', country: 'New Zealand' },
      { name: 'Bell Gully', country: 'New Zealand' },
      { name: 'Russell McVeagh', country: 'New Zealand' },
      { name: 'MinterEllisonRuddWatts', country: 'New Zealand' },
      { name: 'Dentons New Zealand', country: 'New Zealand' }
    ]
  }

  const getFilteredFirms = () => {
    if (activeRegion === 'all') {
      return Object.entries(firmsData).flatMap(([region, firms]) => 
        firms.map((firm, idx) => ({ ...firm, region, number: getGlobalNumber(region, idx) }))
      )
    }
    return firmsData[activeRegion]?.map((firm, idx) => ({ 
      ...firm, 
      region: activeRegion, 
      number: getGlobalNumber(activeRegion, idx) 
    })) || []
  }

  const getGlobalNumber = (region, index) => {
    const offsets = {
      europe: 1,
      'north-america': 18,
      'latin-america': 34,
      asia: 50,
      africa: 68,
      oceania: 86
    }
    return offsets[region] + index
  }

  const getRegionLabel = (region) => {
    const labels = {
      europe: 'EUROPE',
      'north-america': 'NORTH AMERICA',
      'latin-america': 'LATIN AMERICA',
      asia: 'ASIA',
      africa: 'AFRICA',
      oceania: 'AUSTRALIA & OCEANIA'
    }
    return labels[region]
  }

  const getRegionCount = (region) => {
    return firmsData[region]?.length || 0
  }

  return (
    <div className="global100-page">
      <section className="global100-hero">
        <div className="global100-hero-overlay"></div>
        <div className="global100-hero-content">
          <div className="global100-hero-text">
            <h1 className="global100-hero-title">CIMA GLOBAL 100</h1>
            <h2 className="global100-hero-year">2026</h2>
            <p className="global100-hero-subtitle">
              Leading International Arbitration Law Firms of the World
            </p>
          </div>
        </div>
      </section>

      <section className="global100-intro">
        <div className="container">
          <div className="intro-content">
            <p className="intro-text">
              Firms are allocated according to their home jurisdiction rather than merely the location of a significant 
              international arbitration office. Each firm appears only once.
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
                {region.id !== 'all' && <span className="region-count">{getRegionCount(region.id)}</span>}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="leading-firms">
        <div className="container">
          <div className="firms-grid">
            {getFilteredFirms().map((firm, index) => (
              <div key={index} className="firm-card-global">
                <div className="firm-number">{firm.number}</div>
                <div className="firm-details">
                  <h3 className="firm-name">{firm.name}</h3>
                  <p className="firm-country">
                    <MapPin size={16} />
                    {firm.country}
                  </p>
                  {activeRegion === 'all' && (
                    <span className="firm-region-badge">{getRegionLabel(firm.region)}</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="methodology-section">
        <div className="container">
          <div className="methodology-box">
            <h2>Methodology</h2>
            <p>
              The CIMA Global 100 recognises 100 law firms with significant standing or capability in international 
              arbitration and cross-border dispute resolution. Firms are grouped geographically and appear once only, 
              ordinarily according to their jurisdiction of origin, principal institutional identity or, in the case of 
              firms formed through international mergers, their most appropriate home jurisdiction for purposes of this 
              publication.
            </p>
            <p>
              Inclusion may take account of international arbitration experience, significant mandates, practitioner 
              reputation, cross-border capability, regional leadership and recognition in established professional 
              directories and arbitration publications. The numbering is for identification and presentation only and 
              does not constitute an ordinal ranking from 1 to 100.
            </p>
            <p>
              Inclusion does not imply endorsement, accreditation or sponsorship by CIMA, and omission should not be 
              interpreted as an assessment that another firm is inferior. Firm names, structures and affiliations may 
              change and should be verified as at the date of publication.
            </p>
            <div className="footnotes">
              <p><strong>Footnotes:</strong></p>
              <p>¹ International firms formed through significant cross-border mergers are assigned to a single jurisdiction for classification purposes only.</p>
              <p>² Where a firm's present identity results from a merger, combination or international network, the stated country reflects the practice being recognised rather than necessarily the historical origin of the wider international organisation.</p>
            </div>
            <p className="citation">
              <strong>Suggested citation:</strong> CIMA Global 100: Leading International Arbitration Law Firms of the World 2026, 
              Center for International Mediators and Arbitrators (CIMA).
            </p>
          </div>
        </div>
      </section>

      <section className="regional-coverage">
        <div className="container">
          <h2>Regional Distribution</h2>
          <p className="section-subtitle">
            The Global 100 spans six regions, representing the world's leading arbitration practices
          </p>
          <div className="regions-stats-grid">
            <div className="region-stat-card">
              <div className="region-stat-number">17</div>
              <h3>Europe</h3>
              <p>Leading firms across UK, France, Switzerland, Germany, Belgium, and Italy</p>
            </div>
            <div className="region-stat-card">
              <div className="region-stat-number">16</div>
              <h3>North America</h3>
              <p>Top-tier practices in the United States</p>
            </div>
            <div className="region-stat-card">
              <div className="region-stat-number">16</div>
              <h3>Latin America</h3>
              <p>Distinguished firms in Peru, Chile, Brazil, Argentina, Mexico, and Colombia</p>
            </div>
            <div className="region-stat-card">
              <div className="region-stat-number">18</div>
              <h3>Asia</h3>
              <p>Excellence across Singapore, South Korea, India, Japan, China, and Vietnam</p>
            </div>
            <div className="region-stat-card">
              <div className="region-stat-number">18</div>
              <h3>Africa</h3>
              <p>Premier practices in Egypt, South Africa, Nigeria, Ghana, and Kenya</p>
            </div>
            <div className="region-stat-card">
              <div className="region-stat-number">15</div>
              <h3>Australia & Oceania</h3>
              <p>Leading firms in Australia and New Zealand</p>
            </div>
          </div>
        </div>
      </section>

      <section className="nomination-section">
        <div className="container">
          <div className="nomination-box">
            <h2>Nominate a Firm for Future Editions</h2>
            <p>
              Know an exceptional international arbitration firm that deserves recognition? We welcome nominations 
              for inclusion in future CIMA Global 100 editions. Nominations are reviewed annually by our editorial team.
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
            <h2>Looking for International Arbitration Expertise?</h2>
            <p>Connect with leading law firms from the CIMA Global 100 for your dispute resolution needs</p>
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

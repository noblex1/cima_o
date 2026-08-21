import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Users, Search, Shield, CheckCircle, Globe, Award, UserCheck, FileText, Filter } from 'lucide-react'
import './Membership.css'

const RollOfMediators = () => {
  return (
    <div className="membership-page">
      <section className="roll-hero">
        <div className="roll-hero-overlay"></div>
        <div className="roll-hero-content">
          <div className="roll-hero-text">
            <h1 className="roll-hero-title">Roll of Certified International Mediators and Arbitrators</h1>
            <p className="roll-hero-subtitle">
              Welcome to the official Roll of Mediators and Arbitrators. This directory features qualified professionals recognized by the Center for International Mediators and Arbitrators (CIMA) for their commitment to excellence in dispute resolution.
            </p>
          </div>
        </div>
      </section>

      <section className="roll-intro">
        <div className="container">
          <div className="intro-text">
            <h2>About the Roll</h2>
            <p>
              Our roll is organized into three distinguished categories, reflecting different levels of 
              professional achievement, experience, and contribution to the field of alternative dispute resolution:
            </p>
            
            <div className="roll-categories">
              <div className="category-card fellows">
                <h3><Award size={24} /> Fellows (FCIMArb)</h3>
                <p>
                  Highly experienced professionals with extensive contributions to the field. Fellows represent 
                  the pinnacle of ADR expertise, with substantial case experience, publications, teaching roles, 
                  and leadership in advancing dispute resolution practices.
                </p>
              </div>

              <div className="category-card members">
                <h3><Users size={24} /> Members (MCIMArb)</h3>
                <p>
                  Practicing mediators and arbitrators who have demonstrated competence, practical experience, 
                  and adherence to professional standards. Members are actively engaged in dispute resolution 
                  and maintain current qualifications.
                </p>
              </div>

              <div className="category-card associates">
                <h3><UserCheck size={24} /> Associates (ACIMArb)</h3>
                <p>
                  Emerging professionals actively developing their ADR skills and experience. Associates have 
                  completed foundational training and are building their practice under the guidance of more 
                  experienced practitioners.
                </p>
              </div>
            </div>

            <p className="browse-note">
              Browse through each category to learn more about the individuals listed by their expertise, 
              location, practice areas, language capabilities, industry specialization, and professional biography 
              in mediation and arbitration.
            </p>
          </div>
        </div>
      </section>

      <section className="fellows-section">
        <div className="container">
          <div className="section-header-roll">
            <h2>Fellows (FCIMArb)</h2>
            <p>Distinguished professionals with extensive ADR experience and leadership</p>
          </div>

          <div className="fellows-list">
            <div className="fellow-item">
              <div className="fellow-name">Dr. Osei Bonsu Dickson FCIMArb</div>
              <div className="fellow-title">Global Vice President, CIMA, UNITED KINGDOM</div>
            </div>

            <div className="fellow-item">
              <div className="fellow-name">Mustafa WNORNU, FCIMArb, FCIArbs</div>
              <div className="fellow-title">International Arbitrator, ACCRA, GHANA, UNITED KINGDOM</div>
            </div>

            <div className="fellow-item">
              <div className="fellow-name">Mohammed Tata, FCIMArb, FCIMArb</div>
              <div className="fellow-title">Barrister, Present Minister, UNITED KINGDOM</div>
            </div>

            <div className="fellow-item">
              <div className="fellow-name">Dr Justinah Waziri Kashari, FCIMArbs</div>
              <div className="fellow-title">Retired Judge of High Court of Tanzania, TANZANIA</div>
            </div>

            <div className="fellow-item">
              <div className="fellow-name">Dr. Kolasinjo Moyosn, FCIMArb, FCIArbs</div>
              <div className="fellow-title">Partner, DMY Advocates Abuja, NIGERIA</div>
            </div>

            <div className="fellow-item">
              <div className="fellow-name">Olusola Folorunsho, FCIMArb</div>
              <div className="fellow-title">Managing Partner, Folorunsho Allison & Associates (FAA), GHANA</div>
            </div>

            <div className="fellow-item">
              <div className="fellow-name">Gbenga Ajaing, FCIMArb, FCIMAcc</div>
              <div className="fellow-title">Trainer, Everlands Solicitors LLP, Dublin, IRELAND</div>
            </div>

            <div className="fellow-item">
              <div className="fellow-name">Nazir Ahmedzada, FCIMArb, FCIMAcc</div>
              <div className="fellow-title">Partner & Head of DRC – Azerbaijan & Europe (Dubai), UAE</div>
            </div>

            <div className="fellow-item">
              <div className="fellow-name">Dr. Adegoke Olusola, FCIMArb, FCIMAcc</div>
              <div className="fellow-title">Managing Partner, DeRock Solicitors, NIGERIA</div>
            </div>

            <div className="fellow-item">
              <div className="fellow-name">Priscilla Djagbletey, FCIMArb, FCIMAcc</div>
              <div className="fellow-title">Managing Partner, PD Legal Consult, GHANA, TRINIDAD AND TOBAGO, GUAM</div>
            </div>

            <div className="fellow-item">
              <div className="fellow-name">Thomas Brotz, FCIMArb</div>
              <div className="fellow-title">Partner, Provost Mentor, Johannesburg, SOUTH AFRICA</div>
            </div>

            <div className="fellow-item">
              <div className="fellow-name">Vraja Kishen, FCIMArb</div>
              <div className="fellow-title">Partner, KMK Advocates and Solicitors, INDIA</div>
            </div>

            <div className="fellow-item">
              <div className="fellow-name">Dorel Garaway FCIMArb, FCIMArch (United Kingdom)</div>
            </div>

            <div className="fellow-item">
              <div className="fellow-name">Justice Sir Dennis Dominic Adjei FCO, FCIMArb (Republic of Ghana)</div>
            </div>

            <div className="fellow-item">
              <div className="fellow-name">Elva Gilardy FCIMArb (Republic of Ghana)</div>
            </div>

            <div className="fellow-item">
              <div className="fellow-name">Prof Freda Owuanaa FUAH, FCIMArb (United Kingdom)</div>
            </div>

            <div className="fellow-item">
              <div className="fellow-name">Fatima Bondie + CBIMArb (Bondie & Herzegovina)</div>
            </div>

            <div className="fellow-item">
              <div className="fellow-name">Nana C Benoru lshaw, FCIMArb (Republic of Ghana)</div>
            </div>

            <div className="fellow-item">
              <div className="fellow-name">Peter E. Nyarko8, MC. PhD, FCCA, FCIARB (The Gambia)</div>
            </div>

            <div className="fellow-item">
              <div className="fellow-name">Justin Peter Aytabsi (ACIArb, FCIMArb) (Republic of Ghana)</div>
            </div>
          </div>
        </div>
      </section>

      <section className="members-section">
        <div className="container">
          <div className="section-header-roll">
            <h2>Members (MCIMArb)</h2>
            <p>Practicing mediators and arbitrators with demonstrated competence</p>
          </div>

          <p className="list-note">
            Our Members represent experienced ADR practitioners across diverse practice areas and jurisdictions. 
            Each member has completed advanced training, demonstrated practical experience, and maintains 
            current professional standards. Contact CIMA to access the full Members directory with detailed 
            profiles, practice areas, and contact information.
          </p>

          <div className="view-full-button">
            <Link to="/contact" className="btn-view-full">
              Request Full Members List <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      <section className="associates-section">
        <div className="container">
          <div className="section-header-roll">
            <h2>Associates (ACIMArb)</h2>
            <p>Emerging professionals developing their ADR expertise</p>
          </div>

          <p className="list-note">
            Our Associates are building their careers in alternative dispute resolution. They have completed 
            CIMA's foundational training and are developing practical experience under supervision. While 
            Associates may not yet have extensive case experience, they bring fresh perspectives and are 
            committed to professional development in mediation and arbitration.
          </p>

          <div className="view-full-button">
            <Link to="/contact" className="btn-view-full">
              Request Full Associates List <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      <section className="membership-eligibility">
        <div className="container">
          <div className="eligibility-content">
            <h2>Becoming a Member of the Roll</h2>
            <p className="lead-text">
              CIMA membership is open to individuals worldwide, irrespective of their country of origin. 
              To become a member of the Center for International Mediators and Arbitrators (CIMA), you 
              choose between three membership categories: Associate (ACIMArb), Member (MCIMArb), or 
              Fellow (FCIMArb).
            </p>

            <div className="eligibility-grid">
              <div className="eligibility-card">
                <h3><UserCheck size={28} /> For Associates</h3>
                <p>
                  Complete CIMA-approved training course and pass the Associate examination. Demonstrate 
                  understanding of ADR principles and provide professional references. No prior dispute 
                  resolution experience required.
                </p>
                <Link to="/membership/qualification-pathway" className="eligibility-link">
                  Learn About Associate Path <ArrowRight size={16} />
                </Link>
              </div>

              <div className="eligibility-card featured">
                <h3><Users size={28} /> For Members</h3>
                <p>
                  Hold Associate status, complete advanced training, and demonstrate practical experience 
                  through case submissions. Pass Member assessment and provide references from established 
                  practitioners. Join a global network of ADR professionals.
                </p>
                <Link to="/membership/qualification-pathway" className="eligibility-link">
                  Learn About Member Path <ArrowRight size={16} />
                </Link>
              </div>

              <div className="eligibility-card">
                <h3><Award size={28} /> For Fellows</h3>
                <p>
                  Demonstrate extensive experience (5-10+ years), leadership contributions to the field, 
                  and distinguished professional standing. Submit comprehensive portfolio and receive 
                  endorsement from current Fellows.
                </p>
                <Link to="/membership/qualification-pathway" className="eligibility-link">
                  Learn About Fellow Path <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="roll-features">
        <div className="container">
          <h2>Roll Features & Search Capabilities</h2>
          <div className="features-grid-large">
            <div className="feature-card-large">
              <Search size={40} />
              <h3>Advanced Search</h3>
              <p>
                Filter by practice area, location, language capabilities, and industry expertise to find 
                the right neutral for your specific dispute. Our directory makes it easy to identify 
                qualified professionals who match your requirements.
              </p>
            </div>

            <div className="feature-card-large">
              <Shield size={40} />
              <h3>Verified Credentials</h3>
              <p>
                All listed professionals have completed CIMA certification, maintain current qualifications, 
                and adhere to our Code of Conduct. We verify credentials and monitor ongoing compliance with 
                professional standards.
              </p>
            </div>

            <div className="feature-card-large">
              <Globe size={40} />
              <h3>Global Coverage</h3>
              <p>
                Access ADR professionals across 33+ countries with diverse jurisdictional experience. Our 
                members serve clients worldwide and understand international dispute resolution frameworks.
              </p>
            </div>

            <div className="feature-card-large">
              <Award size={40} />
              <h3>Quality Assurance</h3>
              <p>
                Members maintain professional indemnity insurance where required, complete annual CPD 
                requirements, and undergo periodic review to ensure continued competence and ethical practice.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="practice-areas-coverage">
        <div className="container">
          <h2>Practice Areas Represented</h2>
          <p className="section-subtitle">Our Roll members offer expertise across diverse practice areas</p>
          <div className="practice-areas-grid-large">
            <div className="practice-area-tag">Commercial Arbitration</div>
            <div className="practice-area-tag">Construction Adjudication</div>
            <div className="practice-area-tag">Investment (ISDS)</div>
            <div className="practice-area-tag">Energy Disputes</div>
            <div className="practice-area-tag">Financial Services</div>
            <div className="practice-area-tag">Technology & IP</div>
            <div className="practice-area-tag">Maritime & Shipping</div>
            <div className="practice-area-tag">International Arbitration</div>
            <div className="practice-area-tag">Sports Arbitration</div>
            <div className="practice-area-tag">Labour & Employment</div>
            <div className="practice-area-tag">Intellectual Property</div>
            <div className="practice-area-tag">Financial Crime</div>
            <div className="practice-area-tag">Customary Mediation</div>
            <div className="practice-area-tag">Real Estate</div>
            <div className="practice-area-tag">Family & Inheritance</div>
            <div className="practice-area-tag">Environmental</div>
          </div>
        </div>
      </section>

      <section className="how-to-use">
        <div className="container">
          <h2>How to Use the Roll</h2>
          <div className="usage-grid">
            <div className="usage-card">
              <div className="usage-number">1</div>
              <h3>Identify Your Needs</h3>
              <p>
                Determine the type of dispute, practice area expertise required, preferred language, 
                and geographic location for your neutral appointment.
              </p>
            </div>

            <div className="usage-card">
              <div className="usage-number">2</div>
              <h3>Search the Roll</h3>
              <p>
                Use our search filters to identify qualified mediators or arbitrators matching your 
                specific requirements. Review detailed profiles and qualifications.
              </p>
            </div>

            <div className="usage-card">
              <div className="usage-number">3</div>
              <h3>Contact CIMA</h3>
              <p>
                Reach out to CIMA's secretariat for assistance with neutral selection, appointment 
                procedures, and case administration support.
              </p>
            </div>

            <div className="usage-card">
              <div className="usage-number">4</div>
              <h3>Make Appointment</h3>
              <p>
                Once you've identified suitable candidates, proceed with appointment through CIMA's 
                institutional framework or direct engagement as appropriate.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-buttons-section">
        <div className="container">
          <div className="cta-buttons-grid">
            <Link to="/contact" className="cta-button primary">
              <Users size={24} />
              <div>
                <h3>Become a Member</h3>
                <p>Join the Roll and enhance your ADR practice</p>
              </div>
            </Link>

            <Link to="/contact" className="cta-button secondary">
              <Search size={24} />
              <div>
                <h3>Request Full Directory</h3>
                <p>Access complete Roll with detailed profiles</p>
              </div>
            </Link>

            <Link to="/contact" className="cta-button secondary">
              <FileText size={24} />
              <div>
                <h3>Register as an Arbitrator</h3>
                <p>Apply for inclusion on CIMA's panel</p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      <section className="final-cta">
        <div className="container">
          <div className="final-cta-content">
            <h2>Join the Roll of Certified Mediators & Arbitrators</h2>
            <p>Enhance your visibility and access opportunities as a listed CIMA neutral recognized across 33+ countries</p>
            <div className="final-cta-buttons">
              <Link to="/contact" className="btn-cta-primary">Apply for Roll Inclusion</Link>
              <Link to="/membership/qualification-pathway" className="btn-cta-secondary">
                View Qualification Requirements
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default RollOfMediators

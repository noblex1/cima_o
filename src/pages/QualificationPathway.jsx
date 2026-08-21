import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Award, GraduationCap, Trophy, CheckCircle, Users, BookOpen, Target, Star, FileText } from 'lucide-react'
import './Membership.css'

const QualificationPathway = () => {
  return (
    <div className="membership-page">
      <section className="membership-hero">
        <div className="membership-hero-overlay"></div>
        <div className="membership-hero-content">
          <div className="membership-hero-text">
            <h1 className="membership-hero-title">CIMA Qualification Pathway</h1>
            <p className="membership-hero-subtitle">
              Learning Becomes Leadership. Join Professionals in 33+ Countries
            </p>
          </div>
        </div>
      </section>

      <section className="pathway-intro">
        <div className="container">
          <div className="intro-content">
            <h2>Your Journey to Professional ADR Excellence</h2>
            <p className="lead-text">
              CIMA offers a structured, internationally recognized qualification pathway that reflects your 
              professional development from foundational knowledge to advanced expertise in alternative dispute 
              resolution. Our three-tiered system provides clear progression milestones, comprehensive training, 
              and globally recognized credentials.
            </p>
            <p>
              Whether you're starting your ADR career or advancing to senior practitioner status, CIMA's 
              qualification pathway provides the framework, support, and recognition you need to succeed.
            </p>
          </div>
        </div>
      </section>

      <section className="pathway-overview">
        <div className="container">
          <div className="pathway-visual">
            <h2>Three Levels of Professional Recognition</h2>
            <p className="section-subtitle">Progress through a structured pathway from entry-level to senior professional status</p>
          </div>

          <div className="pathway-levels">
            <div className="pathway-card associate">
              <div className="pathway-badge">Foundation</div>
              <div className="pathway-icon">
                <BookOpen size={40} />
              </div>
              <h3>Associate Member</h3>
              <div className="pathway-designation-badge">ACIArb</div>
              <p className="pathway-description">
                Begin your ADR journey with foundational knowledge in mediation and arbitration principles, 
                procedures, and practices.
              </p>
              
              <div className="pathway-section">
                <h4><Target size={18} /> Who Is This For?</h4>
                <ul className="pathway-list">
                  <li>Legal professionals entering ADR practice</li>
                  <li>Recent law graduates pursuing alternative careers</li>
                  <li>Business professionals seeking dispute resolution skills</li>
                  <li>Professionals transitioning to ADR from other fields</li>
                </ul>
              </div>

              <div className="pathway-section">
                <h4><CheckCircle size={18} /> Requirements</h4>
                <ul className="pathway-list">
                  <li>Complete CIMA foundational training course (40-60 hours)</li>
                  <li>Pass the Associate written examination</li>
                  <li>Demonstrate understanding of ADR principles and ethics</li>
                  <li>Submit application with two professional references</li>
                  <li>No prior ADR experience required</li>
                </ul>
              </div>

              <div className="pathway-section">
                <h4><Star size={18} /> Benefits</h4>
                <ul className="pathway-list">
                  <li>Use of ACIArb post-nominal designation</li>
                  <li>CIMA membership certificate</li>
                  <li>Access to member resources and training materials</li>
                  <li>Discounts on CIMA courses and events</li>
                  <li>Entry to CIMA's global professional network</li>
                </ul>
              </div>

              <div className="pathway-section">
                <h4><FileText size={18} /> Course Coverage</h4>
                <ul className="pathway-list">
                  <li>Introduction to ADR and conflict resolution</li>
                  <li>Mediation techniques and facilitation skills</li>
                  <li>Arbitration procedures and award writing</li>
                  <li>Ethics and professional conduct</li>
                  <li>Applicable laws and regulations</li>
                </ul>
              </div>

              <Link to="/contact" className="pathway-btn">
                Apply for Associate <ArrowRight size={18} />
              </Link>
            </div>

            <div className="pathway-card member featured">
              <div className="pathway-badge">Professional</div>
              <div className="pathway-icon">
                <Award size={40} />
              </div>
              <h3>Member</h3>
              <div className="pathway-designation-badge">MCIArb</div>
              <p className="pathway-description">
                Advance to professional status with demonstrated practical experience and specialized 
                competence in mediation or arbitration.
              </p>
              
              <div className="pathway-section">
                <h4><Target size={18} /> Who Is This For?</h4>
                <ul className="pathway-list">
                  <li>Associates ready to advance their qualification</li>
                  <li>Practitioners with 2-5 years ADR experience</li>
                  <li>Professionals conducting mediations or arbitrations</li>
                  <li>Those seeking enhanced professional recognition</li>
                </ul>
              </div>

              <div className="pathway-section">
                <h4><CheckCircle size={18} /> Requirements</h4>
                <ul className="pathway-list">
                  <li>Hold Associate membership (ACIArb) for minimum 12 months</li>
                  <li>Complete advanced CIMA training modules (60-80 hours)</li>
                  <li>Demonstrate practical experience (minimum 3-5 cases as neutral or advisor)</li>
                  <li>Pass Member-level assessment and practical evaluation</li>
                  <li>Submit case studies or portfolio of work</li>
                  <li>Professional references from CIMA Fellows or experienced practitioners</li>
                </ul>
              </div>

              <div className="pathway-section">
                <h4><Star size={18} /> Benefits</h4>
                <ul className="pathway-list">
                  <li>Use of MCIArb professional designation</li>
                  <li>Inclusion on CIMA Roll of Mediators & Arbitrators</li>
                  <li>Enhanced professional profile and visibility</li>
                  <li>Priority access to training and CPD programs</li>
                  <li>Eligibility for panel appointments</li>
                  <li>Voting rights in CIMA governance</li>
                </ul>
              </div>

              <div className="pathway-section">
                <h4><FileText size={18} /> Advanced Training</h4>
                <ul className="pathway-list">
                  <li>Advanced arbitration and complex case management</li>
                  <li>Specialized mediation techniques and intervention strategies</li>
                  <li>Multi-party and cross-border disputes</li>
                  <li>Sector-specific ADR (construction, commercial, investment)</li>
                  <li>Mock proceedings and practical assessments</li>
                </ul>
              </div>

              <Link to="/contact" className="pathway-btn featured-btn">
                Apply for Member <ArrowRight size={18} />
              </Link>
            </div>

            <div className="pathway-card fellow">
              <div className="pathway-badge">Senior</div>
              <div className="pathway-icon">
                <Trophy size={40} />
              </div>
              <h3>Fellow</h3>
              <div className="pathway-designation-badge">FCIArb</div>
              <p className="pathway-description">
                Achieve the highest level of professional recognition, reserved for senior practitioners 
                with extensive experience and distinguished contributions to ADR.
              </p>
              
              <div className="pathway-section">
                <h4><Target size={18} /> Who Is This For?</h4>
                <ul className="pathway-list">
                  <li>Senior ADR practitioners with extensive case experience</li>
                  <li>Established arbitrators and mediators (5-10+ years)</li>
                  <li>Leaders contributing to ADR development and education</li>
                  <li>Those seeking the highest professional recognition</li>
                </ul>
              </div>

              <div className="pathway-section">
                <h4><CheckCircle size={18} /> Requirements</h4>
                <ul className="pathway-list">
                  <li>Hold Member status (MCIArb) for minimum 3-5 years</li>
                  <li>Extensive ADR practice experience (minimum 5-10 years as neutral)</li>
                  <li>Demonstrated leadership in the ADR field</li>
                  <li>Significant contributions to ADR (publications, teaching, institution building)</li>
                  <li>Portfolio submission documenting substantial case experience</li>
                  <li>Endorsement from at least two CIMA Fellows</li>
                  <li>Interview or presentation before Fellowship Committee</li>
                </ul>
              </div>

              <div className="pathway-section">
                <h4><Star size={18} /> Benefits</h4>
                <ul className="pathway-list">
                  <li>Use of prestigious FCIArb designation</li>
                  <li>Enhanced Roll listing with senior status</li>
                  <li>Leadership roles in CIMA committees and governance</li>
                  <li>Invited speaker at CIMA events and conferences</li>
                  <li>Mentorship opportunities for junior members</li>
                  <li>International recognition as a leading ADR expert</li>
                  <li>Eligibility for complex, high-value appointments</li>
                </ul>
              </div>

              <div className="pathway-section">
                <h4><FileText size={18} /> Expected Contributions</h4>
                <ul className="pathway-list">
                  <li>Publications in ADR journals or books</li>
                  <li>Teaching or training other ADR professionals</li>
                  <li>Service on institutional panels or committees</li>
                  <li>Development of ADR rules, procedures, or standards</li>
                  <li>Thought leadership and industry advancement</li>
                </ul>
              </div>

              <Link to="/contact" className="pathway-btn">
                Apply for Fellow <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="comparison-table-section">
        <div className="container">
          <h2>Qualification Comparison</h2>
          <div className="table-responsive">
            <table className="comparison-table">
              <thead>
                <tr>
                  <th>Criteria</th>
                  <th>Associate (ACIArb)</th>
                  <th>Member (MCIArb)</th>
                  <th>Fellow (FCIArb)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Entry Requirements</strong></td>
                  <td>Legal or professional background</td>
                  <td>ACIArb + 2-5 years experience</td>
                  <td>MCIArb + 5-10 years experience</td>
                </tr>
                <tr>
                  <td><strong>Training Hours</strong></td>
                  <td>40-60 hours</td>
                  <td>60-80 hours (additional)</td>
                  <td>Ongoing CPD + contributions</td>
                </tr>
                <tr>
                  <td><strong>Practical Experience</strong></td>
                  <td>Not required</td>
                  <td>3-5 cases minimum</td>
                  <td>Extensive (50+ cases)</td>
                </tr>
                <tr>
                  <td><strong>Assessment</strong></td>
                  <td>Written examination</td>
                  <td>Assessment + case studies</td>
                  <td>Portfolio + interview</td>
                </tr>
                <tr>
                  <td><strong>Roll Inclusion</strong></td>
                  <td>Not automatic</td>
                  <td>Yes</td>
                  <td>Yes (senior status)</td>
                </tr>
                <tr>
                  <td><strong>Timeline</strong></td>
                  <td>3-6 months</td>
                  <td>12-24 months from ACIArb</td>
                  <td>3-5 years from MCIArb</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="application-process">
        <div className="container">
          <h2>Application Process</h2>
          <p className="section-subtitle">Follow these steps to apply for CIMA membership at any level</p>
          
          <div className="process-steps-detailed">
            <div className="process-step-detailed">
              <div className="step-header">
                <div className="step-number">1</div>
                <h3>Enroll in Training</h3>
              </div>
              <div className="step-content">
                <p>
                  Begin by enrolling in the appropriate CIMA training program for your desired qualification level. 
                  Our courses combine theoretical knowledge with practical skills through lectures, case studies, 
                  and mock proceedings.
                </p>
                <ul>
                  <li>Choose your specialization (mediation, arbitration, or both)</li>
                  <li>Select from in-person or online delivery formats</li>
                  <li>Complete required coursework and assignments</li>
                </ul>
              </div>
            </div>

            <div className="process-step-detailed">
              <div className="step-header">
                <div className="step-number">2</div>
                <h3>Complete Assessment</h3>
              </div>
              <div className="step-content">
                <p>
                  Successfully complete the assessment requirements for your level, which may include written 
                  examinations, practical evaluations, case studies, or portfolio submissions.
                </p>
                <ul>
                  <li>Associate: Written examination on ADR fundamentals</li>
                  <li>Member: Advanced assessment plus case study submission</li>
                  <li>Fellow: Comprehensive portfolio and interview</li>
                </ul>
              </div>
            </div>

            <div className="process-step-detailed">
              <div className="step-header">
                <div className="step-number">3</div>
                <h3>Submit Application</h3>
              </div>
              <div className="step-content">
                <p>
                  Complete the membership application form with all required supporting documentation, 
                  including references, certificates, and evidence of experience.
                </p>
                <ul>
                  <li>Complete online application form</li>
                  <li>Upload training certificates and transcripts</li>
                  <li>Provide professional references (2-3 required)</li>
                  <li>Pay application and membership fees</li>
                </ul>
              </div>
            </div>

            <div className="process-step-detailed">
              <div className="step-header">
                <div className="step-number">4</div>
                <h3>Application Review</h3>
              </div>
              <div className="step-content">
                <p>
                  CIMA's Membership Committee reviews your application to ensure all requirements are met 
                  and verifies your qualifications and experience.
                </p>
                <ul>
                  <li>Review typically takes 4-6 weeks</li>
                  <li>Committee may request additional information</li>
                  <li>Notification of decision via email</li>
                </ul>
              </div>
            </div>

            <div className="process-step-detailed">
              <div className="step-header">
                <div className="step-number">5</div>
                <h3>Receive Certification</h3>
              </div>
              <div className="step-content">
                <p>
                  Upon approval, receive your CIMA membership certificate, welcome package, and begin 
                  using your post-nominal designation.
                </p>
                <ul>
                  <li>Membership certificate with post-nominals</li>
                  <li>Member ID card and welcome package</li>
                  <li>Access to member portal and resources</li>
                  <li>Listing on Roll (for Members and Fellows)</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="membership-benefits">
        <div className="container">
          <h2>Comprehensive Membership Benefits</h2>
          <div className="benefits-grid-expanded">
            <div className="benefit-card-expanded">
              <Award size={36} />
              <h3>Professional Recognition</h3>
              <p>
                Internationally recognized post-nominal designations (ACIArb, MCIArb, FCIArb) that demonstrate 
                your commitment to ADR excellence and adherence to global standards.
              </p>
            </div>

            <div className="benefit-card-expanded">
              <Users size={36} />
              <h3>Roll of Mediators & Arbitrators</h3>
              <p>
                Members and Fellows are listed on CIMA's searchable Roll, making you visible to parties, 
                counsel, and institutions seeking qualified neutrals.
              </p>
            </div>

            <div className="benefit-card-expanded">
              <BookOpen size={36} />
              <h3>Continuing Professional Development</h3>
              <p>
                Access comprehensive training programs, webinars, workshops, and conferences to maintain 
                competence and stay current with ADR developments.
              </p>
            </div>

            <div className="benefit-card-expanded">
              <GraduationCap size={36} />
              <h3>Global Network</h3>
              <p>
                Connect with over 500+ ADR professionals across 33+ countries, facilitating knowledge exchange, 
                collaboration, and cross-border opportunities.
              </p>
            </div>

            <div className="benefit-card-expanded">
              <FileText size={36} />
              <h3>Resources & Publications</h3>
              <p>
                Access member-exclusive resources including model clauses, practice guidelines, case law updates, 
                and CIMA publications on ADR practice.
              </p>
            </div>

            <div className="benefit-card-expanded">
              <Target size={36} />
              <h3>Panel Appointments</h3>
              <p>
                Eligibility for appointment to CIMA panels and rosters for commercial, construction, investment, 
                and other specialized dispute resolution work.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="cpd-section">
        <div className="container">
          <div className="cpd-content">
            <div className="cpd-text">
              <h2>Continuing Professional Development</h2>
              <p className="lead-text">
                CIMA members are committed to lifelong learning and professional development. All members 
                must complete annual CPD requirements to maintain their membership and stay current with 
                evolving ADR practices.
              </p>
              
              <div className="cpd-requirements-grid">
                <div className="cpd-requirement-card">
                  <h4>Associate (ACIArb)</h4>
                  <div className="cpd-hours">10 Hours</div>
                  <p>Annual CPD requirement</p>
                </div>
                <div className="cpd-requirement-card">
                  <h4>Member (MCIArb)</h4>
                  <div className="cpd-hours">15 Hours</div>
                  <p>Annual CPD requirement</p>
                </div>
                <div className="cpd-requirement-card">
                  <h4>Fellow (FCIArb)</h4>
                  <div className="cpd-hours">20 Hours</div>
                  <p>Annual CPD requirement</p>
                </div>
              </div>

              <h3>Qualifying CPD Activities</h3>
              <div className="cpd-activities">
                <ul>
                  <li><CheckCircle size={18} /> Attending CIMA training courses and workshops</li>
                  <li><CheckCircle size={18} /> Participating in webinars and online learning</li>
                  <li><CheckCircle size={18} /> Attending ADR conferences and seminars</li>
                  <li><CheckCircle size={18} /> Teaching or training other ADR professionals</li>
                  <li><CheckCircle size={18} /> Publishing articles or papers on ADR topics</li>
                  <li><CheckCircle size={18} /> Serving on ADR committees or working groups</li>
                  <li><CheckCircle size={18} /> Peer learning and study groups</li>
                  <li><CheckCircle size={18} /> Research and case law review</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="testimonials-section">
        <div className="container">
          <h2>What Our Members Say</h2>
          <div className="testimonials-grid">
            <div className="testimonial-card">
              <div className="testimonial-quote">"</div>
              <p>
                "CIMA's structured pathway gave me the confidence and credentials to establish myself as 
                a commercial arbitrator. The ACIArb to MCIArb progression was clear and well-supported."
              </p>
              <div className="testimonial-author">
                <strong>Sarah M.</strong>
                <span>Member (MCIArb), Kenya</span>
              </div>
            </div>

            <div className="testimonial-card">
              <div className="testimonial-quote">"</div>
              <p>
                "Achieving Fellow status was a career milestone. CIMA's recognition opened doors to international 
                appointments and leadership opportunities I never imagined."
              </p>
              <div className="testimonial-author">
                <strong>Dr. James O.</strong>
                <span>Fellow (FCIArb), Nigeria</span>
              </div>
            </div>

            <div className="testimonial-card">
              <div className="testimonial-quote">"</div>
              <p>
                "The training quality and global network have been invaluable. CIMA's qualification pathway 
                is truly world-class and recognized across Africa and beyond."
              </p>
              <div className="testimonial-author">
                <strong>Amina K.</strong>
                <span>Associate (ACIArb), Ghana</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="faq-section">
        <div className="container">
          <h2>Frequently Asked Questions</h2>
          <div className="faq-grid">
            <div className="faq-item">
              <h4>How long does it take to become a Member?</h4>
              <p>
                From Associate to Member typically takes 12-24 months, depending on your pace of training 
                completion and accumulation of practical experience.
              </p>
            </div>

            <div className="faq-item">
              <h4>Can I apply directly for Member status?</h4>
              <p>
                Experienced practitioners with substantial ADR experience may apply for direct entry to Member 
                status, subject to assessment and verification of qualifications.
              </p>
            </div>

            <div className="faq-item">
              <h4>Are CIMA qualifications recognized internationally?</h4>
              <p>
                Yes, CIMA qualifications are recognized across 33+ countries and by major ADR institutions 
                worldwide, following international best practices.
              </p>
            </div>

            <div className="faq-item">
              <h4>What if I'm already qualified in another jurisdiction?</h4>
              <p>
                CIMA recognizes equivalent qualifications from other reputable ADR institutions and may grant 
                advanced standing or exemptions on a case-by-case basis.
              </p>
            </div>

            <div className="faq-item">
              <h4>Can I specialize in a specific practice area?</h4>
              <p>
                Yes, CIMA offers specialized training pathways in areas like construction, investment, commercial, 
                and other practice areas.
              </p>
            </div>

            <div className="faq-item">
              <h4>What happens if I don't meet CPD requirements?</h4>
              <p>
                Failure to meet annual CPD requirements may result in membership suspension. Members must remedy 
                the deficiency to maintain active status.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="final-cta">
        <div className="container">
          <div className="final-cta-content">
            <h2>Begin Your Qualification Journey Today</h2>
            <p>Join professionals across 33+ countries who have advanced their careers through CIMA's qualification pathway</p>
            <div className="final-cta-buttons">
              <a href="https://cimalearn.thecima.org" className="btn-cta-primary" target="_blank" rel="noreferrer">
                Explore Training Programs
              </a>
              <Link to="/contact" className="btn-cta-secondary">Contact Admissions Team</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default QualificationPathway

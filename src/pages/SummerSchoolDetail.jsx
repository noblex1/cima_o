import React from 'react'
import { Calendar, Clock, Mail, Phone, Download } from 'lucide-react'
import './SummerSchoolDetail.css'
import summerSchoolPosterPDF from '../../assets/2026 CIMA Summer School (2) (1).pdf'
import summerSchoolPosterImage from '../../assets/WhatsApp Image 2026-08-22 at 17.14.01.jpeg'

const SummerSchoolDetail = () => {
  return (
    <div className="event-detail-page">
      {/* Hero Section */}
      <section className="event-detail-hero">
        <div className="container">
          <div className="event-detail-hero-content">
            <h1>APPLY - 2026 CIMA Summer School on Arbitration</h1>
            <p className="event-subtitle">
              Law, Practice and Procedure in Domestic and International Arbitration
            </p>
          </div>
        </div>
      </section>

      {/* Event Info Section */}
      <section className="event-info-section">
        <div className="container">
          <div className="event-info-grid">
            {/* Main Content */}
            <div className="event-main-content">
              <div className="event-description-box">
                <h2>About the Program</h2>
                <p>
                  The Center for International Mediators and Arbitrators (CIMA) is pleased to announce the 
                  intensive training of the next crop of highly talented professionals natural and international arbitration.
                </p>
              </div>

              <div className="event-details-grid">
                <div className="event-detail-item">
                  <div className="detail-icon">
                    <Calendar size={24} />
                  </div>
                  <div className="detail-content">
                    <h4>DATE</h4>
                    <p>26 Aug - 4 Sept, 2026</p>
                  </div>
                </div>

                <div className="event-detail-item">
                  <div className="detail-icon">
                    <Clock size={24} />
                  </div>
                  <div className="detail-content">
                    <h4>TIME</h4>
                    <p>0900 - 1600 Hours GMT</p>
                  </div>
                </div>
              </div>

              <div className="course-fee-highlight">
                <h3>Course Fee</h3>
                <p className="fee-amount">GHS 5,500</p>
              </div>

              <div className="event-contact-info">
                <div className="contact-item">
                  <Phone size={18} />
                  <span>+233 (0) 536 735 535</span>
                </div>
                <div className="contact-item">
                  <Mail size={18} />
                  <span>info@thecima.org</span>
                </div>
              </div>

              <div className="event-action-buttons">
                <a 
                  href="https://docs.google.com/forms/d/e/1FAIpQLSccgPuaAam6Cc9oTa3cnAWM5skF_SGyGtiOOlmz1GlUIjqMsg/viewform" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="btn-apply-now"
                >
                  Apply Now
                </a>
                <a 
                  href={summerSchoolPosterPDF} 
                  download 
                  className="btn-download-brochure"
                >
                  <Download size={18} />
                  Download Brochure
                </a>
              </div>
            </div>

            {/* Sidebar with Poster */}
            <div className="event-sidebar">
              <div className="event-poster-card">
                <div className="poster-preview">
                  <img 
                    src={summerSchoolPosterImage}
                    alt="Summer School Poster"
                    className="poster-image"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Program Details Section */}
      <section className="program-details-section">
        <div className="container">
          <h2>Programme Details</h2>
          <div className="program-content">
            <h3>LAW, PRACTICE AND PROCEDURE IN DOMESTIC & INTERNATIONAL ARBITRATION</h3>
            
            <div className="program-info-box">
              <h4>Training Schedule</h4>
              <p><strong>Dates:</strong> 26 Aug - 4 Sept, 2026</p>
              <p><strong>Time:</strong> 0900 - 1600 Hours GMT</p>
              <p><strong>Enquiries:</strong> +233 (0) 536 735 535</p>
            </div>

            <div className="program-info-box">
              <h4>Distinguished Faculty</h4>
              <p>Learn from leading experts in international arbitration:</p>
              <ul>
                <li><strong>W. Patrick McPhilamy III</strong></li>
                <li><strong>Justice Dennis Adjei</strong></li>
                <li><strong>Dr Osei Bonsu Dickson</strong></li>
                <li><strong>Mankiranjit Kaur</strong></li>
                <li><strong>David A. Asiedu</strong></li>
                <li><strong>Dr Misha Kumar</strong></li>
                <li><strong>Dr Simon Peter Tsekpo</strong></li>
                <li><strong>Abasiemdiong Etuk</strong></li>
                <li><strong>Michael Smith</strong></li>
                <li><strong>Dr Kolawale Mayomi</strong></li>
              </ul>
            </div>

            <div className="program-info-box">
              <h4>What You'll Learn</h4>
              <ul>
                <li>Fundamentals of domestic and international arbitration</li>
                <li>Arbitration law, practice and procedure</li>
                <li>Drafting arbitration agreements and awards</li>
                <li>Case management and evidence presentation</li>
                <li>Ethics and professional conduct in arbitration</li>
                <li>Practical skills through simulations and mock proceedings</li>
              </ul>
            </div>

            <div className="program-info-box">
              <h4>Who Should Attend</h4>
              <ul>
                <li>Lawyers and legal practitioners</li>
                <li>In-house counsels</li>
                <li>Corporate executives and managers</li>
                <li>Government officials</li>
                <li>Aspiring arbitrators and mediators</li>
                <li>Anyone interested in alternative dispute resolution</li>
              </ul>
            </div>

            <div className="program-info-box">
              <h4>Certification</h4>
              <p>Upon successful completion, participants will receive a certificate from the Center for International Mediators and Arbitrators (CIMA).</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="event-cta-section">
        <div className="container">
          <div className="event-cta-content">
            <h2>Ready to Join?</h2>
            <p>Secure your spot in the 2026 CIMA Summer School and take your career to the next level.</p>
            <a 
              href="https://docs.google.com/forms/d/e/1FAIpQLSccgPuaAam6Cc9oTa3cnAWM5skF_SGyGtiOOlmz1GlUIjqMsg/viewform" 
              target="_blank" 
              rel="noreferrer" 
              className="btn-register-large"
            >
              Register Now
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default SummerSchoolDetail

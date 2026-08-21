import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Calendar, CreditCard, RefreshCw, CheckCircle, AlertCircle, Clock, DollarSign, FileText, Mail } from 'lucide-react'
import './Membership.css'

const MembershipRenewals = () => {
  return (
    <div className="membership-page">
      <section className="renewal-hero">
        <div className="renewal-hero-overlay"></div>
        <div className="renewal-hero-content">
          <div className="renewal-hero-text">
            <h1 className="renewal-hero-title">Membership Certificate Renewal Policy</h1>
            <p className="renewal-hero-subtitle">
              We hope you are all benefiting from CIMA's membership. Our membership certificates have an 
              annual expiration date, and we encourage you to renew your certificate to continue accessing 
              all membership benefits.
            </p>
          </div>
        </div>
      </section>

      <section className="annual-fees">
        <div className="container">
          <h2>Annual Renewal Fees</h2>
          <div className="fees-comparison">
            <div className="fees-column">
              <h3>Membership Designations</h3>
              <p className="column-subtitle">Highly esteemed designations for mediator/arbitrators</p>
              <div className="fee-table">
                <div className="fee-row">
                  <span className="fee-label">ACIArb</span>
                  <span className="fee-amount">£60</span>
                </div>
                <div className="fee-row">
                  <span className="fee-label">MCIArb</span>
                  <span className="fee-amount">£80</span>
                </div>
              </div>
            </div>

            <div className="fees-column highlighted">
              <h3>Certificate of Attendance</h3>
              <p className="column-subtitle">(granted from trainings)</p>
              <div className="fee-table">
                <div className="fee-row">
                  <span className="fee-label">ACIArb</span>
                  <span className="fee-amount">£40.00</span>
                </div>
                <div className="fee-row">
                  <span className="fee-label">MCIArb</span>
                  <span className="fee-amount">£60.00</span>
                </div>
                <div className="fee-row">
                  <span className="fee-label">FCIArb</span>
                  <span className="fee-amount">£100.00</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="payment-methods">
        <div className="container">
          <div className="payment-content">
            <div className="payment-text">
              <h2>Payment Methods</h2>
              <p className="lead-text">Four ways to renew:</p>
              <ul className="payment-list">
                <li>
                  <CreditCard size={24} />
                  <div>
                    <h4>Credit Card</h4>
                    <p>Pay online using Visa, Mastercard, or other major credit cards at checkout</p>
                  </div>
                </li>
                <li>
                  <FileText size={24} />
                  <div>
                    <h4>PayPal / WORLDREMIT</h4>
                    <p>Use your PayPal account or WORLDREMIT for secure online payment</p>
                  </div>
                </li>
                <li>
                  <DollarSign size={24} />
                  <div>
                    <h4>MTN / Vodafone (Mobile Money)</h4>
                    <p>Pay using mobile money services available in your region</p>
                  </div>
                </li>
                <li>
                  <Mail size={24} />
                  <div>
                    <h4>Email info@thecima.org for other payment options</h4>
                    <p>Contact us for alternative payment arrangements or special circumstances</p>
                  </div>
                </li>
              </ul>
              <div className="payment-cta">
                <Link to="/contact" className="btn-payment">
                  Start Renewal Process <ArrowRight size={18} />
                </Link>
              </div>
            </div>
            <div className="payment-visual">
              <img 
                src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=2070" 
                alt="Payment methods"
                className="payment-image"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="eligibility-section">
        <div className="container">
          <h2>Eligibility to Renew</h2>
          <div className="eligibility-box">
            <AlertCircle size={32} />
            <div className="eligibility-text">
              <p>
                <strong>Eligibility:</strong> To be eligible for renewal, a Member or Associate must have 
                been duly admitted and have paid their due membership fees. Failure to renew may result in 
                suspension of membership privileges.
              </p>
              <h3>Next Steps</h3>
              <ul className="next-steps-list">
                <li><CheckCircle size={18} /> Log into your member portal</li>
                <li><CheckCircle size={18} /> Review and update your profile information</li>
                <li><CheckCircle size={18} /> Submit CPD records if required</li>
                <li><CheckCircle size={18} /> Complete payment using your preferred method</li>
                <li><CheckCircle size={18} /> Receive confirmation and renewed certificate</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="renewal-process">
        <div className="container">
          <h2>Renewal Process</h2>
          <p className="section-intro">Follow these simple steps to renew your CIMA membership</p>
          
          <div className="process-timeline">
            <div className="timeline-item">
              <div className="timeline-icon">
                <Mail size={28} />
              </div>
              <div className="timeline-content">
                <h3>Step 1: Renewal Notice</h3>
                <p>
                  You will receive a renewal notice via email 60 days before your membership expiration date. 
                  This notice includes renewal instructions, fee information, and your member portal login details.
                </p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-icon">
                <FileText size={28} />
              </div>
              <div className="timeline-content">
                <h3>Step 2: Update Information</h3>
                <p>
                  Log into your member portal to review and update your profile information, including contact 
                  details, practice areas, qualifications, and CPD records for the past year.
                </p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-icon">
                <CreditCard size={28} />
              </div>
              <div className="timeline-content">
                <h3>Step 3: Pay Renewal Fee</h3>
                <p>
                  Complete payment of annual membership fees through the secure online portal using credit card, 
                  PayPal, mobile money, or other available payment methods.
                </p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-icon">
                <CheckCircle size={28} />
              </div>
              <div className="timeline-content">
                <h3>Step 4: Confirmation</h3>
                <p>
                  Upon successful renewal, you'll receive confirmation via email. Your membership status will 
                  be updated, and you'll retain all benefits for another year. A renewed certificate will be issued.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="renewal-period">
        <div className="container">
          <h2>Renewal Period and Compliance</h2>
          <div className="compliance-grid">
            <div className="compliance-card">
              <Calendar size={36} />
              <h3>Annual Cycle</h3>
              <p>Membership certificates are valid for one year from the date of issue and must be renewed annually to maintain active status.</p>
            </div>

            <div className="compliance-card">
              <Clock size={36} />
              <h3>60-Day Notice</h3>
              <p>Renewal reminders are sent 60 days before expiration, with follow-up notices at 30 days and 7 days prior to expiration date.</p>
            </div>

            <div className="compliance-card">
              <AlertCircle size={36} />
              <h3>Grace Period</h3>
              <p>A 30-day grace period is provided after expiration. Late renewal fees may apply. Memberships lapsing beyond grace period require reapplication.</p>
            </div>

            <div className="compliance-card">
              <CheckCircle size={36} />
              <h3>Compliance</h3>
              <p>Renewal requires up-to-date CPD records, current professional information, and payment of applicable fees.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="late-renewal">
        <div className="container">
          <h2>Late Renewal and Reinstatement</h2>
          <div className="late-renewal-content">
            <div className="late-renewal-info">
              <h3>What Happens If You Don't Renew?</h3>
              <ul className="consequences-list">
                <li><AlertCircle size={20} /> Loss of access to member portal and resources</li>
                <li><AlertCircle size={20} /> Removal from Roll of Mediators & Arbitrators</li>
                <li><AlertCircle size={20} /> Suspension of right to use post-nominal designations</li>
                <li><AlertCircle size={20} /> Loss of appointment eligibility for CIMA panels</li>
                <li><AlertCircle size={20} /> Inability to receive member discounts on training</li>
                <li><AlertCircle size={20} /> Suspension of voting rights and governance participation</li>
              </ul>
            </div>

            <div className="reinstatement-info">
              <h3>Reinstatement Procedure</h3>
              <p>
                Members who have allowed their membership to lapse may apply for reinstatement. The process depends 
                on how long the membership has been lapsed:
              </p>
              <div className="reinstatement-tiers">
                <div className="tier">
                  <h4>Lapsed 1-6 Months</h4>
                  <p>Pay current year's fees plus late fee (£20). Submit current CPD records.</p>
                </div>
                <div className="tier">
                  <h4>Lapsed 6-12 Months</h4>
                  <p>Pay current year's fees plus higher late fee (£40). Submit comprehensive CPD update.</p>
                </div>
                <div className="tier">
                  <h4>Lapsed Over 12 Months</h4>
                  <p>May require reapplication and updated qualifications. Contact CIMA for assessment.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="cpd-requirements">
        <div className="container">
          <h2>Continuing Professional Development (CPD)</h2>
          <p className="section-intro">
            As part of the renewal process, members must demonstrate completion of required CPD hours
          </p>

          <div className="cpd-renewal-grid">
            <div className="cpd-renewal-card">
              <div className="cpd-badge">Associate</div>
              <div className="cpd-hours-large">10</div>
              <p className="cpd-hours-label">Hours Annually</p>
              <ul className="cpd-activities-list">
                <li>Training courses & workshops</li>
                <li>Webinars & conferences</li>
                <li>Self-directed learning</li>
              </ul>
            </div>

            <div className="cpd-renewal-card featured">
              <div className="cpd-badge">Member</div>
              <div className="cpd-hours-large">15</div>
              <p className="cpd-hours-label">Hours Annually</p>
              <ul className="cpd-activities-list">
                <li>Advanced training programs</li>
                <li>Teaching & mentoring</li>
                <li>Publications & research</li>
              </ul>
            </div>

            <div className="cpd-renewal-card">
              <div className="cpd-badge">Fellow</div>
              <div className="cpd-hours-large">20</div>
              <p className="cpd-hours-label">Hours Annually</p>
              <ul className="cpd-activities-list">
                <li>Leadership activities</li>
                <li>Curriculum development</li>
                <li>Thought leadership</li>
              </ul>
            </div>
          </div>

          <div className="cpd-note">
            <FileText size={24} />
            <p>
              <strong>Important:</strong> Members must maintain records of all CPD activities and submit 
              them through the member portal during renewal. Activities should be relevant to ADR practice 
              and professional development.
            </p>
          </div>
        </div>
      </section>

      <section className="faqs-renewal">
        <div className="container">
          <h2>Frequently Asked Questions</h2>
          <div className="faq-renewal-grid">
            <div className="faq-renewal-item">
              <h4>When should I renew my membership?</h4>
              <p>
                Renewal notices are sent 60 days before expiration. We recommend renewing as soon as you 
                receive the notice to ensure uninterrupted access to membership benefits.
              </p>
            </div>

            <div className="faq-renewal-item">
              <h4>Can I pay in installments?</h4>
              <p>
                Currently, membership fees must be paid in full at the time of renewal. Contact 
                info@thecima.org if you need to discuss special payment arrangements.
              </p>
            </div>

            <div className="faq-renewal-item">
              <h4>What if I haven't completed my CPD hours?</h4>
              <p>
                Members who have not met CPD requirements may face renewal delays or temporary suspension. 
                Contact the CPD team to discuss options for completing outstanding hours.
              </p>
            </div>

            <div className="faq-renewal-item">
              <h4>Will I receive a new certificate?</h4>
              <p>
                Yes, upon successful renewal, you will receive an updated membership certificate showing 
                the new validity dates and your current designation.
              </p>
            </div>

            <div className="faq-renewal-item">
              <h4>Can I upgrade my membership level during renewal?</h4>
              <p>
                Yes! If you meet the requirements for advancement (e.g., Associate to Member), you can 
                apply for upgrade during the renewal process.
              </p>
            </div>

            <div className="faq-renewal-item">
              <h4>What if I change my contact information?</h4>
              <p>
                Update your information in the member portal before completing renewal to ensure all 
                communications and certificates are sent to the correct address.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="policy-objectives">
        <div className="container">
          <div className="policy-box">
            <h2>Policy Objectives</h2>
            <p className="policy-intro">
              This membership renewal policy is designed to ensure continued professional standards, maintain 
              an active and engaged membership community, and support ongoing professional development.
            </p>
            <div className="objectives-grid">
              <div className="objective-item">
                <CheckCircle size={24} />
                <p>Maintain accurate and current membership records</p>
              </div>
              <div className="objective-item">
                <CheckCircle size={24} />
                <p>Ensure members remain current with ADR developments</p>
              </div>
              <div className="objective-item">
                <CheckCircle size={24} />
                <p>Support continuous professional development</p>
              </div>
              <div className="objective-item">
                <CheckCircle size={24} />
                <p>Uphold professional standards and ethical practice</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="contact-support">
        <div className="container">
          <div className="support-box">
            <Mail size={48} />
            <h2>Need Help with Renewal?</h2>
            <p>
              Our membership services team is here to assist you with any questions about the renewal process, 
              payment options, CPD requirements, or technical issues with the member portal.
            </p>
            <div className="support-contacts">
              <div className="contact-method">
                <strong>Email:</strong> info@thecima.org
              </div>
              <div className="contact-method">
                <strong>Member Portal:</strong> Log in for self-service options
              </div>
            </div>
            <Link to="/contact" className="btn-support">
              Contact Member Services <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      <section className="final-cta">
        <div className="container">
          <div className="final-cta-content">
            <h2>Ready to Renew Your Membership?</h2>
            <p>Keep your CIMA membership active and maintain your professional standing in the ADR community</p>
            <div className="final-cta-buttons">
              <Link to="/contact" className="btn-cta-primary">Renew Now</Link>
              <Link to="/contact" className="btn-cta-secondary">Contact Member Services</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default MembershipRenewals

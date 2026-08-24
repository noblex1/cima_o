import React from 'react'
import { Calendar, ExternalLink } from 'lucide-react'
import './Courses.css'
import course1Image from '../../assets/c1.jpg'
import course2Image from '../../assets/c2.jpeg'
import course3Image from '../../assets/c3.jpeg'

const Courses = () => {
  const courses = [
    {
      id: 1,
      image: course1Image,
      date: 'August 5, 2026 to December 31, 2026',
      title: 'Online Course on Maritime Mediation',
      description: 'Maritime mediation course for professionals seeking expertise in resolving maritime disputes through alternative dispute resolution methods.',
      registerLink: 'https://docs.google.com/forms/d/e/1FAIpQLScc1t-gWNZAGWIqM-HwwGYFGGpRprYIcjlMyY-clwj2tgPwOA/viewform',
      color: '#1E7B8C'
    },
    {
      id: 2,
      image: course2Image,
      date: 'August 26, 2026 to September 4, 2026',
      title: 'Law, Practice and Procedure in International Arbitration Training',
      description: 'Apply for premium professional training in arbitration. This course is for lawyers, in-house counsel, ADR practitioners, corporate executives and early-career professionals.',
      registerLink: 'https://docs.google.com/forms/d/e/1FAIpQLSccgPuaAam6Cc9oTa3cnAWM5skF_SGyGtiOOlmz1GlUIjqMsg/viewform',
      color: '#F4C430'
    },
    {
      id: 3,
      image: course3Image,
      date: 'November 25, 2026 to December 3, 2026',
      title: 'Law, Practice & Procedure in Domestic & International Arbitration Training',
      description: 'Apply for premium professional training in arbitration. This course is for lawyers, in-house counsel, ADR practitioners, corporate executives and early-career professionals.',
      registerLink: 'https://docs.google.com/forms/d/e/1FAIpQLSdobixLiq-WUS3pw49cIdkcirQHlKpUhCk_KD2uzXgGvFOsOQ/viewform',
      color: '#A94442'
    }
  ]

  const resources = [
    { title: 'ARBITRATOR RESOURCES', link: '/resources/arbitrator' },
    { title: 'MEDIATOR RESOURCES', link: '/resources/mediator' },
    { title: 'PRACTITIONER JOURNALS', link: '/resources/journals' }
  ]

  return (
    <div className="courses-page">
      {/* Announcement Banner */}
      <div className="announcement-banner">
        <div className="container">
          <button className="close-banner">×</button>
          <h4>Announcement</h4>
          <p>
            Registering as an individual or as a Team? Proceed to select the course of your choice and make payment via our online payment portal at the end of the registration process. 
            Registering on behalf of an Organization? Contact The CIMA Team at <a href="mailto:info@thecima.org">info@thecima.org</a> or Call +233 (0) 50 769 5748, 024 673 9535 for in-depth instructions. Thank you.
          </p>
        </div>
      </div>

      {/* Hero Section */}
      <section className="courses-hero">
        <div className="container">
          <h1 className="courses-main-title">
            The world's best<br />
            online ADR education<br />
            available from Oxfordshire.
          </h1>
        </div>
      </section>

      {/* Courses Section */}
      <section className="courses-section">
        <div className="container">
          <h2 className="courses-section-title">All Upcoming Courses</h2>
          
          <div className="courses-grid">
            {courses.map((course) => (
              <div key={course.id} className="course-card">
                <div className="course-image" style={{ backgroundColor: course.color }}>
                  <img src={course.image} alt={course.title} />
                </div>
                <div className="course-content">
                  <div className="course-date">
                    <Calendar size={16} />
                    <span>{course.date}</span>
                  </div>
                  <h3 className="course-title">{course.title}</h3>
                  <p className="course-description">{course.description}</p>
                  <a href={course.registerLink} className="btn-register" target="_blank" rel="noreferrer">
                    REGISTER <ExternalLink size={16} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section className="resources-section">
        <div className="container">
          <div className="resources-grid">
            {resources.map((resource, index) => (
              <a key={index} href={resource.link} className="resource-btn">
                {resource.title}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Subscribe Section */}
      <section className="subscribe-section">
        <div className="container">
          <div className="subscribe-content">
            <div className="subscribe-text">
              <h3>Subscribe for latest updates & insights</h3>
              <p>Stay informed about CIMA's training programs, events, and thought leadership in alternative dispute resolution</p>
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

export default Courses

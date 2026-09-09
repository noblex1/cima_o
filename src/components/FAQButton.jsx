import React from 'react'
import { Link } from 'react-router-dom'
import { HelpCircle } from 'lucide-react'
import './FAQButton.css'

const FAQButton = () => {
  return (
    <Link to="/faq" className="faq-floating-button" aria-label="Frequently Asked Questions">
      <HelpCircle size={28} />
      <span className="faq-button-text">FAQ</span>
    </Link>
  )
}

export default FAQButton

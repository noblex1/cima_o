import React, { useState } from 'react'
import { Check, Copy, Download, ArrowLeft, ArrowRight, FileText, Search, X } from 'lucide-react'
import jsPDF from 'jspdf'
import './ClauseBuilder.css'
import {
  agreementTypes,
  clauseTypes,
  languages,
  jurisdictions,
  numberOfArbitrators,
  arbitrationRules,
  mediationRules,
  generateArbitrationClause,
  generateMediationClause,
  generateMedArbClause,
  generateEscalationClause
} from '../data/clauseTemplates'

const ClauseBuilder = () => {
  const [currentStep, setCurrentStep] = useState(0)
  const [acceptedTerms, setAcceptedTerms] = useState(false)
  const [generatedClause, setGeneratedClause] = useState('')
  const [copied, setCopied] = useState(false)
  const [showAgreementModal, setShowAgreementModal] = useState(false)
  const [agreementSearchQuery, setAgreementSearchQuery] = useState('')
  const [showJurisdictionModal, setShowJurisdictionModal] = useState(false)
  const [jurisdictionSearchQuery, setJurisdictionSearchQuery] = useState('')
  const [showLanguageModal, setShowLanguageModal] = useState(false)
  const [languageSearchQuery, setLanguageSearchQuery] = useState('')
  
  const [formData, setFormData] = useState({
    clauseType: '',
    agreementType: '',
    jurisdiction: '',
    language: 'English',
    numberOfArbitrators: 1,
    customArbitrators: '',
    arbitrationRules: 'CIMA Arbitration Rules',
    mediationRules: 'CIMA Mediation Rules',
    emergencyArbitrator: true,
    expeditedProcedure: false,
    confidentiality: true,
    bindingSettlement: true,
    timeLimit: '60',
    mediationTimeLimit: '30',
    sameMediatorAsArbitrator: false,
    negotiationPeriod: '30',
    mediationPeriod: '45'
  })

  const steps = [
    { id: 0, title: 'Terms & Conditions', icon: FileText },
    { id: 1, title: 'Clause Type', icon: FileText },
    { id: 2, title: 'Agreement Type', icon: FileText },
    { id: 3, title: 'Customization', icon: FileText },
    { id: 4, title: 'Review & Generate', icon: Check }
  ]

  const handleChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }))
    if (field === 'agreementType') {
      setShowAgreementModal(false)
      setAgreementSearchQuery('')
    }
    if (field === 'jurisdiction') {
      setShowJurisdictionModal(false)
      setJurisdictionSearchQuery('')
    }
    if (field === 'language') {
      setShowLanguageModal(false)
      setLanguageSearchQuery('')
    }
  }

  const filteredAgreementTypes = agreementTypes.filter(type =>
    type.toLowerCase().includes(agreementSearchQuery.toLowerCase())
  )

  const filteredJurisdictions = jurisdictions.filter(jurisdiction =>
    jurisdiction.toLowerCase().includes(jurisdictionSearchQuery.toLowerCase())
  )

  const filteredLanguages = languages.filter(language =>
    language.toLowerCase().includes(languageSearchQuery.toLowerCase())
  )

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(prev => prev + 1)
      // Scroll to top of page
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(prev => prev - 1)
      // Scroll to top of page
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  const handleGenerate = () => {
    let clause = ''
    const numArbs = formData.numberOfArbitrators === 'custom' 
      ? parseInt(formData.customArbitrators) 
      : formData.numberOfArbitrators

    const options = {
      ...formData,
      numberOfArbitrators: numArbs
    }

    switch (formData.clauseType) {
      case 'arbitration':
        clause = generateArbitrationClause(options)
        break
      case 'mediation':
        clause = generateMediationClause(options)
        break
      case 'medArb':
        clause = generateMedArbClause(options)
        break
      case 'escalation':
        clause = generateEscalationClause(options)
        break
      default:
        clause = 'Please select a clause type.'
    }

    setGeneratedClause(clause)
  }

  const handleCopy = () => {
    navigator.clipboard.writeText(generatedClause)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const handleDownload = () => {
    const doc = new jsPDF()
    
    // Set document properties
    doc.setProperties({
      title: `CIMA ${formData.clauseType} Clause`,
      subject: `${formData.agreementType}`,
      author: 'Center for International Mediators and Arbitrators',
      keywords: 'arbitration, mediation, dispute resolution, CIMA',
      creator: 'CIMA Clause Builder'
    })

    // Add CIMA branding/header
    doc.setFontSize(10)
    doc.setTextColor(90, 38, 51) // Burgundy color
    doc.text('Center for International Mediators and Arbitrators (CIMA)', 105, 15, { align: 'center' })
    doc.text('www.thecima.org', 105, 20, { align: 'center' })
    
    // Add a line separator
    doc.setDrawColor(180, 154, 103) // Gold color
    doc.setLineWidth(0.5)
    doc.line(20, 25, 190, 25)

    // Add main content
    doc.setFontSize(12)
    doc.setTextColor(37, 37, 37) // Dark text
    
    // Split text into lines that fit the page width
    const pageWidth = doc.internal.pageSize.getWidth()
    const margins = 20
    const maxLineWidth = pageWidth - (margins * 2)
    
    const lines = doc.splitTextToSize(generatedClause, maxLineWidth)
    
    let yPosition = 35
    const lineHeight = 7
    const pageHeight = doc.internal.pageSize.getHeight()
    
    lines.forEach((line, index) => {
      // Check if we need a new page
      if (yPosition > pageHeight - 30) {
        doc.addPage()
        yPosition = 20
      }
      
      // Make first line (title) bold and larger
      if (index === 0) {
        doc.setFontSize(14)
        doc.setFont(undefined, 'bold')
        doc.setTextColor(90, 38, 51) // Burgundy
      } else if (index === 1) {
        // Reset after title
        doc.setFontSize(11)
        doc.setFont(undefined, 'normal')
        doc.setTextColor(37, 37, 37)
      }
      
      // Check if line is a section header (contains colon at end or is all caps)
      if (line.trim().endsWith(':') || (line.trim().length < 50 && line === line.toUpperCase())) {
        doc.setFont(undefined, 'bold')
        doc.setTextColor(90, 38, 51) // Burgundy for headers
      } else {
        doc.setFont(undefined, 'normal')
        doc.setTextColor(37, 37, 37) // Regular text
      }
      
      doc.text(line, margins, yPosition)
      yPosition += lineHeight
    })
    
    // Add footer with disclaimer
    const totalPages = doc.internal.pages.length - 1
    for (let i = 1; i <= totalPages; i++) {
      doc.setPage(i)
      doc.setFontSize(8)
      doc.setTextColor(107, 103, 97) // Gray
      doc.text(
        'Generated by CIMA Clause Builder - For informational purposes only - Legal review recommended',
        105,
        pageHeight - 10,
        { align: 'center' }
      )
      doc.text(`Page ${i} of ${totalPages}`, 105, pageHeight - 5, { align: 'center' })
    }
    
    // Save the PDF
    const fileName = `CIMA_${formData.clauseType}_clause_${formData.agreementType.replace(/\s+/g, '_')}.pdf`
    doc.save(fileName)
  }

  const canProceed = () => {
    switch (currentStep) {
      case 0:
        return acceptedTerms
      case 1:
        return formData.clauseType !== ''
      case 2:
        return formData.agreementType !== ''
      case 3:
        return formData.jurisdiction !== '' && formData.language !== ''
      default:
        return true
    }
  }

  return (
    <div className="clause-builder">
      <div className="clause-builder-header">
        <div className="container">
          <h1>CIMA Clause Builder</h1>
          <p>Create clear arbitration and mediation clauses for your contracts</p>
        </div>
      </div>

      <div className="clause-builder-content">
        <div className="container">
          {/* Progress Steps */}
          <div className="progress-steps">
            {steps.map((step, index) => (
              <div 
                key={step.id} 
                className={`progress-step ${currentStep === index ? 'active' : ''} ${currentStep > index ? 'completed' : ''}`}
              >
                <div className="step-indicator">
                  {currentStep > index ? <Check size={20} /> : <step.icon size={20} />}
                </div>
                <span className="step-title">{step.title}</span>
              </div>
            ))}
          </div>

          {/* Step Content */}
          <div className="step-content">
            {/* Step 0: Terms & Conditions */}
            {currentStep === 0 && (
              <div className="step-panel">
                <h2>Welcome to the CIMA Clause Builder</h2>
                <p className="step-intro">
                  The CIMA Clause Builder helps individuals, businesses and organisations create clear arbitration and mediation clauses for their contracts.
                </p>

                <div className="how-it-works">
                  <h3>How it works</h3>
                  <div className="steps-list">
                    <div className="step-item">
                      <div className="step-number">1</div>
                      <div>
                        <h4>Choose your clause</h4>
                        <p>Select arbitration, mediation or another dispute resolution option.</p>
                      </div>
                    </div>
                    <div className="step-item">
                      <div className="step-number">2</div>
                      <div>
                        <h4>Customise your clause</h4>
                        <p>Choose important details such as the place of arbitration, number of arbitrators and language.</p>
                      </div>
                    </div>
                    <div className="step-item">
                      <div className="step-number">3</div>
                      <div>
                        <h4>Review and generate</h4>
                        <p>Review your choices and generate your clause.</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="agreement-types-preview">
                  <h3>You can generate clear clauses for many agreement types including:</h3>
                  <div className="types-grid">
                    {agreementTypes.slice(0, 12).map((type, index) => (
                      <div key={index} className="type-tag">{type}</div>
                    ))}
                    <div className="type-tag">...and {agreementTypes.length - 12} more</div>
                  </div>
                </div>

                <div className="disclaimer-box">
                  <h3>Disclaimer</h3>
                  <div className="disclaimer-content">
                    <p>The CIMA Clause Builder is provided for information and educational purposes only. It does not provide legal advice and does not create a lawyer-client relationship between you and CIMA.</p>
                    
                    <p>Every contract and dispute is different. You should consider obtaining legal advice before using a clause generated by this tool.</p>
                    
                    <p>CIMA does not guarantee that a clause generated by the Clause Builder will be suitable or enforceable in every country or situation.</p>
                    
                    <p>Using the Clause Builder does not mean that CIMA has agreed to administer any future dispute.</p>
                  </div>
                  
                  <label className="checkbox-label">
                    <input 
                      type="checkbox" 
                      checked={acceptedTerms}
                      onChange={(e) => setAcceptedTerms(e.target.checked)}
                    />
                    <span>I accept the terms and conditions</span>
                  </label>
                </div>
              </div>
            )}

            {/* Step 1: Clause Type */}
            {currentStep === 1 && (
              <div className="step-panel">
                <h2>Choose Your Clause Type</h2>
                <p className="step-intro">Select the type of dispute resolution clause you want to create.</p>

                <div className="clause-type-grid">
                  {Object.entries(clauseTypes).map(([key, value]) => (
                    <div 
                      key={key}
                      className={`clause-type-card ${formData.clauseType === key ? 'selected' : ''}`}
                      onClick={() => handleChange('clauseType', key)}
                    >
                      <div className="clause-type-header">
                        <h3>{value.label}</h3>
                        {formData.clauseType === key && <Check size={24} className="check-icon" />}
                      </div>
                      <p>{value.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Step 2: Agreement Type */}
            {currentStep === 2 && (
              <div className="step-panel">
                <h2>Select Agreement Type</h2>
                <p className="step-intro">What type of agreement will this clause be used in?</p>

                <div className="form-group">
                  <label>Agreement Type</label>
                  <div 
                    className="agreement-type-selector"
                    onClick={() => setShowAgreementModal(true)}
                  >
                    <span className={formData.agreementType ? 'selected' : 'placeholder'}>
                      {formData.agreementType || '-- Select Agreement Type --'}
                    </span>
                    <FileText size={20} />
                  </div>
                </div>

                {formData.agreementType && (
                  <div className="selected-info">
                    <Check size={20} />
                    <span>Selected: {formData.agreementType}</span>
                  </div>
                )}

                {/* Agreement Type Modal */}
                {showAgreementModal && (
                  <div className="modal-overlay" onClick={() => setShowAgreementModal(false)}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                      <div className="modal-header">
                        <h3>Select Agreement Type</h3>
                        <button 
                          className="modal-close"
                          onClick={() => setShowAgreementModal(false)}
                          aria-label="Close modal"
                        >
                          <X size={24} />
                        </button>
                      </div>

                      <div className="modal-search">
                        <Search size={20} />
                        <input
                          type="text"
                          placeholder="Search agreement types..."
                          value={agreementSearchQuery}
                          onChange={(e) => setAgreementSearchQuery(e.target.value)}
                          autoFocus
                        />
                      </div>

                      <div className="modal-body">
                        {filteredAgreementTypes.length > 0 ? (
                          filteredAgreementTypes.map((type, index) => (
                            <div
                              key={index}
                              className={`agreement-option ${formData.agreementType === type ? 'selected' : ''}`}
                              onClick={() => handleChange('agreementType', type)}
                            >
                              <span>{type}</span>
                              {formData.agreementType === type && <Check size={20} />}
                            </div>
                          ))
                        ) : (
                          <div className="no-results">
                            <p>No agreement types found matching "{agreementSearchQuery}"</p>
                          </div>
                        )}
                      </div>

                      <div className="modal-footer">
                        <p className="agreement-count">
                          {filteredAgreementTypes.length} of {agreementTypes.length} agreement types
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* Step 3: Customization */}
            {currentStep === 3 && (
              <div className="step-panel">
                <h2>Customize Your Clause</h2>
                <p className="step-intro">Specify the key details for your dispute resolution clause.</p>

                <div className="form-grid">
                  {/* Basic Settings */}
                  <div className="form-group">
                    <label>Seat/Place of Arbitration *</label>
                    <div 
                      className="agreement-type-selector"
                      onClick={() => setShowJurisdictionModal(true)}
                    >
                      <span className={formData.jurisdiction ? 'selected' : 'placeholder'}>
                        {formData.jurisdiction || '-- Select Jurisdiction --'}
                      </span>
                      <FileText size={20} />
                    </div>
                  </div>

                  <div className="form-group">
                    <label>Language *</label>
                    <div 
                      className="agreement-type-selector"
                      onClick={() => setShowLanguageModal(true)}
                    >
                      <span className={formData.language ? 'selected' : 'placeholder'}>
                        {formData.language || '-- Select Language --'}
                      </span>
                      <FileText size={20} />
                    </div>
                  </div>

                  {/* Arbitration-specific options */}
                  {(formData.clauseType === 'arbitration' || formData.clauseType === 'medArb' || formData.clauseType === 'escalation') && (
                    <>
                      <div className="form-group">
                        <label>Number of Arbitrators</label>
                        <select 
                          value={formData.numberOfArbitrators}
                          onChange={(e) => handleChange('numberOfArbitrators', e.target.value === 'custom' ? 'custom' : parseInt(e.target.value))}
                          className="form-select"
                        >
                          {numberOfArbitrators.map((option, index) => (
                            <option key={index} value={option.value}>{option.label}</option>
                          ))}
                        </select>
                      </div>

                      {formData.numberOfArbitrators === 'custom' && (
                        <div className="form-group">
                          <label>Custom Number of Arbitrators</label>
                          <input 
                            type="number"
                            min="1"
                            max="9"
                            value={formData.customArbitrators}
                            onChange={(e) => handleChange('customArbitrators', e.target.value)}
                            className="form-input"
                            placeholder="Enter number"
                          />
                        </div>
                      )}

                      <div className="form-group">
                        <label>Arbitration Rules</label>
                        <select 
                          value={formData.arbitrationRules}
                          onChange={(e) => handleChange('arbitrationRules', e.target.value)}
                          className="form-select"
                        >
                          {arbitrationRules.map((rule, index) => (
                            <option key={index} value={rule}>{rule}</option>
                          ))}
                        </select>
                      </div>
                    </>
                  )}

                  {/* Mediation-specific options */}
                  {(formData.clauseType === 'mediation' || formData.clauseType === 'medArb' || formData.clauseType === 'escalation') && (
                    <>
                      <div className="form-group">
                        <label>Mediation Rules</label>
                        <select 
                          value={formData.mediationRules}
                          onChange={(e) => handleChange('mediationRules', e.target.value)}
                          className="form-select"
                        >
                          {mediationRules.map((rule, index) => (
                            <option key={index} value={rule}>{rule}</option>
                          ))}
                        </select>
                      </div>

                      {formData.clauseType === 'mediation' && (
                        <div className="form-group">
                          <label>Mediation Time Limit (days)</label>
                          <input 
                            type="number"
                            min="7"
                            max="180"
                            value={formData.timeLimit}
                            onChange={(e) => handleChange('timeLimit', e.target.value)}
                            className="form-input"
                            placeholder="e.g., 60"
                          />
                        </div>
                      )}
                    </>
                  )}

                  {/* Med-Arb specific */}
                  {formData.clauseType === 'medArb' && (
                    <div className="form-group">
                      <label>Mediation Time Limit (days)</label>
                      <input 
                        type="number"
                        min="7"
                        max="90"
                        value={formData.mediationTimeLimit}
                        onChange={(e) => handleChange('mediationTimeLimit', e.target.value)}
                        className="form-input"
                        placeholder="e.g., 30"
                      />
                    </div>
                  )}

                  {/* Escalation specific */}
                  {formData.clauseType === 'escalation' && (
                    <>
                      <div className="form-group">
                        <label>Negotiation Period (days)</label>
                        <input 
                          type="number"
                          min="7"
                          max="90"
                          value={formData.negotiationPeriod}
                          onChange={(e) => handleChange('negotiationPeriod', e.target.value)}
                          className="form-input"
                          placeholder="e.g., 30"
                        />
                      </div>

                      <div className="form-group">
                        <label>Mediation Period (days)</label>
                        <input 
                          type="number"
                          min="14"
                          max="90"
                          value={formData.mediationPeriod}
                          onChange={(e) => handleChange('mediationPeriod', e.target.value)}
                          className="form-input"
                          placeholder="e.g., 45"
                        />
                      </div>
                    </>
                  )}
                </div>

                {/* Optional Features */}
                <div className="optional-features">
                  <h3>Optional Features</h3>
                  
                  {formData.clauseType === 'arbitration' && (
                    <>
                      <label className="checkbox-label">
                        <input 
                          type="checkbox"
                          checked={formData.emergencyArbitrator}
                          onChange={(e) => handleChange('emergencyArbitrator', e.target.checked)}
                        />
                        <span>Emergency Arbitrator Provision</span>
                      </label>

                      <label className="checkbox-label">
                        <input 
                          type="checkbox"
                          checked={formData.expeditedProcedure}
                          onChange={(e) => handleChange('expeditedProcedure', e.target.checked)}
                        />
                        <span>Expedited Procedure</span>
                      </label>
                    </>
                  )}

                  {(formData.clauseType === 'arbitration' || formData.clauseType === 'medArb' || formData.clauseType === 'escalation') && (
                    <label className="checkbox-label">
                      <input 
                        type="checkbox"
                        checked={formData.confidentiality}
                        onChange={(e) => handleChange('confidentiality', e.target.checked)}
                      />
                      <span>Explicit Confidentiality Provision</span>
                    </label>
                  )}

                  {formData.clauseType === 'mediation' && (
                    <label className="checkbox-label">
                      <input 
                        type="checkbox"
                        checked={formData.bindingSettlement}
                        onChange={(e) => handleChange('bindingSettlement', e.target.checked)}
                      />
                      <span>Binding Settlement Agreement</span>
                    </label>
                  )}

                  {formData.clauseType === 'medArb' && (
                    <label className="checkbox-label">
                      <input 
                        type="checkbox"
                        checked={formData.sameMediatorAsArbitrator}
                        onChange={(e) => handleChange('sameMediatorAsArbitrator', e.target.checked)}
                      />
                      <span>Allow Same Mediator to Serve as Arbitrator</span>
                    </label>
                  )}
                </div>
              </div>
            )}

            {/* Step 4: Review & Generate */}
            {currentStep === 4 && (
              <div className="step-panel">
                <h2>Review & Generate Your Clause</h2>
                <p className="step-intro">Review your selections and generate your custom clause.</p>

                <div className="review-summary">
                  <h3>Your Selections</h3>
                  <div className="summary-grid">
                    <div className="summary-item">
                      <span className="summary-label">Clause Type:</span>
                      <span className="summary-value">{clauseTypes[formData.clauseType]?.label}</span>
                    </div>
                    <div className="summary-item">
                      <span className="summary-label">Agreement Type:</span>
                      <span className="summary-value">{formData.agreementType}</span>
                    </div>
                    <div className="summary-item">
                      <span className="summary-label">Jurisdiction:</span>
                      <span className="summary-value">{formData.jurisdiction}</span>
                    </div>
                    <div className="summary-item">
                      <span className="summary-label">Language:</span>
                      <span className="summary-value">{formData.language}</span>
                    </div>
                    {(formData.clauseType === 'arbitration' || formData.clauseType === 'medArb' || formData.clauseType === 'escalation') && (
                      <div className="summary-item">
                        <span className="summary-label">Number of Arbitrators:</span>
                        <span className="summary-value">
                          {formData.numberOfArbitrators === 'custom' ? formData.customArbitrators : formData.numberOfArbitrators}
                        </span>
                      </div>
                    )}
                  </div>
                </div>

                {!generatedClause ? (
                  <div className="generate-action">
                    <button onClick={handleGenerate} className="btn-generate">
                      <FileText size={20} />
                      Generate Clause
                    </button>
                  </div>
                ) : (
                  <div className="generated-clause">
                    <div className="clause-header">
                      <h3>Your Generated Clause</h3>
                      <div className="clause-actions">
                        <button onClick={handleCopy} className="btn-icon" title="Copy to clipboard">
                          {copied ? <Check size={20} /> : <Copy size={20} />}
                          {copied ? 'Copied!' : 'Copy'}
                        </button>
                        <button onClick={handleDownload} className="btn-icon" title="Download as text file">
                          <Download size={20} />
                          Download
                        </button>
                      </div>
                    </div>
                    <div className="clause-content">
                      <pre>{generatedClause}</pre>
                    </div>
                    <div className="clause-footer">
                      <p><strong>Important:</strong> This clause is a template. Please review it with legal counsel to ensure it meets your specific needs and is enforceable in your jurisdiction.</p>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Navigation Buttons */}
          <div className="step-navigation">
            {currentStep > 0 && (
              <button onClick={handleBack} className="btn-nav btn-back">
                <ArrowLeft size={20} />
                Back
              </button>
            )}
            <div className="nav-spacer"></div>
            {currentStep < steps.length - 1 && (
              <button 
                onClick={handleNext} 
                className="btn-nav btn-next"
                disabled={!canProceed()}
              >
                Continue
                <ArrowRight size={20} />
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Jurisdiction Modal */}
      {showJurisdictionModal && (
        <div className="modal-overlay" onClick={() => setShowJurisdictionModal(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h3>Select Jurisdiction</h3>
              <button 
                className="modal-close"
                onClick={() => setShowJurisdictionModal(false)}
                aria-label="Close modal"
              >
                <X size={24} />
              </button>
            </div>

            <div className="modal-search">
              <Search size={20} />
              <input
                type="text"
                placeholder="Search jurisdictions..."
                value={jurisdictionSearchQuery}
                onChange={(e) => setJurisdictionSearchQuery(e.target.value)}
                autoFocus
              />
            </div>

            <div className="modal-body">
              {filteredJurisdictions.length > 0 ? (
                filteredJurisdictions.map((jurisdiction, index) => (
                  <div
                    key={index}
                    className={`agreement-option ${formData.jurisdiction === jurisdiction ? 'selected' : ''}`}
                    onClick={() => handleChange('jurisdiction', jurisdiction)}
                  >
                    <span>{jurisdiction}</span>
                    {formData.jurisdiction === jurisdiction && <Check size={20} />}
                  </div>
                ))
              ) : (
                <div className="no-results">
                  <p>No jurisdictions found matching "{jurisdictionSearchQuery}"</p>
                </div>
              )}
            </div>

            <div className="modal-footer">
              <p className="agreement-count">
                {filteredJurisdictions.length} of {jurisdictions.length} jurisdictions
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Language Modal */}
      {showLanguageModal && (
        <div className="modal-overlay" onClick={() => setShowLanguageModal(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h3>Select Language</h3>
              <button 
                className="modal-close"
                onClick={() => setShowLanguageModal(false)}
                aria-label="Close modal"
              >
                <X size={24} />
              </button>
            </div>

            <div className="modal-search">
              <Search size={20} />
              <input
                type="text"
                placeholder="Search languages..."
                value={languageSearchQuery}
                onChange={(e) => setLanguageSearchQuery(e.target.value)}
                autoFocus
              />
            </div>

            <div className="modal-body">
              {filteredLanguages.length > 0 ? (
                filteredLanguages.map((language, index) => (
                  <div
                    key={index}
                    className={`agreement-option ${formData.language === language ? 'selected' : ''}`}
                    onClick={() => handleChange('language', language)}
                  >
                    <span>{language}</span>
                    {formData.language === language && <Check size={20} />}
                  </div>
                ))
              ) : (
                <div className="no-results">
                  <p>No languages found matching "{languageSearchQuery}"</p>
                </div>
              )}
            </div>

            <div className="modal-footer">
              <p className="agreement-count">
                {filteredLanguages.length} of {languages.length} languages
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default ClauseBuilder

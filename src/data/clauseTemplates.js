// Clause templates for the CIMA Clause Builder

export const agreementTypes = [
  'Tenancy / Lease Agreement',
  'Supply Agreement',
  'Employment Agreement',
  'Prenuptial Agreement',
  'Sale of Goods Agreement',
  'Service Agreement',
  'Consultancy Agreement',
  'Independent Contractor Agreement',
  'Partnership Agreement',
  'Shareholders\' Agreement',
  'Joint Venture Agreement',
  'Non-Disclosure / Confidentiality Agreement',
  'Loan Agreement',
  'Licensing Agreement',
  'Franchise Agreement',
  'Distribution Agreement',
  'Agency Agreement',
  'Construction Agreement',
  'Technology / Software Agreement',
  'Intellectual Property Assignment Agreement',
  'Data Processing & Privacy Agreement',
  'E-Commerce / Platform Agreement',
  'Influencer & Brand Collaboration Agreement',
  'Artificial Intelligence Services Agreement',
  'Cloud Computing / SaaS Agreement',
  'Cybersecurity Services Agreement',
  'Digital Assets / Blockchain Agreement',
  'Renewable Energy / Power Purchase Agreement',
  'Carbon Credits / Environmental Agreement',
  'Technical Services Agreement'
]

export const clauseTypes = {
  arbitration: {
    label: 'Arbitration Clause',
    description: 'Disputes resolved through binding arbitration'
  },
  mediation: {
    label: 'Mediation Clause',
    description: 'Disputes resolved through facilitated negotiation'
  },
  medArb: {
    label: 'Med-Arb Clause',
    description: 'Mediation first, then arbitration if unresolved'
  },
  arbitrationMed: {
    label: 'Arb-Med Clause',
    description: 'Arbitration with mediation attempt during process'
  },
  escalation: {
    label: 'Escalation Clause',
    description: 'Negotiation, then mediation, then arbitration'
  }
}

export const languages = [
  'English',
  'French',
  'Spanish',
  'Arabic',
  'Chinese (Mandarin)',
  'Portuguese',
  'German',
  'Russian',
  'Japanese',
  'Hindi',
  'Swahili',
  'Italian',
  'Dutch',
  'Korean'
]

export const jurisdictions = [
  'England & Wales',
  'Ghana',
  'Kenya',
  'Nigeria',
  'South Africa',
  'United States (New York)',
  'Singapore',
  'Hong Kong',
  'United Arab Emirates (Dubai)',
  'Switzerland',
  'France',
  'Germany',
  'India',
  'Malaysia',
  'Pakistan',
  'Italy',
  'Sierra Leone',
  'Tanzania',
  'Uganda',
  'Zambia',
  'Zimbabwe',
  'Botswana',
  'Rwanda',
  'Ethiopia',
  'Egypt',
  'Morocco',
  'Tunisia',
  'Senegal',
  'Ivory Coast',
  'Cameroon',
  'Australia',
  'Canada',
  'Brazil'
]

export const numberOfArbitrators = [
  { value: 1, label: 'Sole Arbitrator (1)' },
  { value: 3, label: 'Tribunal of Three (3)' },
  { value: 'custom', label: 'Custom Number' }
]

export const arbitrationRules = [
  'CIMA Arbitration Rules',
  'ICC Arbitration Rules',
  'LCIA Arbitration Rules',
  'UNCITRAL Arbitration Rules',
  'SIAC Arbitration Rules',
  'HKIAC Arbitration Rules',
  'SCC Arbitration Rules',
  'ICDR Arbitration Rules',
  'DIAC Arbitration Rules',
  'JAMS Arbitration Rules',
  'Custom/Institutional Rules'
]

export const mediationRules = [
  'CIMA Mediation Rules',
  'ICC Mediation Rules',
  'LCIA Mediation Rules',
  'UNCITRAL Conciliation Rules',
  'SIAC Mediation Rules',
  'CEDR Mediation Rules',
  'Custom/Institutional Rules'
]

// Template generator functions
export const generateArbitrationClause = (options) => {
  const {
    agreementType,
    jurisdiction,
    language,
    numberOfArbitrators,
    arbitrationRules,
    emergencyArbitrator,
    expeditedProcedure,
    confidentiality
  } = options

  let clause = `ARBITRATION CLAUSE\n\n`
  
  clause += `Any dispute, controversy, or claim arising out of or relating to this ${agreementType}, including the breach, termination, or validity thereof, shall be finally resolved by arbitration `
  
  if (arbitrationRules && arbitrationRules.includes('CIMA')) {
    clause += `administered by the Center for International Mediators and Arbitrators (CIMA) `
  }
  
  clause += `in accordance with the ${arbitrationRules || 'applicable arbitration rules'}`
  
  if (expeditedProcedure) {
    clause += ` (Expedited Procedure)`
  }
  
  clause += `.\n\n`
  
  clause += `Seat of Arbitration:\nThe seat of arbitration shall be ${jurisdiction}.\n\n`
  
  clause += `Number of Arbitrators:\nThe arbitral tribunal shall consist of ${numberOfArbitrators === 1 ? 'one (1) arbitrator' : numberOfArbitrators === 3 ? 'three (3) arbitrators' : `${numberOfArbitrators} arbitrators`}.\n\n`
  
  clause += `Language:\nThe language of the arbitration shall be ${language}.\n\n`
  
  if (emergencyArbitrator) {
    clause += `Emergency Arbitrator:\nThe parties agree to the availability of emergency arbitrator proceedings in accordance with the applicable rules.\n\n`
  }
  
  if (confidentiality) {
    clause += `Confidentiality:\nThe arbitration proceedings, including all documents, submissions, and the award, shall be kept confidential by the parties, the arbitral tribunal, and the administering institution, except as required by law or for the purpose of enforcement.\n\n`
  }
  
  clause += `Governing Law:\nThis agreement and any dispute arising hereunder shall be governed by the laws of ${jurisdiction}.\n\n`
  
  clause += `Final and Binding:\nThe arbitral award shall be final and binding on the parties and may be enforced in any court of competent jurisdiction.`
  
  return clause
}

export const generateMediationClause = (options) => {
  const {
    agreementType,
    jurisdiction,
    language,
    mediationRules,
    timeLimit,
    bindingSettlement
  } = options

  let clause = `MEDIATION CLAUSE\n\n`
  
  clause += `In the event of any dispute, controversy, or claim arising out of or relating to this ${agreementType}, including the breach, termination, or validity thereof, the parties agree to first attempt to resolve the matter through mediation `
  
  if (mediationRules && mediationRules.includes('CIMA')) {
    clause += `administered by the Center for International Mediators and Arbitrators (CIMA) `
  }
  
  clause += `in accordance with the ${mediationRules || 'applicable mediation rules'}.\n\n`
  
  clause += `Location:\nThe mediation shall take place in ${jurisdiction}.\n\n`
  
  clause += `Language:\nThe language of the mediation shall be ${language}.\n\n`
  
  clause += `Mediator Selection:\nThe parties shall jointly select a mediator from ${mediationRules && mediationRules.includes('CIMA') ? 'CIMA\'s panel of mediators' : 'the mediator panel of the administering institution'}. If the parties cannot agree on a mediator within 14 days, the mediator shall be appointed by ${mediationRules && mediationRules.includes('CIMA') ? 'CIMA' : 'the administering institution'}.\n\n`
  
  if (timeLimit) {
    clause += `Time Limit:\nThe mediation process shall be completed within ${timeLimit} days from the appointment of the mediator, unless extended by mutual agreement of the parties.\n\n`
  }
  
  clause += `Confidentiality:\nAll mediation proceedings, including statements, documents, and communications, shall be confidential and without prejudice. Neither party may use such materials in any subsequent proceedings.\n\n`
  
  if (bindingSettlement) {
    clause += `Binding Settlement:\nAny settlement agreement reached through mediation shall be binding on the parties and enforceable as a contract.\n\n`
  }
  
  clause += `Costs:\nEach party shall bear its own costs of the mediation. The mediator's fees and administrative costs shall be shared equally unless otherwise agreed.\n\n`
  
  clause += `Governing Law:\nThis mediation agreement shall be governed by the laws of ${jurisdiction}.`
  
  return clause
}

export const generateMedArbClause = (options) => {
  const {
    agreementType,
    jurisdiction,
    language,
    numberOfArbitrators,
    mediationRules,
    arbitrationRules,
    sameMediatorAsArbitrator,
    mediationTimeLimit
  } = options

  let clause = `MED-ARB CLAUSE\n\n`
  
  clause += `Any dispute, controversy, or claim arising out of or relating to this ${agreementType}, including the breach, termination, or validity thereof, shall be resolved through the following staged process:\n\n`
  
  clause += `STAGE 1: MEDIATION\n\n`
  clause += `The parties shall first attempt to resolve the dispute through mediation administered by the Center for International Mediators and Arbitrators (CIMA) in accordance with the ${mediationRules || 'CIMA Mediation Rules'}.\n\n`
  
  if (mediationTimeLimit) {
    clause += `The mediation shall be completed within ${mediationTimeLimit} days from the appointment of the mediator.\n\n`
  }
  
  clause += `STAGE 2: ARBITRATION\n\n`
  clause += `If the dispute is not resolved through mediation within the specified time period, or if either party declares an impasse, the dispute shall be finally resolved by arbitration administered by CIMA in accordance with the ${arbitrationRules || 'CIMA Arbitration Rules'}.\n\n`
  
  if (sameMediatorAsArbitrator) {
    clause += `Same Neutral:\nUnless either party objects within 7 days of the mediation's conclusion, the mediator may serve as the sole arbitrator in the arbitration proceedings.\n\n`
  } else {
    clause += `Different Neutral:\nA different arbitrator shall be appointed for the arbitration proceedings.\n\n`
  }
  
  clause += `Seat of Arbitration:\n${jurisdiction}\n\n`
  clause += `Number of Arbitrators:\n${numberOfArbitrators === 1 ? 'One (1) arbitrator' : numberOfArbitrators === 3 ? 'Three (3) arbitrators' : `${numberOfArbitrators} arbitrators`}\n\n`
  clause += `Language:\n${language}\n\n`
  
  clause += `Confidentiality:\nAll mediation and arbitration proceedings shall be confidential.\n\n`
  
  clause += `Final and Binding:\nThe arbitral award shall be final and binding on the parties and may be enforced in any court of competent jurisdiction.`
  
  return clause
}

export const generateEscalationClause = (options) => {
  const {
    agreementType,
    jurisdiction,
    language,
    numberOfArbitrators,
    negotiationPeriod,
    mediationPeriod,
    arbitrationRules
  } = options

  let clause = `MULTI-TIERED DISPUTE RESOLUTION CLAUSE\n\n`
  
  clause += `Any dispute, controversy, or claim arising out of or relating to this ${agreementType} shall be resolved through the following escalating stages:\n\n`
  
  clause += `STAGE 1: NEGOTIATION\n\n`
  clause += `The parties shall first attempt to resolve the dispute through good faith negotiations between senior representatives with authority to settle. `
  clause += `Such negotiations shall commence within 7 days of written notice of the dispute and continue for a period of ${negotiationPeriod || 30} days.\n\n`
  
  clause += `STAGE 2: MEDIATION\n\n`
  clause += `If the dispute is not resolved through negotiation, the parties shall submit the dispute to mediation administered by the Center for International Mediators and Arbitrators (CIMA). `
  clause += `The mediation shall be completed within ${mediationPeriod || 45} days from the appointment of the mediator.\n\n`
  
  clause += `STAGE 3: ARBITRATION\n\n`
  clause += `If the dispute is not resolved through mediation, it shall be finally resolved by arbitration administered by CIMA in accordance with the ${arbitrationRules || 'CIMA Arbitration Rules'}.\n\n`
  
  clause += `Arbitration Terms:\n`
  clause += `- Seat: ${jurisdiction}\n`
  clause += `- Number of Arbitrators: ${numberOfArbitrators === 1 ? 'One (1)' : numberOfArbitrators === 3 ? 'Three (3)' : numberOfArbitrators}\n`
  clause += `- Language: ${language}\n`
  clause += `- The arbitral award shall be final and binding\n\n`
  
  clause += `Exceptions:\nEither party may seek emergency or interim relief from a court of competent jurisdiction at any time, without waiving the dispute resolution procedures set forth herein.\n\n`
  
  clause += `Confidentiality:\nAll stages of this dispute resolution process shall be confidential.`
  
  return clause
}

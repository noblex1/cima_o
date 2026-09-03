import React, { useEffect, useRef, useState } from 'react'
import { ChevronDown, Download, FileText, Filter } from 'lucide-react'
import './Resources.css'

// Import all PDF resources
import legalFrameworkPDF from '../../assets/The-Legal-Framework-of-Domestic-and-International-Arbitration.pdf'
import ciarbArbitrationRules from '../../assets/1-ciarb-arbitration-rules.pdf'
import draftingArbitralAwards from '../../assets/10-drafting-arbitral-awards-part-i-_-general-2021.pdf'
import mediationEssentials from '../../assets/119068-WP-MediationEssentials-PUBLIC.pdf'
import enforcementArbitralAwards from '../../assets/2007.09-Enforcement-of-Arbitral-Awards-Against-States-and-State-Entities.pdf'
import pocketGuideArbitration from '../../assets/2021-Pocket-Guide-to-International-Arbitration.pdf'
import iccConflictManagement from '../../assets/2023-ICC-Effective-Conflict-Management.pdf'
import facilitatingSettlement from '../../assets/2023_Facilitating-Settlement-in-International-Arbitration-900-1.pdf'
import draftingArbitrationAgreements from '../../assets/2025.05.29-Drafting-Arbitration-Agreements1882861.2.pdf'
import controllingTimeCosts from '../../assets/861-2-ENG-Controlling-Time-and-Costs-in-Arbitration.pdf'
import cimaPrimerSeries from '../../assets/A-CIMA-Primer-Series.pdf'
import practicalGuideArbitration from '../../assets/A-PRACTICAL-GUIDE-ON-THE-CONCEPT-AND-PRACTICE-OF-ARBITRATION.pdf'
import accraArbRules from '../../assets/ACCRA-ARB-RULES-2025.pdf'
import adrIntroMediation from '../../assets/ADR-Introduction-for-mediation.pdf'
import adrMediationAgreement from '../../assets/ADR_MediationAgreement.pdf'
import africaMediationNewsletter from '../../assets/AFRICA-MEDIATION-NEWSLETTER.pdf'
import agreementToMediate from '../../assets/Agreement_To_Mediate-TEMPLATE.pdf'
import aiFutureArbitration from '../../assets/AI-and-the-Future-of-Arbitration.pdf'
import adrActGhana from '../../assets/Alternative-Dispute-Resolution-Act-2010-Act-798.pdf'
import amendedLcaRules from '../../assets/AMENDED-LCA-RULES.pdf'
import introCommercialArbitration from '../../assets/An_introduction_to_International_Commercial_Arbitration_final.pdf'
import introIntlArbitration from '../../assets/An-introduction-to-international-arbitration.pdf'
import arbitrationProceduresG from '../../assets/Arbitration_Procedures_and_Practice_in_G.pdf'
import arbitrationAdukia from '../../assets/arbitration-2015_CA-RAJKUMAR-S-ADUKIA.pdf'
import arbitrationAgreements2012 from '../../assets/Arbitration-Agreements2012.pdf'
import arbitrationIreland from '../../assets/Arbitration-in-Ireland-Slides.pdf'
import arbitrationProceduresUS from '../../assets/Arbitration-Procedures-and-Practice-in-the-United.pdf'
import arbitrationProcess from '../../assets/ARBITRATION-PROCESS.pdf'
import arbitrationTrendsAfrica from '../../assets/ARBITRATION-TRENDS-IN-AFRICA-DR-OSEI-BONSU-DICKSON.pdf'
import arbitrationActSA from '../../assets/ArbitrationAct4of1995_2.pdf'
import arbGuidelinesGhana from '../../assets/ArbitrationguidelinesGHANA.pdf'
import arbGuidelinesHK from '../../assets/ArbitrationguidelinesHONGKONG.pdf'
import arbGuidelinesIndia from '../../assets/ArbitrationguidelinesINDIA.pdf'
import arbGuidelinesKenya from '../../assets/ArbitrationguidelinesKENYA.pdf'
import arbGuidelinesNigeria from '../../assets/ArbitrationguidelinesNIGERIA.pdf'
import arbGuidelinesSingapore from '../../assets/ArbitrationguidelinesSINGAPORE.pdf'
import aiArbitrationLaw from '../../assets/Artificial-Intelligence-and-International-Arbitration-Law_25_11_22_14_24_37.pdf'
import bdIntroArbitration from '../../assets/BD097-Introduction-to-international-arbitration_FINAL.pdf'
import bookOfJargon from '../../assets/Book-of-Jargon_International-Arbitraton-Dec_2020.pdf'
import bcArbitrationSurvey from '../../assets/Bryan-Cave-Leighton-Paisner-Arbitration-Survey-Report-2018.pdf'
import cimaCoCPolicies from '../../assets/Center-for-International-Mediators-and-Arbitrators-CoC-and-Policies.pdf'
import ciarbAiGuideline from '../../assets/ciarb-guideline-on-the-use-of-ai-in-arbitration-2025-_final_march-2025.pdf'
import cimaMembershipFees from '../../assets/CIMA-2025-2026-Membership-Fees-and-Dues.pdf'
import cimaBranchAgreement from '../../assets/CIMA-Branch-Agreement.pdf'
import cimaBrochure from '../../assets/CIMA-BROCHURE-2024-2027.pdf'
import cimaCourseFees from '../../assets/CIMA-course-fees.pdf'
import cimaInvestiture from '../../assets/CIMA-INVESTITURE-2025.pdf'
import cimaMembership from '../../assets/CIMA-Membership.pdf'
import cimaGreenPolicy from '../../assets/CIMAS-GREEN-ARBITRATION-POLICY.pdf'
import cimaFacultyMembers from '../../assets/CIMA_MEET-THE-FACULTY-MEMBERS-2.pdf'
import cimaRules from '../../assets/CIMA_Rules-Edit-Nov.pdf'
import consentToArbitration from '../../assets/CONSENT-TO-ARBITRATION-UN.pdf'
import crArbRules from '../../assets/cr_arb_rules_en.pdf'
import draftingArbAgreement from '../../assets/drafting-an-arbitration-agreement.pdf'
import enforceabilityMediationOutcome from '../../assets/ENFORCEABILITY-OF-MEDIATION-OUTCOME.pdf'
import enforcementFordham from '../../assets/Enforcement_Fordham_82008.pdf'
import enforcementWithoutSingapore from '../../assets/Enforcement-of-international-mediated-settlements-without-the-Singapore-convention.pdf'
import enforcingCommercialMediation from '../../assets/ENFORCING-INTERNATIONAL-COMMERCIAL-MEDIATION-AS-ARBITRAL-AWARDS.pdf'
import ediPolicy from '../../assets/EQUALITY-DIVERSITY-INCLUSION-EDI-POLICY.pdf'
import essentialConceptsArb from '../../assets/essential-concepts-of-arbitration.pdf'
import ethics from '../../assets/ETHICS.pdf'
import diversityInclusion from '../../assets/Final-44-Diversity-Inclusion-and-the-Future-of-Dispute-Resolution-.pdf'
import ghArbReview1 from '../../assets/GH-Arbitration-Review-1.pdf'
import ghArbReview2 from '../../assets/GH-Arbitration-Review-2.pdf'
import ghArbReview3 from '../../assets/GH-Arbitration-Review-3.pdf'
import ghArbReview4 from '../../assets/GH-Arbitration-Review-4.pdf'
import ghArbReview5 from '../../assets/GH-Arbitration-Review-5.pdf'
import ghArbReview6 from '../../assets/GH-Arbitration-Review-6.pdf'
import ghArbReview7 from '../../assets/GH-Arbitration-Review-7.pdf'
import ghArbReview8 from '../../assets/GH-Arbitration-Review-8.pdf'
import ghArbReview9 from '../../assets/GH-Arbitration-Review-9.pdf'
import guideIntlArbitration from '../../assets/Guide-to-International-Arbitration-May-2014.pdf'
import aiMediationGuidelines from '../../assets/Guidelines-on-the-use-of-AI-in-mediation.pdf'
import ibaMediationEnforcement from '../../assets/IBA_mediation_enforcement_0406.pdf'
import iccArbitrationRules from '../../assets/icc-2021-arbitration-rules-2014-mediation-rules-english-version.pdf'
import iccaCybersecurity from '../../assets/ICCA-reports-no-6-icca-nyc-bar-cpr-protocol-cybersecurity-international-arbitration-2022-edition.pdf'
import icsidConvention from '../../assets/ICSID_Convention_EN.pdf'
import intMediationMarket from '../../assets/Int-Mediation-Evolving-Market.pdf'
import interAmericanConvention from '../../assets/Inter-American-Convention-on-international-commercial.pdf'
import intlArbitrationEbook from '../../assets/International-Arbitration-E-book-Key-Principles-Dr-Osei-Bonsu-Dickson-FCIMArb-2-dl3qg4.pdf'
import intlArbLegalFrameworks from '../../assets/International-Arbitration-Legal-Frameworks-Across-Continents.pdf'
import intlArbitration from '../../assets/International-Arbitration.pdf'
import intlMediation3Dimensions from '../../assets/International-Mediation-The-Three-Dimensions-of-Culture.pdf'
import introAdrMediation from '../../assets/Introduction-to-ADR-and-Mediatio-28052025-Georgette-Francois-FCIMArb.pdf'
import introArbUsersGuide from '../../assets/Introduction-to-Arbitration-A-Users-Guide-Second-Edition.pdf'
import introIntlArbObd from '../../assets/Introduction-to-International-Arbitration-OBD-1.pdf'
import introIntlMediationArb from '../../assets/Introduction-to-International-Mediation-and-Arbitration_-Resolvin.pdf'
import introMediation from '../../assets/INTRODUCTION-TO-MEDIATION.pdf'
import intlMediationJ8d from '../../assets/j8d5z3_International_Mediation.pdf'
import jurisdictionGhana from '../../assets/Jurisdiction-and-Its-Ramifications-in-Ghanaian-Arbitration-Proceedings.pdf'
import kiacRules from '../../assets/KIAC-arbitration-rules.pdf'
import lciaCaseworkReport from '../../assets/LCIA-2024-Annual-Casework-Report-2.pdf'
import lciaRules2020 from '../../assets/LCIA-Arbitration-Rules-2020.pdf'
import lciaRulesWithCosts from '../../assets/LCIA-Rules-Effective-1-Oct-2020-With-Schedule-of-Costs-1-Dec-2023.pdf'
import leadingCasesUganda from '../../assets/Leading-arbitration-cases-uganda-2025.pdf'
import mediationHague from '../../assets/Mediation-HccH.pdf'
import mediationParticipation from '../../assets/Mediation-participation-agreement-template.pdf'
import mediationAi from '../../assets/Mediation_and_AI.pdf'
import mediationGuidelinesUncitral from '../../assets/mediation_guidelines_-UNCITRAL.pdf'
import navigatingIntlArb from '../../assets/navigating-international-arbitration-a-comprehensive-guide-for-lawyers-and-adr-professionals_68b7cd63.pdf'
import nciaRules from '../../assets/NCIA-Revised-Rules-June-2023.pdf'
import nyConvention from '../../assets/New-York-Convention-Arbitration.pdf'
import overviewIntlArb from '../../assets/Overview-of-International-Arbitration.pdf'
import oxfordshireBulletin from '../../assets/OXFORDSHIRE-AFRICA-BULLETIN-JAN-MAR-2025.pdf'
import presentationCommercialMediation from '../../assets/Presentation-by-Isaac-Asare-at-CIMA-ON-COMMERCIAL-MEDIATION.pdf'
import recognitionEnforcement from '../../assets/Recognition_Enforcement-of-Arbitral-Awards-2025.pdf'
import sampleAgreementMediate from '../../assets/sample_agreement_to_mediate.pdf'
import sccSettlements from '../../assets/Settlements-in-cases-administered-under-the-SCC-Rules-final-1.pdf'
import siacRules from '../../assets/SIAC-Rules-7th-Edition.pdf'
import singaporeConvention from '../../assets/singapore-convention-on-mediation.pdf'
import takePledge from '../../assets/TAKE-THE-PLEDGE.pdf'
import cimaRulesComparative from '../../assets/The-CIMA-Arbitration-and-Mediation-Rules-2025-in-Comparative-Perspective.pdf'
import cimaJournal from '../../assets/THE-CIMA-JOURNAL-OF-DISPUTE-RESOLUTION-JULY.pdf'
import cimaWorldFellows from '../../assets/The-CIMA-World-Fellows-Programme-2025-26.pdf'
import enforceabilityActionsRem from '../../assets/The-enforceability-of-arbitration-clauses-involving-actions-in-rem.pdf'
import independenceImpartiality from '../../assets/THE-INDEPENDENCE-AND-IMPARTIALITY-OF-ARBITRATORS-IN-INTERNATIONAL-COMMERCIAL-ARBITRATION.pdf'
import singaporeConventionDoc from '../../assets/The-Singapore-Convention.pdf'
import ethicsAiCybersecurity from '../../assets/Timmers2019_Article_EthicsOfAIAndCybersecurityWhen-1.pdf'
import tpArbitrationGuide from '../../assets/tp_internationalarbitrationguide_final.pdf'
import uncitralArbRules from '../../assets/uncitral-arbitration-rules-2013-e.pdf'
import uncitralMediationLaw from '../../assets/UNCITRAL-Model-Law-on-mediation.pdf'
import uncitralModelLaw from '../../assets/UNCITRAL-model-law.pdf'

const Resources = () => {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [isCategoryMenuOpen, setIsCategoryMenuOpen] = useState(false)
  const [shouldOpenCategoryMenuUp, setShouldOpenCategoryMenuUp] = useState(false)
  const categoryDropdownRef = useRef(null)
  const categoryMenuRef = useRef(null)

  // Organized resources by category
  const resourcesByCategory = {
    'CIMA Official Documents': [
      { name: 'CIMA Arbitration and Mediation Rules (2025)', type: 'PDF', size: '2.8 MB', file: cimaRules, category: 'CIMA Official Documents' },
      { name: 'CIMA Rules in Comparative Perspective', type: 'PDF', size: '1.5 MB', file: cimaRulesComparative, category: 'CIMA Official Documents' },
      { name: 'CIMA Code of Conduct and Policies', type: 'PDF', size: '0.9 MB', file: cimaCoCPolicies, category: 'CIMA Official Documents' },
      { name: 'CIMA Primer Series', type: 'PDF', size: '1.2 MB', file: cimaPrimerSeries, category: 'CIMA Official Documents' },
      { name: 'CIMA Brochure 2024-2027', type: 'PDF', size: '3.4 MB', file: cimaBrochure, category: 'CIMA Official Documents' },
      { name: 'CIMA Membership Information', type: 'PDF', size: '0.5 MB', file: cimaMembership, category: 'CIMA Official Documents' },
      { name: 'CIMA Membership Fees 2025-2026', type: 'PDF', size: '0.3 MB', file: cimaMembershipFees, category: 'CIMA Official Documents' },
      { name: 'CIMA Course Fees', type: 'PDF', size: '0.4 MB', file: cimaCourseFees, category: 'CIMA Official Documents' },
      { name: 'CIMA Faculty Members', type: 'PDF', size: '1.1 MB', file: cimaFacultyMembers, category: 'CIMA Official Documents' },
      { name: 'CIMA Green Arbitration Policy', type: 'PDF', size: '0.6 MB', file: cimaGreenPolicy, category: 'CIMA Official Documents' },
      { name: 'CIMA Equality, Diversity & Inclusion Policy', type: 'PDF', size: '0.5 MB', file: ediPolicy, category: 'CIMA Official Documents' },
      { name: 'CIMA Branch Agreement', type: 'PDF', size: '0.4 MB', file: cimaBranchAgreement, category: 'CIMA Official Documents' },
      { name: 'CIMA World Fellows Programme 2025-26', type: 'PDF', size: '0.8 MB', file: cimaWorldFellows, category: 'CIMA Official Documents' },
      { name: 'CIMA Investiture 2025', type: 'PDF', size: '1.2 MB', file: cimaInvestiture, category: 'CIMA Official Documents' },
      { name: 'CIMA Journal of Dispute Resolution', type: 'PDF', size: '2.1 MB', file: cimaJournal, category: 'CIMA Official Documents' },
    ],
    'Arbitration Rules & Procedures': [
      { name: 'CIArb Arbitration Rules', type: 'PDF', size: '1.8 MB', file: ciarbArbitrationRules, category: 'Arbitration Rules & Procedures' },
      { name: 'ICC Arbitration Rules 2021 & Mediation Rules 2014', type: 'PDF', size: '2.5 MB', file: iccArbitrationRules, category: 'Arbitration Rules & Procedures' },
      { name: 'LCIA Arbitration Rules 2020', type: 'PDF', size: '1.3 MB', file: lciaRules2020, category: 'Arbitration Rules & Procedures' },
      { name: 'LCIA Rules with Schedule of Costs (2023)', type: 'PDF', size: '1.4 MB', file: lciaRulesWithCosts, category: 'Arbitration Rules & Procedures' },
      { name: 'SIAC Arbitration Rules (7th Edition)', type: 'PDF', size: '1.9 MB', file: siacRules, category: 'Arbitration Rules & Procedures' },
      { name: 'KIAC Arbitration Rules', type: 'PDF', size: '1.1 MB', file: kiacRules, category: 'Arbitration Rules & Procedures' },
      { name: 'NCIA Revised Rules (June 2023)', type: 'PDF', size: '1.0 MB', file: nciaRules, category: 'Arbitration Rules & Procedures' },
      { name: 'UNCITRAL Arbitration Rules 2013', type: 'PDF', size: '0.8 MB', file: uncitralArbRules, category: 'Arbitration Rules & Procedures' },
      { name: 'Accra Arbitration Rules 2025', type: 'PDF', size: '1.2 MB', file: accraArbRules, category: 'Arbitration Rules & Procedures' },
      { name: 'Amended LCA Rules', type: 'PDF', size: '0.9 MB', file: amendedLcaRules, category: 'Arbitration Rules & Procedures' },
      { name: 'Arbitration Process Overview', type: 'PDF', size: '1.5 MB', file: arbitrationProcess, category: 'Arbitration Rules & Procedures' },
    ],
    'Introduction to Arbitration': [
      { name: 'Introduction to International Arbitration', type: 'PDF', size: '1.7 MB', file: introIntlArbitration, category: 'Introduction to Arbitration' },
      { name: 'Introduction to International Commercial Arbitration', type: 'PDF', size: '2.1 MB', file: introCommercialArbitration, category: 'Introduction to Arbitration' },
      { name: 'Introduction to Arbitration: A User\'s Guide (2nd Edition)', type: 'PDF', size: '3.2 MB', file: introArbUsersGuide, category: 'Introduction to Arbitration' },
      { name: 'Essential Concepts of Arbitration', type: 'PDF', size: '1.4 MB', file: essentialConceptsArb, category: 'Introduction to Arbitration' },
      { name: 'A Practical Guide on Arbitration Concept and Practice', type: 'PDF', size: '2.8 MB', file: practicalGuideArbitration, category: 'Introduction to Arbitration' },
      { name: '2021 Pocket Guide to International Arbitration', type: 'PDF', size: '0.9 MB', file: pocketGuideArbitration, category: 'Introduction to Arbitration' },
      { name: 'Overview of International Arbitration', type: 'PDF', size: '1.1 MB', file: overviewIntlArb, category: 'Introduction to Arbitration' },
      { name: 'Guide to International Arbitration (May 2014)', type: 'PDF', size: '2.4 MB', file: guideIntlArbitration, category: 'Introduction to Arbitration' },
      { name: 'Book of Jargon: International Arbitration', type: 'PDF', size: '1.6 MB', file: bookOfJargon, category: 'Introduction to Arbitration' },
    ],
    'Advanced Arbitration Topics': [
      { name: 'Drafting Arbitral Awards Part I (2021)', type: 'PDF', size: '1.9 MB', file: draftingArbitralAwards, category: 'Advanced Arbitration Topics' },
      { name: 'Drafting Arbitration Agreements', type: 'PDF', size: '0.7 MB', file: draftingArbAgreement, category: 'Advanced Arbitration Topics' },
      { name: 'Drafting Arbitration Agreements (2025)', type: 'PDF', size: '1.1 MB', file: draftingArbitrationAgreements, category: 'Advanced Arbitration Topics' },
      { name: 'Arbitration Agreements (2012)', type: 'PDF', size: '1.3 MB', file: arbitrationAgreements2012, category: 'Advanced Arbitration Topics' },
      { name: 'Controlling Time and Costs in Arbitration', type: 'PDF', size: '1.8 MB', file: controllingTimeCosts, category: 'Advanced Arbitration Topics' },
      { name: 'Facilitating Settlement in International Arbitration', type: 'PDF', size: '2.3 MB', file: facilitatingSettlement, category: 'Advanced Arbitration Topics' },
      { name: 'Independence and Impartiality of Arbitrators', type: 'PDF', size: '2.6 MB', file: independenceImpartiality, category: 'Advanced Arbitration Topics' },
      { name: 'Consent to Arbitration (UN)', type: 'PDF', size: '0.8 MB', file: consentToArbitration, category: 'Advanced Arbitration Topics' },
      { name: 'Navigating International Arbitration: Comprehensive Guide', type: 'PDF', size: '3.1 MB', file: navigatingIntlArb, category: 'Advanced Arbitration Topics' },
      { name: 'International Arbitration E-book (Dr. Osei-Bonsu Dickson)', type: 'PDF', size: '2.4 MB', file: intlArbitrationEbook, category: 'Advanced Arbitration Topics' },
      { name: 'Enforceability of Arbitration Clauses (Actions in Rem)', type: 'PDF', size: '1.2 MB', file: enforceabilityActionsRem, category: 'Advanced Arbitration Topics' },
    ],
    'Enforcement & Recognition': [
      { name: 'Enforcement of Arbitral Awards Against States', type: 'PDF', size: '1.5 MB', file: enforcementArbitralAwards, category: 'Enforcement & Recognition' },
      { name: 'Recognition & Enforcement of Arbitral Awards (2025)', type: 'PDF', size: '1.7 MB', file: recognitionEnforcement, category: 'Enforcement & Recognition' },
      { name: 'New York Convention on Arbitration', type: 'PDF', size: '0.6 MB', file: nyConvention, category: 'Enforcement & Recognition' },
      { name: 'Enforcement (Fordham 2008)', type: 'PDF', size: '0.9 MB', file: enforcementFordham, category: 'Enforcement & Recognition' },
    ],
    'Mediation Resources': [
      { name: 'Mediation Essentials', type: 'PDF', size: '1.6 MB', file: mediationEssentials, category: 'Mediation Resources' },
      { name: 'Introduction to ADR and Mediation', type: 'PDF', size: '1.8 MB', file: introAdrMediation, category: 'Mediation Resources' },
      { name: 'Introduction to Mediation', type: 'PDF', size: '1.3 MB', file: introMediation, category: 'Mediation Resources' },
      { name: 'ADR Introduction for Mediation', type: 'PDF', size: '0.8 MB', file: adrIntroMediation, category: 'Mediation Resources' },
      { name: 'International Mediation Overview', type: 'PDF', size: '1.5 MB', file: intlMediationJ8d, category: 'Mediation Resources' },
      { name: 'International Mediation: Three Dimensions of Culture', type: 'PDF', size: '1.9 MB', file: intlMediation3Dimensions, category: 'Mediation Resources' },
      { name: 'International Mediation Evolving Market', type: 'PDF', size: '1.2 MB', file: intMediationMarket, category: 'Mediation Resources' },
      { name: 'Mediation and Arbitration: Resolving Disputes', type: 'PDF', size: '2.2 MB', file: introIntlMediationArb, category: 'Mediation Resources' },
      { name: 'UNCITRAL Mediation Guidelines', type: 'PDF', size: '0.7 MB', file: mediationGuidelinesUncitral, category: 'Mediation Resources' },
      { name: 'UNCITRAL Model Law on Mediation', type: 'PDF', size: '0.9 MB', file: uncitralMediationLaw, category: 'Mediation Resources' },
      { name: 'Mediation at The Hague', type: 'PDF', size: '1.1 MB', file: mediationHague, category: 'Mediation Resources' },
      { name: 'Africa Mediation Newsletter', type: 'PDF', size: '2.3 MB', file: africaMediationNewsletter, category: 'Mediation Resources' },
      { name: 'Commercial Mediation Presentation (Isaac Asare)', type: 'PDF', size: '1.6 MB', file: presentationCommercialMediation, category: 'Mediation Resources' },
    ],
    'Mediation Agreements & Templates': [
      { name: 'ADR Mediation Agreement Template', type: 'PDF', size: '0.3 MB', file: adrMediationAgreement, category: 'Mediation Agreements & Templates' },
      { name: 'Agreement to Mediate Template', type: 'PDF', size: '0.2 MB', file: agreementToMediate, category: 'Mediation Agreements & Templates' },
      { name: 'Sample Agreement to Mediate', type: 'PDF', size: '0.2 MB', file: sampleAgreementMediate, category: 'Mediation Agreements & Templates' },
      { name: 'Mediation Participation Agreement Template', type: 'PDF', size: '0.3 MB', file: mediationParticipation, category: 'Mediation Agreements & Templates' },
    ],
    'Mediation Enforcement': [
      { name: 'Enforceability of Mediation Outcomes', type: 'PDF', size: '1.1 MB', file: enforceabilityMediationOutcome, category: 'Mediation Enforcement' },
      { name: 'Enforcement Without Singapore Convention', type: 'PDF', size: '1.4 MB', file: enforcementWithoutSingapore, category: 'Mediation Enforcement' },
      { name: 'Enforcing International Commercial Mediation as Awards', type: 'PDF', size: '1.6 MB', file: enforcingCommercialMediation, category: 'Mediation Enforcement' },
      { name: 'IBA Mediation Enforcement', type: 'PDF', size: '0.8 MB', file: ibaMediationEnforcement, category: 'Mediation Enforcement' },
      { name: 'Singapore Convention on Mediation', type: 'PDF', size: '0.5 MB', file: singaporeConvention, category: 'Mediation Enforcement' },
      { name: 'The Singapore Convention', type: 'PDF', size: '0.6 MB', file: singaporeConventionDoc, category: 'Mediation Enforcement' },
    ],
    'Regional Guidelines': [
      { name: 'Arbitration Guidelines - Ghana', type: 'PDF', size: '1.2 MB', file: arbGuidelinesGhana, category: 'Regional Guidelines' },
      { name: 'Arbitration Guidelines - Hong Kong', type: 'PDF', size: '1.1 MB', file: arbGuidelinesHK, category: 'Regional Guidelines' },
      { name: 'Arbitration Guidelines - India', type: 'PDF', size: '1.3 MB', file: arbGuidelinesIndia, category: 'Regional Guidelines' },
      { name: 'Arbitration Guidelines - Kenya', type: 'PDF', size: '1.0 MB', file: arbGuidelinesKenya, category: 'Regional Guidelines' },
      { name: 'Arbitration Guidelines - Nigeria', type: 'PDF', size: '1.2 MB', file: arbGuidelinesNigeria, category: 'Regional Guidelines' },
      { name: 'Arbitration Guidelines - Singapore', type: 'PDF', size: '1.1 MB', file: arbGuidelinesSingapore, category: 'Regional Guidelines' },
      { name: 'Jurisdiction in Ghanaian Arbitration Proceedings', type: 'PDF', size: '1.5 MB', file: jurisdictionGhana, category: 'Regional Guidelines' },
      { name: 'Arbitration Procedures and Practice in Ghana', type: 'PDF', size: '1.8 MB', file: arbitrationProceduresG, category: 'Regional Guidelines' },
      { name: 'Arbitration Procedures and Practice in United States', type: 'PDF', size: '2.1 MB', file: arbitrationProceduresUS, category: 'Regional Guidelines' },
      { name: 'Arbitration in Ireland', type: 'PDF', size: '1.4 MB', file: arbitrationIreland, category: 'Regional Guidelines' },
      { name: 'Leading Arbitration Cases in Uganda (2025)', type: 'PDF', size: '1.9 MB', file: leadingCasesUganda, category: 'Regional Guidelines' },
    ],
    'Legislation & Legal Framework': [
      { name: 'The Legal Framework of Domestic and International Arbitration', type: 'PDF', size: '1.1 MB', file: legalFrameworkPDF, category: 'Legislation & Legal Framework' },
      { name: 'International Arbitration Legal Frameworks Across Continents', type: 'PDF', size: '2.3 MB', file: intlArbLegalFrameworks, category: 'Legislation & Legal Framework' },
      { name: 'Alternative Dispute Resolution Act 2010 (Ghana - Act 798)', type: 'PDF', size: '0.9 MB', file: adrActGhana, category: 'Legislation & Legal Framework' },
      { name: 'Arbitration Act 4 of 1995 (South Africa)', type: 'PDF', size: '0.7 MB', file: arbitrationActSA, category: 'Legislation & Legal Framework' },
      { name: 'UNCITRAL Model Law', type: 'PDF', size: '0.8 MB', file: uncitralModelLaw, category: 'Legislation & Legal Framework' },
      { name: 'ICSID Convention', type: 'PDF', size: '0.6 MB', file: icsidConvention, category: 'Legislation & Legal Framework' },
      { name: 'Inter-American Convention on International Commercial Arbitration', type: 'PDF', size: '0.5 MB', file: interAmericanConvention, category: 'Legislation & Legal Framework' },
    ],
    'AI & Technology in ADR': [
      { name: 'AI and the Future of Arbitration', type: 'PDF', size: '1.3 MB', file: aiFutureArbitration, category: 'AI & Technology in ADR' },
      { name: 'CIArb Guidelines on Use of AI in Arbitration (2025)', type: 'PDF', size: '1.5 MB', file: ciarbAiGuideline, category: 'AI & Technology in ADR' },
      { name: 'Guidelines on Use of AI in Mediation', type: 'PDF', size: '1.2 MB', file: aiMediationGuidelines, category: 'AI & Technology in ADR' },
      { name: 'Mediation and AI', type: 'PDF', size: '1.0 MB', file: mediationAi, category: 'AI & Technology in ADR' },
      { name: 'Artificial Intelligence and International Arbitration Law', type: 'PDF', size: '2.1 MB', file: aiArbitrationLaw, category: 'AI & Technology in ADR' },
      { name: 'Ethics of AI and Cybersecurity', type: 'PDF', size: '1.4 MB', file: ethicsAiCybersecurity, category: 'AI & Technology in ADR' },
      { name: 'ICCA Cybersecurity Protocol for International Arbitration', type: 'PDF', size: '2.2 MB', file: iccaCybersecurity, category: 'AI & Technology in ADR' },
    ],
    'African Arbitration': [
      { name: 'Ghana Arbitration Review - Volume 1', type: 'PDF', size: '2.8 MB', file: ghArbReview1, category: 'African Arbitration' },
      { name: 'Ghana Arbitration Review - Volume 2', type: 'PDF', size: '2.7 MB', file: ghArbReview2, category: 'African Arbitration' },
      { name: 'Ghana Arbitration Review - Volume 3', type: 'PDF', size: '2.9 MB', file: ghArbReview3, category: 'African Arbitration' },
      { name: 'Ghana Arbitration Review - Volume 4', type: 'PDF', size: '3.1 MB', file: ghArbReview4, category: 'African Arbitration' },
      { name: 'Ghana Arbitration Review - Volume 5', type: 'PDF', size: '2.8 MB', file: ghArbReview5, category: 'African Arbitration' },
      { name: 'Ghana Arbitration Review - Volume 6', type: 'PDF', size: '3.0 MB', file: ghArbReview6, category: 'African Arbitration' },
      { name: 'Ghana Arbitration Review - Volume 7', type: 'PDF', size: '2.9 MB', file: ghArbReview7, category: 'African Arbitration' },
      { name: 'Ghana Arbitration Review - Volume 8', type: 'PDF', size: '3.2 MB', file: ghArbReview8, category: 'African Arbitration' },
      { name: 'Ghana Arbitration Review - Volume 9', type: 'PDF', size: '3.1 MB', file: ghArbReview9, category: 'African Arbitration' },
      { name: 'Arbitration Trends in Africa (Dr. Osei-Bonsu Dickson)', type: 'PDF', size: '1.8 MB', file: arbitrationTrendsAfrica, category: 'African Arbitration' },
      { name: 'Oxfordshire-Africa Bulletin (Jan-Mar 2025)', type: 'PDF', size: '1.6 MB', file: oxfordshireBulletin, category: 'African Arbitration' },
    ],
    'Research & Reports': [
      { name: 'Bryan Cave Leighton Paisner Arbitration Survey 2018', type: 'PDF', size: '2.5 MB', file: bcArbitrationSurvey, category: 'Research & Reports' },
      { name: 'LCIA Annual Casework Report 2024', type: 'PDF', size: '1.9 MB', file: lciaCaseworkReport, category: 'Research & Reports' },
      { name: 'ICC Effective Conflict Management (2023)', type: 'PDF', size: '1.7 MB', file: iccConflictManagement, category: 'Research & Reports' },
      { name: 'SCC Settlements in Administered Cases', type: 'PDF', size: '1.3 MB', file: sccSettlements, category: 'Research & Reports' },
      { name: 'Diversity, Inclusion and Future of Dispute Resolution', type: 'PDF', size: '2.1 MB', file: diversityInclusion, category: 'Research & Reports' },
    ],
    'Ethics & Professional Standards': [
      { name: 'Ethics in ADR', type: 'PDF', size: '0.9 MB', file: ethics, category: 'Ethics & Professional Standards' },
      { name: 'Take the Pledge (Diversity & Inclusion)', type: 'PDF', size: '0.4 MB', file: takePledge, category: 'Ethics & Professional Standards' },
    ],
  }

  // Flatten all resources for "All" category
  const allResources = Object.values(resourcesByCategory).flat()
  
  // Get unique categories
  const categories = ['All', ...Object.keys(resourcesByCategory)]
  
  // Filter resources based on selected category
  const displayedResources = selectedCategory === 'All' 
    ? allResources 
    : resourcesByCategory[selectedCategory]

  useEffect(() => {
    if (isCategoryMenuOpen && categoryDropdownRef.current) {
      const dropdownRect = categoryDropdownRef.current.getBoundingClientRect()
      const availableSpaceBelow = window.innerHeight - dropdownRect.bottom
      setShouldOpenCategoryMenuUp(availableSpaceBelow < 360)
    }

    const handlePointerDown = (event) => {
      if (!categoryDropdownRef.current?.contains(event.target)) {
        setIsCategoryMenuOpen(false)
      }
    }

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setIsCategoryMenuOpen(false)
      }
    }

    document.addEventListener('pointerdown', handlePointerDown)
    document.addEventListener('keydown', handleKeyDown)

    return () => {
      document.removeEventListener('pointerdown', handlePointerDown)
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [isCategoryMenuOpen])

  const handleCategoryKeyDown = (event) => {
    const selectedIndex = categories.indexOf(selectedCategory)

    if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
      event.preventDefault()
      const direction = event.key === 'ArrowDown' ? 1 : -1
      const nextIndex = (selectedIndex + direction + categories.length) % categories.length
      setSelectedCategory(categories[nextIndex])
      setIsCategoryMenuOpen(true)
    }

    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault()
      setIsCategoryMenuOpen((isOpen) => !isOpen)
    }
  }

  return (
    <div className="resources-page">
      {/* Hero Section */}
      <section className="resources-hero">
        <div className="container">
          <h1>ADR Professional Resources</h1>
          <p>Download essential materials, guides, and journals for alternative dispute resolution professionals</p>
          <p className="resources-count">{allResources.length} resources available</p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="resources-filter">
        <div className="container">
          <div className="filter-wrapper">
            <div className="filter-header">
              <Filter size={20} />
              <span>Filter by Category:</span>
            </div>
            <div className="category-dropdown" ref={categoryDropdownRef}>
              <button
                type="button"
                className="category-dropdown-trigger"
                aria-haspopup="listbox"
                aria-expanded={isCategoryMenuOpen}
                onClick={() => setIsCategoryMenuOpen((isOpen) => !isOpen)}
                onKeyDown={handleCategoryKeyDown}
              >
                <span>{selectedCategory}</span>
                <ChevronDown size={19} aria-hidden="true" />
              </button>
              {isCategoryMenuOpen && (
                <div
                  className={`category-dropdown-menu${shouldOpenCategoryMenuUp ? ' is-open-up' : ''}`}
                  ref={categoryMenuRef}
                  role="listbox"
                  aria-label="Resource categories"
                >
                  {categories.map((category) => (
                    <button
                      type="button"
                      role="option"
                      aria-selected={selectedCategory === category}
                      className={`category-dropdown-option${selectedCategory === category ? ' is-selected' : ''}`}
                      key={category}
                      onClick={() => {
                        setSelectedCategory(category)
                        setIsCategoryMenuOpen(false)
                      }}
                    >
                      <span>{category}</span>
                      {category !== 'All' && <span className="category-count">{resourcesByCategory[category]?.length || 0}</span>}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
          <div className="results-count">
            Showing {displayedResources.length} resource{displayedResources.length !== 1 ? 's' : ''}
          </div>
        </div>
      </section>

      {/* Resources List */}
      <section className="resources-content">
        <div className="container">
          {selectedCategory !== 'All' && (
            <h2 className="category-title">{selectedCategory}</h2>
          )}
          <div className="resources-list">
            {displayedResources.map((resource, index) => (
              <div key={index} className="resource-item">
                <div className="resource-info">
                  <FileText size={24} />
                  <div>
                    <h4>{resource.name}</h4>
                    <span className="resource-meta">{resource.type} • {resource.size}</span>
                  </div>
                </div>
                <a href={resource.file} download className="btn-download">
                  <Download size={18} />
                  Download
                </a>
              </div>
            ))}
          </div>
          {displayedResources.length === 0 && (
            <p className="no-resources">No resources found in this category.</p>
          )}
        </div>
      </section>

      {/* Info Notice */}
      <section className="resources-notice">
        <div className="container">
          <div className="notice-box">
            <h3>Resource Library</h3>
            <p>Our comprehensive resource library includes arbitration rules, mediation guides, legal frameworks, and professional development materials from leading institutions worldwide. All resources are provided for educational and professional reference.</p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Resources

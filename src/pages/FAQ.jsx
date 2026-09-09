import React, { useState } from 'react'
import { ChevronDown, HelpCircle } from 'lucide-react'
import './FAQ.css'

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null)
  const [openCategory, setOpenCategory] = useState('arbitration-basics')

  const toggleQuestion = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  const faqCategories = [
    {
      id: 'arbitration-basics',
      title: 'Arbitration & ADR Basics',
      questions: [
        {
          q: 'What is arbitration?',
          a: 'Arbitration is a private method of resolving disputes outside the traditional court system. The parties agree to submit their dispute to one or more independent arbitrators. After considering the parties\' submissions and evidence, the arbitral tribunal makes a decision known as an award. An arbitral award is generally binding upon the parties and may be recognised and enforced through national courts, subject to the applicable law and relevant international conventions.'
        },
        {
          q: 'What is an arbitral tribunal?',
          a: 'An arbitral tribunal is the independent decision-making body appointed to determine an arbitration. A tribunal may consist of a sole arbitrator or, where appropriate, three or more arbitrators. Where there is a panel, one arbitrator will ordinarily act as the chair or presiding arbitrator.'
        },
        {
          q: 'What are the principal stages of an arbitration?',
          a: 'Although every arbitration is different, proceedings will commonly involve: (1) commencement of the arbitration; (2) submission of a response; (3) constitution of the arbitral tribunal; (4) an initial procedural or case-management conference; (5) written submissions; (6) production and consideration of evidence; (7) witness and expert evidence, where required; (8) an oral or virtual hearing, where appropriate; (9) closing submissions; and (10) delivery of the arbitral award. One of arbitration\'s principal advantages is procedural flexibility. The process may be adapted to the nature, complexity and value of the dispute.'
        },
        {
          q: 'How is arbitration different from litigation?',
          a: 'Litigation takes place before national courts and is governed principally by court procedures. Arbitration arises from the parties\' agreement and ordinarily permits greater flexibility regarding procedure, the appointment of decision-makers, confidentiality, hearing arrangements, applicable rules and, in international matters, the seat of arbitration. International arbitral awards may also benefit from a widely established international framework for recognition and enforcement.'
        },
        {
          q: 'Is an arbitral award final?',
          a: 'Generally, yes. Arbitral awards are intended to provide final and binding resolution of disputes. The grounds upon which an award may be challenged or set aside are usually limited and depend upon the law applicable at the seat of arbitration.'
        },
        {
          q: 'What is mediation?',
          a: 'Mediation is a confidential and consensual process in which an independent neutral person — the mediator — assists parties to negotiate a mutually acceptable resolution of their dispute. Unlike an arbitrator, a mediator ordinarily does not determine who wins or loses and does not impose a decision upon the parties.'
        },
        {
          q: 'What is the difference between arbitration and mediation?',
          a: 'The principal distinction concerns who determines the outcome. In arbitration, the arbitrator determines the dispute and issues an award. In mediation, the parties retain control over the outcome. The mediator facilitates negotiations but ordinarily does not impose a settlement. Parties may use mediation before arbitration, during arbitral proceedings or as part of a multi-tier dispute-resolution process.'
        },
        {
          q: 'What is ADR?',
          a: 'Alternative Dispute Resolution (ADR) is a broad term covering methods of resolving disputes outside conventional court litigation. It commonly includes arbitration, mediation, negotiation, conciliation and other consensual or adjudicative dispute-resolution mechanisms.'
        }
      ]
    },
    {
      id: 'cima-services',
      title: 'CIMA & Dispute Resolution',
      questions: [
        {
          q: 'What is CIMA?',
          a: 'The Center for International Mediators and Arbitrators (CIMA) is an international ADR organisation supporting the development and practice of arbitration, mediation and related forms of dispute resolution. CIMA promotes professional standards through education, accreditation, membership, research, professional development, international collaboration and practical ADR initiatives.'
        },
        {
          q: 'What dispute-resolution services does CIMA provide?',
          a: 'Depending upon the applicable agreement, rules and circumstances, CIMA may support parties and practitioners through services connected with arbitration, mediation, neutral appointment, ADR education, professional development and dispute-resolution capacity building. The precise services available should be confirmed with CIMA before they are incorporated into a transaction or dispute-resolution arrangement.'
        },
        {
          q: 'Do I need to be a CIMA member to use CIMA dispute-resolution services?',
          a: 'No. Membership and professional accreditation are distinct from the use of CIMA\'s dispute-resolution services. Parties do not ordinarily need to be CIMA members merely to seek CIMA\'s institutional or ADR services.'
        },
        {
          q: 'What are the CIMA Arbitration Rules?',
          a: 'The CIMA Arbitration Rules provide a procedural framework for arbitrations conducted under those Rules. They address matters such as commencement of proceedings, constitution of the tribunal, procedural management, hearings, evidence, awards, costs and other aspects of the arbitral process. Parties considering their incorporation into a contract should use CIMA\'s recommended model arbitration clause and obtain appropriate legal advice where necessary.'
        },
        {
          q: 'How can parties refer a dispute to CIMA arbitration?',
          a: 'Ordinarily, the parties must have an arbitration agreement providing for arbitration under the applicable CIMA or designated arbitration rules. That agreement may appear as an arbitration clause in the original contract or may be concluded separately after a dispute has arisen. Proceedings are then commenced in accordance with the applicable rules and filing requirements.'
        },
        {
          q: 'What should an arbitration clause contain?',
          a: 'A properly drafted arbitration clause should ordinarily address: the agreement to arbitrate; the applicable arbitration rules; the administering or appointing institution, where applicable; the number of arbitrators; the method of appointment; the seat or legal place of arbitration; the language of the arbitration; and, where appropriate, the governing law of the contract. Parties are encouraged to use CIMA\'s recommended model clauses rather than drafting institutional clauses from scratch.'
        }
      ]
    },
    {
      id: 'arbitration-process',
      title: 'Arbitration Process',
      questions: [
        {
          q: 'What is the seat of arbitration?',
          a: 'The seat is the legal home of the arbitration. It determines the procedural law governing important aspects of the arbitration and ordinarily identifies the courts having supervisory jurisdiction over the proceedings. The seat does not necessarily determine where hearings must physically take place.'
        },
        {
          q: 'What is the governing law?',
          a: 'The governing or substantive law is the system of law used to determine the parties\' substantive rights and obligations. It is distinct from the law of the seat. An arbitration may therefore be legally seated in one jurisdiction while the underlying contract is governed by the law of another jurisdiction.'
        },
        {
          q: 'Must an arbitration hearing take place at the seat?',
          a: 'Not necessarily. Subject to the arbitration agreement, applicable rules and decisions of the tribunal, hearings may take place elsewhere or be conducted virtually. The legal seat ordinarily remains unchanged merely because a hearing occurs in another location.'
        },
        {
          q: 'Can arbitration proceedings be conducted online?',
          a: 'Yes. Modern arbitrations frequently use electronic filing, virtual case-management conferences, digital document repositories and videoconferencing. Whether a particular hearing should be virtual, physical or hybrid will depend upon the applicable rules, agreement of the parties and directions of the tribunal.'
        },
        {
          q: 'How are arbitrators appointed?',
          a: 'The appointment procedure depends upon the parties\' arbitration agreement and the applicable rules. The parties may agree upon a sole arbitrator, nominate arbitrators themselves or provide for appointments to be made or completed by an appointing authority or institution. All arbitrators should be independent, impartial and appropriately qualified for the dispute.'
        },
        {
          q: 'Can parties nominate their own arbitrators?',
          a: 'Where the arbitration agreement and applicable rules permit it, yes. Any nominated arbitrator will nevertheless be subject to the applicable requirements concerning independence, impartiality, availability, conflicts of interest and appointment.'
        },
        {
          q: 'Can CIMA assist in identifying suitable neutrals?',
          a: 'Where CIMA\'s applicable services and rules permit, CIMA may assist with the identification or appointment of appropriately qualified arbitrators, mediators and other ADR neutrals. Relevant considerations may include professional expertise, legal background, industry knowledge, language, nationality, experience, independence, impartiality and availability.'
        },
        {
          q: 'Are CIMA arbitrations confidential?',
          a: 'Arbitration is ordinarily private, but the precise scope of confidentiality depends upon the arbitration agreement, applicable rules and law governing the proceedings. Parties who require particular confidentiality protections should address them expressly in their contract, procedural arrangements or confidentiality agreement.'
        },
        {
          q: 'Are arbitral awards published?',
          a: 'Not ordinarily as a matter of course. Publication or disclosure may depend upon the applicable rules, consent of the parties, legal obligations, enforcement proceedings and any applicable confidentiality requirements. Where CIMA publishes educational material derived from cases, appropriate steps may be taken to protect confidential or identifying information where required.'
        },
        {
          q: 'Can international arbitral awards be enforced abroad?',
          a: 'Potentially, yes. One of the principal attractions of international arbitration is the international framework for recognition and enforcement of arbitral awards, particularly under the 1958 New York Convention. Actual enforcement will depend upon the relevant jurisdiction, applicable legislation and circumstances of the award.'
        },
        {
          q: 'How much does arbitration cost?',
          a: 'There is no single cost applicable to every arbitration. Costs may depend upon the amount and complexity of the dispute, number of arbitrators, duration of proceedings, applicable fee arrangements, expert evidence, hearing requirements and professional representation. Parties should consult the applicable CIMA schedule of fees and costs or contact CIMA for current filing and administrative requirements.'
        },
        {
          q: 'How long does arbitration take?',
          a: 'The duration depends upon the nature and complexity of the dispute. Straightforward matters may be resolved relatively quickly, while complex commercial or international disputes may require considerably more time. Effective case management, cooperation between the parties and proportionate procedures can materially reduce delay.'
        },
        {
          q: 'Can an arbitration be expedited?',
          a: 'Where permitted by the applicable rules or agreed by the parties, expedited procedures may be available. These may include shortened procedural timetables, streamlined submissions, virtual hearings, documents-only proceedings or other proportionate case-management measures.'
        }
      ]
    },
    {
      id: 'membership',
      title: 'CIMA Membership & Professional Accreditation',
      questions: [
        {
          q: 'Who can join CIMA?',
          a: 'CIMA membership is open to eligible professionals, practitioners and other persons with an interest or recognised competence in arbitration, mediation and ADR, subject to the requirements applicable to the relevant membership grade.'
        },
        {
          q: 'What are the principal CIMA membership grades?',
          a: 'CIMA provides progressive professional membership and accreditation pathways, which may include: Associate (ACIMArb) — an entry or foundational professional level for persons who have satisfied the applicable education, training or assessment requirements; Member (MCIMArb) — a professional membership level recognising more advanced ADR competence, training or experience; and Fellow (FCIMArb) — a senior professional grade recognising substantial knowledge, competence, experience or distinction in arbitration, mediation or ADR. Admission remains subject to CIMA\'s applicable regulations and assessment requirements.'
        },
        {
          q: 'Does completing a CIMA course automatically confer membership?',
          a: 'Not necessarily. Training, certification, professional accreditation and membership are related but distinct. Some approved programmes may provide a pathway towards a particular membership grade, subject to satisfying the applicable requirements.'
        },
        {
          q: 'Are CIMA programmes available internationally?',
          a: 'Yes. CIMA\'s professional outlook is international, and programmes may be delivered physically, virtually or in hybrid form to participants from different jurisdictions. CIMA also works through international partnerships, professional networks and jurisdiction-specific initiatives.'
        },
        {
          q: 'Does CIMA offer online and self-paced learning?',
          a: 'CIMA may provide live online, hybrid and self-paced professional education programmes. The format, assessment requirements and accreditation consequences will depend upon the particular programme.'
        },
        {
          q: 'Who teaches CIMA programmes?',
          a: 'CIMA programmes draw upon experienced arbitrators, mediators, judges, lawyers, academics, experts and other dispute-resolution professionals from different jurisdictions and professional backgrounds.'
        },
        {
          q: 'Are CIMA programmes only for lawyers?',
          a: 'No. ADR is multidisciplinary. Depending upon the programme, participants may include lawyers, judges, engineers, architects, accountants, surveyors, doctors, academics, executives, public officials, students and professionals working in sectors in which disputes commonly arise.'
        },
        {
          q: 'Does CIMA provide practical arbitration training?',
          a: 'Yes. CIMA places emphasis upon practical professional development. Programmes may incorporate case studies, drafting exercises, procedural simulations, advocacy exercises, mock arbitrations, mock mediations and other experiential learning methods.'
        },
        {
          q: 'Does CIMA provide continuing professional development?',
          a: 'Yes. CIMA offers conferences, webinars, masterclasses, academies, lectures, colloquia and specialist programmes intended to support continuing professional development in arbitration, mediation and ADR.'
        }
      ]
    },
    {
      id: 'professional-opportunities',
      title: 'Professional Opportunities',
      questions: [
        {
          q: 'Can CIMA membership help my professional development?',
          a: 'CIMA membership provides a platform for continuing professional education, networking, research, professional engagement and participation in CIMA activities. Membership does not, however, guarantee appointments, employment or instructions.'
        },
        {
          q: 'Does CIMA guarantee appointments as an arbitrator or mediator?',
          a: 'No. Professional accreditation or membership does not create an entitlement to appointment. Appointments must take account of the requirements of the particular dispute, applicable rules, professional competence, independence, impartiality, experience and availability.'
        },
        {
          q: 'Does CIMA support young practitioners and students?',
          a: 'Yes. CIMA supports the development of the next generation of ADR professionals through education, mentoring, simulations, research, professional networking, institutional partnerships and activities organised through its young-practitioner and student initiatives.'
        },
        {
          q: 'Can universities and professional bodies partner with CIMA?',
          a: 'Yes. CIMA welcomes appropriate collaboration with universities, law schools, bar associations, professional bodies, arbitral institutions, businesses, public institutions and other organisations interested in developing arbitration, mediation and ADR capacity.'
        }
      ]
    },
    {
      id: 'international-practice',
      title: 'International Practice',
      questions: [
        {
          q: 'Does CIMA operate only in the United Kingdom?',
          a: 'No. CIMA has an international orientation and supports ADR education, professional development and institutional collaboration across jurisdictions. Its activities are intended to connect practitioners and dispute-resolution communities across Africa, Europe, Asia, the Middle East, the Americas and other regions.'
        },
        {
          q: 'Must a dispute involve English law to use CIMA services?',
          a: 'Not necessarily. International arbitration allows parties considerable freedom in choosing the governing law, seat, language and procedural framework for their dispute. The suitability of CIMA services for a particular matter will depend upon the arbitration agreement, applicable rules and circumstances of the case.'
        },
        {
          q: 'What languages can be used in arbitration?',
          a: 'The parties may ordinarily agree upon the language of the arbitration, subject to the applicable rules. Where no language has been agreed, the tribunal or relevant institution may determine the appropriate language in accordance with those rules.'
        }
      ]
    },
    {
      id: 'further-assistance',
      title: 'Further Assistance',
      questions: [
        {
          q: 'Where can I find CIMA\'s model arbitration and mediation clauses?',
          a: 'CIMA\'s recommended model clauses should be available within the Arbitration & Mediation section of the CIMA website. Using an approved model clause reduces the risk of uncertainty or defective drafting.'
        },
        {
          q: 'Where can I find the CIMA Arbitration Rules?',
          a: 'The current CIMA Arbitration Rules should be available from the Arbitration section of the CIMA website. Parties should ensure that they consult the version of the Rules applicable to their arbitration.'
        },
        {
          q: 'How can I contact CIMA?',
          a: 'For enquiries concerning arbitration, mediation, training, membership, accreditation, partnerships or professional programmes, please contact CIMA through its official website or designated administrative offices. Center for International Mediators and Arbitrators (CIMA) — Oxfordshire | Accra | International — Website: www.thecima.org — Email: info@thecima.org'
        }
      ]
    }
  ]

  const currentCategory = faqCategories.find(cat => cat.id === openCategory)

  return (
    <div className="faq-page">
      {/* Hero Section */}
      <section className="faq-hero">
        <div className="container">
          <HelpCircle size={64} className="faq-hero-icon" />
          <h1>Frequently Asked Questions</h1>
          <p>Find answers to common questions about arbitration, mediation, CIMA membership, training and dispute-resolution services</p>
        </div>
      </section>

      {/* Introduction */}
      <section className="faq-intro">
        <div className="container">
          <p>These Frequently Asked Questions provide general guidance for individuals, businesses, legal practitioners and organisations seeking to understand arbitration, mediation, CIMA membership, professional accreditation, training and dispute-resolution services.</p>
          <div className="faq-helpful-for">
            <h3>These FAQs may be particularly helpful if you:</h3>
            <ul>
              <li>are considering arbitration or mediation to resolve a dispute</li>
              <li>wish to include an arbitration or mediation clause in a contract</li>
              <li>are involved, or expect to become involved, in arbitral or mediation proceedings</li>
              <li>wish to become a CIMA-accredited ADR professional</li>
              <li>are considering Associate, Member or Fellow status with CIMA</li>
              <li>wish to participate in CIMA training, conferences, simulations or other professional programmes</li>
            </ul>
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="faq-content">
        <div className="container">
          <div className="faq-layout">
            {/* Category Navigation */}
            <div className="faq-categories">
              <h3>Categories</h3>
              <div className="category-list">
                {faqCategories.map((category) => (
                  <button
                    key={category.id}
                    className={`category-item ${openCategory === category.id ? 'active' : ''}`}
                    onClick={() => {
                      setOpenCategory(category.id)
                      setOpenIndex(null)
                    }}
                  >
                    {category.title}
                    <span className="category-count">({category.questions.length})</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Questions & Answers */}
            <div className="faq-questions">
              <h2>{currentCategory?.title}</h2>
              <div className="questions-list">
                {currentCategory?.questions.map((item, index) => (
                  <div key={index} className={`faq-item ${openIndex === index ? 'open' : ''}`}>
                    <button
                      className="faq-question"
                      onClick={() => toggleQuestion(index)}
                    >
                      <span>{item.q}</span>
                      <ChevronDown size={24} className="chevron-icon" />
                    </button>
                    <div className="faq-answer">
                      <p>{item.a}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="faq-disclaimer">
        <div className="container">
          <h3>Important Notice</h3>
          <p>These Frequently Asked Questions are intended to provide general information only. They do not constitute legal advice and should not be relied upon as a substitute for advice concerning a particular contract, dispute or jurisdiction.</p>
          <p>Where a dispute has arisen, or where parties are drafting an arbitration or mediation agreement, independent professional advice should be obtained where appropriate.</p>
          <p className="copyright">© 2026 Center for International Mediators and Arbitrators (CIMA).</p>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="faq-contact">
        <div className="container">
          <h2>Still Have Questions?</h2>
          <p>Our team is here to help you with any additional enquiries</p>
          <a href="/contact" className="btn-contact">Contact Us</a>
        </div>
      </section>
    </div>
  )
}

export default FAQ

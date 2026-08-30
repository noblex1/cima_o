import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ScrollToTop from './components/ScrollToTop'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Arbitration from './pages/Arbitration'
import Mediation from './pages/Mediation'
import Rules from './pages/Rules'
import About from './pages/About'
import News from './pages/News'
import Events from './pages/Events'
import Contact from './pages/Contact'
import Governance from './pages/Governance'
import Oxfordshire from './pages/Oxfordshire'
import Campaigns from './pages/Campaigns'
import Resources from './pages/Resources'
import Careers from './pages/Careers'
import Gallery from './pages/Gallery'
import Courses from './pages/Courses'
import Commercial from './pages/Commercial'
import Construction from './pages/Construction'
import Investment from './pages/Investment'
import Energy from './pages/Energy'
import Financial from './pages/Financial'
import Technology from './pages/Technology'
import Maritime from './pages/Maritime'
import International from './pages/International'
import Sports from './pages/Sports'
import Labour from './pages/Labour'
import IntellectualProperty from './pages/IntellectualProperty'
import FinancialCrime from './pages/FinancialCrime'
import CustomaryArbitration from './pages/CustomaryArbitration'
import QualificationPathway from './pages/QualificationPathway'
import RollOfMediators from './pages/RollOfMediators'
import MembershipRenewals from './pages/MembershipRenewals'
import YoungForum from './pages/YoungForum'
import Global100 from './pages/Global100'
import SubmitDispute from './pages/SubmitDispute'
import RegisterArbitrator from './pages/RegisterArbitrator'
import SummerSchoolDetail from './pages/SummerSchoolDetail'
import ArbitratorProfile from './pages/ArbitratorProfile'

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="app">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/arbitration" element={<Arbitration />} />
          <Route path="/mediation" element={<Mediation />} />
          <Route path="/rules" element={<Rules />} />
          <Route path="/about" element={<About />} />
          <Route path="/governance" element={<Governance />} />
          <Route path="/oxfordshire" element={<Oxfordshire />} />
          <Route path="/campaigns" element={<Campaigns />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/news" element={<News />} />
          <Route path="/events" element={<Events />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/practice-areas/commercial" element={<Commercial />} />
          <Route path="/practice-areas/construction" element={<Construction />} />
          <Route path="/practice-areas/investment" element={<Investment />} />
          <Route path="/practice-areas/energy" element={<Energy />} />
          <Route path="/practice-areas/financial" element={<Financial />} />
          <Route path="/practice-areas/technology" element={<Technology />} />
          <Route path="/practice-areas/maritime" element={<Maritime />} />
          <Route path="/practice-areas/international" element={<International />} />
          <Route path="/practice-areas/sports" element={<Sports />} />
          <Route path="/practice-areas/labour" element={<Labour />} />
          <Route path="/practice-areas/intellectual-property" element={<IntellectualProperty />} />
          <Route path="/practice-areas/financial-crime" element={<FinancialCrime />} />
          <Route path="/practice-areas/customary-arbitration" element={<CustomaryArbitration />} />
          <Route path="/membership/qualification-pathway" element={<QualificationPathway />} />
          <Route path="/membership/roll-of-mediators-arbitrators" element={<RollOfMediators />} />
          <Route path="/membership/young-forum" element={<YoungForum />} />
          <Route path="/membership/renewals" element={<MembershipRenewals />} />
          <Route path="/global-100" element={<Global100 />} />
          <Route path="/contact/submit-dispute" element={<SubmitDispute />} />
          <Route path="/contact/register-arbitrator" element={<RegisterArbitrator />} />
          <Route path="/events/summer-school-2026" element={<SummerSchoolDetail />} />
          <Route path="/arbitrator/:profileId" element={<ArbitratorProfile />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App

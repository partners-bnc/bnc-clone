import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import VirtualCFO from './pages/VirtualCFO'
import Services from './pages/Services'
import AboutUs from './pages/AboutUs'
import Contact from './pages/Contact'
import Careers from './pages/Careers'
import CareersSubPage from './pages/CareersSubPage'
import CountryDetail from './pages/CountryDetail'
import PrivacyPolicy from './pages/PrivacyPolicy'
import NotFound from './pages/NotFound'
import Elevate from './pages/Elevate'
import Australia from './pages/Australia'
import Canada from './pages/Canada'
import SaudiArabia from './pages/SaudiArabia'
import UAE from './pages/UAE'
import Communities from './pages/Communities'
import TransformingProfessionals from './pages/TransformingProfessionals'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Pages wrapped in the common Header/Footer Layout */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          
          {/* Main Pages with synced routes */}
          <Route path="virtual-cfo" element={<VirtualCFO />} />
          <Route path="bnc-global-services" element={<Services />} />
          <Route path="about-us" element={<AboutUs />} />
          <Route path="contact-8" element={<Contact />} />
          <Route path="privacy-policy" element={<PrivacyPolicy />} />
          <Route path="careers" element={<Careers />} />

          {/* Top-level Careers Sub-Routes to match live site exactly */}
          <Route path="elevate" element={<Elevate />} />
          <Route path="transforming-professionals" element={<TransformingProfessionals />} />
          <Route path="communities" element={<Communities />} />

          {/* Dynamic sub-routes as fallback */}
          <Route path="careers/:slug" element={<CareersSubPage />} />

          {/* Countries Served Route with preserved typo */}
          <Route path="countires-we-serve/australia" element={<Australia />} />
          <Route path="countires-we-serve/canada" element={<Canada />} />
          <Route path="countires-we-serve/saudi-arabia" element={<SaudiArabia />} />
          <Route path="countires-we-serve/uae" element={<UAE />} />
          <Route path="countires-we-serve/:countrySlug" element={<CountryDetail />} />
        </Route>

        {/* 404 Route outside Layout */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

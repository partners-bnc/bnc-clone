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
import Cybersecurity from './pages/Cybersecurity'
import AccountingPolicyPreparationServices from './pages/AccountingPolicyPreparationServices'
import CapitalBudgeting from './pages/CapitalBudgeting'
import InternalControl from './pages/InternalControl'
import ServicesUnderVirtualCFO from './pages/ServicesUnderVirtualCFO'
import SpecificCFOServices from './pages/SpecificCFOServices'
import WorkingCapitalManagementServices from './pages/WorkingCapitalManagementServices'
import Accounting from './pages/Accounting'
import ARAP from './pages/ARAP'
import InventoryManagement from './pages/InventoryManagement'
import YearEndAccounting from './pages/YearEndAccounting'
import AuditSupportService from './pages/AuditSupportService'
import OutsourcedTaxPreparation from './pages/OutsourcedTaxPreparation'
import PayrollProcessing from './pages/PayrollProcessing'
import Bookkeeping from './pages/Bookkeeping'
import Quickbooks from './pages/Quickbooks'
import VirtualAccounting from './pages/VirtualAccounting'
import FinancialStatementPreparation from './pages/FinancialStatementPreparation'
import XeroAccounting from './pages/XeroAccounting'
import TaxOutsourcing from './pages/TaxOutsourcing'
import AccountsOutsourcing from './pages/AccountsOutsourcing'
import BankCardReconciliations from './pages/BankCardReconciliations'
import BusinessAnalysis from './pages/BusinessAnalysis'
import ControlAccountReconciliations from './pages/ControlAccountReconciliations'
import ControllerServices from './pages/ControllerServices'
import CostAnalysis from './pages/CostAnalysis'
import CustomerVendorReconciliation from './pages/CustomerVendorReconciliation'
import PayrollReconciliation from './pages/PayrollReconciliation'
import FinanceAdvisory from './pages/FinanceAdvisory'
import DigitalStockAssetVerification from './pages/DigitalStockAssetVerification'
import CreateOrManageGCC from './pages/CreateOrManageGCC'
import MeetOurTeam from './pages/MeetOurTeam'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Pages wrapped in the common Header/Footer Layout */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          
          {/* Main Pages with synced routes */}
          <Route path="virtual-cfo" element={<VirtualCFO />} />
          <Route path="accounting-policy-preparation-services" element={<AccountingPolicyPreparationServices />} />
          <Route path="capital-budgeting" element={<CapitalBudgeting />} />
          <Route path="internal-control" element={<InternalControl />} />
          <Route path="services-under-virtual-cfo" element={<ServicesUnderVirtualCFO />} />
          <Route path="specific-cfo-services" element={<SpecificCFOServices />} />
          <Route path="working-capital-management-services" element={<WorkingCapitalManagementServices />} />
          <Route path="accounting" element={<Accounting />} />
          <Route path="ar-ap" element={<ARAP />} />
          <Route path="inventory-management" element={<InventoryManagement />} />
          <Route path="year-end" element={<YearEndAccounting />} />
          <Route path="audit-support-service" element={<AuditSupportService />} />
          <Route path="outsouced-tax-preparation" element={<OutsourcedTaxPreparation />} />
          <Route path="payroll-processing" element={<PayrollProcessing />} />
          <Route path="bookeeping" element={<Bookkeeping />} />
          <Route path="quickbooks" element={<Quickbooks />} />
          <Route path="virtual-accounting" element={<VirtualAccounting />} />
          <Route path="financial-statment-preparation-services" element={<FinancialStatementPreparation />} />
          <Route path="xero-accounting" element={<XeroAccounting />} />
          <Route path="income-tax-service-soutsourcing" element={<TaxOutsourcing />} />
          <Route path="accounts-outsourcing" element={<AccountsOutsourcing />} />
          <Route path="bank-card-reconciliations" element={<BankCardReconciliations />} />
          <Route path="business-analysis" element={<BusinessAnalysis />} />
          <Route path="control-account-reconciliations" element={<ControlAccountReconciliations />} />
          <Route path="controller-services" element={<ControllerServices />} />
          <Route path="cost-analysis" element={<CostAnalysis />} />
          <Route path="customer-vendor-reconciliation" element={<CustomerVendorReconciliation />} />
          <Route path="pay" element={<PayrollReconciliation />} />
          <Route path="finance-advisory" element={<FinanceAdvisory />} />
          <Route path="digital-stock-asset-verification" element={<DigitalStockAssetVerification />} />
          <Route path="create-or-manage-your-gcc-in-india" element={<CreateOrManageGCC />} />
          <Route path="about-us/meet-our-team" element={<MeetOurTeam />} />
          <Route path="bnc-global-services" element={<Services />} />
          <Route path="about-us" element={<AboutUs />} />
          <Route path="contact-8" element={<Contact />} />
          <Route path="privacy-policy" element={<PrivacyPolicy />} />
          <Route path="careers" element={<Careers />} />
          <Route path="cybersecurity" element={<Cybersecurity />} />


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

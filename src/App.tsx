import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './Sidebar';

// Placeholder page components
const Home = () => <div>Home Page</div>;
const AssetManagement = () => <div>Asset Management</div>;
const Insurance = () => <div>Insurance</div>;
const Stockbroking = () => <div>Stockbroking</div>;
const InvestmentBanking = () => <div>Investment Banking</div>;
const Company = () => <div>Company</div>;
const Contact = () => <div>Contact</div>;

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ display: 'flex', minHeight: '100vh' }}>
      <Sidebar />
      <main style={{ flex: 1, background: '#f5f5f5' }}>{children}</main>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/asset-management" element={<AssetManagement />} />
          <Route path="/insurance" element={<Insurance />} />
          <Route path="/stockbroking" element={<Stockbroking />} />
          <Route path="/investment-banking" element={<InvestmentBanking />} />
          <Route path="/company" element={<Company />} />
          <Route path="/contact" element={<Contact />} />
          {/* Add Login route if desired, placeholder for now */}
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;

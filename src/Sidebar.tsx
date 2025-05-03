import { NavLink } from 'react-router-dom';

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/asset-management', label: 'Asset Management' },
  { to: '/insurance', label: 'Insurance' },
  { to: '/stockbroking', label: 'Stockbroking' },
  { to: '/investment-banking', label: 'Investment Banking' },
  { to: '/company', label: 'Company' },
  { to: '/contact', label: 'Contact' },
  { to: '/login', label: 'Login' },
];

export default function Sidebar() {
  return (
    <aside style={{ width: 240, background: '#27251f', color: 'white', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', minHeight: '100vh' }}>
      <div>
        <div style={{ padding: 24, fontWeight: 700, fontSize: 22, display: 'flex', alignItems: 'center', gap: 8 }}>
          {/* Logo image */}
          <img src="https://ext.same-assets.com/2653188154/2670907428.png" alt="Ulster Height Logo" style={{ width: 36, height: 36 }} />
          Ulster Height
        </div>
        <nav style={{ display: 'flex', flexDirection: 'column', gap: 16, padding: 24 }}>
          {navItems.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              style={({ isActive }) => ({
                color: isActive ? '#9f8f62' : 'white',
                textDecoration: 'none',
                fontWeight: isActive ? 700 : 400,
                fontSize: '1.08rem',
              })}
              end={to === '/'}
            >
              {label}
            </NavLink>
          ))}
        </nav>
      </div>
      {/* Footer: copyright and socials */}
      <div style={{ padding: 24, fontSize: 14 }}>
        <div style={{ marginBottom: 10 }}>Copyright © 2025 Ulster Height</div>
        <div style={{ display: 'flex', gap: 14 }}>
          <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
            <img src="https://ext.same-assets.com/2653188154/1862344968.png" alt="Facebook" style={{ width: 22, height: 22 }} />
          </a>
          <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <img src="https://ext.same-assets.com/2653188154/384480779.png" alt="Instagram" style={{ width: 22, height: 22 }} />
          </a>
          <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
            <img src="https://ext.same-assets.com/2653188154/3908343422.png" alt="Twitter" style={{ width: 22, height: 22 }} />
          </a>
        </div>
      </div>
    </aside>
  );
}

import { useState, useEffect } from 'react'
import { Menu, X, Phone } from 'lucide-react'

const navItems = [
  { label: 'Products', type: 'navigate' },
  { label: 'Features', href: '#features' },
  { label: 'Apps', href: '#apps' },
  { label: 'Solutions', href: '#solutions' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar({ onNavigateToProducts, onGoHome, isProductPage }) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const bg = scrolled ? '#ffffff' : '#0f172a'
  const textColor = scrolled ? '#111827' : '#e2e8f0'
  const borderBottom = scrolled ? '1px solid #e5e7eb' : '1px solid rgba(255,255,255,0.08)'

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
      background: bg, borderBottom,
      transition: 'background 0.3s, border-bottom 0.3s',
      boxShadow: scrolled ? '0 1px 12px rgba(0,0,0,0.08)' : 'none',
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '64px' }}>
        {/* Logo */}
        <div 
          onClick={(e) => { e.preventDefault(); onGoHome(); }} 
          style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.6rem', textDecoration: 'none' }}
        >
          <div style={{
            width: '36px', height: '36px', borderRadius: '6px',
            background: '#1e40af', display: 'flex', alignItems: 'center', justifyContent: 'center',
            flexShrink: 0
          }}>
            <span style={{ color: 'white', fontWeight: '900', fontSize: '1rem' }}>G</span>
          </div>
          <div style={{ minWidth: 0 }}>
            <span style={{ 
              fontWeight: '800', 
              fontSize: '1rem', 
              color: scrolled ? '#0f172a' : '#ffffff', 
              letterSpacing: '-0.02em',
              whiteSpace: 'nowrap'
            }}>
              Gurunanak <span style={{ color: '#3b82f6' }}>Pharmacy</span>
            </span>
            <div style={{ fontSize: '0.6rem', color: scrolled ? '#9ca3af' : '#94a3b8', marginTop: '-2px', fontWeight: '500' }}>
              Smart Business Software
            </div>
          </div>
        </div>

        {/* Desktop Nav */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }} className="nav-desktop">
          {navItems.map(item => (
            <a
              key={item.label}
              href={item.href || '#'}
              onClick={(e) => {
                if (item.type === 'navigate') {
                  e.preventDefault();
                  onNavigateToProducts();
                } else if (item.href === '#' || isProductPage) {
                  e.preventDefault();
                  onGoHome();
                }
              }}
              className="nav-link"
              style={{ 
                color: textColor,
                fontWeight: (item.type === 'navigate' && isProductPage) ? '700' : '500',
                opacity: (item.type === 'navigate' && isProductPage) ? 1 : 0.8
              }}
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* CTA */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }} className="nav-desktop">
          <a href="tel:+919999999999" style={{
            display: 'flex', alignItems: 'center', gap: '0.4rem',
            color: textColor, textDecoration: 'none', fontWeight: '500', fontSize: '0.825rem'
          }}>
            <Phone size={13} /> +91-9999-999-999
          </a>
          <a href="#contact" className="btn-primary" style={{ padding: '0.5rem 1.25rem', fontSize: '0.875rem' }}>
            Get Demo
          </a>
        </div>

        {/* Mobile */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          style={{ display: 'none', background: 'none', border: 'none', cursor: 'pointer', color: textColor, padding: '4px' }}
          className="nav-mobile-btn"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div style={{ background: '#ffffff', borderTop: '1px solid #e5e7eb', padding: '0.75rem 1.5rem 1.5rem' }}>
          {navItems.map(item => (
            <a
              key={item.label}
              href={item.href || '#'}
              onClick={(e) => {
                setMenuOpen(false);
                if (item.type === 'navigate') {
                  e.preventDefault();
                  onNavigateToProducts();
                }
              }}
              style={{ display: 'block', padding: '0.65rem 0', color: '#374151', textDecoration: 'none', fontWeight: '500', fontSize: '0.9rem', borderBottom: '1px solid #f3f4f6' }}
            >
              {item.label}
            </a>
          ))}
          <a href="#contact" className="btn-primary" style={{ display: 'block', textAlign: 'center', marginTop: '1rem' }}>
            Get Demo
          </a>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .nav-desktop { display: none !important; }
          .nav-mobile-btn { display: block !important; }
        }
      `}</style>
    </nav>
  )
}

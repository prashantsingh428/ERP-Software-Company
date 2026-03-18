import { useState, useEffect } from 'react'
import { Menu, X, Phone } from 'lucide-react'

const navItems = [
  { label: 'Features', href: '#features' },
  { label: 'Apps', href: '#apps' },
  { label: 'Solutions', href: '#solutions' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
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
        <a href="#" style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', textDecoration: 'none' }}>
          <div style={{
            width: '36px', height: '36px', borderRadius: '6px',
            background: '#1e40af', display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            <span style={{ color: 'white', fontWeight: '900', fontSize: '1rem' }}>M</span>
          </div>
          <div>
            <span style={{ fontWeight: '800', fontSize: '1.1rem', color: scrolled ? '#0f172a' : '#ffffff', letterSpacing: '-0.02em' }}>
              Marg<span style={{ color: '#3b82f6' }}>ERP</span>
            </span>
            <div style={{ fontSize: '0.6rem', color: scrolled ? '#9ca3af' : '#94a3b8', marginTop: '-2px', fontWeight: '500' }}>
              Smart Business Software
            </div>
          </div>
        </a>

        {/* Desktop Nav */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }} className="nav-desktop">
          {navItems.map(item => (
            <a
              key={item.label}
              href={item.href}
              className="nav-link"
              style={{ color: textColor }}
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
              href={item.href}
              onClick={() => setMenuOpen(false)}
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

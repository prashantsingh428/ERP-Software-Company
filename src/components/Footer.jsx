import { MessageCircle } from 'lucide-react'

const footerLinks = {
  Product: ['Features', 'Pricing', 'Dashboard', 'Integrations', 'Changelog'],
  Solutions: ['Pharma & Healthcare', 'Retail', 'Distribution', 'FMCG', 'Enterprise'],
  Apps: ['eRetail', 'eOrder', 'eOwner', 'eDelivery', 'SFAXpert', 'PharmaNXT'],
  Company: ['About Us', 'Blog', 'Careers', 'Press', 'Contact'],
  Support: ['Help Center', 'Video Tutorials', 'API Docs', 'Community', 'Status Page'],
}

export default function Footer() {
  return (
    <footer style={{ background: '#0f172a', color: 'white', padding: '4rem 1.5rem 2rem' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        {/* Top */}
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr 1fr 1fr', gap: '2rem', paddingBottom: '3rem', borderBottom: '1px solid rgba(255,255,255,0.07)' }} className="footer-grid">
          {/* Brand */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1rem' }}>
              <div style={{ width: '34px', height: '34px', borderRadius: '6px', background: '#1e40af', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <span style={{ color: 'white', fontWeight: '900', fontSize: '1rem' }}>M</span>
              </div>
              <div>
                <span style={{ fontWeight: '800', fontSize: '1rem', color: '#ffffff' }}>Marg<span style={{ color: '#3b82f6' }}>ERP</span></span>
                <div style={{ fontSize: '0.58rem', color: '#475569', marginTop: '1px' }}>Smart Business Software</div>
              </div>
            </div>
            <p style={{ color: '#64748b', fontSize: '0.825rem', lineHeight: '1.7', marginBottom: '1.5rem', maxWidth: '240px' }}>
              India's most trusted ERP software — GST billing, accounting, and inventory for 5 lakh+ businesses.
            </p>
            <a
              href="https://wa.me/919999999999"
              target="_blank" rel="noopener noreferrer"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                background: '#25D366', color: '#ffffff', padding: '0.55rem 1.1rem',
                borderRadius: '5px', textDecoration: 'none', fontWeight: '600', fontSize: '0.825rem',
              }}
            >
              <MessageCircle size={15} fill="white" /> WhatsApp Us
            </a>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([cat, links]) => (
            <div key={cat}>
              <div style={{ fontWeight: '700', fontSize: '0.72rem', color: '#94a3b8', marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                {cat}
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.55rem' }}>
                {links.map(link => (
                  <a
                    key={link}
                    href="#"
                    style={{ color: '#64748b', fontSize: '0.825rem', textDecoration: 'none', transition: 'color 0.15s' }}
                    onMouseEnter={e => (e.target.style.color = '#e2e8f0')}
                    onMouseLeave={e => (e.target.style.color = '#64748b')}
                  >
                    {link}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div style={{ paddingTop: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
          <div style={{ color: '#475569', fontSize: '0.8rem' }}>
            © 2026 MargERP Software Pvt. Ltd. All rights reserved. Made in India 🇮🇳
          </div>
          <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
            {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map(item => (
              <a key={item} href="#" style={{ color: '#475569', fontSize: '0.78rem', textDecoration: 'none', transition: 'color 0.15s' }}
                onMouseEnter={e => (e.target.style.color = '#94a3b8')}
                onMouseLeave={e => (e.target.style.color = '#475569')}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) { .footer-grid { grid-template-columns: repeat(3, 1fr) !important; } }
        @media (max-width: 640px) { .footer-grid { grid-template-columns: repeat(2, 1fr) !important; } }
      `}</style>
    </footer>
  )
}

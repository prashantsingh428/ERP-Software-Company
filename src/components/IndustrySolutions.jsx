import { Pill, ShoppingCart, Truck, Box, Check } from 'lucide-react'

const industries = [
  {
    icon: <Pill size={32} />, name: 'Pharma & Healthcare',
    bg: '#eff6ff', border: '#bfdbfe', accent: '#1e40af',
    desc: 'Batch & expiry tracking, drug licence management, schedule H/X compliance, and pharma-specific GST reports.',
    features: ['Schedule H/X Compliance', 'Batch & Expiry Tracking', 'Drug Licence Management', 'Pharma GST Reports'],
  },
  {
    icon: <ShoppingCart size={32} />, name: 'Retail & Supermarket',
    bg: '#f5f3ff', border: '#ddd6fe', accent: '#4f46e5',
    desc: 'Fast POS billing, barcode integration, loyalty programs, and real-time multi-store management.',
    features: ['Fast POS Billing', 'Barcode & Weighing Scale', 'Loyalty Programs', 'Multi-Store Management'],
  },
  {
    icon: <Truck size={32} />, name: 'Distribution & Wholesale',
    bg: '#ecfdf5', border: '#a7f3d0', accent: '#047857',
    desc: 'Route planning, van sales, credit management, and auto-dispatching for large distribution networks.',
    features: ['Route & Van Sales', 'Credit Limit Control', 'Multi-level Pricing', 'Auto Dispatch Orders'],
  },
  {
    icon: <Box size={32} />, name: 'FMCG & Consumer Goods',
    bg: '#fffbeb', border: '#fde68a', accent: '#b45309',
    desc: 'Production planning, brand-level reporting, trade scheme management, and secondary sales tracking.',
    features: ['Production Planning', 'Trade Scheme Management', 'Secondary Sales Track', 'Brand Reporting'],
  },
]

export default function IndustrySolutions() {
  return (
    <section id="solutions" style={{ padding: '6rem 1.5rem', background: '#f9fafb' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <div className="section-badge">Industry Solutions</div>
          <h2 style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', fontWeight: '800', color: '#111827', letterSpacing: '-0.025em', marginBottom: '0.75rem' }}>
            Built for Your Industry
          </h2>
          <div className="section-divider" />
          <p style={{ fontSize: '1rem', color: '#6b7280', maxWidth: '520px', margin: '0 auto', lineHeight: '1.75' }}>
            Industry-specific ERP configurations so you hit the ground running — no lengthy customizations required.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: '1.25rem' }} className="solutions-grid">
          {industries.map(ind => (
            <div
              key={ind.name}
              className="card-hover"
              style={{
                background: '#ffffff', borderRadius: '8px', padding: '2rem',
                border: '1px solid #e5e7eb', boxShadow: '0 1px 4px rgba(0,0,0,0.04)',
              }}
            >
              {/* Icon strip accent removed */}
              <div style={{ color: ind.accent, marginBottom: '1rem' }}>{ind.icon}</div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: '800', color: '#111827', marginBottom: '0.75rem' }}>{ind.name}</h3>
              <p style={{ color: '#6b7280', fontSize: '0.9rem', lineHeight: '1.65', marginBottom: '1.5rem' }}>{ind.desc}</p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem', marginBottom: '1.5rem' }}>
                {ind.features.map(f => (
                  <div key={f} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '0.875rem', color: '#374151' }}>
                    <Check size={16} color={ind.accent} strokeWidth={3} />
                    {f}
                  </div>
                ))}
              </div>
              <a href="#contact" style={{ color: ind.accent, fontWeight: '600', fontSize: '0.825rem', textDecoration: 'none', borderBottom: `1px solid ${ind.border}`, paddingBottom: '1px' }}>
                Learn More →
              </a>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) { .solutions-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  )
}

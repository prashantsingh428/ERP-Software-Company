import { ShoppingBag, ShoppingCart, BarChart2, Truck, Users, Activity } from 'lucide-react'

const apps = [
  { icon: <ShoppingBag size={24} color="#1e40af" />, bg: '#eff6ff', border: '#bfdbfe', name: 'eRetail', tag: 'Retail', desc: 'Point-of-sale and retail management system for modern stores with barcode and multi-counter support.' },
  { icon: <ShoppingCart size={24} color="#4f46e5" />, bg: '#eef2ff', border: '#c7d2fe', name: 'eOrder', tag: 'Sales', desc: 'Digital order booking and management for field sales teams — beat-wise planning and route optimization.' },
  { icon: <BarChart2 size={24} color="#047857" />, bg: '#ecfdf5', border: '#a7f3d0', name: 'eOwner', tag: 'Analytics', desc: 'Business intelligence dashboard for owners — real-time P&L, stock alerts, and cash-flow reports anywhere.' },
  { icon: <Truck size={24} color="#b45309" />, bg: '#fffbeb', border: '#fde68a', name: 'eDelivery', tag: 'Logistics', desc: 'Route management and proof-of-delivery tracking for last-mile logistics and van sales operations.' },
  { icon: <Users size={24} color="#0e7490" />, bg: '#ecfeff', border: '#a5f3fc', name: 'SFAXpert', tag: 'CRM', desc: 'Sales Force Automation for streamlined field force management, beat visits, and target tracking.' },
  { icon: <Activity size={24} color="#be123c" />, bg: '#fff1f2', border: '#fecdd3', name: 'PharmaNXT', tag: 'Pharma', desc: 'Specialized ERP for pharmaceutical distributors with schedule H/X compliance and drug licence management.' },
]

export default function AppsEcosystem() {
  return (
    <section id="apps" style={{ padding: '6rem 1.5rem', background: '#ffffff' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <div className="section-badge">Apps Ecosystem</div>
          <h2 style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', fontWeight: '800', color: '#111827', letterSpacing: '-0.025em', marginBottom: '0.75rem' }}>
            A Complete Suite of Business Apps
          </h2>
          <div className="section-divider" />
          <p style={{ fontSize: '1rem', color: '#6b7280', maxWidth: '540px', margin: '0 auto', lineHeight: '1.75' }}>
            Purpose-built apps that connect seamlessly with Guru Kripa Pharmacy for end-to-end visibility and control across your operations.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '1.25rem' }} className="apps-grid">
          {apps.map(app => (
            <div
              key={app.name}
              className="card-hover"
              style={{
                background: '#ffffff', borderRadius: '8px', padding: '1.75rem',
                border: '1px solid #e5e7eb', boxShadow: '0 1px 4px rgba(0,0,0,0.04)',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.9rem', marginBottom: '0.9rem' }}>
                <div style={{
                  width: '48px', height: '48px', borderRadius: '8px',
                  background: app.bg, border: `1px solid ${app.border}`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                }}>
                  {app.icon}
                </div>
                <div>
                  <div style={{ fontWeight: '700', fontSize: '1rem', color: '#111827' }}>{app.name}</div>
                  <span style={{
                    fontSize: '0.68rem', fontWeight: '600', color: '#1d4ed8',
                    background: '#eff6ff', padding: '1px 7px', borderRadius: '3px', border: '1px solid #bfdbfe',
                  }}>
                    {app.tag}
                  </span>
                </div>
              </div>
              <p style={{ color: '#6b7280', fontSize: '0.875rem', lineHeight: '1.65', margin: '0 0 1rem' }}>{app.desc}</p>
              <a href="#contact" style={{
                color: '#1e40af', fontWeight: '600', fontSize: '0.825rem', textDecoration: 'none',
                display: 'inline-flex', alignItems: 'center', gap: '4px',
                borderBottom: '1px solid #bfdbfe', paddingBottom: '1px',
              }}>
                Learn More →
              </a>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) { .apps-grid { grid-template-columns: repeat(2,1fr) !important; } }
        @media (max-width: 580px) { .apps-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  )
}

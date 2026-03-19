import { Star, Quote } from 'lucide-react'

const testimonials = [
  {
    name: 'Rajesh Agarwal', avatar: 'RA', role: 'Owner, Agarwal Pharma Distributors', location: 'Delhi',
    color: '#1e40af', bg: '#eff6ff',
    text: 'Guru Kripa Pharmacy transformed our pharma distribution business. Batch tracking, schedule H compliance, and auto-GST filing save us hours every day. Switched from Excel — best decision we made.',
  },
  {
    name: 'Priya Sharma', avatar: 'PS', role: 'CFO, Sharma Retail Chain', location: 'Mumbai',
    color: '#4f46e5', bg: '#eef2ff',
    text: 'Our 12 stores are perfectly synced now. The eOwner app gives me real-time P&L reports on my phone. I recommended Guru Kripa Pharmacy to every retail business owner I know.',
  },
  {
    name: 'Suresh Gupta', avatar: 'SG', role: 'MD, Gupta FMCG Distribution', location: 'Jaipur',
    color: '#047857', bg: '#ecfdf5',
    text: 'eDelivery and SFAXpert helped us scale from 200 to 500+ retail outlets without extra admin staff. Auto e-invoicing saves 4 hours daily. Software that actually delivers results.',
  },
  {
    name: 'Anjali Mehta', avatar: 'AM', role: 'Director, MedLife Wholesale', location: 'Hyderabad',
    color: '#b45309', bg: '#fffbeb',
    text: 'PharmaNXT is purpose-built for pharma wholesale. Drug licence management and expiry alerts are completely automated. The Guru Kripa Pharmacy support team is always responsive.',
  },
  {
    name: 'Vikram Patel', avatar: 'VP', role: 'CEO, Patel Supermart', location: 'Ahmedabad',
    color: '#0e7490', bg: '#ecfeff',
    text: 'After switching from a competitor ERP 2 years ago we have never looked back. Better features, faster support, and a team that actually listens to feedback.',
  },
  {
    name: 'Neha Singh', avatar: 'NS', role: 'Accounts Manager, Singh Traders', location: 'Lucknow',
    color: '#be123c', bg: '#fff1f2',
    text: 'WhatsApp invoice sharing alone improved our collections by 40%. Customers pay faster when they receive bills on WhatsApp with a direct payment link. Game-changer.',
  },
]

export default function Testimonials() {
  return (
    <section style={{ padding: '6rem 1.5rem', background: '#f9fafb' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <div className="section-badge">Customer Stories</div>
          <h2 style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', fontWeight: '800', color: '#111827', letterSpacing: '-0.025em', marginBottom: '0.75rem' }}>
            Trusted by Businesses Across India
          </h2>
          <div className="section-divider" />
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '6px', marginBottom: '0.5rem' }}>
            {[...Array(5)].map((_, i) => <Star key={i} size={18} fill="#f59e0b" color="#f59e0b" />)}
            <span style={{ fontWeight: '700', color: '#111827', marginLeft: '4px' }}>4.9</span>
            <span style={{ color: '#6b7280', fontSize: '0.875rem' }}>from 12,000+ reviews</span>
          </div>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '1.25rem' }} className="testimonials-grid">
          {testimonials.map(t => (
            <div
              key={t.name}
              className="card-hover"
              style={{
                background: '#ffffff', borderRadius: '8px', padding: '1.75rem',
                border: '1px solid #e5e7eb', boxShadow: '0 1px 4px rgba(0,0,0,0.04)',
                position: 'relative',
              }}
            >
              {/* Top accent bar */}
              <div style={{ position: 'absolute', top: 0, left: '1.75rem', right: '1.75rem', height: '3px', background: t.color, borderRadius: '0 0 3px 3px' }} />

              <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center', marginBottom: '1rem' }}>
                <div style={{
                  width: '42px', height: '42px', borderRadius: '6px', background: t.bg,
                  border: `1px solid ${t.color}30`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontWeight: '700', color: t.color, fontSize: '0.8rem', flexShrink: 0,
                }}>
                  {t.avatar}
                </div>
                <div>
                  <div style={{ fontWeight: '700', color: '#111827', fontSize: '0.875rem' }}>{t.name}</div>
                  <div style={{ color: '#6b7280', fontSize: '0.72rem' }}>{t.role}</div>
                  <div style={{ color: '#9ca3af', fontSize: '0.68rem' }}>📍 {t.location}</div>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '2px', marginBottom: '0.75rem' }}>
                {[...Array(5)].map((_, i) => <Star key={i} size={12} fill="#f59e0b" color="#f59e0b" />)}
              </div>

              <p style={{ color: '#4b5563', fontSize: '0.875rem', lineHeight: '1.7', margin: 0 }}>
                "{t.text}"
              </p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) { .testimonials-grid { grid-template-columns: repeat(2,1fr) !important; } }
        @media (max-width: 580px) { .testimonials-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  )
}

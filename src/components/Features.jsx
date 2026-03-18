import { FileText, BookOpen, Package, Zap, CreditCard, MessageCircle } from 'lucide-react'

const features = [
  {
    icon: <FileText size={22} color="#1e40af" />, bg: '#eff6ff', border: '#bfdbfe',
    title: 'GST Billing',
    desc: 'GST-compliant invoices for B2B, B2C, and exports with auto tax calculation and e-way bill generation.',
  },
  {
    icon: <BookOpen size={22} color="#4f46e5" />, bg: '#eef2ff', border: '#c7d2fe',
    title: 'Accounting',
    desc: 'Full double-entry bookkeeping, ledgers, P&L statements, balance sheet, and automated bank reconciliation.',
  },
  {
    icon: <Package size={22} color="#047857" />, bg: '#ecfdf5', border: '#a7f3d0',
    title: 'Inventory Management',
    desc: 'Real-time stock tracking, batch/expiry management, multi-warehouse support, and low-stock alerts.',
  },
  {
    icon: <Zap size={22} color="#b45309" />, bg: '#fffbeb', border: '#fde68a',
    title: 'e-Invoicing',
    desc: 'Generate IRN numbers and e-invoices automatically, seamlessly integrated with the GSTN e-invoice portal.',
  },
  {
    icon: <CreditCard size={22} color="#0e7490" />, bg: '#ecfeff', border: '#a5f3fc',
    title: 'Payment & Reconciliation',
    desc: 'Track outstanding receivables & payables. Auto-match payments and get reconciliation reports instantly.',
  },
  {
    icon: <MessageCircle size={22} color="#065f46" />, bg: '#ecfdf5', border: '#a7f3d0',
    title: 'WhatsApp Invoice',
    desc: 'Send invoices, payment reminders, and account statements directly to customers on WhatsApp in one click.',
  },
]

export default function Features() {
  return (
    <section id="features" style={{ padding: '6rem 1.5rem', background: '#f9fafb' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <div className="section-badge">Core Features</div>
          <h2 style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', fontWeight: '800', color: '#111827', letterSpacing: '-0.025em', marginBottom: '0.75rem' }}>
            Everything You Need to Run Your Business
          </h2>
          <div className="section-divider" />
          <p style={{ fontSize: '1rem', color: '#6b7280', maxWidth: '540px', margin: '0 auto', lineHeight: '1.75' }}>
            Powerful, integrated tools that streamline operations, ensure GST compliance, and drive growth for businesses of all sizes.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '1.25rem' }} className="features-grid">
          {features.map(f => (
            <div
              key={f.title}
              className="card-hover"
              style={{
                background: '#ffffff', borderRadius: '8px', padding: '1.75rem',
                border: '1px solid #e5e7eb',
                boxShadow: '0 1px 4px rgba(0,0,0,0.04)',
              }}
            >
              <div style={{
                width: '48px', height: '48px', borderRadius: '8px',
                background: f.bg, border: `1px solid ${f.border}`,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                marginBottom: '1rem',
              }}>
                {f.icon}
              </div>
              <h3 style={{ fontSize: '1rem', fontWeight: '700', color: '#111827', marginBottom: '0.5rem' }}>{f.title}</h3>
              <p style={{ color: '#6b7280', fontSize: '0.875rem', lineHeight: '1.65', margin: 0 }}>{f.desc}</p>
            </div>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
          <a href="#contact" className="btn-primary">Explore All Features <span style={{ marginLeft: '4px' }}>→</span></a>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) { .features-grid { grid-template-columns: repeat(2,1fr) !important; } }
        @media (max-width: 580px) { .features-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  )
}

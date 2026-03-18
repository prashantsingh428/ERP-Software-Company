import { Check, Shield, Zap, Headphones } from 'lucide-react'

const plans = [
  {
    name: 'Basic',
    price: '₹5,999',
    period: '/year',
    desc: 'Perfect for small businesses and startups getting started.',
    features: ['GST Billing & Invoicing', 'Basic Inventory Management', 'Tally Import / Export', 'WhatsApp Invoice Sharing', 'Up to 2 Users', 'Email Support'],
    cta: 'Get Started',
    highlight: false,
  },
  {
    name: 'Pro',
    price: '₹12,999',
    period: '/year',
    desc: 'For growing businesses that need more power and automation.',
    features: ['Everything in Basic', 'Advanced Accounting & Reports', 'Multi-branch Management', 'e-Invoicing (IRN) Integration', 'Payment Reconciliation', 'Up to 10 Users', 'Priority Phone Support', 'eRetail & eOwner Apps'],
    cta: 'Start Free Trial',
    highlight: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: 'pricing',
    desc: 'Built for large distributors and enterprise chains.',
    features: ['Everything in Pro', 'Unlimited Users & Branches', 'API Access & Integrations', 'Custom Reports & Analytics', 'SFA & Van Sales Module', 'Dedicated Account Manager', 'On-site Training', 'SLA-backed Support'],
    cta: 'Contact Sales',
    highlight: false,
  },
]

export default function Pricing() {
  return (
    <section id="pricing" style={{ padding: '6rem 1.5rem', background: '#ffffff' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <div className="section-badge">Pricing</div>
          <h2 style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', fontWeight: '800', color: '#111827', letterSpacing: '-0.025em', marginBottom: '0.75rem' }}>
            Simple, Transparent Pricing
          </h2>
          <div className="section-divider" />
          <p style={{ fontSize: '1rem', color: '#6b7280', maxWidth: '480px', margin: '0 auto' }}>
            No hidden fees. Start free, upgrade as you grow. All plans include GST billing and setup support.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '1.25rem', alignItems: 'start' }} className="pricing-grid">
          {plans.map(plan => (
            <div
              key={plan.name}
              className="card-hover"
              style={{
                borderRadius: '8px', padding: '2rem', position: 'relative',
                background: plan.highlight ? '#0f172a' : '#ffffff',
                border: plan.highlight ? '2px solid #1e40af' : '1px solid #e5e7eb',
                boxShadow: plan.highlight ? '0 8px 32px rgba(30,64,175,0.2)' : '0 1px 4px rgba(0,0,0,0.04)',
              }}
            >
              {plan.highlight && (
                <div style={{
                  position: 'absolute', top: '-13px', left: '50%', transform: 'translateX(-50%)',
                  background: '#1e40af', color: 'white', padding: '3px 14px', borderRadius: '3px',
                  fontSize: '0.7rem', fontWeight: '700', whiteSpace: 'nowrap', letterSpacing: '0.04em',
                }}>
                  MOST POPULAR
                </div>
              )}

              <div style={{ marginBottom: '1.5rem' }}>
                <div style={{ fontSize: '0.8rem', fontWeight: '700', color: plan.highlight ? '#94a3b8' : '#6b7280', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '0.4rem' }}>
                  {plan.name}
                </div>
                <div style={{ display: 'flex', alignItems: 'flex-end', gap: '3px', marginBottom: '0.4rem' }}>
                  <span style={{ fontSize: '2.25rem', fontWeight: '900', color: plan.highlight ? '#ffffff' : '#111827', lineHeight: 1 }}>{plan.price}</span>
                  <span style={{ fontSize: '0.8rem', color: plan.highlight ? '#64748b' : '#9ca3af', marginBottom: '4px' }}>{plan.period}</span>
                </div>
                <p style={{ fontSize: '0.825rem', color: plan.highlight ? '#64748b' : '#6b7280', margin: 0 }}>{plan.desc}</p>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.55rem', marginBottom: '1.75rem' }}>
                {plan.features.map(f => (
                  <div key={f} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', fontSize: '0.85rem', color: plan.highlight ? '#cbd5e1' : '#374151' }}>
                    <Check size={15} color={plan.highlight ? '#3b82f6' : '#1e40af'} style={{ flexShrink: 0, marginTop: '2px' }} />
                    {f}
                  </div>
                ))}
              </div>

              <a href="#contact" className={plan.highlight ? 'btn-primary' : 'btn-outline'} style={{
                display: 'block', textAlign: 'center', width: '100%',
                ...(plan.highlight ? { background: '#1e40af', borderColor: '#1e40af' } : {}),
              }}>
                {plan.cta}
              </a>
            </div>
          ))}
        </div>

        <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '2.5rem', marginTop: '2.5rem', paddingTop: '2rem', borderTop: '1px solid #f3f4f6' }}>
          {[
            { icon: <Shield size={16} color="#1e40af" />, text: 'No credit card required' },
            { icon: <Zap size={16} color="#1e40af" />, text: '5-minute setup' },
            { icon: <Headphones size={16} color="#1e40af" />, text: 'Free onboarding support' },
          ].map(item => (
            <div key={item.text} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#6b7280', fontSize: '0.875rem', fontWeight: '500' }}>
              {item.icon} {item.text}
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) { .pricing-grid { grid-template-columns: 1fr !important; max-width: 440px; margin: 0 auto; } }
      `}</style>
    </section>
  )
}

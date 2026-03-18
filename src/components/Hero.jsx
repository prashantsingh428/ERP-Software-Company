import { ArrowRight, CheckCircle, Star, Users, Award, TrendingUp, Play } from 'lucide-react'

const tags = ['GST Ready', 'Tally Compatible', 'Cloud Sync', 'e-Invoice Enabled']
const stats = [
  { value: '5 Lakh+', label: 'Businesses' },
  { value: '25+ Yrs', label: 'Experience' },
  { value: '99.9%', label: 'Uptime' },
  { value: '24/7', label: 'Support' },
]

export default function Hero() {
  return (
    <section style={{
      background: '#0f172a',
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      padding: '5rem 1.5rem 3rem',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Subtle background pattern */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.03) 1px, transparent 0)',
        backgroundSize: '32px 32px',
      }} />
      {/* Side accent bar */}
      <div style={{ position: 'absolute', left: 0, top: '10%', bottom: '10%', width: '4px', background: '#1e40af', borderRadius: '0 4px 4px 0' }} />

      <div style={{ maxWidth: '1200px', margin: '0 auto', width: '100%', position: 'relative', zIndex: 1 }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem', alignItems: 'center' }} className="hero-grid">

          {/* Left */}
          <div>
            {/* Tags */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '2rem' }}>
              {tags.map(t => (
                <span key={t} style={{
                  background: 'rgba(30,64,175,0.2)', color: '#93c5fd',
                  padding: '0.25rem 0.75rem', borderRadius: '4px', fontSize: '0.72rem',
                  fontWeight: '600', border: '1px solid rgba(59,130,246,0.25)',
                  letterSpacing: '0.04em', textTransform: 'uppercase',
                }}>
                  {t}
                </span>
              ))}
            </div>

            <h1 style={{
              fontSize: 'clamp(2.25rem, 5vw, 3.5rem)',
              fontWeight: '900', color: '#ffffff',
              lineHeight: '1.1', marginBottom: '1.25rem',
              letterSpacing: '-0.03em',
            }}>
              Complete ERP<br />
              Solution for<br />
              <span style={{ color: '#3b82f6' }}>Your Business</span>
            </h1>

            <p style={{
              fontSize: '1.05rem', color: '#94a3b8', lineHeight: '1.75',
              marginBottom: '2rem', maxWidth: '460px',
            }}>
              GST Billing, Accounting, Inventory & Automation — everything your business needs in one powerful ERP platform trusted by 5 lakh+ businesses.
            </p>

            {/* CTA Buttons */}
            <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', marginBottom: '2.5rem' }}>
              <a href="#contact" className="btn-primary">
                Request Free Demo <ArrowRight size={16} />
              </a>
              <button
                className="btn-outline-white"
                onClick={() => document.getElementById('dashboard')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <Play size={14} fill="white" /> Watch Demo
              </button>
            </div>

            {/* Social proof */}
            <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap', paddingTop: '2rem', borderTop: '1px solid rgba(255,255,255,0.08)' }}>
              {[
                { icon: <Star size={13} fill="#f59e0b" color="#f59e0b" />, text: '4.9 / 5 Rating' },
                { icon: <Users size={13} color="#3b82f6" />, text: '5 Lakh+ Users' },
                { icon: <Award size={13} color="#3b82f6" />, text: '25+ Years Trusted' },
              ].map(item => (
                <div key={item.text} style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.825rem', color: '#94a3b8', fontWeight: '500' }}>
                  {item.icon} {item.text}
                </div>
              ))}
            </div>
          </div>

          {/* Right – Dashboard card */}
          <div className="float-anim" style={{ position: 'relative' }}>
            <div style={{
              background: '#1e293b', borderRadius: '8px',
              border: '1px solid rgba(255,255,255,0.1)',
              overflow: 'hidden',
              boxShadow: '0 24px 60px rgba(0,0,0,0.5)',
            }}>
              {/* Toolbar */}
              <div style={{ background: '#0f172a', padding: '10px 14px', display: 'flex', alignItems: 'center', gap: '6px', borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
                {['#ef4444', '#f59e0b', '#22c55e'].map(c => (
                  <div key={c} style={{ width: '10px', height: '10px', borderRadius: '50%', background: c }} />
                ))}
                <div style={{ flex: 1, background: '#1e293b', borderRadius: '4px', padding: '3px 10px', fontSize: '0.65rem', color: '#64748b', marginLeft: '8px', textAlign: 'center' }}>
                  app.margerp.com/dashboard
                </div>
              </div>

              {/* Dashboard body */}
              <div style={{ padding: '1.25rem', background: '#f8fafc' }}>
                {/* KPI row */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '0.5rem', marginBottom: '1rem' }}>
                  {[
                    { label: "Today's Sales", value: '₹1,85,420', color: '#1e40af', bg: '#eff6ff' },
                    { label: 'GST Payable', value: '₹23,180', color: '#065f46', bg: '#ecfdf5' },
                    { label: 'Stock Value', value: '₹8.4L', color: '#92400e', bg: '#fffbeb' },
                  ].map(k => (
                    <div key={k.label} style={{ background: k.bg, borderRadius: '6px', padding: '0.6rem 0.75rem' }}>
                      <div style={{ fontSize: '0.58rem', color: '#6b7280', marginBottom: '2px', fontWeight: '500' }}>{k.label}</div>
                      <div style={{ fontSize: '0.85rem', fontWeight: '800', color: k.color }}>{k.value}</div>
                    </div>
                  ))}
                </div>

                {/* Bar chart */}
                <div style={{ background: '#ffffff', borderRadius: '6px', padding: '0.75rem', marginBottom: '0.75rem', border: '1px solid #e5e7eb' }}>
                  <div style={{ fontSize: '0.62rem', fontWeight: '600', color: '#374151', marginBottom: '0.5rem' }}>Sales – Mar 2026</div>
                  <div style={{ display: 'flex', alignItems: 'flex-end', gap: '3px', height: '52px' }}>
                    {[55, 70, 48, 82, 65, 90, 72, 85, 60, 95, 78, 100].map((h, i) => (
                      <div key={i} style={{
                        flex: 1, height: `${h}%`, borderRadius: '2px 2px 0 0',
                        background: i === 11 ? '#1e40af' : '#bfdbfe',
                      }} />
                    ))}
                  </div>
                </div>

                {/* Recent transactions */}
                <div style={{ background: '#ffffff', borderRadius: '6px', padding: '0.75rem', border: '1px solid #e5e7eb' }}>
                  <div style={{ fontSize: '0.62rem', fontWeight: '600', color: '#374151', marginBottom: '0.5rem' }}>Recent Transactions</div>
                  {[
                    { name: 'Ravi Medical Store', amount: '₹12,400', paid: true },
                    { name: 'Sharma Distributors', amount: '₹45,200', paid: false },
                    { name: 'Anand Pharma', amount: '₹8,750', paid: true },
                  ].map(tx => (
                    <div key={tx.name} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '4px 0', borderBottom: '1px solid #f9fafb' }}>
                      <span style={{ fontSize: '0.6rem', color: '#374151' }}>{tx.name}</span>
                      <div style={{ display: 'flex', gap: '6px', alignItems: 'center' }}>
                        <span style={{ fontSize: '0.62rem', fontWeight: '700', color: '#111827' }}>{tx.amount}</span>
                        <span style={{ fontSize: '0.54rem', background: tx.paid ? '#ecfdf5' : '#fffbeb', color: tx.paid ? '#065f46' : '#92400e', padding: '1px 6px', borderRadius: '3px', fontWeight: '600' }}>
                          {tx.paid ? 'Paid' : 'Pending'}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Floating badge */}
            <div style={{
              position: 'absolute', top: '20px', right: '-10px',
              background: '#ffffff', borderRadius: '6px', padding: '8px 12px',
              boxShadow: '0 4px 20px rgba(0,0,0,0.15)', fontSize: '0.72rem', fontWeight: '700',
              color: '#065f46', display: 'flex', alignItems: 'center', gap: '5px',
              border: '1px solid #d1fae5',
            }}>
              <TrendingUp size={13} color="#059669" /> Revenue ↑ 32%
            </div>
          </div>
        </div>

        {/* Stats bar */}
        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(4,1fr)',
          marginTop: '4rem',
          border: '1px solid rgba(255,255,255,0.08)',
          borderRadius: '8px',
          overflow: 'hidden',
        }}>
          {stats.map((s, i) => (
            <div key={s.label} style={{
              padding: '1.5rem 1.75rem', textAlign: 'center',
              borderRight: i < stats.length - 1 ? '1px solid rgba(255,255,255,0.08)' : 'none',
              background: i % 2 === 0 ? 'rgba(255,255,255,0.03)' : 'transparent',
            }}>
              <div style={{ fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', fontWeight: '800', color: '#ffffff' }}>{s.value}</div>
              <div style={{ fontSize: '0.8rem', color: '#64748b', marginTop: '0.25rem', fontWeight: '500' }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .hero-grid { grid-template-columns: 1fr !important; gap: 3rem !important; }
        }
      `}</style>
    </section>
  )
}

import { Bell, Search, TrendingUp } from 'lucide-react'

const sideLinks = ['Dashboard', 'Sales', 'Purchase', 'Inventory', 'Accounts', 'GST Reports', 'Analytics']

export default function DashboardPreview() {
  return (
    <section id="dashboard" style={{ padding: '6rem 1.5rem', background: '#0f172a' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <div className="section-badge" style={{ background: 'rgba(255,255,255,0.07)', color: '#93c5fd', border: '1px solid rgba(59,130,246,0.25)' }}>
            Live Dashboard Preview
          </div>
          <h2 style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', fontWeight: '800', color: '#ffffff', letterSpacing: '-0.025em', marginBottom: '0.75rem' }}>
            Powerful Analytics at Your Fingertips
          </h2>
          <div style={{ width: '48px', height: '3px', background: '#1e40af', borderRadius: '2px', margin: '0 auto 1.25rem' }} />
          <p style={{ fontSize: '1rem', color: '#94a3b8', maxWidth: '500px', margin: '0 auto', lineHeight: '1.75' }}>
            Real-time business intelligence, GST reports, and financial insights — all in one intuitive dashboard.
          </p>
        </div>

        {/* Dashboard Mockup */}
        <div style={{ maxWidth: '900px', margin: '0 auto', background: '#ffffff', borderRadius: '8px', overflow: 'hidden', boxShadow: '0 32px 80px rgba(0,0,0,0.5)' }}>
          {/* Browser bar */}
          <div style={{ background: '#1e293b', padding: '10px 14px', display: 'flex', alignItems: 'center', gap: '6px', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
            {['#ef4444', '#f59e0b', '#22c55e'].map(c => <div key={c} style={{ width: '10px', height: '10px', borderRadius: '50%', background: c }} />)}
            <div style={{ flex: 1, background: '#0f172a', borderRadius: '4px', padding: '3px 10px', fontSize: '0.65rem', color: '#64748b', textAlign: 'center', marginLeft: '6px' }}>
              app.margerp.com/dashboard
            </div>
            <Bell size={13} color="#475569" />
          </div>

          {/* App layout */}
          <div style={{ display: 'flex', height: '430px' }}>
            {/* Sidebar */}
            <div style={{ width: '155px', background: '#0f172a', flexShrink: 0, padding: '0.75rem 0' }}>
              <div style={{ padding: '0.5rem 1rem 1rem', borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
                <img
                  src="/logo.png"
                  alt="MargERP Logo"
                  style={{
                    width: '100%',
                    maxWidth: '115px',
                    height: 'auto',
                    display: 'block',
                    objectFit: 'contain',
                    imageRendering: 'crisp-edges',
                  }}
                />
                <div style={{ fontSize: '0.58rem', color: '#475569', marginTop: '4px' }}>FY 2025-26</div>
              </div>
              {sideLinks.map((link, i) => (
                <div key={link} style={{
                  padding: '0.45rem 1rem', fontSize: '0.72rem',
                  color: i === 0 ? '#ffffff' : '#64748b',
                  background: i === 0 ? 'rgba(30,64,175,0.25)' : 'transparent',
                  borderLeft: i === 0 ? '3px solid #1e40af' : '3px solid transparent',
                  fontWeight: i === 0 ? '600' : '400', cursor: 'pointer',
                }}>
                  {link}
                </div>
              ))}
            </div>

            {/* Main */}
            <div style={{ flex: 1, background: '#f9fafb', overflow: 'auto', padding: '1rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                <div>
                  <div style={{ fontWeight: '700', fontSize: '0.875rem', color: '#111827' }}>Business Dashboard</div>
                  <div style={{ fontSize: '0.62rem', color: '#9ca3af' }}>March 2026 · All Branches</div>
                </div>
                <div style={{ display: 'flex', gap: '6px' }}>
                  <div style={{ background: '#fff', border: '1px solid #e5e7eb', borderRadius: '5px', padding: '4px 8px', fontSize: '0.62rem', color: '#6b7280', display: 'flex', alignItems: 'center', gap: '3px' }}>
                    <Search size={9} /> Search...
                  </div>
                  <div style={{ background: '#1e40af', color: '#fff', borderRadius: '5px', padding: '4px 10px', fontSize: '0.62rem', fontWeight: '600' }}>
                    + New Entry
                  </div>
                </div>
              </div>

              {/* KPI Cards */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: '0.5rem', marginBottom: '0.75rem' }}>
                {[
                  { label: 'Net Sales', value: '₹42.5L', change: '+18%', color: '#1e40af', bg: '#eff6ff' },
                  { label: 'GST Collected', value: '₹5.2L', change: '+12%', color: '#4f46e5', bg: '#eef2ff' },
                  { label: 'Stock Value', value: '₹84L', change: '+5%', color: '#047857', bg: '#ecfdf5' },
                  { label: 'Net Profit', value: '₹6.8L', change: '+23%', color: '#b45309', bg: '#fffbeb' },
                ].map(k => (
                  <div key={k.label} style={{ background: k.bg, borderRadius: '6px', padding: '0.6rem 0.7rem', border: '1px solid rgba(0,0,0,0.04)' }}>
                    <div style={{ fontSize: '0.56rem', color: '#6b7280', fontWeight: '500', marginBottom: '2px' }}>{k.label}</div>
                    <div style={{ fontSize: '0.9rem', fontWeight: '800', color: k.color }}>{k.value}</div>
                    <div style={{ fontSize: '0.58rem', color: '#047857', display: 'flex', alignItems: 'center', gap: '2px' }}>
                      <TrendingUp size={7} /> {k.change}
                    </div>
                  </div>
                ))}
              </div>

              {/* Charts */}
              <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '0.5rem', marginBottom: '0.5rem' }}>
                <div style={{ background: '#fff', borderRadius: '6px', padding: '0.7rem', border: '1px solid #e5e7eb' }}>
                  <div style={{ fontSize: '0.62rem', fontWeight: '600', color: '#374151', marginBottom: '0.4rem' }}>Monthly Sales Trend</div>
                  <div style={{ display: 'flex', alignItems: 'flex-end', gap: '3px', height: '55px' }}>
                    {[55, 70, 48, 80, 65, 90, 72, 85, 60, 95, 78, 100].map((h, i) => (
                      <div key={i} style={{ flex: 1, height: `${h}%`, borderRadius: '2px 2px 0 0', background: i === 11 ? '#1e40af' : '#bfdbfe' }} />
                    ))}
                  </div>
                </div>
                <div style={{ background: '#fff', borderRadius: '6px', padding: '0.7rem', border: '1px solid #e5e7eb' }}>
                  <div style={{ fontSize: '0.62rem', fontWeight: '600', color: '#374151', marginBottom: '0.4rem' }}>Category Split</div>
                  <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '0.4rem' }}>
                    <div style={{
                      width: '52px', height: '52px', borderRadius: '50%',
                      background: 'conic-gradient(#1e40af 0% 40%, #4f46e5 40% 65%, #047857 65% 85%, #b45309 85% 100%)',
                      boxShadow: 'inset 0 0 0 15px white',
                    }} />
                  </div>
                  {[['Pharma', '40%', '#1e40af'], ['Retail', '25%', '#4f46e5'], ['FMCG', '20%', '#047857'], ['Other', '15%', '#b45309']].map(([l, p, c]) => (
                    <div key={l} style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.56rem', color: '#6b7280', marginBottom: '2px' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                        <div style={{ width: '5px', height: '5px', borderRadius: '50%', background: c }} />{l}
                      </div>
                      <span style={{ fontWeight: '700', color: '#374151' }}>{p}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Invoice table */}
              <div style={{ background: '#fff', borderRadius: '6px', border: '1px solid #e5e7eb', overflow: 'hidden' }}>
                <div style={{ padding: '0.5rem 0.75rem', borderBottom: '1px solid #f3f4f6', display: 'flex', justifyContent: 'space-between' }}>
                  <span style={{ fontSize: '0.62rem', fontWeight: '600', color: '#111827' }}>Recent Invoices</span>
                  <span style={{ fontSize: '0.58rem', color: '#1e40af', cursor: 'pointer' }}>View All</span>
                </div>
                {[
                  ['INV-2026-0342', 'Ravi Medical Store', '18 Mar', '₹18,400', true],
                  ['INV-2026-0341', 'Sharma Distributors', '17 Mar', '₹52,200', false],
                  ['INV-2026-0340', 'Anand Pharma', '17 Mar', '₹9,750', true],
                ].map(([inv, party, date, amt, paid]) => (
                  <div key={inv} style={{ display: 'grid', gridTemplateColumns: '1.5fr 2fr 1fr 1fr 1fr', padding: '0.4rem 0.75rem', borderBottom: '1px solid #f9fafb', alignItems: 'center' }}>
                    <span style={{ fontSize: '0.58rem', color: '#1e40af', fontWeight: '600' }}>{inv}</span>
                    <span style={{ fontSize: '0.58rem', color: '#374151' }}>{party}</span>
                    <span style={{ fontSize: '0.56rem', color: '#9ca3af' }}>{date}</span>
                    <span style={{ fontSize: '0.6rem', fontWeight: '700', color: '#111827' }}>{amt}</span>
                    <span style={{ fontSize: '0.54rem', background: paid ? '#ecfdf5' : '#fffbeb', color: paid ? '#047857' : '#b45309', padding: '1px 6px', borderRadius: '3px', fontWeight: '600' }}>
                      {paid ? 'Paid' : 'Pending'}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Feature pills */}
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '0.6rem', marginTop: '2.5rem' }}>
          {['Real-time Sync', 'Multi-branch Support', 'Auto GST Filing', 'Cloud Backup', 'Role-based Access', 'Audit Trail'].map(f => (
            <span key={f} style={{
              background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.12)',
              color: '#94a3b8', padding: '0.35rem 0.9rem', borderRadius: '4px', fontSize: '0.78rem', fontWeight: '500',
            }}>
              {f}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}

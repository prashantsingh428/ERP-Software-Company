import { useState } from 'react'
import { Phone, Mail, MapPin, Clock, MessageCircle, Send, CheckCircle } from 'lucide-react'

const inputStyle = {
  width: '100%', padding: '0.7rem 0.9rem',
  border: '1px solid #d1d5db', borderRadius: '6px',
  fontSize: '0.875rem', outline: 'none', boxSizing: 'border-box',
  color: '#111827', background: '#ffffff', fontFamily: 'Inter, sans-serif',
  transition: 'border-color 0.2s',
}

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({ name: '', company: '', phone: '', email: '', industry: '', message: '' })

  const update = (k, v) => setForm(p => ({ ...p, [k]: v }))
  const focus = e => (e.target.style.borderColor = '#1e40af')
  const blur = e => (e.target.style.borderColor = '#d1d5db')

  const wa = `https://wa.me/919999999999?text=${encodeURIComponent("Hi! I'm interested in learning more about Guru Kripa Pharmacy.")}`

  return (
    <section id="contact" style={{ padding: '6rem 1.5rem', background: '#ffffff' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <div className="section-badge">Get In Touch</div>
          <h2 style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', fontWeight: '800', color: '#111827', letterSpacing: '-0.025em', marginBottom: '0.75rem' }}>
            Start Your Free Demo Today
          </h2>
          <div className="section-divider" />
          <p style={{ fontSize: '1rem', color: '#6b7280', maxWidth: '480px', margin: '0 auto', lineHeight: '1.75' }}>
            Talk to our ERP experts and get a personalized demo tailored to your business. No commitment required.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.6fr', gap: '2.5rem', alignItems: 'start' }} className="contact-grid">
          {/* Info Panel */}
          <div>
            <div style={{ background: '#0f172a', borderRadius: '8px', padding: '2rem', color: 'white', marginBottom: '1.25rem' }}>
              <h3 style={{ fontSize: '1.05rem', fontWeight: '700', marginBottom: '0.5rem' }}>Contact Information</h3>
              <p style={{ color: '#94a3b8', fontSize: '0.85rem', marginBottom: '1.75rem', lineHeight: '1.6' }}>
                Available Monday–Saturday, 9am to 7pm IST.
              </p>

              {[
                { icon: <Phone size={16} />, label: 'Call Us', value: '+91-9999-999-999', href: 'tel:+919999999999' },
                { icon: <Mail size={16} />, label: 'Email', value: 'sales@Guru Kripa Pharmacy.com', href: 'mailto:sales@Guru Kripa Pharmacy.com' },
                { icon: <MapPin size={16} />, label: 'Head Office', value: 'New Delhi, India', href: '#' },
                { icon: <Clock size={16} />, label: 'Working Hours', value: 'Mon–Sat, 9am–7pm IST', href: '#' },
              ].map(c => (
                <a key={c.label} href={c.href} style={{ display: 'flex', gap: '0.75rem', marginBottom: '1.1rem', textDecoration: 'none' }}>
                  <div style={{ width: '34px', height: '34px', background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '6px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, color: '#93c5fd' }}>
                    {c.icon}
                  </div>
                  <div>
                    <div style={{ fontSize: '0.7rem', color: '#475569', marginBottom: '1px' }}>{c.label}</div>
                    <div style={{ fontSize: '0.875rem', color: '#e2e8f0', fontWeight: '500' }}>{c.value}</div>
                  </div>
                </a>
              ))}

              <a href={wa} target="_blank" rel="noopener noreferrer" style={{
                display: 'flex', alignItems: 'center', gap: '0.6rem', marginTop: '1.5rem',
                background: '#25D366', color: '#ffffff', padding: '0.75rem 1.25rem',
                borderRadius: '6px', textDecoration: 'none', fontWeight: '700', fontSize: '0.875rem',
              }}>
                <MessageCircle size={18} fill="white" /> Chat on WhatsApp
              </a>
            </div>

            <div style={{ background: '#f9fafb', borderRadius: '8px', padding: '1.25rem', border: '1px solid #e5e7eb' }}>
              <div style={{ fontSize: '0.8rem', fontWeight: '700', color: '#111827', marginBottom: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.04em' }}>Quick Actions</div>
              {['Schedule a Live Demo', 'Download Product Brochure', 'Watch Video Tutorial', 'View All Integrations'].map(a => (
                <a key={a} href="#" style={{ display: 'block', color: '#1e40af', fontSize: '0.85rem', fontWeight: '500', textDecoration: 'none', borderBottom: '1px solid #f3f4f6', padding: '0.5rem 0' }}>
                  → {a}
                </a>
              ))}
            </div>
          </div>

          {/* Form */}
          <div style={{ background: '#ffffff', borderRadius: '8px', padding: '2.5rem', border: '1px solid #e5e7eb', boxShadow: '0 4px 24px rgba(0,0,0,0.07)' }}>
            {submitted ? (
              <div style={{ textAlign: 'center', padding: '3rem 0' }}>
                <div style={{ width: '56px', height: '56px', background: '#ecfdf5', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1rem', border: '1px solid #a7f3d0' }}>
                  <CheckCircle size={28} color="#047857" />
                </div>
                <h3 style={{ fontSize: '1.2rem', fontWeight: '700', color: '#111827', marginBottom: '0.4rem' }}>Thank You!</h3>
                <p style={{ color: '#6b7280', fontSize: '0.9rem' }}>Our team will reach out within 24 hours. Check your email for confirmation.</p>
                <button onClick={() => setSubmitted(false)} style={{ marginTop: '1.5rem', background: '#eff6ff', color: '#1e40af', border: '1px solid #bfdbfe', padding: '0.6rem 1.5rem', borderRadius: '6px', cursor: 'pointer', fontWeight: '600', fontSize: '0.875rem' }}>
                  Send Another Query
                </button>
              </div>
            ) : (
              <>
                <h3 style={{ fontSize: '1.1rem', fontWeight: '700', color: '#111827', marginBottom: '1.5rem' }}>Request a Free Demo</h3>
                <form onSubmit={e => { e.preventDefault(); setSubmitted(true) }} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }} className="form-2col">
                    {[
                      { key: 'name', label: 'Full Name *', ph: 'Your name', req: true, type: 'text' },
                      { key: 'company', label: 'Company Name *', ph: 'Your company', req: true, type: 'text' },
                    ].map(f => (
                      <div key={f.key}>
                        <label style={{ fontSize: '0.78rem', fontWeight: '600', color: '#374151', display: 'block', marginBottom: '0.35rem' }}>{f.label}</label>
                        <input required={f.req} type={f.type} value={form[f.key]} onChange={e => update(f.key, e.target.value)} placeholder={f.ph} style={inputStyle} onFocus={focus} onBlur={blur} />
                      </div>
                    ))}
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }} className="form-2col">
                    {[
                      { key: 'phone', label: 'Phone Number *', ph: '+91 XXXXX XXXXX', req: true, type: 'tel' },
                      { key: 'email', label: 'Email Address', ph: 'you@company.com', req: false, type: 'email' },
                    ].map(f => (
                      <div key={f.key}>
                        <label style={{ fontSize: '0.78rem', fontWeight: '600', color: '#374151', display: 'block', marginBottom: '0.35rem' }}>{f.label}</label>
                        <input required={f.req} type={f.type} value={form[f.key]} onChange={e => update(f.key, e.target.value)} placeholder={f.ph} style={inputStyle} onFocus={focus} onBlur={blur} />
                      </div>
                    ))}
                  </div>

                  <div>
                    <label style={{ fontSize: '0.78rem', fontWeight: '600', color: '#374151', display: 'block', marginBottom: '0.35rem' }}>Industry</label>
                    <select value={form.industry} onChange={e => update('industry', e.target.value)} style={{ ...inputStyle }} onFocus={focus} onBlur={blur}>
                      <option value="">Select your industry...</option>
                      {['Pharma & Healthcare', 'Retail & Supermarket', 'Distribution & Wholesale', 'FMCG & Consumer Goods', 'Other'].map(o => (
                        <option key={o}>{o}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label style={{ fontSize: '0.78rem', fontWeight: '600', color: '#374151', display: 'block', marginBottom: '0.35rem' }}>Message</label>
                    <textarea value={form.message} onChange={e => update('message', e.target.value)} placeholder="Tell us about your business requirements..." rows={4} style={{ ...inputStyle, resize: 'vertical' }} onFocus={focus} onBlur={blur} />
                  </div>

                  <button type="submit" className="btn-primary" style={{ justifyContent: 'center', width: '100%', padding: '0.85rem 1.5rem' }}>
                    <Send size={16} /> Request Free Demo
                  </button>

                  <p style={{ fontSize: '0.72rem', color: '#9ca3af', textAlign: 'center', margin: 0 }}>
                    By submitting, you agree to our Privacy Policy. We never share your data.
                  </p>
                </form>
              </>
            )}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) { .contact-grid { grid-template-columns: 1fr !important; } }
        @media (max-width: 580px) { .form-2col { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  )
}

import { useEffect, useRef } from 'react'
import { ArrowRight, Star, Users, Award, TrendingUp, Play } from 'lucide-react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const tags = ['GST Ready', 'Tally Compatible', 'Cloud Sync', 'e-Invoice Enabled']
const stats = [
  { value: '5 Lakh+', label: 'Businesses' },
  { value: '25+ Yrs', label: 'Experience' },
  { value: '99.9%', label: 'Uptime' },
  { value: '24/7', label: 'Support' },
]

export default function Hero() {
  const statsRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Stats bar items animate in on scroll
      gsap.fromTo(
        '.stat-item',
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: statsRef.current,
            start: 'top 85%',
          },
        }
      )

      // Number count-up animation
      document.querySelectorAll('.stat-value').forEach((el) => {
        const text = el.textContent
        // animate a simple fade+scale pop for non-numeric values
        gsap.fromTo(
          el,
          { scale: 0.7, opacity: 0 },
          {
            scale: 1,
            opacity: 1,
            duration: 0.6,
            ease: 'back.out(1.7)',
            scrollTrigger: {
              trigger: el,
              start: 'top 85%',
            },
          }
        )
      })

      // Hero text stagger
      gsap.fromTo(
        '.hero-tag',
        { opacity: 0, x: -20 },
        { opacity: 1, x: 0, duration: 0.5, stagger: 0.08, ease: 'power2.out', delay: 0.3 }
      )
      gsap.fromTo(
        '.hero-heading',
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out', delay: 0.6 }
      )
      gsap.fromTo(
        '.hero-sub',
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.7, ease: 'power2.out', delay: 0.9 }
      )
      gsap.fromTo(
        '.hero-cta',
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.7, ease: 'power2.out', delay: 1.1 }
      )
      gsap.fromTo(
        '.hero-proof',
        { opacity: 0 },
        { opacity: 1, duration: 0.8, delay: 1.4 }
      )
    })

    return () => ctx.revert()
  }, [])

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
      {/* ── VIDEO BACKGROUND ── */}
      <video
        autoPlay
        muted
        loop
        playsInline
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          opacity: 1,
          zIndex: 0,
        }}
      >
        <source src="/hero.mp4" type="video/mp4" />
      </video>

      {/* Dark overlay on top of video for legibility */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 1,
        background: 'linear-gradient(135deg, rgba(15,23,42,0.65) 0%, rgba(15,23,42,0.35) 100%)',
      }} />

      {/* Side accent bar */}
      <div style={{
        position: 'absolute', left: 0, top: '10%', bottom: '10%',
        width: '4px', background: '#1e40af', borderRadius: '0 4px 4px 0', zIndex: 2,
      }} />

      <div style={{ maxWidth: '1200px', margin: '0 auto', width: '100%', position: 'relative', zIndex: 3 }}>

        {/* ── HERO CONTENT (Centered) ── */}
        <div style={{ maxWidth: '850px', margin: '0 auto', textAlign: 'center' }}>

          {/* Tags */}
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '0.5rem', marginBottom: '2rem' }}>
            {tags.map(t => (
              <span key={t} className="hero-tag" style={{
                background: 'rgba(30,64,175,0.2)', color: '#93c5fd',
                padding: '0.25rem 0.75rem', borderRadius: '4px', fontSize: '0.72rem',
                fontWeight: '600', border: '1px solid rgba(59,130,246,0.25)',
                letterSpacing: '0.04em', textTransform: 'uppercase',
              }}>
                {t}
              </span>
            ))}
          </div>

          <h1 className="hero-heading" style={{
            fontSize: 'clamp(2.5rem, 6vw, 4.2rem)',
            fontWeight: '900', color: '#ffffff',
            lineHeight: '1.1', marginBottom: '1.5rem',
            letterSpacing: '-0.03em',
          }}>
            Complete ERP Solution for <span style={{ color: '#3b82f6' }}>Your Business</span>
          </h1>

          <p className="hero-sub" style={{
            fontSize: '1.15rem', color: '#94a3b8', lineHeight: '1.75',
            marginBottom: '2.5rem', maxWidth: '650px', margin: '0 auto 2.5rem',
          }}>
            GST Billing, Accounting, Inventory &amp; Automation — everything your business needs in one powerful ERP platform trusted by 5 lakh+ businesses.
          </p>

          {/* CTA Buttons */}
          <div className="hero-cta" style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center', marginBottom: '3.5rem' }}>
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
          <div className="hero-proof" style={{ display: 'flex', gap: '2.5rem', justifyContent: 'center', flexWrap: 'wrap', paddingTop: '2.5rem', borderTop: '1px solid rgba(255,255,255,0.08)' }}>
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

        {/* ── STATS BAR (with GSAP animation) ── */}
        <div ref={statsRef} style={{
          display: 'grid', gridTemplateColumns: 'repeat(4,1fr)',
          marginTop: '4.5rem',
          border: '1px solid rgba(255,255,255,0.10)',
          borderRadius: '8px',
          overflow: 'hidden',
          backdropFilter: 'blur(8px)',
          background: 'rgba(15,23,42,0.6)',
        }}>
          {stats.map((s, i) => (
            <div key={s.label} className="stat-item" style={{
              padding: '1.5rem 1.75rem', textAlign: 'center',
              borderRight: i < stats.length - 1 ? '1px solid rgba(255,255,255,0.08)' : 'none',
              background: i % 2 === 0 ? 'rgba(255,255,255,0.03)' : 'transparent',
            }}>
              <div className="stat-value" style={{ fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', fontWeight: '800', color: '#ffffff' }}>
                {s.value}
              </div>
              <div style={{ fontSize: '0.8rem', color: '#64748b', marginTop: '0.25rem', fontWeight: '500' }}>
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .hero-grid { grid-template-columns: 1fr !important; gap: 3rem !important; }
        }
        @media (max-width: 600px) {
          div[style*="repeat(4,1fr)"] { grid-template-columns: repeat(2,1fr) !important; }
        }
      `}</style>
    </section>
  )
}

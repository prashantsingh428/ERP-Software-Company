import { useState, useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)
import {
  Bell, Search, TrendingUp, BarChart3,
  DollarSign, Package, Users, Settings,
  ArrowUpRight, Download, Calendar, Filter,
  PieChart, Activity, CreditCard, Shield,
  Globe, Clock, Zap, Award, Lock, FileText
} from 'lucide-react'

const sideLinks = ['Dashboard', 'Sales', 'Purchase', 'Inventory', 'Accounts', 'GST Reports', 'Analytics']

// --- Advanced UI Helpers ---
const useDecryptedText = (text, isHovered = true) => {
  const [displayText, setDisplayText] = useState(text);
  const chars = '-/_*+!<>[]{}0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';

  useEffect(() => {
    if (!isHovered) return;
    let iteration = 0;
    const interval = setInterval(() => {
      setDisplayText(text.split('').map((char, index) => {
        if (index < iteration) return text[index];
        return chars[Math.floor(Math.random() * chars.length)];
      }).join(''));

      if (iteration >= text.length) clearInterval(interval);
      iteration += 1 / 3;
    }, 30);
    return () => clearInterval(interval);
  }, [text, isHovered]);

  return displayText;
};

const SpotlightCard = ({ children, style = {}, className = "" }) => {
  const cardRef = useRef(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const { left, top } = cardRef.current.getBoundingClientRect();
    setPos({ x: e.clientX - left, y: e.clientY - top });
    setOpacity(1);
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setOpacity(1)}
      onMouseLeave={() => setOpacity(0)}
      style={{
        ...style,
        position: 'relative',
        overflow: 'hidden',
      }}
      className={className}
    >
      <div style={{
        position: 'absolute',
        inset: 0,
        background: `radial-gradient(600px circle at ${pos.x}px ${pos.y}px, rgba(59,130,246,0.1), transparent 40%)`,
        opacity,
        pointerEvents: 'none',
        zIndex: 1,
        transition: 'opacity 0.3s ease'
      }} />
      <div style={{ position: 'relative', zIndex: 2 }}>{children}</div>
    </div>
  );
};

// Professional dashboard metrics
const metrics = [
  { label: 'Total Revenue', value: '₹12,45,678', change: '+15.3%', icon: DollarSign, color: '#22c55e' },
  { label: 'Total Orders', value: '1,234', change: '+8.2%', icon: Package, color: '#3b82f6' },
  { label: 'Active Users', value: '456', change: '+12.5%', icon: Users, color: '#f59e0b' },
  { label: 'Growth Rate', value: '23.4%', change: '+5.1%', icon: TrendingUp, color: '#ef4444' },
]

// Recent orders data
const recentOrders = [
  { id: '#ORD-001', customer: 'Rajesh Kumar', amount: '₹45,678', status: 'Completed', date: '2024-03-19' },
  { id: '#ORD-002', customer: 'Priya Sharma', amount: '₹23,456', status: 'Processing', date: '2024-03-18' },
  { id: '#ORD-003', customer: 'Amit Patel', amount: '₹67,890', status: 'Pending', date: '2024-03-18' },
  { id: '#ORD-004', customer: 'Sunita Reddy', amount: '₹34,567', status: 'Completed', date: '2024-03-17' },
  { id: '#ORD-005', customer: 'Vikram Singh', amount: '₹56,789', status: 'Shipped', date: '2024-03-17' },
]

// Sales data for chart
const salesData = [
  { month: 'Jan', sales: 45000 },
  { month: 'Feb', sales: 52000 },
  { month: 'Mar', sales: 48000 },
  { month: 'Apr', sales: 61000 },
  { month: 'May', sales: 55000 },
  { month: 'Jun', sales: 67000 },
]

// Stock status
const stockStatus = [
  { product: 'Premium Rice (50kg)', stock: 245, status: 'In Stock', threshold: 100 },
  { product: 'Wheat Flour (10kg)', stock: 89, status: 'Low Stock', threshold: 100 },
  { product: 'Pulses (5kg)', stock: 156, status: 'In Stock', threshold: 100 },
  { product: 'Cooking Oil (15L)', stock: 45, status: 'Low Stock', threshold: 50 },
  { product: 'Spices (1kg)', stock: 234, status: 'In Stock', threshold: 100 },
]

export default function DashboardPreview() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [selectedTimeRange, setSelectedTimeRange] = useState('week');
  const [isHeadingHovered, setIsHeadingHovered] = useState(false);

  const decryptedHeading = useDecryptedText("Fingertips", isHeadingHovered);

  const sectionRef = useRef(null);
  const mockupRef = useRef(null);
  const metricsRef = useRef([]);
  const featuresRef = useRef([]);
  const sliderRef = useRef(null);
  const ctaRef = useRef(null);
  const logoRef = useRef(null);

  const banners = [
    {
      image: "/dashboard-main.png",
      title: "Complete Business Management",
      description: "Track sales, inventory, accounts, and GST in one place"
    },
    {
      image: "/dashboard-analytics.png",
      title: "Advanced Analytics & Reports",
      description: "Real-time insights with interactive charts and graphs"
    },
    {
      image: "/dashboard-mobile.png",
      title: "Mobile-Optimized Dashboard",
      description: "Access your business data anytime, anywhere"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % banners.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [banners.length]);

  // GSAP Animations & Interactions
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Mockup entry
      gsap.fromTo(mockupRef.current,
        { y: 100, opacity: 0, rotateX: 5 },
        {
          y: 0, opacity: 1, rotateX: 0, duration: 1.5, ease: "power4.out",
          scrollTrigger: {
            trigger: mockupRef.current,
            start: "top 90%",
          }
        }
      );

      // Staggered metrics
      gsap.fromTo(metricsRef.current,
        { y: 40, opacity: 0, scale: 0.8 },
        {
          y: 0, opacity: 1, scale: 1, duration: 1, stagger: 0.1, ease: "back.out(1.4)",
          scrollTrigger: {
            trigger: mockupRef.current,
            start: "top 60%",
          }
        }
      );

      // 3D Perspective Tilt for mockup
      const section = sectionRef.current;
      const mockup = mockupRef.current;

      const rotateXQuick = gsap.quickTo(mockup, "rotateX", { duration: 0.5, ease: "power2" });
      const rotateYQuick = gsap.quickTo(mockup, "rotateY", { duration: 0.5, ease: "power2" });

      const handlePerspective = (e) => {
        const { left, top, width, height } = section.getBoundingClientRect();
        const x = (e.clientX - left) / width - 0.5;
        const y = (e.clientY - top) / height - 0.5;
        rotateYQuick(x * 6);
        rotateXQuick(-y * 6);
      };

      section.addEventListener("mousemove", handlePerspective);
      section.addEventListener("mouseleave", () => {
        rotateXQuick(0);
        rotateYQuick(0);
      });

      // Magnetic CTA Button
      const cta = ctaRef.current;
      const xTo = gsap.quickTo(cta, "x", { duration: 0.3, ease: "power3" });
      const yTo = gsap.quickTo(cta, "y", { duration: 0.3, ease: "power3" });

      const handleMagnetic = (e) => {
        const { left, top, width, height } = cta.getBoundingClientRect();
        const centerX = left + width / 2;
        const centerY = top + height / 2;
        xTo((e.clientX - centerX) * 0.4);
        yTo((e.clientY - centerY) * 0.4);
      };

      cta.addEventListener("mousemove", handleMagnetic);
      cta.addEventListener("mouseleave", () => {
        xTo(0);
        yTo(0);
      });

      // Magnetic Logo
      const logo = logoRef.current;
      const xLogo = gsap.quickTo(logo, "x", { duration: 0.3, ease: "power3" });
      const yLogo = gsap.quickTo(logo, "y", { duration: 0.3, ease: "power3" });

      const handleLogoMagnetic = (e) => {
        const { left, top, width, height } = logo.getBoundingClientRect();
        const centerX = left + width / 2;
        const centerY = top + height / 2;
        xLogo((e.clientX - centerX) * 0.3);
        yLogo((e.clientY - centerY) * 0.3);
      };

      logo.addEventListener("mousemove", handleLogoMagnetic);
      logo.addEventListener("mouseleave", () => {
        xLogo(0);
        yLogo(0);
      });

      // Animate Bar Chart
      const bars = gsap.utils.toArray(".sales-bar");
      if (bars.length > 0) {
        gsap.fromTo(bars,
          { scaleY: 0, opacity: 0 },
          {
            scaleY: 1,
            opacity: 1,
            duration: 1,
            stagger: 0.1,
            ease: "elastic.out(1, 0.7)",
            transformOrigin: "bottom",
            scrollTrigger: {
              trigger: mockupRef.current,
              start: "top 40%",
            }
          }
        );
      }

      // Float animation for background blobs
      gsap.to(".bg-blob", {
        y: "random(-40, 40)",
        x: "random(-40, 40)",
        duration: "random(10, 20)",
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        stagger: { amount: 3, from: "random" }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // Smooth Carousel Slide with GSAP
  useEffect(() => {
    const slides = gsap.utils.toArray(".dashboard-slide");
    if (slides.length > 0) {
      gsap.to(slides, {
        xPercent: -currentSlide * 100,
        duration: 1,
        ease: "power3.inOut"
      });
    }
  }, [currentSlide]);

  const getStatusColor = (status) => {
    switch (status) {
      case 'Completed': return '#22c55e';
      case 'Processing': return '#3b82f6';
      case 'Pending': return '#f59e0b';
      case 'Shipped': return '#8b5cf6';
      default: return '#64748b';
    }
  };

  return (
    <section id="dashboard" ref={sectionRef} style={{
      padding: '6rem 1.5rem',
      background: 'linear-gradient(135deg, #0a0f1c 0%, #0f172a 50%, #1a1f2f 100%)',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Animated background elements */}
      <div className="bg-blob" style={{
        position: 'absolute',
        top: '10%',
        right: '-5%',
        width: '400px',
        height: '400px',
        background: 'radial-gradient(circle, rgba(30,64,175,0.15) 0%, transparent 70%)',
        borderRadius: '50%',
        filter: 'blur(60px)',
      }} />
      <div className="bg-blob" style={{
        position: 'absolute',
        bottom: '10%',
        left: '-5%',
        width: '400px',
        height: '400px',
        background: 'radial-gradient(circle, rgba(34,197,94,0.1) 0%, transparent 70%)',
        borderRadius: '50%',
        filter: 'blur(60px)',
      }} />

      {/* Noise Overlay for Texture */}
      <div style={{
        position: 'absolute',
        inset: 0,
        opacity: 0.02,
        pointerEvents: 'none',
        zIndex: 5,
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
      }} />

      {/* Floating Glass Particles */}
      {[...Array(6)].map((_, i) => (
        <div
          key={i}
          className="bg-blob"
          style={{
            position: 'absolute',
            width: `${Math.random() * 100 + 50}px`,
            height: `${Math.random() * 100 + 50}px`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            background: 'rgba(255, 255, 255, 0.03)',
            backdropFilter: 'blur(5px)',
            border: '1px solid rgba(255, 255, 255, 0.05)',
            borderRadius: '20px',
            transform: `rotate(${Math.random() * 360}deg)`,
            pointerEvents: 'none'
          }}
        />
      ))}

      <div style={{ maxWidth: '1400px', margin: '0 auto', position: 'relative', zIndex: 2 }}>
        {/* Header Section */}
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <div style={{
            display: 'inline-block',
            background: 'rgba(30,64,175,0.15)',
            color: '#3b82f6',
            padding: '0.5rem 1.5rem',
            borderRadius: '40px',
            fontSize: '0.875rem',
            fontWeight: '600',
            letterSpacing: '0.5px',
            border: '1px solid rgba(59,130,246,0.3)',
            marginBottom: '1.5rem',
            backdropFilter: 'blur(10px)'
          }}>
            ⚡ Live Dashboard Preview
          </div>

          <h2
            onMouseEnter={() => setIsHeadingHovered(true)}
            onMouseLeave={() => setIsHeadingHovered(false)}
            style={{
              fontSize: 'clamp(2rem, 5vw, 3.5rem)',
              fontWeight: '800',
              color: '#ffffff',
              letterSpacing: '-0.02em',
              marginBottom: '1rem',
              lineHeight: '1.2',
              cursor: 'default'
            }}
          >
            Complete Business Control at Your{' '}
            <span style={{
              background: 'linear-gradient(135deg, #3b82f6 0%, #22c55e 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              fontFamily: 'monospace'
            }}>
              {decryptedHeading}
            </span>
          </h2>

          <p style={{
            fontSize: '1.125rem',
            color: '#94a3b8',
            maxWidth: '600px',
            margin: '0 auto',
            lineHeight: '1.75'
          }}>
            Real-time business intelligence, GST reports, and financial insights —
            all in one intuitive dashboard with enterprise-grade security.
          </p>
        </div>

        {/* Dashboard Mockup */}
        <div ref={mockupRef} style={{
          background: '#0f172a',
          borderRadius: '24px',
          overflow: 'hidden',
          boxShadow: '0 50px 100px -20px rgba(0,0,0,0.7), 0 0 0 1px rgba(255,255,255,0.05)',
          border: '1px solid rgba(255,255,255,0.05)',
          backdropFilter: 'blur(10px)',
          marginBottom: '4rem',
          position: 'relative'
        }}>
          {/* Banner Slider Inside Mockup */}
          <div style={{
            position: 'relative',
            height: '400px',
            background: '#000',
            overflow: 'hidden',
            borderBottom: '1px solid rgba(255,255,255,0.1)'
          }}>
            {banners.map((banner, idx) => (
              <div
                key={idx}
                className="dashboard-slide"
                style={{
                  position: 'absolute',
                  top: 0,
                  left: `${idx * 100}%`,
                  width: '100%',
                  height: '100%',
                  zIndex: 2,
                }}
              >
                <img
                  src={banner.image}
                  alt={banner.title}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    filter: 'brightness(0.7)'
                  }}
                />
                <div style={{
                  position: 'absolute',
                  bottom: '40px',
                  left: '40px',
                  zIndex: 3,
                  maxWidth: '500px'
                }}>
                  <h3 style={{ fontSize: '2rem', fontWeight: '800', color: 'white', marginBottom: '1rem' }}>
                    {banner.title}
                  </h3>
                  <p style={{ fontSize: '1.1rem', color: 'rgba(255,255,255,0.8)', lineHeight: '1.5' }}>
                    {banner.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
          {/* Browser Bar */}
          <div style={{
            background: '#1e293b',
            padding: '14px 20px',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            borderBottom: '1px solid rgba(255,255,255,0.06)'
          }}>
            <div style={{ display: 'flex', gap: '6px' }}>
              {['#ef4444', '#f59e0b', '#22c55e'].map(c => (
                <div key={c} style={{ width: '12px', height: '12px', borderRadius: '50%', background: c }} />
              ))}
            </div>

            <div style={{
              flex: 1,
              background: '#0f172a',
              borderRadius: '8px',
              padding: '6px 16px',
              fontSize: '0.85rem',
              color: '#64748b',
              textAlign: 'center',
              marginLeft: '8px',
              border: '1px solid rgba(255,255,255,0.05)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '4px'
            }}>
              <Lock size={12} color="#3b82f6" />
              <span>https://app.Gurunanak Pharmacy.com/dashboard</span>
            </div>

            <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
              <Bell size={16} color="#64748b" style={{ cursor: 'pointer' }} />
              <div style={{
                width: '28px',
                height: '28px',
                borderRadius: '8px',
                background: 'linear-gradient(135deg, #3b82f6, #22c55e)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                fontSize: '12px',
                fontWeight: 'bold'
              }}>
                A
              </div>
            </div>
          </div>

          {/* Main Dashboard Layout */}
          <div style={{ display: 'flex', minHeight: '600px' }}>
            {/* Sidebar */}
            <div style={{
              width: '240px',
              background: '#0f172a',
              borderRight: '1px solid rgba(255,255,255,0.05)',
              padding: '1.5rem 0'
            }}>
              {/* Logo */}
              <div style={{ padding: '0 1.25rem 1.5rem', borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
                <div ref={logoRef} style={{ display: 'inline-block', cursor: 'pointer' }}>
                  <div style={{
                    fontWeight: '800',
                    fontSize: '0.95rem',
                    color: '#ffffff',
                    letterSpacing: '-0.02em',
                    lineHeight: '1.2'
                  }}>
                    Gurunanak <br />
                    <span style={{ color: '#3b82f6' }}>Pharmacy</span>
                  </div>
                </div>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '4px',
                  fontSize: '0.7rem',
                  color: '#64748b',
                  marginTop: '8px'
                }}>
                  <Calendar size={12} />
                  <span>FY 2025-26 · Enterprise</span>
                </div>
              </div>

              {/* Navigation Links */}
              {sideLinks.map((link, i) => (
                <div
                  key={link}
                  style={{
                    padding: '0.75rem 1.25rem',
                    fontSize: '0.85rem',
                    color: i === 0 ? '#ffffff' : '#94a3b8',
                    background: i === 0 ? 'rgba(59,130,246,0.15)' : 'transparent',
                    borderLeft: i === 0 ? '3px solid #3b82f6' : '3px solid transparent',
                    fontWeight: i === 0 ? '600' : '500',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    transition: 'all 0.2s ease'
                  }}
                >
                  {i === 0 && <BarChart3 size={16} color="#3b82f6" />}
                  {i === 1 && <DollarSign size={16} color="#94a3b8" />}
                  {i === 2 && <Package size={16} color="#94a3b8" />}
                  {i === 3 && <Activity size={16} color="#94a3b8" />}
                  {i === 4 && <CreditCard size={16} color="#94a3b8" />}
                  {i === 5 && <FileText size={16} color="#94a3b8" />}
                  {i === 6 && <PieChart size={16} color="#94a3b8" />}
                  {link}
                </div>
              ))}

              {/* Settings Link */}
              <div style={{
                padding: '0.75rem 1.25rem',
                fontSize: '0.85rem',
                color: '#64748b',
                borderTop: '1px solid rgba(255,255,255,0.07)',
                marginTop: '1rem',
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                cursor: 'pointer'
              }}>
                <Settings size={16} />
                Settings
              </div>
            </div>

            {/* Main Content */}
            <div style={{ flex: 1, background: '#f8fafc', padding: '1.5rem' }}>
              {/* Header with Search */}
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: '1.5rem'
              }}>
                <div>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: '700', color: '#0f172a', marginBottom: '0.25rem' }}>
                    Welcome back, Admin
                  </h3>
                  <p style={{ fontSize: '0.85rem', color: '#64748b', display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <Clock size={14} />
                    Last updated: 2 minutes ago
                  </p>
                </div>

                <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                  <div style={{
                    display: 'flex',
                    background: 'white',
                    border: '1px solid #e2e8f0',
                    borderRadius: '8px',
                    padding: '4px',
                    gap: '2px'
                  }}>
                    {['Day', 'Week', 'Month'].map(range => (
                      <button
                        key={range}
                        onClick={() => setSelectedTimeRange(range.toLowerCase())}
                        style={{
                          padding: '6px 12px',
                          borderRadius: '6px',
                          fontSize: '0.8rem',
                          fontWeight: '600',
                          background: selectedTimeRange === range.toLowerCase() ? '#3b82f6' : 'transparent',
                          color: selectedTimeRange === range.toLowerCase() ? 'white' : '#64748b',
                          border: 'none',
                          cursor: 'pointer',
                          transition: 'all 0.2s ease'
                        }}
                      >
                        {range}
                      </button>
                    ))}
                  </div>

                  <button style={{
                    padding: '8px 12px',
                    background: 'white',
                    border: '1px solid #e2e8f0',
                    borderRadius: '8px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    fontSize: '0.85rem',
                    color: '#475569',
                    cursor: 'pointer'
                  }}>
                    <Download size={16} />
                    Export
                  </button>
                </div>
              </div>

              {/* Metrics Cards */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(4, 1fr)',
                gap: '1rem',
                marginBottom: '1.5rem'
              }}>
                {metrics.map((metric, idx) => (
                  <SpotlightCard
                    key={idx}
                    style={{
                      background: 'white',
                      borderRadius: '12px',
                      border: '1px solid #e2e8f0',
                      boxShadow: '0 2px 4px rgba(0,0,0,0.02)',
                      cursor: 'pointer'
                    }}
                  >
                    <div
                      ref={el => metricsRef.current[idx] = el}
                      onMouseEnter={(e) => gsap.to(e.currentTarget, { scale: 1.02, duration: 0.3 })}
                      onMouseLeave={(e) => gsap.to(e.currentTarget, { scale: 1, duration: 0.3 })}
                      style={{ padding: '1.25rem' }}
                    >
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.75rem' }}>
                        <div style={{
                          width: '36px',
                          height: '36px',
                          borderRadius: '10px',
                          background: `${metric.color}15`,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center'
                        }}>
                          <metric.icon size={18} color={metric.color} />
                        </div>
                        <span style={{
                          fontSize: '0.7rem',
                          padding: '2px 6px',
                          borderRadius: '4px',
                          background: '#f1f5f9',
                          color: metric.color,
                          fontWeight: '600'
                        }}>
                          {metric.change}
                        </span>
                      </div>
                      <p style={{ fontSize: '0.8rem', color: '#64748b', marginBottom: '0.25rem' }}>{metric.label}</p>
                      <p style={{ fontSize: '1.5rem', fontWeight: '700', color: '#0f172a' }}>{metric.value}</p>
                    </div>
                  </SpotlightCard>
                ))}
              </div>

              {/* Charts Section */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: '1.5fr 1fr',
                gap: '1rem',
                marginBottom: '1.5rem'
              }}>
                {/* Sales Chart */}
                <div style={{
                  background: 'white',
                  borderRadius: '12px',
                  padding: '1.25rem',
                  border: '1px solid #e2e8f0'
                }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                    <h4 style={{ fontSize: '0.9rem', fontWeight: '600', color: '#0f172a' }}>Sales Overview</h4>
                    <button style={{
                      padding: '4px 8px',
                      background: '#f1f5f9',
                      border: 'none',
                      borderRadius: '6px',
                      fontSize: '0.7rem',
                      color: '#475569',
                      cursor: 'pointer'
                    }}>
                      <Filter size={12} />
                    </button>
                  </div>

                  {/* Bar Chart */}
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', height: '120px', gap: '4px' }}>
                    {salesData.map((data, idx) => (
                      <div key={idx} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <div
                          className="sales-bar"
                          style={{
                            width: '100%',
                            height: `${(data.sales / 70000) * 100}px`,
                            background: 'linear-gradient(180deg, #3b82f6 0%, #22c55e 100%)',
                            borderRadius: '4px 4px 0 0',
                            transition: 'height 0.3s ease'
                          }}
                        />
                        <span style={{ fontSize: '0.65rem', color: '#64748b', marginTop: '4px' }}>{data.month}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Recent Orders */}
                <div style={{
                  background: 'white',
                  borderRadius: '12px',
                  padding: '1.25rem',
                  border: '1px solid #e2e8f0'
                }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                    <h4 style={{ fontSize: '0.9rem', fontWeight: '600', color: '#0f172a' }}>Recent Orders</h4>
                    <span style={{ fontSize: '0.7rem', color: '#3b82f6', cursor: 'pointer' }}>View All</span>
                  </div>

                  <div style={{ maxHeight: '160px', overflowY: 'auto' }}>
                    {recentOrders.map((order, idx) => (
                      <div key={idx} style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        padding: '8px 0',
                        borderBottom: idx < recentOrders.length - 1 ? '1px solid #f1f5f9' : 'none'
                      }}>
                        <div>
                          <p style={{ fontSize: '0.8rem', fontWeight: '600', color: '#0f172a' }}>{order.customer}</p>
                          <p style={{ fontSize: '0.7rem', color: '#64748b' }}>{order.id}</p>
                        </div>
                        <div style={{ textAlign: 'right' }}>
                          <p style={{ fontSize: '0.8rem', fontWeight: '600', color: '#0f172a' }}>{order.amount}</p>
                          <span style={{
                            fontSize: '0.6rem',
                            padding: '2px 6px',
                            borderRadius: '4px',
                            background: `${getStatusColor(order.status)}20`,
                            color: getStatusColor(order.status),
                            fontWeight: '600'
                          }}>
                            {order.status}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Stock Status Table */}
              <div style={{
                background: 'white',
                borderRadius: '12px',
                padding: '1.25rem',
                border: '1px solid #e2e8f0'
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                  <h4 style={{ fontSize: '0.9rem', fontWeight: '600', color: '#0f172a' }}>Stock Status</h4>
                  <div style={{ display: 'flex', gap: '8px' }}>
                    <span style={{ fontSize: '0.7rem', padding: '2px 6px', background: '#22c55e20', color: '#22c55e', borderRadius: '4px' }}>
                      In Stock: 3
                    </span>
                    <span style={{ fontSize: '0.7rem', padding: '2px 6px', background: '#f59e0b20', color: '#f59e0b', borderRadius: '4px' }}>
                      Low Stock: 2
                    </span>
                  </div>
                </div>

                <table style={{ width: '100%', fontSize: '0.8rem' }}>
                  <thead>
                    <tr style={{ color: '#64748b', borderBottom: '1px solid #f1f5f9' }}>
                      <th style={{ padding: '8px 0', textAlign: 'left', fontWeight: '500' }}>Product</th>
                      <th style={{ padding: '8px 0', textAlign: 'right', fontWeight: '500' }}>Stock</th>
                      <th style={{ padding: '8px 0', textAlign: 'right', fontWeight: '500' }}>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {stockStatus.map((item, idx) => (
                      <tr key={idx} style={{ borderBottom: idx < stockStatus.length - 1 ? '1px solid #f8fafc' : 'none' }}>
                        <td style={{ padding: '10px 0' }}>
                          <p style={{ fontWeight: '500', color: '#0f172a' }}>{item.product}</p>
                        </td>
                        <td style={{ padding: '10px 0', textAlign: 'right' }}>
                          <span style={{ fontWeight: '600', color: item.stock < item.threshold ? '#f59e0b' : '#22c55e' }}>
                            {item.stock} units
                          </span>
                        </td>
                        <td style={{ padding: '10px 0', textAlign: 'right' }}>
                          <span style={{
                            padding: '2px 8px',
                            borderRadius: '4px',
                            fontSize: '0.7rem',
                            background: item.status === 'In Stock' ? '#22c55e20' : '#f59e0b20',
                            color: item.status === 'In Stock' ? '#22c55e' : '#f59e0b',
                            fontWeight: '600'
                          }}>
                            {item.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div style={{
            padding: '1rem',
            borderTop: '1px solid rgba(255,255,255,0.05)',
            background: '#1e293b',
            display: 'flex',
            justifyContent: 'center',
            gap: '12px',
            overflow: 'hidden'
          }}>
            <div
              ref={sliderRef}
              style={{
                display: 'none' // Hidden as we only need the ref to trigger slider shifts
              }}
            />
            {banners.map((banner, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentSlide(idx)}
                style={{
                  padding: '8px 16px',
                  borderRadius: '8px',
                  background: currentSlide === idx ? '#3b82f6' : 'rgba(255,255,255,0.1)',
                  border: 'none',
                  color: 'white',
                  fontSize: '0.8rem',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  transition: 'all 0.2s ease'
                }}
              >
                <span style={{
                  width: '6px',
                  height: '6px',
                  borderRadius: '50%',
                  background: currentSlide === idx ? 'white' : 'rgba(255,255,255,0.5)'
                }} />
                {banner.title}
              </button>
            ))}
          </div>
        </div>

        {/* Feature Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '1.5rem',
          marginTop: '3rem'
        }}>
          {[
            { icon: Zap, title: 'Real-time Sync', desc: 'Instant updates across all devices and platforms' },
            { icon: Globe, title: 'Multi-branch Support', desc: 'Manage multiple locations from one dashboard' },
            { icon: Shield, title: 'Auto GST Filing', desc: 'Automated GST calculations and return filing' },
            { icon: Award, title: 'Enterprise Security', desc: 'Bank-level encryption and role-based access' },
          ].map((feature, idx) => (
            <SpotlightCard
              key={idx}
              style={{
                background: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(255,255,255,0.08)',
                borderRadius: '16px',
                backdropFilter: 'blur(10px)',
                cursor: 'pointer'
              }}
            >
              <div
                ref={el => featuresRef.current[idx] = el}
                onMouseEnter={(e) => gsap.to(e.currentTarget, { y: -5, duration: 0.3 })}
                onMouseLeave={(e) => gsap.to(e.currentTarget, { y: 0, duration: 0.3 })}
                style={{ padding: '1.5rem' }}
              >
                <div style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '12px',
                  background: 'rgba(59,130,246,0.15)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '1rem'
                }}>
                  <feature.icon size={24} color="#3b82f6" />
                </div>
                <h4 style={{ fontSize: '1rem', fontWeight: '600', color: '#ffffff', marginBottom: '0.5rem' }}>
                  {feature.title}
                </h4>
                <p style={{ fontSize: '0.85rem', color: '#94a3b8', lineHeight: '1.5' }}>
                  {feature.desc}
                </p>
              </div>
            </SpotlightCard>
          ))}
        </div>

        {/* CTA Section */}
        <div style={{
          marginTop: '4rem',
          textAlign: 'center',
          padding: '3rem',
          background: 'linear-gradient(135deg, rgba(59,130,246,0.1) 0%, rgba(34,197,94,0.1) 100%)',
          borderRadius: '24px',
          border: '1px solid rgba(255,255,255,0.05)'
        }}>
          <h3 style={{ fontSize: '2rem', fontWeight: '700', color: '#ffffff', marginBottom: '1rem' }}>
            Ready to Transform Your Business?
          </h3>
          <p style={{ fontSize: '1rem', color: '#94a3b8', maxWidth: '500px', margin: '0 auto 2rem' }}>
            Join thousands of businesses already using Gurunanak Pharmacy to streamline their operations
          </p>
          <button
            ref={ctaRef}
            style={{
              padding: '1rem 2.5rem',
              background: 'linear-gradient(135deg, #3b82f6 0%, #22c55e 100%)',
              border: 'none',
              borderRadius: '12px',
              color: 'white',
              fontSize: '1rem',
              fontWeight: '600',
              cursor: 'pointer',
              boxShadow: '0 8px 20px rgba(59,130,246,0.3)',
              transition: 'transform 0.1s ease',
              position: 'relative',
              zIndex: 10
            }}
          >
            Start Free Trial
          </button>
        </div>
      </div>

      <style>
        {`
          @keyframes pulse {
            0% { opacity: 0.5; transform: scale(1); }
            100% { opacity: 0.8; transform: scale(1.2); }
          }
        `}
      </style>
    </section>
  )
}
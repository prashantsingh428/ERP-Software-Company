import React, { useState } from 'react';

const ProductPage = ({ onGoHome }) => {
    const [searchQuery, setSearchQuery] = useState('');
    const [sortBy, setSortBy] = useState('popular');
    const [wishlist, setWishlist] = useState([]);
    const [cartCount, setCartCount] = useState(0);

    const products = [
        {
            id: 1,
            name: "Paracetamol 500mg Tablets (Strip of 10)",
            category: "Pain Relief",
            price: 25,
            originalPrice: 35,
            rating: 4.8,
            reviews: 5420,
            badge: "Bestseller",
            discount: 28,
            image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&h=300&fit=crop&q=80"
        },
        {
            id: 2,
            name: "Vitamin C 1000mg Effervescent Tablets",
            category: "Vitamins & Supplements",
            price: 199,
            originalPrice: 280,
            rating: 4.7,
            reviews: 1890,
            badge: "Top Rated",
            discount: 29,
            image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop&q=80"
        },
        {
            id: 3,
            name: "Digital Blood Pressure Monitor",
            category: "Medical Devices",
            price: 1299,
            originalPrice: 1799,
            rating: 4.6,
            reviews: 987,
            badge: "Premium",
            discount: 28,
            image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=400&h=300&fit=crop&q=80"
        },
        {
            id: 4,
            name: "Antiseptic Hand Sanitizer 500ml",
            category: "Hygiene",
            price: 129,
            originalPrice: 180,
            rating: 4.5,
            reviews: 4100,
            badge: "Hot Deal",
            discount: 28,
            image: "https://images.unsplash.com/photo-1584744982491-665216d95f8b?w=400&h=300&fit=crop&q=80"
        },
        {
            id: 5,
            name: "Omega-3 Fish Oil Capsules (60 Softgels)",
            category: "Vitamins & Supplements",
            price: 349,
            originalPrice: 499,
            rating: 4.6,
            reviews: 1320,
            badge: "Best Value",
            discount: 30,
            image: "https://images.unsplash.com/photo-1550572017-edd951b55104?w=400&h=300&fit=crop&q=80"
        },
        {
            id: 7,
            name: "Cough & Cold Syrup 100ml",
            category: "Cold & Cough",
            price: 85,
            originalPrice: 115,
            rating: 4.4,
            reviews: 1120,
            badge: "Popular",
            discount: 26,
            image: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=400&h=300&fit=crop&q=80"
        },
        {
            id: 8,
            name: "Complete First Aid Kit — 32 Items",
            category: "First Aid",
            price: 699,
            originalPrice: 999,
            rating: 4.9,
            reviews: 756,
            badge: "Essential",
            discount: 30,
            image: "https://images.unsplash.com/photo-1603398938378-e54eab446dde?w=400&h=300&fit=crop&q=80"
        },
        {
            id: 10,
            name: "3-Ply Surgical Face Masks (Box of 50)",
            category: "Hygiene",
            price: 199,
            originalPrice: 299,
            rating: 4.3,
            reviews: 5600,
            badge: "Value Pack",
            discount: 33,
            image: "https://images.unsplash.com/photo-1584634731339-252c581abfc5?w=400&h=300&fit=crop&q=80"
        },
        {
            id: 11,
            name: "Fingertip Pulse Oximeter",
            category: "Medical Devices",
            price: 899,
            originalPrice: 1299,
            rating: 4.8,
            reviews: 1540,
            badge: "Top Rated",
            discount: 31,
            image: "https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?w=400&h=300&fit=crop&q=80"
        },
        {
            id: 12,
            name: "Antacid Mint Chewable Tablets (20 pcs)",
            category: "Digestive Health",
            price: 55,
            originalPrice: 80,
            rating: 4.4,
            reviews: 890,
            badge: "Fast Relief",
            discount: 31,
            image: "https://images.unsplash.com/photo-1471864190281-a93a3070b6de?w=400&h=300&fit=crop&q=80"
        },
        {
            id: 13,
            name: "Latex Examination Gloves (100 pcs)",
            category: "Hygiene",
            price: 299,
            originalPrice: 420,
            rating: 4.2,
            reviews: 630,
            badge: "Professional",
            discount: 29,
            image: "https://images.unsplash.com/photo-1585421514284-efb74c2b69ba?w=400&h=300&fit=crop&q=80"
        },
        {
            id: 15,
            name: "Glucometer with 25 Test Strips",
            category: "Diabetic Care",
            price: 1499,
            originalPrice: 2099,
            rating: 4.7,
            reviews: 980,
            badge: "Diabetic Care",
            discount: 29,
            image: "https://images.unsplash.com/photo-1631549916768-4119b2e5f926?w=400&h=300&fit=crop&q=80"
        },
        {
            id: 16,
            name: "Ibuprofen 400mg Tablets (Strip of 10)",
            category: "Pain Relief",
            price: 32,
            originalPrice: 45,
            rating: 4.7,
            reviews: 3200,
            badge: "Fast Relief",
            discount: 29,
            image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&h=300&fit=crop&q=80&sat=-50"
        },
        {
            id: 17,
            name: "Bandage Crepe 15cm (Pack of 3)",
            category: "First Aid",
            price: 149,
            originalPrice: 210,
            rating: 4.3,
            reviews: 560,
            badge: "New",
            discount: 29,
            image: "https://images.unsplash.com/photo-1603398938378-e54eab446dde?w=400&h=300&fit=crop&q=80&hue=30"
        },
        {
            id: 18,
            name: "Probiotic Capsules 30 Billion CFU",
            category: "Digestive Health",
            price: 599,
            originalPrice: 849,
            rating: 4.5,
            reviews: 720,
            badge: "Gut Health",
            discount: 29,
            image: "https://images.unsplash.com/photo-1550572017-edd951b55104?w=400&h=300&fit=crop&q=80&hue=60"
        },
        {
            id: 19,
            name: "Nasal Saline Spray 100ml",
            category: "Cold & Cough",
            price: 189,
            originalPrice: 260,
            rating: 4.4,
            reviews: 430,
            badge: "Sinus Relief",
            discount: 27,
            image: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=400&h=300&fit=crop&q=80&sat=20"
        },
        {
            id: 22,
            name: "Heating Pad — Electric Reusable",
            category: "Pain Relief",
            price: 799,
            originalPrice: 1099,
            rating: 4.7,
            reviews: 650,
            badge: "Muscle Relief",
            discount: 27,
            image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=400&h=300&fit=crop&q=80&hue=60"
        },
    ];

    const filteredProducts = products
        .filter(p => p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            p.category.toLowerCase().includes(searchQuery.toLowerCase()))
        .sort((a, b) => {
            if (sortBy === 'price-low') return a.price - b.price;
            if (sortBy === 'price-high') return b.price - a.price;
            if (sortBy === 'rating') return b.rating - a.rating;
            return b.reviews - a.reviews;
        });

    const toggleWishlist = (id) =>
        setWishlist(prev => prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]);

    return (
        <div style={{ minHeight: '100vh', background: '#f8fafc', fontFamily: "'Inter', sans-serif", paddingTop: '20px' }}>

            {/* ── SEARCH & FILTER SUBHEADER ── */}
            <div style={{ 
                maxWidth: '1340px', margin: '0 auto 2rem', padding: '0 22px',
                display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1.5rem'
            }}>
                <div style={{ flex: 1, maxWidth: '600px', position: 'relative' }}>
                    <div style={{
                        display: 'flex', alignItems: 'center', background: '#ffffff',
                        border: '1px solid #e2e8f0', borderRadius: '12px', padding: '0 1rem',
                        boxShadow: '0 4px 12px rgba(15, 23, 42, 0.04)', transition: 'border-color 0.2s'
                    }}>
                        <svg width="18" height="18" fill="none" stroke="#64748b" strokeWidth="2" viewBox="0 0 24 24">
                            <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
                        </svg>
                        <input
                            type="text"
                            placeholder="Search medicines, devices, or categories..."
                            style={{ border: 'none', background: 'transparent', outline: 'none', fontSize: '0.95rem', color: '#1e293b', width: '100%', padding: '12px' }}
                            value={searchQuery}
                            onChange={e => setSearchQuery(e.target.value)}
                        />
                    </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexShrink: 0 }}>
                    <span style={{ fontSize: '0.85rem', fontWeight: '600', color: '#64748b' }}>Sort By:</span>
                    <select value={sortBy} onChange={e => setSortBy(e.target.value)} style={{
                        padding: '10px 16px', border: '1px solid #e2e8f0', borderRadius: '10px',
                        fontSize: '0.9rem', outline: 'none', background: '#fff', color: '#1e293b', cursor: 'pointer',
                        boxShadow: '0 2px 8px rgba(0,0,0,0.02)'
                    }}>
                        <option value="popular">Most Popular</option>
                        <option value="price-low">Price: Low → High</option>
                        <option value="price-high">Price: High → Low</option>
                        <option value="rating">Top Rated</option>
                    </select>

                    <div style={{ position: 'relative', cursor: 'pointer', transition: 'transform 0.2s' }} onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.05)'} onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}>
                        <div style={{ 
                            background: '#1e40af', color: '#fff', width: '44px', height: '44px', 
                            borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center',
                            boxShadow: '0 4px 12px rgba(30, 64, 175, 0.2)' 
                        }}>
                            <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                <circle cx="9" cy="21" r="1" /><circle cx="20" cy="21" r="1" />
                                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
                            </svg>
                        </div>
                        {cartCount > 0 && (
                            <span style={{
                                position: 'absolute', top: '-8px', right: '-8px',
                                background: '#ef4444', color: '#fff', fontSize: '10px',
                                borderRadius: '50%', width: '20px', height: '20px',
                                display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '700',
                                border: '2px solid #fff'
                            }}>{cartCount}</span>
                        )}
                    </div>
                </div>
            </div>

            {/* ── MAIN CONTENT ── */}
            <main style={{ maxWidth: '1340px', margin: '0 auto', padding: '0 22px 60px' }}>
                
                {/* Product Count */}
                <p style={{ fontSize: '0.85rem', color: '#64748b', marginBottom: '1.5rem', fontWeight: '500' }}>
                    Showing <strong style={{ color: '#0f172a' }}>{filteredProducts.length}</strong> available items
                </p>

                {/* ── GRID ── */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '24px' }}>
                    {filteredProducts.map((product, index) => (
                        <React.Fragment key={product.id}>
                            {/* Insert Banner after 8 products */}
                            {index === 8 && (
                                <div style={{ 
                                    gridColumn: '1 / -1', 
                                    margin: '1.5rem 0', 
                                    borderRadius: '20px', 
                                    overflow: 'hidden',
                                    boxShadow: '0 10px 30px rgba(15, 23, 42, 0.1)',
                                    position: 'relative',
                                    minHeight: '280px',
                                    background: '#0f172a'
                                }}>
                                    <img 
                                        src="/pharma_catalog_banner.png" 
                                        alt="Pharma Solutions" 
                                        style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                                    />
                                    <div style={{
                                        position: 'absolute', inset: 0,
                                        background: 'linear-gradient(90deg, rgba(15,23,42,0.8) 0%, rgba(15,23,42,0) 60%)',
                                        display: 'flex', alignItems: 'center', padding: '0 3rem'
                                    }}>
                                        <div style={{ maxWidth: '400px' }}>
                                            <h2 style={{ color: '#ffffff', fontSize: '2rem', fontWeight: '800', lineHeight: '1.2', marginBottom: '1rem' }}>
                                                Wholesale Pharma <br />
                                                <span style={{ color: '#3b82f6' }}>Supply Solutions</span>
                                            </h2>
                                            <p style={{ color: '#94a3b8', fontSize: '0.95rem', marginBottom: '1.5rem' }}>
                                                Specialized medical kits and bulk supply for healthcare providers.
                                            </p>
                                            <button className="btn-primary" style={{ padding: '0.7rem 1.5rem' }}>
                                                Enquire Now
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            )}

                            <div
                                style={{
                                    background: '#ffffff', borderRadius: '16px',
                                    overflow: 'hidden', transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                                    border: '1px solid #f1f5f9', cursor: 'pointer',
                                    display: 'flex', flexDirection: 'column'
                                }}
                                onMouseEnter={e => {
                                    e.currentTarget.style.boxShadow = '0 12px 24px rgba(15,23,42,0.08)';
                                    e.currentTarget.style.borderColor = '#3b82f6';
                                    e.currentTarget.style.transform = 'translateY(-4px)';
                                    const img = e.currentTarget.querySelector('.prod-img');
                                    if (img) img.style.transform = 'scale(1.05)';
                                }}
                                onMouseLeave={e => {
                                    e.currentTarget.style.boxShadow = 'none';
                                    e.currentTarget.style.borderColor = '#f1f5f9';
                                    e.currentTarget.style.transform = 'none';
                                    const img = e.currentTarget.querySelector('.prod-img');
                                    if (img) img.style.transform = 'scale(1)';
                                }}
                            >
                                {/* Image Area */}
                                <div style={{ position: 'relative', width: '100%', paddingTop: '75%', overflow: 'hidden', background: '#f8fafc' }}>
                                    <img
                                        className="prod-img"
                                        src={product.image}
                                        alt={product.name}
                                        style={{
                                            position: 'absolute', top: 0, left: 0,
                                            width: '100%', height: '100%', objectFit: 'cover',
                                            transition: 'transform 0.4s ease'
                                        }}
                                        onError={e => {
                                            e.target.style.display = 'none';
                                            e.target.parentNode.style.background = '#f1f5f9';
                                            e.target.parentNode.innerHTML += `<div style="position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);text-align:center;color:#64748b;font-size:12px;font-weight:600;">💊<br/>${product.category}</div>`;
                                        }}
                                    />
                                    {/* Badges */}
                                    {product.badge && (
                                        <div style={{
                                            position: 'absolute', top: '12px', left: '12px',
                                            background: '#3b82f6', color: '#fff',
                                            fontSize: '10px', fontWeight: '700', padding: '4px 10px',
                                            borderRadius: '6px', letterSpacing: '0.05em', textTransform: 'uppercase'
                                        }}>{product.badge}</div>
                                    )}
                                    <div style={{
                                        position: 'absolute', top: '12px', right: '12px',
                                        background: 'rgba(239, 68, 68, 0.9)', color: '#fff',
                                        fontSize: '11px', fontWeight: '800', padding: '4px 8px', borderRadius: '6px'
                                    }}>-{product.discount}%</div>
                                    
                                    {/* Wishlist */}
                                    <button
                                        onClick={(e) => { e.stopPropagation(); toggleWishlist(product.id); }}
                                        style={{
                                            position: 'absolute', bottom: '12px', right: '12px',
                                            background: 'rgba(255,255,255,0.9)', border: 'none', borderRadius: '50%',
                                            width: '36px', height: '36px', display: 'flex', alignItems: 'center',
                                            justifyContent: 'center', cursor: 'pointer',
                                            boxShadow: '0 4px 12px rgba(0,0,0,0.1)', fontSize: '18px',
                                            backdropFilter: 'blur(4px)', transition: 'all 0.2s'
                                        }}
                                        onMouseEnter={e => e.currentTarget.style.background = '#fff'}
                                        onMouseLeave={e => e.currentTarget.style.background = 'rgba(255,255,255,0.9)'}
                                    >{wishlist.includes(product.id) ? '❤️' : '🤍'}</button>
                                </div>

                                {/* Body */}
                                <div style={{ padding: '18px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '8px' }}>
                                        <div style={{ color: '#f59e0b', display: 'flex', alignItems: 'center', gap: '1px' }}>
                                            <span style={{ fontSize: '14px' }}>★</span>
                                            <span style={{ fontSize: '0.85rem', fontWeight: '700', color: '#1e293b' }}>{product.rating}</span>
                                        </div>
                                        <span style={{ fontSize: '0.75rem', color: '#94a3b8' }}>({product.reviews.toLocaleString()} reviews)</span>
                                    </div>

                                    <h3 style={{ fontSize: '1rem', fontWeight: '700', color: '#0f172a', marginBottom: '12px', lineHeight: '1.4', height: '2.8rem', overflow: 'hidden', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical' }}>
                                        {product.name}
                                    </h3>

                                    <div style={{ marginTop: 'auto' }}>
                                        <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px', marginBottom: '16px' }}>
                                            <span style={{ fontSize: '1.4rem', fontWeight: '800', color: '#0f172a' }}>₹{product.price}</span>
                                            <span style={{ fontSize: '0.9rem', color: '#94a3b8', textDecoration: 'line-through' }}>₹{product.originalPrice}</span>
                                        </div>

                                        <button
                                            onClick={(e) => { e.stopPropagation(); setCartCount(c => c + 1); }}
                                            style={{
                                                width: '100%', background: '#1e40af', color: '#ffffff',
                                                border: 'none', borderRadius: '10px', padding: '12px',
                                                fontSize: '0.9rem', fontWeight: '700', cursor: 'pointer',
                                                display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px',
                                                transition: 'all 0.2s'
                                            }}
                                            onMouseEnter={e => e.currentTarget.style.background = '#1e3a8a'}
                                            onMouseLeave={e => e.currentTarget.style.background = '#1e40af'}
                                        >
                                            <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                                                <path d="M12 5v14M5 12h14" />
                                            </svg>
                                            Add to Cart
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </React.Fragment>
                    ))}
                </div>

                {/* Empty state */}
                {filteredProducts.length === 0 && (
                    <div style={{ textAlign: 'center', padding: '100px 0' }}>
                        <div style={{ fontSize: '64px', marginBottom: '1.5rem' }}>🔍</div>
                        <h3 style={{ fontSize: '1.5rem', fontWeight: '700', color: '#0f172a', marginBottom: '0.5rem' }}>No products found</h3>
                        <p style={{ color: '#64748b', fontSize: '1rem', marginBottom: '2rem' }}>We couldn't find any results for "<strong>{searchQuery}</strong>"</p>
                        <button onClick={() => setSearchQuery('')} className="btn-primary" style={{ padding: '0.75rem 2rem' }}>
                            Clear Search Filters
                        </button>
                    </div>
                )}
            </main>
        </div>
    );
};

export default ProductPage;

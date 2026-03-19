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
        <div style={{ minHeight: '100vh', background: '#f0f7f4', fontFamily: "'Segoe UI', Tahoma, sans-serif" }}>

            {/* ── HEADER ── */}
            <header style={{
                background: '#fff', boxShadow: '0 2px 12px rgba(0,0,0,0.08)',
                position: 'sticky', top: 0, zIndex: 100,
                padding: '0 36px', display: 'flex', alignItems: 'center',
                justifyContent: 'space-between', height: 66, gap: 20
            }}>
                {/* Brand */}
                <div onClick={onGoHome} style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                    <div style={{ width: '32px', height: '32px', borderRadius: '6px', background: '#1e40af', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <span style={{ color: 'white', fontWeight: '900', fontSize: '1rem' }}>G</span>
                    </div>
                    <span style={{ fontWeight: '800', fontSize: '1rem', color: '#0f172a' }}>Gurunanak <span style={{ color: '#3b82f6' }}>Pharmacy</span></span>
                </div>

                {/* Search */}
                <div style={{
                    flex: 1, maxWidth: 520, display: 'flex', alignItems: 'center',
                    border: '1.5px solid #d1fae5', borderRadius: 12,
                    padding: '0 14px', background: '#f9fafb', gap: 10
                }}>
                    <svg width="17" height="17" fill="none" stroke="#16a34a" strokeWidth="2" viewBox="0 0 24 24">
                        <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
                    </svg>
                    <input
                        type="text"
                        placeholder="Search medicines, devices, supplements..."
                        style={{ border: 'none', background: 'transparent', outline: 'none', fontSize: 14, color: '#374151', width: '100%', padding: '11px 0' }}
                        value={searchQuery}
                        onChange={e => setSearchQuery(e.target.value)}
                    />
                    {searchQuery && (
                        <button onClick={() => setSearchQuery('')} style={{ border: 'none', background: 'none', cursor: 'pointer', color: '#9ca3af', fontSize: 18, lineHeight: 1 }}>×</button>
                    )}
                </div>

                {/* Right controls */}
                <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                    <select value={sortBy} onChange={e => setSortBy(e.target.value)} style={{
                        padding: '9px 14px', border: '1.5px solid #d1fae5', borderRadius: 10,
                        fontSize: 13, outline: 'none', background: '#fff', color: '#374151', cursor: 'pointer'
                    }}>
                        <option value="popular">Most Popular</option>
                        <option value="price-low">Price: Low → High</option>
                        <option value="price-high">Price: High → Low</option>
                        <option value="rating">Top Rated</option>
                    </select>

                    <button
                        onClick={() => setCartCount(c => c + 1)}
                        style={{
                            position: 'relative', background: '#16a34a', border: 'none',
                            borderRadius: 12, color: '#fff', width: 46, height: 46,
                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                            cursor: 'pointer', fontSize: 20, flexShrink: 0
                        }}>
                        <svg width="22" height="22" fill="none" stroke="#fff" strokeWidth="2" viewBox="0 0 24 24">
                            <circle cx="9" cy="21" r="1" /><circle cx="20" cy="21" r="1" />
                            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
                        </svg>
                        {cartCount > 0 && (
                            <span style={{
                                position: 'absolute', top: -7, right: -7,
                                background: '#ef4444', color: '#fff', fontSize: 11,
                                borderRadius: '50%', width: 20, height: 20,
                                display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700
                            }}>{cartCount}</span>
                        )}
                    </button>
                </div>
            </header>

            {/* ── MAIN ── */}
            <main style={{ maxWidth: 1340, margin: '0 auto', padding: '28px 22px' }}>

                <p style={{ fontSize: 14, color: '#64748b', marginBottom: 22, fontWeight: 500 }}>
                    Showing <strong style={{ color: '#0f172a' }}>{filteredProducts.length}</strong> products
                </p>

                {/* ── GRID ── */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(255px, 1fr))', gap: 22 }}>
                    {filteredProducts.map(product => (
                        <div
                            key={product.id}
                            style={{
                                background: '#fff', borderRadius: 18,
                                boxShadow: '0 2px 8px rgba(0,0,0,0.07)',
                                overflow: 'hidden', transition: 'all 0.25s ease',
                                border: '1px solid #ecfdf5', cursor: 'pointer'
                            }}
                            onMouseEnter={e => {
                                e.currentTarget.style.boxShadow = '0 14px 36px rgba(22,163,74,0.15)';
                                e.currentTarget.style.transform = 'translateY(-5px)';
                                const img = e.currentTarget.querySelector('.prod-img');
                                if (img) img.style.transform = 'scale(1.08)';
                            }}
                            onMouseLeave={e => {
                                e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.07)';
                                e.currentTarget.style.transform = 'none';
                                const img = e.currentTarget.querySelector('.prod-img');
                                if (img) img.style.transform = 'scale(1)';
                            }}
                        >
                            {/* Image area */}
                            <div style={{ position: 'relative', width: '100%', paddingTop: '68%', overflow: 'hidden', background: '#f0fdf4' }}>
                                <img
                                    className="prod-img"
                                    src={product.image}
                                    alt={product.name}
                                    style={{
                                        position: 'absolute', top: 0, left: 0,
                                        width: '100%', height: '100%', objectFit: 'cover',
                                        transition: 'transform 0.35s ease'
                                    }}
                                    onError={e => {
                                        e.target.style.display = 'none';
                                        e.target.parentNode.style.background = '#dcfce7';
                                        e.target.parentNode.innerHTML += `<div style="position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);text-align:center;color:#16a34a;font-size:13px;font-weight:600;padding:10px">💊<br/>${product.category}</div>`;
                                    }}
                                />
                                {/* Badges */}
                                {product.badge && (
                                    <span style={{
                                        position: 'absolute', top: 12, left: 12,
                                        background: '#16a34a', color: '#fff',
                                        fontSize: 10, fontWeight: 700, padding: '4px 10px',
                                        borderRadius: 6, letterSpacing: 0.3
                                    }}>{product.badge}</span>
                                )}
                                <span style={{
                                    position: 'absolute', top: 12, right: 12,
                                    background: '#ef4444', color: '#fff',
                                    fontSize: 11, fontWeight: 700, padding: '4px 8px', borderRadius: 6
                                }}>-{product.discount}%</span>
                                {/* Wishlist */}
                                <button
                                    onClick={() => toggleWishlist(product.id)}
                                    style={{
                                        position: 'absolute', bottom: 12, right: 12,
                                        background: '#fff', border: 'none', borderRadius: '50%',
                                        width: 34, height: 34, display: 'flex', alignItems: 'center',
                                        justifyContent: 'center', cursor: 'pointer',
                                        boxShadow: '0 2px 8px rgba(0,0,0,0.15)', fontSize: 16
                                    }}
                                >{wishlist.includes(product.id) ? '❤️' : '🤍'}</button>
                            </div>

                            {/* Card body */}
                            <div style={{ padding: '14px 16px 18px' }}>
                                <p style={{ fontSize: 10, color: '#16a34a', textTransform: 'uppercase', letterSpacing: 1.2, fontWeight: 700, marginBottom: 5 }}>
                                    {product.category}
                                </p>
                                <h2 style={{ fontSize: 14, fontWeight: 700, color: '#0f172a', marginBottom: 10, lineHeight: 1.45, minHeight: 40 }}>
                                    {product.name}
                                </h2>

                                {/* Stars */}
                                <div style={{ display: 'flex', alignItems: 'center', gap: 2, marginBottom: 14 }}>
                                    {[1, 2, 3, 4, 5].map(i => (
                                        <span key={i} style={{ color: i <= Math.floor(product.rating) ? '#f59e0b' : '#e2e8f0', fontSize: 13 }}>★</span>
                                    ))}
                                    <span style={{ fontSize: 11, color: '#94a3b8', marginLeft: 4 }}>({product.reviews.toLocaleString()})</span>
                                </div>

                                {/* Price + Cart */}
                                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                    <div>
                                        <span style={{ fontSize: 22, fontWeight: 800, color: '#0f172a' }}>₹{product.price}</span>
                                        <span style={{ fontSize: 13, color: '#94a3b8', textDecoration: 'line-through', marginLeft: 6 }}>₹{product.originalPrice}</span>
                                    </div>
                                    <button
                                        onClick={() => setCartCount(c => c + 1)}
                                        style={{
                                            background: '#16a34a', border: 'none', borderRadius: 11,
                                            color: '#fff', width: 40, height: 40,
                                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                                            cursor: 'pointer', flexShrink: 0, transition: 'background 0.18s'
                                        }}
                                        onMouseEnter={e => e.currentTarget.style.background = '#15803d'}
                                        onMouseLeave={e => e.currentTarget.style.background = '#16a34a'}
                                    >
                                        <svg width="18" height="18" fill="none" stroke="#fff" strokeWidth="2.2" viewBox="0 0 24 24">
                                            <circle cx="9" cy="21" r="1" /><circle cx="20" cy="21" r="1" />
                                            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Empty state */}
                {filteredProducts.length === 0 && (
                    <div style={{ textAlign: 'center', padding: '80px 0' }}>
                        <div style={{ fontSize: 52 }}>💊</div>
                        <p style={{ fontSize: 18, color: '#64748b', marginTop: 14 }}>No products found for "<strong>{searchQuery}</strong>"</p>
                        <button onClick={() => setSearchQuery('')} style={{
                            marginTop: 18, padding: '11px 30px', background: '#16a34a',
                            color: '#fff', border: 'none', borderRadius: 10, fontSize: 15, cursor: 'pointer'
                        }}>Clear Search</button>
                    </div>
                )}
            </main>
        </div>
    );
};

export default ProductPage;

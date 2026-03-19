import React from 'react';

const WhatsAppButton = () => {
    const phoneNumber = "919999999999"; // Replace with actual number
    const message = "Hi! I'm interested in learning more about Gurunanak Pharmacy.";
    const waLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    return (
        <a
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            style={{
                position: 'fixed',
                bottom: '30px',
                right: '30px',
                width: '60px',
                height: '60px',
                backgroundColor: '#25D366',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.25)',
                zIndex: 1000,
                transition: 'all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                textDecoration: 'none'
            }}
            onMouseEnter={e => {
                e.currentTarget.style.transform = 'scale(1.1) translateY(-5px)';
                e.currentTarget.style.boxShadow = '0 8px 20px rgba(37, 211, 102, 0.4)';
            }}
            onMouseLeave={e => {
                e.currentTarget.style.transform = 'scale(1) translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.25)';
            }}
        >
            <svg 
                viewBox="0 0 24 24" 
                width="32" 
                height="32" 
                fill="white"
            >
                <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766 0-3.18-2.587-5.771-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217s.231.001.332.005c.101.004.237-.038.37.283.144.35.491 1.197.534 1.283.044.087.073.188.014.303-.058.116-.087.188-.173.289l-.26.303c-.087.101-.177.211-.077.383.1.173.444.732.952 1.185.656.584 1.206.765 1.379.852.173.087.274.072.375-.044.101-.116.433-.505.549-.679.116-.173.231-.144.39-.087s1.011.477 1.184.563c.173.087.289.13.332.202.045.072.045.419-.1.824z" />
                <path d="M12.031 1.062c-6.031 0-10.938 4.907-10.938 10.938 0 2.427.793 4.667 2.14 6.479l-1.393 5.093 5.215-1.372c1.721.936 3.7 1.472 5.808 1.472 6.031 0 10.938-4.907 10.938-10.938 0-6.031-4.907-10.938-10.938-10.938zm0 19.82c-1.895 0-3.664-.525-5.176-1.432l-.371-.223-2.909.766.78-2.848-.244-.388c-.991-1.579-1.569-3.454-1.569-5.464 0-5.367 4.365-9.731 9.731-9.731s9.731 4.364 9.731 9.731c.001 5.368-4.364 9.732-9.731 9.732z" />
            </svg>
            
            {/* Tooltip */}
            <span style={{
                position: 'absolute',
                right: '75px',
                backgroundColor: '#0f172a',
                color: 'white',
                padding: '8px 15px',
                borderRadius: '8px',
                fontSize: '13px',
                fontWeight: '600',
                whiteSpace: 'nowrap',
                opacity: 0,
                transform: 'translateX(10px)',
                transition: 'all 0.3s',
                pointerEvents: 'none',
                boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
            }} className="wa-tooltip">
                Chat with us
                <div style={{
                    position: 'absolute',
                    top: '50%',
                    right: '-6px',
                    transform: 'translateY(-50%)',
                    borderTop: '6px solid transparent',
                    borderBottom: '6px solid transparent',
                    borderLeft: '6px solid #0f172a'
                }} />
            </span>

            <style>{`
                a:hover .wa-tooltip {
                    opacity: 1 !important;
                    transform: translateX(0) !important;
                }
            `}</style>
        </a>
    );
};

export default WhatsAppButton;

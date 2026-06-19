import { useState, useEffect } from 'react';

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="nav-logo text-gradient">Kalpa.</div>
            <ul className="nav-links">
                <li><a href="#destinations">Destinations</a></li>
                <li><a href="#accommodations">Stays</a></li>
                <li><a href="#planning">Planning</a></li>
            </ul>
            <div className="nav-actions">
                <span className="lang-switch" style={{ fontWeight: 600, fontSize: "0.9rem" }}>EN | HI</span>
                <button className="btn-primary">Visit Kalpa</button>
            </div>
        </nav>
    );
}

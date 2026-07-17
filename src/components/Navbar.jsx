import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);

    const closeMobile = () => setMobileOpen(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <Link to="/" className="nav-logo text-gradient" onClick={closeMobile}>Kalpa.</Link>
            <button
                className={`mobile-menu-btn ${mobileOpen ? 'open' : ''}`}
                onClick={() => setMobileOpen(!mobileOpen)}
                aria-label="Toggle navigation"
            >
                <span></span>
                <span></span>
                <span></span>
            </button>
            <ul className={`nav-links ${mobileOpen ? 'mobile-open' : ''}`}>
                <li><Link to="/" onClick={closeMobile}>Home</Link></li>
                <li><Link to="/experiences" onClick={closeMobile}>Experiences</Link></li>
                <li><Link to="/events" onClick={closeMobile}>Events</Link></li>
                <li><Link to="/stays" onClick={closeMobile}>Stays</Link></li>
                <li><Link to="/reviews" onClick={closeMobile}>Reviews</Link></li>
                <li><Link to="/planning" onClick={closeMobile}>Planning</Link></li>
                <li><Link to="/faq" onClick={closeMobile}>FAQ</Link></li>
                <li><Link to="/contact" onClick={closeMobile}>Contact</Link></li>
            </ul>
            <div className="nav-actions">
                <span className="lang-switch" style={{ fontWeight: 600, fontSize: "0.9rem" }}>EN | HI</span>
                <Link to="/contact" className="btn-primary" onClick={closeMobile}>Plan Visit</Link>
            </div>
        </nav>
    );
}

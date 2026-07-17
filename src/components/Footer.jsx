import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
    const [email, setEmail] = useState('');

    return (
        <footer className="footer">
            <div className="footer-top">
                <div className="container footer-top__grid">
                    <div className="footer-brand">
                        <Link to="/" className="footer-logo text-gradient">Kalpa.</Link>
                        <p className="footer-tagline">
                            Where the sacred Kinner Kailash touches the sky.
                        </p>
                        <div className="footer-social">
                            <a href="#" className="footer-social__link" aria-label="Instagram">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                                </svg>
                            </a>
                            <a href="#" className="footer-social__link" aria-label="YouTube">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19.1c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
                                    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
                                </svg>
                            </a>
                            <a href="#" className="footer-social__link" aria-label="Facebook">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                                </svg>
                            </a>
                        </div>
                    </div>

                    <div className="footer-links-group">
                        <h4>Explore</h4>
                        <ul>
                            <li><Link to="/experiences">Experiences</Link></li>
                            <li><Link to="/events">Events & Festivals</Link></li>
                            <li><Link to="/stays">Stays & Hospitality</Link></li>
                            <li><Link to="/reviews">Traveler Stories</Link></li>
                        </ul>
                    </div>

                    <div className="footer-links-group">
                        <h4>Plan Your Trip</h4>
                        <ul>
                            <li><Link to="/planning">Travel Information</Link></li>
                            <li><Link to="/faq">Frequently Asked Questions</Link></li>
                            <li><Link to="/contact">Contact & Inquiries</Link></li>
                        </ul>
                    </div>

                    <div className="footer-newsletter">
                        <h4>Stay Connected</h4>
                        <p>Get seasonal highlights, festival dates, and travel tips delivered to your inbox.</p>
                        <form className="footer-newsletter__form" onSubmit={(e) => e.preventDefault()}>
                            <input
                                type="email"
                                placeholder="Your email address"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="footer-newsletter__input"
                            />
                            <button type="submit" className="footer-newsletter__btn">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                    <line x1="5" y1="12" x2="19" y2="12" />
                                    <polyline points="12 5 19 12 12 19" />
                                </svg>
                            </button>
                        </form>
                    </div>
                </div>
            </div>

            <div className="footer-contact-strip">
                <div className="container footer-contact-strip__grid">
                    <div className="footer-contact-item">
                        <span className="footer-contact-item__label">Location</span>
                        <span>Reckong Peo, Kinnaur, Himachal Pradesh, India</span>
                    </div>
                    <div className="footer-contact-item">
                        <span className="footer-contact-item__label">Email</span>
                        <a href="mailto:hello@kalpa-tourism.in">hello@kalpa-tourism.in</a>
                    </div>
                    <div className="footer-contact-item">
                        <span className="footer-contact-item__label">Emergency</span>
                        <a href="tel:+911789222345">+91-1789-222345</a>
                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                <div className="container footer-bottom__inner">
                    <p>&copy; {new Date().getFullYear()} Kalpa Tourism. All rights reserved.</p>
                    <div className="footer-bottom__links">
                        <a href="#">Privacy Policy</a>
                        <a href="#">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

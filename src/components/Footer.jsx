import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <footer className="footer">
            <div className="container footer-grid">
                <div className="footer-brand">
                    <Link to="/" className="footer-logo text-gradient">Kalpa.</Link>
                    <p className="footer-tagline">Where the sacred Kinner Kailash touches the sky.</p>
                </div>
                <div className="footer-links-group">
                    <h4>Explore</h4>
                    <ul>
                        <li><Link to="/experiences">Experiences</Link></li>
                        <li><Link to="/events">Events</Link></li>
                        <li><Link to="/stays">Stays</Link></li>
                        <li><Link to="/reviews">Reviews</Link></li>
                    </ul>
                </div>
                <div className="footer-links-group">
                    <h4>Plan</h4>
                    <ul>
                        <li><Link to="/planning">Travel Info</Link></li>
                        <li><Link to="/faq">FAQ</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                    </ul>
                </div>
                <div className="footer-links-group">
                    <h4>Connect</h4>
                    <p className="footer-contact-line">Reckong Peo, Kinnaur<br />Himachal Pradesh, India</p>
                    <a href="mailto:hello@kalpa-tourism.in" className="footer-email">hello@kalpa-tourism.in</a>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} Kalpa Tourism. All rights reserved.</p>
            </div>
        </footer>
    );
}

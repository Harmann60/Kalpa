import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import Experiences from '../components/Experiences';
import Events from '../components/Events';
import Accommodations from '../components/Accommodations';
import Testimonials from '../components/Testimonials';

export default function HomePage() {
    return (
        <>
            <Hero />
            <section className="section home-intro">
                <div className="container reveal">
                    <h2>Welcome to Kalpa.</h2>
                    <p className="subtitle">
                        Nestled in the Kinnaur district of Himachal Pradesh, Kalpa is a hidden gem
                        offering breathtaking views of the Kinner Kailash range. Discover ancient temples,
                        vibrant festivals, and the warmth of Kinnauri hospitality.
                    </p>
                    <div className="home-cta-row">
                        <Link to="/experiences" className="btn-primary">Explore Experiences</Link>
                        <Link to="/stays" className="btn-primary">Find Stays</Link>
                    </div>
                </div>
            </section>
            <Experiences />
            <Events />
            <Accommodations />
            <Testimonials />
            <section className="section home-cta-section">
                <div className="container reveal">
                    <h2 className="text-gradient">Ready to Plan Your Trip?</h2>
                    <p className="subtitle">Get all the travel logistics, permits, and booking info you need.</p>
                    <div className="home-cta-row">
                        <Link to="/planning" className="btn-primary">Travel Info</Link>
                        <Link to="/contact" className="btn-primary">Contact Us</Link>
                    </div>
                </div>
            </section>
        </>
    );
}

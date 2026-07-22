import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import QuickInfoBar from '../components/QuickInfoBar';
import Marquee from '../components/Marquee';
import SectionDivider from '../components/SectionDivider';
import ScrollReveal from '../components/ScrollReveal';
import Experiences from '../components/Experiences';
import Events from '../components/Events';
import Accommodations from '../components/Accommodations';
import Testimonials from '../components/Testimonials';

export default function HomePage() {
    return (
        <>
            <Hero />
            <QuickInfoBar />
            <Marquee />

            <section className="section editorial-intro">
                <div className="container">
                    <ScrollReveal>
                        <div className="editorial-intro__grid">
                            <div className="editorial-intro__text">
                                <span className="editorial-intro__label">About Kalpa</span>
                                <h2 className="editorial-intro__heading">
                                    A village frozen in time,{' '}
                                    <em className="text-gradient">alive with myth.</em>
                                </h2>
                                <p className="editorial-intro__body">
                                    Nestled in the Kinnaur district of Himachal Pradesh at 2,960 metres,
                                    Kalpa is where ancient Hindu mythology meets raw Himalayan beauty.
                                    Watch the sunrise paint the Kinner Kailash range gold from your window,
                                    wander through centuries-old temples, and taste the warmth of Kinnauri
                                    hospitality that no luxury hotel can replicate.
                                </p>
                                <div className="editorial-intro__stats">
                                    <div className="editorial-stat">
                                        <span className="editorial-stat__number">2,960m</span>
                                        <span className="editorial-stat__label">Elevation</span>
                                    </div>
                                    <div className="editorial-stat">
                                        <span className="editorial-stat__number">300+</span>
                                        <span className="editorial-stat__label">Sunny Days / Year</span>
                                    </div>
                                    <div className="editorial-stat">
                                        <span className="editorial-stat__number">12+</span>
                                        <span className="editorial-stat__label">Ancient Temples</span>
                                    </div>
                                </div>
                            </div>
                            <div className="editorial-intro__visual">
                                <div className="editorial-intro__image-frame">
                                    <img
                                        src="/asset/aboutkalpa.png"
                                        alt="Kinner Kailash range at sunrise"
                                        className="editorial-intro__image"
                                        loading="lazy"
                                    />
                                </div>
                                <div className="editorial-intro__accent-box">
                                    <span>&#10024; Nestled at</span>
                                    <strong>2,960m in Kinnaur, HP</strong>
                                </div>
                            </div>
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            <SectionDivider label="Curated" />

            <Experiences />

            <SectionDivider label="Seasonal" />

            <Events />

            <Accommodations />

            <Testimonials />

            <section className="section editorial-cta">
                <div className="container">
                    <ScrollReveal>
                        <div className="editorial-cta__inner">
                            <div className="editorial-cta__content">
                                <span className="editorial-cta__label">Start Planning</span>
                                <h2 className="editorial-cta__heading">
                                    Your journey to{' '}
                                    <span className="text-gradient">Kalpa</span>{' '}
                                    begins here.
                                </h2>
                                <p className="editorial-cta__body">
                                    From permits and transport to curated stays and guided treks,
                                    we'll help you plan every detail of your Himalayan escape.
                                </p>
                                <div className="editorial-cta__buttons">
                                    <Link to="/planning" className="btn-primary">Travel Info</Link>
                                    <Link to="/contact" className="btn-outline">Get in Touch</Link>
                                </div>
                            </div>
                            <div className="editorial-cta__visual">
                                <img
                                    src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=600&q=80"
                                    alt="Mountain trail in Kinnaur"
                                    className="editorial-cta__image"
                                    loading="lazy"
                                />
                            </div>
                        </div>
                    </ScrollReveal>
                </div>
            </section>
        </>
    );
}

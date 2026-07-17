import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import QuickInfoBar from '../components/QuickInfoBar';
import Marquee from '../components/Marquee';
import SectionDivider from '../components/SectionDivider';
import ScrollReveal from '../components/ScrollReveal';
import EditorialCard from '../components/EditorialCard';
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
                                        src="https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=800&q=80"
                                        alt="Kinner Kailash range at sunrise"
                                        className="editorial-intro__image"
                                        loading="lazy"
                                    />
                                </div>
                                <div className="editorial-intro__accent-box">
                                    <span>&#10024; Featured in</span>
                                    <strong>Himalayan Journal 2024</strong>
                                </div>
                            </div>
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            <SectionDivider label="Curated" />

            <section className="section editorial-hot-links">
                <div className="container">
                    <ScrollReveal>
                        <div className="editorial-hot-links__header">
                            <span className="editorial-hot-links__label">From the Journal</span>
                            <h2 className="editorial-hot-links__title">What makes Kalpa extraordinary</h2>
                        </div>
                    </ScrollReveal>
                    <div className="editorial-hot-links__grid">
                        <ScrollReveal delay={0}>
                            <EditorialCard
                                image="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80"
                                tag="Experiences"
                                title="Kinner Kailash Parikrama"
                                desc="The 12-day circumambulation of the sacred mountain is one of India's most revered Himalayan pilgrimages."
                                link="/experiences"
                                size="large"
                            />
                        </ScrollReveal>
                        <ScrollReveal delay={100}>
                            <EditorialCard
                                image="https://images.unsplash.com/photo-1570197571499-166b36435e9f?w=600&q=80"
                                tag="Culture"
                                title="Fulaich Festival"
                                desc="Flowers, music, and centuries-old Kinnauri dance traditions come alive each September."
                                link="/events"
                                size="medium"
                            />
                        </ScrollReveal>
                        <ScrollReveal delay={200}>
                            <EditorialCard
                                image="https://images.unsplash.com/photo-1585409677983-0f6c41ca9c3b?w=600&q=80"
                                tag="Stays"
                                title="Heritage Homestays"
                                desc="Sleep in centuries-old Kinnauri stone houses with panoramic mountain views."
                                link="/stays"
                                size="medium"
                            />
                        </ScrollReveal>
                    </div>
                </div>
            </section>

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

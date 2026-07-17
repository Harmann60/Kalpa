import { useState, useEffect } from 'react';

export default function Hero() {
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setLoaded(true), 200);
        return () => clearTimeout(timer);
    }, []);

    return (
        <header className="hero">
            <video
                autoPlay
                loop
                muted
                playsInline
                poster="/asset/kalpabg.jpg"
                className="hero-video"
            >
                <source src="/asset/bg.mp4" type="video/mp4" />
            </video>
            <div className="hero-overlay" />
            <div className={`hero-content ${loaded ? 'hero-content--visible' : ''}`}>
                <h1 className="hero-title">KALPA</h1>
                <p className="hero-tagline">2,960m above sea level</p>
                <p className="hero-subtitle">Where the sacred Kinner Kailash touches the sky.</p>
                <div className="hero-scroll-cue">
                    <div className="hero-scroll-cue__line" />
                    <span className="hero-scroll-cue__text">Scroll to discover</span>
                </div>
            </div>
        </header>
    );
}

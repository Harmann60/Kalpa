import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export default function Hero() {
    const heroRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

            tl.fromTo('.hero-title',
                { opacity: 0, y: 60, scale: 0.95 },
                { opacity: 1, y: 0, scale: 1, duration: 1.2 }
            )
            .fromTo('.hero-tagline',
                { opacity: 0, y: 30 },
                { opacity: 1, y: 0, duration: 0.8 },
                '-=0.5'
            )
            .fromTo('.hero-subtitle',
                { opacity: 0, y: 25 },
                { opacity: 1, y: 0, duration: 0.8 },
                '-=0.4'
            )
            .fromTo('.hero-scroll-cue',
                { opacity: 0 },
                { opacity: 1, duration: 1 },
                '-=0.2'
            );

            gsap.to('.hero-scroll-cue__line', {
                scaleY: 0.4,
                opacity: 0.3,
                duration: 1.2,
                repeat: -1,
                yoyo: true,
                ease: 'sine.inOut',
            });
        }, heroRef);

        return () => ctx.revert();
    }, []);

    return (
        <header className="hero" ref={heroRef}>
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
            <div className="hero-content hero-content--visible">
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

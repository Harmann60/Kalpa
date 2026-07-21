import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export default function Marquee() {
    const trackRef = useRef(null);

    const items = [
        'Temples', 'Mountains', 'Festivals', 'Rivers', 'Monasteries',
        'Trekking', 'Heritage', 'Snow Peaks', 'Orchards', 'Himalayas',
    ];

    useEffect(() => {
        const track = trackRef.current;
        if (!track) return;

        const ctx = gsap.context(() => {
            const half = track.scrollWidth / 3;

            gsap.to(track, {
                x: -half,
                duration: 20,
                ease: 'none',
                repeat: -1,
            });
        });

        return () => ctx.revert();
    }, []);

    return (
        <div className="marquee-wrapper">
            <div className="marquee-track" ref={trackRef}>
                {[...items, ...items, ...items].map((item, i) => (
                    <span key={i} className="marquee-item">
                        {item}
                        <span className="marquee-dot">&#9679;</span>
                    </span>
                ))}
            </div>
        </div>
    );
}

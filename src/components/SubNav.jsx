import { useEffect, useState, useRef } from 'react';

export default function SubNav() {
    const [isSticky, setIsSticky] = useState(false);
    const subNavRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            if (subNavRef.current) {
                // Stick when scrolling past 100vh - 80px (nav height)
                const threshold = window.innerHeight - 80;
                setIsSticky(window.scrollY >= threshold);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div ref={subNavRef} className={`subnav-container ${isSticky ? 'sticky' : ''}`}>
            <ul className="subnav-links">
                <li><a href="#destinations">Highlights</a></li>
                <li><a href="#events">Events</a></li>
                <li><a href="#accommodations">Stays</a></li>
                <li><a href="#planning">Travel Info</a></li>
            </ul>
        </div>
    );
}

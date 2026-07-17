import { useEffect, useRef } from 'react';

export default function ScrollReveal({ children, className = '', delay = 0 }) {
    const ref = useRef(null);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    el.classList.add('scroll-visible');
                    el.style.transitionDelay = `${delay}ms`;
                    observer.unobserve(el);
                }
            },
            { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
        );

        observer.observe(el);
        return () => observer.disconnect();
    }, [delay]);

    return (
        <div ref={ref} className={`scroll-reveal ${className}`}>
            {children}
        </div>
    );
}

import { useState } from 'react';

export default function EditorialCard({ image, tag, title, desc, link, size = 'medium' }) {
    const [imgLoaded, setImgLoaded] = useState(false);

    return (
        <a href={link} className={`editorial-card editorial-card--${size}`}>
            <div className="editorial-card__img-wrap">
                {imgLoaded ? null : <div className="editorial-card__img-placeholder" />}
                <img
                    src={image}
                    alt={title}
                    className={`editorial-card__img ${imgLoaded ? 'loaded' : ''}`}
                    onLoad={() => setImgLoaded(true)}
                    onError={(e) => {
                        e.target.style.display = 'none';
                    }}
                    loading="lazy"
                />
                <div className="editorial-card__overlay" />
            </div>
            <div className="editorial-card__content">
                {tag && <span className="editorial-card__tag">{tag}</span>}
                <h3 className="editorial-card__title">{title}</h3>
                {desc && <p className="editorial-card__desc">{desc}</p>}
                <span className="editorial-card__link">
                    Read More
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="5" y1="12" x2="19" y2="12" />
                        <polyline points="12 5 19 12 12 19" />
                    </svg>
                </span>
            </div>
        </a>
    );
}

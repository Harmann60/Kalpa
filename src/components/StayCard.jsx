import { useState } from 'react';

const FALLBACK_BG = 'linear-gradient(135deg, hsl(220, 10%, 14%) 0%, hsl(220, 10%, 18%) 100%)';

export default function StayCard({ image, type, badgeClass, title, desc, onViewDetails }) {
    const [imgFailed, setImgFailed] = useState(false);

    return (
        <div className="stay-card">
            <div className="stay-img-wrap" style={imgFailed ? { background: FALLBACK_BG } : undefined}>
                {!imgFailed && (
                    <img
                        src={image}
                        alt={title}
                        className="stay-img"
                        onError={() => setImgFailed(true)}
                    />
                )}
                <span className={`stay-badge ${badgeClass}`}>{type}</span>
            </div>
            <div className="stay-content">
                <h3 className="stay-title">{title}</h3>
                <p className="stay-desc">{desc}</p>
                <button type="button" className="btn-primary stay-cta" onClick={onViewDetails}>
                    View Details
                </button>
            </div>
        </div>
    );
}

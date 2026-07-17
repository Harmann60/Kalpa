import { useState } from 'react';

const FALLBACK_BG = 'linear-gradient(135deg, hsl(220, 10%, 14%) 0%, hsl(220, 10%, 20%) 100%)';

export default function ExperienceCard({ itemClass, image, tag, title, desc, meta, onClick }) {
    const [imgFailed, setImgFailed] = useState(false);

    return (
        <button
            type="button"
            className={`gallery-item ${itemClass}`}
            onClick={onClick}
            aria-label={`Open details for ${title}`}
            style={imgFailed ? { background: FALLBACK_BG } : undefined}
        >
            {!imgFailed && (
                <img
                    src={image}
                    alt={title}
                    className="gallery-img"
                    onError={() => setImgFailed(true)}
                />
            )}
            <div className="gallery-overlay">
                <div className="gallery-content">
                    <span className="card-tag">{tag}</span>
                    <h3 className="gallery-title">{title}</h3>
                    <p className="gallery-desc">{desc}</p>

                    {meta && (
                        <div className="meta-badges">
                            {meta.duration && <span className="meta-badge">⏱ {meta.duration}</span>}
                            {meta.difficulty && <span className="meta-badge">⛰ {meta.difficulty}</span>}
                            {meta.altitude && <span className="meta-badge">⬆ {meta.altitude}</span>}
                            {meta.season && <span className="meta-badge">🌤 {meta.season}</span>}
                        </div>
                    )}
                </div>
            </div>
        </button>
    );
}

import { useState } from 'react';

const FALLBACK_BG = 'linear-gradient(135deg, hsl(220, 10%, 14%) 0%, hsl(220, 10%, 18%) 100%)';

export default function EventCard({ image, date, month, title, desc }) {
    const [imgFailed, setImgFailed] = useState(false);

    return (
        <div className="event-card">
            <div className="event-date-badge">
                {date} <span>{month}</span>
            </div>
            <div className="card-img-wrap" style={imgFailed ? { background: FALLBACK_BG } : undefined}>
                {!imgFailed && (
                    <img
                        src={image}
                        alt={title}
                        className="card-img"
                        onError={() => setImgFailed(true)}
                    />
                )}
            </div>
            <div className="event-content">
                <h3 className="event-title">{title}</h3>
                <p className="card-desc">{desc}</p>
            </div>
        </div>
    );
}

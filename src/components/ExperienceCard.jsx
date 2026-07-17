export default function ExperienceCard({ itemClass, image, tag, title, desc, meta, onClick }) {
    return (
        <button
            type="button"
            className={`gallery-item ${itemClass}`}
            onClick={onClick}
            aria-label={`Open details for ${title}`}
        >
            <img src={image} alt={title} className="gallery-img" />
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

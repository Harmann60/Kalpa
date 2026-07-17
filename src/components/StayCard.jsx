export default function StayCard({ image, type, badgeClass, title, desc, onViewDetails }) {
    return (
        <div className="stay-card">
            <div className="stay-img-wrap">
                <img src={image} alt={title} className="stay-img" />
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

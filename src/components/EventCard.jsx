export default function EventCard({ image, date, month, title, desc }) {
    return (
        <div className="event-card">
            <div className="event-date-badge">
                {date} <span>{month}</span>
            </div>
            <div className="card-img-wrap">
                <img src={image} alt={title} className="card-img" />
            </div>
            <div className="event-content">
                <h3 className="event-title">{title}</h3>
                <p className="card-desc">{desc}</p>
            </div>
        </div>
    );
}

export default function DestinationCard({ itemClass, image, tag, title, desc, onClick }) {
    return (
        <div className={`gallery-item ${itemClass}`} onClick={onClick}>
            <img src={image} alt={title} className="gallery-img" />
            <div className="gallery-overlay">
                <div className="gallery-content">
                    <span className="card-tag">{tag}</span>
                    <h3 className="gallery-title">{title}</h3>
                    <p className="gallery-desc">{desc}</p>
                </div>
            </div>
        </div>
    );
}

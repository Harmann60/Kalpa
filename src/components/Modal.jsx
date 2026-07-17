export default function Modal({ isOpen, onClose, destination }) {
    if (!isOpen || !destination) return null;

    return (
        <>
            <div className="modal-overlay active" onClick={onClose} aria-hidden="true"></div>
            <div className="modal active" role="dialog" aria-modal="true" aria-labelledby="destination-modal-title">
                <button className="modal-close" onClick={onClose} aria-label="Close details">&times;</button>
                <img src={destination.modalImage} alt={destination.title} className="modal-img" />
                <div className="modal-body">
                    <h3 id="destination-modal-title">{destination.title}</h3>
                    <p>{destination.modalDesc}</p>
                </div>
            </div>
        </>
    );
}

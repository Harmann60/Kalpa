export default function Modal({ isOpen, onClose, destination }) {
    if (!isOpen || !destination) return null;

    return (
        <>
            <div className="modal-overlay active" onClick={onClose}></div>
            <div className="modal active">
                <button className="modal-close" onClick={onClose}>&times;</button>
                <img src={destination.modalImage} alt={destination.title} className="modal-img" />
                <div className="modal-body">
                    <h3>{destination.title}</h3>
                    <p>{destination.modalDesc}</p>
                </div>
            </div>
        </>
    );
}

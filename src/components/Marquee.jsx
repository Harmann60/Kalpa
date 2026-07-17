export default function Marquee() {
    const items = [
        'Temples', 'Mountains', 'Festivals', 'Rivers', 'Monasteries',
        'Trekking', 'Heritage', 'Snow Peaks', 'Orchards', 'Himalayas',
    ];

    const repeatedItems = [...items, ...items, ...items];

    return (
        <div className="marquee-wrapper">
            <div className="marquee-track">
                {repeatedItems.map((item, i) => (
                    <span key={i} className="marquee-item">
                        {item}
                        <span className="marquee-dot">&#9679;</span>
                    </span>
                ))}
            </div>
        </div>
    );
}

import StayCard from './StayCard';

const staysData = [
    {
        image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=800&auto=format&fit=crop',
        type: 'Hotel',
        badgeClass: 'hotel-badge',
        title: 'Hotel Rakpa Regency',
        desc: 'A premium hotel known for breathtaking, unobstructed views of the Kinnaur Kailash range right from your balcony.'
    },
    {
        image: 'https://images.unsplash.com/photo-1498503182468-3b51cbb6cb24?q=80&w=800&auto=format&fit=crop',
        type: 'Retreat',
        badgeClass: 'hotel-badge',
        title: 'Hotel Kalpa Retreat',
        desc: 'Offers luxury and comfort amidst the apple orchards, blending modern amenities with traditional aesthetics.'
    },
    {
        image: 'https://images.unsplash.com/photo-1505691938895-1758d7bef511?q=80&w=800&auto=format&fit=crop',
        type: 'Homestay',
        badgeClass: 'homestay-badge',
        title: 'Whistling Pines Homestay',
        desc: 'A cozy, family-run homestay offering authentic Kinnauri meals and a true local living experience.'
    },
    {
        image: 'https://images.unsplash.com/photo-1449844908441-8829872d2607?q=80&w=800&auto=format&fit=crop',
        type: 'Homestay',
        badgeClass: 'homestay-badge',
        title: 'Palmo Homestay',
        desc: 'Budget-friendly and warm, perfect for backpackers and travelers looking to immerse in local culture.'
    },
    {
        image: 'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?q=80&w=800&auto=format&fit=crop',
        type: 'Hostel',
        badgeClass: 'hostel-badge',
        title: 'Zostel Kalpa',
        desc: 'A vibrant backpacker hostel perfect for socializing, offering dorms and private rooms with stunning mountain views.'
    },
    {
        image: 'https://images.unsplash.com/photo-1510798831971-661eb04b3739?q=80&w=800&auto=format&fit=crop',
        type: 'Homestay',
        badgeClass: 'homestay-badge',
        title: 'Rudra Homestays',
        desc: 'Rustic and deeply rooted in tradition, experience Kalpa like a true local.'
    }
];

export default function Accommodations() {
    return (
        <section id="accommodations" className="section" style={{ backgroundColor: "var(--surface-color)" }}>
            <div className="container reveal">
                <h2 className="text-gradient">Stays & Hospitality.</h2>
                <p className="subtitle">Experience the warmth of Kinnauri hospitality.</p>

                <div className="horizontal-slider">
                    {staysData.map((stay, index) => (
                        <StayCard 
                            key={index}
                            image={stay.image}
                            type={stay.type}
                            badgeClass={stay.badgeClass}
                            title={stay.title}
                            desc={stay.desc}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

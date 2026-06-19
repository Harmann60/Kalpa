import { useState, useEffect } from 'react';
import DestinationCard from './DestinationCard';
import Modal from './Modal';

const destinationsData = [
    {
        id: 'modal-kailash',
        itemClass: 'gallery-item-1',
        tag: 'Nature',
        title: 'Kinnaur Kailash',
        desc: 'Click to read about the majestic peak.',
        image: 'https://images.unsplash.com/photo-1626082895617-2c6ab557088b?q=80&w=1200&auto=format&fit=crop',
        modalImage: 'https://images.unsplash.com/photo-1626082895617-2c6ab557088b?q=80&w=800&auto=format&fit=crop',
        modalDesc: 'The primary attraction of Kalpa is the breathtaking, panoramic view of the Kinnaur Kailash range. Watching the sunrise or sunset, when the golden light hits the sacred Shivling-shaped peak, is considered one of the best experiences in the village. It is a deeply spiritual site for both Hindus and Buddhists.'
    },
    {
        id: 'modal-suicide',
        itemClass: 'gallery-item-2',
        tag: 'Thrill',
        title: 'Suicide Point',
        desc: 'Click to view details.',
        image: 'https://images.unsplash.com/photo-1593351415075-3bac9f45c877?q=80&w=800&auto=format&fit=crop',
        modalImage: 'https://images.unsplash.com/photo-1593351415075-3bac9f45c877?q=80&w=800&auto=format&fit=crop',
        modalDesc: 'Located a few kilometers from Kalpa on the way to Roghi village, this spot is famous for its dramatic, steep cliffs and expansive views of the Sutlej River Valley. Despite its grim name, it is a highly popular viewpoint and a spectacular location for photography and experiencing the sheer scale of the Himalayas.'
    },
    {
        id: 'modal-roghi',
        itemClass: 'gallery-item-3',
        tag: 'Heritage',
        title: 'Roghi Village',
        desc: 'Click to discover local life.',
        image: 'https://images.unsplash.com/photo-1588693959306-444458d6e3f5?q=80&w=800&auto=format&fit=crop',
        modalImage: 'https://images.unsplash.com/photo-1588693959306-444458d6e3f5?q=80&w=800&auto=format&fit=crop',
        modalDesc: 'Famous for its traditional Kinnauri houses and local way of life, the drive to Roghi village is as scenic as the destination itself. It offers deep insights into the heritage, culture, and daily life of the Kinnaur region, all surrounded by beautiful, lush apple orchards.'
    },
    {
        id: 'modal-temple',
        itemClass: 'gallery-item-4',
        tag: 'Spiritual',
        title: 'Narayan-Nagini Temple',
        desc: 'Click to uncover ancient mythology.',
        image: 'https://images.unsplash.com/photo-1605640840424-4f056d691e84?q=80&w=1200&auto=format&fit=crop',
        modalImage: 'https://images.unsplash.com/photo-1605640840424-4f056d691e84?q=80&w=800&auto=format&fit=crop',
        modalDesc: 'A masterpiece of traditional Kinnauri architecture, this temple features intricate wooden carvings and a pagoda-style roof. It reflects the region\'s spiritual diversity, seamlessly blending Hindu and local mythologies. It is a must-visit for anyone interested in history and craftsmanship.'
    }
];

export default function Destinations() {
    const [selectedDestination, setSelectedDestination] = useState(null);

    // Close modal on escape key and handle scroll lock
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'Escape') {
                setSelectedDestination(null);
            }
        };
        window.addEventListener('keydown', handleKeyDown);

        if (selectedDestination) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
            document.body.style.overflow = 'auto';
        };
    }, [selectedDestination]);

    return (
        <section id="destinations" className="section">
            <div className="container reveal">
                <h2>Sacred Vistas.</h2>
                <p className="subtitle">Click on the destinations below to learn more about the heritage of Kalpa.</p>

                <div className="gallery-grid">
                    {destinationsData.map((dest) => (
                        <DestinationCard 
                            key={dest.id}
                            itemClass={dest.itemClass}
                            image={dest.image}
                            tag={dest.tag}
                            title={dest.title}
                            desc={dest.desc}
                            onClick={() => setSelectedDestination(dest)}
                        />
                    ))}
                </div>
            </div>

            <Modal 
                isOpen={!!selectedDestination} 
                onClose={() => setSelectedDestination(null)} 
                destination={selectedDestination} 
            />
        </section>
    );
}

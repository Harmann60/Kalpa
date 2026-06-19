import EventCard from './EventCard';

const eventsData = [
    {
        id: 1,
        date: '14',
        month: 'Jan',
        title: 'Sazo Festival',
        desc: 'Observe the traditional bathing of village deities before they depart for heaven. A deeply spiritual local experience.',
        image: 'https://images.unsplash.com/photo-1544256718-3baf2e4c47bb?q=80&w=800&auto=format&fit=crop'
    },
    {
        id: 2,
        date: '02',
        month: 'Sep',
        title: 'Fulaich (Festival of Flowers)',
        desc: 'A vibrant autumn festival celebrating the blooming of alpine flowers with traditional Kinnauri music and dance.',
        image: 'https://images.unsplash.com/photo-1533422902776-563b784a32c2?q=80&w=800&auto=format&fit=crop'
    },
    {
        id: 3,
        date: '13',
        month: 'Apr',
        title: 'Beesh (Vaisakhi)',
        desc: 'Marking the beginning of the New Year. Locals gather for fairs, archery competitions, and feasting.',
        image: 'https://images.unsplash.com/photo-1514222709107-a180c68d72b4?q=80&w=800&auto=format&fit=crop'
    }
];

export default function Events() {
    return (
        <section id="events" className="section" style={{ backgroundColor: "var(--bg-color)" }}>
            <div className="container reveal">
                <h2 className="text-gradient">Cultural Calendar.</h2>
                <p className="subtitle">Immerse yourself in the vibrant traditions and festivals of Kinnaur.</p>

                <div className="events-grid">
                    {eventsData.map((event) => (
                        <EventCard 
                            key={event.id}
                            image={event.image}
                            date={event.date}
                            month={event.month}
                            title={event.title}
                            desc={event.desc}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

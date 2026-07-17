import EventCard from './EventCard';
import useContentData from '../hooks/useContentData';

export default function Events() {
    const { data: eventsData, isLoading, error } = useContentData('/data/events.json', []);

    return (
        <section id="events" className="section" style={{ backgroundColor: "var(--bg-base)" }}>
            <div className="container reveal">
                <h2 className="text-gradient">Cultural Calendar.</h2>
                <p className="subtitle">Immerse yourself in the vibrant traditions and festivals of Kinnaur.</p>
                {isLoading ? <p className="form-feedback">Loading events...</p> : null}
                {error ? <p className="form-feedback form-feedback-error">{error}</p> : null}
                {!isLoading && !error && eventsData.length === 0 ? <p className="form-feedback">No events listed.</p> : null}

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

import useContentData from '../hooks/useContentData';

export default function Testimonials() {
  const { data, isLoading, error } = useContentData('/data/site.json', {});
  const testimonials = data?.testimonials ?? [];

  return (
    <section id="testimonials" className="section">
      <div className="container reveal">
        <h2>Traveler Stories.</h2>
        <p className="subtitle">What real visitors say about their Kalpa experience.</p>
        {isLoading ? <p className="form-feedback">Loading testimonials...</p> : null}
        {error ? <p className="form-feedback form-feedback-error">{error}</p> : null}
        <div className="events-grid">
          {testimonials.map((item) => (
            <article key={item.id} className="event-card testimonial-card">
              <div className="event-content">
                <h3 className="event-title">{item.name}</h3>
                <p className="card-tag">{item.tripType}</p>
                <p className="card-desc">“{item.quote}”</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

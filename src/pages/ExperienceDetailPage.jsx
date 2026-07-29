import { useParams, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import useContentData from '../hooks/useContentData';
import ScrollReveal from '../components/ScrollReveal';

export default function ExperienceDetailPage() {
  const { id } = useParams();
  const { data: experiences, isLoading, error } = useContentData('/data/experiences.json', []);
  const [experience, setExperience] = useState(null);

  useEffect(() => {
    if (experiences.length > 0) {
      const found = experiences.find((e) => e.id === id);
      if (found) {
        setExperience(found);
      }
    }
  }, [experiences, id]);

  if (isLoading) {
    return (
      <div className="page-spacer">
        <div className="container" style={{ textAlign: 'center', paddingTop: '4rem' }}>
          <p className="form-feedback">Loading...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="page-spacer">
        <div className="container" style={{ textAlign: 'center', paddingTop: '4rem' }}>
          <p className="form-feedback form-feedback-error">{error}</p>
          <Link to="/experiences" className="btn-outline" style={{ marginTop: '1.5rem', display: 'inline-block' }}>
            &larr; Back to Experiences
          </Link>
        </div>
      </div>
    );
  }

  if (!experience) {
    return (
      <div className="page-spacer">
        <div className="container" style={{ textAlign: 'center', paddingTop: '4rem' }}>
          <h2>Experience not found</h2>
          <p className="subtitle" style={{ marginBottom: '1.5rem' }}>The experience you're looking for doesn't exist.</p>
          <Link to="/experiences" className="btn-primary">&larr; Back to Experiences</Link>
        </div>
      </div>
    );
  }

  const allExperiences = experiences.filter((e) => e.id !== id).slice(0, 3);

  return (
    <div className="page-spacer">
      <div className="experience-detail">
        <div className="experience-detail__hero">
          <img
            src={experience.image}
            alt={experience.title}
            className="experience-detail__image"
          />
          <div className="experience-detail__hero-overlay" />
          <div className="container experience-detail__hero-content">
            <Link to="/experiences" className="experience-detail__back">&larr; All Experiences</Link>
            <span className="card-tag" style={{ background: 'rgba(184,128,31,0.2)', color: 'var(--accent-primary)' }}>
              {experience.tag}
            </span>
            <h1 className="experience-detail__title">{experience.title}</h1>
            <p className="experience-detail__subtitle">{experience.desc}</p>
          </div>
        </div>

        <div className="container">
          <ScrollReveal>
            <div className="experience-detail__content">
              <div className="experience-detail__body">
                <p className="experience-detail__description">{experience.modalDesc}</p>
              </div>

              {experience.highlights && (
                <div className="experience-detail__highlights">
                  <h3>Highlights</h3>
                  <ul className="experience-detail__highlights-list">
                    {experience.highlights.map((h, i) => (
                      <li key={i}>{h}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </ScrollReveal>

          {allExperiences.length > 0 && (
            <section style={{ marginTop: '4rem', marginBottom: '3rem' }}>
              <h2 style={{ marginBottom: '1.5rem' }}>More Experiences</h2>
              <div className="gallery-grid">
                {allExperiences.map((e) => (
                  <Link
                    key={e.id}
                    to={`/experience/${e.id}`}
                    className={`gallery-grid-item ${e.itemClass}`}
                    style={{ textDecoration: 'none' }}
                  >
                    <div className="gallery-item">
                      <img src={e.image} alt={e.title} className="gallery-img" />
                      <div className="gallery-overlay">
                        <div className="gallery-content">
                          <span className="card-tag">{e.tag}</span>
                          <h3 className="gallery-title">{e.title}</h3>
                          <p className="gallery-desc">{e.desc}</p>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          )}
        </div>
      </div>
    </div>
  );
}

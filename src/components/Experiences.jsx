import { Link } from 'react-router-dom';
import ExperienceCard from './ExperienceCard';
import useContentData from '../hooks/useContentData';

export default function Experiences() {
    const { data: experiencesData, isLoading, error } = useContentData('/data/experiences.json', []);

    return (
        <section id="destinations" className="section">
            <div className="container reveal">
                <h2>Top Experiences.</h2>
                <p className="subtitle">Discover the most inspiring activities and sights in Kalpa.</p>

                {isLoading ? <p className="form-feedback">Loading experiences...</p> : null}
                {error ? <p className="form-feedback form-feedback-error">{error}</p> : null}

                <div className="gallery-grid">
                    {experiencesData.map((dest) => (
                        <Link
                            key={dest.id}
                            to={`/experience/${dest.id}`}
                            className={`gallery-grid-item ${dest.itemClass}`}
                            style={{ textDecoration: 'none' }}
                        >
                            <ExperienceCard
                                image={dest.image}
                                tag={dest.tag}
                                title={dest.title}
                                desc={dest.desc}
                                meta={dest.meta}
                            />
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}

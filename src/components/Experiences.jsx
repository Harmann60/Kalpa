import { useMemo, useState, useEffect } from 'react';
import ExperienceCard from './ExperienceCard';
import Modal from './Modal';
import useContentData from '../hooks/useContentData';
import { trackEvent } from '../utils/analytics';

export default function Experiences() {
    const [selectedDestination, setSelectedDestination] = useState(null);
    const [selectedDifficulty, setSelectedDifficulty] = useState('All');
    const { data: experiencesData, isLoading, error } = useContentData('/data/experiences.json', []);

    const filteredExperiences = useMemo(
        () => experiencesData.filter((item) => selectedDifficulty === 'All' || item.difficulty === selectedDifficulty),
        [experiencesData, selectedDifficulty]
    );

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
                <h2>Top Experiences.</h2>
                <p className="subtitle">Discover the most inspiring activities and sights in Kalpa.</p>
                <div className="filter-row">
                    <label htmlFor="experience-difficulty">Difficulty</label>
                    <select
                        id="experience-difficulty"
                        value={selectedDifficulty}
                        onChange={(event) => setSelectedDifficulty(event.target.value)}
                    >
                        <option value="All">All</option>
                        <option value="Easy">Easy</option>
                        <option value="Hard">Hard</option>
                    </select>
                </div>

                {isLoading ? <p className="form-feedback">Loading experiences...</p> : null}
                {error ? <p className="form-feedback form-feedback-error">{error}</p> : null}
                {!isLoading && !error && filteredExperiences.length === 0 ? (
                    <p className="form-feedback">No experiences available for this filter.</p>
                ) : null}

                <div className="gallery-grid">
                    {filteredExperiences.map((dest) => (
                        <ExperienceCard 
                            key={dest.id}
                            itemClass={dest.itemClass}
                            image={dest.image}
                            tag={dest.tag}
                            title={dest.title}
                            desc={dest.desc}
                            meta={dest.meta}
                            onClick={() => {
                                trackEvent('experience_opened', { experienceId: dest.id });
                                setSelectedDestination(dest);
                            }}
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

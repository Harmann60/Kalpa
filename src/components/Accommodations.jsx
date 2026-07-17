import { useMemo, useState } from 'react';
import StayCard from './StayCard';
import useContentData from '../hooks/useContentData';
import { trackEvent } from '../utils/analytics';

export default function Accommodations() {
    const { data: staysData, isLoading, error } = useContentData('/data/stays.json', []);
    const [typeFilter, setTypeFilter] = useState('All');
    const [sortOrder, setSortOrder] = useState('price-asc');
    const [selectedStay, setSelectedStay] = useState(null);

    const filteredStays = useMemo(() => {
        const byType = staysData.filter((stay) => typeFilter === 'All' || stay.type === typeFilter);
        return byType.sort((a, b) => {
            if (sortOrder === 'price-desc') return b.priceFrom - a.priceFrom;
            if (sortOrder === 'rating-desc') return b.rating - a.rating;
            return a.priceFrom - b.priceFrom;
        });
    }, [staysData, typeFilter, sortOrder]);

    return (
        <section id="accommodations" className="section" style={{ backgroundColor: "var(--bg-surface)" }}>
            <div className="container reveal">
                <h2 className="text-gradient">Stays & Hospitality.</h2>
                <p className="subtitle">Experience the warmth of Kinnauri hospitality.</p>
                <div className="filter-row">
                    <label htmlFor="stay-type-filter">Stay Type</label>
                    <select id="stay-type-filter" value={typeFilter} onChange={(event) => setTypeFilter(event.target.value)}>
                        <option value="All">All</option>
                        <option value="Hotel">Hotel</option>
                        <option value="Retreat">Retreat</option>
                        <option value="Homestay">Homestay</option>
                        <option value="Hostel">Hostel</option>
                    </select>

                    <label htmlFor="stay-sort">Sort</label>
                    <select id="stay-sort" value={sortOrder} onChange={(event) => setSortOrder(event.target.value)}>
                        <option value="price-asc">Price: Low to High</option>
                        <option value="price-desc">Price: High to Low</option>
                        <option value="rating-desc">Rating: High to Low</option>
                    </select>
                </div>
                {isLoading ? <p className="form-feedback">Loading stays...</p> : null}
                {error ? <p className="form-feedback form-feedback-error">{error}</p> : null}
                {!isLoading && !error && filteredStays.length === 0 ? <p className="form-feedback">No stays found.</p> : null}

                <div className="horizontal-slider">
                    {filteredStays.map((stay) => (
                        <StayCard 
                            key={stay.id}
                            image={stay.image}
                            type={stay.type}
                            badgeClass={stay.badgeClass}
                            title={stay.title}
                            desc={stay.desc}
                            onViewDetails={() => {
                                trackEvent('stay_view_details', { stayId: stay.id });
                                setSelectedStay(stay);
                            }}
                        />
                    ))}
                </div>

                {selectedStay ? (
                    <div className="glass-panel stay-details" role="region" aria-live="polite">
                        <h3>{selectedStay.title}</h3>
                        <p className="stay-desc">{selectedStay.desc}</p>
                        <p><strong>Starting Price:</strong> ₹{selectedStay.priceFrom} / night</p>
                        <p><strong>Availability:</strong> {selectedStay.availability}</p>
                        <p><strong>Guest Rating:</strong> {selectedStay.rating} / 5</p>
                        <div className="stay-actions">
                            <a
                                className="btn-primary"
                                href={selectedStay.bookingUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={() => trackEvent('stay_booking_started', { stayId: selectedStay.id })}
                            >
                                Book Now
                            </a>
                            <a
                                className="btn-primary"
                                href={selectedStay.locationMap}
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={() => trackEvent('stay_map_opened', { stayId: selectedStay.id })}
                            >
                                View on Map
                            </a>
                            <a
                                className="btn-primary"
                                href={`#contact?stay=${selectedStay.id}`}
                                onClick={() => trackEvent('stay_inquiry_started', { stayId: selectedStay.id })}
                            >
                                Inquire
                            </a>
                        </div>
                    </div>
                ) : null}
            </div>
        </section>
    );
}

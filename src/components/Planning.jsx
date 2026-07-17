import { useState } from 'react';
import Accordion from './Accordion';
import { trackEvent } from '../utils/analytics';

export default function Planning() {
    const [mode, setMode] = useState('flight');
    const [fromLocation, setFromLocation] = useState('');
    const [formError, setFormError] = useState('');
    const [feedback, setFeedback] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);

    const providers = {
        flight: {
            label: 'Flights',
            baseUrl: 'https://www.makemytrip.com/flights/',
        },
        train: {
            label: 'Trains',
            baseUrl: 'https://www.irctc.co.in/nget/',
        },
        bus: {
            label: 'Buses',
            baseUrl: 'https://www.hrtchp.com/',
        },
    };

    const handleSearch = (event) => {
        event.preventDefault();
        const departure = fromLocation.trim();
        if (departure.length < 2) {
            setFormError('Please enter a valid departure city (at least 2 characters).');
            setFeedback('');
            return;
        }

        const provider = providers[mode];
        const searchParams = new URLSearchParams({
            from: departure,
            to: 'Shimla / Kalpa',
        });

        setIsSubmitting(true);
        setFormError('');
        setFeedback('');

        const targetUrl = `${provider.baseUrl}?${searchParams.toString()}`;
        const openedWindow = window.open(targetUrl, '_blank', 'noopener,noreferrer');
        if (!openedWindow) {
            setFormError('Popup was blocked by the browser. Please allow popups and try again.');
            setIsSubmitting(false);
            return;
        }

        setFeedback(`Opening ${provider.label} options from ${departure}...`);
        trackEvent('travel_search_opened', { mode, departure });
        setIsSubmitting(false);
    };

    return (
        <section id="planning" className="section">
            <div className="container reveal">
                <h2 className="text-gradient">Travel Logistics.</h2>
                <p className="subtitle" style={{ marginBottom: "2rem" }}>Plan your ascent to the Kinnaur valley with essential details.</p>
                
                <div className="transport-grid">
                    <div className="logistics-panel accordion-wrapper">
                        <Accordion title="Weather & Best Time to Visit" defaultOpen={true}>
                            <p><strong>Summer (Apr - Jun):</strong> 8°C to 24°C. Perfect for sightseeing and clear views of the Kailash range.</p>
                            <p style={{marginTop: '0.5rem'}}><strong>Monsoon (Jul - Sep):</strong> Heavy rainfall can cause landslides on NH5. Travel with caution.</p>
                            <p style={{marginTop: '0.5rem'}}><strong>Winter (Oct - Mar):</strong> Temperatures drop below freezing (-5°C to 10°C). Ideal for snow lovers, though many roads may close temporarily.</p>
                        </Accordion>
                        
                        <Accordion title="Road Conditions & Routes">
                            <p><strong>Route 1 (Primary):</strong> Shimla-Kinnaur route via NH5. This is the recommended route offering gradual acclimatization. It is mostly well-maintained by BRO.</p>
                            <p style={{marginTop: '0.5rem'}}><strong>Route 2 (Spiti Circuit):</strong> Manali-Kaza route. Travel from Manali via Kunzum Pass to Kaza and then Kalpa. <em>(Note: Kunzum Pass is closed in winter).</em></p>
                        </Accordion>

                        <Accordion title="Permits & Regulations">
                            <p><strong>Indian Citizens:</strong> No special permits are required to visit Kalpa or Reckong Peo.</p>
                            <p style={{marginTop: '0.5rem'}}><strong>Foreign Nationals:</strong> An Inner Line Permit (ILP) is required if you are traveling beyond Reckong Peo towards Spiti Valley (Sumdo border). Permits can be obtained at the SDM office in Reckong Peo.</p>
                        </Accordion>
                        
                        <Accordion title="Essential Packing List">
                            <ul style={{ paddingLeft: '1.2rem', marginTop: '0.5rem' }}>
                                <li>Heavy woolens and thermals (especially for winter)</li>
                                <li>Sturdy trekking shoes and windproof jacket</li>
                                <li>Basic medical kit for altitude sickness (Diamox)</li>
                                <li>Cash (ATMs in Reckong Peo can occasionally run out)</li>
                            </ul>
                        </Accordion>
                    </div>

                    <form className="glass-panel" onSubmit={handleSearch} noValidate>
                        <div className="tabs">
                            <button 
                                type="button"
                                className={`tab-btn ${mode === 'flight' ? 'active' : ''}`} 
                                onClick={() => setMode('flight')}
                            >Flights</button>
                            <button 
                                type="button"
                                className={`tab-btn ${mode === 'train' ? 'active' : ''}`} 
                                onClick={() => setMode('train')}
                            >Railway</button>
                            <button 
                                type="button"
                                className={`tab-btn ${mode === 'bus' ? 'active' : ''}`} 
                                onClick={() => setMode('bus')}
                            >HRTC</button>
                        </div>
                        <div className="input-group">
                            <span className="input-label">From</span>
                            <input
                                type="text"
                                placeholder="Departure City"
                                className="input-field"
                                value={fromLocation}
                                onChange={(event) => setFromLocation(event.target.value)}
                                aria-invalid={!!formError}
                                aria-describedby={formError ? 'planning-form-error' : undefined}
                                required
                            />
                        </div>
                        <div className="input-group">
                            <span className="input-label">To</span>
                            <input type="text" value="Shimla / Kalpa" readOnly className="input-field" style={{ cursor: "not-allowed", color: "var(--text-muted)" }} />
                        </div>
                        {formError ? (
                            <p id="planning-form-error" className="form-feedback form-feedback-error" role="alert">{formError}</p>
                        ) : null}
                        {feedback ? (
                            <p className="form-feedback form-feedback-success" role="status">{feedback}</p>
                        ) : null}
                        <button id="search-btn" className="btn-primary btn-full" type="submit" disabled={isSubmitting}>
                            {isSubmitting
                                ? 'Opening...'
                                : mode === 'flight'
                                    ? 'Search Flights'
                                    : mode === 'train'
                                        ? 'Search Trains'
                                        : 'Search HRTC Buses'}
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
}

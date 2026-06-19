import { useState } from 'react';
import Accordion from './Accordion';

export default function Planning() {
    const [mode, setMode] = useState('flight');

    const handleSearch = () => {
        if (mode === 'flight') window.open('https://www.makemytrip.com/flights/', '_blank');
        else if (mode === 'train') window.open('https://www.irctc.co.in/nget/', '_blank');
        else if (mode === 'bus') window.open('https://www.hrtchp.com/', '_blank');
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

                    <div className="glass-panel">
                        <div className="tabs">
                            <button 
                                className={`tab-btn ${mode === 'flight' ? 'active' : ''}`} 
                                onClick={() => setMode('flight')}
                            >Flights</button>
                            <button 
                                className={`tab-btn ${mode === 'train' ? 'active' : ''}`} 
                                onClick={() => setMode('train')}
                            >Railway</button>
                            <button 
                                className={`tab-btn ${mode === 'bus' ? 'active' : ''}`} 
                                onClick={() => setMode('bus')}
                            >HRTC</button>
                        </div>
                        <div className="input-group">
                            <span className="input-label">From</span>
                            <input type="text" placeholder="Departure City" className="input-field" />
                        </div>
                        <div className="input-group">
                            <span className="input-label">To</span>
                            <input type="text" value="Shimla / Kalpa" readOnly className="input-field" style={{ cursor: "not-allowed", color: "var(--text-muted)" }} />
                        </div>
                        <button id="search-btn" className="btn-primary btn-full" onClick={handleSearch}>
                            {mode === 'flight' ? 'Search Flights' : mode === 'train' ? 'Search Trains' : 'Search HRTC Buses'}
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}

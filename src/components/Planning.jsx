import { useState } from 'react';

export default function Planning() {
    const [mode, setMode] = useState('flight');

    return (
        <section id="planning" className="section">
            <div className="container reveal">
                <h2 className="text-gradient">Journey to the Clouds.</h2>
                <p className="subtitle" style={{ marginBottom: "2rem" }}>Plan your ascent to the Kinnaur valley.</p>
                
                <div className="transport-grid">
                    <div className="logistics-panel">
                        <div className="logistics-item">
                            <h3 className="logistics-title">By Flight ✈️</h3>
                            <p className="logistics-desc">
                                The nearest airports are <strong>Shimla Airport (Jubbarhatti)</strong> (approx. 245–275 km, 7–9 hrs drive) and <strong>Chandigarh Airport</strong> (approx. 330–350 km, 10–12 hrs drive).
                            </p>
                        </div>
                        
                        <div className="logistics-item">
                            <h3 className="logistics-title">By Road 🚙</h3>
                            <p className="logistics-desc">
                                <strong>Route 1 (Primary):</strong> Shimla-Kinnaur route via NH5. This is the recommended route offering gradual acclimatization. <br />
                                <strong>Route 2 (Spiti Circuit):</strong> Manali-Kaza route. Travel from Manali via Kunzum Pass to Kaza and then Kalpa. <em>(Note: Kunzum Pass is closed in winter).</em>
                            </p>
                        </div>

                        <div className="logistics-item">
                            <h3 className="logistics-title">By Train & Bus 🚆🚌</h3>
                            <p className="logistics-desc">
                                The nearest railway stations are <strong>Kalka</strong> and <strong>Shimla</strong>. From there, you can take reliable <strong>HRTC buses</strong> or private buses to Reckong Peo. From Reckong Peo, local buses and taxis easily connect to Kalpa (10 km).
                            </p>
                        </div>
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
                        <button id="search-btn" className="btn-primary btn-full" onClick={() => {
                            if (mode === 'flight') window.open('https://www.makemytrip.com/flights/', '_blank');
                            else if (mode === 'train') window.open('https://www.irctc.co.in/nget/', '_blank');
                            else if (mode === 'bus') window.open('https://www.hrtchp.com/', '_blank');
                        }}>
                            {mode === 'flight' ? 'Search Flights' : mode === 'train' ? 'Search Trains' : 'Search HRTC Buses'}
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}

import { useState, useEffect } from 'react';

const WMO_CODES = {
    0: 'Clear sky', 1: 'Mainly clear', 2: 'Partly cloudy', 3: 'Overcast',
    45: 'Fog', 48: 'Rime fog', 51: 'Light drizzle', 53: 'Moderate drizzle',
    55: 'Dense drizzle', 56: 'Freezing drizzle', 57: 'Dense freezing drizzle',
    61: 'Slight rain', 63: 'Moderate rain', 65: 'Heavy rain',
    66: 'Freezing rain', 67: 'Heavy freezing rain',
    71: 'Slight snow', 73: 'Moderate snow', 75: 'Heavy snow',
    77: 'Snow grains', 80: 'Slight showers', 81: 'Moderate showers',
    82: 'Violent showers', 85: 'Slight snow showers', 86: 'Heavy snow showers',
    95: 'Thunderstorm', 96: 'Thunderstorm with hail', 99: 'Severe thunderstorm',
};

export default function QuickInfoBar() {
    const [weather, setWeather] = useState(null);

    useEffect(() => {
        fetch('https://api.open-meteo.com/v1/forecast?latitude=31.53&longitude=78.38&current=temperature_2m,weather_code&timezone=Asia/Kolkata')
            .then((r) => {
                if (!r.ok) throw new Error(r.status);
                return r.json();
            })
            .then((data) => {
                const temp = Math.round(data.current.temperature_2m);
                const code = data.current.weather_code;
                setWeather({ temp: `${temp}°C`, condition: WMO_CODES[code] || 'Clear' });
            })
            .catch(() => setWeather({ temp: '--°C', condition: 'Data unavailable' }));
    }, []);

    return (
        <div className="quick-info-bar">
            <div className="quick-info-bar__inner">
                <div className="quick-info-item">
                    <span className="quick-info-item__icon">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                            <circle cx="12" cy="10" r="3" />
                        </svg>
                    </span>
                    <div className="quick-info-item__text">
                        <span className="quick-info-item__label">Location</span>
                        <span className="quick-info-item__value">Kinnaur, Himachal Pradesh</span>
                    </div>
                </div>
                <div className="quick-info-bar__divider" />
                <div className="quick-info-item">
                    <span className="quick-info-item__icon">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
                        </svg>
                    </span>
                    <div className="quick-info-item__text">
                        <span className="quick-info-item__label">Weather</span>
                        <span className="quick-info-item__value">
                            {weather ? `${weather.temp} ${weather.condition}` : 'Loading...'}
                        </span>
                    </div>
                </div>
                <div className="quick-info-bar__divider" />
                <div className="quick-info-item">
                    <span className="quick-info-item__icon">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                            <circle cx="12" cy="12" r="5" />
                            <line x1="12" y1="1" x2="12" y2="3" />
                            <line x1="12" y1="21" x2="12" y2="23" />
                            <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                            <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                            <line x1="1" y1="12" x2="3" y2="12" />
                            <line x1="21" y1="12" x2="23" y2="12" />
                            <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                            <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
                        </svg>
                    </span>
                    <div className="quick-info-item__text">
                        <span className="quick-info-item__label">Season</span>
                        <span className="quick-info-item__value">Spring — Best time to visit</span>
                    </div>
                </div>
                <div className="quick-info-bar__divider" />
                <div className="quick-info-item">
                    <span className="quick-info-item__icon">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M3 15h18M3 9h18M12 3v18" />
                        </svg>
                    </span>
                    <div className="quick-info-item__text">
                        <span className="quick-info-item__label">Elevation</span>
                        <span className="quick-info-item__value">2,960 metres</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

import { useState } from 'react';

export default function Accordion({ title, children, defaultOpen = false }) {
    const [isOpen, setIsOpen] = useState(defaultOpen);
    const panelId = `${title.toLowerCase().replace(/\s+/g, '-')}-panel`;

    return (
        <div className={`accordion-item ${isOpen ? 'open' : ''}`}>
            <button
                className="accordion-header"
                onClick={() => setIsOpen(!isOpen)}
                aria-expanded={isOpen}
                aria-controls={panelId}
            >
                <span>{title}</span>
                <span className="accordion-icon">+</span>
            </button>
            <div 
                id={panelId}
                className="accordion-content" 
                style={{ maxHeight: isOpen ? '500px' : '0px' }}
            >
                <div className="accordion-inner">
                    {children}
                </div>
            </div>
        </div>
    );
}

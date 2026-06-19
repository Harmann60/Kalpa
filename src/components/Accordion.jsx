import { useState } from 'react';

export default function Accordion({ title, children, defaultOpen = false }) {
    const [isOpen, setIsOpen] = useState(defaultOpen);

    return (
        <div className={`accordion-item ${isOpen ? 'open' : ''}`}>
            <button className="accordion-header" onClick={() => setIsOpen(!isOpen)}>
                <span>{title}</span>
                <span className="accordion-icon">+</span>
            </button>
            <div 
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

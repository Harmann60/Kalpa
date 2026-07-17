export default function SectionDivider({ label }) {
    return (
        <div className="section-divider">
            {label && <span className="section-divider__label">{label}</span>}
            <div className="section-divider__line" />
        </div>
    );
}

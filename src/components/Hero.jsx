export default function Hero() {
    return (
        <header className="hero">
            <video autoPlay loop muted playsInline poster="/asset/kalpabg.jpg" className="hero-video">
                <source src="/asset/bg.mp4" type="video/mp4" />
            </video>
            <div className="hero-overlay"></div>
            <div className="hero-content">
                <h1 className="hero-title text-gradient">KALPA</h1>
                <p className="subtitle">Where the sacred Kinner Kailash touches the sky.</p>
            </div>
        </header>
    );
}

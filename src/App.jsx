import Navbar from './components/Navbar';
import SubNav from './components/SubNav';
import Hero from './components/Hero';
import Planning from './components/Planning';
import Experiences from './components/Experiences';
import Events from './components/Events';
import Accommodations from './components/Accommodations';
import { useEffect } from 'react';

function App() {
  // Intersection Observer for the reveal animation
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach(el => observer.observe(el));

    return () => {
      revealElements.forEach(el => observer.unobserve(el));
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <Navbar />
      <Hero />
      <SubNav />
      <Experiences />
      <Events />
      <Accommodations />
      <Planning />
    </>
  );
}

export default App;

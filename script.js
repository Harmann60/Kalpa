document.addEventListener('DOMContentLoaded', () => {
    // 1. Navigation Scroll Effect
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // 2. Transport Tab Switching
    const tabs = document.querySelectorAll('.tab-btn');
    const searchBtn = document.getElementById('search-btn');
    let currentMode = 'flight';

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            // Remove active class from all
            tabs.forEach(t => t.classList.remove('active'));
            
            // Add active class to clicked
            tab.classList.add('active');
            
            // Update current mode
            currentMode = tab.dataset.mode;
            
            // Update button text
            if (currentMode === 'flight') {
                searchBtn.innerText = 'Search Flights';
            } else if (currentMode === 'train') {
                searchBtn.innerText = 'Search Trains';
            } else if (currentMode === 'bus') {
                searchBtn.innerText = 'Search HRTC Buses';
            }
        });
    });

    // Search action
    searchBtn.addEventListener('click', () => {
        if (currentMode === 'flight') {
            window.open('https://www.makemytrip.com/flights/', '_blank');
        } else if (currentMode === 'train') {
            window.open('https://www.irctc.co.in/nget/', '_blank');
        } else if (currentMode === 'bus') {
            window.open('https://www.hrtchp.com/', '_blank');
        }
    });

    // 3. Scroll Reveal Animations via Intersection Observer
    const revealElements = document.querySelectorAll('.reveal');
    
    const revealOptions = {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px"
    };

    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;
            
            entry.target.classList.add('active');
            observer.unobserve(entry.target);
        });
    }, revealOptions);

    revealElements.forEach(el => revealObserver.observe(el));

    // 4. Modal Logic for Destinations
    const galleryItems = document.querySelectorAll('.gallery-item');
    const overlay = document.getElementById('modal-overlay');
    const modals = document.querySelectorAll('.modal');
    const closeBtns = document.querySelectorAll('.modal-close');

    // Open Modal
    galleryItems.forEach(item => {
        item.addEventListener('click', () => {
            const modalId = item.getAttribute('data-modal');
            const targetModal = document.getElementById(modalId);
            if (targetModal) {
                targetModal.classList.add('active');
                overlay.classList.add('active');
                document.body.style.overflow = 'hidden'; // Prevent background scrolling
            }
        });
    });

    // Close Modal Function
    const closeModal = () => {
        modals.forEach(modal => modal.classList.remove('active'));
        overlay.classList.remove('active');
        document.body.style.overflow = 'auto'; // Restore scrolling
    };

    // Close on overlay click or button click
    overlay.addEventListener('click', closeModal);
    closeBtns.forEach(btn => btn.addEventListener('click', closeModal));

    // Close on Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeModal();
    });
});

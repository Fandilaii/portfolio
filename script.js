document.addEventListener("DOMContentLoaded", () => {
    
    // 1. Scroll Reveal (Intersection Observer)
    // Elements fade and slide up when they enter the viewport
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('reveal-visible');
                // Optional: stop observing once revealed so it doesn't animate out
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Grab all heavy structural elements to animate them on scroll
    const sectionsToAnimate = document.querySelectorAll('.hero, .section-label, .project-card, .about-strip, .cs-hero, .cs-section, .cs-image-full, .cs-metric-card');
    
    sectionsToAnimate.forEach((el, index) => {
        el.classList.add('reveal-hidden');
        
        // Stagger the animation slightly for cards in a grid 
        if (el.classList.contains('project-card') || el.classList.contains('cs-metric-card')) {
            el.style.transitionDelay = `${(index % 3) * 0.15}s`;
        }
        
        observer.observe(el);
    });

    // 2. Magnetic Interactive Elements
    // High-end portfolio hover interaction where buttons "pull" towards the cursor
    const magneticElements = document.querySelectorAll('.cta, .card-arrow, .cs-next-link');
    
    magneticElements.forEach(el => {
        el.addEventListener('mousemove', (e) => {
            const rect = el.getBoundingClientRect();
            // Calculate mouse position relative to center of the button
            const h = rect.width / 2;
            const v = rect.height / 2;
            const x = e.clientX - rect.left - h;
            const y = e.clientY - rect.top - v;
            
            // Adjust the 0.2 factor to make the magnet stronger or weaker
            el.style.transform = `translate(${x * 0.25}px, ${y * 0.25}px) scale(1.05)`;
        });
        
        el.addEventListener('mouseleave', () => {
            // Reset to default on mouse out
            el.style.transform = `translate(0px, 0px) scale(1)`;
        });
    });
});

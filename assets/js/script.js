// Menu Mobile
document.querySelector('.menu-mobile').addEventListener('click', () => {
    document.querySelector('.nav-links').classList.toggle('active');
});

// Scroll Suave
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
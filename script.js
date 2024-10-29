document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav-menu a');
    const sections = document.querySelectorAll('.sections section');

    // Ocultar todas las secciones al inicio
    sections.forEach(section => {
        section.style.display = 'none';
    });

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);

            sections.forEach(section => {
                if (section.id === targetId) {
                    section.style.display = 'block';
                } else {
                    section.style.display = 'none';
                }
            });
        });
    });
});

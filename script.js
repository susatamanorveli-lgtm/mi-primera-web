document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Resaltar página actual en el menú
    const currentPage = window.location.pathname.split("/").pop();
    const navLinks = document.querySelectorAll('.nav-links a');

    navLinks.forEach(link => {
        // Si estamos en la raíz, marcar 'Inicio'
        if (currentPage === "" || currentPage === "index.html") {
            if (link.getAttribute('href') === "index.html") link.classList.add('active');
        } 
        else if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        }
    });

    // 2. Manejo del Formulario de Contacto
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault(); // Evita que la página se recargue
            
            const nombre = document.getElementById('nombre').value;
            
            // Simulación de envío
            alert(`¡Gracias, ${nombre}! Tu mensaje ha sido enviado con éxito. Nos pondremos en contacto contigo pronto.`);
            
            contactForm.reset(); // Limpia los campos
        });
    }
});
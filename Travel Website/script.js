document.addEventListener('DOMContentLoaded', (event) => {
    const contactForm = document.querySelector('form');
    contactForm.addEventListener('submit', (event) => {
        event.preventDefault();
        alert('Obrigado por entrar em contato conosco! Em breve retornaremos.');
    });
});

// Aplicar animações quando o elemento estiver visível na viewport
document.addEventListener('DOMContentLoaded', function() {
    var sections = document.querySelectorAll('.fade-in, .slide-up');

    sections.forEach(function(section) {
        if (isElementInViewport(section)) {
            section.classList.add('visible');
        }
    });

    window.addEventListener('scroll', function() {
        sections.forEach(function(section) {
            if (isElementInViewport(section)) {
                section.classList.add('visible');
            }
        });
    });

    function isElementInViewport(el) {
        var rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }
});

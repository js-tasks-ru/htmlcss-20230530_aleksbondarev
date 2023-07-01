const changers = document.querySelectorAll('.theme-changer input');
const html = document.documentElement;

changers.forEach(input => {
    input.addEventListener('change', function() {
        html.toggleAttribute('data-theme-dark');
    });
});

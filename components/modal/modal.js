(function () {
    const modalWindowEl = document.getElementById('modal');
    const modalOpenEl = document.getElementById('modal-open');
    const modalCloseEl = document.getElementById('modal-close');

    if (!modalCloseEl || !modalOpenEl || !modalWindowEl) {
        return;
    }

    modalOpenEl.addEventListener('click', () => {
        modalWindowEl.style.display = 'block';
        document.body.overflow = 'hidden';
    });

    modalCloseEl.addEventListener('click', () => {
        modalWindowEl.style.display = 'none';
        document.body.overflow = 'initial';
    });
})();

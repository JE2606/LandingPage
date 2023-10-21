(function() {
    const sliders = [...document.querySelectorAll('.professionals__body')];
    const buttonNext = document.querySelector('#next');
    const buttonBefore = document.querySelector('#before');
    let value;

    buttonNext.addEventListener('click', () => {
        changePosition(1);
    });

    buttonBefore.addEventListener('click', () => {
        changePosition(-1);
    });

    const changePosition = (add) => {
        const currentProfessional = document.querySelector('.professionals__body--show');
        value = Number(currentProfessional.dataset.id);
        value += add;

        currentProfessional.classList.remove('professionals__body--show');
        if (value === sliders.length + 1 || value === 0) {
            value = value === 0 ? sliders.length : 1;
        }

        sliders[value - 1].classList.add('professionals__body--show');
    }
})();

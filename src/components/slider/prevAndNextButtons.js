export const setupPrevNextBtns = (prevBtn, nextBtn, slider) => {
    prevBtn.addEventListener('click', slider.scrollPrev, false);
    nextBtn.addEventListener('click', slider.scrollNext, false);
};

export const disablePrevNextBtns = (prevBtn, nextBtn, slider) => {
    return () => {
        (slider.canScrollPrev()) ?
            prevBtn.removeAttribute('disabled') :
            prevBtn.setAttribute('disabled', 'disabled');

        (slider.canScrollNext()) ?
            nextBtn.removeAttribute('disabled') :
            nextBtn.setAttribute('disabled', 'disabled');
    };
};
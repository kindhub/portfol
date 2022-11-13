const counters = document.querySelectorAll('.counter');

counters.forEach((counter) => {
    counter.innerHTML = '0';

    const updateCounter = () => {
        const target = +counter.getAttribute('data-target');
        const c = +counter.innerText;

        if (c < target) {
            counter.innerText = c + 1;
            setTimeout(updateCounter, 1);
        } else {
            counter.innerText = target;
        }
    };
    updateCounter()
}, 4000);
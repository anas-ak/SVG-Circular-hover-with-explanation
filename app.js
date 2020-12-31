const wrapper = document.querySelector('.wrapper');
const svg = wrapper.querySelector('svg');

let initialRotate = anime({
            targets: svg,
            duration: 40000, 
            easing: 'linear',
            loop: true,
            rotate: '360deg'
});

let hoverRotate;

wrapper.addEventListener('mouseover', () => {
            initialRotate.pause();
            const rValue = initialRotate.animations[0].currentValue;

            console.log(rValue);
            hoverRotate = anime({
                targets: svg,
                duration: 10000,
                easing: 'linear',
                loop: true,
                rotate: [rValue, '+=360deg'],
            });
});

wrapper.addEventListener('mouseleave', () => {
            hoverRotate.pause();
            const rValue = hoverRotate.animations[0].currentValue;
            initialRotate = anime({
                targets: svg,
                duration: 40000,
                easing: 'linear',
                loop: true,
                rotate: [rValue, '+=360deg'],
            });
});
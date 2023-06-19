document.addEventListener('mousemove', e => {
    Object.assign(document.documentElement, {
        style: `
            --move-x: ${(e.clientX - window.innerWidth / 2) * -0.005}deg;
            --move-y: ${(e.clientY - window.innerHeight / 2) * -0.009}deg;
        `
    })
})

document.getElementById('btn-deal-start').addEventListener('click', e => {
    console.log('click');
})
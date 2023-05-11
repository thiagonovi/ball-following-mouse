const ball = document.getElementById('ball');

let mousePos = {x: undefined, y: undefined};

window.addEventListener('mousemove', (event) => {
    mousePos = {x: event.clientX, y: event.clientY};
    ball.style.top = (mousePos.y - 10) + 'px';
    ball.style.left = (mousePos.x - 8) + 'px';
})




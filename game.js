let lastRenderTime = 0;
const SNAKE_SPEED = 2;

function main(currentTime) {
    const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000;
    if(secondsSinceLastRender < 1 / SNAKE_SPEED) return;
    window.requestAnimationFrame(main);
    lastRenderTime = currentTime;
    console.log(secondsSinceLastRender);
}

window.requestAnimationFrame(main);
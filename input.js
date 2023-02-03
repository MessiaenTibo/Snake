export let gamePaused = false;
export let settingsMenuActive = false;

let inputDirection = { x: 0, y: 0 };
let lastInputDirection = { x: 0, y: 0 };


window.addEventListener('keydown', e => {
    console.log(e.key);
    console.log(gamePaused)
    switch (e.key) {
        case 'ArrowUp':
        case 'w':
            if(lastInputDirection.y !== 0) break; //if the last input was up or down, don't change the direction
            inputDirection = { x: 0, y: -1 };
            break;
        case 'ArrowDown':
        case 's':
            if(lastInputDirection.y !== 0) break; //if the last input was up or down, don't change the direction
            inputDirection = { x: 0, y: 1 };
            break;
        case 'ArrowLeft':
        case 'a':
            if(lastInputDirection.x !== 0) break; //if the last input was left or right, don't change the direction
            inputDirection = { x: -1, y: 0 };
            break;
        case 'ArrowRight':
        case 'd':
            if(lastInputDirection.x !== 0) break; //if the last input was left or right, don't change the direction
            inputDirection = { x: 1, y: 0 };
            break;
        case 'p':
            gamePaused = !gamePaused;
            break;
        case 'Escape':
            settingsMenuActive = !settingsMenuActive;
            break;
    }
});

export function getInputDirection(){
    lastInputDirection = inputDirection;
    return inputDirection;
}
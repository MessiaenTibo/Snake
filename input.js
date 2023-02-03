export let gamePaused = false;

let inputDirection = { x: 0, y: 0 };
let lastInputDirection = { x: 0, y: 0 };


window.addEventListener('keydown', e => {
    console.log(e.key);
    console.log(gamePaused)
    switch (e.key) {
        case 'ArrowUp':
            if(lastInputDirection.y !== 0) break; //if the last input was up or down, don't change the direction
            inputDirection = { x: 0, y: -1 };
            break;
        case 'ArrowDown':
            if(lastInputDirection.y !== 0) break; //if the last input was up or down, don't change the direction
            inputDirection = { x: 0, y: 1 };
            break;
        case 'ArrowLeft':
            if(lastInputDirection.x !== 0) break; //if the last input was left or right, don't change the direction
            inputDirection = { x: -1, y: 0 };
            break;
        case 'ArrowRight':
            if(lastInputDirection.x !== 0) break; //if the last input was left or right, don't change the direction
            inputDirection = { x: 1, y: 0 };
            break;
        case 'p':
            gamePaused = !gamePaused;
    }
});

export function getInputDirection(){
    lastInputDirection = inputDirection;
    return inputDirection;
}
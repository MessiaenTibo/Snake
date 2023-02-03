import {onSnake, expandSnake} from './snake.js';
import {randomGridPosition} from './grid.js';

let food = getRandomFoodPosition();
const growth_input = document.getElementById('growth-input');
growth_input.value = localStorage.getItem('snakeGrowth') || 1; //get the value from the local storage or set it to 1 if it doesn't exist

let EXPANTION_RATE = growth_input.value;

// check if the growth input has changed
growth_input.addEventListener('change', () => {
    // get the new value of the growth input
    EXPANTION_RATE = growth_input.value;
    // store the new value in the local storage
    localStorage.setItem('snakeGrowth', EXPANTION_RATE);
});

export function update(){
    if(onSnake(food)){
        expandSnake(EXPANTION_RATE);
        food = getRandomFoodPosition();
    }
}

export function draw(gameBoard){
    const foodElement = document.createElement('div');
    foodElement.style.gridRowStart = food.y;
    foodElement.style.gridColumnStart = food.x;
    foodElement.classList.add('food');
    gameBoard.appendChild(foodElement);
}

function getRandomFoodPosition(){
    let newFoodPosition;
    while(newFoodPosition == null || onSnake(newFoodPosition)){
        newFoodPosition = randomGridPosition();
    }
    return newFoodPosition;
}

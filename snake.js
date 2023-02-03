import { getInputDirection } from "./input.js";

export const SNAKE_SPEED = 6; //segments per second
const snakeBody = [
    {x: 10, y: 11}
];
let newSegments = 0;

export function update(){
    addSegments();

    const inputDirection = getInputDirection();
    for (let i = snakeBody.length - 2; i >=0; i--){
        snakeBody[i + 1] = {...snakeBody[i]}; //copy the value of the previous segment into a new created segment
    }
    snakeBody[0].x += inputDirection.x;
    snakeBody[0].y += inputDirection.y;
}

export function draw(gameBoard){
    snakeBody.forEach(segment => {
        const snakeElement = document.createElement('div');
        snakeElement.style.gridRowStart = segment.y;
        snakeElement.style.gridColumnStart = segment.x;
        snakeElement.classList.add('snake');
        gameBoard.appendChild(snakeElement);
    });
}

export function expandSnake(amount){
    newSegments += amount;
}

export function onSnake(position, {ignoreHead = false} = {}){
    return snakeBody.some((segment, index) => {
        if(ignoreHead && index === 0) return false; //if ignoreHead is true and the index is 0, return false (don't check the head of the snake)
        return equalPositions(segment, position);
    });
}

export function getSnakeHead(){
    return snakeBody[0];
}

export function snakeIntersection(){
    return onSnake(snakeBody[0], {ignoreHead: true});
}

function equalPositions(pos1, pos2){
    return pos1.x === pos2.x && pos1.y === pos2.y;
}

function addSegments(){
    for(let i = 0; i < newSegments; i++){
        snakeBody.push({...snakeBody[snakeBody.length - 1]}); //copy the last segment and add it to the end of the snake
    }
    newSegments = 0;
}
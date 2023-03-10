import { update as updateSnake, draw as drawSnake, SNAKE_SPEED, getSnakeHead, snakeIntersection } from "./snake.js";
import { update as updateFood, draw as drawFood } from "./food.js";
import { outsideGrid } from "./grid.js";
import { gamePaused, settingsMenuActive } from "./input.js";

let lastRenderTime = 0;
let gameOver = false;
const gameBoard = document.getElementById('game-board');
const pause = document.getElementById('paused');
const settings = document.getElementById('settings');

function main(currentTime) {
    if(gameOver){
        if(confirm('You lost. Press ok to restart.')){
            window.location = '/Snake';
        }
        else{
            window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ', '_blank');
        }
        return;
    }

    window.requestAnimationFrame(main);
    if(gamePaused) {
        pause.style.display = 'block';
        return;
    }
    else if(settingsMenuActive)
    {
        settings.style.display = 'flex';
        return;
    }
    else {
        pause.style.display = 'none';
        settings.style.display = 'none';
    }
    const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000;
    if(secondsSinceLastRender < 1 / SNAKE_SPEED) return;
    lastRenderTime = currentTime;

    update();
    draw();
}

window.requestAnimationFrame(main);

function update(){
    updateSnake();
    updateFood();
    checkDeath();
}

function draw(){
    gameBoard.innerHTML = '';
    drawSnake(gameBoard);
    drawFood(gameBoard);
}

function checkDeath(){
    gameOver = outsideGrid(getSnakeHead()) || snakeIntersection();
}

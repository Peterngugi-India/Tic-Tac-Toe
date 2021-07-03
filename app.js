//DOM MAPPING
const board = document.querySelector('.container')
const cells = document.querySelectorAll('.cell')
const gameOver = document.querySelector('.winning-message')
const winningMessage = document.createElement('h2')

const resetButton = document.createElement('button')
resetButton.innerText = 'Play Again!'

resetButton.addEventListener('click', start, false)


//VARIABLES

let xTurn
let winning = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

//  Place X or O on board:

function playerMove(e) {
    let cell = e.target;
    let currentTurn = xTurn ? 'x' : 'circle';

    xTurn ? cell.setAttribute('class', 'cell x') : cell.setAttribute('class', 'cell circle');
    cell.removeEventListener('click', playerMove); 
    if(checkWin(currentTurn)) {
        return xTurn ? end('X') : end('Circle');
    } else if(draw()) {
        return end('Draw');
    }
    switchTurn();
}

// Determine whose turn it is & switch:
function switchTurn() {
    xTurn ? xTurn = false : xTurn = true;
}

function start() {
    for(let i = 0; i < 9; i++) {
        cells[i].className = 'cell'
    }
    while(gameOver.firstChild) {
        gameOver.removeChild(gameOver.firstChild)
    }
    gameOver.className = 'winning-message'
    xTurn = true;
    cells.forEach(cell => cell.addEventListener('click', playerMove))
}

function end(str) {
    str =='Draw' ? winningMessage.innerText = `${str} :-(` : winningMessage.innerText = `${str} wins!`;
    gameOver.appendChild(winningMessage);     //append winning message & restart button
    gameOver.appendChild(resetButton);
    gameOver.className = 'winning-message show';     //.show class
}

function checkWin(currentTurn) {
    return winning.some(combo => {
        return combo.every(index => {
            return cells[index].classList.contains(currentTurn);
        })
    })
}

function draw() {
    let counter = 0;
    for(let i = 0; i < 9; i++) {
        if(cells[i].classList.contains('x') || cells[i].classList.contains('circle')) {
            counter++;
        }
    }
    return counter === 9;
}


//Determine winner

start();

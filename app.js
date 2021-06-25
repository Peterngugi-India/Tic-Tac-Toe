//DOM MAPPING
const board = document.querySelector('.container')
const cells = document.querySelectorAll('.cell')

cells.forEach(cell => cell.addEventListener('click', playerMove))

//VARIABLES

let xTurn


//  Place X or O on board:

function playerMove(e) {
    let cell = e.target;

    xTurn ? cell.setAttribute('class', 'cell x') : cell.setAttribute('class', 'cell circle')
    
    switchTurn()
    // removes listener for a one-time click
    cell.removeEventListener('click', playerMove)
        // console.log('clicked')
}

// Determine whose turn it is & switch:
function switchTurn() {
    xTurn ? xTurn = false : xTurn = true
}
console.log(cells)

//Determine winner

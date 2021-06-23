const board = document.querySelector('.container')
const cells = document.querySelectorAll('.cell')

const x = document.createElement('div');
x.innerText = 'X'

const o = document.createElement('div');
o.innerText = 'O'


function playerMove(e) {
    let target = e.target;
    target.appendChild(x)
}

cells.forEach(cell => cell.addEventListener('click', playerMove, false))



console.log(cells);
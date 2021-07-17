// initialize variables and grid
let dimension = 16
let option = 'black'
let grid = document.querySelector("div[class='grid-container']")
makeGrid(dimension)
let items = document.querySelectorAll("div[class='grid-item']")
items.forEach(item => item.addEventListener("mouseover", (e) => e.toElement.classList.add(option)))
let clear = document.querySelector('#clear')
let size = document.querySelector('#size')
let grey = document.querySelector('#grey')
clear.addEventListener('click', clearColor)
size.addEventListener('click', changeSize)
grey.addEventListener('click', makeGreyscale)

function initialize() {
    items = document.querySelectorAll("div[class='grid-item']")
    items.forEach(item => item.addEventListener("mouseover", (e) => e.toElement.classList.add(option)))
}

// create grid x by x grid
function makeGrid(x) {
    for (let i=1;i<=(x*x);i++) {
        let node = document.createElement("div")
        node.classList.add('grid-item')
        grid.append(node)
    }
}

// clear button functionality
function clearColor() {
    grid.textContent = ''
    makeGrid(dimension)
    initialize()
}

// resize dimensions
function changeSize() {
    dimension = prompt("Enter a new size")
    if (dimension !== null) {
        if (!(dimension >= 1 && dimension <= 100)) {
            alert("Please enter a number between 1 and 100")
            changeSize()
        }
        else {
            grid.textContent = ''
            makeGrid(dimension)
            grid.style.gridTemplateColumns = `repeat(${dimension}, auto)`
            initialize()
        }
    }
}

// make greyscale
function makeGreyscale () {
    option = (option == 'black') ? 'grey' : 'black'
    grey.textContent = (grey.textContent == 'Change to Greyscale') ? 'Change to Black' : 'Change to Greyscale'
    items.forEach(item => item.replaceWith(item.cloneNode(true)))
    initialize()
}


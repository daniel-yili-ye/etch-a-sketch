let dimension = 16
let option = 'black'
let grid = document.querySelector("div[class='grid-container']")
makeGrid(dimension)

let items = document.querySelectorAll("div[class='grid-item']")
items.forEach(item => item.addEventListener("mouseover", (e) => {
    e.toElement.classList.add(option)
}))
let clear = document.querySelector('#clear')
let size = document.querySelector('#size')
let gray = document.querySelector('#gray')
clear.addEventListener('click', clearColor)
size.addEventListener('click', changeSize)
gray.addEventListener('click', makeGrayscale)

// create grid x by x grid
function makeGrid(x) {
    for (let i=1;i<=(x*x);i++) {
        let node = document.createElement("div")
        node.classList.add('grid-item')
        grid.append(node)
    }
}

// hover over and change color
function blackIn (e) {
    option = 'black'
    e.toElement.classList.add(option)
}

// clear button functionality
function clearColor() {
    grid.textContent = ''
    makeGrid(dimension)
    items = document.querySelectorAll("div[class='grid-item']")
    items.forEach(item => item.addEventListener("mouseover", (e) => {
        e.toElement.classList.add(option)
    }))
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
            items = document.querySelectorAll("div[class='grid-item']")
            items.forEach(item => item.addEventListener("mouseover", (e) => {
                e.toElement.classList.add(option)
            }))
        }
    }
}

// grey scale
function grayIn(e) {
    option = 'gray'
    e.toElement.classList.add(option)
}

// make gray
function makeGrayscale () {
    items = document.querySelectorAll("div[class='grid-item']")
    items.forEach(item => item.removeEventListener("mouseover", blackIn))
    items.forEach(item => item.addEventListener("mouseover", grayIn))
}


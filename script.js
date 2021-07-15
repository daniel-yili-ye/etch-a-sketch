// create grid x by x grid
const grid = document.querySelector("div[class='grid-container']")
function makeGrid(x) {
    for (let i=1;i<=(x*x);i++) {
        let node = document.createElement("div")
        node.classList.add('grid-item')
        grid.append(node)
    }
}
makeGrid(16)

// hover over and change color
let items = document.querySelectorAll("div[class='grid-item']")
function paintIn (e) {
    e.toElement.classList.add('paint')
}

items.forEach(item => item.addEventListener("mouseover", paintIn))

// clear button functionality
function removeColor() {
    items.forEach(item => item.classList.remove('paint'))
}
let clear = document.querySelector('#clear')
clear.addEventListener('click', removeColor)

// resize dimensions
function changeSize() {
    let dimension = prompt("Enter a new size")
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
                e.toElement.classList.add('paint')
            }))
        }
    }
}
const size = document.querySelector('#size')
size.addEventListener('click', changeSize)

// grey scale
const gray = document.querySelector('#gray')
gray.addEventListener('click', makeGrayscale)
function grayIn(e) {
    e.toElement.classList.add('gray')
}
function makeGrayscale () {
    items = document.querySelectorAll("div[class='grid-item']")
    items.forEach(item => item.removeEventListener("mouseover", paintIn))
    items.forEach(item => item.addEventListener("mouseover", grayIn))
}
// initialize variables and grid
let dimension = 16
let option = 'black'
let grid = document.querySelector("div[class='grid-container']")
makeGrid(dimension)
let items = document.querySelectorAll("div[class='grid-item']")
initialize()
let clear = document.querySelector('#clear')
let size = document.querySelector('#size')
let grey = document.querySelector('#grey')
let exp = document.querySelector('#export')
clear.addEventListener('click', clearColor)
size.addEventListener('click', changeSize)
grey.addEventListener('click', makeGreyscale)
exp.addEventListener('click', exportGrid)

function initialize() {
    items = document.querySelectorAll("div[class='grid-item']")
    let newShade;
    items.forEach(item => item.addEventListener("mouseover", (e) => {
        if (option == 'black') {
            newShade = 'rgb(0, 0, 0)';
        }
        else {
            newShade = getNewShade(e.target.style.backgroundColor);
        }
        e.target.style.backgroundColor = newShade;
    }))
}

function getNewShade(oldShade) {
    if (!oldShade) return 'rgba(0, 0, 0, 0.1)'
    if (oldShade === 'rgb(0, 0, 0)') return oldShade
    let oldNum = (oldShade.split(', ')[3]).slice(0, (oldShade.split(', ')[3]).length - 1)
    let newNum = Math.round((parseFloat(oldNum) + 0.1)*10)/10
    return `rgba(0, 0, 0, ${newNum})`
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
    items.forEach(item => item.replaceWith(item.cloneNode(true)))
    option = (option == 'black') ? 'grey' : 'black'
    grey.textContent = (grey.textContent == 'Change to Greyscale') ? 'Change to Black' : 'Change to Greyscale'
    initialize()
}

// export div grid
function exportGrid() {
    html2canvas(document.querySelector("div[class='grid-container']")).then(
        canvas => {
            var link = document.createElement('a');
            link.href = canvas.toDataURL();
            link.download = 'masterpiece.png';
            //document.body.appendChild(link);
            link.click();
            //document.body.removeChild(link);
        }
    )
}
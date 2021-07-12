const grid = document.querySelector("div[class='grid-container']")

for (let i=1;i<=(16*16);i++) {
    let node = document.createElement("div")
    node.classList.add('grid-item')
    grid.append(node)
}


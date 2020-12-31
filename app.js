const gridContainer = document.querySelector('#grid-container');
const gridRange = document.querySelector('#grid-size');
const gridRangeLabel = document.querySelector('label');

//set initial grid size for 16x16
gridContainer.style.gridTemplateColumns = `repeat(16, 1fr)`;
gridContainer.style.gridTemplateRows = "auto";

const gridElement = document.createElement('div');
gridElement.classList.add('grid-element');

let gridElementNum = 16**2-1;

for(let i = 0; i <= gridElementNum; i++){
    gridContainer.appendChild(gridElement.cloneNode());
}

let gridElements = Array.from(gridContainer.childNodes);

gridElements.forEach( elm => elm.addEventListener('mouseenter', function (e){
    this.style.backgroundColor = "black";
    this.style.opacity = "0.8";
} ));

const clearBtn = document.querySelector('#clear-button');
clearBtn.addEventListener('click', function(e){
    gridElements = Array.from(gridContainer.childNodes);
    gridElements.forEach( item => {
        item.style.backgroundColor = "blueviolet";
        item.style.opacity = "1";
    })
});

// Code below adds event listener to the range slider and changes the grid size 
gridRange.addEventListener('input', function(e){
    gridContainer.innerHTML = "";
    let gridSize = Number(this.value);
    console.log(gridSize);
    gridRangeLabel.innerText = `Grid size: ${gridSize} x ${gridSize}`;
    gridContainer.style.gridTemplateColumns = `repeat(${Number(gridSize)}, 1fr)`;
    gridContainer.style.gridTemplateRows = "auto";
    let gridElementNum = (Number(gridSize))**2-1;
    console.log(gridElementNum);
    const gridElement = document.createElement('div');
    gridElement.classList.add('grid-element');

    for(let i = 0; i <= gridElementNum; i++){
        gridContainer.appendChild(gridElement.cloneNode());
    }

    const gridElements = Array.from(gridContainer.childNodes);
    console.log(gridElements);

    gridElements.forEach( elm => elm.addEventListener('mouseenter', function (e){
        this.style.backgroundColor = "black";
        this.style.opacity = "0.8";
    } ));
});

//let gridSize = gridRange.value;
//console.log(Number(gridSize));
//gridContainer.style.gridTemplateColumns = `repeat(${Number(gridSize)}, 1fr)`;
//gridContainer.style.gridTemplateRows = "auto";

//const gridElement = document.createElement('div');
//gridElement.classList.add('grid-element');

//let gridElementNum = (Number(gridSize))**2-1;
//console.log(gridElementNum);

//for(let i = 0; i <= gridElementNum; i++){
//    gridContainer.appendChild(gridElement.cloneNode());
//}

//const gridElements = Array.from(gridContainer.childNodes);

//console.log(gridElements);
//gridElements.forEach( elm => elm.addEventListener('mouseenter', function (e){
//    this.style.backgroundColor = "black";
//    this.style.opacity = "0.8";
//} ));
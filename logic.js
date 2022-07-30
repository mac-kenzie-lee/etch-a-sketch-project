
const colors = {};
const gridSize = 29;
const DIV = {};
DIV.events = [];
DIV.container = document.querySelector("#drawing-canvas");
BLOCKS = {};

//nameing format is row # block # = r1b1
 let myLabel = "";
let rowLabel = "";

for (let row = 1; row <= gridSize; row++) {

    rowLabel = makeRowLabel(row);
    DIV[rowLabel] = document.createElement("div");
    DIV[rowLabel].classList.add(rowLabel, "row"); 

    for (let block = 1; block <= gridSize; block++) {

        myLabel = makeBlockLabel(row, block);
        BLOCKS[myLabel] = document.createElement("div");
        BLOCKS[myLabel].classList.add(myLabel, "block"); 
        //BLOCKS[myLabel].textContent = myLabel;
        DIV[rowLabel].appendChild(BLOCKS[myLabel]);
        let eventLabel = "eventFor" + myLabel;
        DIV.events.push(eventLabel);

    }

    DIV.container.appendChild(DIV[rowLabel]);

}

let bgColorBox1 = document.querySelector("#form")
let bgColorChange = bgColorBox1.addEventListener("submit", (e) => {

    e.preventDefault();
    let colorChange = (e.target.children.colorPicker.value);
    DIV.container.style.borderColor = colorChange;
    for (let i in BLOCKS){
        BLOCKS[i].style.borderColor = colorChange;
    } 
})





let cArray = ["red", "blue", "green", "black", "white", "yellow", "orange", "indigo", "pink"];
let kArray = ["R", "B", "G", "K", "W", "Y", "O", "I", "P"];
for (let c in cArray) {

    let search = ".bt" + kArray[c];
    let currColor = cArray[c];
    colors[currColor] = document.querySelector(search);
    colors[currColor].addEventListener("click", () => { startPaintingViaClick(currColor)})

}

let space = document.querySelector(".space");

space.addEventListener("click", () => {
    clear();
})

let keyCheck = document.addEventListener("keydown", (e) =>
{
    if (e.code === "KeyR") {
        startPainting("red");
    }
    else if (e.code === "KeyB") {
        startPainting("blue");
    }
    else if (e.code === "KeyG") {
        startPainting("green");
    } else if (e.code === "KeyK") {
        startPainting("black");
    } else if (e.code === "KeyY") {
        startPainting("yellow");
    } else if (e.code === "KeyO") {
        startPainting("orange");
    } else if (e.code === "KeyP") {
        startPainting("pink");
    } else if (e.code === "KeyW") {
        startPainting("white");
    } else if (e.code === "KeyI") {
        startPainting("indigo");
    }
    else if (e.code === "Space") {
        clear();
    }

}
)

function clear() {
    for (let item in BLOCKS) {
            BLOCKS[item].classList.remove("red", "green", "blue", 
            "black", "yellow", "orange", "white", "pink", "indigo");
        }
    
    }
    


function startPainting(classname) {
for (let item in BLOCKS) {
    
    function paint(){
        BLOCKS[item].classList.add(classname);
    }
    
   
    BLOCKS[item].addEventListener("mouseenter", paint) 
    
    // document.addEventListener("keydown", erase);

    document.addEventListener("click", () => {
        BLOCKS[item].removeEventListener("mouseenter", paint)

    })
    
}
}





function startPaintingViaClick(classname) {
    for (let item in BLOCKS) {
        
        function paint(){
            BLOCKS[item].classList.add(classname);
        }
        
       
        BLOCKS[item].addEventListener("mouseover", paint) 

    
        document.addEventListener("dblclick", () => {
            BLOCKS[item].removeEventListener("mouseover", paint)
    
        })
        
    }
    }
    
    










//creates a label for the grids, takes in two numbers and returns a string
function makeBlockLabel(number1, number2) {
    let thisLabel = "row" + String(number1) + "Block" + String(number2);
    return thisLabel;    
}

function makeRowLabel(number) {
    return "row" + String(number);
}

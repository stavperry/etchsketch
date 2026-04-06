const gridTarget = document.querySelector("#container");

function mkDiv() {
    for (let i = 0; i < 256; i++) {
        const square = document.createElement("div") // creates a div
        square.classList.add("squares")
        square.style.height = `${800 / 16}px`; // default height of 16px
        square.style.width = `${800 / 16}px`; // default weight of 16px
        gridTarget.appendChild(square);
    }

}

mkDiv();

// i want to create an eventlistener that changes the div background-colour from gray to black on mouse-over.
gridTarget.addEventListener("mouseover", (e) => {
    // e.target refers to the specific .squares div your mouse is over
    if (e.target.classList.contains("squares")) {
        e.target.style.backgroundColor = "black";
    }
});

// use the button on the page to make a pop up to ask for grid size.
const btn = document.querySelector(".popUp");

//this triggers the pop up that asks for an input from the user regarding grid size.
btn.addEventListener("click", (e) => {
    let gridSize = Number(prompt("how many squares per row would you like?"));
    function newCanvas() {
        gridTarget.innerHTML = "";
        for (let i = 0; i < (gridSize * gridSize); i++ ) {
            const square = document.createElement("div") // creates a div
            square.classList.add("squares")
            square.style.height = `${800 / gridSize}px`; // height set to 800 divided by user input number
            square.style.width = `${800 / gridSize}px`;
            gridTarget.appendChild(square);        
    }
}
newCanvas();
});
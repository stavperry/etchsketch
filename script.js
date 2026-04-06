const gridTarget = document.querySelector("#container");

function mkDiv() {
    for (let i = 0; i < 256; i++) {
        const square = document.createElement("div") // creates a div
        square.classList.add("squares")
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
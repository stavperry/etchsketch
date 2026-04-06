const gridTarget = document.querySelector("#container");

function mkDiv() {
    for (i = 0; i < 256; i++) {
        const square = document.createElement("div") // creates a div
        square.classList.add("squares")
        gridTarget.appendChild(square);
    }

}

console.log(mkDiv());
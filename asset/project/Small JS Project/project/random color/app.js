const colors = [
    "#008080",
    "#F8B195",
    "#F67280",
    "#C06C84",
    "#6C5B7B",
    "#355C7D",
    "#99B898",
    "#FECEAB",
    "#FF847C",
    "#E84A5F",
    "#2A363B"
]



function changeColor() {
    const background = document.querySelector("body");
    const colorText = document.querySelector("#color");
    let random = Math.floor(Math.random() * colors.length)
    console.log(random)
    background.style.backgroundColor = colors[random];
    colorText.value = colors[random];
    //Make copy button work
    const copyBtn = document.querySelector("#copyBtn")
    copyBtn.onclick = function () { copy("color") }
}

function copy(idOfText) {
    let copyText = document.getElementById(idOfText);
    copyText.select();
    copyText.setSelectionRange(0, 99999)
    document.execCommand("copy");
    alert("Copied the text: " + copyText.value);
}


changeColor()

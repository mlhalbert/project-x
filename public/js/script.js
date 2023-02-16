// Your code that will be used by handlebars/Frontend goes in this js folder path
const box = document.getElementsByClassName("word");

for (let i = 0; i < box.length; i++) {
    box[i].addEventListener('click', clicked);
    
}

// box.addEventListener('click', clicked);

function clicked(event) {
    const square = event.target
    confetti.start();
    setTimeout(function () { confetti.stop(); }, 1000)
    square.classList.add("clicked");
};








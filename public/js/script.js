// Your code that will be used by handlebars/Frontend goes in this js folder path
const box = document.getElementsByClassName("word");
const check = document.getElementsByClassName("clicked");
// const table = document.getElementsByTagName("td");

// const row1 = document.querySelector("row1");

for (let i = 0; i < box.length; i++) {
    box[i].addEventListener('click', selected);
}

function selected(event) {
    if (event.target.classList.contains("clicked")) {
        document.removeEventListener('click', selected)
    } else {
    const square = event.target;
    confetti.start();
    setTimeout(function () { confetti.stop(); }, 1000)
    square.classList.add("clicked");
    console.log(square);
    console.log(check);
    }
    
};

// let tableTwo = box.classList.contains("clicked");
// console.log(tableTwo);


// if (table.children.length == table.querySelectorAll("clicked").length)  {
//     console.log("------------------------worked--------------------------");
// };
function audit() {
console.log(check.length);
console.log(box.length);

// if (check.length === box.length) {
//     console.log(fuck);
// }
};
// function validate() {
//     // event.preventDefault();
//     var thing = document.getElementsByClassName('clicked');
//     for (var i=0; i<thing.length; i++) {
//         if (!thing[i].classList.contains("word")) {
//            return alert("fuck you"); 
//         } 
//     }
//     console.log("yay");
// }

// console.log(['word'].every(e=>table.classList.contains(e)))
// console.log(['word', 'clicked'].every(e=>table.classList.contains(e)))



// function checkstat() {
// if (table.length.classList.contains("clicked")){
// 	//return true
//   console.log('true');
// }
// else{
// 	//return false
//   console.log('false');
// }
// };

// checkstat();

// validate();

audit();
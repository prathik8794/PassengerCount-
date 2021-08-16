
let count = 0;
//camelCase
let countEl = document.getElementById("count-el");

function increment(){
    count=count+1;
    countEl.textContent = count;
}
function reset(){
    count=0;
    countEl.innerText = 0;
    document.getElementById("save-el").innerText = "Previous entires:";
}
function save(){
    let message = document.getElementById("save-el");
    message.textContent += count + " - ";
}
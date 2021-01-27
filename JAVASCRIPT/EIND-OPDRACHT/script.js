//Selectors ID's:
const display = document.getElementById("display");
const clearButton = document.getElementById("clearButton");
const plusMinus= document.getElementById("plusMinus");
const decimal = document.getElementById("decimal");
const operator = document.getElementById("operator");
// selectors classes:
const displayOutput = document.getElementsByClassName("display-output");
const buttonNumber = document.getElementsByClassName("button-number");
let one = "";
let two = "";
let numbersList = [];

function clear () {
    display.innerHTML = "0";
    numbersList = [];
    clearButton.innerText = "AC";
    console.log("hello")
}

function nummerInvoer(nummerInput) {    
numbersList.push(nummerInput.innerHTML);
display.innerText = numbersList.join("");
clearButton.innerText = "C";

}










clearButton.addEventListener("click", clear);
// van de element voegen wij een even listener toe "click"= click event 
//en na de comma  pak je de functienaam. Eventlistener staat altijd aan het einde van je js bestand.



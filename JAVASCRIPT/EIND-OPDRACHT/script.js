//Selectors ID's:
const display = document.getElementById("display");
const clearButton = document.getElementById("clearButton");
const plusMinus= document.getElementById("plusMinus");
const decimal = document.getElementById("decimal");
const operators = document.getElementById("operator");

// selectors classes:
const displayOutput = document.getElementsByClassName("display-output");
const buttonNumber = document.getElementsByClassName("button-number");

// alleen bij = uitkomsten gebruiken.
let one = "";
let two = "";
let numbersList = [];


function screen() {
    return document.getElementById("display").innerHTML;   
}


function clear () {
    display.innerHTML = "0";
    numbersList = [];
    clearButton.innerText = "AC";
    //console.log("hello")
}


function operatorplus(nummerInput) {
    const plus = document.getElementById("+").innerHTML;
    document.getElementById("display").innerHTML = screen() + plus;
    numbersList.push(nummerInput.innerHTML);
    //console.log(plus);
}

function operatorminus(nummerInput) {
    const min = document.getElementById("minus").innerHTML;
    document.getElementById("display").innerHTML = screen() + min; 
    numbersList.push(nummerInput.innerHTML); 
}

function operatordiv(nummerInput) {
    const delen = document.getElementById("division").innerHTML;
    document.getElementById("display").innerHTML = screen() + delen;
    numbersList.push(nummerInput.innerHTML);
}

function operatormultiply(nummerInput) {
    const keer = document.getElementById("multiply").innerHTML;
    document.getElementById("display").innerHTML = screen() + keer;
    numbersList.push(nummerInput.innerHTML);
}

function operatorresultaat() {
    const resultaat = document.getElementById("display").value;
    resultaat = eval(resultaat);
    document.getElementById("display").innerHTML = resultaat; 
    // numbersList.push(nummerInput.innerHTML);
    // display.innerText = numbersList.join("");
    // numbersList = [];
    // console.log(resultaat);
}


// Push functie, voegt nieuwe element toe aan het einde van de array.
//The join() method returns the array as a string.
function nummerInvoer(nummerInput) {    
    numbersList.push(nummerInput.innerHTML);
    display.innerText = numbersList.join("");
    clearButton.innerText = "C";
    console.log(nummerInput);
}



clearButton.addEventListener("click", clear);
// van de element voegen wij een event listener toe "click"= click event 
//en na de comma  pak je de functienaam. Eventlistener staat altijd aan het einde van je JS bestand.



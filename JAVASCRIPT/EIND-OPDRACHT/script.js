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
let getal = "";
//let two = "";
let numbersList = [];

// Display aanroepen.
function screen() {
    return document.getElementById("display").innerHTML;   
}

//Function clear button.
function clear () {
    display.innerHTML = "0";
    numbersList = [];
    clearButton.innerText = "AC";
    //console.log("hello")
}

// Kleurverandering oranje naar wit en weer terug naar oranje. Gebruik gemaakt van querySElector.
document.querySelectorAll(".button-orange").forEach(function(obj) {
    obj.addEventListener("mousedown", function () {
        this.style.backgroundColor = "white";
        this.style.color = "orange";
    })
    obj.addEventListener("mouseup", function () {
        this.style.backgroundColor = "orange";
        this.style.color = "white";   
    })
});

// Functions basis berekeningen:
function operatorplus(nummerInput) {
    const plus = document.getElementById("+").innerHTML;
    document.getElementById("display").innerHTML = screen() + plus; 
    numbersList.push(nummerInput.innerHTML); 
}
    
function operatorminus(nummerInput) {
    const min = document.getElementById("minus").innerHTML;
    document.getElementById("display").innerHTML = screen() + min; 
    numbersList.push(nummerInput.innerHTML); 
}

function operatordivide(nummerInput) {
    const delen = document.getElementById("division").innerHTML;
    document.getElementById("display").innerHTML = screen() + delen;
    numbersList.push(nummerInput.innerHTML);
}

function operatormultiply(nummerInput) {
    const vermenigvuldig = document.getElementById("*").innerHTML;
    document.getElementById("display").innerHTML = screen() + vermenigvuldig;
    numbersList.push(nummerInput.innerHTML);
    console.log(numbersList);
}

function operatormodulos(nummerInput) {
    const modulo = document.getElementById("%").innerHTML;
    document.getElementById("display").innerHTML = screen() + modulo;
    numbersList.push(nummerInput.innerHTML);
}

// function operatorPlusMin(nummerInput) {
//     const plusMin = document.getElementById("plusMinus").innerHTML;
//     const uikomst = document.getElementById("display").innerHTML = screen() + plusMin;
//     numbersList.push(nummerInput.innerHTML);

//     if (plusMin = getal()) {
//         uitkomst.innerHTML = getal() - getal() * 2;  
//     }
// }

// function operatorPlusMin(nummerInput) {
//     var getal1 = document.getElementById('1').innerHTML;
//     var getal2 = document.getElementById('2').innerHTML;
//     const plusMin = document.getElementById("plusMinus").innerHTML;
//     document.getElementsByClassName("display").innerHTML = parseFloat(getal1) - parseFloat(getal2) * 2;
//     numbersList.push(nummerInput.innerHTML);
//     //document.form1.submit();
// }

function operatorPlusMin(nummerInput) {
    const  plusMin = document.getElementById("plusMinus").innerHTML;
    document.getElementById("display").innerHTML = screen() + plusMin;
    numbersList.push(nummerInput.innerHTML);   
}

// function resultaat:
function operatorresultaat() {
    let resultaat = document.getElementById("display").innerHTML;
    resultaat = eval(resultaat).toFixed(2);
    document.getElementById("display").innerHTML = resultaat; 
}

// Push functie, voegt nieuwe element toe aan het einde van de array.
//The join() method returns the array as a string.
function nummerInvoer(nummerInput) {    
    numbersList.push(nummerInput.innerHTML);
    display.innerText = numbersList.join("");
    clearButton.innerText = "C";
    //console.log(nummerInput);
}


clearButton.addEventListener("click", clear);
// van de element voegen wij een event listener toe "click"= click event,
//na de comma pak je de functienaam. Eventlistener plaats je altijd aan het eind van je JS bestand.



// Opdracht 1: Maak een array met 10 getallen die willekeurig in een array staan. Print de array uit in jouw console.-->  
const randomNumbers = [7, 3, 6, 4, 2, 9, 1, 0, 8, 5]; // [] hiermee geef je een array aan.
console.log(randomNumbers);

// Opdracht 2: Maak een array met 5 verschillende fruitsoorten. Print de array uit in jouw console.
const fruitsoorten = ["Mango", "Aardbei", "Appel", "Sinaasappel", "Passievrucht"];
console.log(fruitsoorten);

fruitsoorten[2]; // vraag 3.
fruitsoorten[1]; // vraag 4.
console.log(fruitsoorten[1]); // Uitvoer is Aardbei.

// Opdracht 3: Op welke index staat “Appel”. Gebruik de index waarde om “Appel” in jouw console uit te printen.
// Opdracht 4:Op welke index staat “Aardbei”. Gebruik de index waarde om “Aardbei” in jouw console uit te printen.

// Opdracht 5:
// We gaan het iets complexer maken met het bepalen van de fruit. Er zijn nu 2 arrays
// gedefinieerd, namelijk een array met getallen en een array met fruitsoorten. 

// 1. De eerste array bepaalt welke fruitsoort er geprint moet worden. 

// 2. Gebruik de Math.random() methode om te bepalen welke waarde uit de eerste array wordt gehaald.

// 3. Vervolgens kun je de waarde gebruiken als index en de fruitsoort printen in jouw console. 

// Helaas, de getallen 5 t/m 10 uit de eerste array zullen een undefined teruggeven als je 
// dat als index bij de fruit array zal gebruiken. Hiervoor kun je de modulo (%) gebruiken. 

// 4. Zoek uit hoe modulo werkt en pas dat toe aan de waarde van de eerste array. 

// 5. Als resultaat zal er altijd een fruitsoort uitgeprint worden.

function name(params) {
    
}

// Opdracht 6:
// Je hebt nu geleerd hoe je arrays kunt aanmaken en de waarde kunt benaderen.
//  Arrays hebben ook functies die je kunt gebruiken. Zoek uit wat push(), pop(), shift(), slice(), splice(),
// sort(). Maak gebruik van de fruits array en maak voor elke functie een voorbeeld en geef in commentaar wat het doet.

// Push method:
fruitsoorten.push('Nieuwe fruitsoort toegevoegd'); // voegt nieuwe element toe aan het einde van de array.
console.log(fruitsoorten);

// Pop method:
fruitsoorten.pop(); // Verwijdert laatste value van de array.
console.log(fruitsoorten);

// Shift method:
fruitsoorten.shift('Verwijder eerste fruitsoort'); // Verwijdert de eerste value van een array.

// Slice method:
console.log(fruitsoorten.slice(3, 9));

// Splice method:
const fruitsoorten1 = ["Mango", "Aardbei", "Appel", "Sinaasappel", "Passievrucht"];

fruitsoorten1.splice(3, 1, "Mandarijn"); // vervangt 1 element op index 3.
console.log(fruitsoorten1);

// Sort method:
fruitsoorten1.month();
console.log(fruitsoorten1);





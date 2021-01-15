// Opdracht 1: Maak een array met 10 getallen die willekeurig in een array staan. Print de array uit in jouw console.-->  
const randomNumbers = [7, 3, 6, 4, 2, 9, 1, 0, 8, 5]; // [] hiermee geef je een array aan.
//console.log(randomNumbers);


// Opdracht 2: Maak een array met 5 verschillende fruitsoorten. Print de array uit in jouw console.
const fruitSoorten = ["Mango", "Aardbei", "Appel", "Sinaasappel", "Passievrucht"];
console.log(fruitSoorten);

fruitSoorten[2]; // vraag 3.
fruitSoorten[1]; // vraag 4.
console.log(fruitSoorten[1]); // Uitvoer is Aardbei.

// Opdracht 3: Op welke index staat “Appel”. Gebruik de index waarde om “Appel” in jouw console uit te printen.
// Opdracht 4:Op welke index staat “Aardbei”. Gebruik de index waarde om “Aardbei” in jouw console uit te printen.


// Opdracht 5:
// We gaan het iets complexer maken met het bepalen van de fruit. Er zijn nu 2 arrays
// gedefinieerd, namelijk een array met getallen en een array met fruitsoorten. 

// 1. De eerste array bepaalt welke fruitsoort er geprint moet worden. 
// 2. Gebruik de Math.random() methode om te bepalen welke waarde uit de eerste array wordt gehaald.

// Notities:
// Math.random selecteert random getallen tussen o en 1. bijv. 0,12334 0,98876 etc.
// math.floor, rond altijd af naar beneden. Bijv. 2,9 = 2.
// math.round rond af op de normale manier.
 
let compare = randomNumbers[Math.floor(Math.random()*randomNumbers.length)]; // returns a random integer from 0 to 9.

if (compare >= 5) {
    compare %= 2;
console.log(fruitSoorten[compare]);
}




// Helaas, de getallen 5 t/m 10 uit de eerste array zullen een undefined teruggeven als je 
// dat als index bij de fruit array zal gebruiken. Hiervoor kun je de modulo (%) gebruiken.
// 4. Zoek uit hoe modulo werkt en pas dat toe aan de waarde van de eerste array. 
// 5. Als resultaat zal er altijd een fruitsoort uitgeprint worden.


// Opdracht 6:
// Je hebt nu geleerd hoe je arrays kunt aanmaken en de waarde kunt benaderen.
//  Arrays hebben ook functies die je kunt gebruiken. Zoek uit wat push(), pop(), shift(), slice(), splice(),
// sort(). Maak gebruik van de fruits array en maak voor elke functie een voorbeeld en geef in commentaar wat het doet.

// Push method:
fruitSoorten.push('Nieuwe fruitsoort toegevoegd'); // voegt nieuwe element toe aan het einde van de array.
console.log(fruitSoorten);

// Pop method:
fruitSoorten.pop(); // Verwijdert laatste value van de array.
console.log(fruitSoorten);

// Shift method: (Unshift voegt een nieuwe element toe aan het begin van een array.)
fruitSoorten.shift('Verwijder eerste fruitsoort'); // Verwijdert de eerste value van een array.

// Slice method:
console.log(fruitSoorten.slice(3, 9));

// Splice method: 
const fruitsoorten1 = ["Mango", "Aardbei", "Appel", "Sinaasappel", "Passievrucht"];

fruitsoorten1.splice(3, 1, "Mandarijn"); // vervangt 1 element op index 3.
console.log(fruitsoorten1);

// Sort method:
const fruitsoorten2 = ["Mango", "Aardbei", "Appel", "Sinaasappel", "Passievrucht"];

fruitsoorten2.sort();
console.log(fruitsoorten2); // sorteert het op alfabetische volgorde.


// Opdracht 7:
// Naast de functies die je van de array kunt gebruiken heb je ook nog de “length” property die je kunt gebruiken. 
// Hiermee kan je de grootte van de array opvragen. Gebruik de length property en print in de console uit hoe groot de fruits array is.
const fruitsoorten3 = ["Mango", "Aardbei", "Appel", "Sinaasappel", "Passievrucht", "Mandarijn", "Kiwi"];

fruitsoorten3.sort();
console.log(fruitsoorten3.length); // length is 7.


// Opdracht 8:
// De bestaande values van de array kan je ook aanpassen. Zoek uit hoe je op een specifieke index de waarde kan aanpassen. 
// Pas de value “Peer” naar “Sinaasappel”.
let fruit = ["Mango", "Aardbei", "Appel", "Peer", "Passievrucht"];
let replacedFruit = fruit.slice(fruit.indexOf("Peer"), 1, "Sinaasappel");

console.log(replacedFruit); 
console.log(fruit); 


let items = ['JS', 'PHP', 'RUBY'];
let replacedItem = items.splice(items.indexOf('RUBY'), 1, 'PYTHON')

console.log(replacedItem) //['RUBY']
console.log(items) //['JS', 'PHP', 'PYTHON']


// Opdracht 9:
// Kijkend naar de fruits array. Hoe draai je de values “Aardbei” en “Mandarijn” om in de array door gebruik te maken van indices (index).
let fruit2 = ["Mango", "Aardbei", "Appel", "Peer", "Passievrucht", "Mandarijn"];




"use strict";
// WORKING WITH STRING METHODS:

/* GENERAL EXPLANATION:

-> THERE ARE MANY METHODS USE FOR STRINGS.
-> WE DEFINED SOME METHODS WHICH ARE VERY USEFUL MOST OF THE TIME.

-> STRINGS ARE PRIMITIVES , HOW IT ACCEPT AND CALL METHODS OR PROPERTIES?
-> THE LOGIC BEHIND THIS IS , WHENEVER WE CALL A METHOD OR PROPERTY , THE STRING AUTOMATICALLY CONVERTS TO OBJECT IN WHICH THE METHOD IS THEN CALLED.
-> IT IS THE CONCEPT OF BOXING IN JS
-> BECAUSE IT WRAP IN OBJECTS AND AFTER METHOD IS CALLED , THEN THE OBJECT AUTOMATICALLY CONVERTS BACK TO STRING.

-> WE CAN FIX CAPITALIZATION OF STRING BY USING TO UPPER LOWER AND SLICE METHODS.

-> WE CAN COMPARE STRINGS LIKE EMAILS.
*/

const airline = "TAP AIR Portugal";
const plane = "A320";

// WE CAN FIND INDEX OF EVERY LETTER:
console.log(plane[0]); // A
console.log(plane[1]); // 3
console.log(plane[2]); // 2

// WE CAN CHECK THE LENGTH OF STRING.
console.log(plane.length); // 4

// WE FIND THE INDEX OF A LETTER OR WORD:
console.log(plane.indexOf("A")); // 0
// FOR THE LAST INDEX IF WE HAVE SAME LETTERS:
console.log(plane.lastIndexOf("3")); // 1
console.log(airline.indexOf("Portugal")); // 8

// WE CAN USE THE SLICE METHOD:
// IT EXTRACT THE LETTER OR WORD:
console.log(airline.slice(4)); // IT CUT THE FIRST 4 INDEXES

console.log(airline.slice(4, 7)); // CUT FIRST 4 INDEX AND 7 LAST.

// WE CAN AVOID HARDCODE IF WE DON'T KNOW THE INDEX OF A STRING:
console.log(airline.slice(0, airline.indexOf(" "))); // TAP

// LET'S MAKE A FUNCTION:
const checkMiddleSeat = function (seat) {
  // B and E are Middle seats
  const s = seat.slice(-1);
  if (s === "B" || s === "E") {
    console.log("You got the middle seat 🐄");
  } else {
    console.log("You got lucky 🤑");
  }
};
checkMiddleSeat("11B");
checkMiddleSeat("23C");
checkMiddleSeat("3E");

// WE CAN CHECK HOW STRING ACTUALLY CONVERTS TO AN OBJECT:
console.log(new String("Abuzar"));
console.log(typeof new String("RaziQ")); // OBJECT

// HOW IT CONVERTS BACK TO PRIMITIVE:
console.log(new String("Shafqat".indexOf("S"))); // 0
console.log(typeof new String("Khan").slice(1)); // String

// WE CAN FIX CAPITALIZATION IN NAME:
const userName = "aBuZaR";

// FIRST CONVERT IT TO LOWERCASE:
const userNameToLower = userName.toLowerCase();

// THEN:
const userNameCorrect =
  userNameToLower[0].toUpperCase() + userNameToLower.slice(1);
console.log(userNameCorrect); // Abuzar

// COMPARING EMAILS:
const email = "hello@jonas.io";
const loginEmail = "Hello@Jonas.Io \n";

const normalizedEmail = loginEmail.toLowerCase().trim();
console.log(normalizedEmail);

// REPLACING STRINGS:
const priceGB = "288,97 Pounds";
const priceUS = priceGB.replace("Pounds", "$").replace(",", ".");
console.log(priceGB, "to", priceUS);

// REPLACING THE ENTIRE WORLD:
const anouncement =
  "All passengers come to boarding door 23 , Boarding door 23";
console.log(anouncement.replaceAll("door", "gate"));

// WE CAN USE REGULAR EXPRESSION AS WELL:
console.log(anouncement.replace(/door/g, "gate"));

// BOOLEANS:
const plan = "Airbus A320neo";
console.log(plane.includes("A320")); // TRUE

if (plan.startsWith("Airbus") && plan.endsWith("neo")) {
  console.log("Part of the new Airbus Family");
}

const checkBaggage = function (items) {
  const itemsLower = items.toLowerCase();

  if (itemsLower.includes("gun") || itemsLower.includes("knife")) {
    console.log("YOU ARE NOT ALLOWED ON BOARD");
  } else {
    console.log("WELCOME ABOARD");
  }
};

checkBaggage("I have laptop , some food and pocket Knife");
checkBaggage("Got some snacks and a gun for protection");
checkBaggage("Snacks and Camera");

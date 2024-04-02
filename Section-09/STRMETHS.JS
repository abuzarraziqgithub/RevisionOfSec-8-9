"use strict";
// WORKING WITH STRING METHODS:

/* GENERAL EXPLANATION:

-> THERE ARE MANY METHODS USE FOR STRINGS.
-> WE DEFINED SOME METHODS WHICH ARE VERY USEFUL MOST OF THE TIME.

-> STRINGS ARE PRIMITIVES , HOW IT ACCEPT AND CALL METHODS OR PROPERTIES?
-> THE LOGIC BEHIND THIS IS , WHENEVER WE CALL A METHOD OR PROPERTY , THE STRING AUTOMATICALLY CONVERTS TO OBJECT IN WHICH THE METHOD IS THEN CALLED.
-> IT IS THE CONCEPT OF BOXING IN JS
-> BECAUSE IT WRAP IN OBJECTS AND AFTER METHOD IS CALLED , THEN THE OBJECT AUTOMATICALLY CONVERTS BACK TO STRING.

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

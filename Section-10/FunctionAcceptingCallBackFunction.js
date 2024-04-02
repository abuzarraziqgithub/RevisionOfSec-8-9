"use strict";

/* GENERAL EXPLANATION:
->  WE USE FIRSTCLASS FUNCTIONS TO DEFINE AND DO SOME LOGIC.
-> WE USE FIRSTCLASS FUNCTIONS FOR DEFINING LOGICS .
-> WE THEN PASS THOSE FIRSTCLASS FUNCTIONS TO HIGHER ORDER FUNCTIONS AS AN ARGUMENTS.
-> THIS CONCEPT IS ALSO CALLED ABSTRACTION , BECAUSE THE HIGHER ORDER FUNCTION DOESN'T REALLY CARE ABOUT WAHT TO DO , IT SIMPLY RECIEVES THE FIRSTCLASS FUNCTION AS AN ARGUMENT AND THOSE CALLBACKS OR FIRSTCLASS FUNCTIONS ARE DOING THE ACTUALL WORK. 
-> IT IS THE WAY OF WRITING A REUSABLE AND CLEAN CODE.


-> CALLBACK FUNCTIONS HAS A CRUCIAL ROLE IN JAVASCRIPT.
*/

// FIRST CLASS FUNCTIONS
const oneWord = function (str) {
  return str.replace(/ /g, "").toLowerCase();
};
const upperFirstWord = function (str) {
  const [first, ...others] = str.split(" ");
  return [[first[0].toUpperCase(), first.slice(1)].join(""), ...others].join(
    " "
  );
};

// HIGHER ORDER FUNCTIONS:
const transformer = function (str, fn) {
  console.log(`Original String : ${str}`);
  console.log(`Transformed String: ${fn(str)}`);

  console.log(`Transformed by: ${fn.name}`);
};

transformer("Abuzar RaziQ", oneWord);
transformer("abuzarraziq", upperFirstWord);

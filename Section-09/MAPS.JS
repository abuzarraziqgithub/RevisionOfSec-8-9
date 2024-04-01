"use strict";
// MAP

/* GENERAL EXPLANATION:

-> MAP IS ANOTHER TYPE OF DATA STRUCTURE THAT IS INTRODUCED IN ES6 TO MAP VALUES AND KEYS.

-> WE STORE DATA IN KEYS AND VALUES PAIR LIKE OBJECTS.

-> USING MAP , WE CAN USE KEY OF ANY DATA TYPE , LIKE NUMBER , BOOLEAN , STRINGS
-> WE CAN ONLY USE STRING AS KEY IN OBJECTS.

-> WE ADD KEY/VALUES BY USING SET METHOD.
-> THE SET METHOD NOT ONLY SET/UPDATE THE KEY VALUE BUT ALSO RETURN IT DIRECTLY AFTER ASSIGNING , SO WE CAN THEN CHAIN IT AFTER EACH SET.

-> WE CAN ALSO GET KEY VALUE BY USING GET METHOD.

-> BY USING GET METHOD , WE CAN DO SOME LOGIC BY DEFINING BOOLEAN KEYS AND THIER VALUES.

-> WE CAN USE MAPS FOR THE DOM ELEMENT.


-> THERE IS ANOTHER WAY OF POPULATING MAP.
-> WE CAN CONVERT OBJECTS INTO MAPS.

-> WE CAN COVERT MAP INTO ARRAY BY USING THE SPREAD OPERATOR

*/

const rest = new Map();

rest.set("Location", "Islamabad").set(1, "Spin Khak").set(2, "Peshawar");
console.log(rest);

console.log(rest.get("Location")); // Islamabad

const booleanLogic = new Map();
booleanLogic
  .set("open", 11)
  .set("close", 23)
  .set(true, "we are open 🎉🎉")
  .set(false, "we are closed 🔒");

//   Now Here we can do some logic:
const time = 12;
const checkingTime = booleanLogic.get(
  time > booleanLogic.get("open") && time < booleanLogic.get("close")
);

console.log(checkingTime); // we are open 🎉🎉
//  boolean.get(true or false) => if true then get true key value otherwise false.

// ANOTHER WAY OF POPULATING MAP:
// Array of Arrays:
const question = new Map([
  ["Question", "What is the best programming language in the world ? ☠", "C"],
  [2, "JAVA"],
  [3, "JAVASCRIPT"],
  ["correct", 3],
  [true, "Correct"],
  [false, "Try Again"],
]);
console.log(question);

//CONVERTING OBJECTS INTO MAPS
const obj = {
  name: "Abuzar",
  age: 20,
  color: "black",
};

const objIntoMap = new Map(Object.entries(obj));
console.log(objIntoMap);

// QUIZ APP:
console.log(question.get("Question"));
for (const [key, value] of question) {
  if (typeof key === "number") {
    console.log(`Answer ${key}: ${value}`);
  }
}

// USER INPUT:
// const answer = Number(prompt("Your Answer"));
// console.log(question.get(answer === 1) || question.get(answer !== 1)); // true , or false

// CONVERTING MAP INTO ARRAY.
console.log([...question]);
console.log([...question.keys()]);
console.log([...question.values()]);

/* SUMMARY:

-> MAPS ARE ADVANCED DATA STRUCTURS INTRODUCED IN ES6.

-> WE CAN MAP THE KEYS AND VALUES BY USING METHOD OR DIRECTLY.

-> WE CAN USE ANY DATA TYPE AS A KEY , AND IT IS THE SPECIALITY OF MAP.

-> WE CAN CONVERT MAP INTO ARRAY BY USING THE SPREAD OPERATOR.

-> WE CAN DO SOME LOGIC AS WE DID ABOVE.

-> WE CAN CONVERT OBJECTS INTO MAP.
*/

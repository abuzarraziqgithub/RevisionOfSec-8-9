"use strict";

// LOOPING OVER THE OBJECTS

/* GENERAL EXPLANATION:

-> WE CAN ALSO LOOPING OVER THE OBJECTS AND OBJECTS ARE NOT ITERABLES BUT WE CAN DO IT IN AN INDIRECT WAY.

-> WE CAN'T LOOP DIRECTLY LOOP OVER THE OBJECT , INSTEAD WE USE VARIABLE AND GETTING KEYS AND VALUES AND ALSO ENTRIES AND THEN WE USE THAT VARIABLE IN FOR OF LOOP.

-> THERE ARE SOME METHODS USE FOR THIS , LIKE .keys FOR GETTING KEYS , .values and .entries as well.

*/

let weekdays = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];

const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },

  [weekdays[4]]: {
    open: 11,
    close: 23,
  },

  [weekdays[2 + 3]]: {
    open: 0, //open 24 hours
    close: 24,
  },
};

const resturant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23 , Firenze , Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],

  openingHours,
};

const obj = {
  name: "Abuzar",
  age: 20,
  color: "black",
};

// Geting Array of keys:
const properties = Object.keys(openingHours);
console.log(properties);

// Property Values:
let openStr = `we are open  ${properties.length} days`;
console.log(openStr);

const entries = Object.entries(openingHours);
console.log(entries);

for (const [keys, { open, close }] of entries) {
  console.log(`on ${keys} , we open at ${open} and close at ${close}`);
}

const items = Object.entries(resturant);
console.log(items);

for (const item of items) {
  console.log(item);
}

// GETTING OBJ VALUES:
const objValues = Object.values(obj);
console.log(objValues);

// LOOPING OVER THE objValues:
for (const values of objValues) {
  console.log(values);
}

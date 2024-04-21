"use strict";

/* GENERAL EXPLANATION:

-> FOREACH LOOP IS VERY USEFUL AND HIGHER-ORDER FUNCTION ARRAY METHOD.
-> IT TAKES THE CURRENT ELEMENT OF AN ARRAY AND USES IT AS AN ARGUMENT.
-> IT CALLS THE CALLBACK AFTER EACH ITERATION.
-> IT LOOP OVER THE ENTIRE ARRAY.
-> IT DOESN'T MUTATE THE ORIGINAL ARRAY, AND MAKE A COPY OF THE ORIGINAL ARRAY.
-> WE CAN ALSO GET THE INDEX OF EACH ARRAY ELEMENT.
-> IT ACCEPTS 3 ARGUMENTS, THE FIRST ARGUMENT IS THE CURRENT ELEMENT OF THE ARRAY, THE SECOND ARGUMENT IS THE INDEX OF THAT CURRENT ELEMENT OF THE ARRAY, AND THE THIRD ARGUMENT IS THE  ENTIRE GIVEN ARRAY.
-> IN FOR LOOP, IF WE WANT TO GET THE INDEX, WE WILL USE THE DESTRUCTURING ARRAY TECHNIQUE. THE FIRST PLACE IN THE DES ARRAY WOULD BE THE INDEX OF THE CURRENT ELEMENT AND WE WILL ALSO CALL THE ENTRIES METHOD FOR IT.

-> THE BREAK AND CONTINUE STATEMENTS DON'T WORK FOR EACH BECAUSE THEY LOOP OVER THE ENTIRE ARRAY AT ONCE.

-> WE CAN USE IT FOR DATA STRUCTURES, LIKE MAPS AND SETS BECAUSE THEY ARE ITERABLES.

*/
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// FOREACH LOOP FOR GETTING POSITIVE AND NEGATIVE ELEMENTS:
const positiveData = movements.forEach((Item) => {
  if (Item > 0) console.log(`Positive Item ${Item}`);
  else console.log(`Negative Item ${Item}`);
});

console.log(movements);

// FOREACH LOOP FOR INDEX.
const indexOfElement = movements.forEach((item, index, arr) => {
  console.log(`Index ${index + 1} : ${item}`);
});

// FOREACH METHOD FOR MAP AND SET DATA STRUCTURES.
// MAP
const currencies = new Map([
  ["USD", "United States dollar"],
  ["EUR", "Euro"],
  ["GBP", "Pound sterling"],
]);

const currenciesForEach = currencies.forEach((item, key, entireMap) => {
  console.log(`Key ${key} : ${item}`);
});

// SET
const currencieUnique = new Set(["USD", "GBP", "USD", "EUR", "EUR"]);
const uniqueCurrencies = currencieUnique.forEach((item, index, entireSet) => {
  console.log(` ${item}`);
});

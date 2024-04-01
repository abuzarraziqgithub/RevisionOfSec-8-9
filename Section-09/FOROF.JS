"use strict";

// THE FOR OF LOOP (LOOPING ARRAYS)

/* GENERAL EXPLANATION:

-> THE FOR OF LOOP IS THE NEW WAY OF LOOPING OVER THE ARRAYS , INTRODUCED IN ES6.

-> WE CAN LOOP OVER THE ARRAY IN EASY AND SIMPLE WAY.

-> WE CAN DEFINE INDEXES AS WELL BE CALLING A METHOD .entreis().

-> WE CAN USE IT IN DESTRUCTURING AS WELL.

*/

const resturant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23 , Firenze , Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],
};

const menu = [...resturant.mainMenu, ...resturant.starterMenu];
console.log(menu);

// USING FOR LOOP TO PRINT EACH ITEM OF THE MENU ARRAY:
for (let i = 0; i < menu.length; i++) {
  // WE CAN ASLO DEFINE INDEXES
  console.log(`Index : ${i} => ${menu[i]}`);
}

// WE CAN USE FOR OF LOOP TO MAKE IT SIMPLE:
for (const items of menu) {
  console.log(items);
}
// WE CAN DEFINE INDEXES AS WELL
for (const itemsWithIndexes of menu.entries()) {
  console.log(itemsWithIndexes);
}
// IT WILL CREATE ARRAY FOR EACH OF THE ELEMENT.

// TO MAKE IT SIMPLE:
for (const itemWithNo of menu.entries()) {
  console.log(`${itemWithNo[0] + 1} : ${itemWithNo[1]} `);
}

// USING DESTRUCTURING:
for (const [itemNo, item] of menu.entries()) {
  console.log(`${itemNo + 1} : ${item}`);
}

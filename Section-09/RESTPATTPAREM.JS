"use strict";
// THE REST OPERATOR:

/* GENERAL EXPLANATION:

-> REST PATTERN LOOKS SAME AS THE SPREAD OPERATOR , THE BIG DIFFERNCE IS REST OPERATOR COLLECTS THE ELEMENTS THAT ARE NOT USED IN DESTRUCTURING ASSIGNMENT.
-> IF I HAVE AN ARRAY OF MORE ELEMENTS , I CAN STORE THE INITAIL VALUES BUT ALL THE OTHER VALUES WILL BE STORE BY USING REST OPERATOR.

-> THE REST OPERATOR DOESN'T INCLUDE THE SKIPPED ELEMENTS , AND THAT IS THE REASON WE SHOULD USE IT IN THE LAST IN THE DESTRUCTURING ASSIGNMENT.

-> WE CAN USE IT FOR OBJECTS AND FUNCTIONS AS WELL.

*/

// SPREAD OPERATOR BECAUSE OF RIGHT SIDE USE.
const arr = [1, 2, ...[3, 4]];
console.log(arr);

// REST OPERATORS BECAUSE OF LEFT SIDE USE.
const [x, y, ...others] = arr;
console.log(x, y, ...others); // THE REST OF OTHERS.

// REST OPERATOR FOR OBJECTS:
const resturant = {
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },

    fri: {
      open: 11,
      close: 23,
    },

    sat: {
      open: 0, //open 24 hours
      close: 24,
    },
  },
};
const { sat, ...weekdays } = resturant.openingHours;

console.log(sat, "weekdays :", weekdays);

// REST OPERATOR FOR FUNCTION:
const add = function (...numbers) {
  let sum = 0;

  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  console.log(sum);
  console.log(numbers.length);
};

add(1, 23, 1);
const a = [
  1, 2, 3, 1, 1, 3, 1, 22, 1, 3, 1, 3, 1, 31, 21, 3, 13, 21, 321, 1, 3,
];
add(...a);

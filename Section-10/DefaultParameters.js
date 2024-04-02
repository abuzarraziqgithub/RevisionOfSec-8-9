"use strict";

/* GENERL EXPLANATION:

-> DEFAULT PARAMETERS IS THE CONCEPT OF SETTING DEFAULT VALUE TO FUNCTION PARAMETER IN ORDER TO GET RID OF UNDEFINED.

-> WE USED SHORTCIRCUITING IN ORDER TO SET DEFAULT VALUES TO FUNCTION PARAMETERS IN THE OLD ES5.

-> WE SIMPLY ASSIGN VALUES DIRECTLY IN THE PARAMETRS SECTION IN A FUNCTION TO SET DEFAULT VALUES AND ALSO CAN USE EXRESSION.

-> JAVASCRIPT CHECK THE PARAMETERS IN ORDER WAY , SO WE CAN'T USE PARAMETER AS A EXPRESSION BEFORE DECLARING IT. WE HAVE TO FIRST DECLARE IT AND THEN USE IT AS A EXPRESSION.


*/

// THE OLD ES5 WAY OF SETTING DEAFAULT PARAMETERS:
const bookings = [];
const creatBooking = function (flightNum, numOfPassengers, price) {
  // ASSIGNING DEFAULT VALUES:
  flightNum = flightNum || "Empty";
  numOfPassengers = numOfPassengers || "Empty";
  price = price || "Empty";

  const booking = {
    flightNum,
    numOfPassengers,
    price,
  };
  console.log(booking);
  console.log(bookings.push(booking));
};

creatBooking(92330, 4, 150);
creatBooking(92330);
creatBooking(923, 4);
creatBooking("", "", 99);

// THE ES6 WAY OF SETTING DEFAULT PARAMETERS:
const bookings2 = [];
// SIMPLY ASSIGN THEM VALUES IN PAREMETERS.
const creatBooking2 = function (
  flightNum = 1,
  numOfPassengers = 1,
  price = 90 * numOfPassengers
) {
  const booking = {
    flightNum,
    numOfPassengers,
    price,
  };

  console.log(booking);
  console.log(bookings2.push(booking));
};
creatBooking2();

"use strict";

/* GENERAL EXPLANATION:

-> THE BIND METHOD IS JUST LIKE THE CALL METHOD WHICH ALLOWS US TO US TO MANUALLY  SET THE "this" KEYWORD FOR ANY METHOD CALL.

-> THE BIG DIFFERENCE IS , THE BIND DOESN'T IMMEDIATELY CALL THE FUNCTION INSTEAD IT RETURNS A NEW FUNCTION WHERE THE "this" KEYWORD IS BOUND/BIND.

*/

const PIA = {
  airline: "PIA",
  iataCode: "A",
  bookings: [],

  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    console.log(
      this.bookings.push(`flight: ${this.iataCode}${flightNum}`, name)
    );
  },
};

const airBlue = {
  airline: "Air Blue",
  iataCode: "AB",
  bookings: [],
};

const book = PIA.book;
const bookBlue = book.bind(airBlue);
bookBlue(234, "Abuzar");
// WE CAN NOW CREATE FUNCTION FOR EACH OBJECT.

// WE CAN SET DEFAULT VALUE IN BIND:
const bookBlue1 = book.bind(airBlue, 23);
bookBlue1("Shafqat");
//  WE CAN CALL THIS A PARTIAL APPLICATION, MEANS THAT A PART OF ARGUMENTS OF THE ORIGINAL FUNCTION ARE ALREADY APPLIED OR ALREADY SET.

// LET'S USE BIND METHOD IN EVENT LISTENERS:
airBlue.planes = 300;

airBlue.buyPlanes = function () {
  console.log(this);

  this.planes++;
  console.log(this.planes);
};
// document;
//   .querySelector(".buyPlanes")
//   .addEventListener("click", airBlue.buyPlanes); // IT WILL DIRECTLY TARGET THE OBJECT ITSELF BY "this" KEYWORD AND RETURN THAT DOCUMENT OBJECT.

//   IN ORDER TO WORK THAT  FUNCTIONALITY WE USE BIND METHD:
// TO CALL METHOD BY IT'S OBJECT AND POINTING AS WELL , WE USE THE BIND METHOD , TO RETURN A NEW FUNCTION.

document
  .querySelector(".buyPlanes")
  .addEventListener("click", airBlue.buyPlanes.bind(airBlue));
// IT WILL SIMPLY POINT TO THE AIRBLUE OBJECT AND WILL BE CALLED BY THAT OBJECT

// PARTIAL APPLICATION:
const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

// LET'S CREATE A NEW FUNCTION BY USING BIND METHOD AND THEN APPLY PRE ARGUMENTS TO IT USING PARTIAL APPLICATION CONCEPT.
const addVAT = addTax.bind(null, 0.23);
// WE PASSED NULL AS A FIRST ARGUMENT BECAUSE WE WANT TO CALCULATE THE VALUE WITHOUT ANY OBJECT CALL.

// 23 IS DEFAULT VALUE FOR RATE PARAMETER.
console.log(addVAT(20)); // 20 + 20 * 0.23 => 24.6
console.log(addVAT(50));

// CHALLENGE:
// CREATE A FUNCTION THAT RETURNS THE FUNCTION , AND THAT DO THE SAME THING AS WE DID BY USING BIND METHOD:
const addTaxFunc = (rate = 0.23) => {
  return (value) => {
    const VAT = value + value * rate;
    console.log(VAT);
  };
};
const addVATFunc = addTaxFunc();
addVATFunc(50);
addVATFunc(20);

const obj4 = {
  rate: 20,
  value: 300,
};

/* SUMMARY:

-> THE BIND METHOD IS JUST LIKE CALL METHOD , THE BIG DIFFERENCE IS IT RETURNS THE NEW METHOD AND NOT IMMEDIATELY CALL THE FUNCTION.
-> IT ACTUALLY BINDS THE "this" KEYWORD EXPLICITLY.

-> WE CAN CREATE A FUNCTION FOR EACH OF THE OBJECT.
-> WE CAN SET DEFAULT ARGUMENTS TO THE PAREMETERS AND IT IS ALSO CALLED PARTIAL APLLICATION.
-> THE FIRST PLACE IN THE BIND METHOD IS THE PALCE WHERE PUT OBJECT NAME WE WANT TO CALL THE METHOD FROM.

-> WE CAN USE BIND METHOD FOR EVENTLISTENERS AS WELL.

*/

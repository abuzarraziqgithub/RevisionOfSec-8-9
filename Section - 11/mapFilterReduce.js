"use strict";

/* GENERAL EXPLANATION:

-> THERE ARE 3 MAIN ARRAY METHODS THAT ARE VERY USEFUL IN JAVASCRIPT AND WE PERFORM DIFFERENT DATA TRANSFORMATIONS .
-> WE CREATE NEW ARRAYS BASED ON THE TRANSFORMING DATA FROM THE ORIGINAL ARRAYS. 


-> THE MAP METHOD:
-> MAP METHOD IS USED FOR LOOPING OVER THE ARRAY ELEMENTS.
-> THE MAIN DIFFERENCE BETWEEN FOREACH AND MAP METHOD IS THAT , WE CREATE AN ARRAY OF ENTIRE ELEMENTS IN IT WHICH IS TRANSFORMED BY SOME OPERATION APPLIED TO IT.
-> BUT IN FOREACH METHOD , EACH ELEMENT OF THE ARRAY EXECUTES AFTER EACH ITERATION.
-> THE ELEMENT OF AN ARRAY LOG TO THE CONSOLE AFTER EACH ITERATION IN FOREACH METHOD , BUT WE CAN'T CREATE AN ARRAY FOR THAT ELEMENTS , IT IS ALSO CALLED SIDE EFFECT.
-> IT USED TO PERFORM OPERATION AND NOT CONDITION , BECAUSE IT WILL THEN RETURN JUST TRUE OR FALSE IF APPLY CONDITION DIRECTLY.



-> THE FILTER METHOD:
-> THE FILTER METHOD RETURN THE WHOLE NEW ARRAY BASED ON THE CONDITION APLLIED TO IT.
-> WE DIRECTLY PASS A CONDITION TO IT AND IT FILTERS THE ENTIRE ARRAY AND MAKE A COPY OF IT AND WE GET IT.


-> THE REDUCE METHOD:
-> THE REDUCE METHOD REDUCES THE ARRAY ELEMENTS TO ONE INTEGER BY APPLYING OPERATION TO IT .
-> IT HAS THE ACCUMULATOR WHICH STARTS FROM THE FIRST INDEX OF THE ARRAY ELEMENT, STARTS ADDING , DIVINDING , MULTIPLYING WITH THE NEXT ELEMENT IN THE ARRAY , THEN MOVE THE NEXT ELEMENT ACC AND ADD TO THE NEXT ELEMENT AND TO END OF ENTIRE ARRAY.
-> AFTER THAT , WE GET THE RESULT BASED ON THE OPERATION.

*/

// THE MAP METHOD:

// RATE OF USD IN EURO
const euroToUsd = 4.2312;
// EURO
const euro = [200, 450, -400, 3000, -650, -130, 70, 1300];
// CONVERT EUROS TO USD
const usd = euro.map((coin) => coin * euroToUsd);
console.log(usd);
// IT GET THE FULL NEW ARRAY OF ELEMENTS ON WHICH OPERATION APPLIED.

// THE FILTER METHOD:
const positives = euro.filter((coins) => coins > 0);
console.log(positives);

// THE REDUCE METHOD:
const euroSum = euro.reduce((acc, coin) => acc + coin);
console.log(euroSum); // 3840

// WE CAN ALSO DO CHAINING:
const sumOfUsd = euro
  .filter((item) => item > 0)
  .map((item) => item * euroToUsd)
  .reduce((acc, item) => acc + item);
console.log(sumOfUsd); // 21240

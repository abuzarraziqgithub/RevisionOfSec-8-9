"use strict";

/* GENERAL EXPLANATION:

-> IF CREATE AN OBJECT AND INSIDE IN THAT OBJECT WE DEFINE A METHOD AND USE "this" KEYWORD IN IT WE CAN CALL IT AND THEN USE IT.
-> THE CALL AND APPLY METHODS ALLOWS US TO EXPLICITLY DEFINE THE "this" KEYWORD IN ANY FUNCTION THAT WE WANT.

*/

const obj = {
  name: "abuzar",
  age: 20,

  method() {
    console.log(this.name, "is", this.age, "Years old.");
  },
};

obj.method();

const obj2 = {
  name: "Shafqat",
  age: 21,
};

// const nameAg2 = obj.nameAge;

// nameAg2(); // undefined , BECAUSE IT IS NOW REGULAR FUNCTION AND REGULAR "this" IS UNDEFINED.
// WE HAVE TO DEFINE METHOD IN EVERY OBJECT AND THAT IS NOT A GOOD WAY TO DO IT.
// SO WHAT SHOULD WE DO NOW.

// WE HAVE CALL AND APPLY METHOD FOR IT:
method.call("Obj Name", "arguments");
// THE CALL METHOD  ALLOW US TO SET MANUALLY AND EXPLICITILY SET THE "this" KEYWORD OF ANY METHOD THAT WE WANT TO CALL.

// WE CAN USE THAT METHOD EXPLICITLY, BY GIVING THE OBJECT NAME IN THE FIRST PLACE AND THEN PASSING OTHER ARGUMENTS AS WELL.

// IF THERE IS AN ARRAY OF ELEMENTS AND WANT TO RECIEVCE THAT ARRAY ELEMENTS AS AN ARGUMENT , WE HAVE THE APPLY METHOD FOR IT.
const arr = ["Array Elements"];
method.apply("obj Name", arr);

// BUT WE USE THE SPREAD OPERATOR FOR ARRAYS AND NOT THE APPLY METHOD ANYMORE.

// THERE IS ANOTHER METHOD , WHICH ALLOWS US TO DO THE SAME THING WHICH IS BIND METHOD AND THAT IS MORE IMPORTANT THAN CALL AND APPLY METHOD.

/* SUMMARY

-> IF WE DEFINE A METHOD  IN AN OBJECT AND THEN WANT TO CALL IT FOR SECOND OBJECT AS WELL , WE WOULD HAVE TO COPY IT IN A VARIABLE , BUT IT WILL BE NOT POSSIBLE IF WE HAVE USED THE THIS KEYWORD INSIDE IT .

-> FOR THAT MATTER , WE HAVE THE CALL AN ALLPY METHODS.
-> THE CALL METHOD SIMPLY CALL THE METHOD OF AN OBJECT AND USE THE "this" KEYWORD EXPLPLICITLY.
-> THEN WE PASS THE OBJECT NAME AS IN FIRST PLACE AN DTHEN OTHER ARGUMENTS.
-> WE HAVE THE APPLY METHOD , WHICH SIMPLY USE THE ARRAY ELEMENTS AS ARGUMENTS BUT WE HAVE THE SPREAD OPERATOR FOR IT.


*/

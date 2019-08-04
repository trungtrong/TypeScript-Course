//           Boolean
var isDone = false;
/*
*
*
*/
//            Number
var decimal = 6;
var hex = 0xf2f2f2;
var binary = 10;
var octal = 484;
/*
*
*
*/
//             String
var color = 'blue';
color = 'red';
//
//   template string
var fname = 'Trong';
var fullName = "Hello " + fname;
/*
*
*
*/
//             Array
var list = [1, 2, 3];
// another way
var arr = [1, 2, 3];
// string Array
var animals = ['cat', 'dog'];
/*
*
*
*/
//             Tuple
var tup;
tup = ['hello', 3];
//tup = [10, 'hello']; // Error
//
//               Enum
var Color;
(function (Color) {
    Color[Color["Red"] = 1] = "Red";
    Color[Color["Green"] = 3] = "Green";
    Color[Color["Blue"] = 5] = "Blue";
})(Color || (Color = {}));
var c = Color.Green;
console.log(c);
//
var ColorName;
(function (ColorName) {
    ColorName[ColorName["Red"] = 1] = "Red";
    ColorName[ColorName["Green"] = 2] = "Green";
    ColorName[ColorName["Blue"] = 3] = "Blue";
})(ColorName || (ColorName = {}));
var colorName = ColorName[2];
console.log(colorName);
//
//               Any
var notSure = 4;
console.log(notSure);
notSure = "may be a string instead";
console.log(notSure);
notSure = false;
console.log(notSure);
// Any Array
var listOf = [1, true, 'hello'];
listOf[0] = 'bye';
console.log(listOf[0]);
/*
*
*
*/
//          void
function sayHi() {
    console.log('Hello Ajinomoto');
    return;
}
console.log(sayHi());
/*
*
*
*/
//          Null and Undefined
var u = undefined;
var n = null;
// By default, "strictNullChecks" = false
//let un: number = undefined;
//console.log(u);
// Enable "strictNullChecks" = true
//let un: number = undefined; 
//=> type 'undefined' is not assignable to type 'number'
//console.log(u);
var un = undefined;
console.log(u);
/*
*
*
*/
//          Never
/*
function error(message: string): never {
  throw new Error(message);
}
 
function fail() {
  return error('Something failed');
}
fail(); */
/*
*
*/
//            Object
// let obj: Object = {
//   a: 1,
//   b: 2
// };
// console.log(obj);
var myString = 'Hello World';
console.log(typeof myString);

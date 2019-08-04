//           Boolean
let isDone: boolean = false;
/*
*
*
*/
//            Number
let decimal: number = 6;
let hex: number = 0xf2f2f2;
let binary: number = 0b1010;
let octal: number = 0o744;
/*
*
*
*/
//             String
let color: string = 'blue';
color = 'red';
//
//   template string
let fname: string = 'Trong';
let fullName: string = `Hello ${fname}`;
/*
*
*
*/
//             Array
let list: number[] = [1, 2, 3];
// another way
let arr: Array<number> = [1, 2, 3];
// string Array
let animals: string[] = ['cat', 'dog'];
/*
*
*
*/
//             Tuple
let tup: [string, number];
tup = ['hello', 3];
//tup = [10, 'hello']; // Error
//
//               Enum
enum Color{
  Red = 1,
  Green = 3,
  Blue = 5
}

let c: Color = Color.Green;
console.log(c);
//
enum ColorName {
  Red = 1,
  Green,
  Blue
}

let colorName: string = ColorName[2];
console.log(colorName);
//
//               Any
let notSure: any = 4;
console.log(notSure);
notSure = "may be a string instead";
console.log(notSure);
notSure = false;
console.log(notSure);

// Any Array
let listOf: any[] = [1, true, 'hello'];
listOf[0] = 'bye';
console.log(listOf[0]);
/*
*
*
*/
//          void
function sayHi(): void {
  console.log('Hello Ajinomoto');
  return;
}
console.log(sayHi());
/*
*
*
*/
//          Null and Undefined
let u: undefined = undefined;
let n: null = null; 
// By default, "strictNullChecks" = false
//let un: number = undefined;
//console.log(u);

// Enable "strictNullChecks" = true
//let un: number = undefined; 
//=> type 'undefined' is not assignable to type 'number'
//console.log(u);

let un: any = undefined;
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

let myString = 'Hello World';
console.log(typeof myString);

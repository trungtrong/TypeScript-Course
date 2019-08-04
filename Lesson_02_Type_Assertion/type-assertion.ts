/*
let message = 'Hello World';
let str = message.slice(1);
console.log(str); */
/*
*
*/
//    Problem
/*
let message;
message = 'abc';

let str = message.slice(1);
console.log(str); */
/*
*/
//    Type Assertion
// Way 1
let message: any = 'abc';
let str = (<string>message).slice(1);
console.log(str);         

// Way 2:
let me: any = 'abc';
let strg = (me as string).slice(1);
console.log(strg);

// Example 2:
let elem = <HTMLElement>document.getElementById('menu');
elem.cloneNode;

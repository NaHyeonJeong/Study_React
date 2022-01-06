/**
 * Created by vega on 2017-05-29.
 */
let isDone: boolean = false;

let decimal: number = 6;
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;

let color: string = "blue";
color = 'red';

let fullName: string = `Bob Bobbington`;
let age: number = 37;
let sentence: string = `Hello, my name is ${ fullName }.

I'll be ${ age + 1 } years old next month.`;
console.log(sentence);

let list1: number[] = [1, 2, 3];
let list2: Array<number> = [1, 2, 3];
//for in
for(let num in list2) {
    console.log('in ' + num);
}
//for of
for(let num of list2) {
    console.log('of ' + num);
}


// Declare a tuple type
let x: [string, number];
// Initialize it
x = ["hello", 10]; // OK
// Initialize it incorrectly
//x = [10, "hello"]; // Error
console.log(x[0].substr(1)); // OK
//console.log(x[1].substr(1)); // Error, 'number' does not have 'substr'

enum Color {Red, Green, Blue}
let c: Color = Color.Green;
console.log(c);

let colorName: string = Color[2];
console.log(colorName);

let notSure: any = 4;
notSure = "maybe a string instead";
notSure = false; // okay, definitely a boolean
//notSure.ifItExists(); // okay, ifItExists might exist at runtime
//notSure.toFixed(); // okay, toFixed exists (but the compiler doesn't check)

let someValue: any = "this is a string";
let strLength: number = (<string>someValue).length;
console.log(strLength);
let strLength2: number = (someValue as string).length;
console.log(strLength2);

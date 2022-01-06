/**
 * Created by vega on 2017-05-29.
 */
var isDone = false;
var decimal = 6;
var hex = 0xf00d;
var binary = 10;
var octal = 484;
var color = "blue";
color = 'red';
var fullName = "Bob Bobbington";
var age = 37;
var sentence = "Hello, my name is " + fullName + ".\n\nI'll be " + (age + 1) + " years old next month.";
console.log(sentence);
var list1 = [1, 2, 3];
var list2 = [1, 2, 3];
//for in
for (var num in list2) {
    console.log('in ' + num);
}
//for of
for (var _i = 0, list2_1 = list2; _i < list2_1.length; _i++) {
    var num = list2_1[_i];
    console.log('of ' + num);
}
// Declare a tuple type
var x;
// Initialize it
x = ["hello", 10]; // OK
// Initialize it incorrectly
//x = [10, "hello"]; // Error
console.log(x[0].substr(1)); // OK
//console.log(x[1].substr(1)); // Error, 'number' does not have 'substr'
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
var c = Color.Green;
console.log(c);
var colorName = Color[2];
console.log(colorName);
var notSure = 4;
notSure = "maybe a string instead";
notSure = false; // okay, definitely a boolean
//notSure.ifItExists(); // okay, ifItExists might exist at runtime
//notSure.toFixed(); // okay, toFixed exists (but the compiler doesn't check)
var someValue = "this is a string";
var strLength = someValue.length;
console.log(strLength);
var strLength2 = someValue.length;
console.log(strLength2);

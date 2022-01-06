/**
 * Created by vega on 2017-05-29.
 */
var list = [4, 5, 6];
for (var i in list) {
    console.log(i); // "0", "1", "2",
}
for (var _i = 0, list_1 = list; _i < list_1.length; _i++) {
    var i = list_1[_i];
    console.log(i); // "4", "5", "6"
}
var myArr = [1, 2, 3];
myArr = myArr.map(function (item) {
    return item * 2;
});
console.log(myArr);
//lambda 식 , arrow function
var result = myArr.map(function (item) { return item + 10; });
console.log("map \uD568\uC218\uC758 \uACB0\uACFC\uAC12\uC740 " + result);
//reduce
var sum1 = myArr.reduce(function (prev, curr) {
    return prev + curr;
});
console.log("reduce \uD568\uC218 \uACB0\uACFC\uAC12 " + sum1);
var sum2 = myArr.reduce(function (prev, curr) { return prev + curr; });
console.log("reduce lambda\uC2DD \uACB0\uACFC\uAC12 " + sum2);
myArr.forEach(function (val) { return console.log(val); });
// myAdd has the full function type
var myAdd = function (x, y) { return x + y; };
// The parameters 'x' and 'y' have the type number
var myAdd2 = function (x, y) { return x + y; };
//Optional and Default Parameters
function buildName(firstName, lastName) {
    if (lastName)
        return firstName + " " + lastName;
    else
        return firstName;
}
var result1 = buildName("Bob"); // works correctly now
//let result2 = buildName("Bob", "Adams", "Sr.");  // error, too many parameters
var result3 = buildName("Bob", "Adams"); // ah, just right

/**
 * Created by vega on 2017-05-29.
 */

let list = [4, 5, 6];

for (let i in list) {
    console.log(i); // "0", "1", "2",
}

for (let i of list) {
    console.log(i); // "4", "5", "6"
}

let myArr = [1,2,3];

myArr = myArr.map(function (item) {
    return item * 2;
});
console.log(myArr);
//lambda 식 , arrow function
let result = myArr.map( item => item + 10);
console.log(`map 함수의 결과값은 ${result}`);

//reduce
let sum1 = myArr.reduce(function (prev, curr){
    return prev + curr;
});
console.log(`reduce 함수 결과값 ${sum1}`);

let sum2 = myArr.reduce((prev,curr) => prev + curr);
console.log(`reduce lambda식 결과값 ${sum2}`);

console.log('---  forEach')
myArr.forEach(val => console.log(val));

// myAdd has the full function type
let myAdd = function(x: number, y: number): number { return  x + y; };

// The parameters 'x' and 'y' have the type number
let myAdd2: (baseValue:number, increment:number) => number =
    function(x, y) { return x + y; };

//Optional and Default Parameters
function buildName(firstName: string, lastName?: string) {
    if (lastName)
        return firstName + " " + lastName;
    else
        return firstName;
}

let result1 = buildName("Bob");                  // works correctly now
//let result2 = buildName("Bob", "Adams", "Sr.");  // error, too many parameters
let result3 = buildName("Bob", "Adams");         // ah, just right
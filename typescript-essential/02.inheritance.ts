/**
 * Created by vega on 2017-05-29.
 * 
 * tsc --target es5 02.inheritance.ts
 * node 02.inheritance.js
 */
class Animal {
    name: string;
    constructor(theName: string) { this.name = theName; }
    move(distanceInMeters: number = 0) {
        console.log(`${this.name} moved ${distanceInMeters}m.`);
    }
}

class Snake extends Animal {
    constructor(name: string) { super(name); }
    move(distanceInMeters = 5) {
        console.log("Slithering...");
        super.move(distanceInMeters);
    }
}

class Horse extends Animal {
    constructor(name: string) { super(name); }
    move(distanceInMeters = 45) {
        console.log("Galloping...");
        super.move(distanceInMeters);
    }
}

class Employee {
    private name: string;
    constructor(theName: string) { this.name = theName; }
}

///////////////////////////////////////////////////////

let sam = new Snake("Sammy the Python");
let tom: Animal = new Horse("Tommy the Palomino");

sam.move();
tom.move();

console.log(new Animal("Cat").name);

let animal2 = new Animal("Goat");
let employee = new Employee("Bob");

animal2 = sam;
//animal2 = employee; // Error: 'Animal' and 'Employee' are not compatible
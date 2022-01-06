/**
 * Created by vega on 2017-03-07.
 */
interface Pet {
    setName(name:string): void;
    getName() : string;
    play() : void;
}

abstract class Animals {
    private legs : number;
    constructor(legs:number) {
        this.legs = legs;
    }
    abstract eat() : void;
    walk() : void {
          console.log('동물은 '+this.legs + '발로 걷는다.');
    }
}

class Cat extends Animals implements Pet {
    private name : string;
    constructor(name:string) {
        super(4);
        this.name = name;
    }
    setName(name:string): void {
        this.name = name;
    }
    getName() : string {
        return this.name;
    }

    play() : void {
        console.log('고양이는 공을 가지고 놀아요');
    }

    eat() : void {
        console.log('고양이는 생선을 먹어요');
    }
}

let animal: Animals; // ok to create a reference to an abstract type
//animal = new Animal(); // error: cannot create an instance of an abstract class
animal = new Cat('Meow'); // ok to create and assign a non-abstract subclass
animal.eat();
animal.walk();


let pet: Pet;
pet = new Cat("고양이2");

//document.body.innerHTML = animal.eat();
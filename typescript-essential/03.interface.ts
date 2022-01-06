/**
 * Created by vega on 2017-03-09.
 */
interface  Ivehicle {
    run();
}
class Car implements Ivehicle {
    name:string;
    constructor(public color:string, name:string){
        this.name = name;
    }
    run() : string {
        return `${this.color} 색 ${this.name} 이름의 자동차가가 달립니다.`;
    }
    run2() : void {
        console.log(`${this.color} 색 ${this.name} 이름의 자동차가가 달립니다.`);
    }
}


var car = new Car('red','마티즈');

console.log(car.run());
car.run2();

let car2 = new Car('Blue','소나타');
car2.run2();

let vehicle:Ivehicle = new Car('yellow','그랜저');
console.log(vehicle.run());

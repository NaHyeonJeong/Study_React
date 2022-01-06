var Car = (function () {
    function Car(color, name) {
        this.color = color;
        this.name = name;
    }
    Car.prototype.run = function () {
        return this.color + " \uC0C9 " + this.name + " \uC774\uB984\uC758 \uC790\uB3D9\uCC28\uAC00\uAC00 \uB2EC\uB9BD\uB2C8\uB2E4.";
    };
    Car.prototype.run2 = function () {
        console.log(this.color + " \uC0C9 " + this.name + " \uC774\uB984\uC758 \uC790\uB3D9\uCC28\uAC00\uAC00 \uB2EC\uB9BD\uB2C8\uB2E4.");
    };
    return Car;
}());
var car = new Car('red', '마티즈');
console.log(car.run());
car.run2();
var car2 = new Car('Blue', '소나타');
car2.run2();
var vehicle = new Car('yellow', '그랜저');
console.log(vehicle.run());

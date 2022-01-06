var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Animals = /** @class */ (function () {
    function Animals(legs) {
        this.legs = legs;
    }
    Animals.prototype.walk = function () {
        console.log('동물은 ' + this.legs + '발로 걷는다.');
    };
    return Animals;
}());
var Cat = /** @class */ (function (_super) {
    __extends(Cat, _super);
    function Cat(name) {
        var _this = _super.call(this, 4) || this;
        _this.name = name;
        return _this;
    }
    Cat.prototype.setName = function (name) {
        this.name = name;
    };
    Cat.prototype.getName = function () {
        return this.name;
    };
    Cat.prototype.play = function () {
        console.log('고양이는 공을 가지고 놀아요');
    };
    Cat.prototype.eat = function () {
        console.log('고양이는 생선을 먹어요');
    };
    return Cat;
}(Animals));
var animal; // ok to create a reference to an abstract type
//animal = new Animal(); // error: cannot create an instance of an abstract class
animal = new Cat('Meow'); // ok to create and assign a non-abstract subclass
animal.eat();
animal.walk();
var pet;
pet = new Cat("고양이2");
//document.body.innerHTML = animal.eat(); 

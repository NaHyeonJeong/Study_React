var Greeter = (function () {
    function Greeter(message) {
        this.greeting = message;
    }
    Greeter.prototype.greet = function () {
        return "Hello, " + this.greeting;
    };
    Greeter.prototype.greet2 = function (msg) {
        return msg.charAt(0);
    };
    return Greeter;
}());
var nums = [0, 1, 2];
var greeter = new Greeter(this.nums);
console.log(greeter.greet2("typescript"));
var button = document.createElement('button');
button.textContent = "Say Hello";
button.onclick = function () {
    alert(greeter.greet());
};
document.body.appendChild(button);

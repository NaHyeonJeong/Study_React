class Greeter {
    greeting: string;
    constructor(message: string) {
        this.greeting = message;
    }
    greet() {
        return "Hello, " + this.greeting;
    }
    greet2(msg:string) {
        return msg.charAt(0);
    }
}
let nums = [0,1,2];
let greeter = new Greeter(this.nums);
console.log(greeter.greet2("typescript"));

let button = document.createElement('button');
button.textContent = "Say Hello";
button.onclick = function() {
    alert(greeter.greet());
}

document.body.appendChild(button);
"use strict";
exports.__esModule = true;
var a; // integer or floating point number
a = 1;
//a = 'blabla'; // compilation error!
var b;
var c = "hello"; // optional initialisation
var d; // any type, will be assigned when you assign a value
var e;
e = [1, 2, -1.5, 3];
console.log("third element of array is: ", e[2]);
var myLog = function (message) {
    console.log(message);
};
myLog("what's up guys?!");
// arrow function
var doLog1 = function (message) {
    console.log(message);
};
var doLog2 = function (message) { return console.log(message); }; // for one line functions only
var data = [];
data[0] = {
    description: "this is a pinguin",
    url: "www...."
};
/*
data.push({
  discription: "this is dog", //compilation error!
  url: "www..."
})
*/
var Greeter = /** @class */ (function () {
    // constructor
    function Greeter(message, secret) {
        this.secret = secret;
        this.greeting = message;
        this.welcome = "Hello!";
        this.secretMessage = secret;
    }
    // methods
    Greeter.prototype.greet = function () {
        return "Hello, " + this.greeting;
    };
    Greeter.prototype.printGreeting = function () {
        console.log(this.greet());
    };
    // getter
    Greeter.prototype.getSecret = function () {
        return this.secretMessage;
    };
    // setter
    Greeter.prototype.setSecret = function (newSecret) {
        this.secretMessage = newSecret;
    };
    return Greeter;
}());
var greeter = new Greeter("guys!\n How are you doing?", "don't say it!");
greeter.printGreeting();
console.log("My Greeter message: ", greeter.welcome);
console.log("secret message: ", greeter.getSecret());
greeter.setSecret("really do not say a word about it!");
console.log("new secret: ", greeter.getSecret());
/*
// errors! private method and property
console.log(greeter.secretMessage);
greeter.greet();
*/
var myModule_1 = require("./myModule");
var greet = myModule_1.greetingsFunction;
greet("Larry"); // prints out "hello, Larry"
greet("Sally"); // prints out "hello, Sally"
var aCurse = new myModule_1.MyCurse;
aCurse.getCurse(); // prints out what?!
var point = { x: 0.1, y: 3.4 };
console.log("my point's coordinates: ", point.x, point.y);

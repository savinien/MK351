let a: number; // integer or floating point number
a = 1;
//a = 'blabla'; // compilation error!
let b: boolean;
let c: string = "hello"; // optional initialisation
let d: any; // any type, will be assigned when you assign a value

let e: number[];
e = [1, 2, -1.5, 3];
console.log("third element of array is: ", e[2]);

let myLog = function(message: string) {
  console.log(message);
};
myLog("what's up guys?!");

// arrow function
let doLog1 = (message) => {
  console.log(message);
};

let doLog2 = (message) => console.log(message); // for one line functions only

interface imageElement {
  description: string;
  url: string;
}

let data: imageElement[] = [];
data[0]= {
  description: "this is a pinguin",
  url: "www...."
};
/*
data.push({
  discription: "this is dog", //compilation error!
  url: "www..."
})
*/


class Greeter {
    // properties
    greeting: string;
    welcome: string;
    private secretMessage: string;
    // constructor
    constructor(message: string, private secret: string) {
        this.greeting = message;
        this.welcome = "Hello!";
        this.secretMessage = secret;
    }
    // methods
    private greet() {
        return "Hello, " + this.greeting;
    }
    printGreeting(){
        console.log(this.greet());
    }
    // getter
    getSecret(){
      return this.secretMessage;
    }
    // setter
    setSecret(newSecret: string){
      this.secretMessage = newSecret;
    }
}

let greeter = new Greeter("guys!\n How are you doing?", "don't say it!");
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


import { greetingsFunction, MyCurse } from './myModule';
let greet = greetingsFunction;
greet("Larry"); // prints out "hello, Larry"
greet("Sally"); // prints out "hello, Sally"

let aCurse = new MyCurse;
aCurse.getCurse(); // prints out what?!

import { SimplePoint as SP } from './myModule';
let point: SP = {x:0.1, y:3.4};
console.log("my point's coordinates: ", point.x, point.y);

# Crash course on ts

0. [Setup](#tssetup)
1. [ts basics](#tsbas)
2. [ts variables](#tsvar)
3. [ts functions](#tsfn)
4. [ts interfaces](#tsint)
5. [ts classes](#tsclass)
6. [ts modules](#tsmod)

Main reference [ts documentation](https://www.typescriptlang.org/docs/home.html), in particular the handbook chapters about interfaces and classes.

<a name="tssetup"></a>
## 0. Setup

Install [node js](https://nodejs.org/en/).
Choose the Long Time Support (LTS) version -not the current version with latest features.
- download the `.pkg` file from the website
- duoble click on the `.pkg` file to install it

Install typescript, via `npm` (node package manager): open a terminal and type in:
- `npm install -g typescript` on windows and linux
- `sudo npm install -g typescript` on mac

(the `-g` command is to ensure a7po global install on your computer)

<a name="tsbas"></a>
## 1. ts basics
ts was originally developped by microsoft, and is now used widely (by google notably).

ts is a superset of js: any valid js code is valid ts code. But ts comes in with many more interesting features. In particular it is object oriented.

You get compile-time erros in ts, rather than run-time errors in js: you may spot errors before running your code.

**Compilation and run**:
- transcribe ts code into js by executing `tsc mytsfile.ts` at the command line: this converts your code into js in a new file (`mytsfile.js` here)
- you can run the `.js` file with node by executing `node mytsfile.js` at the command line.

Like in js, any statement has to end up with a semi-colon (`;`), and use `//` for comments.

<a name="tsvar"></a>
## 2. ts variables
Use `let` to define variables in ts. As is js your variables -unless globally declared- will have block scope.

You can declare types in ts (and you should).
```ts
let a: number; // integer or floating point number
a = 1;
a = 'blabla'; // compilation error!
let b: boolean;
let c: string = "hello"; // optional initialisation
let d: any; // any type, will be assigned when you assign a value
```
If a variable is declared with `any` type, you can use type assertion to set its type like in this example:
```ts
let msg;
msg = 'abc';
let oneWay = (<string>msg).replace('a','b');
let alternativeWay = (msg as string).replace('a','b');
```

Arrays are defined similarly:
```ts
let e: number[]; // array of numbers
let f: number[] = [1, 2, 3]; // optional initialisation
let i: any[] = [1, true, 'a']; // avoid, this is not good practice.
```
Like in js, your can declare constant variables with `const`.


<a name="tsfn"></a>
## 3. ts functions
ts functions are defined like this:
```ts
let doLog0 = function(message: string){
  console.log(message);
};
```
or with an "arrow" like this:
```ts
let doLog1 = (message) => {
  console.log(message);
};
let doLog2 = (message) => console.log(message); // for one line functions only
```
If a function does not return anything like in the above examples, it is of `void` type

Like in js, use the `return` keyword to return something, for example:
```ts
let mySearch = function(source: string, subString: string) {
    let result = source.search(subString);
    return result > -1; // return type is boolean
};
```

<a name="tsint"></a>
## 4. ts interfaces
Interfaces allow you to define custom made objects, like for instance:
```ts
interface SimplePoint{
  y: number,
  z?: number // this is an optional property
}
```
We use *Pascal convention*: objects and custom types are capitalized (here `SimplePoint`).

You can also define function types in an interface, declaring only its type (the type of what it returns - `void` in case it doesn't return anything), and the types of its arguments:
```ts
interface SearchFunc {
    (source: string, subString: string): boolean;
}
```
and you would call such a method like this:
```ts
let mySearch: SearchFunc;
mySearch = function(source: string, subString: string) {
    let result = source.search(subString);
    return result > -1;
}
```
The implementations of such properties and methods is not done within the interface. The interface is simply like a "shape".

<a name="tsclass"></a>
## 5. ts classes
Classes allow you to define custom made objects, and -unlike interfaces- contain implementation details of their properties and methods.
In addition a class have a special method, called a **constructor** which we use set up initial values of class properties.
Example:
```ts
class Greeter {
    greeting: string;
    constructor(message: string) {
        this.greeting = message;
    }
    greet() {
        return "Hello, " + this.greeting;
    }
    printGreeting(){
        console.log(this.greet());
    }
}

let greeter = new Greeter("guys!\n How are you doing?");
```
In the last line we construct an instance of the Greeter class using `new`. This calls into the constructor we defined earlier, creating a new object with the `Greeter` shape, and running the constructor to initialize it.

You can call the methods of your object by appending `.nameOfMethod()` to the object name, here for example: `greeter.printGreeting();`.

By default, properties and methods are **public**: you can access them from any instanciated object of the class.
You might want some properties and methods to be **private** to add private functionality into your classes. What are private properties or methods? A private property or method can only be accessed or called from the class instance itself. Let’s add up private properties to our Greeter class:
```ts
class Greeter {
    greeting: string;
    private politeness: string = "Dear Sir or Madam";
    private forbiddenWords: string[] = ['dude', 'idiot', 'moron', 'stupid'];

    constructor(message: string) {
        this.greeting = message;
    }
    greet() {
        return "Hello, " + this.greeting;
    }
    printGreeting(){
        console.log(this.greet());
    }
    // this is a 'getter': to access a private property
    getPoliteness() {
        return this.politeness;
    }
    // this is a 'setter': to modify a private property
    setPoliteness(polite: string){
        let noCurse: boolean = true;
        for (let curse of this.forbiddenWords){
            noCurse = noCurse && (polite.search(curse) == -1);
        }
        if(noCurse){
            this.politeness = polite;
        } else {
            throw new Error('politeness update refused: inapropriate language!');
        }
    }
}

let greeter = new Greeter("Eric Marshal");
greeter.printGreeting; // prints out "Hello Eric Marshal"
greeter.politeness; // Error: 'politeness' is private
console.log(greeter.getPoliteness()); // prints out "Dir Sir or Madam"
greeter.setPoliteness("My dear friend"); // updates 'politeness'
greeter.setPoliteness("What's up dude!?"); // Error: politeness update refused: inapropriate language!
```
As you can see `private` hides the property from the user/consumer of the class. If you try to set `greeter.politeness` you get an error, you can only do that using the setter `setPoliteness()`.


In TypeScript, we can use common object-oriented patterns. One of the most fundamental patterns in class-based programming is being able to extend existing classes to create new ones using **inheritance**.

Let’s take a look at an example:
```ts
class Animal {
    move(distanceInMeters: number = 0) {
        console.log(`Animal moved ${distanceInMeters}m.`);
    }
}

class Dog extends Animal {
    bark() {
        console.log('Woof! Woof!');
    }
}

const dog = new Dog();
dog.bark();
dog.move(10);
dog.bark();
```

This example shows the most basic inheritance feature: classes inherit properties and methods from base classes. Here, `Dog` is a *derived* class that derives from the `Animal` *base* class using the `extends` keyword. Derived classes are often called *subclasses*, and base classes are often called *superclasses*.

Because `Dog` extends the functionality from `Animal`, we were able to create an instance of `Dog` that could both `bark()` and `move()`.

Let’s now look at a more complex example.
```ts
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

let sam = new Snake("Sammy the Python");
let tom: Animal = new Horse("Tommy the Palomino");

sam.move();
tom.move(34);
```
This example covers a few other features we didn’t previously mention. Again, we see the `extends` keywords used to create two new subclasses of `Animal`: `Horse` and `Snake`.

One difference from the prior example is that each derived class that contains a constructor function *must* call `super()` which will execute the constructor of the base class. What’s more, before we *ever* access a property on this in a constructor body, we *have* to call `super()`. This is an important rule that TypeScript will enforce.

The example also shows how to override methods in the base class with methods that are specialized for the subclass. Here both `Snake` and `Horse` create a move method that overrides the move from `Animal`, giving it functionality specific to each class. Note that even though `tom` is declared as an `Animal`, since its value is a `Horse`, calling `tom.move(34)` will call the overriding method in `Horse`:
```
Slithering...
Sammy the Python moved 5m.
Galloping...
Tommy the Palomino moved 34m.
```

In addition to **public** and **private** there is another modifier: **protected**.
The `protected` modifier acts much like the `private` modifier with the exception that members declared `protected` can also be accessed within deriving classes.

<a name="tsmod"></a>
## 6. ts modules



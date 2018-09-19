# Crash course on ts

0. [Setup](#tssetup)
1. [ts basics](#tsbas)
2. [ts variables](#tsvar)
3. [ts functions](#tsfn)
4. [ts interfaces](#tsint)
5. [ts classes](#tsclass)
6. [ts modules](#tsmod)

<a name="tssetup"></a>
## 0. Setup

Install [node js](https://nodejs.org/en/).
Choose the Long Time Support (LTS) version (not the current version with latest features).
- download the `.pkg` file from the website
- click on the `.pkg` file to install it

Install typescript, via `npm` (node package manager): open a terminal and type in:
- `npm install -g typescript` on windows and linux
- `sudo npm install -g typescript` on mac
(the `-g` command is for a global install on your computer)

NB: if your using chrome browser, it has a js console where you can run your code too.

<a name="tsbas"></a>
## 1. ts basics
ts was originally developped by microsoft, and is now used widely (by google notably).

ts is a superset of js: any valid js code is valid ts code. But ts comes in with many more interesting features. In particular it is object oriented.

You get compile-time erros in ts, rather than run-time errors in js: you may spot errors before running your code.

**Compilation and run**:
- transcribe ts code into js by executing `tsc mytsfile.ts` at the command line: this converts your code into js in a new file (`mytsfile.js` here)
- you can run the `.js` file with node by executing `node mytsfile.js` at the command line.



<a name="tsvar"></a>
## 2. ts variables
Use `let` to define variables in ts. As is js your variables --unless globally declared-- will have block scope.

You can declare types in ts (and you should).
```ts
let a: number; // integer or floating point number
a = 1;
a = 'blabla'; // compilation error!
let b: boolean;
let c: string = "hello";
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
}
```
or with an "arrow" like this:
```ts
let doLog1 = (message) => {
  console.log(message);
}
let doLog2 = (message) => console.log(message); // for one line functions only
```
If a function does not return anything like in the above examples, it is of `void` type

Like in js, use the `return` keyword to return something, for example:
```ts
let mySearch = function(source: string, subString: string) {
    let result = source.search(subString);
    return result > -1; // return type is boolean
}
```

<a name="tsint"></a>
## 4. ts interfaces

<a name="tsclass"></a>
## 5. ts classes


<a name="tsmod"></a>
## 6. ts modules



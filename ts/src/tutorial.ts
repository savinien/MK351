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

let data: imageElement[];
data[0]= {
  description: "this is a pinguin",
  url: "www...."
};
data.push({
  discription: "this is dog", //compilation error!
  url: "www..."
})

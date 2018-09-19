# Crash course on html, css, and js

0. [Setup](#setup)
1. [HTML](#html)
  1.1. [HTML basics](#htmlbasics)
  1.2. [HTML elements](#htmlelements)
  1.3. [HTM attributes](#htmlattributes)
  1.4. [HTM style and formating](#htmlstyleandformating)
2. [CSS](#css)
  2.1. [CSS basics](#cssbasics)
  2.2. [CSS syntax](#csssyntax)
  2.3. [CSS selectors](#cssselector)
  2.4. [CSS where to](#csswhereto)
  2.5. [Cascading over](#csscascading)
  2.6. [CSS box model](#cssbox)
3. [JS](#js)
  3.1. [Some examples](#jsexamples)
  3.2. [js where to](#jswhereto)
  3.3. [js events](#jsevents)
  3.4. [js variables](#jsvariables)
  3.5. [js arrays](#jsarrays)
  3.6. [js conditionals and loops](#jscondloops)
  3.7. [js functions](#jsfunctions)
  3.8. [js objects](#jsobjects)
  3.9. [js keywords *let* and *const*](#jskwd)


<a name="setup"></a>
## Setup
Install [atom](https://atom.io/) code editor

Create an account on [codepen](https://codepen.io/)



<a name="html"></a>
## 1. HTML

Reference: [W3School HTML tutorial](https://www.w3schools.com/html/default.asp)


<a name="htmlbasics"></a>
### 1.1. HTML basics

- HTML stands for Hyper Text Markup Language
- HTML describes the structure of Web pages using markup
- HTML elements are the building blocks of HTML pages
- HTML elements are represented by tags
- HTML tags label pieces of content such as "heading", "paragraph", "table", and so on
- Browsers do not display the HTML tags, but use them to render the content of the page

A typical HTML page has the following structure

```html
<!DOCTYPE html>
  <html>
  <head>
    <title>Page Title</title>
    <style> css style can go here </style>
    <script> js functions can go here </style>
  </head>
  <body>

    <h1>My First Heading</h1>
    <p>My first paragraph.</p>
 
    <script>
      js functions can go here
    </script>
    
    <!-- this is a comment -->
  </body>
</html>
```

<a name="htmlelements"></a>
### 1.2. HTML elements

An HTML element usually consists of a **start tag** and **end tag**, with the content inserted in between:
```html
  <tagname>Content goes here...</tagname>
```
The HTML element is everything from the start tag to the end tag:

Some HTM elements:
- `<html></html>` : defines the whole document
- `<head></head>` : defines the headings of the document
- `<body></body>` : defines the body/content of the document
- `<h1></h1>`, `<h2></h2>`, ..., `<h6></h6>` : define headings from large (h1) to smaller (h6)
- `<p></p>` : defines a paragraph
- `<div></div>` : defines a block

Unordered lists:
```html
<ul>
  <li>item 1</li>
  <li>item 2</li>
  ...
</ul>
```


<a name="htmlattributes"></a>
### 1.3. HTML attributes

- All HTML elements can have attributes
- Attributes provide additional information about an element
- Attributes are always specified in the start tag
- Attributes usually come in name/value pairs like: name="value"

examples of attributes: 
- `href` : to reference a link to a relative (local) or absolute (remote) element to redirect to
- `style` : to style the element
- `src` : to reference a file path to a relative (local) or absolute (remote) element to import
- `width`, `height` : to define the size of the element


```html
<a href="http://www.em-lyon.com">this is a link to emlyon's website</a>

<img src="../my_picture_folder/my_picture.jpg" width="500" height="600">

<p style="color:red">this paragraph will show up in red</p>

<script src="myScript.js"></script>


```

<a name="htmlstyleandformating"></a>
### 1.4. HTML style and formating

Setting the style of an HTML element, can be done with the `style` attribute.

The HTML style attribute has the following syntax:
```html
<tagname style="property:value;">
```
The property is a CSS property. The value is a CSS value.

- Use `background-color` for background color
- Use `color` for text colors
- Use `font-family` for text fonts
- Use `font-size` for text sizes
- Use `text-align` for text alignment

example
```html
<body style="background-color:powderblue;">

  <h1 style="color:red; font-size:300%;">This is a red heading</h1>
  <p style="text-align:center; font-family:verdana;">This is a centered paragraph. Text in verdana font.</p>
  
</body>
```

You can further use the following markers, to style a text: 
- `<b></b>`: Bold text
- `<strong></strong>`: Important text
- `<i></i>`: Italic text
- `<em></em>`: Emphasized text
- `<mark></mark>`: Marked text
- `<small></small>`: Small text
- `<del></del>`: Deleted text
- `<ins></ins>`: Inserted text
- `<sub></sub>`: Subscript text
- `<sup></sup>`: Superscript text



<a name="css"></a>
## 2. CSS

Reference: [W3School css tutorial](https://www.w3schools.com/css/default.asp)

<a name="cssbasics"></a>
### 2.1. CSS basics

- CSS stands for Cascading Style Sheets
- CSS describes how HTML elements are to be displayed on screen, paper, or in other media
- CSS saves a lot of work. It can control the layout of multiple web pages all at once
- External stylesheets are stored in CSS files

Typical CSS look like this
```css
body {
    background-color: lightblue;
}

h1 {
    color: white;
    text-align: center;
    /* this is a comment */
}

p {
    font-family: verdana;
    font-size: 20px;
}
```

<a name="csssyntax"></a>
### 2.2. CSS syntax

A CSS rule-set consists of a selector and a declaration block:

![CSS selector](https://www.w3schools.com/css/selector.gif)

- The selector points to the HTML element you want to style.

- The declaration block contains one or more declarations separated by semicolons.

- Each declaration includes a CSS property name and a value, separated by a colon.

- A CSS declaration always ends with a semicolon (`;`), and declaration blocks are surrounded by curly braces.



<a name="cssselector"></a>
### 2.3. CSS selectors

CSS selectors are used to "find" (or select) HTML elements based on their element name, id, class, attribute, and more.

The **element selector** selects elements based on the element name.

You can select all `<p>` elements on a page like this (in this case, all `<p>` elements will be center-aligned, with a red text color):

```css
p {
    text-align: center;
    color: red;
}
```

The **id selector** uses the id attribute of an HTML element to select a specific element.

The id of an element should be unique within a page, so the id selector is used to select one unique element!

To select an element with a specific id, write a hash (`#`) character, followed by the id of the element.

The style rule below will be applied to the HTML element with id="para1":

```css
#para1 {
    text-align: center;
    color: red;
}
```

The **class selector** selects elements with a specific class attribute.

To select elements with a specific class, write a period (`.`) character, followed by the name of the class.

In the example below, all HTML elements with class="center" will be red and center-aligned:

```css
.center {
    text-align: center;
    color: red;
}
```

You can also specify that only specific HTML elements should be affected by a class.

In the example below, only <p> elements with class="center" will be center-aligned:

```css
p.center {
    text-align: center;
    color: red;
}
```
HTML elements can also refer to more than one class.

In the example below, the <p> element will be styled according to class="center" and to class="large":

```css
<p class="center large">This paragraph refers to two classes.</p>
```

If you have several elements (like `h1`, `h2`, `p`) with the same style definitions (like `text-align: center; color: red;`) you can group the selectors, to minimize the code:
```css
h1, h2, p {
    text-align: center;
    color: red;
}
```

<a name="csswhereto"></a>
### 2.4. CSS where to

There are three ways of inserting a style sheet:
- Inline style
- Internal style sheet
- External style sheet

An **inline style** may be used to apply a unique style for a single element.

To use inline styles, add the style attribute to the relevant element. The style attribute can contain any CSS property.

The example below shows how to change the color and the left margin of an `<h1>` element:

```css
<h1 style="color:blue; margin-left:30px;">This is a heading</h1>
```

An **internal style** sheet may be used if one single page has a unique style.

Internal styles are defined within the `<style>` element, inside the `<head>` section of an HTML page:
```html
<head>
  <style>
    body {
        background-color: linen;
    }

    h1 {
        color: maroon;
        margin-left: 40px;
    } 
  </style>
</head>
```


With an **external style sheet**, you can change the look of an entire website by changing just one file!

Each page must include a reference to the external style sheet file inside the <link> element. The `<link>` element goes inside the `<head>` section:

```html
<head>
<link rel="stylesheet" type="text/css" href="mystyle.css">
</head>
```
Here is how the "mystyle.css" looks:
```css
body {
    background-color: lightblue;
}

h1 {
    color: navy;
    margin-left: 20px;
}
```
**NB:** there is NO space between the property value and the unit (such as `margin-left: 20 px;`), the correct way is: `margin-left: 20px;`

<a name="csscascading"></a>
## 2.5. Cascading over

What style will be used when there is more than one style specified for an HTML element? Generally speaking we can say that all the styles will "cascade" into a new "virtual" style sheet by the following rules, where number one has the highest priority:
1. Inline style (inside an HTML element)
2. External and internal style sheets (in the head section)
3. Browser default
So, an inline style (inside a specific HTML element) has the highest priority, which means that it will override a style defined inside the <head> tag, or in an external style sheet, or a browser default value.

Another important behaviour of CSS style is the following: HTML elements contained within another element inherit its style. In the following example, both `text 1` and `text 2` will be centered:
```css
div.mycentereddiv {
  text-align: center;
}
```
```html
<div class="mycentereddiv">
  <p>text 1</p>
  <div>
    <p>text 2<p>
  </div>
</div>
```

<a name="cssbox"></a>
### 2.6. CSS box model

All HTML elements can be considered as boxes. In CSS, the term "box model" is used when talking about design and layout.

The CSS box model is essentially a box that wraps around every HTML element. It consists of: margins, borders, padding, and the actual content. The image below illustrates the box model:

![Margin, border, padding](https://qph.fs.quoracdn.net/main-qimg-c878e8a880644d3a5b06c2f517db7e5a)

<a name="js"></a>
## 3. JS

Reference: [W3School js tutorial](https://www.w3schools.com/js/default.asp)

JavaScript is the programming language of HTML and the Web.

<a name="jsexamples"></a>
### 3.1. Some examples

js can change the content (example 1), the attribute values (example 2), and the style (example 3) of an HTML element, it can also make elements appear and hide, and so on.

Example 1:
```html
<!DOCTYPE html>
<html>
  <body>

  <h2>What Can JavaScript Do?</h2>
  <p id="demo">JavaScript can change HTML content.</p>
  <button type="button" onclick="document.getElementById('demo').innerHTML = 'Hello JavaScript!'">Click Me!</button>

  </body>
</html>
```


Example 2:
```html
<!DOCTYPE html>
<html>
  <body>

    <h2>What Can JavaScript Do?</h2>
    <p>JavaScript can change HTML attribute values.</p>
    <p>In this case JavaScript changes the value of the src (source) attribute of an image.</p>

    <button onclick="document.getElementById('myImage').src='https://www.w3schools.com/js/pic_bulbon.gif'">Turn on the light</button>
    <img id="myImage" src="https://www.w3schools.com/js/pic_bulboff.gif" style="width:100px">
    <button onclick="document.getElementById('myImage').src='https://www.w3schools.com/js/pic_bulboff.gif'">Turn off the light</button>

</body>
</html>
```

Example 3:
```html
<!DOCTYPE html>
<html>
  <body>

    <h2>What Can JavaScript Do?</h2>
    <p id="demo">JavaScript can change the style of an HTML element.</p>
    <button type="button" onclick="document.getElementById('demo').style.fontSize='35px'">Click Me!</button>

  </body>
</html> 
```

<a name="jswhereto"></a>
### 3.2. js where to

Your js code can be **internal**, *i.e*. within `<script></script>` tags inside your HTML document, either between the `<head></head>` tags or between the `<body></body>` tags. Example:
```html
<!DOCTYPE html>
<html>
  <head>
    <script>
      function myFunction() {
          document.getElementById("demo").innerHTML = "Paragraph changed.";
      }
    </script>
  </head>

  <body>

    <h1>A Web Page</h1>
    <p id="demo">A Paragraph</p>
    <button type="button" onclick="myFunction()">Try it</button>

  </body>
</html>
```

Or your js code can be **external**, *i.e.* within an external `.js` file. For instance:
```html
<!DOCTYPE html>
<html>
  <body>

    <h2>External JavaScript</h2>

    <p id="demo">A Paragraph.</p>

    <button type="button" onclick="myFunction()">Try it</button>

    <p>(myFunction is stored in an external file called "myScript.js")</p>

    <script src="myScript.js"></script>

  </body>
</html>
```
and your `script.js` file contains `myFunction()`:
```js
function myFunction() {
   document.getElementById("demo").innerHTML = "Paragraph changed.";
}
```
External js is convenient. You can import several scripts, either relative/local like `<script src="../allMyScripts/script1.js"></script>` or absolute/remote like `<script src="https://www.w3schools.com/js/myScript1.js"></script>`.

NB: if you are using chrome browser, it has a js console (in `View/Developer/JavaScript Console`) where you can run your code.

<a name="jsevents"></a>
### 3.3. Events
HTML events are "things" that happen to HTML elements.

When JavaScript is used in HTML pages, JavaScript can "react" on these events.

An HTML event can be something the browser does, or something a user does.

Here are some examples of HTML events:

- An HTML web page has finished loading
- An HTML input field was changed
- An HTML button was clicked
Often, when events happen, you may want to do something.

JavaScript lets you execute code when events are detected.

HTML allows event handler attributes, **with JavaScript code**, to be added to HTML elements.

In this example, the code changes the content of its own element (using this.innerHTML):
```html
<button onclick="this.innerHTML = Date()">The time is?</button>
```
Here is a list of some common HTML events:
- onchange	An HTML element has been changed
- onclick	The user clicks an HTML element
- onmouseover	The user moves the mouse over an HTML element
- onmouseout	The user moves the mouse away from an HTML element
- onkeydown	The user pushes a keyboard key
- onload	The browser has finished loading the page
The list is much longer: [W3Schools JavaScript Reference HTML DOM Events.](https://www.w3schools.com/jsref/dom_obj_event.asp)

Event handlers can be used to handle, and verify, user input, user actions, and browser actions:

- Things that should be done every time a page loads
- Things that should be done when the page is closed
- Action that should be performed when a user clicks a button
- Content that should be verified when a user inputs data
- And more ...
Many different methods can be used to let JavaScript work with events:
- HTML event attributes can execute JavaScript code directly
- HTML event attributes can call JavaScript functions
- You can assign your own event handler functions to HTML elements
- You can prevent events from being sent or being handled
- And more ...

You can learn about more this in the [W3School HTML DOM tutorial](https://www.w3schools.com/js/js_htmldom.asp).
Fun examples can be found here: [W3School HTML DOM examples](https://www.w3schools.com/js/js_dom_examples.asp), and here: [W3School HTML DOM events examples](https://www.w3schools.com/js/js_events_examples.asp)

<a name="jsvariables"></a>
### 3.4. js variables
You don't have to specify the type of variables in js. You just declare a variable like this:
```js
var a; // yet "undefined"
a = 5; // it is now an integer
var b = a + .1; // b is a flat
var c = "Jacky";
var d = c + " Chan"; // "Jacky Chan" 
var d = false; // boolean
var e = (5 < 5.1); // boolean, true
```
Notice that each statement in js code has to end up with a semi-colon (`;`).
Use `//` to comment your code.


<a name="jsarrays"></a>
### 3.5. js arrays
Arrays can defined as follows:
```js
var fruits = ["apple", "banana", "carrot"];
var mix = [1.0, 3, "abc", true];  // any types (even functions)
var other = new Array(1.0, 2.0); // === [1.0, 2.0]
```
Entries of an array are accessed and modified like this:
```js
var first = fruits[0]; // "apple"
var last = fruits[fruits.length - 1]; // "carrot"
fruits[0] = 'artichoke'; // now fruits is ['artichoke','banana','carrot']
```
You can add or remove entries of an array like this:
```js
fruits.push("dill"); // inserts a new entry at the end of the array
fruits.splice(0,1); // at slots 0, removes 1 element ('apple')
fruits.splice(0,0,"pineapple", 'orange'); // at slot 0, removes 0 elements, and inserts "pineapple" and 'orange'
```

<a name="jscondloops"></a>
### 3.6. js conditionals and loops
*if-then-else* statement:
```js
var a = 5.0;
var b = 5;
if (a == b) {
  console.log("a and b have the same value");
} else if (a === b){
  console.log("a and b have the same value, and same type");
} else {
  // executed when none of the above two conditions are true
}
```
*for* loop:
```js
for (i=0; i < fruits.length; i++){
  if (i == 2){
    break; // "break" interrupts the loop 
    // "continue" jumps over to the next iteration (ignoring the remaining statement of this iteration)
  };
  console.log(fruits[i]);
}
```
*while* and *do-while* loops:
```js
while (i < 10) {
    text += "The number is " + i;
    i++;
}
```
```js
do {
    text += "The number is " + i;
    i++;
}
while (i < 10);
```
If you forget to increase the variable used in the condition (here `i++`), the loop will never end. 
This will crash your browser.



<a name="jsfunctions"></a>
### 3.7. js functions
A JavaScript function is a block of code designed to perform a particular task.

A JavaScript function is executed when "something" invokes it (calls it).

```js
var x = product(4, 3);    // Function is called, return value will end up in x

function product(a, b) {
    return a * b;            // Function returns the product of a and b
};
```

Function **parameters** are listed inside the parentheses () in the function definition.

Function **arguments** are the values received by the function when it is invoked.

Inside the function, the arguments (the parameters) behave as local variables.


<a name="jsobjects"></a>
### 3.8. js objects 

Objects have **properties** and **methods** (actions that can be performed on the objects):
```js
var person = {
    firstName: "Jacky",
    lastName : "Chan",
    id       : 5566,
    fullName : function() {
        return this.firstName + " " + this.lastName;
    }
};
```
You can access an objects property with the following syntax: `person.firstName` or `person['firstName']` (here "Jacky").

You can call a method of an object with the following syntax: `person.fullName()` (here "Jacky Chan"). If you access the method without parentheses `()` it will return the function definition.

In a function definition, `this` refers to the "owner" of the function. In the example above, `this` is the person object that "owns" the `fullName` function. In other words, `this.firstName` means the `firstName` property of this object.

<a name="jskwd"></a>
### 3.9. js keywords *let* and *const*

Variables declared **globally** (*i.e.* outside any function), have **global scope**.

Variables declared **locally** (inside a function) have **function scope**.

Variables declared with the `let` keyword can have **block scope**. Variables declared with `let` inside a block `{}` can not be accessed from outside the block.
```js
var a = 2; // a is declared globally
let b = 0; // b is declared globally

function myFunction(){
  var c = 3; // c is declared locally within this function
  // code here can use and modify a, b, and d
  // but c cannot be used outside this function
};

{
  var d = 5; // d is declared globally
  let e = 7; // e is declared locally within this block of code (inside the {})
  // e CANNOT be used and modified used outside this block
}
```

Variables defined with `const` behave like `let` variables, except they cannot be reassigned.
They are usefull for defining **constants**: variables whose values are fixed once and for all.
```js
const PI = 3.141592653589793;
PI = 3.14;      // This will give an error
PI = PI + 10;   // This will also give an error
```

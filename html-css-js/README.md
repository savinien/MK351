# Lecture on html, css, and js

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
3. [JS](#js)


<a name="setup"></a>
## Setup
Install [atom](https://atom.io/) code editor

Create an account on [codepen](https://codepen.io/)



<a name="html"></a>
## 1. HTML

Reference: [W3School HTM tutorial](https://www.w3schools.com/html/default.asp)


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
  <p style="text-align: center; font-family:verdana;">This is a centered paragraph. Text in verdana font.</p>
  
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
### 2.3. CSS where to

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
## 2.4. Cascading over

What style will be used when there is more than one style specified for an HTML element? Generally speaking we can say that all the styles will "cascade" into a new "virtual" style sheet by the following rules, where number one has the highest priority:
1. Inline style (inside an HTML element)
2. External and internal style sheets (in the head section)
3. Browser default
So, an inline style (inside a specific HTML element) has the highest priority, which means that it will override a style defined inside the <head> tag, or in an external style sheet, or a browser default value.

Another important behaviour of CSS style is the following: HTML elements contained within another element inherit its style. In the following example, both `text 1` and `text 2` will be centered:
```css
div.mycentereddiv{
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




<a name="js"></a>
## 3. JS

# Lecture on html, css, and js

0. [Setup](#setup)
1. [HTML](#html)
  1.1. [html basics](#htmlbasics)
  1.2. [html elements](#htmlelements)
  1.3. [html attributes](#htmlattributes)
  1.4. [html style and formating](#htmlstyleandformating)
2. [CSS](#css)
3. [JS](#js)


<a name="setup"></a>
## Setup
Install [atom](https://atom.io/) code editor

Create an account on [codepen](https://codepen.io/)



<a name="html"></a>
## 1. html

Reference: [W3School html tutorial](https://www.w3schools.com/html/default.asp)


<a name="htmlbasics"></a>
### 1.1. html basics

- HTML stands for Hyper Text Markup Language
- HTML describes the structure of Web pages using markup
- HTML elements are the building blocks of HTML pages
- HTML elements are represented by tags
- HTML tags label pieces of content such as "heading", "paragraph", "table", and so on
- Browsers do not display the HTML tags, but use them to render the content of the page

A typical html page has the following structure

```html
<!DOCTYPE html>
  <html>
  <head>
    <title>Page Title</title>
  </head>
  <body>

    <h1>My First Heading</h1>
    <p>My first paragraph.</p>
 
    <script>
      js functions can go here
    </script>
    
  </body>
</html>
```

<a name="htmlelements"></a>
### 1.2. html elements

An html element usually consists of a **start tag** and **end tag**, with the content inserted in between:
```html
  <tagname>Content goes here...</tagname>
```
The html element is everything from the start tag to the end tag:

Some html elements:
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


js scripts in html

<a name="htmlattributes"></a>
### 1.3. html attributes

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
### 1.4. html style and formating

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




<a name="js"></a>
## 3. JS

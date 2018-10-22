# Crash course on angular 6

0. [Setup](#ngsetup)
1. [Basic overview of an angular app](#ngbas)
2. [Start an Angular project](#ngstart)
3. [A simple example step by step](#ngex)
4. [Angular modules](#ngmod)
5. [Angular components](#ngcomp)
6. [Templates, directives, and data binding](#ngtemp)
7. [Angular services](#ngservice)
8. [Angular router and navigation](#ngroute)


Main reference [angular documentation](https://angular.io/docs), in particular the tutorial.
Once you've assimilated this material, while coding you may refer to the [Angular cheat sheet](https://angular.io/guide/cheatsheet) for quick review.

<a name="ngsetup"></a>
## 0. Setup

Install [nodejs](https://nodejs.org/en/download/).

Install angular cli: `npm install -g @angular/cli`

To check which version of angular you've got installed, type in `ng version`.

<a name="ngbas"></a>
## 1. Basic overview of an angular app

Angular is a platform and framework for building client applications in HTML and TypeScript. Angular is written in TypeScript. It implements core and optional functionality as a set of TypeScript libraries that you import into your apps.

The basic building blocks of an Angular application are **NgModules**, which provide a compilation context for **components**. 
NgModules collect related code into functional sets; an Angular app is defined by a set of NgModules. 
An app always has at least a *root module*, and typically has many more feature modules.

- Components define *views*, which are sets of screen elements that Angular can choose among and modify according to your program *logic* and *data*.
- Components use **services**, which provide specific functionality not directly related to views. Service providers can be injected into components as dependencies, making your code modular, reusable, and efficient.

Both components and services are simply classes, with *decorators* that mark their type and provide metadata that tells Angular how to use them.

The metadata for a component class associates it with a template that defines a view. 
A template combines ordinary HTML with Angular **directives** and **binding markup** that allow Angular to modify the HTML before rendering it for display.

The metadata for a service class provides the information Angular needs to make it available to components through *dependency injection*.

An app's components typically define many views, arranged hierarchically. 
Angular provides the **Router** service to help you define navigation paths among views. 
The router provides sophisticated in-browser navigational capabilities.


<a name="ngstart"></a>
## 2. Start an angular project

**Create** a new angular project:
- `ng new myapp`

this creates a folder `./myapp/` with the angular project, named **myapp**, in it. Then
- `cd myapp` 

to navigate inside your project's folder, then
    `atom .` 

to edit the project with atom.

**Serve** the project: type this within `myapp` folder
    `ng serve`

This will launch the application on your browser. The app will be running from [http://localhost:4200]().
Open the chrome developer tools (View/Developer/Developer tools) to inspect the app and follow it running on the console.
Whenever you change and save a file in your project, you'll see the resulting changes on chrome.


<a name="ngex"></a>
## 3. A simple example step by step

We'll make a simple app to illustrate some basic features of angular.
First create a UserComponent, in a separated folder named "components":
```
ng generate component components/user
```
You now see a folder `src/app/components/user` with three files namely `user.component.html`, `user.component.ts`, `user.component.css` which are the template, the ts code, and the css style of your component.
In `user.component.ts`, you have you component's ts class ready for export, preceeded by some import statements, and a *decorator* `@Component` which contains some metadata that angular needs to treat this as a component.
```ts
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
```
The property `selector` of the decorator is a CSS selector that you'll use to create and insert an instance of this component in any HTML template. The other two properties are the adresses of the component's template and style.
Open up the `app.component.html` file and replace everything with:
```html
<h1>Welcome to our myapp!</h1>
<p>Here we import the component UserComponent</p>
<app-user></app-user>
<p>Here we import a second (independant) instance of the component UserComponent<p>
<app-user></app-user>
```
Open up the `user.component.html` file and replace the boiler plate code by:
```html
<div>
    <h1>Hello {{name}}!</h1>
  <ul>
    <li>Age: {{age}}</li>
    <li>Email: {{email}}</li>
    <li>{{address.street}} {{address.city}}, {{address.state}}</li>
  </ul>
</div>
```
and in `user.component.ts` add properties `name`, `age`, `email`, `adress`  and initialize them in `ngOnInit()`:
```ts
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  name:string;
  age:number;
  email:string;
  address:Address;

  constructor() {
    console.log("constructor ran...")
  }

  ngOnInit() {
    console.log("ngOnInit ran...")
    this.name = "Raoul Dupond";
    this.age = 30;
    this.email = 'rdup@yahoo.de';
    this.address = {
      street: '50 fake St',
      city: 'Tucson',
      state: 'AZ'
    };
  }
}

interface Address{
  street: string,
  city: string,
  state: string
}
```
The curly braces around the properties (like `{{name}}`) in the template is called **data binding**, you are binding the value of the properties defined in your ts class to your template.
Let's add some styling in `user.component.css`:
```css
.user {
  margin: 0 0 2em 0;
  list-style-type: none;
  padding: 0;
  width: 20em;
  /*text-align: center;*/
  background-color: #FFFF99;
}

.user li {
  position: relative;
  cursor: pointer;
  background-color: #EEE;
  margin: .5em;
  padding: .3em 0;
  height: 1.6em;
  border-radius: 4px;
}

.user li:hover {
  color: #607D8B;
  background-color: #DDD;
  left: .1em;
}
```
Now we'll make the page more interactive, by adding a form to change the user name, in 'user.component.html`:
```ts
<div class="user">
    <h1>Hello {{name}}!</h1>

  <form (submit)="changeName(newName.value)">
    <div>
      <label for="newName">Input new name: </label>
      <input type="text" #newName>
    </div>
  </form>

  <ul>
    <li>Age: {{age}}</li>
    <li>Email: {{email}}</li>
    <li>{{address.street}} {{address.city}}, {{address.state}}</li>
  </ul>
  
</div>
```
and in `user.component.ts`, add a methode `changeName()` within the class, after `ngOnInit()`:
```ts
  changeName(newName: string){
    this.name = newName;
  }
```
When you input a new name in the form and press enter (triggers a `submit` event), you are now updating the property `name`.
The variable `#newName` captures the user input. It is a *template variable* which can be used anywhere within the template (like passing it as an argument to the method `changeName()` via the submit event in the form).

We now add a functionality to toggle edit the user's details. The **directive** `*ngIf*` allows you to display these details according to a boolean property `idEdit`. The `ngModel` directive allows you to change the user's properties, binding them on the template via an input form to their values in your ts code. To use this directive, you have to import is in `app.module.ts`:
```ts 
import { NgModule } from '@angular/core';
```
In `user.component.html`, 
```html
  <button (click)="toggleEdit()">Edit User</button>
<div *ngIf="isEdit">
  <h2>Edit User</h2>
  <div>
    <label for="name">Name:</label>
    <input type="text" [(ngModel)]="name" name="name">
  </div>
  <div>
    <label for="age">Age:</label>
    <input type="number" [(ngModel)]="age" name="age">
  </div>
  <div>
    <label for="email">Email:</label>
    <input type="text" [(ngModel)]="email" name="email">
  </div>
  <div>
    <label for="street">street:</label>
    <input type="text" [(ngModel)]="address.street" name="street">
  </div>
  <div>
    <label for="city">city:</label>
    <input type="text" [(ngModel)]="address.city" name="city">
  </div>
  <div>
    <label for="state">state:</label>
    <input type="text" [(ngModel)]="address.state" name="state">
  </div>
</div>
```
In `user.component.ts`, add the property 
```ts
isEdit:boolean = false;
``` 
before the constructor, and a method after `ngOnInit()`
```ts
  toggleEdit(){
    this.isEdit = !this.isEdit;
    console.log(this.isEdit);
  }
```
We next add another property `hobbies:string[];` (an array of string) before the construtor, initialise it in the `ngOnInit()` method: `this.hobbies = ['Fool around', 'Procastinate', 'Watch youtube'];`, and methods to add and delete hobbies after `ngOnInit()`:
```ts
  addHobby(hobby){
    console.log(hobby);
    //this.hobbies.push(hobby); // add it at the array's end
    this.hobbies.unshift(hobby); // add it at the array's begining
  }

  deleteHobby(hobby){
    console.log(hobby);
    for (let i=0; i < this.hobbies.length; i++){
      if (this.hobbies[i] == hobby){
        this.hobbies.splice(i,1);
      }
    }
  }
```
In `user.component.html` display the hobbies with the directive `*ngFor` which allows you to iterate over each hobby in the hobbies array:
```html
  <h3>Hobbies</h3>
  <form (submit)="addHobby(hobby.value)">
    <div>
      <label for="hobby">Input hobby: </label>
      <input type="text" #hobby>
    </div>
  </form>
  <ul>
    <li *ngFor="let hobby of hobbies; let i = index">
      {{i+1}}: {{hobby}}
      <button (click)="deleteHobby(hobby)">X</button>
    </li>
  </ul>
```
We now generate a service to fetch posts from a remote server (a moke server [https://jsonplaceholder.typicode.com]().
At the command line:
```
ng generate service services/data
```
which creates a `DataService`, *i.e.* a `data.service.ts` file in `src/app/services/`. You have to import it to `app.module.ts` and declare it as a provider in its `@NgModule` decorator:
```ts
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { UserComponent } from './components/user/user.component';

import { DataService } from './services/data.service';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
```
(notice we've imported the `HttpModule` we'll be using soon).
Now fill in `data.service.ts` as follows:
```ts
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { map } from 'rxjs/operators';

@Injectable()
export class DataService {

  constructor(public http:Http) {
    console.log("Data service connected...");
  }

  getPosts(){
    return this.http.get('https://jsonplaceholder.typicode.com/posts')
      .pipe(map(res => res.json()));
  }
}
```
where we've created a `getPosts()` method which connects to the remote server, waits for its response and returns the result. It uses the `Http` service of angular via *dependency injection* (an instance is passed to its constructor: `constructor(public http:Http)`, and we're now able to use it as `this.http`).
To use this service in `UserComponent` we have to import it and inject it as a dependency in its constructor
```ts
import { DataService } from '../../services/data.service';
/* ... */
constructor(private dataService:DataService){
}
```
which allows us to use is as `this.dataService`.
We finally add a property `posts:Post[];` and define an interface `Post` after the `UserComponent` class:
```ts
interface Post{
  id: number,
  title: string,
  body: string,
  userId: number
}
```
and initialise the posts in `ngOnInit`, by subscribing to the service and waiting for the result to be fetched:
```ts
    this.dataService.getPosts().subscribe((posts) => {
      this.posts = posts;
    });
```
Now we can display the posts on our template `user.component.html`:
```html
  <h2>Posts</h2>
  <div *ngFor="let post of posts">
    <h4>{{post.title}}</h4>
    <p>{{post.body}}</p>
  </div>
```

Finally we create a new component `AboutComponent`:
```
ng generate component components/about`
```
In `about.component.html` replace the boiler code by:
```html
<h2>{{ title }}</h2>
<h3>{{elements.length}} Elements:</h3>
<ul>
  <li *ngFor="let elt of elements"> {{ elt }} </li>
</ul>
```
and in `about.component.ts`:
```ts
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  title: string = "About our app";
  elements: string[] = ["element 1", "element 2", "element 3"];

  constructor() { }

  ngOnInit() {
  }
  
  getTitle(){
    return this.title
  }
}
```
And we add navigation to our app as follows. 
Replace the `app.component.ts` code by:
```html
<ul>
  <li> <a routerLink="">Home</a></li>
  <li> <a routerLink="about">About</a></li>
</ul>
<router-outlet></router-outlet>
```
which will allow you to navigate from the Home page displaying the `UserComponent` to and About page displaying the `AboutComponent`.
The `router-outlet` markup will be the recipient for the component you'll navigate to.
In order to do this we have to set up a Router in `app.module.ts`, defining a constant array of routes linking our components to their urls:
```ts
mport { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { UserComponent } from './components/user/user.component';
import { AboutComponent } from './components/about/about.component';

import { DataService } from './services/data.service';

const appRoutes: Routes = [
  {path:'', component:UserComponent},
  {path:'about', component:AboutComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
```
The router can be called from a method too. In `about.component.html` add a button to navigate back to the home page:
```html
<button type="button" name="button" (click)="backHome()">Back Home</button>
```
and in `about.component.ts` import the Router and inject it, and write the method `backHome`:
```ts
import { Router } from '@angular/router';
  /*...*/
  constructor(public router:Router) { }
  /*...*/
  backHome(){
    this.router.navigate(['']);
    //this.router.navigateByUrl(""); // navigation by url
  }
```
indeed the home page was set in the Routes paths as `""`.

<a name="ngmod"></a>
## 4. Angular modules

Angular apps are modular and Angular has its own modularity system called NgModules. 
Organizing your code into distinct functional modules helps in managing development of complex applications, and in designing for reusability.

NgModules are containers for a cohesive block of code dedicated to an application domain, a workflow, or a closely related set of capabilities. 
They can contain components, service providers, and other code files whose scope is defined by the containing NgModule. 
They can import functionality that is exported from other NgModules, and export selected functionality for use by other NgModules.

Every Angular app has at least one NgModule class, the *root module*, which is conventionally named AppModule and resides in a file named `app.module.ts`. 

While a small application might have only one NgModule, most apps have many more feature modules. 
The root NgModule for an app is so named because it can include child NgModules in a hierarchy of any depth.

An NgModule is defined by a class decorated with `@NgModule()`. 
The `@NgModule()` decorator is a function that takes a single metadata object, whose properties describe the module. 
The most important properties are as follows.

- `declarations`: the list of components it is made of (may also include directives, pipes, etc).

- `exports`: the subset of declarations that should be visible and usable in the component templates of other NgModules.

- `imports`: the list of modules it imports (other modules whose exported classes are needed by component templates declared in this NgModule)

- `providers`: the list of services it imports/uses (they become accessible in all parts of the app)

Here's a simple root NgModule definition (`app.module.ts`):
```ts
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
@NgModule({
  imports:      [ BrowserModule ],
  providers:    [ Logger ],
  declarations: [ AppComponent ],
  exports:      [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
```

<a name="ngcomp"></a>
## 5. Angular components
Components are the building blocks of angular apps. 
A component can be viewed as an extension of an html element: it encapsulates the **data**, the **view** (the html template and css style), and the **logic** for a view (ts code). 
A component is a TypeScript class with an HTML template and an optional set of CSS styles that control a part of the screen.

Components are the most important concept in Angular 6. An Angular 6 application is basically a tree of components with a root component (the `AppComponent`). The root component is the one contained in the `bootstrap` array in the main NgModule module `app.module.ts`.

One important aspect of components is re-usability. A component can be re-used throughout the application and even in other applications.
Common and repeatable code that performs a certain task can be encapsulated into a re-usable component that can be called whenever we need the functionality it provides.

To create a new component type in:
- `ng generate component user`

It is good practice to have your components in one (or more) specific folder(s), like `src/app/components/`. To do this type in:
- `ng generate component components/user`

On your console you'll see:
```
mac20087:myapp savinien$ ng generate component components/user
CREATE src/app/components/user/user.component.css (0 bytes)
CREATE src/app/components/user/user.component.html (23 bytes)
CREATE src/app/components/user/user.component.spec.ts (614 bytes)
CREATE src/app/components/user/user.component.ts (261 bytes)
UPDATE src/app/app.module.ts (399 bytes)
```
The `ng generate component` command has created a set of 3 files for your newly generated component `UserComponent`:
- `user.component.ts`: the logic of your component
- `user.component.html`: the template of your component
- `user.component.css`: the style of your component

They are stored in the folder `src/app/components/user/`.
In addition, as mentioned in the last line `UPDATE src/app/app.module.ts (399 bytes)` your AppModule is updated: `UserComponent` is automatically **imported** and **declared** in the main app module `app.module.ts`, which has been updated as follows:
```ts
/* ... */
import { UserComponent } from './components/user/user.component';
/* ... */
@NgModule({
  declarations: [
    /* ... */
    UserComponent,
    /* ... */
  ],
  /* ... */
})
/* ... */
```

In `user.component.ts`, you see the ts class at the bottom, preceded by a *component decorator* `@Component`, and some import statements:
```ts
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
```
This example shows some of the most useful @Component configuration options:

- `selector`: A CSS selector that tells Angular to create and insert an instance of this component wherever it finds the corresponding tag in template HTML. For example, if an app's HTML contains <app-user></app-user>, then Angular inserts an instance of the UserComponent view between those tags.
- `templateUrl`: The module-relative address of this component's HTML template. Alternatively, you can provide the HTML template inline, as the value of the template property. This template defines the component's host view.
- `styleUrls`: the module-relative address of ths CSS style for the HTML template

In addition, you may add:
- `providers`: An array of providers for services that the component requires.

Finally the `ngOnInit()` method is a special angular method which gets executed when the component is initialized. 
You write there all initialisations you need to setup your component (you do that here, *not* in the constructor).




<a name="ngtemp"></a>
## 6. Templates, directives, and data binding
A template combines HTML with Angular markup that can modify HTML elements before they are displayed. 
Template directives provide program logic, and binding markup connects your application data and the DOM. 
There are two types of data binding:

- **event binding** lets your app respond to user input in the target environment by updating your application data.
- **property binding** lets you interpolate values that are computed from your application data into the HTML.

![component-binding](component-databinding.png)

Before a view is displayed, Angular evaluates the directives and resolves the binding syntax in the template to modify the HTML elements and the DOM, according to your program data and logic. 

Angular supports *two-way data binding*, a mechanism for coordinating the parts of a template with the parts of a component.
This means that changes in the DOM, such as user choices, are also reflected in your program data.
Add binding markup to the template HTML to tell Angular how to connect both sides.

The following diagram shows the four forms of data binding markup. 
Each form has a direction: to the DOM, from the DOM, or both.

![Data binding](databinding.png)

We've seen a couple of examples of angular **directives** in the [example](#ngex) above:
- `*nfIf`: to display or hide a component depending on a boolean property, for instance
- `*ngFor`: to display a list of html elements or components

For instance, the following list will be displayed if the value returned by the method `showList()` is true, in which case all items in the property `itemList` will be displayed:
```html
<ul *ngIf="showList()">
    <li *ngFor="let item of itemList; let i=index">{{i+1}}: {{item}}</li>
</ul>
```



<a name="ngservice"></a>
## 7. Angular services
Angular Services have responsibility to provide application data/business logic to components. 

For data or logic that isn't associated with a specific view, and that you want to share across components, you create a service class. 
A service class definition is immediately preceded by the `@Injectable()` decorator. 
The decorator provides the metadata that allows your service to be injected into client components as a dependency.

Dependency injection lets you keep your component classes lean and efficient. 
They don't fetch data from the server, validate user input, or log directly to the console; they delegate such tasks to services.

You should build feature specific micro services. 
For example, if your system have Login, SignUp, Dashboard components then you shall build LoginService, SignUpService, DashboardService and so on. 
Each service shall contain functionality required for specific targeted component.

To generate a service:
```
ng generate service services/name
```
will generate a `NameService`, *i.e.* a `name.service.ts` file within the `src/app/services` folder.
You will have to declare and register your service within the module where you'll be using it.
If you'll need it accross your whole app, do this in `app.module.ts`:
```ts
/*...*/
import { NameService } from './services/name.service';

@NgModule({
  /*...*/
  providers: [
    NameService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

TODO: import, dependency injection




<a name="ngroute"></a>
## 8. Angular router and navigation

TODO: ng start myapp --routing, declarations, navigation (nav-link in html, and in ts), RouterModule, RouterEvents

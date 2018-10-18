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
Open the chrome developer tools (View/Developer/Developer tools) to inspect the app and follow it running on the console


<a name="ngex"></a>
## 3. A simple example step by step


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






<a name="ngtemp"></a>
## 6. Templates, directives, and data binding
A template combines HTML with Angular markup that can modify HTML elements before they are displayed. 
Template directives provide program logic, and binding markup connects your application data and the DOM. 
There are two types of data binding:

- **event binding** lets your app respond to user input in the target environment by updating your application data.
- **property binding** lets you interpolate values that are computed from your application data into the HTML.

Before a view is displayed, Angular evaluates the directives and resolves the binding syntax in the template to modify the HTML elements and the DOM, according to your program data and logic. 
Angular supports two-way data binding, meaning that changes in the DOM, such as user choices, are also reflected in your program data.



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




<a name="ngroute"></a>
## 8. Angular router and navigation

TODO: ng start myapp --routing, declarations, navigation (nav-link in html, and in ts), RouterModule, RouterEvents

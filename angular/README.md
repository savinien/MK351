# Crash course on angular 6

0. [Setup](#ngsetup)
1. [Angular basics](#ngbas)
2. [Angular components](#ngcomp)
3. [Angular modules](#ngmod)


Main reference [angular documentation](https://angular.io/docs), in particular the tutorial.

<a name="ngsetup"></a>
## 0. Setup

Install [nodejs](https://nodejs.org/en/download/).

Install angular cli: `npm install -g @angular/cli`

To check which version of angular you've got installed, type in `ng version`.

<a name="ngbas"></a>
## 1. angular basics

**Create** a new angular project:
+ `ng new myapp`

this creates a folder `./myapp` with the angular project, named **myapp**, in it, then
+ `cd myapp` 

to navigate inside your project's folder
+ `atom .` 

to edit the project with atom

**Serve** the project: type this within `myapp` folder
+ `ng serve`

This will launch the application on your browser. The app will be running from [http://localhost:4200].
Open the chrome developer tools (View/Developer/Developer tools) to inspect the app and follow it running on the console



<a name="ngcomp"></a>
## 2. Angular components
Components are the building blocks of angular apps. A component can be viewed as an extension of an html element: it encapsulates the data, the html template, and the logic for a view. A component is a TypeScript class with an HTML template and an optional set of CSS styles that control a part of the screen.

Components are the most important concept in Angular 6. An Angular 6 application is basically a tree of components with a root component (the `AppComponent`). The root component is the one contained in the bootstrap array in the main NgModule module `app.module.ts`.

One important aspect of components is re-usability. A component can be re-used throughout the application and even in other applications. Common and repeatable code that performs a certain task can be encapsulated into a re-usable component that can be called whenever we need the functionality it provides.

To create a new component type in:
- `ng generate component user`

this creates a new `userComponent`, a set of 3 files:
- `user.component.ts`: the logic of your component
- `user.component.html`: the template/view of your component
- `user.component.css`: the style of your component

<a name="ngmod"></a>
## 3. Angular modules
A module is a container for a group or related components.
Each angular app has at least one module, namely `app.module`.




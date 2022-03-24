# Lifecycle hooks & Constructor
As we learned, the architecture in Angular is based on components and services gathered inside of modules.

This approach lets us reuse code by separating our application in components and then we can reuse the same component more than once.

Throughout the life of a component (starts when it's added to the DOM-the webpage itself- and ends when it's no longer in it) it goes through different phases. Both the constructor and lifecycle hooks are functions that lets us execute code when these phases happen.

Here is [Angular](https://angular.io/guide/lifecycle-hooks#lifecycle-hooks)'s definition of the lifecycle of a component:
> A component has a lifecycle managed by Angular.

>Angular creates it, renders it, creates and renders its children, checks it when its data-bound properties change, and destroys it before removing it from the DOM.

## Constructor
The `constructor` is the first function to get executed, just as the component gets created.

The main function of the constructor is to initialize synchronous variables and to inject dependencies. lets create an example of this and explain a bit better how things work:

```ts
import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name: string; // 01 -> When creating a component, variables get set first.
  constructor () { // 02 -> After variables are set, the constructor is called.
    this.name = 'Angular'; // Here you can initialize synchronous variables.
  }
}
```
When we want to inject some dependencies we can do it inside the parenthesis of the constructor, like this:
```ts
import { Component } from '@angular/core';
import { Router } from '@angular/router'; // Import needed service.

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  constructor ( private _router: Router ) { // Inject Dependencies Here.
  }
}
```
This will prompt Angular to provide the Router service to this component and then we can use that service throughout all this component.
## Lifecycle Hooks
Apart from the `constructor`, Angular has other functions that get triggered during the lifecycle of the component, aptly named ***Lifecycle Hooks***.

Lets take a look of all these methods:

| Lifycycle             | Desc                                                                     |
| --------------------- | ------------------------------------------------------------------------ |
| ngOnChanges           | Called after a bound input property changes                              |
| ngOnInit              | Called once the component is initialized                                 |
| ngDoCheck             | Called during every change detection run                                 |
| ngAfterContentInit    | Called after content (ng-content) has been projected into view           |
| ngAfterContentChecked | Called every time the projected content has been checked                 |
| ngAfterViewInit       | Called after the component’s view (and child views) has been initialized |
| ngAfterViewChecked    | Called every time the view (and child views) have been checked           |
| ngOnDestroy           | Called once the component is about to be destroyed                       |

In order to execute them, we just need to add it inside the component, but it's best practice to also implement the corresponding Interface. Like this:

```ts
import { Component, OnInit } from '@angular/core';
//Import the interface of ngOnInit.

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit { // Implements the interface.
  ngOnInit() {
    // Executes after the component is initialized.
  }
}
```

We mostly use `ngOnInit` for all the initialization/declaration and avoid stuff to execute in the constructor. The constructor should only be used to initialize class members but shouldn't do actual "work".

So we should use `constructor()` to setup Dependency Injection and not much else. `ngOnInit()` is a better place to "start".

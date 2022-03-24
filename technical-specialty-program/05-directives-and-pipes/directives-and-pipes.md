# Introduction to Angular Directives & Pipes

## What are Directives?

Angular `Directives` is basically a js class. We declare it as `@directive`. And there are `3 directives` in `Angular 7`

## Component Directives

Component directives form the main class. It possesses the details about how the component should be instantiated, processed and utilized at runtime.

## Structural Directives

As far as a structure directive is concerned, it is associated with manipulating the dom elements. You will find an `asterisk (*) prefix` before the directive. We can take `*ngFor` and `*ngIf` as examples here.

## Attribute Directives

When it comes to altering the behavior and look of the dom element, you turn to attribute directives.

## How to Create Custom Directives in Angular 7?

Custom directives are user-generated.

We are going to see how we can come up with a custom directive. We will be taking the aid of the Angular command line tool for the same.

Here is the command to create the custom directive in the Angular command line too

```bash
ng g directive change-color
```

The above command will generate 2 files, `change-color.directive.t`s and `change-color.directive.spec.ts`. And in the process, `app.module.ts` file is updated as well.

`Angular CLI` imports the custom directive service `“ChangeColorDirective”` and defined in declarations array in `app.module.ts` file by default.

```ts
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

// Custom directive imported here by Angular CLI
import { ChangeColorDirective } from './change-color.directive';

@NgModule({
  declarations: [
    AppComponent,
    ChangeColorDirective, // Custom directive is declared in declarations array by Angular CLI
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
```

## Example of Custom Angular Directive File

The `change-color.directive.ts` file holds a selector property and a directive. The things we define in the selector must match in the view since we assign the custom directive there.

```ts
import { Directive } from '@angular/core';

@Directive({
  selector: '[appChangeColor]',
})
export class ChangeColorDirective {
  constructor() {}
}
```

### Let’s Create Custom Angular Directive Logic

```ts
// Required services for custom directives
import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appChangeColor]', // Directive selector
})
export class ChangeColorDirective {
  constructor(elem: ElementRef, renderer: Renderer2) {
    renderer.setStyle(elem.nativeElement, 'color', 'blue');
  }
}
```

Let’s add the `appChangeColor` directive in the `app.component.html`

```html
<div style="text-align:center">
  <div style="padding-top: 30px">
    // appChangeColor custom Directive
    <h1 appChangeColor>I got colored by Angular Custom Directive</h1>
  </div>
</div>
```

# What are Pipes

Pipes are a feature built into Angular which basically allows you to transform output in your template.

`Angular Pipes` takes the _integers_, _strings_, _arrays_, and _dates_ as input separated with `|` to be converted in the format as required and display same in a browser. Inside the **interpolation expression**, we can define the pipe and use it based on the situation as there are many types of pipes we can use in an Angular application.

Angular comes with the stock of pipes such as `DatePipe`, `UpperCasePipe`, `LowerCasePipe`, `CurrentcyPipe`, and `PercentPipe` and they are all available for use in any angular template. Angular doesn’t have the `FilterPipe` or an `OrderByPipe`.

Angular doesn’t provide the pipes for filtering or sorting lists because they perform poorly and prevent aggressive minification. They both filter and order require parameters that reference object properties. Pipes are the great way to encapsulate and share a common display-value transformation.

1. AsyncPipe
2. CurrencyPipe
3. DatePipe
4. DecimalPipe
5. JsonPipe
6. PercentPipe
7. LowerCasePipe
8. UpperCasePipe
9. SlicePipe
10. TitleCasePipe

```html
<div style="text-align:center">
  <h1>
    Admin Roll off date is {{ rollOffDate | date }}
  </h1>
</div>

<!--Admin Roll off date is May 15, 2019-->
```

**Parameterizing a pipe**

```html
<div style="text-align:center">
  <h1>
    Admin Roll off date is {{ rollOffDate | date:'dd/MM/yyyy' }}
  </h1>
</div>

<!--Admin Roll off date is 15/05/2019-->
```

**Chaining pipes**

```html
<div style="text-align:center">
  <h1>
    Admin Roll off date is {{ rollOffDate | date | uppercase }}
  </h1>
</div>

<!--Admin Roll off date is MAY 15, 2019-->
```

**Pure and impure pipes**

There are two categories of pipes:

1. pure

2. impure.

By default, the pipes in Angular are `Pure`. Every pipe you have seen so far has been `pure` like built-in pipes. You can make the pipe `impure` by setting the `pure` flag to `false`.

**Pure pipes**

Angular executes the `pure` pipe only when it detects the absolute change to an input value. The `pure` change is either in the change to the primitive input value (String, Number, Boolean, Symbol) or a changed object reference (Date, Array, Function, Object).

**Impure pipes**

Angular executes the contaminated `pipe` during every _component change detection cycle_. The `impure pipe` is called often, as often as every _keystroke or mouse-move_.

### How to Create a Custom Angular Pipe?

- The pipe is a class that is decorated with pipe metadata.
- An Angular pipe class implements the `PipeTransform` interface’s `transform()` method that accepts an input value followed by optional parameters and returns the transformed value.
- To tell Angular that this is the pipe, you apply the `@Pipe decorator`, which you import from the Angular core library.
- The `@Pipe decorator` allows us to define the pipe name that you can use within the template expressions. It must be the valid JavaScript identifier.
- To tell the pipe that is `impure` inside the `@Pipe decorator` we should define `pure: false`

```ts
import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'power',
  pure: false,
})
export class PowerPipe implements PipeTransform {
  transform(base: number, exponent: number): number {
    return Math.pow(base, exponent);
  }
}
```

```html
<div style="text-align:center">
  <h1>
    {{2 | power: 5}}
  </h1>
</div>
```

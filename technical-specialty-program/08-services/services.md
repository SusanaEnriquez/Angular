## What are Services?

One of Angular's strong points is that it’s a complete framework that provides built-in support for managing state and objects through services.

Since we don’t want components to know how to do too much, we’ll rely on services to communicate with the server, perform client-side validation or calculations, etc.

Components should focus on presenting data and handling user events. When additional functionality needs to be performed they should delegate to services to provide for a more maintainable application and better code reuse.

That’s exactly what Service does — some reusable functionality for the app which should not be of any component’s concern.

An Angular service is a class that can be reused throughout an app.

Acts as a `singleton`

```ts
import { Injectable } from '@angular/core';

@Injectable({
  provideIn: 'root', // This provides service in AppModule
})
export class DataService {
  constructor() {}
  myServiceFunction() {
    // return data
  }
}
```

We have seen an import of `Injectable` which is a decorator that allows for something called Dependency Injection or DI for short

## Dependency injection (DI)

Is a way to create objects that depend on the other objects. A `Dependency Injection` system supplies the dependent objects (called the dependencies) when it creates an instance of an object

Our components and services are classes. Every class has a special function called `constructor` which is called when we want to create an object (instance) of that class to be used in our application.

If we wanted to create our service without Angular DI mechanism we would have to provide `HttpClient` manually.

Our code would look something like this

```ts
const myService = new MyService(httpClient);
```

But from where do we get the `httpClient`?

Similarly, we would have to do

```ts
const httpClient = new HttpClient(httpHandler);
```

to get it. Now, what about the `httpHandler`? When does this stop? As we can see, wiring stuff together manually would be a tedious and error prone process…

Angular DI mechanism does all what was described above automatically. All we have to do is to specify dependencies in the constructor of our components and they will be provided to them without any effort on our part.

With the advent of Angular 6 we got this new shiny tool for modeling the dependencies in our applications. The official name is `“Tree-shakable providers”` and we use it by employing new `providedIn` property of the `@Injectable` decorator.

We can think about providedIn as a specifying dependencies in reverse fashion. Instead of module providing all its services, it is now the service itself declaring where it should be provided…

Modules can be `providedIn` the `'root'` or in any of the available modules (eg `providedIn: SomeModule`). Adding to that, `'root'` is in fact an alias for the `AppModule` (and hence root injector) which is a nice convenience feature which saves us importing of the `AppModule` all around our code-base.

```ts
import { Injectable } from '@angular/core';
import { SomeModule } from '../some/some.module';

@Injectable({
  provideIn: 'root', // This provides service in AppModule
})
export class SomeService {}

// or

@Injectable({
  provideIn: SomeModule,
})
export class SomeOtherService {}
```

The new syntax is pretty straight forward.

### The providedIn: ‘root’ solution

This is the most common solution which will work for us under the most circumstances.

The main benefit of this solution is that the services will be bundled only if they are really used. “Used” stands for being injected into some component or other service.

On the other hand `providedIn: 'root'` has a huge positive impact on developers of reusable libraries for both technical and business functionality.

### The providedIn: EagerlyImportedModule

This solution generally doesn’t make sense and we should stick with `providedIn: 'root'` instead.

It can be used to prevent rest of the application from injecting the service without importing of the corresponding module but this is not really necessary in the eager module scenarios.

### The providedIn: LazyModule solutions

This solution is great because it helps us to prevent usage of our services outside of the desired module. Keeping dependency graph in check can be useful when developing huge applications when unconstrained possibility to inject everything everywhere can lead to a huge mess which may be impossible to untangle!

### What about providedIn: SomeComponent

Does the new syntax work for the Angular declarable, the `@Component` and `@Directive`?

The short answer is no, it doesn’t!

We still have to use `providers: []` in `@Component` or `@Directive` to create multiple service instances (per component). There is currently no way around this

1. Use `providedIn: 'root'` for services which should be available in whole application as singletons
2. Never use `providedIn: EagerlyImportedModule`, you don’t need it and if there is some super exceptional use case then go with the `providers: []` instead.
3. Use `providedIn: LazyServiceModule` to prevent service injection in the eagerly imported part of the application or even better use providers: [LazyService] in the `LazyModule`. Which is simpler to implement.
4. If we want to use `LazyServiceModule` then we have to import it in `LazyModule` to prevent circular dependency warning. `LazyModule` will then be lazy loaded using Angular Router for some route in a standard fashion.
5. Use `providers: []` inside of `@Component` or `@Directive` to scope service only for the particular component sub-tree which will also lead to creation of multiple service instances
6. Always try to scope your services conservatively to prevent dependency creep and resulting tangled hell

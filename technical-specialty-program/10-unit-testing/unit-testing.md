# Unit Test

We use `unit test` to protect our code from undesired side effects. Basically it's a safety net we can fall unto when making changes to our code. To better understand how it works, lets go through an example.

Our requirement is to implement a function that sets all properties of an object to the boolean value `false`. So we might end up with something like this.

```ts
public setPropsToFalse(booleanObject: Object): Object {
  // Get the names of all the properties.
  const props = Object.keys(booleanObject);
  // Iterate over the properties and change the object.
  props.map(prop => booleanObject[prop] = false);
  // Return the object with all values as false
  return booleanObject;
}
```

By using the **Angular CLI**, when generating a component, a `.spec.ts` file is added to our component folder. That file is where we write our tests. It will look something like this.

```ts
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
```

There's a lot to take in, so for now lets focus only on what we need to do. Check out the last function, the one that start with `it('should create', ...` that's a function that tests our main code and it has 2 parameters. The first parameter is the description of what is this test for (what's expecting to happen) and the second parameter is a function that mimics the interaction needed for our code to work. In this particular case, the test function expects the component to exist (And that's what's happening on the code we skipped, it is creating the component).

So let us create a new test function that will test our `setPropsToFalse` function.

```ts
it('should set all props of an object to false', () => {
  // We need to create a dummy object that resembles what our function will be working with.
  const dummyObject = {prop1: true, prop2: false, prop3: null};
  // Send our dummy object through our function and save the result.
  const result = component.setPropsToFalse(dummyObject);
  // At last, we check if the result is as we expect it to be.
  expect(result.prop1).toBe(false);
  expect(result.prop2).toBe(false);
  expect(result.prop3).toBe(false);
  // If all properties are false, our function works as expected.
});
```

How is it going so far? Hope its good, because this was the easy part.

Now, we need to test all other possible scenario.

What other possible scenarios are there? start by sending in null and undefined, will it break the function? We may not expect to have null or undefined values sent to this function (and honestly, why would someone do that?), but there are cases where the information we got from the back-end was not complete or there's a mismatch and this function gets called with a null or undefined value and it will crash and burn.

With that in mind, we should add validation of data inside of our `setPropsToFalse` function.

```ts
public setPropsToFalse(booleanObject: Object): Object {
  // Check if the input is an object.
  if(typeof(booleanObject) !== 'Object') {
    // If the input is not an object, return it as is.
    return booleanObject;
  }
  // Get the names of all the properties.
  const props = Object.keys(booleanObject);
  // Iterate over the properties and change the object.
  props.map(prop => booleanObject[prop] = false);
  // Return the object with all values as false
  return booleanObject;
}
```

With this approach, we only execute the logic inside the function for inputs that are `Objects`.

Another possible scenario is whenever an input has properties that have boolean objects inside of them. We'renot going to cover that scenario, and all the others that we can think of right now, because it'll take longer than needed for this example. Every  developer is responsible to thoroughly test their code.

We skipped a whole chunck of code inside the `spec.ts` file that we'll cover now. Here's the [Angular](https://angular.io/guide/testing#component-test-basics) official guide to component testing for more information.

After the imports, we can see a function with the name `describe`, that's just for sectioning our tests by whatever name we put in there and gives us a scope in which our variables will live on. It is in the next functions that we are actually creating the component itself, inside the `beforeEach`.

```ts
beforeEach(async(() => {
  TestBed.configureTestingModule({
    declarations: [ AppComponent ]
  })
  .compileComponents();
}));

beforeEach(() => {
  fixture = TestBed.createComponent(AppComponent);
  component = fixture.componentInstance;
  fixture.detectChanges();
});
```

In the first one we are providing whatever our component needs to the `TestBed`, which is a simulation of our Angular Module. Since this is unit test, we do not rely on other real `services` or `components` to work properly, we only need to test that whatever  is inside of this file works as intended.

So for example, if our component needs the `Router` service, we would import the testing service provided by angular and import it inside the TestBed, like this.

```ts
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
// Import the RouterTestingModule from angular.

import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      // Add the Router Testing service as an import.
      imports: [RouterTestingModule.withRoutes([])],
      declarations: [ AppComponent ]
    })
    .compileComponents();
  }));
});
```

If the component has a dependency on a service we created, we should implement a mock and also provide it inside the TestBed, like this.

```ts
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppComponent } from './app.component';
import { MyService } from './my.service';
// Import the real service class, not going to use it.
// But needed to tell the Testbed what we are mocking.

// Create a mock of our service that has the function our component is using.
class MyServiceMock {
  getValues(input: any){
    return input;
  }
}

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      // Add the Service as a provider, using the mock.
      providers: [{provide: MyService, useClass: MyServiceMock}],
      declarations: [ AppComponent ]
    })
    .compileComponents();
  }));
});
```
This will enable the component to use the Service, just not the real one, it'll use the mock that we provided.

There's much more to learn about `unit test` and it is recommended to check out [Angular](https://angular.io/guide/testing)'s official documentation on the topic. Yet, this is a good introduction and we should be able to run `ng test` now with confidence that our tests will pass.

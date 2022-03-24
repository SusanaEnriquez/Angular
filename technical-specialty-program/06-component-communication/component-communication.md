
## Custom Properties

We can use property in event binding not only on HTML elements and their native properties and events, we can also use it on directives and we also with ngClass and ngStyle, we can also use it on our own components and bind to our own custom properties and custom events.

We can emit our own events.

There are two ways to exchange data between components: Using the `@Input()` and `@Output()` decorators.

The `@Input()` decorator implements an input property that is available on the component template.

```ts
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-test-input',
  templateUrl: './test-input.component.html',
  styleUrls: ['./test-input.component.scss'],
})
export class TestInputComponent {
  @Input() public myInputVariable: string;
}
```

```html
<app-test-input [myInputVariable]="inputVariable"></app-test-input>
```

The `@Output()` decorator implements an output property & provisions an Observable which is also available on the component template.

```ts
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-test-output',
  templateUrl: './test-output.component.html',
  styleUrls: ['./test-output.component.scss'],
})
export class TestOutputComponent {
  @Output() public myOutput = new EventEmitter();

  public buttonClick(): void {
    this.myOutput.emit('helloworld');
  }
}
```

```html
<app-test-output (myOutput)="onOutput($event)"></app-test-output>
```

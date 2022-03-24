# **Angular Forms**
<div style="max-width: 768px; text-align: justify">

Angular provides **TWO** different approaches when it comes to forms:
- Template Driven
- Reactive

The **Form Model** is the basic data structure for angular forms, it tracks the value changes between your approach and the form input elements (the *HTML*). <br>
It has properties of each input (***FormControl***), and values like valid, touched, pristine, value, hasError, isSubmitted, etc.

Both **Reactive** and **Template Driven** share basic Form Building Blocks:
- **FormControl** -  Tracks the value and validation status of an individual form control
- **FormGroup** -  Tracks the value and validation status for a collection of form controls
- **FormArray** -  Tracks the value and validation status for an array of form controls

|  | Reactive | Template Driven
| - | - | - |
| Form Model | More explicit, created in component class | Less explicit, created by directives |
| Data Model | Structured | Unstructured |
| Predictability | Synchronous | Asynchronous |
| Form Validation | Functions | Directives |
| Mutability | Immutable | Mutable |

> The approach you use it's all up to you and the needs you have for your project.

***
## **Template Driven Forms**
First of all, you have to import the **FormsModule**

Basics:
- This is the most basic way to do forms, easy to use
- They are entirely made in the template (pure *HTML*)
- Rely heavily on Two-Way Data Binding
- Automatically tracks form and input element state
- It generates the form model automatically

### **Directives**
As we mentioned before, template driven forms are created by directives, the most important ones are:
- **ngForm** (Form Model)
- **ngModel** (Two-Way Binding)
- **ngModelGroup** (Grouping Elements within the Form)

The **ngForm** directive is used to access your Form Model. <br>
If you want to access it, you have to create a Template Reference Variable and asign it to ngForm:
``` html
<form #signUpForm="ngForm">
.
.
</form>
```
> Since the model is generated automatically using the template driven approach, this step is not necessary unless you want to do something specific with the form model.

The **ngModel** directive helps build a Value Object for the form. You have to link the object in the component class to the template with Two-Way Data Binding using ***[(ngModel)]***.
This directive should be present in every field you want to track.

In this case, we are going to set a model in the component class
``` ts
public loginForm = {
    username: string,
    password: string
}
```
> It is recommended to have an Interface as a **data model** to have better control of your form.

Then our form will be like:
``` html
<form #signUpForm="ngForm">
    <label for="username">Username</label>
    <input type="text" name="username" [(ngModel)]="loginForm.username">

    <label for="password">Password</label>
    <input type="password" name="password" [(ngModel)]="loginForm.password">
      
    <button type="submit" class="btn">Login</button>
</form>
```
> **name** attribute in each input is required for **ngModel** to work.

### **Validation**
Field validation is pretty straightforward, we have the *HTML* validators like;
- Required
- Pattern (*RegExp*)
- Minlength / Maxlength

But with Angular Forms we also have some CSS Classes that can help a lot. <br>
NgModel Directive also offers some properties that can be used for validation, they are the same as CSS classes but without the ng prefix

| Class | Meaning |
| - | - |
| ng-untouched | Initial State |
| ng-touched | When focused in the field |
| ng-pristine | Unmodified |
| ng-dirty | Has been modified |
| ng-valid  | Related to validations |
| ng-invalid | Related to validations |

``` html
<form #signUpForm="ngForm">
    <label for="username">Username</label>
    <input type="text" name="username"
           placeholder="Username"
           [(ngModel)]="loginForm.username"
           #usernameVar="ngModel"
           required
           [ngClass]="{'is-invalid': usernameVar.touched && !usernameVar.valid }">
    <span *ngIf="usernameVar.errors">
        Please enter your Username!
    </span>

    <label for="password">Password</label>
    <input type="password" name="password"
           placeholder="Password"
           [(ngModel)]="loginForm.password"
           #passwordVar="ngModel"
           required
           [ngClass]="{'is-invalid': passwordVar.touched && !passwordVar.valid }">
    <span *ngIf="passwordVar.errors">
        Please enter your Password!
    </span>
      
    <button type="submit" class="btn">Login</button>
</form>
```

As you can see, with the Template Driven approach we are doing everything in the html file instead of the component class. For every input needed, there's a lot of properties and code we have to declare for it to work properly.

***
## **Reactive Forms**
You have to import **ReactiveFormsModule**

Basics:
- More flexible
- Work perfectly for complex scenarios
- Everything is declared inside component class
- We have to manually create the Form Model with Form Group and Form Controls

### **Directives**
We have some new directives that have to be created in order for our form to work
- formControlName - Syncs FormControl in an existing FormGroup instance to a form control element by name
- formGroupName - Syncs a nested FormGroup instance to a DOM element
- formArrayName - Syncs a nested FormArray instance to a DOM element

The same form we have been doing, would look like this inside the component class
```ts
public loginForm = new FormGroup({
    username: new FormControl(),
    password: new FormControl(),
});
```
And in the html template, we associate the input to the formControl we just created:
``` html
<form [formGroup]="loginForm">
    <label for="username">Username</label>
    <input type="text" name="username" formControlName="username">

    <label for="password">Password</label>
    <input type="password" name="password" formControlName="password">
      
    <button type="submit" class="btn"
            [disabled]="!loginForm.valid">Login</button>
</form>
```
To access the form model properties, you can do it in different ways:
- loginForm.controls.username.valid
- loginForm.get('password').valid

With reactive forms we have an injectable service that provides factory methods for creating control instances in a cleaner way, the **FormBuiler**. <br>
Since **FormBuilder** is a service, it has to be provided in the constructor (*inject*)
``` ts
public loginForm = this.fb.group({
    username: null,
    password: ''
    /* You can add an object with more properties
    username: { value: 'test', disabled: true } */
});

constructor(private fb: FormBuilder) {}
```

To update input elements in the form, we can use two approaches:
- **setValue** - Update Every form control
- **patchValue** - Update Some of the form controls
``` ts
this.loginForm.setValue({
    username: 'test',
    password: 'asdf123'
});
```

### **Validation**
Just like in the template driven approach, we can use *HTML* validators as an array in the formControl
``` ts
public loginForm = this.fb.group({
    username: { null, [Validators.required, Validators.maxLength(10)] },
    password: { '', [Validators.required] }
});
```

### **Custom Validators**
You can create your own custom validators and put them as part of the validations array

``` ts
function myValidator(c: AbstractControl): {[key: string]: boolean} | null {
    if (somethingWrong) {
        return {'myValidator': true}
    }
    return null
}

public loginForm = this.fb.group({
    username: { null, Validators.required },
    password: {'', [Validators.required, myValidator] }
});
```

Finally with all these changes, our template will be much cleaner:
``` html
<form [formGroup]="loginForm">
    <label for="username">Username</label>
    <input type="text" name="username"
           placeholder="Username"
           formControlName="username"
           [ngClass]="{'is-invalid': !username.valid }">
    <span *ngIf="!username.valid">
        Please enter your Username!
    </span>

    <label for="password">Password</label>
    <input type="password" name="password"
           placeholder="Password"
           formControlName="password"
           [ngClass]="{'is-invalid': !password.valid }">
    <span *ngIf="!password.valid">
        Please enter your Password!
    </span>
      
    <button type="submit" class="btn"
            [disabled]="!loginForm.valid">Login</button>
</form>
```
***
Keep on building your own Angular applications!  
In case you need something else, check any of the additional resources:

- [Angular Documentation](https://angular.io/api)
- [Angular Forms Documentation](https://angular.io/guide/forms-overview)
- [Angular Template Driven Forms](https://angular.io/guide/forms)
- [Angular Reactive Forms](https://angular.io/guide/reactive-forms)

</div>
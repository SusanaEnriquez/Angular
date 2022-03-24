# Introduction to Reactive Programming and RxJS

<div style='max-width: 768px; text-align: justify'>
<img src="../__assets/rxjs-logo.png" alt="RxJS Logo" width="256"/>

## **What is Reactive Programming?**

Reactive programming is an extension to the *Observer Pattern*, on in which an object, called the subject, maintains a list of its dependents, called observers, and notifies them automatically of any state changes, usually by calling one of their methods.

Reactive Programming came to life thanks to a library called [ReactiveX](http://reactivex.io).

As ReactiveX describes its purpose:
> ReactiveX is a library for composing asynchronous and event-based programs by using observable sequences. It extends the observer pattern to support sequences of data and/or events and adds operators that allow you to compose sequences together declaratively while abstracting away concerns about things like low-level threading, synchronization, thread-safety, concurrent data structures, and non-blocking I/O.

Now that we know that ReactiveX is some kind of uprade of the observer pattern, you might be asking yourself, why use ReactiveX and Observables?

ReactiveX answers this question with:
> The ReactiveX Observable model allows you to treat streams of asynchronous events with the same sort of simple, composable operations that you use for collections of data items like arrays. It frees you from tangled webs of callbacks, and thereby makes your code more readable and less prone to bugs.

## **Advantages**
Observables have many advantages that solve many problemas that come with asynchronous programming.

### **Composable**
The first advantage of observables is that they are ***composable***. By composable we mean that observables are intented to compose flows and sequences of asynchronous data.

When working inside the world of asynchronous programming, we face a lot of troubles, because when you have to work with one or two instances of asynchronous data, it seems very straigh forward, but when you have to process and combine different instances of this kind of data, things are not at straight forward to understand.

Observables can be processed, created, returned and even chained to achieve this actions, this is why observables are ***composable***.

### **Flexible**
Another advantage of Observables is that one single observable can send one value, data streams or even infinite data streams with **one single instance!!**

### **Less Opinionated**
Observables were built thinking about the observer pattern, but its implementation was done without thinking about a single approach, talking about multi-thread programming, event loops, non-blocking I/O or any other approach. With this, the developer has freedom about how to handle this, depending on expertise or project needs.

Another great thing about this is that if you need to change how the `Observable` is managed, you just change the `Observable` configuration and anything else that has to do with this `Observable` is never touched.

### **Polyglot Implementation**
ReactiveX is currently implemented in a variety of languages, in ways that respect those languages’ idioms, and more languages are being added at a rapid clip.

This means that, no matter the language you are working on, there is a ReactiveX implementation already out and release or being worked on! You can see all the ReactiveX compatible languages [here.](http://reactivex.io/languages.html)

---
Now that we have stated what ReactiveX is, lets start talking about key concepts inisde the world of reactive programming and how does Angular uses this inside its core.

We have been talking about some concepts from ReactiveX like observable, subscription, streams and other key words inside reactive programming, but, what are we talking about exactly? Well, we're going to describe key concepts about reactive programming and RxJS implementation used inside Angular.

## **RxJS**
Angular 2+ uses an implementation of ReactiveX as its core and adopts the reactive paradigm using RxJS. This is the Javascript implementation of ReactiveX.

You can always read more about RxJS [here.]()

## **Observable**
The word `Observable` will be inside your vocabulary inside the reactive programming world because this can be described as the core of ReactiveX and can be defined as:

> [A representation of any set of values over any amount of time. This is the most basic building block of RxJS.](https://rxjs-dev.firebaseapp.com/api/index/class/Observable)


An `Observable` can be described as a timeline variable that contains the history of states of a stream of data at a certain time. Its an encapsulation which can "post/provide" data or values.

Observables provide support for passing messages between publishers and subscribers in your application.

An observable can deliver multiple values of any type—literals, messages, or events, depending on the context. The API for receiving values is the same whether the values are delivered synchronously or asynchronously. Because setup and teardown logic are both handled by the observable, your application code only needs to worry about subscribing to consume values, and when done, unsubscribing. Whether the stream was keystrokes, an HTTP response, or an interval timer, the interface for listening to values and stopping listening is the same.

Creating an observable is as easy as doing...

```ts
let myObservable = Observable.of(1);
```

We have just created our first observable with just one line of code!!

Now lets learn a bit about the states that an observable can have in its lifecycle.

You can always read more about observables [here.]()

### **States of an observable**
There is a misconception about comparing a `Promise` and an `Observable` when they are clearly two different things, even though they might have some conceptual similarities, like the asynchronous part, but they are still two different worlds.

A Promise has two states where it can be `resolved` or `rejected`. When a Promise is resolved, its response triggers the `then` method and evaluates the callback that was passed to it with the successful response as parameter, or if there was an error, the `catch` method gets triggered with the error passed as parameter to the callback. When any of this two happen, the promise is destroyed, so if you want to do something with the same promise, you have to instantiate a new one. This does not happen with Observables.

When an observable provides a value successfully, the `susbscribe` method does the same as the `then` method in promises, as the `error` method does the same as the `catch` method but there is one huge difference. When the observable provides a data stream/value or an error, it does not die or get destroyed. Also, observables have a third state which is the `complete` state and it gets called when an observable completes its life cycle and you want to indicate that this observable will no longer be available.

This instance keeps providing values to its subscribers as long as they are still subscribed to the observable.

For this reason, Observables are very powerful, because one instance of an observable can work until it gets destroyed.

You can always read more about the states of an observable [here.]()

### **Subcribe**
We have been using the word `subscribe` a lot on the past topic, but what does subscribe mean on the reactive programming field?

Well, `subscribe` is basically what we do to get the value inside an observable and to *listen* to what's inside of it.

Think of the observable as a bucket filled with water and its an infinite amount of it, then connect a hose to it and let the water flow through it. You have just subscribed to the *liquids* observable, so now you know that water is what's inside the bucket.

Now, what will happen if you connect *n* amount of hose to the bucket? Well, you'll have *n* amount of subsscriptions that will get water provided by this bucket.

Let's mix things up a bit, let's get juice inside the bucket and let it flow through all the connected hose. What happened here?

You detected a change on the observable and EVERY subscription knew about this change from water to juice! When this happens, every observable can REACT to this change and do certain actions.

Here is an example of how this would look in code:

```ts
// This is where you create your bucket
let liquids = Observable.of('water');

 // This is where you connect the hose to the bucket
liquids.subscribe(
    (liquid: string) => {
        // This is where you react whenever the bucket content changes.
        console.log(liquid);
    }
);
```
You can always read more about subscribe [here.]()

### **Subscription**
Continuing with the example above, we can listen to changes that happen with the content of the bucket because we have subscribed (connected a hose) to the bucket, but what does the hose really represent on reactive programming? Well, the hose represents a `subscription`, which is what keeps the communication between the observable and the observer.

Going forward on this topic, what would you do when you know you are done using certaing hose connected to the bucket? You'd unplug that hose, right? Well that's whan an `unsubscribe` does. It disconnects from the observable, breaking that one single connection from it, but not other subscriptions will be affected.

Let's unplug the hose from our current bucket:
```ts
// A subscribe method call return a subscription reference to use later
let hose = liquids.subscribe(
    (liquid: string) => {
        console.log(liquid);
    }
);

// Calling the unsubscribe method ends the connection between the observable and the observer
hose.unsubscribe();
```

You can always read more about subscriptions [here.]()

### **Subject and BehaviorSubject**
When working with observables, most of the time, observables are provided to you, or they are returned by funcitons like API calls and other sources, but you basically never create an observable on your own, unless you want to control the flow of data or make something change when you publish inside that observable, well, that's where `Subject` and `BehaviorSubject` come into play.

We have been talking about an observable and an observer being two different things and very powerful things, but what would you think if I told you that an observer and an observable can be controlled by the same source?

This is were things get interesting. When wanting total control of what happens to an observable and listen to it at the same time, you can create a Subject.

A `Subject` and a `BehaviorSubject` are special observable that can be an observable and an observer at the same time.

You might be asking yourself, why have two kinds of subjects when they do the same? Well, they are subjects but there is one key difference between a `Subject` and a `BehaviorSubject`: it's first value.

When creating a `Subject`, the subject has to have a value and it broadcasts it across all its subscriptions but you have no control over changing this value., but if you create a `BejaviorSubject`, you control the value with which is created and also its successors inside its data stream and preserve the latest broadcasted value inside its stream.

Lets create an example of this and explain a bit better how things work:

```ts
// This is where we create a Subject
let subject = new Subject();
let observable = subject.asObservable();

// Let's start listening to the subject from one source we'll call observerA
observable.subscribe({
  next: (v) => console.log('observerA: ' + v)
});

// Now lets subscribe in another source and call it observerB
observable.subscribe({
  next: (v) => console.log('observerB: ' + v)
});

// The subject sends this values through its data stream
subject.next(1);
subject.next(2);
.
.
.
```

When we run this code, this will be our result on screen:
```
observerA: 1
observerB: 1
observerA: 2
observerB: 2
```

After the `subject` variable sends the value `1`, all the listeners get broadcasted with the this value on their subscription callback and print their name and recieved value.

As you can see here, both observers receive this the published values and they perform their callback action. The thing with subjects its that, if a new observer subscribes to the subject AFTER the values are published, then that observer will react to all of the values that were publishde before by the subject.

Here's an example about this:
```ts
.
.
.
// A new wild observerC appears!
observable.subscribe({
  next: (v) => console.log('observerC: ' + v)
});

// We provide a new value to the stream
subject.next(3)
```

When this code is executed, the full output will be this:
```
observerA: 1
observerB: 1
observerA: 2
observerB: 2
observerC: 1
observerC: 2
observerA: 3
observerB: 3
observerC: 3
```
All the subscribers react to the `3` value being published by the subject but `observerC` did all the past work that `observerA` and `observerB` already did.

This history problem does not happen when you use `BehaviorSubject`, because this one publishes the most recent value to all of its subscribers.

Here's an example on how a `BehaviorSubject` works:
```ts
let subject = new BehaviorSubject(0); // 0 is the initial value
let observable = subject.asObservable();

observable.subscribe({
  next: (v) => console.log('observerA: ' + v)
});

subject.next(1);
subject.next(2);

observable.subscribe({
  next: (v) => console.log('observerB: ' + v)
});

subject.next(3);
```
The output of executing this code would be:
```
observerA: 0
observerA: 1
observerA: 2
observerB: 2
observerA: 3
observerB: 3
```

So, as you can see, observerB only reacted to the value `3` because it was the most recent value since its subscription.

Here you can read more about [`Subject`](http://reactivex.io/rxjs/manual/overview.html#subject) and [`BehaviorSubject`](http://reactivex.io/rxjs/manual/overview.html#behaviorsubject)

---
## **Pipe and Operators**
Remeber how we sait that one of the many advantages that Observables have, is that they are composable? Well, let's start digging into this topic.

When we said that Observables are composable, we mean that Observables can be manipulated to our convenience and work with them as we wish.

The examples we used before are based on hose and a liquid bucket because of one reason: observables can be easily related to plumbing and we are going to add one mor topic to what we've talked about.

Let's think about the bucket and the hose from before and try thinking on a way to transform that plain water into another liquid, like adding soap to it, but how would you add soap to this water when the only thing that is being poured into the bucket is plain water?

Well, to do this we'll introduce you a concept called `Pipe`. The `Pipe` method from an observable lets you do something with an observable or transform it into another observable without affecting the original.

An example of this is turning our water into color water. 

We're gonna first create our observable to transform its values to other values.

```ts
let myObservable = Observable.from(2);

myObservable.pipe(
    // Here is where we transform our value into another thing
);
```

As you can see, using the `pipe` method is as easy as just calling it, but this will only pass the same observable from one end to another, so, where is the transformation? Well, we need operators to do this.

### **Operators**
Operators are used to transform the content of an observable and return another observable. There are many different operators inside RxJS and are used for different purposes, going from simply applying a filter to an observable data stream, to waiting until an array of observables publish values and are passed inside an array.

You can always read more about operators [here.](http://reactivex.io/rxjs/manual/overview.html#operators)

Now, let's talk about the most basic operator known in RxJS that is `map`.

#### **map Operator**
The map operator takes each of the values published by the observable and returns a new observable containing the returned value of the passed function.

It's a bit confusing understanding how this works on text, so let's make a code example:

```ts
// Open a pipe so that the original observable passes through the operators
myObservable.pipe(
    map(value => { return value * 10 })
).subscribe(
    value => { console.log(value) } // Output: 20
);
```

If you subscribe to `myObservable` you will get a value of `20` instead of the initial value of `2`, but why is that? It's because the first value was transformed by the `map` and returned a new observable with the value of `20` inside of it.

In this example there is only one value on the observable, but every value that gets published will go through the map and return the values multiplied by 2.

This is what happens when you use a singe map operator, but what happens when you link different operators to process the values of an observable as needed? You can concatenate different operators as you wish inside that observable's `pipe`.

Let's do another example:
```ts
// Open a pipe so that the original observable passes through the operators
myObservable.pipe(
    map(value => { return value * 10 }), // returns Observable.of(20)
    map(value => { return value / 2 }), // returns Observable.of(10)
    map(value => { return 0 }) // returns Observable.of(0)
).subscribe(
    value => { console.log(value) } // Output: 0
);
```

In this case we concatenated three different map functions and the last one returns a `0`, so no matter what value gets published, the pipe will always return `0`.

The `map` operator in RxJS does basically the same as the `map` function on arrays inside Javascript.

You can always read more about `map` [here.](http://reactivex.io/rxjs/class/es6/Observable.js~Observable.html#instance-method-map)

With `map` on our vocabulary, now let's see another commonly used opertaror that is `mergeMap` also known as `flatMap`.

#### **mergeMap / flatMap Operator**
`mergeMap` or `flatMap` combines the source observables and returns a new observable with the flatten version of the values coming from the source observables.

Here is an example about how this would look in code:
```ts
const letters = of('a', 'b', 'c');
const result = letters.pipe(
  mergeMap(x => interval(1000).pipe(map(i => x+i))),
);
result.subscribe(x => console.log(x));
 
// Results in the following:
// a0
// b0
// c0
// a1
// b1
// c1
// continues to list a,b,c with respective ascending integers
```

The first source of values is the `letters` observable, then the seccond source is the `interval` function that returns a value of `0` and after a second it publishes a `1` and so on.

As you can se the result of the `mergeMap` gives as a result, the flattened version of this values.

This could be a very helpful operator when having a lot of observables and what to have the reduced version between all of them.

You can read more about `mergeMap` [here.](https://rxjs-dev.firebaseapp.com/api/operators/mergeMap)

#### **forkJoin Operator**
Imagine that you have the case where your workflow depends on two different observables to finish before continuing. In the `Promise` world, it would be so easy to do a `Promise.all` and wait for all promises to get resolved and then execute the resolved callback, but in reactive programming there is no such thing as an `all` method, but we do have something similar: `forkJoin`.

The `forkJoin` operator waits for all obsrevables passed to it, to publish a value and then return an observable of an array containing the values of each observable IN ORDER.

An example could be coded like this:
```ts
const observable = forkJoin([
  of(1, 2, 3, 4),
  Promise.resolve(8),
  timer(4000),
]);
observable.subscribe({
 next: value => console.log(value),
 complete: () => console.log('This is how it ends!'),
});
 
// Logs:
// [4, 8, 0] after 4 seconds
// "This is how it ends!" immediately after
```

As you can see, the `forkJoin` returned an observable of an array that contains the last emitted value of each of the source observables in their corresponding order!

There are a lot of use cases for this operator and you can read more about it [here.](https://rxjs-dev.firebaseapp.com/api/index/function/forkJoin)

---
Reactive programming is a whole new world, full of advantages inside the asynchronous world and has a lot to learn from it. This text is just the introduction to the basics and most used tools inside ReactiveX.

Hope everything here helps you understand a bit more about reactive programming and make you want to learn more about it and how you can use it in your projects to create amazing applications, its up to you how you do this and learn more about it.
</div>
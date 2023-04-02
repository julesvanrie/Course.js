# Introduction

Let's do some first explorations.

## Basic program structure

Take a look at the program structure.

You will see two so-called *function* definitions. We'll talk about those later.

The first one sets up a blank canvas for us to work on.

The real magic happens inside the second function. It only has one line:

```js
circle(mouseX, mouseY, 20);
```

You can probably guess what it does, but let's try to understand it a bit better.

To do so you can always look at the documentation. Or often easier, just experiment, trial-and-error.

## We are using our first *function*

Let's change the line into this:

```js
function draw() {
  circle(300, 300, 20);
}
```

Somebody has written some code and wrapped it inside a "function" `circle` that we can use by "calling" it.

Between the parentheses, you see three so-called "arguments".

And finally, the line ends with a semi-colon. In JavaScript, we end our coding lines with a semi-colon, otherwise the JavaScript interpreter continues reading the next line, thinking all of it is just one instruction. The semi-colon is important, and you'll find out, because you'll forget it often. 🙂

## Let's experiment

Have a look at the three arguments: 300, 300, 20. What do you think they could do?

Try changing them one by one, and see what they exactly do.

## Let's add some color

Change the code to this and see what happens:

```js
function draw() {
  fill("yellow")
  circle(300, 300, 20);
}
```

Try to add an extra circle in another colour now.

## A first little challenge

Try drawing something like this:

![Square with circles](square.png)

You'll need to draw a rectangle. What function would you need for that? Think about it, and give it a try...

<br/>

<details>
<summary>Didn't work? Click here</summary>

Just like me, you probably tried `rectangle()`, ... and failed. Turns out, programmers are lazy. They don't like to type a lot, so they make abbrevations. Try `rect()`.
</details>

<br/>

<details>
<summary>Having difficulty positioning the different elements? Click here</summary>

You probably figured out by now that the first two arguments stand for the `x` and `y` coordinates of the element you're drawing.

Now, between `circle()` and `rect()`, these `x` and `y` behave slightly different. For the circle, they stand for the middlepoint. And for the rectange, for the top left corner. If you think about, that kinda makes sense, no?
</details>

<br/>

<details>
<summary>Solution (only click this once you tried it yourself first</summary>

```js
function draw() {
	fill("red");
	rect(400, 400, 100);
	fill("yellow");
	circle(400, 400, 40); // left top
	circle(500, 400, 40); // right top
	circle(400, 500, 40); // left bottom
	circle(500, 500, 40); // right bottom
}
```
</details>

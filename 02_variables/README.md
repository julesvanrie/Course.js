# Variables


## Variables can make your life easier

Remember our drawing we made in the introduction. We had 4 circles with a diameter of 40. Now, let's make those circles a bit larger. Go and make them with a diameter of 60.

I guess you replaced the 40 by 60, and you did that four times, right? What if I want to change it again? I'll have to change it 4 times again.

Or if there were more circles, I'd have to change all of them. Not very handy, right? There must be an easier way to do that.

Well, there is, we can define a so-called *variable* for our diameter, and use that.

A variable is basically a named box, and we're going to store a value in it. Too complicated? Let's just see it in practice.

We are going to *declare* and *initialize* a variable (don't worry too much about these words):

```js
let diameter = 40;
```

And now we can use diameter in our code to draw a circle.

```js
circle(400, 400, diameter);
```

Once we have done that, it becomes very easy to change the diameter: we just change the value of the variable diameter, and that's it.

Try to change your code to use this diameter variable, and play with different variables. Change it to 60, 80, 100 and see what happens.

<details>
<summary><strong>Solution</strong> (only click this once you tried it yourself first)
</summary>


```js
function draw() {
  let diameter = 40;
	fill("red");
	rect(400, 400, 100);
	fill("yellow");
	circle(400, 400, diameter); // left top
	circle(500, 400, diameter); // right top
	circle(400, 500, diameter); // left bottom
	circle(500, 500, diameter); // right bottom
}
```
</details>

<br>

## What is `let`?

You probably wondered what the `let` in this line meant:
```js
let diameter = 40;
```

The first time you want to use a variable, you have to tell JavaScript that it should create it. That's where we use `let` for. You can read the line above as *let the variable diameter be equal to 40*.

With `let` we create the variable. And with the `= 40` we say that it is equal to 40.

You could also do it like this, split into two lines:

```js
let diameter;    // Declare the variable
diameter = 40;   // Initialize to 40
text("Diameter is equal to " + diameter, 500, 100);
```

It does exactly the same thing. Put these three lines inside the `draw` function to see it in practice. The third line just prints out the value of diameter on the canvas.

Now, take the same three lines, but move the third line into second position. You see that diameter is *undefined* now. That is because we *declared* the variable (we created it), but we didn't *initialize* it yet (we didn't give it a value yet).

## You can also change variables

Try this:

```js
let diameter = 40;    // Declare and initialize the variable
diameter = 60;        // Change the variable
text("Diameter is equal to " + diameter, 500, 100);
```

You can also do some mathematics, if you want to:

```js
let diameter = 4 * 10;
text("Diameter is equal to " + diameter, 500, 100);
```

Or:

```js
let diameter = 40;
diameter = 2 * diameter;    // Let's double the size
text("Diameter is equal to " + diameter, 500, 100);
```

## Exercise

Take the example with the rectangle and the four circles, and add some more variables. What else can you put into variables?

<details>
<summary><strong>Here are some ideas.</strong> Click here</summary>

> You could put these into variables:
> - The size of the square
> - The x and y position of the upper left corner of the rectangle

When we have done that, we can also position the four circles easily, using just the size and x and y of the rectangle.

</details>
<br>

Change your code to use more variables. If you do it well you should be able to change the size of the square and of the circles by just changing two variables.


<details>
<summary><strong>Solution</strong> (only click this once you tried it yourself first)</summary>

```js
function draw() {
  let x = 400;
  let y = 400;
  let size = 100;
  let diameter = 40;
	fill("red");
	rect(x, y, size);
	fill("yellow");
	circle(x, y, diameter); // left top
	circle(x+size, y, diameter); // right top
	circle(x, y+size, diameter); // left bottom
	circle(x+size, y+size, diameter); // right bottom
}
```
</details>

<br>

## One last thing: constants

Next to variables, JavaScript also knows *constants*. They are very similar, except that unlike variables, you can't change them after you initialized them. You declare a constant using the keyword `const`.

Try this:

```js
const diameter = 40;
text("Diameter is equal to " + diameter, 500, 100);
```

Very similar as I said. Now try to change it:

```js
const diameter = 40;
diameter = 60;
text("Diameter is equal to " + diameter, 500, 100);
```

If all went well, you see an error message at the bottom of your screen. That is because we tried to change the value of a constant, and that is not allowed.

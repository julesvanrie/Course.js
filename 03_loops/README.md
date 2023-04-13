# Loops

Think about this for a second: if I ask you to draw 3 circles, all on the same line, next to each other, how would you do that?

You could write three times almost the same line of code. And that would work. But what if I ask you to draw 30 circles next to each other? That would become a bit repetitive, right?

## DRY, or Don't Repeat Yourself

Programmers don't like repetition. It takes a lot of time. And if you want to change something, you would have to change it multiple times. Yikes.

## FOR loops

That's why we have `for` loops. Read the following line of code, try to understand it, and run it.

```js
function draw() {
  let xStart = 400;
  let yStart = 400;
  let diameter = 20;
	fill('blue');
  for (let i = 0; i < 3; i = i + 1) {
    x = xStart + i*diameter;
    circle(x, yStart, diameter);
  }
  text("I'm done.", 400, 450);
}
```

Let's understand the lines that starts with `for` a bit better.

- You already understood that we use the `for` to execute a piece of code repeatedly.
- The piece of code that has to be repeated comes after the `for` *statement*, and you include it in curly braces. In our case it has two lines of code.
- In the `for` line there are three things inside the parantheses:
  - The *initializor*: `let i = 0`: this is the counter variable that we are using.
  - The *condition*: `i < 3`: as long as this condition is true, the loop will continue.
  - The *iteration*: `i = i + 1`: we increase our counter (or decrease the counter, that's also possible).

So what happens?
1. Our interpreter reads the for statement for the first time. It initializes `i` to be 0.
2. The interpreter checks the condition: is i less than 3? Yes it is.
3. So it executes the code in between the curly braces (in our case: it calculates x and draws a circle).
4. After it has done executing the block of code, it increases i with 1 (because we told it to in the for statement using `i = i + 1`).
5. It goes back to number 2: it checks again if the condition is still valid, and so on.
6. After 3 times, it will see that `i` is no longer less than 3. So it will not execute the code anymore, but continues with the rest of the code. (In our case it writes "I'm done.")

> ✍️ Now change this bit of code to draw the 30 circles I talked about before. See how easy that goes?

> ✍️ Try drawing overlapping circles by only changing the `for` line.

> ✍️ Try changing the code to draw 4 circles under each other (vertically instead of horizontally).

> ✍️ Try changing the code to draw 5 circles in a diagonal from top left to bottom right.

## Shorter notation

In reality you will often see the for statement in this form:

```js
for (let i = 0; i < 3; i++) {
  // Here goes some code that uses i
}
```

The only thing that changed is the third block in the `for` statement: we wrote it shorter. The following two lines do exactly the same:

```js
i = i + 1;  // The long way
i++;        // The short way using the increment operator
```

`++` is the so called `increment` operator. There also exists a `--` operator. Guess what that one does...

## `i` doesn't need to be `i`

We used `i` here, and you will see it a lot, but you can use any name you want. You could have done this:

```js
for (let step = 0; step < 3; step++) {
  // Here goes some code that uses step
}
```

## Nested loops

You can also create a loop within a loop.

> ✍️ Try using a nested loop to draw this. (Hmmm, doesn't that look like a certain game?)

You can use `background('white');` in the setup function to set the background to ... white.

When using nested loops you will often see that we use `i` for the outside loop and `j` for the inner loop. You could also do a loop within a loop within a loop. Guess which letter we'll use for that third loop?

<details>
<summary><strong>Solution</strong> (only click this once you tried it yourself first)
</summary>


```js
function draw() {
  let xStart = 200;
  let yStart = 200;
  let diameter = 40;
	let spacing = 10;
	let nHorizontal = 7;
	let nVertical = 6;
	fill('blue');
	rect(
		xStart,
		yStart,
		spacing + nHorizontal*(diameter+spacing),
		spacing + nVertical*(diameter+spacing)
	)
	fill('white');
	let xFirstCenterPoint = xStart + spacing + diameter/2;
	let yFirstCenterPoint = yStart + spacing + diameter/2;
  for (let i = 0; i < nHorizontal; i++) {
    x = xFirstCenterPoint + i * (diameter + spacing);
		for (let j = 0; j < nVertical; j++) {
			y = yFirstCenterPoint + j * (diameter + spacing)
    	circle(x, y, diameter);
		}
  }
}
```

</details>

<br>

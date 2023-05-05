# Conditional execution

Sometimes we want programs to do different things in different situations.

For that we can use the if statement:

```js
if (condition) {
  doOneOrMoreThingsHere;
} else {
  doSomeOtherThingsHere;
}
```

If you want to check if two things are equal, you have to do that like this:

```js
if (name === "John") {
  doSomething;
}
```

## A simple `if`

Each time we draw a new piece on the board, it has to have the other color.

> ✍️ Make a piece of code that fills a complete column on the board, with on each
row a piece in another color. The first one should be red, the next yellow, red
again, yellow again, and so on. In your code you should use the `drawPiece()`
function only once.

You probably already guessed you need a `for` loop for that.
You'll also need to remember the last color you used.

> ✍️ Change your code to fill the whole board. Again, you should use the `drawPiece()`
function only once.

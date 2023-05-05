# User input

In programs we sometimes want to ask input from our user. Let's see some examples.

## Click

To do something when the user presses a button, use this:

```js
function mousePressed() {
  ellipse(mouseX, mouseY, 50, 50);
}
```

> ✍️ Make a piece of code that draws a circle where the user clicked.

## Mouse buttons

If the user used for example the left button to click, a variable `mouseButton`
will have the value `LEFT`.

> ✍️ Adapt your function so the user can draw a yellow piece with the left mouse
button and a red piece with the right button.

## Improving this

Now, what we have done so far is not very user friendly. If the user wants to
draw a piece in an empty spot, the user has to click precisely in the center of
the empty spot. No good.

We want that wherever the user clicks somewhere in an empty spot, the piece is
drawn in the right place.

> ✍️ First, change your code to use the `drawPiece()` function we created earlier.

If you don't see anything when you click, think what's happening. Your code will
be a bit more complex than you think.

> ✍️ Change your code to draw the piece in the right place, wherever the user
clicks inside the empty spot.

## Switch colors automatically

We now choose the color based on which mouse button the user has clicked.

But we want the colors just to alternate: after a yellow follows a red, and then
a yellow and then a red again, and so on.

> ✍️ Change your code to automatically change color each time it draws the next
piece on the board.

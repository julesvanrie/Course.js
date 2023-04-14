# Functions

The next thing we could do is write some code to draw colored circles on our board.

In the part on four loops, we already wrote some code to draw a white circle. If we now want to draw colored circles, we could copy and paste that code and adapt it a bit, but that's a bit annoying right? Remember *"Don't repeat yourself"*?

To draw a circle, we need to get the right position of the middle point in x and y coordinates. And that `x` and `y` depends on our `xStart`, `yStart`, the `spacing` and the `diameter` and we have to calculate that each time. Pfff...

Wouldn't it be easier if we could just say *"draw me a yellow piece (circle) in the fourth column of the lowest row"*?

For that we are going to use *functions*. The idea is that a write some code, wrap it in such a function, and then I can *call* that function whenever I need it.

## Our first function

Let's write our first function together.

```js
function drawPiece(row, column, color) {
  xFirstColumn = xStart + spacing + diameter / 2;
  x = xFirstColumn + row * (spacing + diameter);
  yBottomBoard = yStart + spacing + nVertical * (diameter + spacing);
  yFirstRow = yBottomBoard - spacing - diameter / 2;
  y = yFirstRow - column * (spacing + diameter);
  fill(color);
  circle(x, y, diameter);
}
```

Try to understand the code. First, have a look at what we did to determine `x`. Then, look at the `y`. We did a bit of a special thing with the `y`, slightly different from `x`.

On our canvas the y coordinate goes from 0 at the top to a large number at the bottom. On our board, we want the bottom row to be row 0 and the top row to be row 6. (We could also have gone from 1 to 7, but programmers like to do things differently: in many programming languages you will see counting starting from 0.)

## Use our first function

We can now insert this function in our program. You can add it after the existing `setup` and `draw` functions.

> ✍️ Within the `draw` function, you can now use the function we defined before. Add this line at the end of the `draw` function

```js
drawPiece(1, 2, 'yellow')
```

See how we *call* this function with the so-called *arguments* `1, 2, 'yellow'`? Do you see how they relate to how we defined the function? What do you think it will do?

If you run the code you will notice that it doesn't work.

What happened is that because we have defined `xStart`, `yStart`, `spacing` and `diameter` inside the `draw` function, we can't access these variables from inside our new function. You can move them outside the `draw` function, and then it will work.

> ✍️ Now run it again. Did it do what you thought it would? If not, try to understand why.

## Refactor our code

*Refactor*? That's a term programmers use when they are going to change their existing code to make it better, to let it reuse other code.

Remember that in the for loop exercise, we drew the whole board. We drew a blue rectangle, and then we drew white circles inside. But now we have a function that we can very easily use to draw our circles.

So we are going to change our existing code to use that new function. That way we will only have written the whole logic to draw a circle only once, and we reuse it in different place. Smart, right? Remember "Don't repeat yourself"!

> ✍️ Try changing our code in the for loop to reuse our `drawPiece` function. This is already a bit harder. You can find the solution in a separate file `solution1.js`. (We use the extension `js` for JavaScript code.)

> ✍️ Do you see how much easier this has made our main `draw` function?

I also added some comments to describe what our different functions do. That is always a good practice. Imagine somebody else has to understand your code. Or you have to understand your own code a couple of months from here. These comments will surely help you.

## Refactor our code further

The next step we can take is to make a function to draw the whole board game. This will help us later, when our program becomes more complex. We will hide all the logic to draw the game board in a function `drawBoard`, and then in our main program, we can just write `drawBoard()`. That is going to make our code much easier to understand, and to expand.

> ✍️ Try to write this `drawBoard` function and use it. First think about what parameters this function could take to make it easier to reuse. Now, use it in our main `draw` function.

<details>
<summary><strong>Hint</strong> (Click here)
</summary>

We could write it with these parameters:
- `nHorizontal` for the number of columns
- `nVertical` for the number of rows
- `bgColor` to set the background color of the board
- `fgColor` to set the foreground color of the gaps

This makes it easy for us to change the color or the number of rows and columns later.

</details>

The full solution is in a separate file `solution2.js`.

> ✍️ Have a look at how short the main `draw` function now is. We even added a red and a yellow piece, and we still have only three lines.

Our program has become longer, but our main logic is much shorter and easier to understand. And now we have code we can reuse to draw more pieces on the board. Neat!

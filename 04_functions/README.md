# Functions

The next thing we could do is write some code to draw coloured circles on our board.

In the part on four loops, we already wrote some code to draw a white circle. If we now want to draw coloured circles, we could copy and paste that code and adapt it a bit, but that's a bit annoying right? Remember *"Don't repeat yourself"*?

To draw a circle, we need to get the right position of the middle point in x and y coordinates. And that `x` and `y` depends on our `xStart`, `yStart`, the `spacing` and the `diameter` and we have to calculate that each time. Pfff...

Wouldn't it be easier if we could just say *"draw me a yellow piece (circle) in the fourth column of the lowest row"*?

For that we are going to use *functions*. The idea is that a write some code, wrap it in such a function, and then I can *call* that function whenever I need it.

## Our first function

Let's write our first function together.

```js
function drawPiece(row, column, colour) {
  xFirstColumn = xStart + spacing + diameter/2;
  x = xFirstColumn + row * (spacing + diameter);
  yBottomBoard = yStart + spacing + nVertical*(diameter+spacing);
  yFirstRow = yBottomBoard - spacing - diameter/2;
  y = yFirstRow - column * (spacing + diameter);
  fill(colour);
  circle(x, y, diameter);
}
```

We did a bit of a special thing with the `y`. On our canvas the y coordinate goes from 0 at the top to a large number at the bottom. On our board, we want the bottom row to be row 0 and the top row to be row 6. (We could also have gone from 1 to 7, but programmers like to do things differently: in many programming languages you will see counting starting from 0.)

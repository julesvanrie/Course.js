/*
Define the parameters for our program
Note how we changed these into constants
That is prudent: we don't want to accidentally changes these values
*/
const xStart = 200;
const yStart = 200;
const diameter = 40;
const spacing = 10;

function setup() {
  /*
  This is needed for our openprocessing.org environment
  */
  createCanvas(windowWidth, windowHeight);
  background('white');
}


function draw() {
  /*
  Our main function with our main logic
  */
  drawBoard(7, 6, 'blue', 'white');
  drawPiece(1, 2, 'yellow');
  drawPiece(6, 0, 'red');
}


function drawPiece(row, column, color) {
  /*
  Draw one piece (a circle with diameter set globally)
  in position row - column on the board
  Column starts counting from 0 from the left
  Row starts counting from 0 from the bottom of the board
  */

  // Determine x and y of our pieces center point
  xFirstColumn = xStart + spacing + diameter / 2;
  x = xFirstColumn + row * (spacing + diameter);
  yBottomBoard = yStart + spacing + nVertical * (diameter + spacing);
  yFirstRow = yBottomBoard - spacing - diameter / 2;
  y = yFirstRow - column * (spacing + diameter);

  // Draw the piece
  fill(color);
  circle(x, y, diameter);
}


function drawBoard(nHorizontal, nVertical, bgColor, fgColor) {
  /*
  Draw the gameboard with nHorizontal columns and nVertical rows
  Uses the globally set diameter, spacing, xStart and yStart
  The board is drawn in the bgColor. The wholes in fgColor.
  */

  // Draw the board
  fill(bgColor);
  rect(
    xStart,
    yStart,
    spacing + nHorizontal * (diameter + spacing),
    spacing + nVertical * (diameter + spacing)
  );

  // Draw the holes
  for (let i = 0; i < nHorizontal; i++) {
    for (let j = 0; j < nVertical; j++) {
      drawPiece(i, j, fgColor);
    }
  }
}

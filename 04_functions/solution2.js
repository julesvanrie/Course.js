/*
 * Define the parameters for our program
 * Note how we changed these into constants
 * That is prudent: we don't want to accidentally changes these values
 */
const xStart = 200;
const yStart = 200;
const diameter = 40;
const spacing = 10;


/**
 * Setup of the openprocessing.org environment
 */
function setup() {
  /*
  This is needed for our openprocessing.org environment
  */
  createCanvas(windowWidth, windowHeight);
  background('white');
}


/**
 * Main function that draws on the screen
 */
function draw() {
  /*
  Our main function with our main logic
  */
  drawBoard(7, 6, 'blue', 'white');
  drawPiece(1, 2, 'yellow');
  drawPiece(6, 0, 'red');
}


/**
 * Draw one piece (a circle with diameter set globally)
 * @param {number} row - the row in which to draw the piece
 * @param {number} column - the column in which to draw the piece
 * @param {string|Object|number[]} color - the color of the piece
 * @return {void}
*/
function drawPiece(row, column, color) {
  // Determine x of our piece's center point
  xFirstColumn = xStart + spacing + diameter / 2;
  x = xFirstColumn + row * (spacing + diameter);

  // Determine x of our piece's center point
  yBottomBoard = yStart + spacing + nVertical * (diameter + spacing);
  yFirstRow = yBottomBoard - spacing - diameter / 2;
  y = yFirstRow - column * (spacing + diameter);

  // Draw the piece
  fill(color);
  circle(x, y, diameter);
}


/**
 * Draw the gameboard
 * Uses the globally set diameter, spacing, xStart and yStart for positioning
 * @param {number} nHorizontal - the number of columns
 * @param {number} nVertical - the number of rows
 * @param {string|Object|number[]} bgColor - the color of the board
 * @param {string|Object|number[]} fgColor - the color of the wholes in the board
 *
 * The board is drawn in the bgColor. The wholes in fgColor.
*/
function drawBoard(nHorizontal, nVertical, bgColor, fgColor) {
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

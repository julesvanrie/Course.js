# Arrays


## Let the user just select the column


> ✍️ Change your code so that the user just selects the column (instead of row and column). The first the column is selected, the piece should drop to the lowest row, then to the next row and so on.

Did you find a solution? Congratulations. It's probably not super easy, right?

Later on, we will also need to test if there are four pieces of the same color next to each other. So we need to know which pieces are where on our board. So far we do not have that information. So let's work on that.

## Arrays to the rescue

Arrays in JavaScript are a numbered collection of items. They can store multiple other objects like numbers, strings, or more advanced things.

You can make array like this:

```js
let array_name = [item1, item2, item3];
let cars = ["Lada", "Dacia", "Skoda"];
let positions = [1, 2, 5, 4, 2, 1]
```

> ✍️ Think how you could use this in your code to store which piece went where. Hint: you can also make an array that contains other arrays.

You can do multiple things with arrays:

```js
cars[0]; // Access the first item >>> "Lada"
cars[2]; // Access the third item >>> "Skoda"
positions.length; // Get the length >>> 6
positions.push(3); // Add an extra item to positions
```

More interesting is that you can loop over an array. You can do that in two ways.

```js
// First method
for (let i = 0; i < cars.length; i++) {
  console.log(cars[i]);
}

// Second method
cars.forEach(console.log);
```

In the second method, we just used the built-in function `println`, but you can also do this with your function. Here goes a bit of a dumb example:

```js
function myFunction(value) {
  console.log("Next item:");
  console.log(value);
}

cars.forEach(myFunction);
```

Or without making a separate function (this is a bit more advanced, but you'll see this a lot, especially in web programming):

```js
cars.forEach(value => {
  console.log("Next item:");
  console.log(value);
})
```

## Let's use arrays in our program

Now that you're the specialist of arrays, let's use them in our program to track where our pieces are.

In our array, we will just store 1 and 2 for pieces of player 1 and 2. We don't store the colors, that way we can use other colors if we want to later on.

> ✍️ Create an array of arrays to hold our positions.

> ✍️ Change your code so that when the user clicks on a column, a new item is added to the array.

> ✍️ Now we can use the length of the array to see where we should draw the new piece.

> ✍️ Make sure we don't add more pieces in a column than there are rows. Use the length of the array in an if condition.

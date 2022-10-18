//SOLID

//Dry
//There’s a principle in programming called DRY, or Don’t Repeat Yourself. It usually means refactoring code by taking something done several times and turning it into a loop or a function. DRY code is easy to change, because you only have to make any change in one place.
//Example
/*let drinks = ['lemonade', 'soda', 'tea', 'water'];
  let food = ['beans', 'chicken', 'rice'];
  //non DRY code
  console.log(drinks[0]);
  console.log(drinks[1]);
  console.log(drinks[2]);
  console.log(drinks[3]);

  console.log(food[0]);
  console.log(food[1]);
  console.log(food[2]);

  // DRY code
  function logItems (array) {
    for (let i = 0; i < array.length; i++) {
      console.log(array[i]);
    }
  }

  logItems(drinks);
  logItems(food);
  */

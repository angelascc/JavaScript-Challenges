'use strict';

function fruitProcessor(apples, oranges) {
  const juice = `Juice with ${apples}apples and ${oranges} oranges.`;
  return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

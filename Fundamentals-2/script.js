'use strict';

function fruitProcessor(apples, oranges) {
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
  return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log (appleOrangeJuice);

//function declaration
const age1 = calcAge1(1992);
console.log(age1);

function calcAge1 (birthYear) {
  return 2037 - birthYear;
}

//functiion expression
const calcAge2 = function (birthYear) {
  return 2037 - birthYear;
}

const age2 = calcAge2(1992);
console.log(age2);

//arrow function
const calcAge3 = birthYear => 2037 - birthYear;
const age3 = calcAge3(1992);
console.log(age3);

//function calling other function
function cutFruitPieces(fruit) {
  return fruit * 4;
}

function fruitProcessor(apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);
  const juice = `juice with ${applePieces} piece of apple and ${orangePieces} pieces of orange.`;
  return juice;
}
console.log(fruitProcessor(4, 7));

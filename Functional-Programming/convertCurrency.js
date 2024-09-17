var currencyOne = 100;
var currencyTwo = 0;
var exchangeRate = 1.2;

function convertCurrency(amount, rate) {
  return amount * rate;
}

currencyTwo = convertCurrency(currencyOne, exchangeRate);

console.log(currencyTwo);

//return

function doubleIt(num) {
  return num * 2;
}

function turnIntoObject(val) {
  return {
    property: val,
  };
}

var answer = turnIntoObject(doubleIt(100));

console.log(answer);

//recursion

function exampleOne() {
  console.log(1);
  console.log(2);
  console.log(3);
}

exampleOne();

//
let counter = 3;
function exampleTwo() {
  console.log(counter);
  counter = counter - 1;
  if (counter === 0) return;
  exampleTwo();
}

exampleTwo();

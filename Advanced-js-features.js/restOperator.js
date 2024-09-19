//rest operator in functions

function printNumbers(...numbers) {
  console.log(numbers);
}
printNumbers(1, 2, 3, 4, 5); //arguments are collected into array

//destructuring

const numbers = [1, 2, 3, 4, 5];
const [first, ...rest] = numbers;
console.log(first);
console.log(rest);

const person = { name: "Alice", age: 25, job: "Engineer" };
const { name, ...details } = person;
console.log(name);
console.log(details);

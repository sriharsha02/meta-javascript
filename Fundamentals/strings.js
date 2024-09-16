//Arrays are iterable

var veggies = ["carrot", "beetroot", "cucumber"];

console.log(veggies.length);

console.log(veggies[0]);
console.log(veggies[1]);

for (var i = 0; i < veggies.length; i++) {
  console.log(veggies[i]);
}

//string are iterable too

var fruit = "pomegranate";

console.log(fruit.length);

console.log(fruit[0]);
console.log(fruit[1]);

for (var i = 0; i < fruit.length; i++) {
  console.log(fruit[i]);
}

//strings !== arrays

var greet = "hello";

var myName = "harsha";

//console.log(greet.pop()); //TypeError: greet.pop is not a function

console.log(greet + myName);

console.log(greet.concat(myName));

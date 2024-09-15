var test = typeof "What is this type?";

var test1 = typeof 10;

var test2 = typeof 3.14;
var test3 = typeof true;
var test4 = typeof false;
var test5 = typeof (1 < 2);

var test6 = typeof [1, 2, 3]; //arrays in JS are actually objects
var test7 = typeof { firstProperty: 1 };
var test8 = typeof function abc() {
  console.log("abc");
};

console.log(test);
console.log(test1);
console.log(test2);
console.log(test3);
console.log(test4);
console.log(test5);
console.log(test6);
console.log(test7);
console.log(test8);

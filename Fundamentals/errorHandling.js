function add(a, b) {
  console.log(a + b);
}

add(1, 2);
add("1" + 2); //Program still runs, but there is a bug
console.log("Still running");

// console.log(c + d); //Error and program stops here

console.log("This line never runs");

//syntax error

// var myName = 'hell;

//type error

// (5).pop()

// ----------------------------------------Error Handling

/*
console.log(d + e);
console.log("This line is never reached");

throw new ReferenceError();

*/

try {
  console.log(c + d);
} catch (err) {
  console.log(err);
  console.log("There was an error");
  console.log("The error saved in the error log");
}
console.log("The program is not stopped");

//

try {
  throw new ReferenceError();
} catch (err) {
  console.log(err);
  console.log("There was an error");
}
console.log("The program is not stopped");

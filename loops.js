//for loop
for (var i = 1; i <= 3; i++) {
  console.log(i);
}
console.log("Go!");

for (var i = 10; i > 0; i--) {
  console.log(i);
}
console.log("Happy New Year!");

//

for (var i = 1; i <= 5; i++) {
  console.log(i);
}
console.log("Counting completed!");

//
for (var i = 5; i > 0; i--) {
  console.log(i);
}
console.log("Countdown finished");

//

//while loop

var counter = 3;
while (counter > 0) {
  console.log(counter);
  counter--;
}
console.log("Happy New Year!");

//

var i = 1;
while (i <= 5) {
  console.log(i);
  i++;
}
console.log("Counting completed");

//
var i = 5;
while (i > 0) {
  console.log(i);
  i = i - 1;
}
console.log("Countdown finished!");

//
var year = 2018;
while (year <= 2022) {
  console.log(year);
  year++;
}

//nested loops : multiplication table.

for (var i = 5; i <= 5; i++) {
  for (var j = 1; j <= 10; j++) {
    console.log(i + " x " + j + " = " + i * j);
  }
}

//
var cubes = "ABCDEFG";
for (var i = 0; i < cubes.length; i++) {
  var styles =
    "font-size: 40px; border-radius: 1px; border: 1px solid black; background: pink; color: red;";
  console.log("%c" + cubes[i], styles);
}

//exercises:

for (var i = 1; i <= 10; i++) {
  if (i == 1) {
    console.log("Gold Medal");
  } else if (i == 2) {
    console.log("Silver Medal");
  } else if (i == 3) {
    console.log("Bronze Medal");
  } else {
    console.log(i);
  }
}

for (var i = 1; i <= 10; i++) {
  switch (i) {
    case 1:
      console.log("Gold Medal");
      break;
    case 2:
      console.log("Silver Medal");
      break;
    case 3:
      console.log("Bronze Medal");
      break;
    default:
      console.log(i);
  }
}

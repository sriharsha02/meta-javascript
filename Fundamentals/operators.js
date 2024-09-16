/*Arithmetic operators

 addition  2 + 3

 subtraction  3 - 2

 division  35 / 5

 multipllication  7 * 4

*/

/*Comparison operators

 greaterThan  3 > 2;
 lessThan  2 < 3;
 notEqualTo  5 != 6;
 equalTo  5 == 5;

*/

/* 
Logical Operators

&&

||

!

*/

console.log(2 + 2);
console.log(1 + 2 + 3 + 4 + 5);
console.log(20 - 18);
console.log(2 * 3);
console.log(8 / 1);
console.log(3 > 2);
console.log(2 > 3);
console.log(10 == 10);

/*
-----------------------------The equality operator, == ---------------------------------------------

The equality operator checks if two values are equal.

For example, this comparison returns true: 5 == 5. Indeed, it is true that 5 is equal to 5.

Here's an example of the equality operator returning false:  5 == 6. Indeed, it is true that 5 is not equal to 6.

Additionally, even if one of the compared values is of the number type, and the other is of the string type, the returned value is still true: 5 == "5". 

This means that the equality operator compares only the values, but not the types.


-----------------------------The strict equality operator, ===  -------------------------------


The strict equality operator compares for both the values and the data types.

With the strict equality operator, comparing 5 === 5 still returns true. The values on each side of the strict equality operator have the same value and the same type. However, comparing 5 == "5" now returns false, because the values are equal, but the data type is different.

----------------------------The inequality operator, !=  ---------------------------------------------


The inequality operator checks if two values are not the same, but it does not check against the difference in types.

For example, 5 != "5" returns false, because it's false to claim that the number 5 is not equal to number 5, even though this other number is of the string data type.


-------------------------------The strict inequality operator !==  --------------------------------------
For the strict inequality operator to return false, the compared values have to have the same value and the same data type. 

For example,  5 !== 5 returns false because it is false to say that the number 5 is not of the same value and data type and another number 5.

However, comparing the number 5 and the string 5, using the strict inequality operator, returns true.
*/

// Exercises:

var score = 8;
console.log("Mid-level skills:", score > 0 && score < 10);

var timeRemaining = 2;
var energy = 10;
console.log("Game over: ", timeRemaining == 0 || energy == 0);

var num1 = 2;
var num2 = 5;
var test1 = num1 % 2;
var test2 = num2 % 2;
var result1 = test1 == 0;
var result2 = test2 == 0;

console.log("Is", num1, "an even number?", result1);
console.log("Is", num2, "an even number?", result2);

var now = "Now in";
var three = 3;
var d = "D!";
console.log(now + three + d);

var counter = 0;
counter += 5;
counter += 3;
console.log(counter);

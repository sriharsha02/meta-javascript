//--------------------var-----------------------------------

//accessing before initialization

console.log(user);
var user;
// declare and redeclare

var myname = "sri";
var myname = "harsha";
var myname = "akshintala";
console.log(myname);

//---------------------------------let----------------------------
// console.log(secondname);
// let secondname;

//can declare an un assigned variable

let user2;
console.log(user2);

// cannot re declare but re assign

// let user2;
user2 = "sri";
console.log(user2);

// ---------------------------------const-----------------------------

//must be initialized

// console.log(user3);
// const user3;

//cannot redeclare

const user4 = "sri";
user4 = "harsha";

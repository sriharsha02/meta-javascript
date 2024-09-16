//if else

var result = 50;

if (result > 40) {
  console.log("Pass");
} else {
  console.log("Fail");
}

//if, else if, else

var rank = "second";

if (rank == "first") {
  console.log("gold");
} else if (rank == "second") {
  console.log("silver");
} else if (rank == "third") {
  console.log("bronze");
} else {
  console.log("no medal");
}

//switch
console.log("Switch statement");
var place = "first";

switch (place) {
  case "first":
    console.log("gold");
    break;
  case "second":
    console.log("silver");
    break;
  case "third":
    console.log("bronze");
    break;
  default:
    console.log("no medal");
}

//Exercises

var age = 10;
if (age >= 65) {
  console.log("You get your income from your pension");
} else if (age < 65 || age >= 18) {
  console.log("Each month you get a salary");
} else if (age < 18) {
  console.log("You get an allowance");
} else {
  console.log("The value of the age variable is not numerical");
}

//switch

var day = "Sunday";
switch (day) {
  case "Monday":
    console.log("Do Something");
    break;
  case "Tuesday":
    console.log("Do Something");
    break;
  case "Wednesday":
    console.log("Do Something");
    break;
  case "Thursday":
    console.log("Do Something");
    break;
  case "Friday":
    console.log("Do Something");
    break;
  case "Saturday":
    console.log("Do Something");
    break;
  case "Sunday":
    console.log("Do Something");
    break;
  default:
    console.log("There is no such day");
}

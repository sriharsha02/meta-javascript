//functional programming

// var shoes = 50;
// var stateTax = 1.2;
// function totalPrice(shoes, tax) {
//   return shoes * tax;
// }

// var toPay = totalPrice(shoes, stateTax);
// console.log(toPay);

//OOP

var purchase1 = {
  shoes: 100,
  stateTax: 1.2,
  totalPrice: function () {
    var calculation = purchase1.shoes * purchase1.stateTax;
    console.log(calculation);
  },
};

purchase1.totalPrice();

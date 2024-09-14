// push and pop

var arr = [];
arr.push("Apple");
arr.push("Pomegranate");
console.log(arr);

arr.pop();
console.log(arr);

function arrBuilder(one, two, three) {
  var shopFruits = [];
  shopFruits.push(one);
  shopFruits.push(two);
  shopFruits.push(three);
  return shopFruits;
}
var shoppingList = arrBuilder("guava", "coconut water", "banana");
console.log(shoppingList);

//objects are not iterable
// const car = {
//   speed: 100,
//   color: "red",
// };

// for (const prop of car) {
//   console.log(prop); // car is not iterable
// }

//arrays are iterable

const nums = [100, 20, 53, 85, 74];
for (const num of nums) {
  console.log(num);
}

//Object.keys()

const car2 = {
  speed: 100,
  color: "blue",
};

console.log(Object.keys(car2));

//Object.values()

const car3 = {
  speed: 200,
  color: "black",
};
console.log(Object.values(car3));

//Object.entries()

const car4 = {
  speed: 400,
  color: "red",
};
console.log(Object.entries(car4));

//------Example

const clothingItem = {
  price: 50,
  color: "white",
  material: "cotton",
  season: "summer",
};
for (const key of Object.keys(clothingItem)) {
  console.log(key, ":", clothingItem[key]);
}

//--------------example

function testOnDynamicKey() {
  var dynamicKey;
  if (Math.random() > 0.5) {
    dynamicKey = "speed";
  } else {
    dynamicKey = "color";
  }

  const drone = {
    speed: 15,
    color: "blue",
  };
  console.log(drone[dynamicKey]);
}
testOnDynamicKey();

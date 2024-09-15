var user = {};

//object literals and dot notation
var assistantManager = {
  rangeTilesPerTurn: 3,
  socialSkills: 30,
  streetSmarts: 30,
  health: 40,
  specialAbility: "young and ambitious",
  greeting: "Let's make some money",
};

var table = {
  legs: 3,
  color: "brown",
  priceUSD: 100,
};

console.log(table);
console.log(table.color);

var house = {};
house.rooms = 2;
house.color = "pink";
house.priceUSD = 12345;

console.log(house);

house.windows = 2;
console.log(house);

//object literals and bracket notation

var house2 = {};

house2["rooms"] = 4;
house2["color"] = "blue";
house2["priceUSD"] = 12345;

console.log(house2);

//can evaluate expressions

var arrKeys = ["speed", "altitude", "color"];
var drone = {
  speed: 100,
  altitude: 200,
  color: "red",
};
for (var i = 0; i < arrKeys.length; i++) {
  console.log(drone[arrKeys[i]]);
}

//exercise

var favCar = {};
favCar.color = "black";
favCar.convertible = "false";
console.log(favCar);

//adding functions in object

var car = {};
car.mileage = "20";
car.color = "red";
car.turnKeyOn = function () {
  console.log("The engine is turned on");
};
car.lightsOn = function () {
  console.log("The lights are turned on");
};
console.log(car);

car.turnKeyOn();
car.lightsOn();

const car = {
  engine: true,
  steering: true,
  speed: "slow",
};

const sportsCar = Object.create(car);
sportsCar.speed = "fast";
console.log("The sportsCar object:", sportsCar);

//for in loop
console.log("for in loop output");
for (prop in sportsCar) {
  console.log(sportsCar[prop]);
}
console.log("iterates over the object and its prototype");
//for of loop

console.log("for of loop output");
for (key of Object.keys(sportsCar)) {
  //iterating
  console.log(key, ":", sportsCar[key]);
}
console.log("Iterates over object own properties only");

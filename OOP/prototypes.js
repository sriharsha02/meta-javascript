//The prototype is an object that can have properties to be shared by multiple other objects.

var bird = {
  canfly: true,
  hasWings: true,
  hasFeathers: true,
};

var eagle1 = Object.create(bird);

console.log("eagle1:", eagle1);

console.log("eagle1 can fly:", eagle1.canfly);
console.log("eagle1 has wings:", eagle1.hasWings);
console.log("eagle1 has feathers:", eagle1.hasFeathers);

var eagle2 = Object.create(bird);

console.log("eagle2 has wings:", eagle2.hasWings);

var penquin1 = Object.create(bird);
penquin1.canfly = false;
console.log("penquin1 can fly:", penquin1.canfly);

console.log("penquin1:", penquin1);
console.log("penquin1 has wings:", penquin1.hasWings);
console.log("penqion1 can fly:", penquin1.canfly);

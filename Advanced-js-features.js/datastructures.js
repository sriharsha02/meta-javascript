//Map

const map = new Map();

map.set("name", "Harsha");
map.set("age", 28);

console.log(map.get("name"));
console.log(map.has("age"));
console.log(map.size);

//iterating over a map

for (const [key, value] of map) {
  console.log(`${key}:${value}`);
}

map.delete("age");
console.log(map);
map.clear();

console.log(map);

//Set

const set = new Set();

set.add(10);
set.add(20);
set.add(10);

//iterating over set
for (const value of set) {
  console.log(value);
}
console.log(set.has(10));
console.log(set.size);

set.delete(20);
set.clear();

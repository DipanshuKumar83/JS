let cities=["sonpur","gorakhpur","varanasi","lucknow"];
console.log(cities.length);
cities.push("kanpur");
console.log(cities);
cities.pop();
console.log(cities);

let softcopycities= cities;
console.log(softcopycities);

let hardcopycities= [...cities];
console.log(hardcopycities);
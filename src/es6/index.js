function newFunction(name, age, country) {
  var name = name || "Sneider";
  var age = age || 22;
  var country = country || "COL";
  console.log(name, age, country);
}

// es6

function newFunction2(name = "Sneider", age = 22, country = "COL") {
  console.log(name, age, country);
}

newFunction2();
newFunction2("Andres", "32", "MEX");

let hello = "Hello";
let world = "world";
let epicPhrase = hello + " " + world;
console.log(epicPhrase);

let epicPhrase2 = `${hello} ${world}`;
console.log(epicPhrase);

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

// es6
let epicPhrase2 = `${hello} ${world}`;
console.log(epicPhrase);

let lorem =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit\n" + "Other stuff";

// es6
let lorem2 = `Other stuff
Lorem ipsum dolor sit amet, consectetur adipiscing elit
`;

console.log(lorem);
console.log(lorem2);

let person = {
  name: "Sneider",
  age: 22,
  country: "COL",
};

console.log(person.name, person.age, person.country);

let { name, age, country } = person;

console.log(name, age, country);
let team1 = ["Sneider", "Andres", "Juan"];
let team2 = ["Paola", "Vivian", "Anya"];

let education = ["Pedro", ...team1, ...team2];

console.log(education);

{
  var globalVar = "Global Var";
}

{
  let globalLet = "Global let";
  console.log(globalLet);
}

console.log(globalVar);

const a = "b";
a = "a";
console.log(a);

let name = "Sneider";
let age = 22;

obj = { name: name, age: age };

//es6
obj2 = { name, age };

console.log(obj2);

const names = [
  { name, age },
  { name: "Anya", age: 24 },
];

const listOfnames = names.map(function (item) {
  console.log(item);
});

// es6
const listOfnames2 = names.map((item) => console.log(item));

const listOfnames3 = (name, age, country) => {
  // do stuff
};

const listOfnames4 = (name) => {
  // do stuff
};

const square = (num) => num * num;

const helloPromise = () => {
  return new Promise((resolve, reject) => {
    if (false) {
      resolve("Niceee :)");
    } else {
      reject("Error :(");
    }
  });
};

helloPromise()
  .then((response) => console.log(response))
  .catch((error) => console.log(error));

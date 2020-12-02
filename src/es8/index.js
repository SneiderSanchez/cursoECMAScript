const data = {
  frontend: "Sneider",
  backend: "Smolder",
  design: "Anya",
};

const entries = Object.entries(data);
console.log(entries);
console.log(entries.length);

const values = Object.values(data);
console.log(values);
console.log(values.length);

const string = "Hello";
console.log(string.padStart(7, "hi"));
console.log(string.padEnd(12, "---"));
console.log("food".padEnd(12, "----"));

const obj = {
  name: "oscar",
};

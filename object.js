const person = {
  name: "sumon",
  age: 24,
  isStudent: true,
  relation: "single",
};

Object.freeze(person);

person.age = 20;

Object.seal(person);

person.status = "not found";

console.log(person);
// console.log(Object.keys(person));
// console.log(Object.values(person));
// console.log(Object.entries(person));

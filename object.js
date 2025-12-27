// const person = {
//   name: "sumon",
//   age: 24,
//   isStudent: true,
//   relation: "single",
// };

// Object.freeze(person);

// person.age = 20;

// Object.seal(person);

// person.status = "not found";

// console.log(person);
// console.log(Object.keys(person));
// console.log(Object.values(person));
// console.log(Object.entries(person));

const person = {
  name: "sumon",
  age: 24,
  isStudent: true,
  relation: "single",
};

// simple for in loop in object***************

for (const key in person) {
  console.log(`key : ${key},  value: ${person[key]}`);
}

// console.log(Object.entries(person));

// for of loop in object********************
// 1
for (const key of Object.entries(person)) {
  console.log(key);
}
// 2
for (const [key, value] of Object.entries(person)) {
  console.log(`key: ${key},  value: ${value}`);
}

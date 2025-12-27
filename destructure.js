const people = {
  name: "Akash",
  age: 25,
  friends: ["Ripon", "Nirmal", "Hori", "Ridoy"],
  isMarit: false,
  hight: 67,
};

// normal ways to find this*******

// console.log(people);
// console.log(people.name);
// console.log(people.age);
// console.log(people.friends);

// destructure ways to find this********

const { name, friends, isMarit, hight, age } = people;
console.log(age);

// same to find array
const names = ["sumon", "bolul", "joydeb", "chanchol", "ashis", "animash"];

// normal ways to find this*******

// console.log(names[1]);
// console.log(names[5]);
// console.log(names[0]);
// console.log(names[3]);
// console.log(names[2]);

// destructure ways to find this********
const [kaka, kakaF, myf, myfc] = names;
console.log(kaka);
console.log(myf);

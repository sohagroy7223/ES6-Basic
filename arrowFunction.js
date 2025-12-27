//normal function

function sum(num1, num2) {
  // console.log(arguments);
  return num1 + num2;
}
const results = sum(10, 30);
console.log(results);

// arrowFunction with return call**
// if arrow function is multi line
const multi = (p1, p2) => {
  return p1 * p2;
};
const output = multi(5, 7);
console.log(output);

// if function arrow is 1 line
const jog = (n1, n2) => n1 + n2;
console.log(jog(20, 10));

// without parameter arrow function***

const square = (x) => x * x;
console.log(square(10));

// empty parameter arrow function**

const test = () => console.log("hello world");
test();

// normal function addEventListener anonyms call**

document.getElementById("title").addEventListener("click", function () {
  console.log("hello");
});

// arrow function addEventListener anonyms call***
// single line arrow
document
  .getElementById("title")
  .addEventListener("click", () => console.log("hello man"));

//   multi line arrow

document.getElementById("title").addEventListener("click", () => {
  console.log("hello all person");
});

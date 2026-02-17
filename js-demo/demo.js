<h1>2+2</h1>
<h2 id="h2"></h2>
<script>
  document.getElementById("h2").innerHTML = 2 + 2;
  for (let i = 0; i < 5; i++) {
    console.log(i);
  }
</script>
/************************************
 * JavaScript Complete Concepts File
 * Covers Variables, Operators,
 * Conditional/Iterative Statements,
 * Objects, Arrays, Functions,
 * Hoisting, ES6 Features,
 * DOM Manipulation, Events,
 * and Timing Functions.
 ************************************/

// -------------------------------
// 1. VARIABLES
// -------------------------------

// Primitive Types
// Numeric Type
let age = 25; // Number
let byteValue = 255; // Bytes (0–255, used in colors, e.g., RGB)

// Non-Numeric Types
let name = "Alice"; // String
let isStudent = true; // Boolean
let emptyValue = null; // Null
let notAssigned; // Undefined
let uniqueId = Symbol("id"); // Symbol

// Real-life Example:
let productPrice = 499.99; // Number
let productName = "Laptop"; // String
let inStock = true; // Boolean

// Non-Primitive Types
let person = { name: "Bob", age: 30 }; // Object
let colors = ["red", "green", "blue"]; // Array
function greet() {
  console.log("Hello World!");
} // Function
let regex = /\d+/; // Regular Expression (matches numbers)

// -------------------------------
// 2. OPERATIONS
// -------------------------------

// Arithmetic
let x = 10,
  y = 3;
console.log(x + y, x - y, x * y, x / y, x % y);

// Comparison
console.log(x > y, x < y, x >= 10, x == "10"); // loose comparison

// String Operators
let fullName = "John" + " " + "Doe";
fullName += " Jr.";
console.log(fullName);

// Assignment
let score = 50;
score += 20; // score = 70

// Logical
console.log(true && false); // false
console.log(true || false); // true
console.log(!true); // false

// -------------------------------
// 3. CONDITIONAL STATEMENTS
// -------------------------------

let temperature = 30;

// if-else if-else
if (temperature > 35) {
  console.log("It's very hot!");
} else if (temperature > 20) {
  console.log("Weather is pleasant.");
} else {
  console.log("It's cold!");
}

// switch
let day = "Monday";
switch (day) {
  case "Monday":
    console.log("Start of work week.");
    break;
  case "Saturday":
    console.log("Weekend!");
    break;
  default:
    console.log("Regular day.");
    break;
}

// Ternary Operator
let canVote = age >= 18 ? "Yes" : "No";
console.log("Can vote?", canVote);

// -------------------------------
// 4. ITERATIVE STATEMENTS
// -------------------------------

// for loop
for (let i = 1; i <= 5; i++) {
  console.log("For loop count:", i);
}

// while loop
let count = 0;
while (count < 3) {
  console.log("While loop:", count);
  count++;
}

// do while loop
let num = 0;
do {
  console.log("Do while:", num);
  num++;
} while (num < 2);

// -------------------------------
// 5. OBJECTS
// -------------------------------
let car = { brand: "Tesla", model: "Model 3" };

// Dot notation
console.log(car.brand);

// Add & delete property
car.year = 2024;
delete car.model;

// Loop in object
for (let key in car) {
  console.log(key, ":", car[key]);
}

// -------------------------------
// 6. ARRAYS
// -------------------------------
let fruits = ["Apple", "Banana", "Mango"];

// Accessing & Modifying
console.log(fruits[1]);
fruits[2] = "Orange";

// Common operations
fruits.push("Grapes");
fruits.pop();
fruits.forEach((fruit) => console.log("Fruit:", fruit));

let upperCaseFruits = fruits.map((f) => f.toUpperCase());
let filteredFruits = fruits.filter((f) => f.startsWith("A"));

// -------------------------------
// 7. FUNCTIONS
// -------------------------------

// Function Expression
const add = function (a, b) {
  return a + b;
};

// Higher Order Function (takes function as argument)
function applyOperation(a, b, operation) {
  return operation(a, b);
}
console.log(applyOperation(5, 10, add));

// Arrow Function
const multiply = (a, b) => a * b;

// -------------------------------
// 8. HOISTING & TDZ
// -------------------------------

console.log(hoistedVar); // undefined (var is hoisted)
var hoistedVar = "I'm hoisted";

// Temporal Dead Zone
// console.log(notHoisted); // ❌ ReferenceError
let notHoisted = "TDZ example";

// -------------------------------
// 9. ES6 FEATURES
// -------------------------------

// let & const
let city = "Mumbai";
const country = "India";

// Rest & Spread
function sumAll(...numbers) {
  return numbers.reduce((a, b) => a + b, 0);
}
console.log(sumAll(1, 2, 3, 4));

let arr1 = [1, 2],
  arr2 = [3, 4];
let combined = [...arr1, ...arr2];

// Classes
class Animal {
  constructor(name) {
    this.name = name;
  }
  speak() {
    console.log(this.name + " makes a sound.");
  }
}
let dog = new Animal("Dog");
dog.speak();

// Map & Set
let myMap = new Map();
myMap.set("id", 101);
let mySet = new Set([1, 2, 2, 3]);

// -------------------------------
// 10. DOM MANIPULATION
// -------------------------------

// Assume we have HTML elements
// document.getElementById("title").innerText = "Hello";
// document.getElementsByClassName("item");
// document.getElementsByTagName("p");
// document.querySelector(".main");
// document.querySelectorAll("li");

// -------------------------------
// 11. EVENTS
// -------------------------------

// Example: Button click
// document.getElementById("btn").addEventListener("click", () => {
//   alert("Button clicked!");
// });

// -------------------------------
// 12. TIMING FUNCTIONS
// -------------------------------

setTimeout(() => {
  console.log("Executed after 2 seconds");
}, 2000);

let intervalId = setInterval(() => {
  console.log("Repeating every 1 second");
}, 1000);

setTimeout(() => clearInterval(intervalId), 5000); // stop after 5s

/************************************
 * END OF FILE
 ************************************/

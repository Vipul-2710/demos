function areaOfSquare(side) {
  let area = side * side;
  return area;
}

function areaOfCircle(radius) {
  let area = Math.PI * (radius * radius);
  return area;
}

function areaofReactangle(length, breadth) {
  let area = length * breadth;
  return area;
}
function calThree(a, b, c) {
  return a * b * c;
}

function calculateArea(shapeFunction, ...value) {
  console.log(value);
  return shapeFunction(...value);
}

console.log(calculateArea(areaOfCircle, 5))
console.log(calculateArea(areaofReactangle, 20, 10));
console.log(calculateArea(calThree, 45, 19, 2));

function greeting(...names){
    console.log(names);
    names.forEach((name)=>{
        console.log(`Good morning ${name}`);
    })
}

greeting("Vipul", "Gopal", "Karan", "Vivek")

// Pizza Menia

// Order a pizza
function receiveOrder() {
  console.log("order is received");
}
// Cook a pizza
// as soon as it's done it's job I want to call servePizza
function cookPizza(callback) {
  setTimeout(() => {
    console.log("pizza a ready"); //temp output
    callback();
 }, 3000);
}
// Serve a pizza
function servePizza() {
  console.log("pizza is served");
}

receiveOrder();
cookPizza(servePizza);
servePizza();

functiontask1() {
 console.log("Task 1 started");
 // Simulate a long-running task
 setTimeout(() => {
   console.log("Task 1 finished");
 }, 2000);
}

functiontask2() {
 console.log("Task 2 started");
 // Simulate another long-running task
 setTimeout(() => {
   console.log("Task 2 finished");
 }, 1000);
}

task1();
task2();

function loginUser(name, callback) {
  setTimeout(() => {
    let userName = name.toUpperCase();
    callback(userName);
  }, 2000);
}
function getProfile(userName, callback) {
  setTimeout(() => {
    let userProfile = { user: userName, age: 27 };
    callback(userProfile);
  }, 2000);
}
function greetUser(user) {
  console.log("Hello", user);
}
// Login => getProfile => greetUser
loginUser("Vipul", function (user) {
  getProfile(user, function (profile) {
    greetUser(profile);
  });
});

function checkEven(num) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (num % 2 === 0) {
        resolve(`${num} is even`);
      } else {
        reject(`${num} is odd`);
      }
    }, 2000);
  });
}
checkEven(5)
  .then((result) => console.log("Resolved", result))
  .catch((error) => console.log("rejected", error))
  .finally(() => {
    console.log("we know if num is even or odd");
  });

function loginUser(name) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let userName = name.toUpperCase();
      resolve(userName);
    }, 2000);
  });
}
function getProfile(userName) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let userProfile = { user: userName, age: 27 };
      resolve(userProfile);
    }, 2000);
  });
}
function greetUser(user) {
  console.log("Hello", user);
}
loginUser("Vipul")
  .then((result) => getProfile(result))
  .then((data) => greetUser(data));

async function runApp() {
  const user = await loginUser("Vipul");
  const profile = await getProfile(user);
  greetUser(profile);
}
runApp();

const API = "https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood"

async function getData(url) {
  const result = await fetch(url);
  const data = await result.json()
  console.log("result", result);
  console.log("data", data.meals);
  
}

getData(API);

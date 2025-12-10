// 1
function sayHello() {
    console.log("Hello");
}
sayHello();

// 2
function add(a, b) {
    return a + b;
}
let sum = add(2, 3);
console.log(sum);

// 3
function greeting(name = "M E E T") {
    // console.log("Hey " + name);
    console.log(`Hey ${name}`);
}
greeting("P A R T H");
greeting();

// 4
function adds(...arr) {
    let reduceAns = arr.reduce(function (accumulator, elem) {
        return elem + accumulator
    }, 0);

    return reduceAns;
}
let addSum = adds(1, 2, 3, 4, 5);
console.log(addSum);

// 5
(function iife() {
    console.log("I RUN INSTANTLY");
})();

// 6
function outer() {
    let a = 10;
    return function inner() {
        a++;
        console.log(a);
    }
}
outer()();

// 7
let fruits = ["apple", "orenge", "banana", "mengo", "resbary"];
fruits.push("blueBary");
fruits.shift();
console.log(fruits);

// 8
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

// 9
let person = {
    name: "M E E T",
    age: 20,
    city: "SURAT"
}
console.log(person);
console.log(person?.name);
console.log(person?.age);
console.log(person?.city);

// 10
setTimeout(function () {
    console.log("TIME'S UP!");
}, 2000);


// 11
function runTwice(fun) {
    fun();
    fun();
}
runTwice(function () {
    console.log("HOF");
})


// 12
let a = 12;
function pureFnc(x, y) {
    return [x, y];
}
function unPureFnc(b) {
    return a + b;
}
let pureAns = pureFnc(1, 2);
console.log(pureAns);

let unPureAns = unPureFnc(10);
console.log(unPureAns);

// 13
let objDS = {
    name: "M E E T",
    age: 20,
    message: "HEELO JI"
};
function objDs({ name, age } = obj) {
    console.log(name);
    console.log(age);
}
objDs(objDS);

// 14
function normalFnc() {
    // LOGIC
    console.log("NORMAL FUNCTION");
}
normalFnc();
let arrowFnc = () => { console.log("ARROW FUNCTION") };
arrowFnc();

// 15
let arr1 = [1, 2, 3, 4, 5];
let arr2 = arr1.map(function (elem, idx) {
    return elem * elem;
})
console.log(arr2);


// 16
arr2 = arr1.filter(function (elem, idx) {
    return (elem % 2 == 0);
})
console.log(arr2);

// 17
let arr3 = [1000, 2000, 3000];
let TotalSalary = arr3.reduce(function (elem, accumulator) {
    return elem + accumulator;
}, 0)
console.log(TotalSalary);

// 18
let user = {
    name: "Meet",
    age: 20
};
console.log("Original:", user);

let frozenUser = Object.freeze(user);
frozenUser.age = 25; //❌
frozenUser.city = "Surat";  //❌
delete frozenUser.name; //❌
console.log("After freeze:", frozenUser);


let sealedUser = {
    name: "Meet",
    age: 20
};
Object.seal(sealedUser);

sealedUser.age = 25; //✅
sealedUser.city = "Surat"; //❌
delete sealedUser.name; //❌
console.log("After seal:", sealedUser);


// 20
let users = {
    name: "Meet",
    age: 20,
    address: {
        city: "SURAT",
        pincode: 394910
    }
}
console.log(users?.name);
console.log(users?.address?.city);

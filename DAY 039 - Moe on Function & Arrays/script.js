// 1
function sayHello()
{
    console.log("Hello");
}
sayHello();

// 2
function add(a, b)
{
    return a + b;
}
let sum = add(2, 3);
console.log(sum);

// 3
function greeting(name = "M E E T")
{
    // console.log("Hey " + name);
    console.log(`Hey ${name}`);
}
greeting("P A R T H");
greeting();

// 4
function adds(...arr)
{
    let reduceAns = arr.reduce(function (accumulator, elem)
    {
        return elem + accumulator
    }, 0);

    return reduceAns;
}
let addSum = adds(1, 2, 3 ,4 ,5);
console.log(addSum);

// 5
(function iife()
{
    console.log("I RUN INSTANTLY");
})();

// 6
function outer()
{
    let a = 10;
    return function inner ()
    {
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
for(let i = 0; i < fruits.length; i++)
{
    console.log(fruits[i]);
    
}

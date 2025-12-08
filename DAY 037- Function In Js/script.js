// function abcd()
// {
//     // FUNCTION STATEMENT 
//     // FUNCTION EXPRESSION 
// }

// 1. REGULAR FUNCTION 
function abcd() {
    // LOGIC
}

// 2. ANONYMOUS FUNCTION 
const greet = function (name) {
    console.log("Hello, " + name);
}

// 3. FAT ARROW FUNCTION 
const hello = () => {
    console.log("Hello");
}

// 4. FAT ARROW FUNCTION WITH ONE PARAMENTER 
const num = (a) => {
    console.log(a);
}

// 5. IIEF 
(function printing() {
    console.log("HELLLO");
});


// 6. HOFS - Higher Order Function
// SUVH A FUNCTION THAT CAN ACCEPT THE FUNCTIONIN PARAMETER OR RETURN THE FUNCTION.
// EX:- 1
function hofs1() {
    return function () {
        console.log("HOF");
    }
}
hofs1()();
let ans = hofs1();
ans();

// EX:- 2
function hofs2(fn) {
    fn();
}
hofs2(function () {
    console.log("HOF");
})


// 7. CALL BACK FUNCTION 
// A FUNCTION PASSED AS AN ARGUMENT TO NOTHER FUNCTION WHICH IS THEN INVOKED INSIDE OUTER FUNCTION.
function callBackFnc(fn) {
    fn();
}
callBackFnc(function () {
    console.log("CALL BACK FUNCTION");
})


// 8. FIRST CALSS FUNCTION
// FUNCTION ARE TREATED AS VALUE
const sayHi = () => console.log("Hi!");
const run = sayHi;
run();


// 9. PURE FUNCTION
// A FUNCTION THAT DOSE NOT MODIFY EXTERNAL STATE. (GLOBAL VALUES)
function add(a, b)
{
    return a + b;
}

// 10. IMPURE FUNCTION
// A FUNCTION THAT DOSE MODIFY EXTERNAL STATE. (GLOBAL VALUES)
let total = 0;
function inPure (a)
{
    total = a;
}
inPure(10);
console.log(total);


// 11. COF - CLOSER 
// WHEN FUNCTION RETURN ONETHER FUNCTION AND RETURNED FUNCTION USE THEIR PARENT FNC'S DATA, MEMBERS
function closerFnc()
{
    var a = 12;
    console.log(a);
    
    return function ()
    {
        a = 20;
        console.log(a);
    }
}
var closer = closerFnc();
closer();


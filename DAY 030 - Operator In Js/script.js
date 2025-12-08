console.log(a);
var a = 10;
// The declaration `var a` is hoisted, but not the initialization.


console.log(b);
let b = 10;
// Variables declared with `let` and `const` are hoisted but not initialized — this leads to the Temporal Dead Zone (TDZ).


test()
function test() { 
    console.log("Hello");
};
// Function declarations are fully hoisted, meaning you cancall them before they are defined.

hello()
var hello = function () { 
    console.log("Hello");
};

// Spread
let arr = [1, 2, 3];
let copy = [...arr];
console.log(copy);

// Rest
function sum(...number)
{
    return number.reduce((a, b) => a + b);
}
console.log(sum(1, 2, 3));

let user = {
    profile: {
        name : "Meet"
    }
};
console.log(user?.profile?.name);
console.log(user?.address?.city);




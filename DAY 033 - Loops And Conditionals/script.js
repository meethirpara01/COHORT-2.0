// 1 
// let age = prompt("ENTER USER AGE: ");
// if (age > 18) {
//     console.log("YOU ARE ELIGIBLE TO VOTE");
// }
// else {
//     console.log("YOU ARE NOT ELIGIBLE TO VOTE");
// }

// 2 
// for(let i = 1; i <= 10; i++)
// {
//     console.log(`5 X ${i} = ${5 * i}`);  
// }

// 3
// let count = 0;
// for(let i = 1; i <= 15; i++)
// {
//     if (i > 8) {
//         count++;
//     } 
// }
// console.log(count);

// 4
// let password = prompt("ENTER USER PASSWORD: ");
// let passHardCoderd = "MEETH"
// if (password == passHardCoderd) {
//     console.log("PASSWORD IS CORRECT");
// }
// else {
//     console.log("WRONG PASSWORD");
// }

// 5
// let password = prompt("ENTER USER PASSWORD: ");
// let passHardCoderd = "MEETH"
// if (password != passHardCoderd) {
//     password = prompt("ENTER USER PASSWORD: ");
//     if (password == passHardCoderd) {
//         console.log("PASSWORD IS CORRECT");
//     }
//     else {
//         password = prompt("ENTER USER PASSWORD: ");
//         if (password == passHardCoderd) {
//             console.log("PASSWORD IS CORRECT");
//         }
//         else {
//             console.log("ACCOUNT IS LOCKED");
//         }
//     }
// }
// else {
//     console.log("PASSWORD IS CORRECT");
// }

// 6
// let word = prompt("ENTER USER WORD: ");
// let countword = 0;
// while (word !== "stop") {
//     if (word === "yes") {
//         countword++;
//     }
//     word = prompt("ENTER USER WORD: ")
// }
// console.log(countword);


// 7 
// for(let i = 1; i <= 50; i++)
// {
//     if (i % 7 == 0) {
//         console.log(i);
//     }
// }

// 8
// let oddSum = 0;
// for(let i = 1; i <= 30; i++)
// {
//     if (i % 2 != 0) {
//         oddSum += i;
//     }
// }
// console.log(oddSum);

// 9 
// let num = prompt("ENTER NUMBER: ");
// while (num % 2 == 0) {
//     console.log(num);
//     num = prompt("ENTER NUMBER: ");
// }

// 10
// let start = Number(prompt("Enter the start number: "));
// let end = Number(prompt("Enter the end number: "));

// for (let i = start; i <= end; i++) {
//     console.log(i);
// }

// 11
// let countFirstThreeOdd = 0;
// for(let i = 1; i <= 20; i++)
// {
//     if (countFirstThreeOdd < 3 && (i % 2 != 0)) {
//         console.log(i);
//         countFirstThreeOdd++; 
//         break;
//     }
// }

// 12
// let positivecount = 0;
// for(let i = 0; i < 5; i++)
// {
//     let num = Number(prompt("Enter the number: "));
//     if (num > 0) {
//         positivecount++;
//     }
// }
// console.log(positivecount);


// 13
let balance = 1000;
for (let i = 0; i < 3; i++) {
    let askWithdrawal = +prompt("ENTER AMOUNT TO WITHDRAWAL: ");
    if (askWithdrawal > balance) {
        console.log("Insufficient balance!!");
        break;
    }
    else {
        balance -= askWithdrawal;
        console.log("CURRENT BALANCE AFTER WITHDRAWAL IS:" + balance);
    }
}
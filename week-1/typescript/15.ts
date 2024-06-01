/**
 * Write a function for loop that iterates from 1 to a given number. It then checks and outputs whether the number is even or odd.
 * @param {number} n The number to check.
 */

function IterateNumber (n : number) {
    for (let i = 1; i <= n; i++) { 
        console.log(i + " : " + ((i % 2 == 0)? "Even" : "Odd"));
    }
}

IterateNumber(10);
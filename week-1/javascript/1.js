/**
 * Write a function to check if a number is even or odd.
 * @param {number} num The number to check.
 * @return {boolean} True if the number is even, false if it is odd.
 */

function CheckOddEven(number){
    if(number % 2 == 0){
        return true;
    }else{
        return false;
    }
}

console.log(CheckOddEven(2));

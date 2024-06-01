/**
 * Write a function to calculate the sum of all numbers in an array.
 * @param {number[]} arr The array of numbers.
 * @return {number} The sum of all numbers in the array.
 */

var arr: number[] = [1,2,3,4];

function getSum(a : number,b : number,c : number,d: number) : number{
    let sum = 0;
    return a + b + c + d;
}

console.log(getSum(arr[0], arr[1], arr[2], arr[3]));
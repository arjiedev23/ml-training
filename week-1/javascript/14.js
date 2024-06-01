/**
 * Write a function that accepts an array of numbers and displays the highest and lowest numbers in the array.
 * @param {number[]} arr The array of numbers.
 * @return {string} The highest and lowest numbers in the array.
 *
 * Example array: [5, 2, 8, 1, 9, 3]
 * Expected output: "The lowest number is 1 and the highest number is 9."
 */
let number = [5, 2, 8, 1, 9, 3];

function LowestHighest(arr) {
    const high = Math.max(...arr);
    const low = Math.min(...arr);

    return `The lowest number is ${low} and the highest number is ${high}`;
}

console.log(LowestHighest(number));
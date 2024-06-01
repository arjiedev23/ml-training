/**
 * Write a function that takes an array of numbers and throws a custom 'Error' if the array is empty.
 * @param {number[]} arr The array to check.
 * @throws {Error} If the array is empty.
 */

var number = [];
function checkArr(arr){
    try {
        if (arr.length === 0) {
            throw new Error("Array is empty");
        } else {
            return "Array is not empty";
        }
    } catch (ex) {
        return ex.message;
    }
}

console.log(checkArr(number));
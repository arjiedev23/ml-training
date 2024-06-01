/**
 * Write a function that takes an array of numbers and throws a custom 'Error' if the array is empty.
 * @param {number[]} arr The array to check.
 * @throws {Error} If the array is empty.
 */

var number : string[] = [];
function checkArray(arr : any){
    try {
        if (arr.length === 0) {
            throw new Error("Array is empty");
        } else {
            return "Array is not empty";
        }
    } catch (ex: any) {
        return ex.message;
    }
}

console.log(checkArray(number));
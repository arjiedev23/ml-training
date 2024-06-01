/**
 * Write a function that takes a number as a parameter and throws a custom 'Error' if the number is not an integer.
 * @param {number} num The number to check.
 * @throws {Error} If the number is not an integer.
 */

function checkNumber(num : any) : string {
    try {
        if(typeof num !== "number"){
            throw new Error(`${num} is not an integer.`);
        } else {
            return `${num} is an integer.`
        }
    } catch(ex : any) {
        return ex.message;
    }
}

console.log(checkNumber(9));
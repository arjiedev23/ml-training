/**
 * Write a function that takes a number as a parameter and throws a custom 'Error' if the number is less than 0
 * @param {number} num The number to check.
 * @throws {Error} If the number is not a positive integer.
 */

function CheckNumber(num : string){
    try {
        if (typeof num != "number") {
            throw new Error(`${num} is not an number.`);
        } else {
            if(num < 0){
                throw new Error(`${num} is not an positive.`);
            } else if (num === 0) {
                return `${num} is neither positive nor negative.`
            } else {
                return `${num} is an positive.`
            }   
        }
    } catch(ex: any) {
        return ex.message;
    }
}

console.log(CheckNumber("1"));
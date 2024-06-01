/**
 * Write a function that accepts 2 numbers as parameters and throws a custom 'Error' if the second number is 0
 * @param {number} num1 The first number to check.
 * @param {number} num2 The second number to check.
 * @throws {Error} If the second number is 0.
 */

function activity(num1, num2){
    try {
        if (num2 === 0) {
            throw new Error("Num2 is 0");
        }
    } catch (err) {
        return err.message;
    }
}

console.log(activity(1,1));
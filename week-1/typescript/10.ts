/**
 * Write a function that accepts 2 numbers as parameters and throws a custom 'Error' if the second number is 0
 * @param {number} num1 The first number to check.
 * @param {number} num2 The second number to check.
 * @throws {Error} If the second number is 0.
 */

function activity10(num1 : number, num2 : number){
    try {
        if (num2 === 0) {
            throw new Error("Num2 is 0");
        } else {
            return "Num2 is not 0";
        }
    } catch (err : any) {
        return err.message;
    }
}

console.log(activity10(1,1));
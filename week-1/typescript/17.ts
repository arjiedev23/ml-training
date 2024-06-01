/**
 * Write a function that takes a password input and validates it based on the following rules:
 * - The password must be at least 8 characters long.
 * - The password must contain at least one uppercase letter.
 * - The password must contain at least one lowercase letter.
 * - The password must contain at least one number.
 * - The password must contain at least one special character.
 *
 * It must return a message whether the password is valid or not.
 *
 * Example:
 * - if less than 8 characters, return "Password must be at least 8 characters long"
 * - if no uppercase letter, return "Password must contain at least one uppercase letter"
 * - if no lowercase letter, return "Password must contain at least one lowercase letter"
 * - if no number, return "Password must contain at least one number"
 * - if no special character, return "Password must contain at least one special character"
 * - if all rules are met, return "Password is valid"
 *
 * @param {string} password
 * @returns {string}
 */

function HasUpperCase(str : string) {
    return str !== str.toLowerCase();
}

function HasLowerCase(str: string) {
    return str.toUpperCase() != str;
}

function ValidatePass (password : string) {
    const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    const numberChars = /\d/;
    if (password.length <= 8) {
        return "Password must be at least 8 characters long";
    } else if (!HasUpperCase(password)) {
        return "Password must contain at least one uppercase letter";
    } else if (!HasLowerCase(password)) {
        return "Password must contain at least one lowercase letter";
    } else if (!numberChars.test(password)) {
        return "Password must contain at least one number";
    } else if (!specialChars.test(password)) {
        return "Password must contain at least one special character";
    } else {
        return "Password is valid";
    }
}

console.log(ValidatePass("sssssS123@"));
/**
 * Write a function that returns all vowels in a string.
 * @param {string} str The string to check.
 * @return {string} The string with all vowels.
 */

function checkVowel(str) {
    let result = str.match(/[aeiou]/ig).join("");
    return result;
}

console.log(checkVowel("Arjie"));
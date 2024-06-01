/**
 * Write a function that accepts a string as input and swaps the case of each character in the string.
 *
 * Example:
 * - swapCase("Hello World") should return "hELLO wORLD"
 *
 * @param {string} str
 * @returns {string}
 */

function swapCase (str) {
    var res = str.split('').map(function (r) {
        return r === r.toUpperCase()? r.toLowerCase() : r.toUpperCase()
    }).join('')

    return res;
}

console.log(swapCase("Hello World"));
/**
 * Write a function that accepts a string and converts the first letter of each word to uppercase.
 * @param {string} str The string to convert.
 * @return {string} The string with the first letter converted to uppercase.
 *
 * Example string: "The quick brown fox jumps over the lazy dog"
 * Expected output: "The Quick Brown Fox Jumps Over The Lazy Dog"
 */

let sentence = "The quick brown fox jumps over the lazy dog";

function ConvertFirst (str) {
    var arrStr = str.toLowerCase().split(' ');
    for (var i = 0; i < arrStr.length; i++) {
        arrStr[i] = arrStr[i].charAt(0).toUpperCase() + arrStr[i].substring(1);
    }
    return arrStr.join(' ');
}

console.log(ConvertFirst(sentence));
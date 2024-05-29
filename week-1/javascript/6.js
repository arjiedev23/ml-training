/**
 * Write a function that converts Fahrenheit to Celsius.
 * Expected output: 140°F = 60°C.
 * @param {number} fahrenheit The temperature in Fahrenheit.
 * @return {number} The temperature in Celsius.
 */

function FahrenheitCelsiusConvert(fahrenheit){
    var convert = (fahrenheit - 32) * 5 / 9;
    return `${fahrenheit}°F = ${convert}°C`;
}

console.log(FahrenheitCelsiusConvert(140));
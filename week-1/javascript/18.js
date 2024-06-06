/**
 * Create a shopping cart that allows the user to add items to the cart and remove items from the cart. An item is a javascript object with the following properties:
 * - name: the name of the item
 * - price: the price of the item
 *
 * The shopping cart should be able to store up to 10 items.
 * The shopping cart should be able to display the total price of the items in the cart.
 * The shopping cart should be able to display the total number of items in the cart.
 *
 * Example:
 * - add item "apple" to cart
 * - remove item "apple" from cart
 * - display total price of items in cart
 * - display total number of items in cart
 *
 * @param {string[]} items
 * @returns {string}
 */

const { log } = require('console');
const { resolve } = require('path');


const readLine = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

const Item = [
    { item: "Apple", price: 10, Quantity: 20 },
    { item: "Orange", price: 15, Quantity: 20 }
  ];

var shoppingCart = new Array();

// let element = {name: 'Edy', age: 27, country: "Brazil"};
// let element2 = {name: 'Marcus', age: 27, country: "Brazil"};

// shoppingCart.push(element);
// shoppingCart.push(element2);


// shoppingCart[0].name = "bobo";
// console.log(shoppingCart);

// function SelectItem(){

// }

readLine.question('Select Option: ', option => {
    let orders = 0;
    console.log("1. Add Item");
    console.log("2. Remove Item");
    console.log("3. Check shopping cart");
    console.log("0. Exit");
    console.log(typeof option);
    switch (option) {
        case "1":
            readLine.question('Select Item: ', item => {
            
            });

            readLine.question('Qty: ', qty => {
                
            });

            readLine.question('Price: ', price => {
                
            });

            const AddItem = async () => {
                
            }
            break;
        case "2": 
            break;
        case "3":
            break;
        case "0":
            readLine.close();
            break;
    }
});

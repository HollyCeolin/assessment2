///////////////////////////////////////////////
///////////////////CART.JS/////////////////////
///////////////////////////////////////////////
/*
    In this file, you'll be writing code to
    calculate order totals. You'll also be 
    creating customer objects.  
*/


//////////////////PROBLEM 1////////////////////
/*  
    Below is a cart array that has food objects
    inside. 

    Write a callback below that uses the reduce
    array method to calculate the sum of all
    the food. 
*/

const cart = [
    {
        name: 'pizza', 
        price: 9.99
    }, 
    {
        name: 'pasta', 
        price: 8.99
    }, 
    {
        name: 'salad', 
        price: 7.99
    }
]
//console.log(cart[1])
//const callback = (acc, currVal, index) => {

//};

const sum = cart.reduce((accumulator, current) => {
    return accumulator + current;
});

console.log(`Sum of all food is ${sum}`);

//////////////////PROBLEM 2////////////////////
/*  
    Write a function called `calcFinalPrice` that
    can take in `cartTotal`,`couponValue`,
    and `tax` arguments. 

    Inside the function, calculate the tax 
    on the cartTotal and add it in. Subtract
    the value of the coupon. Return the final
    number. 

    Note: the numbers passed in for `tax` will be
    decimals, for example: .06 for a 6% tax.
*/

//CODE HERE



//////////////////PROBLEM 3////////////////////
/*  
    In this problem, you'll create a model for 
    a customer object as well as an example
    object. 

    Plan out a customer object for the cart page.
    Think about the information that a 
    restaurant would need about its customers.

    In the TEXT ANSWER area below, describe the
    properties that your customer object will have
    and why you chose those properties.

    Explain what data types each property should be
    and why you chose those data types. 

    Your object should have at least 4 properties. 
*/

/*
    customer object

    Properties      Data Type
    Name            Array(add multiple names)  The restaurant needs to know the name for the order.
    Phone Number    Num(entered as only numbers)     They need to be able to call the customet with any questions about their order.
    Address         String (entered as a string) They need the address if they offer delivery.
    Email           String (entered as a string) They will want their email to keep in contact with the customer about any specials or events coming up at the restaurant.

*/

/*
    Now, create a customer object following your own
    guidelines.
*/

const customer = [
{ 
    name: 'Sebastian Ceolin',
    phone: 8433687519,
    address: '2708 W Franklin St. Evansville, IN 47712',
    email: 'hollyceolin@gmail.com' 
},
    
]
console.log(customer)

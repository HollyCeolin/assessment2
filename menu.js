///////////////////////////////////////////////
///////////////////MENU.JS/////////////////////
///////////////////////////////////////////////
/*
    In this file, you'll be writing code that
    deals with food objects, arrays of objects
    and filtering those arrays. 
*/


//////////////////PROBLEM 1////////////////////
/*  
    Create an object called `pizza` that has 6
    properties: 
        - name (string)
        - price (number)
        - category (string)
        - popularity (number)
        - rating (number)
        - tags (array of strings)

    Make sure that you give your properties values
    of the correct data type.

    Note: the category is something like appetizer/entree,
    the popularity is an overall ranking, the
    rating is an average of all customer ratings, and
    for the tags, think of things that a
    user might filter by, like 'gluten-free' or
    'kids'
*/

const pizza = [

{   name: 'Hawaiian', 
    price: 9.99,
    category: 'pizza',
    popularity: 5,
    rating: 5.5,
    tags: ['cheesy', 'pineapple', 'ham']    
}
]



//////////////////PROBLEM 2////////////////////
/* 
    Let's print a few values from our pizza object.

    First, log the popularity of pizza. 
    Use dot notation to access the value.
*/

console.log(pizza[0].popularity)


/*
    Second, log the second tag in your pizza's
    tags array.
    Use a combination of dots and brackets to
    get the value.
*/

console.log(pizza[0].tags[1])


/*
    Third, destructure the price off of the
    pizza object.
    
    Print the value of your new price variable.
*/

pizza[0].price = 10.99
console.log(pizza[0].price)
//deals[1].desc = deals[1].desc.replace('March', 'April').trim()
//console.log(deals[1])

/*
    Fourth, and last, destructure the category
    property.

    Print the value of your category variable. 
*/

const [name, price, category, popularity, rating, tags] = pizza
console.log(pizza)


//////////////////PROBLEM 3////////////////////
/* 
    Create an array with about 5 objects in it.
    The objects should mimic the `pizza` object.
    Call the array `foodArr`.

    Make sure that they have slightly different
    values for price, popularity, rating, and
    tags. That way, you'll be able to use this
    data in some functions that you'll write.
*/

/*let foodArr = [
    {
        name (string)
        - price (number)
        - category (string)
        - popularity (number)
        - rating (number)
        - tags (array of strings)  
    }
]*/

const foodArr = [
    {
        name: 'Hawaiian', 
        price: 9.99,
        category: 'pizza',
        popularity: 5,
        rating: 5.5,
        tags: ['cheesy', 'pineapple', 'ham']
    }, 
    {
        name: 'Buffalo', 
        price: 11.99,
        category: 'pizza',
        popularity: 8,
        rating: 8.6,
        tags: ['hot sauce', 'chicken']
    }, 
    {
        name: 'Manicotti', 
        price: 8.99,
        category: 'pasta',
        popularity: 9,
        rating: 9.8,
        tags: ['cheesy', 'ricotta', 'sausage']
    },

    {
        name: 'Lover of Meats', 
        price: 14.99,
        category: 'pizza',
        popularity: 7.5,
        rating: 7,
        tags: ['sausage', 'bacon', 'beef']
    },

    {
        name: 'Meatball', 
        price: 10.99,
        category: 'pizza',
        popularity: 10,
        rating: 9.5,
        tags: ['cheesy', 'meatball', 'ricotta']
    }
]



//////////////////PROBLEM 4////////////////////
/* 
    Let's filter the food objects according
    to their tags.

    Write a callback function below that will
    return only food objects that have a certain tag.

    You can check for any tag that at least 1 of
    your food objects has.
*/


 const filteredFood = foodArr.filter(([property,value]) => typeof value ==='string'
 );
 const justStrngs = Object.fromEntries(filteredFood)
 let filteredArray = [];
 if (value = '') {
    filteredArray = foodArr.filter( (pizza_obj) => pizza_obj[property])
 console.log(filteredFood(tags, 'pineapple'))


//////////////////PROBLEM 5////////////////////
/* 
    Now let's write a function that's a little
    more flexible than just filtering for one
    value. We want to be able to filter for 
    food that has above a certain rating, 
    below a certain price, or any other combo.

    Write a function called `filterByProperty`
    that takes in three arguments: `property`, 
    `number`, and `type. 

    The property will be a string (rating,
    popularity, or price)

    The number will be the number that you want
    to compare against 

    The type should be 'above' or 'below' to 
    indicate whether you want to get foods with
    values that are above or below the given number
    for the given property

    Inside the function, create a variable to hold
    a filtered array

    Use the filter method to filter the foodArr

        In the callback, check if the `type` is `above`, 
        if it is, return objects whose value for the given
        property is greater than the `number` passed in

        If the type isn't `below`, return objects whose
        value for the given property is less than the 
        `number` passed in
    
    Return the filtered array from the entire function
*/

const filterByProperty = (property, number, type) => {
    let filteredArray = [];
  
    if (type === "above") {
        filteredArray = foodArr.filter( (pizza_obj) => pizza_obj[property] > number) //foodArr[property] > number
        
    } else {
        
        filteredArray = foodArr.filter( (pizza_obj) => pizza_obj[property] < number) 
    }
    return filteredArray;
}
console.log(filterByProperty("popularity", 9, "above"))}
// Workspace to test code in browser

/****************************************************************************************************/

//Excercise 1
// Create a Function called 'Sum' that takes a varying number of arguments and returns their sum.
// Challenge: Modify the sum function to be able to accept an Array as an argument and produce the same results
//Need to detect if the argument passes is an array using Array.isArray(), returns true or false


/* function sum(array) {
    total = 0;
    if (isArray(array)) 
        total = sum(...array);
    return total;
        
}

console.log(sum([1, 2, 3, 4])); */

function sum(...numbers) { //rest operator allows us to have multiple arguments but returns the arguments as an array.
    if (numbers.length === 1 && Array.isArray(numbers[0]))
        numbers = [...numbers[0]] //reset 'numbers' to an empty array and then use the 'spread operator(...)' to spread numbers[0], which is another array created by the 'rest' operator.
    
    return numbers.reduce((previous, current) => previous + current); //.reduce() method allows us to add all the values in our array 
}

console.log(sum([1, 2, 3, 4]));

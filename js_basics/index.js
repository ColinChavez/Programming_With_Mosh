// Workspace to test code in browser

/****************************************************************************************************/
//REDUCING AN ARRAY

//Calculate the sum of all numbers in the array
//Similar to calculating the sum of all the items in a shopping cart.

const numbers = [1, -1, 2, 3];

/* let sum = 0;
for (let n of numbers) //loop over the array
    sum += n; //add each number to sum and store it in sum. */

    
    //Cleaner way to write this code
    //REDUCE METHOD - reduce all the elements in an array into a single value.
    //Reduce Method- takes a callback function with two paramaters for the first argument
    //accumulator is initialized to store the value like 'sum' was in the previous example.
    //The callback function is executed multiple times. Each time this 'currentValue' will be set to one element.
    //In each call we want to get the currentValue and add it to accumulator.
    //To initialize accumulator to 0 we add 0 as a second argument to the 'reduce method'
    
    //Below is an example of what happens during each call of the callback function to produce the result.
    //First Call: a = 0, c = 1 => a = 1
    //2nd: a = 1, c = -1 => a = 0
    //3rd: a = 0, c = 2 => a = 2
    //4th: a = 2, c = 3 => a = 5
/*     const sum = numbers.reduce((accumulator, currentValue) => {
        return accumulator + currentValue;
    }, 0);
    
    console.log(sum); */

    //We can also make this code shorter by excluding the initialization of the accumulator
    //Accumulator will automatically be set to the first element.
    //First Call: a = 1, c = -1 => a = 0
    //2nd: a = 0, c = 2 => a = 2
    //3rd: a = 2, c = 3 => a = 5
    //We can also remove the return keyword and the curly braces. because we have a single line and we
    //are simply returning a value.
    const sum = numbers.reduce(
        (accumulator, currentValue) => accumulator + currentValue
    );
    
    console.log(sum);
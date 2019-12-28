// Declare Varibale
let name = 'Mosh'; //proper way in ES6
//console.log(name);
// by default variables are undefined
//Rules for naming variables-
// Cannot be a reserved keyword.
// Should be meaniingul
// Cannot start with a number
// Cannot contain a space or hyphen
// Case - Sensitive

let firstName = 'Mosh'; //camel notation, first letter is always lowercased
let lastName = 'Hamedani';

// Constants
// Value of a constant cannot change.
const interestRate = 0.3;
interestRate = 1;
//console.log(interestRate); //There is an error when we log this

//Primitive Tpes - Title

/* Primitives/Value Types:
String, Number, Boolean, Undefined, Null */

let name = 'Mosh'; //String Literal
let age = 30; //Number Literal
let isApproved = true; //Boolean Literal
let firstName = undefined; // Not very common
let lastName = null; // use null to explicitly clear the value of a variable

// Dynamic Typing

/* javascript is a dynamic language 
Static(Statically-Typed)- When we declare a variable the type of the variable is set
and it cannot be changed.
Dynamic(Dynamically-typed)- The type of a variable can change at runtime */
//Use typeof operator to check variable value in console
// Number Type - Javascript only has one type of number. It does not have floating point numbers and integers.
// Null- The variable type for a null value is an object

// OBJECTS - REFERENCE TYPES
// Objects, arrays, functions

let name = 'Colin'
let age = 30;
//rather than writing two variable we can declare an object to make code cleaner
let person = {
    name: 'Colin',
    age: 30
}; //Defined as an 'Object Literal'
// Object is created with a Key-Value Pair

// DOT NOTATION - can be used to redefine a property within an object
person.name = 'John'; //redefines the 'person' property within the object
//dot notation can be used to read the value of a property
//console.log(person.name); will display the name property

//BRACKET NOTATION - a different approace to access/change an objects property
person['name'] = 'Mary';// use square brackets and pass in a string

let selection = 'name'
person['selection'] = 'Mary';
/* Bracket Notation is useful to use when the value of the variable is not determined
until runtime. For Ex. The user may be asked to input value at runtime and that will
define the variable.*/

// ARRAYS - A Data structure used to represent a list of items -used to store lists

let selectedColors = ['red', 'blue']; //square brackets are an Array Literal and indicate an empty array
console.log(selectedColors);

//Call the index to display the first element in the array
console.log(selectedColors[0]);

//arrays are dynamic, their values can change at runtime
let selectedColors = ['red', 'blue'];
selectedColors[2] = 'green'; //adds a 3rd color to the array.
selectedColors[3] = 1; //We can store different types in a javascript array
console.log(selectedColors);

//An ARRAY is an OBJECT so its properties can be accessed with key-value pairs.
console.log(selectedColors.length)
// length property returns the number of items or elements in an array.

// FUNCTION -set of statements that performs a task or calculates a value.
//This function performs a task
function greet(name, lastName) {
    console.log('Hello World' + name + ' ' + lastName);
} 
/*The space inside the curly brackets is called the 'body' this is where we add
all the statements to define some kind of logic in our application*/
/*We don't have to add a function at at the last curly bracket because
we are not declaring it like a variable*/
//Name variable is called a Parameter
//Functions can have multiple paramaters seperated by a comma

greet('John'); //Call the function by declariing it as a statement
//When we call the 'Greet' function we need to pass a value for the name paramater
//String 'John' is referred to as an ARGUMENT
greet('John', 'Smith') //first and last name
//Paramater- Paramater is the variable added at the time of declaration
//Argument - Argument is the actual value supplied for that paramater.

//TYPES OF FUNCTIONS

//Calculating a Value
function square(number) {
    return number * number;
}

let number = square(2); //square(2) returns a value so we can use that value to initialize another variable
console.log(number);

//Instead of initializing another variable we can call a function within a function
console.log(squre(2));
//console.log() is calling the 'log' function. An argument such as a string or an expression can be passed in as a value


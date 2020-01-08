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

//OPERATORS
/* Operators and variables are used to create expressions that are used
to implement logic and algorithms*/

// Arithmatic
let x = 10;
let y = 3;
// % is remainder of devision
// ** is an exponent 
/*
console.log(x+y);
console.log(x-y);
console.log(x*y);
console.log(x/y);
console.log(x%y);
console.log(x**y);

Increment (++) depending on where we put the plus signs this
operator will behave differently.
console.log(++x); if you put the ++ before x it will be incremented
first and the the output will be printed. Output: 11
in contrast, if you put the operator after x, the value will be
printed and then incremented afterward. Output: 10 */

//Decrement (--) behaves the same way as (++)

// Assignment
let x = 10; 
x++; //this code
x = x + 1;// is equivalent to this code.

x = x + 5;
x += 5; //Addition assignment operator 

x = x * 3;
x *= 3; 

// Comparison
let x = 1;
console.log(x > 0);
// the result of a comparison operator is a boolean value true or false
console.log(x >= 0);
console.log(x < 0);
console.log(x <= 0);
//These four operators are called relational operators.

//Equality
console.log(x === 1); //equal to 
console.log(x !== 1); // not equal to

// Strict Equality(same Type + same Value)
console.log(1 === 1);
/* Strict Equality operator ensures that both of these values
have the same type and value 
The values above are both numbers and are both 1 so the output 
would be true*/
console.log('1' === 1);
//This comparison would evaluate to false because they are different types.

// Loose Equality (converts types to match and evaluates based on values)
console.log(1 == 1); //evaluates to true
console.log('1' == 1); //evaluates to true
// Converts to true because the value on the right will be converted
// to match the value on the left

// Ternary (Conditional Operator)
// If a customer has more than 100 points
// They are a 'gold' customer, otherwise
// they are a 'silver' customer.
let points = 110;
let type = points > 100 ? 'gold' : 'silver';
//result of this expression is true or fals, boolean
// if condition evalutes to true we use the first value
// if false we use the second value.


// Logical AND (&&)
// Returns True if both operands are TRUE
// If either operand is false then Returns FALSE

let highIncome = true;
let goodCreditScore = true;
let eligibleForLoan = highIncome && goodCreditScore;

console.log(eligibleForLoan);
//OUTPUT: TRUE 

//Logical OR (||)
//Returns TRUE if one of the operands is true.

let highIncome = true;
let goodCreditScore = true;
let eligibleForLoan = highIncome || goodCreditScore;

console.log(eligibleForLoan);
//OUTPUT: TRUE 

// NOT (!)
let applicationRefused = !eligibleForLoan;
// NOT operator converts value to opposite boolean value.


// Bitwise

//LOGICAL OPERATORS WITH NON-BOOLEANS

/* 
false || true
output: true
false || 'Colin'
output: "Colin"
false || 1
output: 1
false || 1 || 2
output: 1 // OR operator outputs the first value in the expression
that is true or truthy.
*/

//SHORT-CIRCUITING
// As soon as we find an operand that is truthy the evaluation stops

//Falsy (false)
//undefined
//null
//0
//false
//''
//NaN (not a number)

//Anything that is not Falsy is Truthy

let userColor = 'red';
let defaultColor = 'blue';
let currentColor = userColor || defaultColor;

//The power of using the logical OR operator with non booleans
//allows you to set a default value.

//BITWISE

/* We humans use the decimal system to represent numbers but
in computers these numbers are stored in the binary format which
is a combination of 0's and 1's. */

//1 = 00000001
/* The number 1 is represented as 7 0's and a 1 in the decimal system
so we have 8 digits. Each digit is called a 'Bit', Eight 'Bits' is
one 'Byte' of information */
//lookup mathemtics that converts decimals to binary system.
//2 = 00000010
//Result = 00000011, if you convert the result of this binary number
//to a decimal it would be 3.

console.log(1 | 2); //Bitwise OR
//1 = 00000001
//2 = 00000010
//Result = 00000011 = 3
/*The result 3 because the bitwise OR operator taskes the first 6
bits and adds it to the result, it then adds the 1 value of each
decimal to the result. For Ex. 00000011*/

console.log(1 & 2); //Bitwise AND
//1 = 00000001
//2 = 00000010
//Result = 00000000 = 0
/* If both numbers compared at each position is 1 then 1 will be
returned, otherwise 0 will be returned.*/

//Real World Example
/* Imagine you want to implement an access control system, so the 
user can have read, write, and execute permissions. We can use 1
byte of information '8 bits" to determine the kind of permission
a user can have*/

//Read, Write, Execute
// 00000100 = read only
// 00000110 = read and write permission
// 00000111 = all permissions

const readPermission = 4;
const writePermission = 2;
const executePermission = 1;
let myPermission = 0;
myPermmission = myPermission | readPermission | writePermission
// use the bitwise OR (|) operator to add permissions, indicated above
let message = (myPermission & readPermission) ? 'yes': 'no';
// Use ternary operator and bitwise AND operator to verify 
//that you have access to permisson

//TAKEAWAY
//Bitwise OR operator we can add permissions
//Bitwise AND operator we can check to see if we have a given 
//permission

// OPERATOR PRECEDENCE
let x = 2 + 3 * 4;
//PEMDAS
let x = (2+3) * 4;


// SWAPPING VARIABLES

let a = 'red'
let b = 'blue'

let c = a; 
a = b;
b = c;
//this effecivley swaps the value of a and b.

//***CONDITIONAL STATEMENTS***//
/*
if (condition) {
    statement
}
else if (anotherCondition) {
    statement
}
else if (yetAnotherCondition)
    statement
else
    statement
*/
//Hour
//If hour is between 6am and 12pm: Good Morning!
//If it is between 12pm and 6pm: Good Afternoon!
//Otherwise: Good evening!
//Use Military Time
let hour = 10;

if (hour >= 6 && hour < 12) 
    console.log('Good Morning!');
else if (hour >= 12 && hour < 18) 
    console.log('Good Afternoon!');
else
    console.log('Good Evening!');

//SWITCH AND CASE//

let role; 

switch(role){
    case 'guest':
        console.log('Guest User');
        break;

    case 'moderator':
        console.log('Moderator User');
        break;

    default: 
        console.log('Unknown User');
}
//OUTPUT: Guest User
/* The outpus was 'guest user' because we have not initialized
the 'role' variable, therefore its value is undefined.
*/

/*TAKEAWAY: SWITCH and CASE can be used to compare the value of
a variable against a bunch of other values. If I were comparing
TRUE or FALSE it would be more logical to use IF ELSE*/

if (rolse === 'guest' && hour > 12) console.log('Guest');
else if (role === 'moderator') console.log('Moderator');
else console.log('Unknown User');

//Mosh personally beleives switch and case are outdated.

//***LOOPS***//

//FOR 
for (let i = 0; i < 5; i++) //i is short for index and is the common loop variable
    console.log('Hello World');

// for (initialExpression; condition; incrementExpression)


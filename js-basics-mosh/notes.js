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

if (role === 'guest' && hour > 12) console.log('Guest');
else if (role === 'moderator') console.log('Moderator');
else console.log('Unknown User');

//Mosh personally beleives switch and case are outdated.

//***LOOPS***//

//FOR 
for (let i = 0; i < 5; i++) //i is short for index and is the common loop variable
    console.log('Hello World');

// for (initialExpression; condition; incrementExpression)

for (let i = 1; i <= 5; i++) {
    if (i % 2 !== 0) console.log(i); // if the remainder of the division of i by 2 is not equal to 0
}// that means that i is an odd number

//output: 1,3,5

//WHILE
// in for loops, the loop variable is part of the loop itself
// in While loops, the loop variable is outside the loop. We have to declare it externally.

let i = 0;
while (i <= 5) {
    if (i % 2 !== 0) console.log(i);
    i++;
}
// initialize variable
//while(condition){statement}

//DO WHILE
let i = 0;
do{
    if (i % 2 !== 0) console.log(i);
    i++;
} while (i <= 5);

//Difference between while and do while - do while is executed at least once even if condition is FALSE

//INFINITE LOOPS
let i = 0;
while (i < 5) {
console.log(i);
//i++; runs forever because condition is not changed
}

while (true){
}

let x = 0;
do{
}while (x < 5);

for (i = 0; i < 10; );

//FORIN LOOP - used to iterate over the properties of an object
//We use these loops to iterate over the properties of an object or elements in an array.

const person = {
    name: 'Mosh',
    age: 30
}; 

for (let key in person)
    console.log(key, person[key]);
// the key variable in the loop will hold one of the properties in this person object

//used to display the property of each key, 
// dot notation
person.name

//bracket notation
person['name']
// we use the bracket notation when we don't know ahead of time, at the time of writing code,
//what property we're going to access, perhaps the name of the target property is calculated at runtime

//when we iterate over the properties of the person object, in each iteration the value of key is going
// to be different

//That's why in this example we use bracket notations person[key] and pass "key" as the name of the 
//target property

const colors = ['red', 'green', 'blue']; //Define an array called colors

for (let index in colors) 
    console.log(index, colors[index]);
//named the loop variable index because in each iteration, this index variable will be set to the index
//of one of the elements in this array [0,1,2];
// if you want to get the element of the given index we use the square bracket notation

//ES6 new loop
//FOR OF - used to iterate over the elements or items in an array.
for (let color of colors) 
    console.log(color);
//with this new for loop we do not have to deal with index, we don't have to access this element
// at the given index. So in each iteration 'color' will hold one fo the items in this array

//BREAK AND CONTINUE
let i = 0;
while (i <= 10) {
    //if (i === 5) break; //with the 'break' keyword you jump out of a loop
    if (i % 2 === 0) { //if i is an even number then it will be incremented and printed to the console
        i++;          //therefore the output will be odd numbers
        continue; //with the 'continue' keyword you jump to the next iteration
    }
    console.log(i);
    i++;
}

//EXCERCISES 
//1. write a function that takes two numbers and returns the maximum of two.

let number = max(1,2);
console.log(number);

function max(a,b){
    return (a > b) ? a : b; //ternary operator is cleaner than if else.
    //if (a >b) return a;
    //return b
}

//2. Return true if the image is landscape (width > height)
console.log(isLandscape(800,600))

function isLandscape(width, height) {
return (width > height)
}

//return (width > height) ? true : false; 
// this solution can be shortened because the condition will evaluate to true automatically

//3. FizzBuzz

//Divisible by 3 == Fizz
//Divisible by 5 == Buzz
// Divisible by both 3 and 5 == FizzBuzz
// Not divisible by 3 or 5 == input
//Not a number == 'Not a Number'

const output = fizzBuzz(false);
console.log (output);

function fizzBuzz(input) {
    if (typeof input !== 'number')
    return NaN;
    
    if ((input % 3 === 0) && (input % 5 === 0))
    return 'FizzBuzz';
    
    if (input % 3 === 0)
    return 'Fizz';

    if (input % 5 === 0)
    return 'Buzz';


    return input;
}

// 4. Checkspeed
// Speed Limit = 40
// every 5  over 70 they get a point
//Math.floor(1.3)
// 12 points suspended

checkSpeed(109);

function checkSpeed(speed) {
    const speedLimit = 70;
    const kmPerPoint = 5;

    if (speed < speedLimit + kmPerPoint) {
        console.log('Ok');
        return;
    }
    
    const points = Math.floor((speed - speedLimit) / kmPerPoint);
    if (points >= 12)
     console.log('License Suspended');
    else
     console.log('Points', points); 
}

//Excercises

// 5. Displays numbers as odd or even based on the limit that you set.

//My Solutions
showNumbers(10);

function showNumbers(limit) {
    let i = 0;
    while (i <= limit) {

        if (i % 2 !== 0) {
            console.log(i, "Odd");
        }
        else 
            console.log(i, "Even")
            i++;
    }
}

//Mosh's Solution
showNumbers(10);

function showNumbers(limit) {
    for (let i = 0; i <= limit; i++) {
        if (i % 2 === 0) console.log(i, 'EVEN');
        else console.log(i,"ODD");

        //Mosh recommends using the ternary operator implementation below for cleaner code 
        //const message = (i % 2 === 0) ? 'EVEN' : 'ODD'
        //console.log(i, message);
    }
}

// 6. Count Truthy
// Takes an array and counts the number of Truthy elements in an array.
// Javascript engine interprets a non Boolean value as Truthy or Falsey

/* Falsey Values
undefined
null
''
false
0
NaN
*/


const array = [0, null, undefined, '', 2, 3];

console.log(countTruthy(array));

function countTruthy(array) {
    let count = 0;
    for (let value of array) // Use for of loop to iterate array
        if (value) //A value is automatically interpreted as true or false so 
        count++;   // a comparison is not needed.
    return count;
}

//7. Create a function that displays all the properties of an object that are
// of type 'string'

//Object Literal Syntax
const movie = {
    title: 'a',
    releaseYear: 2018,
    rating: 4.5,
    director: 'b'
};

showProperties(movie);

function showProperties(obj) {
    for (let key in obj) // in each iteration key will hold the name of one of the properties
        if (typeof obj[key] === 'string') // get the value of each property and check the type of that value
            console.log(key, obj[key]); // if the type is a string then we display the property and its value
}                           // we use bracket notation to get the value of each property

//8. Sum of Multiples of 3 and 5
// return all the multiples of 3 and 5 up to the set limit 

console.log(sum(10));

function sum(limit) {
    let sum = 0; //initialization

    for (let i = 0; i <= limit; i++) // logic
        if (i % 3 === 0 || i % 5 === 0)
            sum += i; //if condition is true value is added and then assigned to sum.

    return sum; //return statement
}

//9. Calculate the Grade of a student
// Break into two smaller functions 
//Single Responsibility Principle - each function only handles 1 task.

const marks = [80, 80, 90];

//Calculate Average
// 0-59: F
//60-69: D
//70-79: C
//80 - 89: B
//90 - 100: A

console.log(calculateGrade(marks));

function calculateGrade(marks) {
    const average = calculateAverage(marks);
    if (average < 60) return 'F';
    if (average < 70) return 'D';
    if (average < 80) return 'C';
    if (average < 90) return 'B';
    return 'A';
}

function calculateAverage(array) {
    let sum = 0;
    for (let value of array)
        sum += value;
    return sum / array.length;
}

//NESTED LOOP 

//10. Show Stars
// Nested Loop

showStars(5);

function showStars(rows) {
    for (let row = 1; row <= rows; row++){
        let pattern = '';
        for (let i = 0; i < row; i++) //For Ex. If we are on row 5 this nested loop will execute 5 times
            pattern += '*'; // Appends 1 star to our empty string each time 
        console.log(pattern);
    }
}

//10. show Prime numbers up to the given limit.

// Prime (Number whose factors are only 1 and itself)
// Composite

//Factors of 12
// 12 = 1,2,3,4,6,12
// 12 can be divided evenly by its factors

// 11 == 1, 11

showPrimes(20);

function showPrimes(limit) {
    for(let number = 2; number <= limit; number++) //For loop starts at two because the first prime number is 2
        if (isPrime(number)) console.log(number);
    
}

function isPrime(number) {
    for (let factor = 2; factor <= number; factor ++) 
        if (number % factor === 0) //if the number can be divided by the factor then it is not a prime number
            return false;

    return true;
                
}

// Having two functions is cleaner than a Nested Loop
//When you have a Nested Loop, that's probably an indication that you can extract
//the logic from the innder loop and put it and put it in a different function.
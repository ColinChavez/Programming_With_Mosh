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
//the logic from the inner loop and put it and put it in a different function.

// ****** Objects ******//

// Object-Oriented Programming (OOP) - Style of programming where we see a program
//as a collection of objects that talk to each other to perform some functionality.
// The purpose of an object is to group related variables
// Objects are created using Object Literal Notations {} "Curly Brackets"
// We add key:value pairs inside the object called "Properties"
// Values can be any variable type including other objects, arrays, and functions
// We have access to all of our objects functions and Properties when we 
//call it in other areas of the program.
// We call an object using "Dot Notations" Ex. circle.draw();

//Method - A function that is part of an Object

circle.draw(); //Draw Method

// FACTORY FUNCTIONS
function createCircle(radius) {
    return {
        radius, //if our key and value are the same we can remove the value
        draw(){ //define a function within an object by dropping the function keyword
            console.log('draw');
        }
    }; 
}

const circle1 = createCircle(1);
console.log(circle1);

// CONSTRUCTOR FUNCTIONS

/*Job of this function is to create functions
//The naming convention of this function is different, written in Pascal Notation
//Camel Notations: oneTwoThreeFour
//Pascal Notation: OneTwoThreeFour

//'This' Keyword - refers to the object that it belongs to and is reference to 
//the object that is executing this piece of code.
// With Dot notation we can access properties of an object, we can read a property
//or we can set a property
//'New' Operator - 
1. Creates an empty javascript object, happens under the hood
2. Sets 'this' to point to the object the object it creates
3. Returns the object from the function
*/

function Circle(radius) {
    this.radius = radius;
    this.draw = function() {
        console.log('draw');
    }
    //return this; happens under the hood.
}

const circle = new Circle(1);
const x = {};

// DIFFERENCE BETWEEN FACTORY VS CONSTRUCTOR FUNCTIONS
//Factory Function calls a function and return a new object. Written in Camel Case
//Constructor Functions use the 'New' operator and in stead of returning an object
//we use the 'this' keyword. Written in Pascal Case

// FACTORY FUNCTION
function createCircle(radius) {
    return {
        radius, //if our key and value are the same we can remove the value
        draw(){ //define a function within an object by dropping the function keyword
            console.log('draw');
        }
    }; 
}

const circle1 = createCircle(1);
console.log(circle1);

//CONSTRUCTOR FUNCTION
function Circle(radius) {
    this.radius = radius;
    this.draw = function() {
        console.log('draw');
    }
    //return this; happens under the hood.
}

const circle = new Circle(1);
const x = {};

//DYNAMIC NATURE OF OBJECTS

//In Javascript, we can add or remove properties or methods.
// Even though we've defined the circle as a 'Constant', we can still change
//its properties and functions because it is 'Dynamic"
// 'const' means that we can reassign this variable. We cannot reset circle to 
//a new object


const circle = {
    radius: 1
};

circle.color = 'yellow';
circle.draw = function() {}

delete circle.color;
delete circle.draw;

console.log(circle);

/**************************** */
// CONSTRUCTOR PROPERTY
//Every Object in Javascript has a property called constructor. Constructor references
//the code that was used to construct or create that object. 
// Let's look at the 'circle' and 'another' objects constructor property.
// When we type 'another.constructor' in the console, we see the code that 'constructed'
//this object. Constructor Function below.

// 'circle.constructor' returns f Object() { (native code)}. A buildt in constructor
//function in javascript.

// FACTORY FUNCTION
function createCircle(radius) {
    return {
        radius, //if our key and value are the same we can remove the value
        draw(){ //define a function within an object by dropping the function keyword
            console.log('draw');
        }
    }; 
}

const circle = createCircle(1);


//CONSTRUCTOR FUNCTION
function Circle(radius) {
    this.radius = radius;
    this.draw = function() {
        console.log('draw');
    }
    //return this; happens under the hood.
}

const another = new Circle(1);

let x = {};

//When we use the 'Object Literal' Syntax, JavaScript will translate it to something
//like this.
//let x = new Object();

//The Circle object we created and returned in our factory function. Because we used
//the Object Literal Syntax, internally it was created using an object constructor 
//function

//Built in Constructors

new String(); // '', "", ``
new Boolean(); //true, false
new Number(); // 1, 2, 3, ...

//Takeaway: Every Object has a constructor property and that references the function
//that was used to create that object.

/************************************ */
// FUNCTIONS ARE OBJECTS

//Dot notations brings up a menu in vscode to show all the 'members' of an object.
//The purple icons are methods, like call, bind, and apply.
//The blue icons are properties.


//CONSTRUCTOR FUNCTION
function Circle(radius) {
    this.radius = radius;
    this.draw = function() {
        console.log('draw');
    }
    //return this; happens under the hood.
}

const another = new Circle(1);

//When we declare a function like the above example, internally, it's represented
//like the code below.
const Circle1 = new Function('radius' `
this.radius = radius;
this.draw = function() {
    console.log('draw');`)

const circle = new Circle1(1);// Now we can call our Circle 1 Object just like
                              //we can call our Circle1 function and it creates an object

const another = new Circle(1);

Circle.call({}, 1); //this expression is the same as the expression on line 926

//When we use the 'New' Operator it will internally create an
//empty object and passes that as the first argument to the call method. This object
//will determine the context for the 'this' keyword. So the 'this' keyword above
//will reference the object created in Circle.call({})

//If we do not use the 'new' operator, then 'this' will point to the global object
//which is 'window'
//This is what it looks like under the hood. 
//Circle.call({},1) is actually Circle.call(window,1)
//So the first argument {} specifies the target of 'this'

//APPLY METHOD
Circle.apply({}, 1);
//Calls a function but instead of passing all the arguments explicitly such as
// Circle.call({}, 1,2,3,4) we pass them in an array like
// Circle.apply({}, [1, 2, 3,]);
//This is useful if you already have an array somewhere in your application and you
//want to pass an array as the second argument to the apply method.

//Takaway: In Javascript Functions are Objects

/********************************************************************* */
//Value vs Reference Types

/* Value Types (Also Called Primitives)
Number
String
Boolean
Symbol (new in ES6)
undefined
null
*/

/* Reference Types (Also called Objects)
Objects
Functions
Array
*/

//Define two primitives
let x = 10;
let y = x;

x = 20;

//X and Y are two independant variables
// When we work with primitves the value is stored in the variable, when we copy
// this variable the value that is stored in the variable is also copied into the 
//new variable. So the values are independent of each other. That changes when we
//use an oject.

//Define an object
let x = {value: 10};
let y = x;

x.value = 20;

//TAKEAWAY: When we assign an object to a variable, like the example above,
//that object is not stored in that variable
//The Object is stored somewhere else in memory, and the address of that memory
//location is stored inside that variable 
// so when we copy x to y as we did above, it's the address or the reference that
//is copied. In other words, both x and y are pointing to the same object in memory.
//And when we modify each object using x or y, its changes are immediatley visbile
//to the other variable

//CONCLUSION: 
//PRIMITIVES are copied by their value
//Objects are copied by their reference "address in memory"

//Primitive
let number = 10;

function increase(number) {
    number++;
}

increase(number);
console.log(number);

//Output: 10
//This is because the 'number' variable in the increase functin is independent
// from the the first 'number' variable that we defined. Even though we increment
// number using number++; , the value number reverts back to 10 when the function
//has completed its task. 10 is incremented to 11 only within the 'Scope' of the 
//increase function. 

//Reference Type
let obj = { value: 10 };

function increase(obj) {
    obj.value++;
}

increase(obj);
console.log(obj);

//Output: 11
//This is because when we call increase and pass in obj, This Object is passed
//by it's reference. So the local paramater will also point to the same object
//We have two variables that are pointing to the same NOT two independent copies.
//Any changes made to this object are visible to the other variable.

//TAKEAWAY: In javascript we have value types also called primitives as well as
//reference types also called Objects.

/****************************************************************************/
//ENUMERATING PROPERTIES OF AN OBJECT

const circle = {
    radius: 1,
    draw() {
        console.log('draw');
    }
};

for (let key in circle) //iterates (loops through) all the properties and methods of an object.
    console.log(key, circle[key]); //Use Bracket Notation to get the value of a property. circle of key

//An object is not iterable with the for of loop because the for of loop can only
//iterate arrays and maps. Therefore, we use a function called Obj.keys , which gets all the
//keys in our circle object and turns them into an array. 

for  (let key of Object.keys(circle))
    console.log(key);

//Object is a built in constructor function such as 
//function Object() {}

//Whenever we create an object using the object literal syntax, internally that is
//translated into a call to this constructor function.

//If we create a new object
const x = { value: 1 };
//Internally it does this
const x = new Object();

//All functions are Objects in javascript so they have properties and methods
//that we can access using the Dot Notation
// When we type Object. we can see all the properties and methods defined in that object
//The keys() method returns a string array which contains all the properties and methods
//in this object.

//entries() method is similiar to keys() method but instead of returning the keys
// as a 'string' array
//entries() method returns an array of each key:value pair.
//The first element of the array is the key and the second is the value

for  (let entry of Object.entries(circle))
    console.log(entry);

//To check to see if a given object has a given property or method
if ('color' in circle) console.log('yes');

//TAKEAWAY:
//Simplest way to enumerate the properties in an object is to use the for in loop
//We can also use the for of loop with Object.keys and Object.entries
//To see if a given method or property exist we use the 'in' operator.

/****************************** */
//CLONING AN OBJECT

const circle = {
    radius: 1,
    draw() {
        console.log('draw')
    }
};

const another = {}; //Copy of Circle Object set to empty object
for (let key in circle) //use to iterate all properties in object and copy it to empty object
    another[key] = circle[key];//Use bracket notation to access a property with the given key

//The above code is similiar to the code below. We are setting radius property of
//another object to circle of radius
another['radius'] = circle['radius']; 
//another of radius is equal to circle of radius.
//On the right side of the operator we are reading the radius property which is 1
//and then we're assigning it to the radius property of the anotherobject

//The above approach for copying or cloning is an old way of doing things
//In modern Javascript we use the Object.assign method.

//This method takes all the properties and methods in the source object, copies them
// into the new object, and then returns the result.
//Doing this is the same as doing the 3 lines of code above
//As the first argument we can pass a target object which can be an empty object,
//or an existing object. Then we can pass 1 or more source objects such as circle.
//
const another = Object.assign({
    color: 'yellow'
}, circle);

//SPREAD OPERATOR - an even more elegent way to clone objects. Takes all the methods
//and properties within an object and puts them in the new object.
// Spread Operator is written as three dots, ...
const another = {...circle}

//TAKEAWAY: Object.assign copies the properties or methods from one or more source
//objects into a target object and we can use that to clone an object or combine
//multiple objects into a single object
//Spread Operator us used to 'spread' and object. Copy all its properties and methods
//and putting them into another object.

//GARBAGE COLLECTOR - runs automatically in the background to allocate memory

//In lower level languages such as C or C++ when creating an object we have to 
//allocate memory to it and when we're done we have to de-allocate that memory.
// In Javascript we do not have this concept.  

//When we create a new object the memory is automatically allocated to this object,
//The Javascript Engine's 'Garbage Collector' uses a complex algorithm to allocate
//and de-allocate this memory for us automatically. It's job is to find the variables
//or constants that are no longer used and then de-allocate the memory.
let circle = {};
console.log(circle);

//BUILT IN OBJECTS IN JAVASCRIPT
//MATH

Math.random(); //generates a random number

function getRandom() {
    return Math.random();
}

//Get a random number between two values

function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}

Math.round(1.9); //returns rounded number
Math.max [1, 2, 3, 4, 5]; //returns largest value

//STRING OBJECT
const another = new String('hi')

// Useful String Methods

message.length //used to count the number of characters
message[0] //string indexing
message.includes('my')//check to see if string contains paramaters/Case Sensitive
message.startsWith('This') //check beginning of string
message.endsWith('beans')//check end of string
message.indexOf('my')//what index does this start at?
message.replace("This is my second message")// replaces string
message.toUpperCase('THIS IS MY FIRST MESSAGE')// converts to uppercase
message.trim() //gets rid of all the whitespace before and after our message
message.trimLeft() //gets rid of space at beginning
message.trimRight() //gets rid of space at end

//ESCAPE NOTATION
//***See Notation */
//Special Characters that allow you to add additional text features like quotes


const message = 'This is my\n \'first message';

message.split(' ')// splits a string based on a given character, if we pass in a 
//whitespace ' ' then we return an array with each word in our message as an element.
// STRING - Built in Constructor Object

//STRING PRIMITIVE
//Even though a string primitive is not an object we can still use it like one.
//When we use the Dot Notation with a string primitive, Javascript Engine internally
//wraps this with a string object
const message = 'This is my first message';

//TEMPLATE LITERALS

//If we wanted to make our code appear like the output and add additional quotes
//We would concatenate the messages, add escape characters, and put them on separate lines

const message = 'This is my\n' + 
'\'first\' message';

//The above looks really bad so we will use Template Literals instead.

//Types of Literals
//Object {}
//Boolean true, false
//String '', ""
//Template `` (Starting in ES6) No concatenation or Escape Notation needed!

const another = `This is my 
'first' message`; //This allows us to format our string the way we want it to look
//without having to use escape characters

//PLACEHOLDERS - ${} , pass the name of a variable or constant
//We can add any type of expression that produces a value. ${2 + 3}
//We can also call a function that returns a value.

//Instead of using this code 
const name = 'John';
const message = "Hi " + name + ',\n';

//We can use this code with a placeholder 
const another = 
`Hi ${name} $,

Thank you for joining my mailing list.

Regards,
Colin`;

// Workspace to test code in browser

// DATE OBJECT - Built In object

const now = new Date();
const date1 = new Date('May 11 2018 09:00');
const date2 = new Date(2018, 4, 11, 9, 0); //Months represented 0 -11

now.setFullYear(2017);
//now.toDateString() Output: "Thu Feb 02 2017"
//now.ToTimeString() Output: "14:02:19 GMT-0600 (Central Standard Time)"
//nowtoISOSTRING() Standard ISO format commonly used to transfer date between client and server
//Output: "2017-02-02T20:02:19.084Z"

//Excercise 1- Address Object

//My Answer
const address = {
    street: '2355',
    city: 'Grand Prairie',
    zipCode: '75050'
};

function showAddress(obj) {
    for (let keys of Object.entries(address))
    console.log(keys);
}

showAddress();

//Mosh Answer
const address = {
    street: 'a',
    city: 'b',
    zipCode: 'c'
};

function showAddress(address) {
    for (let key in address)
    console.log(key, address[key]);
}

showAddress(address);

//Excercise 2 - FACTORY AND A CONSTRUCTOR FUNCTIONS

//Factory Function - return a new object
function createAddress(street, city, zipcode) {
    return {
        street, //If Key and value are the same we can drop the value
        city,
        zipcode,
    };
}
let address = createAddress('a', 'b', 'c');
console.log(address);

//Constructor Function 
function Address(street, city, zipCode) {
    this.street = street;
    this.city = city;
    this.zipCode = zipCode;
}

let address = new Address('a', 'b', 'c');
console.log(address);

//Excercise 3 - Object Equlity
let address1 = new Address('a', 'b', 'c');
let address2 = new Address('a', 'b', 'c');
let address3 = address1;

function Address(street, city, zipCode) {
    this.street = street;
    this.city = city;
    this.zipCode = zipCode;
}

function areEqual(address1, address2) {
    return address1.street === address2.street &&
    address1.city === address2.city &&
    address1.zipCode === address2.zipCode;
}

function areSame(address1, address2) {
    return address1 === address2; //checks to see if both variables are referencing the same object
}


console.log(areEqual(address1, address2)); //Output True - individual properties are equal
console.log(areSame(address1, address2)); //Output False - these are different objects
console.log(areSame(address1, address3)); //Output True - because these variables are pointing to the same object in memory

//Excercise 4-  Blog Post Object

const blogPost = {
    title: 'javascript',
    body: 'paragraph',
    author: 'Juniper',
    views: 0,
    comments: [
        {author: 'Mike Hunt', body: 'Did not read this'},
        {author: 'York Hunt', body:'I also did not read this'}
    ],
    islive: true
}

console.log(blogPost);

//Excercise 5- Constructor Functions

let post = new Post ('a', 'b', 'c');

console.log(post);

function Post(title, body, author,) { //aim to have functions with few parameters
    this.title = title;
    this.body = body;
    this.author = author;
    this.views = 0
    this.comments = [];
    this.isLive = false;
}

// Excercise 6 - Price Range 
//Look at the Price Range Buttons on Yelp

//this object is an array of three objects
//Minumum and Maximum Values are important for Filtering
//For Ex. if you are building an application like yelp, somwhere you need to store a list of restaurants and 
//then compare the properties of those restaurant objects.

let priceRanges = [
    { label: '$', tooltip: 'Inexpensive', minPerPerson: 0, maxPerPerson: 10},
    { label: '$$', tooltip: 'Moderate', minPerPerson: 11, maxPerPerson: 20},
    { label: '$$$', tooltip: 'Inexpensive', minPerPerson: 21, maxPerPerson: 50},
];

let restaurants = [
    {averagePerPerson: 5}
]

console.log(priceRanges);

/*********************************************************************/
//ARRAYS//

const numbers = [3, 4]; //can't reassign the variable numbers but we can modify the array.
//arrays are objects

//Add to End of array
numbers.push(5,6);

//Add to Beginning
numbers.unshift(1, 2);

//Middle
numbers.splice(2, 0, 'a', 'b');
console.log(numbers);

/******************************************************************** */
//FINDING ELEMENTS IN AN ARRAY PRIMITIVE TYPES 

const numbers = [1, 2, 3, 1, 4];

console.log(numbers.indexOf('a')); //Outputs -1 because it does not exist
//Type of paramater matters
console.log(numbers.lastIndexOf(1));

console.log(numbers.indexOf(1) !== -1); //Checks to see if the value exists in the array. Output: True
console.log(numbers.includes(1)); //Another way to check to see if value exists in an array.

console.log(numbers.indexOf(1, 2)); //First Paramater finds the first index(first place 1 is found), 
//second paramater tells it to begin looking at the second index. Output: 3

/****************************************************************************************************/
//FINDING ELEMENTS IN AN ARRAY REFERENCE TYPES

const courses = [
    { id: 1, name: 'a'},
    { id: 2, name: 'b'},
];

console.log(courses.includes({ id: 1, name: 'a'})); // Output: False because these are two different objects
//in two different locations, therefore they have two separate references in memory

//if you have an array with reference types you need to use the 'Find' method
//The 'Find' Method takes in a function as one of its arguments
array.find(function(element) {
    return element > 10;
});
//This function is called a 'Predicate' and we use it to determine if the given element exists in the array.
//Then we return a boolean (return element >10;) will output either true or false.
//When we find an element that matches the criteria we stop and return that element otherwise we return
//undefined

//criteria: find a course equal to a

const course1 = courses.find(function(course) {
    return course.name === 'a';
});


const course2 = courses.findIndex(function(course) {
    return course.name === 'a';
});

console.log(course2);

/****************************************************************************************************/
//ARROW FUNCTIONS ES6

const courses = [
    { id: 1, name: 'a'},
    { id: 2, name: 'b'},
];

//Arrow Function - Used to pass a function as a callback function or as an argument for a different method.
// Start by removing the function keyword 
// Then seperate the paramaters from the body by putting an arrow in between them.
//If your function has a single paramater then you can also get rid of the paranthesis.
//If you don't have any paramater you have to pass an empty paranthesis()
//If your function is a single line of code and is returning a single line of code you can make it shorter,
//by removing the return keyword, removing the curly braces, and putting everything on one line.

//Instead of using this code
const course1 = courses.find(function(course) {
    return course.name === 'a';
});

//Use this code 
const course = courses.find(course => course.name === 'a'); //Course "Goes To" Course.Name = A.

console.log(course);

/****************************************************************************************************/
//REMOVING ELEMENTS

const numbers = [1, 2, 3, 4];

const last = numbers.pop();

const first = numbers.shift();

numbers.splice(2, 1); //if you want do delete multiple elements, pass a number greater that 1 in the
console.log(numbers); //second paramater.

//add to array 
//push - add to the end
//unshift - add to the beginning
//splice - add to the middle 

//remove from array
//pop - remove from the end
//shift - remove the beginning
//splice - delete from the middle 

/****************************************************************************************************/
// EMPTYING AN ARRAY

let number = [1, 2, 3, 4];
let another = numbers;

//Solution 1 - reassign to new array 
//This will not work if you have another variable pointing to the old array 
//The garbage collector will not clear out the memory used by the old array if something is using it.
numbers = [];
console.log(numbers);

//Solution 2 - set the length property to 0 and it will truncate the array.
numbers.length = 0;

//Solution 3 - Use the Splice Method
numbers.splice(0, numbers.length);

//Solution 4 - POP will continue deleting elements from an array as many times as it is called.
while (numbers.length > 0)
    numbers.pop();

console.log(numbers);
console.log(another);

//Solution 2 or solution 1 is best.

/****************************************************************************************************/
//COMBINING AND SLICING AN ARRAY

//Combine the arrays using the 'Concat' method. (concatenate) 
//Separate the arrays by using the 'Slice" Method.

//Primitive values are copied into the target array
//Reference values are not copied. Their address or 'reference' is copied.
//If the value of the object is change then it will change all references to that object.

const first = [1, 2, 3];
const second = [4, 5, 6];

const combined = first.concat(second);

const slice = combined.slice(2, 4); //Slice starting at 2 and ending at 4
const slice = combined.slice(2); //Slice everything after 2
const slice = combined.slice(); //returns a copy of the first array

console.log(combined);
console.log(slice);

/****************************************************************************************************/
//THE SPREAD OPERATOR ES6

const first = [1, 2, 3];
const second = [4, 5, 6];

//Insted of using this code
const combined = first.conctat(second);

//Use this Code
const combined = [...first, ...second]; //When you spread an array, all its elements are returned indivudally

//Spread operator is flexible and allows you to add elements between the elements
const combined = [...first, 3, ...second]

const copy = combined.slice();
const copy = [...combined]; //returns all the elements of the combined array and puts them into the new
//array.

/****************************************************************************************************/
//ITERATING AN ARRAY

//FOR OF LOOP - ITERATES AN ARRAY

const numbers = [1, 2, 3,];

for (let number of numbers)
    console.log(number);


//FOR EACH METHOD - another way to Iterate arrays
//For Each Method takes a callback function as a paramater.
//This Function takes a paramater and logs it to the console
//This Function is executed for each element in the array. Each element will be passed as an argument to
//this function
numbers.forEach(function(number) {
    console.log(number);
});

//The arrow function syntax can be used to simplify this code
numbers.forEach(number => console.log(number));

//Choose one of these to use based on personal preference
//The callback function is useful because it can take an index as a second paramater
numbers.forEach((number, index) => console.log(index, number));

//We don't get the index with the For Of Loop but instead we could use the For In Loop

/****************************************************************************************************/
//JOINING ARRAYS

const numbers = [1, 2, 3];
const joined = numbers.join(','); //Join numbers in array using a 'separator' element
console.log(joined);

const message = 'This is my first message';
const parts = message.split(' ');
console.log(parts);

const combined = parts.join('-');
console.log(combined);

//These are useful when creating a url 'slug'
//For Ex. stackoverflow.com/creating-arrays-in-javascript
//The URL won't let you use white space for the title.
//You might have to delete the whitespace, split the string, and join it again with hyphens.

/****************************************************************************************************/
//SORTING ARRAYS

const numbers = [2, 3, 1];
numbers.sort(); //converts each element to a string and then sorts the elements in the array.
console.log(numbers);

numbers.reverse(); //reverse elements
console.log(numbers);

//Reference type 
//'Sort' method optionally takes an argument that is a function that is used for comparison.
//When we call the sort method it gets two objects in this array and compares them. If they are in the right
//order it will skip to the next few elements, otherwise it's going rearrange them.
const courses = [
    { id: 1, name: 'Node.js'},
    { id: 2, name: 'JavaScript' },
];


courses.sort(function(a, b) {

    //Solution can be to convert them to upper or lower case
    const nameA = a.name.toLowerCase();
    const nameB = b.name.toLowerCase();

    if (nameA < nameB) return -1;
    if (nameB > nameB) return 1;
    return 0;
});

console.log(courses); //Output: orders the Objects with Javascript First
//Note: If I were to change Node.js to Node.Js it puts Node.Js first because each character in a computer
//is internally represented as a number.
//ASCII Table (American Standard Code for American Interchange)
//For this reason, It is best to exclude Case Sensitivity when comparing two names.

/****************************************************************************************************/
//TESTING THE ELEMENTS IN AN ARRAY

const numbers = [1, -1, 2, 3];

//'Every" method takes a function that can take 3 paramaters, Value, Number, and Index.
// This function runs on all the elements in an array but it terminates when it doesn't find a match.
/* const allPositive = numbers.every(function(value) {
    return value >= 0;
});  */

// console.log(allPositive);

//Some method will run callback function on every element on the array, as soon as the criteria matches
//it will terminate.
const atLeastOnePositive = numbers.some(function(value) {
    return value >= 0;
}); 

console.log(atLeastOnePositive);

//every() checks to see if every element in a given array matches the given criteria.
//some() checks to see if we have at least one element that matches the given criteria.

/****************************************************************************************************/
//FILTERING AN ARRAY

//Filter Callback Function- optionally takes in 3 paramaters: Value, Index, and Array.
//We set this function to filter and return any number that is positive

const numbers = [1, -1, 2, 3];

const filtered = numbers.filter(function(value) {
    return value >= 0;
})

console.log(filtered);

//We can also use an arrow function

const filtered = numbers.filter(n => n >= 0); // Get numbers where number is greater than or equal to 0.

//Realistically we would implement this with an array of objects. For ex. filtering restaurants.

/****************************************************************************************************/
//MAPPING AN ARRAY

//Map Method - maps each item in array to someting else.
//Construct an HTML markup using the elements in this array
//Map Method takes in a function that can have three optional paramater: Value, Index, and Array.

/* const numbers = [1, -1,  2, 3, ];

const filtered = numbers.filter(n => n >= 0);

const items = filtered.map(n => '<li>' + n + '</li>')// We can display each number using a bullet point with 
//this markup. We map the number variable to the html markup.

//create an unordered list element
//Use the Join Method to join the elements of this array and create a string
const html = '<ul>' + items.join('') + '</ul>';
console.log(html);

//Takeaway: We can use th map method to map each element in an array into something else. */


//MAP TO OBJECTS

//Mapping each number to an object with a value and a property is very useful when building real world
//applications
const numbers = [1, -1,  2, 3, ];

const filtered = numbers.filter(n => n >= 0); 

//objects have to be put in paranthesis to  be placed on a single line of code with an arrow function
//The javascript engine will think its parsing a code block instead of an object and throw an error.
const items = filtered.map(n => {
    return obj = { value: n };
});

console.log(items);

const items = filtered.map(n => ({ value: n }) );

console.log(items); 

//Both the filter and the map method return a new array. They don't modify the original array.
//Both of these methods are chainable which means we can call them one after another in a chain.

//CHAINING - First method returns a result, then a method is called on the result of the previous method.
//When chaining methods it is best to put each method call on a separate line.

//To chain the methods
//1. Delete the 'filtered' constant
//Since the 'filtered' constant is only used in one please we don't need to store the result in a 
//separate constant
//2. remove the semicolon and add it to the final statement to terminate.
const numbers = [1, -1,  2, 3, ];

const items = numbers //store result in items
    .filter(n => n >= 0) //filter where n is greater than 0
    .map(n => ({ value: n }) ) //call the map method on the result that is returned from the filter statement
    .filter(obj => obj.value > 1)// call the filter method on the result of the map method.
    .map(obj => obj.value); // map each object to a number

console.log(items);

****************************************************************************************************/
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
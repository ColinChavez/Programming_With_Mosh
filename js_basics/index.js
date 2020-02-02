// Workspace to test code in browser

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
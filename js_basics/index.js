// Workspace to test code in browser

/****************************************************************************************************/
//The THIS Keyword

//THIS - references the object that is executing the current function.

//If a function is part of an object it is called a method
//method => obj, method references that object itself.
//If a fucnction is not part of an object then it is a Global object which references the global object 
//(Window() in Browsers and Global() in Node.

//method => obj
//function => global (window, global)

// Example of method => obj

const video = {
    title: 'a',
    play() {
        console.log(this); //Because play() is a method in the 'video' object, 'this' references the 
    } //video object
};
video.stop = function() {
    console.log(this); //'this' references the 'video' object because 'stop' is a method of the 'video obj
};

 video.play();

// Example of function => global

 const video = {
    title: 'a',
    play() {
        console.log(this);
    }
};

function playVideo() {
    console.log(this); //this references the 'Global' Object.
}


//Example with Constructor Function
//'This' in Constructor functions references the Constructor function rather than global or parent obj.
//Because when we use the 'new' operator it creates an empty object in memory and sets 'this' to reference
//that empty object.

const video = {
    title: 'a',
    play() {
        console.log(this);
    }
};

function Video(title) {
    this.title = title;
    console.log(this);
};

 const v = new Video('a'); // {}

 //Aother

 const video = {
    title: 'a',
    tags: ['a', 'b', 'c'],
    showTags() {
        this.tags.forEach(function(tag) { //'this' references current obj 'video', 'tags' references property
            console.log(tag); //Since 'tags' is an array we can call the 'forEach' method (CallBack function(tag)), we pass in 'tag' because each iteration will get the value of a tag.
        });
    }
};

video.showTags();

//What if we want to show the title of the video next to each tag?
//If we try to log 'this' and 'tag' , 'this' references the Global Object instead of the 'Video' Object
//This is because we are trying to call 'this' inside of the 'CallBack' Function in the 'forEach' method.
//Therefore this is references the 'Global'/Window Object instead of the 'Video' Function.
//Here are 3 solutions to overcome this problem.

//1. Add 'this' as a second argument to the 'forEach' callback function. This will allow 'this' to 
//reference our local 'video' object
/*forEach(callbackfn: (value: string, index: number, array: string[]) => void, thisArg?: any): void
An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value.
Performs the specified action for each element in an array. */

//The problem is that not all methods in JS allow you to pass a 'this' argument.

/****************************************************************************************************/

const video = {
    title: 'a',
    tags: ['a', 'b', 'c'],
    showTags() {
        this.tags.forEach(function(tag) { //'this' references current obj 'video', 'tags' references property
            console.log(this.title, tag); //Since 'tags' is an array we can call the 'forEach' method (CallBack function(tag)), we pass in 'tag' because each iteration will get the value of a tag.
        }, this);
    }
};

video.showTags();

//Example of how to change the value of 'this' within a function.
//Solution 2: Create a constant called 'self' or 'that' and set its value to 'this' before you call
//the 'CallBack' Function
//In our 'CallBack' Function we can call 'self' instead of 'this' since 'self' references our local obj.
//This however, is not the preferred way of doing things.

const video = {
    title: 'a',
    tags: ['a', 'b', 'c'],
    showTags() {
        const self = this;
        this.tags.forEach(function(tag) { 
            console.log(self.title, tag); 
        });
    }
};

//A better way of doing things.
//A function is an Object in Javascript, Therefore we can use the Dot Notations to call a method to 
//change the value of 'this'
//.call, .apply, or .bind


function playVideo() {
    console.log(this);
}

//.call method
//The First Paramater of this Method is 'thisArg' which allows us to pass an 'Object' and 'this' will
//reference that object.

/* (method) Function.call(this: Function, thisArg: any, ...argArray: any[]): any
Calls a method of an object, substituting another object for the current object.

@param thisArg — The object to be used as the current object.

@param argArray — A list of arguments to be passed to the method.*/
playVideo.call({ name: 'Mike' }, 1, 2);
//If we call this function with the standard function call syntax playVideo(); , 'this' would instead
//reference the 'Global'/Window Object.

//.apply method
// Same results ass .call
//The difference is only about passing arguments.
//The . apply method requires that you pass any additional arguments as an array.

/* (method) Function.apply(this: Function, thisArg: any, argArray?: any): any
Calls the function, substituting the specified object for the this value of the function, and the specified array for the arguments of the function.

@param thisArg — The object to be used as the this object.

@param argArray — A set of arguments to be passed to the function.*/
playVideo.apply({ name: 'Mike' }, [1, 2]);

//.bind
//.bind does not call our local 'Video' function, instead it sets 'this' to point to the object that 
//we pass in as an argument permanantly and returns a completely new function.

/*(method) Function.bind(this: Function, thisArg: any, ...argArray: any[]): any
For a given function, creates a bound function that has the same body as the original function. The this object of the bound function is associated with the specified object, and has the specified initial parameters.

@param thisArg — An object to which the this keyword can refer inside the new function.

@param argArray — A list of arguments to be passed to the new function. */
playVideo.bind({ name: 'Mike' })(); //Adding () allows us to call the function that we just created

playVideo();

//Example of using .bind to change the value of 'this' keyword:

const video = {
    title: 'a',
    tags: ['a', 'b', 'c'],
    showTags() {
        this.tags.forEach(function(tag) { 
            console.log(this.title, tag); 
        }.bind(this)); //Call the '.bind' method on the 'forEach' 'Callback' function and then pass an object to be used as the value of this. 
    } //We then pass in 'this' as our object to be used because we are in the 'showTags()' method which will reference our 'Video' Object.
};

video.showTags();

//The 3RD, FINAL, and BEST way to change the value of 'This'
//ARROW FUNCTIONS IN ES6!

//Arrow Functions INHERIT the 'this' value.

//Arrow Functions INHERIT 'this' from the containing function. In this case it would be our 'showTags()'
//function, which references our 'video' object!

//The value of 'this' changes each time a new function is created but when we use an 'Arrow Function'
//it changes the value of 'this' to reference the parent function.


const video = {
    title: 'a',
    tags: ['a', 'b', 'c'],
    showTags() { //'this' references 'video' in 'showTags' because 'showTags' was created in the 'video' obj.
        this.tags.forEach(tag => { //'this' now references the 'video' function instead of global because we added an 'Arrow Function'
            console.log(this.title, tag); 
        }); 
    }  
};

video.showTags();
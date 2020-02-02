// Workspace to test code in browser

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
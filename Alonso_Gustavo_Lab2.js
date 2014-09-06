alert("Hello, and Welcome!!");

// Alonso Gustavo
// SDI 1409
// Day 2 Lab

// My variables
var myHomeAddress   = "115 Daisy Ln";    // String data type
var myFavoriteStore = 'Best Buy\'s';     // String data type
var numberOfMiles   = 9.80;              // Number data type
var trafficjam		= true;				 // Boolean data type

// My confirm
trafficjam    = confirm("Was there a traffic jam? \nClick OK for Yes, Cancel for No");
myHomeAddress = prompt("Enter your new home address:", "2810 Summer Wind Dr");
numberOfMiles = parseFloat(prompt("How far is it to Best Buy?", "5.00"));

// My outputs
console.log("I live at " + myHomeAddress   + ".");
console.log("I shop at " + myFavoriteStore + ".");
console.log("It's "      + numberOfMiles   + " miles to the store.");
console.log("It's "      + trafficjam      + " That there is a traffic jam.");

numberOfMiles = numberOfMiles + 4.80;
console.log(numberOfMiles);
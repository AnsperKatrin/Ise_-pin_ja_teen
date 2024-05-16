//https://playcode.io
//https://developer.chrome.com/

//1. Create a var that stores the name that user enters via prompt.
var name = prompt("What is your name? ");

//2. Capitalise the first letter of their name.
//a. isolate the first char
var firstChar = name.slice(0,1);

//b. turn the rest of the name
var upperCaseFirstChar = firstChar.toUpperCase();

//c. isolate the rest  of the name
var restOfName = name.slice(1,name.length);

//d. concactenate the first char with the rest of the char
var capitalisedName = upperCaseFirstChar + restOfName;

//3. We use the capitalised version of their name ro greet when using an alert
alert("Hello, " + capitalisedName);


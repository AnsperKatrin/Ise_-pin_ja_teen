//1. Party guests

 var guestlist = ["Angela", "Jack", "Pam", "James", "Laura", "Jason"];
var guestName = ("What is your name? ");
if (guestlist.includes(guestName)){
    alert("Welcome!");
} else {
    alert("Sorry, maybe next time.");
};

//2. FizzBuzz game

var output = [];
var count = 1;

function fizzBuzz(){

if (count % 3 === 0 && count % 5 === 0) {
output.push("FizzBuzz");  //.push- lisab elemendi loppu
} if (count % 3 === 0) {
    output.push("Fizz");
} else if(count % 5 ===0) {
    output.push("Buzz");
} else {
    output.push(count);
}

count++; //count = count + 1
    
console.log(output);
};


    


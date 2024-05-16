var n = Math.random();
n = n * 6;
n = Math.floor(n) + 1;
console.log(n);

//The Math.floor() static method always rounds down and returns the largest integer less than or equal to a given number.
//The Math.random() method returns a random floating point number between 0 (inclusive) and 1 (exclusive).

//Love Score Calculator
prompt("What is your name? ");
prompt("What is their name? ");

var loveScore = Math.random() * 100;
loveScore = Math.floor(loveScore) + 1; //+1 sest ss on viimane arv ka
alert("Your love score is " + loveScore + "%.");



/* if (track === "clear") {
    goStraight();
} else {
    turnRight();
} */

//Love Score Calculator
prompt("What is your name? ");
prompt("What is their name? ");

var loveScore = Math.random() * 100; //The Math.random() method returns a random floating point number between 0 (inclusive) and 1 (exclusive)
loveScore = Math.floor(loveScore) + 1; //1-100
alert("Your love score is " + loveScore + "%");

 if (loveScore > 70){
    alert("Your love score is " + loveScore + "%." + "You love each other like Kanye loves Kanye.")
 } if (loveScore > 30 && lovescore <= 70){ //&&-and
    alert("Your love score is " + lovescore + "%.")
 } if (loveScore <= 30){
    alert("Your love score is " + lovescore + "%." + "You go together like oil and water.")
 } else {
    alert("Your love score is " + loveScore + "%.")
 };
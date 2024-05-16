var i = 1;

while(i<2) {
    console.log(i);
    i++; //suurendab
}

//2. FizzBuzz game

var output = [];
var count = 1;

function fizzBuzz(){

while (count <= 100) { //kuni prg 100ni

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
    }
    console.log(output);
};

//3. Bottles
// https://www.99-bottles-of-beer.net/lyrics.html

var numberOfBottles = 99

while (numberOfBottles >= 0) {
    var bottleWord = "bottle";
    if (numberOfBottles === 1) {
        bottleWord = "bottles";
    } 

    console.log(numberOfBottles + " " + bottleWord + " of beer on the wall");
    console.log(numberOfBottles + " " + bottleWord + " of beer,");
    console.log("Take one down, pass it around,");
	numberOfBottles--;
    console.log(numberOfBottles + " " + bottleWord + " of beer on the wall.");
};
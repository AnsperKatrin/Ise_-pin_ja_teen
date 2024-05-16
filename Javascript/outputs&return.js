/* function getMilk (money){
    return money % 1.5;
}
var change = getMilk(4); */

function getMilk(money){
    console.log("leaveHouse");
    console.log("moveRight");
    console.log("moveRight");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveRight");
    console.log("moveRight");

console.log("buy " + calcBottles(money, 1.5) + " bottles of milk");

    console.log("moveLeft");
    console.log("moveLeft");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveLeft");
    console.log("moveLeft");
    console.log("enterHouse");

    return money % 1.5; //Remainder of this division
}

function calcBottles(startingMoney, costBottle){
    var numberOfBottles = Math.floor(startingMoney / costBottle);
    return numberOfBottles;
}

function calcChange(startingMoney, costPerBottle){
    var change = startingMoney % costPerBottle;
    return change;
}

console.log("Hello, here is your " + getMilk(5) + " change"); //number of how much money you have
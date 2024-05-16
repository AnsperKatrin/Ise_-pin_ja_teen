//Create your function below this line.
//The first parameter should be the weight and the second should be the height.

function bmiCalculator(weight, height){
    var bmi = weight / Math.pow(height, 2); //.pow- power-tehakse enne jagamist
    return Math.round(bmi);
}


/* If my weight is 65Kg and my height is 1.8m, I should be able to call your function like this:

var bmi = bmiCalculator(65, 1.8); 

bmi should equal 20 when it's rounded to the nearest whole number.

*/
var mbi = bmiCalculator(60, 1.73);
console.log(bmi);

//The Math.pow() static method returns the value of a base raised to a power.
//The Math.round() method rounds a number to the nearest integer.



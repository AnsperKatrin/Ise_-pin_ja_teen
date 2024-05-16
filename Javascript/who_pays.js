var names = ['Angela', 'Ben', 'Jenny', 'Michael', 'Chloe'];

function whosPaying(names) {
  var numberOfPeople = names.length;
  var randomPersonPosition = Math.floor(Math.random() * numberOfPeople); //0-0.9999
  var randonPerson = names[randomPersonPosition];

  return randomPerson + ' is going to buy lunch today!';
};
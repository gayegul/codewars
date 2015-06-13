function highAndLow(numbers) {
  numbers = numbers.split(" ");
  var high = Number(numbers[0]);
  var low = Number(numbers[0]);
  for(var i = 0; i < numbers.length; i++) {
    if(Number(numbers[i]) > high) {
      high = Number(numbers[i]);
    }
    else if(Number(numbers[i]) < low) {
      low = Number(numbers[i]);
    }
  }
  return high + " " + low;
}


// A more elegant solution using .map() & .apply() from another coder

function highAndLow(numbers) {
  numbers = numbers.split(' ').map(Number);
  return Math.max.apply(0, numbers) + ' ' + Math.min.apply(0, numbers);
}

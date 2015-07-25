/* Create a function named "rotate" that takes an array and
returns a new one with the elements inside rotated n spaces.
If n is greater than 0 it should rotate the array to the right.
If n is less than 0 it should rotate the array to the left.
If n is 0, then it should return the array unchanged.
*/

function rotate(array, n) {
  var array2 = [];
  var length = array.length
  for(var i = 0; i < length; i++) {
    if(n >= 0 || n > length) {
      array2[(i + n) % length] = array[i];
    }
    else {
      array2[(length + i + n) % length] = array[i];
    }
  }
  return array2;
}

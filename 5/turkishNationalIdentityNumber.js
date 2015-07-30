function checkValidTrNumber(n) {

  var arr = n.toString().split("").map(Number);
  if(!isNaN(arr)) return false;
  else if(arr.length !== 11) return false;
  else if(arr[0] === 0) return false;

  var firstBatch = arr[0] + arr[2] + arr[4] + arr[6] + arr[8];
  var secondBatch = arr[1] + arr[3] + arr[5] + arr[7];
  if((firstBatch * 7 - secondBatch) % 10 !== arr[9]) return false;

  var firstTenNumbers = arr[0] + arr[1] + arr[2] + arr[3] + arr[4] + arr[5] + arr[6] + arr[7] + arr[8] + arr[9];
  if(firstTenNumbers % 10 !== arr[10]) return false;
  return true;
}

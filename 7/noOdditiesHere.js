function noOdds(values) {
  var result = [];
  values.map(function(values) {
    if(!(values%2)) {
      result.push(values);
    }
  });
  return result;
}

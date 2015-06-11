function keysAndValues(data) {
  var result = [];
  var keys = [];
  var values = [];
  for(var item in data) {
    keys.push(item);
    values.push(data[item]);
  }
  result.push(keys);
  result.push(values);
  return result;
}

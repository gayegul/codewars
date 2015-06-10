function createDict(keys, values) {
  var result = {};
  for(var i = 0; i < keys.length; i++) {
    result[keys[i]] = values[i] === undefined ? null : values[i];
  }
  return result;
}

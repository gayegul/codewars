function duplicateCount(text) {
  text = text.toLowerCase();
  var lettersSeen = {};
  var maxNum = 0;
  for (var i = 0; i < text.length; i++) {
    if (!lettersSeen[text[i]]) {
      lettersSeen[text[i]] = 1;
    }
    else if(lettersSeen[text[i]] === 1) {
      lettersSeen[text[i]]++;
      maxNum++;
    }
  }
  return maxNum;
}

function findSecretMessage(paragraph) {
  var seenWords = {};
  var words = paragraph.toLowerCase().split(/[. ]/);
  var result = "";
  for(var i = 0; i < words.length; i++) {
    if(seenWords[words[i]]) {
      result += " " + words[i];
    } else {
      seenWords[words[i]] = words[i];
    }
  }
  return result;
}

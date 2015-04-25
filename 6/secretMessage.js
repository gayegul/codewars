function findSecretMessage(paragraph) {
  var seenWords = {};
  var words = paragraph.toLowerCase().replace(/\W+/g,' ').split(/\s+/);
  var result = "";
  var space = "";

  for(var i = 0; i < words.length; i++) {
    if (!seenWords[words[i]] && seenWords[words[i]] !== "") {
      seenWords[words[i]] = 1;
    } else if(seenWords[words[i]] === 1) {
      result += space + words[i];
      space = " ";
      seenWords[words[i]]++;
    } else {
      seenWords[words[i]]++;
    }
  }
  
  return result;
}

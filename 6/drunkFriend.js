function decode(str) {
  var message = "";
  var alp = "abcdefghijklmnopqrstuvwxyz";
  var alpCaps = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  if(typeof str !== "string") {
    return "Input is not a string";
  }

  for(var i = 0; i < str.length; i++) {
    if(alp.indexOf(str[i]) != -1) {
       message += alp[25 - alp.indexOf(str[i])];
    }
    else if(alpCaps.indexOf(str[i]) != -1) {
        message += alpCaps[25 - alpCaps.indexOf(str[i])];
    }
    else {
      message += str[i];
    }
  }
  return message;
}

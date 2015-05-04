// my solution

var counter = 0;
var websites = [];
while(counter < 1000) {
  websites.push("codewars");
  counter++;
}

// a better solution

var websites = [];
while (websites.length < 1000) {
  websites.push("codewars");
}

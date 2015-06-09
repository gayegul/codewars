function toCurrency(price) {
  price = price.toString().split("");
  console.log(price);
  var counter = 0;
  for(var i = price.length - 1; i >= 0; i--) {
    if(counter !== 0 && counter % 3 === 0) {
      price[i] += ",";
    }
    counter++;
  }
  return price.join("");
}

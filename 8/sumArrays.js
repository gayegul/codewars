function sum(numbers) {
    "use strict";
    var result = 0;
    for (var i = 0 ; i < numbers.length; i++) {
      result += numbers[i];
    }
    return result;
};

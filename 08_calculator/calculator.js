const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const sum = function (array) {
  const total = array.reduce((currentTotal, number) => {
    return currentTotal + number;
  }, 0)
  return total;
};

const multiply = function (array) {//[2, 4]
  const total = array.reduce((currentTotal, number) => {
    return currentTotal * number;
  }, 1)
  return total;
};

const power = function (a, powerOf) {
  return a ** powerOf;
};

const factorial = function (a) {//a=5
  let total = 1;
  if (a === 0 || a === 1) {
    return 1;
  } else {
    for (let i = a; i > 1; i -= 2) {
      total *= i * (i - 1);

    }
    return total;
  }


};
//30
//12
//2

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};

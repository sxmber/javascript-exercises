const convertToCelsius = function (f) {
  console.log(Math.round((f - 32) * (5 / 9) * 10) / 10);
  return Math.round((f - 32) * (5 / 9) * 10) / 10;

};

const convertToFahrenheit = function (c) {
  console.log(Math.round((c * (9 / 5) + 32) * 10) / 10)
  return Math.round((c * (9 / 5) + 32) * 10) / 10;
};

convertToCelsius(100);
convertToFahrenheit(13);
// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};

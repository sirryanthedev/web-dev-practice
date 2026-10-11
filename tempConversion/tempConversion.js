const convertToCelsius = function (temperatureFahrenheit) {
  return Number(((temperatureFahrenheit - 32) / 1.8).toFixed(1));
};

const convertToFahrenheit = function (temperatureCelsius) {
  return Number((temperatureCelsius * 1.8 + 32).toFixed(1));
};
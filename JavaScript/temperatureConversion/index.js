const input = document.getElementById("temperatureInput");
const toCelsius = document.getElementById("toCelsius");
const toFahrenheit = document.getElementById("toFahrenheit");
const form = document.getElementById("submitForm");
const result = document.getElementById("result");
let temp;

form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("WAAAAAAAAAAAAAAAAAAAAAAAA")
  temp = Number(input.value);
  if (toCelsius.checked) {
    result.textContent = `${temp} Fahrenheit is ${((temp - 32) * 5) / 9} Celsius`;
  }else if (toFahrenheit.checked) {
    result.textContent = `${temp} Celsius is ${(temp * 9) / 5 + 32} Fahrenheit`;
  }
});
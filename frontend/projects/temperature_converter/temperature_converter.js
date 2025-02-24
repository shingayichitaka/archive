const celsiusEl = document.querySelector("#celsius");
const message = document.querySelector(".message");
const btn = document.querySelector(".calc");

const celsiusToFarenheit = (celsius) =>
  Number((celsius * (9 / 5) + 32).toFixed(2));

const updateUI = function (temp) {
  message.textContent = temp;
};

const clearUI = function () {
  setTimeout(() => {
    message.textContent = "";
  }, 5000);
};

btn.addEventListener("click", function () {
  const celsius = Number(celsiusEl.value);
  const farenheit = celsiusToFarenheit(celsius);
  updateUI(farenheit);
  clearUI();
});

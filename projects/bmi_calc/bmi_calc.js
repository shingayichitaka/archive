const weightInputEl = document.querySelector("#weight");
const heightInputEl = document.querySelector("#height");
const calcBtnEl = document.querySelector(".calc");
const messageEl = document.querySelector(".message");

const calcBMI = function () {
  const weight = Number(weightInputEl.value);
  const height = Number(heightInputEl.value);
  const bmi = Number((weight / height ** 2).toFixed(2));
  return bmi;
};

const clearMessage = function () {
  setTimeout(() => {
    messageEl.textContent = "";
  }, 10000);
};

calcBtnEl.addEventListener("click", function () {
  const bmi = calcBMI();
  if (isNaN(bmi)) {
    messageEl.textContent = "Missing Value";
    clearMessage();
  } else {
    messageEl.textContent = bmi;
    clearMessage();
  }
});

export { calcBMI };

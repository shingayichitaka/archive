const weightInputEl = document.querySelector("#weight");
const heightInputEl = document.querySelector("#height");
const calcBtnEl = document.querySelector(".calc");
const messageEl = document.querySelector(".message");

const calcBMI = function (weight, height) {
  const bmi = Number((weight / height ** 2).toFixed(2));
  return bmi;
};

const getBMIRange = function (bmi) {
  if (bmi < 18.5) return "Under-weight";
  if (bmi < 25) return "Normal-weight";
  if (bmi < 30) return "Over-weight";
  return "Obese";
};

const createBMIResult = function (bmi) {
  const result = `${bmi} -- ${getBMIRange(bmi)}`;
  return result;
};

const generateBMI = function () {
  const weight = Number(weightInputEl.value);
  const height = Number(heightInputEl.value);
  return calcBMI(weight, height);
};

const clearMessage = function () {
  setTimeout(() => {
    messageEl.textContent = "";
  }, 10000);
};

calcBtnEl.addEventListener("click", function () {
  const bmi = generateBMI();
  if (isNaN(bmi)) {
    messageEl.textContent = "Missing Value";
    clearMessage();
  } else {
    messageEl.textContent = createBMIResult(bmi);
    clearMessage();
  }
});

export { calcBMI };

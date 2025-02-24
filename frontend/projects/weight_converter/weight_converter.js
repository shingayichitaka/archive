const kgsEl = document.querySelector("#kgs");
const message = document.querySelector(".message");
const btn = document.querySelector(".calc");

const kgsToLbs = (kgs) => Number((kgs * 2.205).toFixed(2));

const updateUI = function (lbs) {
  message.textContent = lbs;
};

const clearUI = function () {
  setTimeout(() => {
    message.textContent = "";
  }, 5000);
};

btn.addEventListener("click", function () {
  const kgs = Number(kgsEl.value);
  const lbs = kgsToLbs(kgs);
  updateUI(lbs);
  clearUI();
});

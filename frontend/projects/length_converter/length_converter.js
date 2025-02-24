const cmEl = document.querySelector("#cm");
const message = document.querySelector(".message");
const btn = document.querySelector(".calc");

const cmToMeters = (cm) => Number((cm / 100).toFixed(2));

const updateUI = function (temp) {
  message.textContent = temp;
};

const clearUI = function () {
  setTimeout(() => {
    message.textContent = "";
  }, 5000);
};

btn.addEventListener("click", function () {
  const cm = Number(cmEl.value);
  const meters = cmToMeters(cm);
  updateUI(meters);
  clearUI();
});

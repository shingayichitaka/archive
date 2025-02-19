const princpleEl = document.querySelector("#principle");
const rateEl = document.querySelector("#rate");
const timeEl = document.querySelector("#time");

const btn = document.querySelector(".calc");
const message = document.querySelector(".message");

const calcInterest = function (principle, rate, time) {
  return (principle * rate * time) / 100;
};

const clearUI = function () {
  setTimeout(() => {
    message.textContent = "";
  }, 5000);
};

btn.addEventListener("click", function () {
  const princple = Number(princpleEl.value);
  const rate = Number(rateEl.value);
  const time = Number(timeEl.value);

  message.textContent = calcInterest(princple, rate, time);
});

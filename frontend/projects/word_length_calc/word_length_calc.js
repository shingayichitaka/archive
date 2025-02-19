const wordEl = document.querySelector("#word");
const btn = document.querySelector(".calc");
const message = document.querySelector(".message");

const calcWordLength = function (word) {
  return word.length;
};

const writeMessage = function (input) {
  message.textContent = input;
  setTimeout(() => {
    message.textContent = "";
  }, 3000);
};

const clearUI = function () {
  setTimeout(() => {
    message.textContent = "";
  }, 10000);
};

btn.addEventListener("click", function () {
  const word = wordEl.value;
  const length = calcWordLength(word);

  if (word) {
    writeMessage(length);
    clearUI();
  } else {
    writeMessage("Please enter a valid word!");
  }
});

export { calcWordLength };

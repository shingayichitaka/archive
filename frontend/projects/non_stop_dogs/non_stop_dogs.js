const dogsContainer = document.querySelector(".dogs");
const generateBtn = document.querySelector(".generate");
const clearBtn = document.querySelector(".clear");

const getDog = async function () {
  const res = await fetch("https://dog.ceo/api/breeds/image/random");
  const { message } = await res.json();
  return message;
};

const renderDog = async function () {
  const dog = await getDog();
  const html = `
    <div class="dog">
        <img src=${dog} alt="dog picture" />
    </div>
  `;
  dogsContainer.insertAdjacentHTML("afterbegin", html);
};

let populateDogs = null;

generateBtn.addEventListener("click", function () {
  populateDogs = setInterval(renderDog, 3000);
});

clearBtn.addEventListener("click", function () {
  clearInterval(populateDogs);
  const dogs = document
    .querySelectorAll(".dog")
    .forEach((value) => value.remove());
});

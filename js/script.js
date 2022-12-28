// Codejam

(function () {
  const ancientsContainer = document.querySelector(".ancients-container");
  const ancientCards = document.querySelectorAll(".ancient-card");
  const ancientCard = document.querySelector(".ancient-card");
  const ancientCardsArray = Array.from(ancientCards);
  const difficultyContainer = document.querySelector(".difficulty-container");
  const currentState = document.querySelector(".current-state");
  const difficulties = document.querySelectorAll(".difficulty");
  const difficultiesArray = Array.from(difficulties);
  const shuffleButton = document.querySelector(".shuffle-button");
  const deck = document.querySelector(".deck");
  const stackOfCards = [];

  const stackOfCards1 = [];
  const stackOfCards2 = [];
  const stackOfCards3 = [];
  let randomBlueNum = getRandomNum(0, 3);
  let randomGreenNum = getRandomNum(0, 4);
  let randomBrownNum = getRandomNum(0, 4);

  const lastCard = document.querySelector(".last-card");

  function getRandomNum(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  window.addEventListener("load", () => {
    difficultyContainer.classList.add("active");
    currentState.style.visibility = "hidden";
  });

  let selectedCard;

  ancientsContainer.onclick = function (event) {
    let target = event.target;

    if (target.className != "ancient-card") return;
    highlight(target);
    openDiff();
  };

  function highlight(sc) {
    if (selectedCard) {
      selectedCard.classList.remove("active");
    }
    selectedCard = sc;
    selectedCard.classList.add("active");
  }

  function openDiff() {
    difficultyContainer.classList.remove("active");
  }

  let selectedDiff;
  difficultyContainer.onclick = function (event) {
    let target = event.target;
    if (target.className != "difficulty") return;
    highlightDiff(target);
    openSB();
  };

  function highlightDiff(diff) {
    if (selectedDiff) {
      selectedDiff.classList.remove("active");
    }
    selectedDiff = diff;
    selectedDiff.classList.add("active");
  }

  function openSB() {
    shuffleButton.classList.add("active");
    var urlForMithicGreen = `https://raw.githubusercontent.com/marykashkan/eldritch-codejam/main/assets/MythicCards/green/${greenEasy[randomGreenNum]}.png`;
    var urlForMithicBlue = `https://raw.githubusercontent.com/marykashkan/eldritch-codejam/main/assets/MythicCards/blue/${blueEasy[randomBlueNum]}.png`;
    var urlForMithicBrown = `https://raw.githubusercontent.com/marykashkan/eldritch-codejam/main/assets/MythicCards/brown/${brownEasy[randomBrownNum]}.png`;
    console.log(urlForMithicGreen);
    getRandomNum(0, 3);
    getRandomNum(0, 4);
    //stackOfCards3.push(urlForMithicBlue);
    stackOfCards3.push(urlForMithicGreen);

    stackOfCards3.push(urlForMithicGreen);
    stackOfCards3.push(urlForMithicBrown);

    stackOfCards3.push(urlForMithicBrown);

    stackOfCards3.push(urlForMithicBrown);

    stackOfCards3.push(urlForMithicBrown);
  }

  shuffleButton.addEventListener("click", () => {
    shuffleButton.classList.remove("active");
    currentState.style.visibility = "visible";
    document.querySelector(".dot-green1").textContent = "1";
    document.querySelector(".dot-blue1").textContent = "1";
    document.querySelector(".dot-brown1").textContent = "2";
    document.querySelector(".dot-green2").textContent = "2";
    document.querySelector(".dot-blue2").textContent = "1";
    document.querySelector(".dot-brown2").textContent = "3";
    document.querySelector(".dot-green3").textContent = "2";
    document.querySelector(".dot-blue3").textContent = "0";
    document.querySelector(".dot-brown3").textContent = "4";
  });

  const greenEasy = ["green1", "green12", "green16", "green17", "green18"];
  const blueEasy = ["blue3", "blue4", "blue5", "blue10"];
  const brownEasy = ["brown11", "brown12", "brown13", "brown14", "brown21"];

  deck.addEventListener("click", changeCart);

  function changeCart() {
    lastCard.style.backgroundImage = `url(${stackOfCards3.pop()})`;
  }

  console.log(randomGreenNum, randomBlueNum, randomBrownNum);
})();

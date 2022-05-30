import { winnerMessage, loserMessage } from "../newMain.js";

const createCards = (data) => {
  const doubleCards = data.items.concat(data.items);
  const allCards = [];
  doubleCards.forEach((item, index) => {
    let card = document.createElement("div");
    card.innerHTML = `  <div class="back">
                        <img src="images/logoblancoback.jpg" id="logo${index}" class="back" alt="back">
                        </div>
                        <div class="image">
                        <img src="${item.image}" id="${item.id}" class="image" alt="marvelhero">
                        </div>`;
    card.className = "super";
    card.setAttribute("data-marvel", `${item.id}`);
    allCards.push(card);
  });
  return allCards;
};

const shuffle = (allCards) => {
  //Se declara la función shuffle para barajar las tarjetas usando el algoritmo de Fisher - Yates
  let i = allCards.length - 1;
  let temp = 0;
  let randomIndex = 0;
  while (i >= 0) {
    randomIndex = Math.floor(Math.random() * (i + 1));
    temp = allCards[randomIndex];
    allCards[randomIndex] = allCards[i];
    allCards[i] = temp;
    i--;
  }
};

let firstCard;
let secondCard;
let cardNum = 1;
function flipCards() {
  //Se declara la función flipCards para hacer flip de las tarjetas
  if (this.classList.contains("flip")) return; // Si la clase flip ya está activa no se hace nada
  this.classList.add("flip");
  if (cardNum === 1) {
    firstCard = this;
    cardNum = 2;
  } else {
    secondCard = this;
    cardNum = 1;
    if (firstCard.dataset.marvel === secondCard.dataset.marvel) {
      matchCards(firstCard, secondCard);
    } else {
      noMatchCards(firstCard, secondCard);
    }
  }
}

let lessLives = 3;
let cardFlip = 0;
const matchCards = (firstCard, secondCard) => {
  cardFlip++;
  firstCard.removeEventListener("click", flipCards);
  secondCard.removeEventListener("click", flipCards);
  if(cardFlip === 3){
      endMessage();
  }
};

let lives = document.querySelector(".container-lives");
const noMatchCards = (firstCard, secondCard) => {
  setTimeout(() => {
    lives.removeChild(lives.firstElementChild);
    lessLives--;
    firstCard.classList.remove("flip");
    secondCard.classList.remove("flip");
    if(lessLives === 0){
        endMessage();
    }
  }, 1000);
};



const endMessage = () => {
    if(cardFlip === 3){
        winnerMessage(lessLives);
        lessLives = 3;
        cardFlip = 0;
    }
    if(lessLives === 0){
        loserMessage();
        lessLives = 3;
        cardFlip = 0;
    }
};

export { createCards, shuffle, flipCards };

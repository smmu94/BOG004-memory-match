import getData from "./components/getData.js";
import { createCards, shuffle, flipCards } from "./components/functions.js";

let allCards = [];
// eslint-disable-next-line no-unused-vars
// window.data =() => {
getData()
  .then((data) => {
    allCards = createCards(data);
    init();
    modalWindow();
    showSecondView();
    document
      .querySelector(".play_again")
      .addEventListener("click", () => windowReset());
    // Al hacer click en el ícono 'EXIT' regresa a la pantalla pricipal
    document.querySelector(".exit").addEventListener("click", () => {
      location.reload();
    });
  })
  .catch((error) => console.log(error));
// };
const init = () => {
  shuffle(allCards);
    allCards.forEach((card) =>
      document.getElementById("container").appendChild(card)
    );
    allCards.forEach((card) => card.addEventListener("click", flipCards));
}


const modalWindow = () => {
  //  Al hacer click en el ícono '?' se muestra la venta de instrucciones
  document.querySelector(".icon").addEventListener("click", () => {
    return document.querySelector(".modalWindow").style.display = "block";
  });
  // Al hacer click en el ícono 'x' se cierra la venta de instrucciones
  document.querySelector(".close").addEventListener("click", () => {
    return document.querySelector(".modalWindow").style.display = "none";
  });
};

const getLives = () => {
  let lives;
  for (let i = 0; i < 10; i++) {
    lives = document.createElement("img");
    lives.className = "live";
    lives.setAttribute("src", "images/logovidas.png");
    document.querySelector(".container-lives").appendChild(lives);
  }
}

const showSecondView = () => {
  let alias;
  document.querySelector(".play").addEventListener("click", () => {
    document.getElementById("window1").style.display = "none";
    document.getElementById("sideleft").style.display = "none";
    document.getElementById("sideright").style.display = "none";
    document.getElementById("window2").style.display = "block";
    alias = document.getElementById("nickname").value;
    document.querySelector(".alias").innerHTML = `${alias}!`.toUpperCase();
     getLives();
  });
};

const endMessage = (cardFlip, lessLives) => {
      if(cardFlip === 3){
          winnerMessage();
          lessLives = 3;
          cardFlip = 0;
      }
      if(lessLives === 0){
          loserMessage();
          lessLives = 3;
          cardFlip = 0;
      }
  };

const winnerMessage = () => {
  let finished = document.getElementById("finished");
  finished.innerHTML = `Congrats!!! You've Finished the game`;
  const imageEndGame = document.querySelector(".imgend");
  imageEndGame.setAttribute("src", "images/wingame.jpg");
  document.getElementById("endMessage").style.display = "flex";
};

const loserMessage = () => {
  let finished = document.getElementById("finished");
  finished.innerHTML = `Game over! You lost all the lives`;
  const imageEndGame = document.querySelector(".imgend");
  imageEndGame.setAttribute("src", "images/lostgame.jpg");
  document.getElementById("endMessage").style.display = "flex";
};

const windowReset = () => {
  document.querySelector(".container-lives").innerHTML = "";
  document.querySelector("#endMessage").style.display = "none";
  getLives();
  init();
  allCards.forEach((card) => card.classList.remove("flip"));
};

export { endMessage, winnerMessage, loserMessage, modalWindow , getLives, showSecondView, windowReset};

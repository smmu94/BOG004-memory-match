import getData from "./components/getData.js";
import { createCards, shuffle, flipCards } from "./components/functions.js";

getData()
  .then((data) => {
    const allCards = createCards(data);
    console.log(allCards);
    shuffle(allCards);
    const cards = allCards;
    cards.forEach((card) =>
      document.getElementById("container").appendChild(card)
    );
    modalWindow();
    showSecondView();
    cards.forEach((card) => card.addEventListener("click", flipCards));

    document
      .querySelector(".play_again")
      .addEventListener("click", () => windowReset(allCards));
    // Al hacer click en el ícono 'EXIT' regresa a la pantalla pricipal
    document.querySelector(".exit").addEventListener("click", () => {
      location.reload();
    });
  })
  .catch((error) => console.log(error));

const modalWindow = () => {
  //  Al hacer click en el ícono '?' se muestra la venta de instrucciones
  document.querySelector(".icon").addEventListener("click", () => {
    document.querySelector(".modalWindow").style.display = "block";
  });
  // Al hacer click en el ícono 'x' se cierra la venta de instrucciones
  document.querySelector(".close").addEventListener("click", () => {
    document.querySelector(".modalWindow").style.display = "none";
  });
};

const showSecondView = () => {
  document.querySelector(".play").addEventListener("click", () => {
    document.getElementById("window1").style.display = "none";
    document.getElementById("sideleft").style.display = "none";
    document.getElementById("sideright").style.display = "none";
    document.getElementById("window2").style.display = "block";
    let alias = document.getElementById("nickname").value;
    document.querySelector(".alias").innerHTML = `${alias}!`.toUpperCase();

    for (let i = 0; i < 10; i++) {
      let lives = document.createElement("img");
      lives.className = "live";
      lives.setAttribute("src", "images/logovidas.png");
      document.querySelector(".container-lives").appendChild(lives);
    }
  });
};

const winnerMessage = (lessLives) => {
  let finished = document.getElementById("finished");
  finished.innerHTML = `Congrats!!! You've Finished the game with ${lessLives} lives`;
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

const windowReset = (allCards) => {
  document.querySelector(".container-lives").innerHTML = "";
  document.querySelector("#endMessage").style.display = "none";
  shuffle(allCards);
  allCards.forEach((card) => {
    document.getElementById("container").appendChild(card);
  });
  for (let i = 0; i < 10; i++) {
    let lives = document.createElement("img");
    lives.className = "live";
    lives.setAttribute("src", "images/logovidas.png");
    document.querySelector(".container-lives").appendChild(lives);
  }
};

export { winnerMessage, loserMessage };

import {
  createCards,
  shuffle,
  flipCards,
  matchCards,
  noMatchCards,
  endMessage,
} from "./components/App.js";

fetch("../data/marvel/marvel.json")
  // Interfaz que permite traer la data de marvel.json de acuerdo a la ruta
  .then((resp) => resp.json())
  // Promesa que da respuesta al estado del callback
  .then((data) => {
    // Promesa que trae la data y la envía al createCards
    let allCards = createCards(data);
    shuffle(allCards);
    // Se declara la variable allCards que guarda el return de la función createCards
    // y se llama la función shuffle para barajarlas

    allCards.forEach((card) =>
      document.getElementById("container").appendChild(card)
    );
    
    let lives = 0;
    let cardFlip = 0;
    let lessLives = 10;
    //Al darle click a cada tarjeta se llama a la funcion flipCards, si las dataset de ambas
    // tarjetas son iguales se llama a la funcion matchCards, si no se llama a la funcion noMatchCards
    allCards.forEach((card) => {
      card.addEventListener("click", () => {
        let firstAndSecond = flipCards(card);
        if (firstAndSecond != undefined) {
          if (
            firstAndSecond[0].dataset.marvel == firstAndSecond[1].dataset.marvel
          ) {
            cardFlip++;
            matchCards();
          } else {
            if (lessLives >= 0) { //Descontar vidas cada nomatch//
              lessLives--;
              lives = document.querySelector(".container-lives");
              lives.removeChild(lives.firstElementChild);
            }
             noMatchCards();
          }
        }
        let counts = endMessage(cardFlip, lessLives, allCards);
        lessLives = counts[1];
        cardFlip = counts[0];
      });
    });
  })
  .catch((err) => console.error(err));
// Se ejecuta en caso de que ocurra alguna falla en las promesas then

// Al hacer click en el botón Play se oculta la ventana 1 y se muestra la ventana 2
document.querySelector(".play").addEventListener("click", () => {
  document.getElementById("window1").style.display = "none";
  document.getElementById("sideleft").style.display = "none";
  document.getElementById("sideright").style.display = "none";
  document.getElementById("window2").style.display = "block";
  let alias = document.getElementById("nickname").value;
  alias.toString();
  document.querySelector(".alias").innerHTML = `${alias}!`.toUpperCase();
});

// Al hacer click en el ícono '?' se muestra la venta de instrucciones
document.querySelector(".icon").addEventListener("click", () => {
  document.querySelector(".modalWindow").style.display = "block";
});
// Al hacer click en el ícono 'x' se cierra la venta de instrucciones
document.querySelector(".close").addEventListener("click", () => {
  document.querySelector(".modalWindow").style.display = "none";
});

// La funcion windowReset resetea las pantallas
const windowReset = () => {
  document.querySelector("#endMessage").style.display = "none";
  let lives = [];
  for (let i = 0; i < 10; i++) {
    lives[i] = document.createElement("img");
    lives[i].className = "live";
    lives[i].setAttribute("src", "images/logovidas.png");
    document.querySelector(".container-lives").appendChild(lives[i]);
  }
};
// Al hacer click en el ícono 'PLAY AGAIN' regresa al tablero de memoria reseteado
document
  .querySelector(".play_again")
  .addEventListener("click", () => windowReset());

// Al hacer click en el ícono 'EXIT' regresa a la pantalla pricipal
document.querySelector(".exit").addEventListener("click", () => {
  document.getElementById("window2").style.display = "none";
  document.getElementById("window1").style.display = "block";
  document.getElementById("sideleft").style.display = "block";
  document.getElementById("sideright").style.display = "block";
  windowReset();
  document.getElementById("nickname").value = "";
});

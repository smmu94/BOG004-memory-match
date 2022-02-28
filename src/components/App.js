const createCards = (data) => {
  // Se define la función createCards y tiene como parámetro la data desde el fetch realizado en el main.js

  let doubleCards = data.items.concat(data.items);
  // Se emplea el método concat para duplicar la data sobre las tarjetas y se guardan en la variable doubleCards

  let allCards = [];
  for (let i = 0; i < doubleCards.length; i++) {
    // Un ciclo for que recorrerá la data para crear los elementos html de las tarjetas
    let card = document.createElement("div");
    card.innerHTML = `<div class="back">
                        <img src="images/logoblancoback.jpg" id="logo${i}" class="back" alt="back">
                      </div>
                      <div class="image">
                        <img src="${doubleCards[i].image}" id="${doubleCards[i].id}" class="image" alt="marvelhero">
                      </div> `;
    card.className = "super";
    card.setAttribute("data-marvel", `${doubleCards[i].id}`);
    // Se le asigna un atributo dataset a las tarjetas los cuales guardarán los id obtenidos de la data
    allCards.push(card);
    //Se le hace un push al arreglo allCards para almacenar las tarjetas creadas
  }
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

let count = -1;
let firstCard;
let secondCard;
let lockBox = false; // lockBox se empleará para evitar seleccionar mas de dos tarjetas
const flipCards = (card) => {
  // Se declara la función flipCards para que a cada dos tarjetas se les añada la clase "flip",
  // Se retornan las tarjetas seleccionadas
  if (lockBox) return;
  // cuando lockBox sea true no se ejecutará la función
  if (count < 2) {
    count++;
    card.classList.add("flip");
    if (count == 0) {
      firstCard = card;
    } else {
      secondCard = card;
      return [firstCard, secondCard];
    }
  }
};

const matchCards = () => {
  // Se declara la función matchCards, en este caso ya se sabe que las tarjetas son iguales
  // Se les asigna la clase super_disabled para no permitir que se vuelvan a voltear
  firstCard.className = "super_disabled";
  secondCard.className = "super_disabled";
  count = -1;
  lockBox = false; //se vuelve a hacer false el lockBox para poder seleccionar nuevas tarjetas de a dos
return [firstCard,secondCard];
};

const noMatchCards = () => {
  // Se declara la función noMatchCards, en la cual se remueve la clase "flip", es decir
  // las tarjetas regresan a su posición inicial
  lockBox = true;
  setTimeout(() => {
    //Un setTimeout para dejar que se visualicen las tarjetas por un tiempo
    // antes de que vuelvan a girar
    firstCard.classList.remove("flip");
    secondCard.classList.remove("flip");
    lockBox = false;
    return [firstCard,secondCard];
  }, 1300);
  count = -1;
};

const endMessage = (cardFlip, lessLives, allCards) => {
  //Se declara la función endMessage la cual recibe el número de matchs y no matchs
  //Emite un mensaje dependiendo si ganó o perdió

  if (cardFlip == 10 && lessLives > 0) {  //Mensaje Ganador //
    let finished = document.getElementById("finished");
    finished.innerHTML = `Congrats!!! You've Finished the game with ${lessLives} lives`;
    const imageEndGame = document.querySelector(".imgend");
    imageEndGame.setAttribute("src", "images/wingame.jpg");
    //Reiniciar tarjetas y vidas//
    cardFlip = 0;
    lessLives = 10;
    allCards.forEach((card) => card.className = "super");
    document.getElementById("endMessage").style.display = "flex";

  } else if (lessLives == 0) { //Mensaje Perdedor //
    let finished = document.getElementById("finished");
    finished.innerHTML = `Game over! You lost all the lives`;
    const imageEndGame = document.querySelector(".imgend");
    imageEndGame.setAttribute("src", "images/lostgame.jpg");
    //Reiniciar tarjetas y vidas//
    cardFlip = 0;
    lessLives = 10;
    allCards.forEach((card) => card.className = "super");
    document.getElementById("endMessage").style.display = "flex";
  }

  return [cardFlip, lessLives];
};

export {
  createCards,
  shuffle,
  flipCards,
  matchCards,
  noMatchCards,
  endMessage,
};

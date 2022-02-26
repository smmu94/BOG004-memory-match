

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
  // Se les remueve la acción click para queden destapadas
  console.log("match!");
  count = -1;
  lockBox = false; //se vuelve a hacer false el lockBox para poder seleccionar nuevas tarjetas de a dos
};

const noMatchCards = () => {
  // Se declara la función noMatchCards, en la cual se remueve la clase "flip", es decir
  // las tarjetas regresan a su posición inicial
  lockBox = true;
  console.log("its not a match");
  setTimeout(() => {
    //Un setTimeout para dejar que se visualicen las tarjetas por un tiempo
    // antes de que vuelvan a girar
    firstCard.classList.remove("flip");
    secondCard.classList.remove("flip");
    lockBox = false;
  }, 1300);
  count = -1;
};

const endMessage = (cardFlip, lessLives) => {
  //Se declara la función endMessage la cual recibe el número de matchs y no matchs 
  //Emite un mensaje dependiendo si ganó o perdió

  if (cardFlip == 10 && lessLives > 0) {
    let finished = document.querySelector("#finished");
    finished.innerHTML = `Congrats!!! You've Finished the game with ${lessLives} lives`;
    const imageEndGame = document.createElement("img");
    imageEndGame.setAttribute("src","images/wingame.jpg");
    imageEndGame.className = "imgwin";
    document.querySelector(".endGame").appendChild(imageEndGame);
    cardFlip = 0; lessLives=10;
    document.getElementById("endMessage").style.display = "block";

  } else if (lessLives == 0) {
    let finished = document.querySelector("#finished");
    finished.innerHTML = `Game over! You lost all the lives`;
    const imageEndGame = document.createElement("img");
    imageEndGame.setAttribute("src","images/lostgame.jpg");
    imageEndGame.className = "imglose";
    document.querySelector(".endGame").appendChild(imageEndGame);
    cardFlip = 0; lessLives=10;
    document.getElementById("endMessage").style.display = "block";
  }
  return [cardFlip,lessLives];
};

export { createCards, shuffle, flipCards, matchCards,noMatchCards,endMessage };

import {
  createCards,
  shuffle,
} from "./components/App.js";

fetch("./data/marvel/marvel.json")
  // Interfaz que permite traer la data de marvel.json de acuerdo a la ruta
  .then((resp) => resp.json())
  // Metodo que da respuesta al estado del callback
  .then((data) => {
    // Metodo que trae la data y la envía al createCards
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
            matchCards(firstAndSecond);
          } else {
            if (lessLives >= 0) { //Descontar vidas cada nomatch//
              lessLives--;
              lives = document.querySelector(".container-lives");
              lives.removeChild(lives.firstElementChild);
            }
            noMatchCards(firstAndSecond);
          }
        }
        let counts = endMessage(cardFlip, lessLives, allCards);
        lessLives = counts[1]; 
        cardFlip = counts[0];
      });
    });
  })
  .catch((err) => console.error(err));
// Se ejecuta en caso de que ocurra alguna falla en los métodos then


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

const matchCards = (firstAndSecond) => {
  // Se declara la función matchCards, en este caso ya se sabe que las tarjetas son iguales
  // Se les asigna la clase super_disabled para no permitir que se vuelvan a voltear
  firstAndSecond[0].className = "super_disabled";
  firstAndSecond[1].className = "super_disabled";
  count = -1;
  lockBox = false; //se vuelve a hacer false el lockBox para poder seleccionar nuevas tarjetas de a dos
return firstAndSecond;
};

const noMatchCards = (firstAndSecond) => {
  // Se declara la función noMatchCards, en la cual se remueve la clase "flip", es decir
  // las tarjetas regresan a su posición inicial
  lockBox = true;
  setTimeout(() => {
    //Un setTimeout para dejar que se visualicen las tarjetas por un tiempo
    // antes de que vuelvan a girar
    firstAndSecond[0].classList.remove("flip");
    firstAndSecond[1].classList.remove("flip");
    lockBox = false;
    return firstAndSecond;
  }, 800);
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
    cardFlip = 0; lessLives = 10;
    allCards.forEach((card) => card.className = "super");
    document.getElementById("endMessage").style.display = "flex"; 

  } else if (lessLives == 0) { //Mensaje Perdedor //
    let finished = document.getElementById("finished");
    finished.innerHTML = `Game over! You lost all the lives`;
    const imageEndGame = document.querySelector(".imgend");
    imageEndGame.setAttribute("src", "images/lostgame.jpg");
    //Reiniciar tarjetas y vidas//
    cardFlip = 0; lessLives = 10; 
    allCards.forEach((card) => card.className = "super");
    document.getElementById("endMessage").style.display = "flex";
  }
  return [cardFlip, lessLives];
};


// Al hacer click en el botón Play se oculta la ventana 1 y se muestra la ventana 2
document.querySelector(".play").addEventListener("click", () => {
  document.getElementById("window1").style.display = "none";
  document.getElementById("sideleft").style.display = "none";
  document.getElementById("sideright").style.display = "none";
  document.getElementById("window2").style.display = "block";
  let alias = document.getElementById("nickname").value;
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

// La funcion windowReset resetea la pantalla 2
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
document.querySelector(".play_again").addEventListener("click", () => windowReset());

// Al hacer click en el ícono 'EXIT' regresa a la pantalla pricipal
document.querySelector(".exit").addEventListener("click", () => {
  document.getElementById("window2").style.display = "none";
  document.getElementById("window1").style.display = "block";
  document.getElementById("sideleft").style.display = "block";
  document.getElementById("sideright").style.display = "block";
  windowReset();
  document.getElementById("nickname").value = "";
});

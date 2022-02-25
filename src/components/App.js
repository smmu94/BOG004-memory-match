//import { actualizarContadores} from "../main.js";

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

let match;
let noMatch;
let count = -1;
let firstCard;
let secondCard;
let lockBox = false; // lockBox se empleará para evitar seleccionar mas de dos tarjetas
const flipCards = (card,cardFlip,lessLives) => {
  // Se declara la función flipCards para que a cada dos tarjetas se les añada la clase "flip",
  // es decir se voltean, se comparan y se llaman las funciones matchCards() y noMatchCards();

  if (lockBox) return;
  // cuando lockBox sea true no se ejecutará la función
  if (count < 2) {
    count++;
    card.classList.add("flip");
    if (count == 0) {
      firstCard = card;
    } else {
      secondCard = card;
     if (firstCard.dataset.marvel == secondCard.dataset.marvel)
         // Se emplea un operador ternario, si la dataset de ambas cards es igual
          //se llama la funcion matchCards. Si no son iguales se llama "noMatchCards"
     match = matchCards(cardFlip)
    else {noMatch = noMatchCards(lessLives)
  
    }
    
   endMessage(match,noMatch); //Se llama a la funcion endMessage y se le envía el número de matchs totales
   
    //actualizarContadores();
   
   
  }
}
return  [card,match,noMatch];
}


const matchCards = (cardFlip) => {
  // Se declara la función matchCards, en este caso ya se sabe que las tarjetas son iguales
  // Se les remueve la acción click para queden destapadas
  console.log("match!");

  count = -1;
  lockBox = false; //se vuelve a hacer false el lockBox para poder seleccionar nuevas tarjetas de a dos
  cardFlip++;
  return cardFlip;
  
};


const noMatchCards = (lessLives) => {
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
  lessLives--;
  
  return lessLives;
};




const endMessage = (match, noMatch) => {
  // Se declara la función endMessage la cual recibe el número de matchs y si es igual al total
  // de parejas se emite un mensaje ganador
  if (match == 10) {
    document.querySelector("#finish").innerHTML= `You've Finished the game with ${noMatch} lives`;
    document.getElementById("endMessage").style.display = "block";
  }
  else if (noMatch==0) {
    document.querySelector("#finish").innerHTML= `Game over you lost the lives`;
    document.getElementById("endMessage").style.display = "block";
  }
 
};





export { createCards, shuffle, flipCards,endMessage };

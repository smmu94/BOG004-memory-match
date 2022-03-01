
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

export {
  createCards,
  shuffle,
 
};

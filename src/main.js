import { createCards, shuffle, flipCards } from "./components/App.js";

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
    let cardFlip = 0;
    let lessLives = 5;
    
    // const  actualizarContadores = () =>{
    //   cardFlip++;
    //     lessLives--;
    // } 
    
    allCards.forEach((card) =>
      card.addEventListener("click", () =>{  flipCards(card,cardFlip,lessLives)
       
      })
  );
    // Para cada card, al hacer click se llama la función flipCards
    
  })

  .catch((err) => console.error(err));
// Se ejecuta en caso de que ocurra alguna falla en las promesas then

// Al hacer click en el botón Play se oculta la ventana 1 y se muestra la ventana 2
document.querySelector("#play").addEventListener("click", () => {
  document.getElementById("window1").style.display = "none";
  document.getElementById("sideleft").style.display = "none";
  document.getElementById("sideright").style.display = "none";
  document.getElementById("window2").style.display = "block";
  
  let alias = document.getElementById("nickname").value;
 alias.toString();
 console.log(alias);
document.querySelector(".alias").innerHTML= `${alias}!`.toUpperCase();
});





// Al hacer click en el ícono '?' se muestra la venta de instrucciones
document.querySelector(".icon").addEventListener("click", () => {
  document.querySelector(".modalWindow").style.display = "block";
});
// Al hacer click en el ícono 'x' se cierra la venta de instrucciones
document.querySelector(".close").addEventListener("click", () => {
  document.querySelector(".modalWindow").style.display = "none";
});






const App = (data) => { 
// Se define la función App y tiene como parámetro la data desde el fetch realizado en el main.js

let  domDiv =[];

// Se crea un variable tipo array vacía para guarde las tarjetas
let k = 10;
for (let j = 0; j < 2; j++) {
// Se crea un ciclo for externo para que duplique la data
  for (let i = 0; i < data.items.length; i++) {
// Se crea un ciclo for interno para que rrecorra la data según su longitud 
    let card = document.createElement("div"); 
    // Se crea la variable card la cual guarda los divs que contiene las tarjetas
    card.innerHTML = `<div class="back">
                        <img src="images/logoblancoback.jpg" id="logo${(i)}" class="back" alt="back">
                      </div>
                      <div class="image">
                        <img src="${data.items[i].image}" id="${data.items[i].id}" class="image" alt="marvelhero">
                      </div> `
    // Se crea los divs que contienen el back y la cara frontal de las tarjetas                 
    card.className = "super";
    // Se le asigna la clase "super" a las tarjetas
    card.setAttribute("id","super" + i);
    // Se le asigna el id a cada tarjeta de acuerdo a su posición

    
    if(j == 1){
      // Se crea un condicional para que a las cartas duplicadas se les pueda asignar su respectivo id
      card.setAttribute("id","super" + k);
      k++;
    }
  
    domDiv.push(card);
    //Se le hace un push al arreglo domDiv para almacenar las tarjetas 
  }
}

//Se llaman las funciones shuffle, createCards y flipCards
shuffle(domDiv);
createCards(domDiv);
flipCards(domDiv);
}

 
const shuffle = (domDiv) =>{
//Se define la función shuffle para barajar las tarjetas usando el algoritmo de Fisher - Yates    
     let i = domDiv.length - 1;
    // Se declara i la cual representa la posición final del array domDiv 
     let temp = 0;
     // Se declara una variable temporal en cero
     let randomIndex = 0; 
     // Se declara en cero una variable que guardará el índice aleatorio
     while (i >= 0) {
    // Se emplea un ciclo while, que se ejecutará mientras la posición sea mayor o igual a cero
       randomIndex = Math.floor(Math.random() * (i + 1));
       //Se usa el metódo random para lanzar un número aleatorio dentro del rango del array y se guarda en randomIndex
       temp = domDiv[randomIndex];
       //La variable temporal guarda el valor de la posición randomIndex
       domDiv[randomIndex] = domDiv[i];
       //El valor ubicado en la posición i se guarda en la posición aletoria
       domDiv[i] = temp;
       //El valor guardado en la variable temporal se asigna a la posición i;
       i--;
       //Se usa un contador que inverso hasta llegar a la primera posicion del domDiv
     }
}
 

const createCards = (domDiv) =>{
//Se define la función createCards para enviar las tarjetas al html
    for (let i = 0; i < domDiv.length; i++) {
     document.getElementById("container").appendChild(domDiv[i]); 
    }
} 

const flipCards = (domDiv) =>{
//Se define la función flipCards para girar las tarjetas
  for (let i = 0; i < domDiv.length; i++) {
    document.getElementById(`super${(i)}`).addEventListener("click",() => {
    document.getElementById(`super${(i)}`).classList.toggle("flip")});
   }
} 

export default App;


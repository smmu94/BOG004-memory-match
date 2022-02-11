const App = (data) => { 
// Se define la función App y tiene como parámetro la data desde el fetch realizado en el main.js

let  domDiv =[];
// Se crea un variable tipo array vacía para guarde las tarjetas

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
    card.className = "super";
    card.Id = `super${(i)}`;
    domDiv.push(card);
  }
}


   //Algoritmo de Fisher - Yates para barajar las tarjetas

  let i = domDiv.length - 1;
    let temp = 0;
    let randomIndex = 0; 
    while (i >= 0) {
      randomIndex = Math.floor(Math.random() * (i + 1));
      temp = domDiv[randomIndex];
      domDiv[randomIndex] = domDiv[i];
      domDiv[i] = temp;
      i--;
    }

   for (let i = 0; i < domDiv.length; i++) {
    document.getElementById("container").appendChild(domDiv[i]); 
   }

   for (let i = 0; i < domDiv.length; i++) {
    document.getElementById(`super${(i)}`).addEventListener("click",() => {
    document.getElementById(`super${(i)}`).style.transform = "rotateY(180deg)";});
   }

  
  }



  export default App;


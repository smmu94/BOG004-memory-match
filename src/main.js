import App from "./components/App.js";


fetch("../data/marvel/marvel.json")
// Interfaz que permite traer la data de marvel.json de acuerdo a la ruta
  .then((resp) => resp.json())
  // Promesa que da respuesta al estado del callback
  .then((data) => App(data)) 
  // Promesa que trae la data y la envía al App
  .catch((err) => console.error(err));
  // Se ejecuta en caso de que ocurra alguna falla en las promesas then


 document.querySelector("#play").addEventListener("click",()=>
 {document.getElementById("window1").style.display = "none";
 document.getElementById("lateral1").style.display = "none";
 document.getElementById("lateral2").style.display = "none";
  document.getElementById("window2").style.display = "block";
} )

document.querySelector(".close").addEventListener("click",()=> 
  {
  document.querySelector(".modalWindow").style.display = "none";
})

document.querySelector(".icon").addEventListener("click",()=> 
  {
  document.querySelector(".modalWindow").style.display = "block";
})



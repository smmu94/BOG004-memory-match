import App from "./components/App.js";


fetch("../data/marvel/marvel.json")
// Interfaz que permite traer la data de marvel.json de acuerdo a la ruta
  .then((resp) => resp.json())
  // Promesa que da respuesta al estado del callback
  .then((data) => App(data)) 
  // Promesa que trae la data y la envía al App
  .catch((err) => console.error(err));
  // Se ejecuta en caso de que ocurra alguna falla en las promesas then

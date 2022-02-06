//
// Para incluir los diferentes sets de cartas podemos _importar_ el archivo
// JavasSript que contenga el `export` correspondiente...
//
//import marvel from '../data/marvel/marvel.js';
//console.log(marvel);
//
// O alternativamente podríamos cargar el JSON de forma asíncrona usando
// `fetch` en el momento que consideremos necesario.
//
// fetch('./data/pokemon/pokemon.json')
//   .then(resp => resp.json())
//   .then(console.log)
//   .catch(console.error);
//

fetch('../data/marvel/marvel.json')
  .then(resp => resp.json())
  .then(data => App(data))
  .catch(err => console.error(err))
  
const App = (data) => {
  
let images = data.items.map(function(x) {
  const el = document.createElement('img');
  el.setAttribute("src",x.image);
  el.id = "" + x.id;
  return el;
 })
  
return console.log(images[0],images[1]); }
  
  

  
 /* const images = data.items.map 
  data.items.forEach(function(element){
    const el = document.createElement('img');
    el.setAttribute("src", element.image);
    el.id = "" + element.id;
    return el;
  }
  
  const App = (data) => {

  let image = new Array(data.items.length-1);
  
  for (let i = 0; i < data.items.length; i++)
  {
    const el = document.createElement('img');
    el.setAttribute("src", data.items[i].image);
    el.id = "" + data.items[i].id;
    image[i] = el;
    console.log(image[i]);
  }
  
  return image;

}  */
  
export default App;
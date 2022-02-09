//
// Para incluir los diferentes sets de cartas podemos _importar_ el archivo
// JavasSript que contenga el `export` correspondiente...
//
//import data from '../data/marvel/marvel.js';
//console.log(data);
//
// O alternativamente podríamos cargar el JSON de forma asíncrona usando
// `fetch` en el momento que consideremos necesario.
//
// fetch('./data/pokemon/pokemon.json')
//   .then(resp => resp.json())
//   .then(console.log)
//   .catch(console.error);
//

// Se hace fetch para cargar la data desde marvel.json
fetch("../data/marvel/marvel.json")
  .then((resp) => resp.json())
  .then((data) => App(data)) //Se envía la data a la funcion App
  .catch((err) => console.error(err));

 /*fetch("https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=wol&ts=1643905564948&apikey=d43933949ba7e8943bf5902021f17f7e&hash=e02a592e20d9ea7408db96cb8677f0ff")
  .then((resp) => resp.json())
  .then((data) => console.log(data))  //Se envía la data a la funcion App
  .catch((err) => console.error(err));*/

/*let data = {name: 'marvel',
items:[{id: 'captainAmerica', image: 'http://i.annihil.us/u/prod/marvel/i/mg/3/10/52321928eaa72/standard_large.jpg'}, {bgColor: '#339933' , id: 'captainAmerica', image: 'http://i.annihil.us/u/prod/marvel/i/mg/3/10/52321928eaa72/standard_large.jpg', bgColor: '#339933' }]}
console.log(data);*/

const App = (data) => {
console.log(data);

let arrayImages = data.items;
console.log(arrayImages);
    let divImage = arrayImages.map(function int(x) {//Se hace un map para crear un elemento div con sus respectivas imagenes, el parámetro x corresponde a data.items
      const domDiv = document.createElement("div"); // y se cargan esos elementos en un arreglo "image"
      domDiv.innerHTML = `<img src="${x.image}" id="${x.id}" class="image" alt="marvelhero">`
      domDiv.className = "super";
      return domDiv;
    }); 
  
  
   //Algoritmo de Fisher - Yates para barajar las tarjetas, en este caso el arreglo de imagenes en "image"
    let sizeImage = divImage.length - 1;
    let i = sizeImage;
    let temp = 0;
    let randomIndex = 0;
    while (i >= 0) {
      randomIndex = Math.floor(Math.random() * (i + 1));
      temp = divImage[randomIndex];
      divImage[randomIndex] = divImage[i];
      divImage[i] = temp;
      i--;
    }}
  /*document.getElementById("container").appendChild(image[0]);
  document.getElementById("container").appendChild(image[1]);
  document.getElementById("container").appendChild(image[2]);
  document.getElementById("container").appendChild(image[3]);
  document.getElementById("container").appendChild(image[4]);
  document.getElementById("container").appendChild(image[5]);
  document.getElementById("container").appendChild(image[6]);
  document.getElementById("container").appendChild(image[7]);
  document.getElementById("container").appendChild(image[8]);
  document.getElementById("container").appendChild(image[9]);
  document.getElementById("container").appendChild(image[10]);
  document.getElementById("container").appendChild(image[11]);
  document.getElementById("container").appendChild(image[12]);
  document.getElementById("container").appendChild(image[13]);
  document.getElementById("container").appendChild(image[14]);
  document.getElementById("container").appendChild(image[15]);
  document.getElementById("container").appendChild(image[16]);
  document.getElementById("container").appendChild(image[17]);
  document.getElementById("container").appendChild(image[18]);
  document.getElementById("container").appendChild(image[19]);*/
    
  
  export default App;


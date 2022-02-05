//
// Para incluir los diferentes sets de cartas podemos _importar_ el archivo
// JavasSript que contenga el `export` correspondiente...
//
 import marvel from '../data/marvel/marvel.js';
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

/*fetch('https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=iro&ts=1643905564948&apikey=d43933949ba7e8943bf5902021f17f7e&hash=e02a592e20d9ea7408db96cb8677f0ff')
  .then(resp => resp.json())
  .then(data => App(data))
  .catch(err => console.error(err));*/



/*const App = (marvel) => {
  
  const el = document.createElement('div');

  el.className = 'App';
  el.innerHTML = marvel.item[0];

  return el;
};*/
const App = () => {

  

   
    let imagen = marvel.items.map(function(el) {
      el = document.createElement('img');
      el = marvel.items.image;
      return el;
   });
  
    /*for (let i = 0; i < marvel.items.length; i++) {
    el = document.createElement('img');
    el.setAttribute("src",marvel.items[i].image);
    el.className = 'App';
    imagen[i] = el;
    console.log(imagen[i]);
    
  } */



   
  return imagen.src;
    /*const el1 = document.createElement('img');
    el1.setAttribute("src",marvel.items[0].image);
    el1.className = 'App';
    console.log(el1);

    const el2 = document.createElement('img');
    el2.setAttribute("src",marvel.items[1].image);
    el2.className = 'App';
    console.log(el2);*/

  
  
  //document.getElementsByClassName("App").appendChild("hulk");

  

}

export default App;

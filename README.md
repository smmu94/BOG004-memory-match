# Memory Match Game

## Índice


* [1. Investigación UX](## 1-Investigación UX)
* [2. Historias de Usuario](## 2-Historias de Usuario)
* [3. Prototipos](## 3-Prototipos)
* [4. Test de usabilidad](## 4-Test de usabilidad)

***

# Memory Match Game
# Memory match Marvel Universe

Nuestro proyecto es un juego de memoria con tematica de Marvel Universe, en donde el usuari@ identifica el superhéroe y debe buscar la tarjeta identica para que haga match, el usuario cuenta con 10 vidas para realizarlo si logra terminarlo se le mostrara un mensaje ganador, de lo contrario un mensaje perdedor, adicionalmente se le da la opcion de volver a jugar o salir del juego.

## 1-Investigación UX:
¿Quiénes son los principales usuarios de producto?
Nuestros principales usuarios son los geek de Marvel.

¿Cuáles son los objetivos de estos usuarios en relación con el producto?
* Conocer los superheroes ocultos en el juego
* Satisfacer los gustos con la tematica.
* Realizar el juego utilizando la menor cantidad de vidas, con el fin de probar la capacidad de concentración del jugador.

¿Cuáles son los componentes principales de la interfaz y por qué?
El usuario puede ver una pantalla principal en donde podra colocar su alias o nickname, adicionalmente encontrara la opcion de ver las instrucciones en forma de (?), y otro boton para dar PLAY al juego e ingresar a la segunda pantalla.

En la segunda pantalla el usuario podra ver su alias junto a las 10 vidas que le ofrece el juego, seguido se le mostrara la ubicacion de las tarjetas por 3seg y ya esta listo para comenzar a jugar.

¿Cuándo utilizan o utilizarían el producto?
Cuando el usuario quiera distraerse o quiera afianzar su memoria con un juego de habilidad mental.


## 2-Historias de Usuario
Historia de Usuiario 1 Pantalla Principal.
Descripción: YO como usuario Geek de Marvel QUIERO  ingresar al juego con mi nickname PARA reconocerme y poder jugar.

Criterios de Aceptación:
* El usuario podra ingresar su alias
* Puede conocer las instrucciones del juego
* Encontrara un boton para dar Play al juego

Historia de Usuiario 2 Barajar y mostrar set de tarjetas.
Descripción: YO como usuario geek de marvel QUIERO ver un pantalla del set de tarjetas PARA que al dar click en cada tarjeta me muestre su contenido

Criterios de Aceptación:.
* Ver las 20 cartas distribuidas en la segunda pantalla
* Que el juego se muestre barajado
* Al iniciar el juego me muestre el back de las tarjetas
* Cuando de click sobre la tarjeta debe mostrar el superheroe oculto

Historia de Usuiario 3 Hacer match y ver vidas.
Descripción: YO como jugador Memory Match Marvel Universe  QUIERO destapar las cartas en pares PARA hacer match o no match si me equivoco

Criterios de Aceptación:
* Mostrar por unos segundos los superhéroes al inciar la segunda pantalla para dar una pista al usuario (hacker edition)
* Ver en la parte superior de la pantalla las vidas disponibles (hacker edition)
* Destapar las tarjetas de a 2 en 2
* Si las cartas coinciden hace match y me las deja destapadas; de lo contrario se vuelvan a esconder.

Historia de Usuiario 4 Volver a jugar o Salir.
Criterios de Aceptación:
* Al hacer el ultimo match debe aparecer una pantalla pequeña en donde muestre un mensaje informando si gano o perdio.
* En esta pantallita encontrar dos botones en donde nos de la opcion de volver a jugar o salir del juego.


Definicion de terminado: 
* Test unitarios 
* Hacer comparacion con los protipos de UD y HD.
* Hacer despliegue en GIT
* Ser Responsive para desktop, tablets y celulares.

## 3-Prototipos 
Prototipos LD
![primer bosquejo del prototipo](src/images/PrototipoLD.png)

Prototipo Celular
![Prototipo Celular](src/images/PrototipoUDPhone.png)


Prototipos HD
imagen (https://www.figma.com/file/2gEEPRESkmDQ8IhumNjPbC/Dise%C3%B1o?node-id=0%3A1)


## 4-Test de usabilidad
1. Cuando el usuario da doble click a la misma tarjeta lo toma como un match.



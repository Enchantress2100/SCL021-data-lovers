# Studio Ghibli Database #

## Definición del producto ##
Este proyecto tiene la finalidad de dar información a personas que quieran aprender más sobre las películas del Studio Ghibli, sin ser un sitio para expertos. Está orientado más bien a aficionados, usuarios que disfrutan de páginas interactivas para buscar datos como resúmenes, rankings, personajes y reconocimientos. Además, permite filtrar información dependiendo de distintos criterios que el usuario puede especificar.

## Historias de usuario y DoD ##
https://trello.com/b/PipGLbIe/data-lovers

### 1. Acceder a la página, escoger una película y que se desplieguen ciertos datos generales. ###

El proyecto estará listo cuando se cumplan las siguientes condiciones:
⋅⋅*Deben visualizarse las películas en una grilla.
⋅⋅*La grilla debe ser interactiva y funcional, debe redirigir a la ficha de la película que corresponde en la imagen.
⋅⋅*Dentro de esta ficha, debe haber datos debidamente identificados con sus categorías y sus respectivas imágenes.

### 2. Al llegar a la página, hacer click en un banner de inicio que dirija a otra página, que permita ordenar el directorio de películas por año de lanzamiento, título, RT Score, o filtrar la información de acuerdo a su director. ###

El proyecto estará listo cuando se cumplan las siguientes condiciones:
⋅⋅*Deben visualizarse las películas en una tarjeta.
⋅⋅*La tarjeta debe incluir los aspectos en base a los cuales se filtró/ordenó la información.
⋅⋅*La tarjeta debe ser responsiva.
⋅⋅*Deben existir dos botones: Ordenar por (Ranking, Título, Año) y Filtrar por (Director)

## Diseño de la Interfaz de Usuario ##

### Prototipos de baja fidelidad ###

Primer acercamiento a nuestros objetivos durante el primer sprint.

![image](https://user-images.githubusercontent.com/106553998/183006579-d4595653-c2c4-44e6-8f57-924b641183f2.png)


### Prototipos de alta fidelidad ###

Desarrollados en illustrator durante el primer sprint.

![image](https://user-images.githubusercontent.com/106553998/183006688-2304d8c1-2ac2-436a-9cc8-74d297ec1029.png)
![image](https://user-images.githubusercontent.com/106553998/183006768-ba116c99-43fe-4dcd-98b6-e86642286c42.png)
![image](https://user-images.githubusercontent.com/106553998/183006783-ffb9b0dd-6d71-4276-aee1-63f929e259ba.png)



## Testeos de usabilidad ##

Durante el desarrollo de este proyecto se puso especial atención a que el sitio permitiera navegar entre las distintas páginas, además de procurar que la disposición de los botones y desplegables fuese apropiada e intuitiva, además de que se visualizara correctamente en distintos dispositivos.

## Implementación de la Interfaz de Usuario ##

`index.html`: Muestra todas las películas de `títulos.js`, un archivo nuevo creado por nosotras, que recoge sólo los títulos de las películas y las imágenes, que en varios casos son distintas y/o están en mejor calidad que las originales, para permitir una mejor visualización. Respeta la idea original de grilla, sin embargo se utilizaron sólo dos tamaños de contenedor para evitar que se generaran espacios vacíos en la página.

![image](https://user-images.githubusercontent.com/106553998/183006010-21174706-1368-4735-9b38-92adea209998.png)

`card.html`: Muestra la información de una película específica, incluyendo el póster y -si los hay- muestra personajes, vehículos, locaciones y habitantes de las locaciones.

![image](https://user-images.githubusercontent.com/106553998/183006107-5e6c2a6e-39a4-4617-9c7d-36e5a15a5a33.png)

`display.html`: Muestra una tarjeta de cada película con su nombre y título. Las tarjetas impresas por defecto son todas, ordenadas por director en orden ascendente, sin embargo a través del menú y la barra lateral es posible ordenar y filtrar, llamando a las funciones de `data.js` sortFilms y filterFilms, respectivamente. Al hacer esto se imprimen sólo las películas que estas funciones retornan.

Adicionalmente, `data.js` contiene una función adicional llamada filterCriteria, que guarda una sola vez los valores de directores, productores y año de lanzamiento, con el propósito de imprimir las opciones en radio buttons utilizando check, una función descrita en `display.js`.

![image](https://user-images.githubusercontent.com/106553998/183006185-f3d96eab-13ea-41df-8bf4-2ebbe0140139.png)


## Pruebas unitarias ##

Las pruebas unitarias comprueban si sortFilms permite ordenar usando distintos criterios y por orden ascendente o descendente. Además, se prueba si filterFilms permite filtrar por distintos criterios, y si filterCriteria devuelve las opciones correctas en el orden esperado. El código pasa el 100% de las pruebas implementadas.

## Aspectos a mejorar ##

Para visualizar la información de mejor manera, podrían "apilarse" los contenedores en las secciones card y display, tal como ocurre con index. En este último, cuando se visualiza en pantallas pequeñas la disposición deja de ser una grilla (grid) y se convierte en una lista vertical de imágenes con sus respectivos títulos, además de eliminar el hover, ya que la mayoría de los dispositivos móviles carecen de esta función. Por último, la funcionalidad de filtrar también podría ser más amigable si dejara en claro que sólo se puede filtrar por un criterio a la vez. Para esto podría desmarcarse los radio buttons de categorías que no están filtrando, o también ocultar los filtros de criterios que no se están usando, mediante un accordion, por ejemplo.

En cuanto al código, hay algunas funciones que no cumplen el principio de responsabilidad única y otros bloques de código que podrían ser una función. Además, el archivo CSS es uno solo para las tres páginas y esto podría ser confuso de entender para otra persona que lea el código.

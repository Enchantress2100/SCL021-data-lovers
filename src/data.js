import data from "./data/ghibli/ghibli.js";

//acá van las funciones que permiten ordenar, y filtrar, mas no imprimir en el dom 

const sortFilms = (films, criteria, asc) => {
 
let result = films.sort(function (a, b) {
//para ordenar valores numericos (criteria corresponde al parametro que se va a filtrar)
  if (!isNaN(Number(a[criteria])))
  {a = new Number(a[criteria])
    b = new Number(b[criteria])}
  else {
//para ordenar valores tipo string
         a = a[criteria].toUpperCase(),
         b = b[criteria].toUpperCase(); }
   return a == b ? 0 : a > b ? 1 : -1; 
 })
//para determinar el orden (ascendente por defecto)     
if (!asc) {
  return result.reverse()
}
  return result
};

//funcion para filtrar
//key es el aspecto generar a filtrar
const filterCriteria = (films, key) => {
    let setOptions = new Set();
    films.forEach((element) => setOptions.add(element[key]));
  return setOptions;
  };
  
//filterBy es el valor especifico de key, ej Miyazaki
const filterFilms = (films, key, filterBy) => {
  return films.filter((element) => element[key] === filterBy)
}

export {sortFilms , filterCriteria, filterFilms};

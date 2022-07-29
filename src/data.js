import data from "./data/ghibli/ghibli.js";
export const sortFilms = (films, criteria, asc) => {
 
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
}

export const anotherExample = () => {
  return "OMG";
};

export default sortFilms;

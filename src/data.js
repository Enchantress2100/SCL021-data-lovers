//import films from "./data/ghibli/ghibli.js";

// estas funciones son de ejemplo

const sortFilms = (films) => {

const criteria = 'date'
  let organizedFilms = [];
  

//decirle según qué vamos a ordenar

if (criteria ==! 'date' && criteria ==! 'name' && criteria ==! 'rate') {
organizedFilms = films;
}

else if (criteria === 'date') {
    organizedFilms = 'hola'
    //organizedFilms = item.sort((a, b) => a.release_date - b.release_date);
    
    }


/*else if (criteria === 'name') {
  organizedFilms = films.sort()
}

else if (criteria === 'rate') {
  organizedFilms = films.sort()
}*/

  return organizedFilms;
  
};
 export default sortFilms;
/*export const anotherExample = () => {
  return 'OMG';
};*/

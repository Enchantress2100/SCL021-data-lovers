import { sortFilms, filterCriteria, filterFilms } from '../src/data';

const films = [
  {
    title: 'The Tale of the Princess Kaguya',
    director: 'Isao Takahata',
    producer: 'Yoshiaki Nishimura',
    release_date: '2013',
    rt_score: '100'
  },
  {
    title: 'My Neighbor Totoro',
    director: 'Hayao Miyazaki',
    producer: 'Hayao Miyazaki',
    release_date: '1988',
    rt_score: '93',
  },
  {
    title: 'When Marnie Was There',
    director: 'Hiromasa Yonebayashi',
    producer: 'Yoshiaki Nishimura',
    release_date: '2014',
    rt_score: '92',
  },
  {
    title: 'Castle in the Sky',
    director: 'Hayao Miyazaki',
    producer: 'Isao Takahata',
    poster: 'https://images-na.ssl-images-amazon.com/images/I/71HLiMMNe-L.jpg',
    release_date: '1986',
    rt_score: '95',
  },
  {
    title: 'Tales from Earthsea',
    director: 'Gorō Miyazaki',
    producer: 'Toshio Suzuki',
    release_date: '2006',
    rt_score: '41',
  }
];

//PARA SORTFILMS

describe('sortFilms es una función', () => {
  it('is a function', () => {
    expect(typeof sortFilms).toBe('function');
  });

  it('sortFilms retorna los títulos ordenados alfabéticamente de forma ascendente', () => {
    let sorted = sortFilms(films, 'title', true)
    expect(sorted[0].title).toBe('Castle in the Sky');
    expect(sorted[1].title).toBe('My Neighbor Totoro');
    expect(sorted[2].title).toBe('Tales from Earthsea');
    expect(sorted[3].title).toBe('The Tale of the Princess Kaguya');
    expect(sorted[4].title).toBe('When Marnie Was There');
  });


  it('sortFilms retorna los años de lanzamiento de las películas ordenados de forma descendente', () => {
    let sorted = sortFilms(films, 'release_date', false)
    expect(sorted[4].release_date).toBe('1986');
    expect(sorted[3].release_date).toBe('1988');
    expect(sorted[2].release_date).toBe('2006');
    expect(sorted[1].release_date).toBe('2013');
    expect(sorted[0].release_date).toBe('2014');
  });
});

//PARA FILTER CRITERIA

describe('filterCriteria', () => {
  it('is a function', () => {
    expect(typeof filterCriteria).toBe('function');
  });

      it('devuelve un valor único por cada key según el criterio especificado y en orden ascendente', () => {
      let criteria = filterCriteria(films, 'director')
        expect(criteria[0]).toBe('Gorō Miyazaki');
        expect(criteria[1]).toBe('Hayao Miyazaki');
        expect(criteria[2]).toBe('Hiromasa Yonebayashi');
        expect(criteria[3]).toBe('Isao Takahata');
      });

      it('devuelve un valor único por cada key según el criterio numérico especificado y en orden ascendente', () => {
        let criteria = filterCriteria(films, 'rt_score')
          expect(criteria[0]).toBe('41');
          expect(criteria[1]).toBe('92');
          expect(criteria[2]).toBe('93');
          expect(criteria[3]).toBe('95');
          expect(criteria[4]).toBe('100');
        });
    });

//PARA FILTERFILMS

describe('filterFilms', () => {
  it('is a function', () => {
    expect(typeof filterFilms).toBe('function');
  });
  
  it('devuelve las películas filtradas según productor', () => {
    let filtered =  filterFilms(films, 'producer', 'Isao Takahata')
    expect(filtered[0].producer).toBe('Isao Takahata');
  });
});


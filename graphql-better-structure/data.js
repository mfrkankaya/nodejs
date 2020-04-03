const movies = [
  {
    id: '1',
    title: 'God Father',
    description: 'Lorem ipsum.',
    year: 1972,
    directorId: '1'
  },
  {
    id: '2',
    title: 'Inception',
    description: 'Lorem ipsum.',
    year: 2010,
    directorId: '1'
  },
  {
    id: '3',
    title: 'Avangers',
    description: 'Lorem ipsum.',
    year: 2015,
    directorId: '2'
  }
]

const directors = [
  {
    id: '1',
    name: 'Furkan Kaya',
    birth: 1996
  },
  {
    id: '2',
    name: 'Ceren Yavrutürk',
    birth: 1996
  },
  {
    id: '3',
    name: 'Mehmet Seven',
    birth: 1992
  }
]

module.exports = { movies, directors }

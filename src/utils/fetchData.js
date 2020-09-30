export const fetchCharacters = fetch(
  'https://gateway.marvel.com:443/v1/public/characters?limit=20&apikey=d54085a32009432805ffa8746025c8f5&hash=056c2dbfa6bc4260c65e8235dba5dc64&ts=1600986257891',
)
  .then((res) => {
    if (res.ok) {
      return res.json();
    }
    throw Error('API doesn`t respond');
  })
  .then((result) => result.data.results);

export const fetchComics = (url) => fetch(
  `${url}?apikey=d54085a32009432805ffa8746025c8f5&hash=056c2dbfa6bc4260c65e8235dba5dc64&ts=1600986257891`,
)
  .then((resCom) => {
    if (resCom.ok) {
      return resCom.json();
    }
    throw Error('API doesn`t respond');
  })
  .then((resultComic) => resultComic.data.results);

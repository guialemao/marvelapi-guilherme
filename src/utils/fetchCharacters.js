const fetchCharacters = fetch(
  'https://gateway.marvel.com:443/v1/public/characters?apikey=d54085a32009432805ffa8746025c8f5&hash=056c2dbfa6bc4260c65e8235dba5dc64&ts=1600986257891',
)
  .then((res) => {
    if (res.ok) {
      return res.json();
    }
    throw Error('API doesn`t respond');
  })
  .then((result) => result.data.results);

export default fetchCharacters;

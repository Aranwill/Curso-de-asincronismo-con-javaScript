import fetch from 'node-fetch';
const API = 'https://rickandmortyapi.com/api';

function fetchData(urlApi) {
  return fetch(urlApi);
}

// fetchData(`${API}/character`)
//   .then(response => response.json())
//   .then(character => {
//     console.log(character);
//   })
//   .then(() => {
//     console.log('Hola');
//   })
//   .then(error => console.log(error));

fetchData(`${API}/character`)
  .then(response => response.json())
  .then(episode => {
    return fetchData(`${API}/character`);
  })
  .then(response => response.json())
  .then(episode => {
    return fetchData(`${API}/character/2`);
  })
  .then(response => response.json())
  .then(episode => {
    console.log(episode.name);
    console.log(episode.status);
    console.log(episode.location.name);
  })
  .catch(err => console.log(err))
  .finally(() => console.log('Finally'));

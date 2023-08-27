// const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
// const API = 'https://api.escuelajs.co/api/v1';

// function fetchData(urlApi, callback) {
//   let xhttp = new XMLHttpRequest();

//   xhttp.open('GET', urlApi, true);
//   xhttp.onreadystatechange = function (event) {
//     if (xhttp.readyState === 4) {
//       if (xhttp.status === 200) {
//         callback(null, JSON.parse(xhttp.resposeText));
//       }
//     } else {
//       const error = new Error('Error' + urlApi);
//       return callback(error, null);
//     }
//   };
//   xhttp.send();
// }

// fetchData(`${API}/products`, function (error1, data1) {
//   if (error1) return console.error(error1);

//   fetchData(`${API}/products/${data1[0].id}`, function (error2, data2) {
//     if (error2) return console.error(error2);

//     fetchData(
//       `${API}/categories/${data2?.category?.id}`,
//       function (error3, data3) {
//         if (error3) return console.error(error3);
//         console.log(data1[0]);
//         console.log(data2.title);
//         console.log(data3.name);
//       }
//     );
//   });
// });

const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;

const API = 'https://rickandmortyapi.com/api';

function fetchData(apiUrl, funcioncita) {
  let xhttp = new XMLHttpRequest();

  xhttp.open('GET', apiUrl, true);

  xhttp.onreadystatechange = function (event) {
    if (xhttp.readyState === 4) {
      if (xhttp.status === 200) {
        funcioncita(null, JSON.parse(xhttp.responseText));
      } else {
        const error = new Error('Esto es error ' + apiUrl);
        return funcioncita(error, null);
      }
    }
  };
  xhttp.send();
}

fetchData(`${API}/character/1`, function (error1, data1) {
  if (error1) return console.error(error1);
  // console.log(data1);
  console.log(data1.id);
  console.log(data1.name);
});

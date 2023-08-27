import fetch from 'node-fetch';
//const API = 'https://api.escuelajs.co//api/v1';

async function fecthData(urlApi) {
  const response = await fetch(urlApi);
  const data = await response.json();
  return data;
}

const anotherFunction = async urlApi => {
  try {
    const products = await fecthData(`${urlApi}/products`);
    const product = await fecthData(`${urlApi}/products/${products[0].id}`);
    const category = await fecthData(
      `${urlApi}/categories/${product.category.id}`
    );
    console.log(products);
    console.log(product.tittle);
    console.log(category.name);
  } catch (error) {
    console.error(error);
  }
};

anotherFunction(API);

const API = 'https://domain-api-com';

async function runCode(urlApi) {
  const response = await fetch(urlApi);
  const data = await response.json();
  return data;
}

const fnRunCode = async urlApi => {
  try {
    return await runCode(urlApi);
  } catch (error) {
    throw new Error('Error');
  }
};

fnRunCode(API);

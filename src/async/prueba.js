const url =
  'https://visual-crossing-weather.p.rapidapi.com/forecast?aggregateHours=24&location=Washington%2CDC%2CUSA&contentType=csv&unitGroup=us&shortColumnNames=0';
const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '18f87c688bmsh333abda9b2ac04fp153554jsnb8c05e075106',
    'X-RapidAPI-Host': 'visual-crossing-weather.p.rapidapi.com',
  },
};

try {
  const response = await fetch(url, options);
  const result = await response.json();
  console.log(result);
} catch (error) {
  console.error(error);
}

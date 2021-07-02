const request = require('./node_modules/request');

const fetchBreedDescription = function(breedName, callback) {
  const url = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;
  request(url, (error, response, body) => {
    if (error) {
      callback(error, null);
    } else if (body === '[]') {
      callback(null, "Breed not found.");
    } else {
      const data = JSON.parse(body);
      callback(null, data[0].description);
    }

  })
}

module.exports = { fetchBreedDescription };
const request = require('./node_modules/request');
const searchTerm = process.argv[2];

const url = `https://api.thecatapi.com/v1/breeds/search?q=${searchTerm}`;
request(url, (error, response, body) => {
  if (error) {
    console.log('error:', error); // Print the error if one occurred
  } else {
    const data = JSON.parse(body);
    if (!data.length) {
      console.log("The requested breed was not found.");
    } else {
      console.log(data[0].description);
    }
  }

});

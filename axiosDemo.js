const axios = require("axios");

const url = "http://localhost:3000/";

const resultingPromise = axios.get(url);

resultingPromise.then(logResultsOfGet);

function logResultsOfGet(result) {
  console.log(result.data);
}

//working - now displaying array in browser. next step to display in console

const express = require("express");
// const { prompt } = require("enquirer");
const { makeDBConnectionPool } = require("./dbHelp");

const pool = makeDBConnectionPool("omdb");

// const axios = require("axios");

const app = express();

app.listen(3000);

app.get("/", (req, res) => {
  res.json(resultArray);
});

let resultArray = [];

function moviesIntoArray(movieRows) {
  for (let row of movieRows) {
    resultArray.push(row.movie_name);
  }
  return resultArray;
}


function getMovies() {
  pool
    .query("select movie_name from casts_view where person_name = 'Tom Cruise'")
    .then((results) => {
      moviesIntoArray(results.rows);
    });
}

getMovies();

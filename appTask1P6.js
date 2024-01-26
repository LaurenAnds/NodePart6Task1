const express = require("express");

const app = express();

//listening for requests - port 3000
app.listen(3000);

//roll 1 page
app.get("/roll1", (req, res) => {
  res.sendFile('./views/roll1.html', {root: __dirname});
});

//roll 2 page 
app.get("/roll2", (req, res) => {
    res.sendFile('./views/roll2.html', {root: __dirname});
  });

  //default for urls that don't exist - need to go at the bottom
  //as goes in order so will only execute if nothing above matches
  app.use((req, res) => {
    res.status(404).sendFile('./views/404.html', { root: __dirname})
  })
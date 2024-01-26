const express = require("express");

const app = express();

//listening for requests - port 3000
app.listen(3000);

//roll 1
app.get("/roll1", (req, res) => {
  res.send(randomDieRoll1());
});

//roll 2
app.get("/roll2", (req, res) => {
  res.send("Sum of two rolls: " + sumOfTwoRolls());
});

//functions

function randomDieRoll1() {
  return 1 + Math.floor(Math.random() * 6);
}

function randomDieRoll2() {
  return 1 + Math.floor(Math.random() * 6);
}

function sumOfTwoRolls(){
    return randomDieRoll1() + randomDieRoll2();
}

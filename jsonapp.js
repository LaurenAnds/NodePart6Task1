const express = require("express")

const app = express();

app.listen(3000)

app.get('/', (req, res) => {
    res.json(['String1', 'String2', 'String3'])
});
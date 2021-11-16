const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

const startBot = require("./app");

startBot();

app.get('/', (req, res) => {
    res.send('R2D2 bot is running');
});

app.listen(port, () => {
    console.log(`App listening on port ${port}!`)
});
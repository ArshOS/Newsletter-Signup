//jshint esversion: 6

const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');
const port = 3000;

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))
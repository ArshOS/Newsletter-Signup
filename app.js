//jshint esversion: 6

const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');
const port = 3000;

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static("public")); // Put all resources into this folder. 

app.get('/', function(req, res) {
    res.sendFile(__dirname + "/signup.html");
})

app.post('/', function(req, res) {
    var firstName = req.body.firstName;
    var lastName = req.body.lastName;
    var email = req.body.email;

    console.log("Details : " + firstName + " " + lastName + " " + email);
})


app.listen(port, () => console.log(`Example app listening on port ${port}!`))
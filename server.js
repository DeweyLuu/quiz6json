//assign express module to variable
var express = require("express");
//assign function call of express to variable
var app = express();
//sets up an port to listen on
var port = process.env.PORT || 3000;

//list of cars
var cars = ["honda", "ford", "bmw", "fiat"];

//access the endpoint url, run a function
app.get('/cars', function(req, res) {
//loop through the list of cars
	for (var i = 0; i < cars.length; i++) {
//respond with displaying each json object
	res.json(cars[i]);
	}
});

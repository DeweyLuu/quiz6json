var express = require("express");
var app = express();
var port = process.env.PORT || 3000;

var cars = ["honda", "ford", "bmw", "fiat"];

app.get('/cars', function(req, res) {
	for (var i = 0; i < cars.length; i++) {
	res.json(cars[i]);
	}
});

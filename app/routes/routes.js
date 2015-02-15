var express = require('express');
var ejs = require('ejs');
var cors = require('cors');
var fs = require('fs');


module.exports = function( app ){
	
	app.get('/', function(req, res){
		res.render('index.ejs', {});
	});

};
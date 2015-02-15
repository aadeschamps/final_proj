var express = require('express');
var routes = require('./app/routes/routes.js');
var config = require('./config/config.js');
var app = express();


config(app, express);
routes(app);
app.listen(3000);

var bodyParser = require('body-parser');
var cors = require('cors');

module.exports = function( app, express ){

	app.set('views', './app/views');
	app.use(express.static('./app/public'));
	app.use(cors());
	app.use(bodyParser());

};
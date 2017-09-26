// NOTE: Modules ===============================================================
const express = require('express'),
      bodyParser = require('body-parser'),
      morgan = require('morgan'),
      mongodb = require('./config/database.js'),
      mongoose = require('mongoose'),
      mustacheExpress = require('mustache-express'),
      router = require('./routes/router.js');

// NOTE: DB configuration =============================================================
mongoose.Promise = require( 'bluebird' );
mongoose.connect(mongodb.url); // connect to our database

// NOTE: Express app configuration ==================================================
const app = express();
      app.engine('mustache', mustacheExpress());
      app.set('view engine', 'mustache');
      app.set('views', './views');
      app.use('/public', express.static('public'));
      app.use(bodyParser.json());
      app.use(bodyParser.urlencoded({ extended: true }));

// NOTE: Routes ======================================================================
      app.use('/', router);

// NOTE: PORT
const port = process.env.PORT || 5000;
      app.listen(port, () => console.log('Knock knock on ' + port))

const express = require('express');
const parseurl = require('parseurl');
const path = require('path');
const mustacheExpress = require('mustache-express');
const expressValidator = require('express-validator');
const pg = require('pg');
const session = ('session');
const bodyParser = require('body-parser');
const model = require('./models');


const app = express();

app.engine('mustache', mustacheExpress());
app.set('views', './views');
app.set('view engine', 'mustache');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));


app.get('/', function(req, res){
  res.send();
});

app.listen(3000, function(req, res) {
  console.log("application has been initialized");
});

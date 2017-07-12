const express = require('express');
const parseurl = require('parseurl');
const path = require('path');
const mustacheExpress = require('mustache-express');
const expressValidator = require('express-validator');
const model = require('./models');
// const layout = require('layout');
const pg = require('pg');
const router = require('routes');
const bodyParser = require('body-parser');

app.engine('mustache', mustacheExpress());
app.set('views', './views');
app.set('view engine', 'mustache');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

app. use(session());

app.get('/signup', function(req, res){
  res.render('index',{});
});



app.listen(3000);

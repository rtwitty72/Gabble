const express = require('express');
const parseurl = require('parseurl');
const path = require('path');
const mustacheExpress = require('mustache-express');
const expressValidator = require('express-validator');
const model = require('./models');

const userController = require('./controllers/userController');
const gabController = require('./controllers/gabController');
const userGabController = require('./controllers/userGabController');
const pg = require('pg');
const router = require('routes');
const bodyParser = require('body-parser');

app.engine('mustache', mustacheExpress());
app.set('views', './views');
app.set('view engine', 'mustache');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

app.use(session({
  secret: 'squirrel',
  resave: false,
  saveUnitialized: true,
}));

app.get('/login', function(req, res){
  var context = {
    next: req.query.next
  };
  res.render('login', context);
});

app.post('/login', function(req, res){
  var username = req.body.username;
  var password = req.body.password;
  var nextPage = req.body.next || '/';
  var person = users.find(function(user){
    return user.username == username;
});
  });

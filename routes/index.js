var express = require('express');
const jwt = require('jsonwebtoken');
var router = express.Router();
require('dotenv').config();


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* LOGIN page */
router.get('/login', function(req, res, next) {
  res.render('login');
});

/* REGISTER page */
router.get('/register', function(req, res, next) {
  res.render('register');
});

module.exports = router;

var express = require('express');
const jwt = require('jsonwebtoken');
var router = express.Router();
require('dotenv').config();
const isValidToken = require('../middleware/isValidToken');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Pocket Sandwich' });
});

/* LOGIN page */
router.get('/login', function(req, res, next) {
  res.render('login');
});

/* REGISTER page */
router.get('/register', function(req, res, next) {
  res.render('register');
});

/* CONFIRMATION page */
router.get('/confirmation', function(req, res, next) {
  res.render('confirmation', { title: 'Pocket Sanwich!' });
});

/* PROFILE page */
router.get('/profile', isValidToken, function(req, res, next) {
  res.render('profile', { name: 'My Profile Page' });
});

module.exports = router;

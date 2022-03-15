var express = require('express');
const jwt = require('jsonwebtoken');
var router = express.Router();
require('dotenv').config();
const Sequelize = require("sequelize");
const { User } = require("../models");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Pocket Sandwich' });
});

// Create a new user
router.post('/user', async (req, res) => {
  const { email, password } = req.body;
  const newUser = await User.create({
    email,
    password
  })
  res.json({
    id: newUser.id,
  })
})

/* LOGIN page */
router.get('/login', function(req, res, next) {
  res.render('login');
});

/* REGISTER page */
router.get('/register', function(req, res, next) {
  res.render('register');
});

/* PROFILE page */
router.get('/profile', function(req, res, next) {
  res.render('profile', { name: 'Profile Page' });
});

module.exports = router;

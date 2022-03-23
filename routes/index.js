var express = require('express');
const jwt = require('jsonwebtoken');
var router = express.Router();
require('dotenv').config();
const Sequelize = require("sequelize");
const { User } = require("../models");
const isValidToken = require('../middleware/isValidToken');
const { user } = require('pg/lib/defaults');



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

/* CONFIRMATION page */
router.get('/confirmation/:id', async function(req, res, next) {
  const user = await User.findOne({
    where: {
      id: req.params.id
    } 
  });
  res.render('confirmation', { title: 'Pocket Sandwich!', user: user });
});

/* PROFILE page */
// Display user's email on Profile page
router.get('/profile/:id', async function(req, res, next) {
  console.log("the id", req.params.id)
  const user = await User.findOne({
    where: {
      id: req.params.id
    } 
  });
  res.render('profile', { name: 'My Profile Page', user: user });
});

// Update User Email
router.post('/profile/:id/edit', async function (req, res, next) {
  console.log("body", req.body)  //User update takes 2 arguments
  const { email } = req.body
  const result = await User.update(
    {email: email}, // updates
    {
      where: {id: req.params.id }, // query - how we find the user
      returning: true,
      plain: true
    }
  )
 
  // Sequelize format to return updated object
  const user = result[1].dataValues
  console.log("the user", user)
  
  //Redirects to the profile page
  res.redirect(`/profile/${user.id}`)
});

/* USER logout */
router.get('/signout', function(req, res) {
  res.clearCookie('jwt').send();
  res.redirect('/');

});
module.exports = router;

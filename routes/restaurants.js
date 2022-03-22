var express = require('express');
const jwt = require('jsonwebtoken');
var router = express.Router();
require('dotenv').config();
const axios = require('axios');
const axiosHeader = process.env.AXIOS_HEADER;

/* SEARCH page */
router.get('/', function(req, res, next) {
  console.log("in here")
  res.render('restaurant', {listOfRestaurants: []})
});


// Results page 
router.post('/', function(req, res, next) {
  console.log("Body:", req.body)
  
  
  // This gets the zipcode and type of food from the body object
  const {zipcode, type_of_food} = req.body;
  
  var config = {
    method: 'get',
    url: `https://api.yelp.com/v3/businesses/search?location=${zipcode}&categories=${type_of_food}`,
    headers: { 
      'Authorization': `${axiosHeader}`

    }
  };
  
  axios(config)
  .then(function (response) {
    console.log(response.data.businesses)
    res.render('restaurant', { listOfRestaurants: response.data.businesses })
  })
  .catch(function (error) {
    console.log(error);
  });
  
});


module.exports = router; 

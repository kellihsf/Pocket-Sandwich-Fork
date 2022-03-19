var express = require('express');
const jwt = require('jsonwebtoken');
var router = express.Router();
require('dotenv').config();
const axios = require('axios');
const res = require('express/lib/response');
const apiKey = process.env.API_KEY;
const axiosHeader = process.env.AXIOS_HEADER;


/* SEARCH page */
router.get('/', function(req, res, next) {
  res.render('restaurant')
});


// Results page 
router.post('/', function(req, res, next) {
  console.log("Body:", req.body)
  
  
  // This gets the zipcode and type of food from the body object
  const {zipcode, type_of_food} = req.body;
  
    var config = {
      method: 'get',
      url: 'https://api.yelp.com/v3/businesses/search?location=77045&categories=vegan',
      headers: { 
        'Authorization': `Bearer ${apiKey}`
      }
    };
    
    axios(config)
    .then(function (response) {
      console.log(response.data.businesses)
      res.render('partials/results', { list: response.data.businesses })
    })
    .catch(function (error) {
      console.log(error);
    });
    console.log('this is line 50', restaurantData);
  
  });


module.exports = router; 

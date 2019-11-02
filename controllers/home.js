// var express = require('express');
// var userModel = require('./../models/user-model');
// var router = express.Router();

// router.get('/', function(request, response) {
//     console.log("1");
//     response.render('\home');
// });

// module.exports = router;

var express = require('express');
var userModel = require('./../models/user-model');
var router = express.Router();

router.get('/', function(request, response) {
    console.log("homehome");
    response.render('home/index');
});



module.exports = router;
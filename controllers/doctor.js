var express = require('express');
var userModel = require('./../models/user-model');
var router = express.Router();

router.get('/', function(request, response) {
    console.log("doctor");
    response.render('doctor/index');
});



module.exports = router;
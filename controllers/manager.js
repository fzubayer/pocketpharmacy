var express = require('express');
var userModel = require('./../models/user-model');
var router = express.Router();

router.get('/', function(request, response) {
    console.log("manager");
    response.render('manager/index');
});



module.exports = router;
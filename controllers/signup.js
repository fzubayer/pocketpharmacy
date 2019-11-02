var express = require('express');
var userModel = require('./../models/user-model');
var router = express.Router();


router.get('/', function(request, response) {
    console.log("signup");
    response.render('signup/index');
});
router.post('/', function(request, response) {
    console.log("signup post");
    var user = {
        username: request.body.username,
        password: request.body.password,
        email: request.body.email,
        phone: request.body.phone,
        address: request.body.address,
        type: request.body.type
    };
    userModel.insert(user, function(status) {
        if (status) {
            console.log("success in");

            response.redirect('/login');
        } else {
            response.redirect('/signup');
        }
    });



});

module.exports = router;
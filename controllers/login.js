var express = require('express');
var userModel = require('./../models/user-model');
var router = express.Router();

router.get('/', function(request, response) {
    console.log("login");
    response.render('login/index');
});


router.post('/', function(request, response) {

    var user = {
        email: request.body.email,
        password: request.body.password,

    };

    userModel.validate(user, function(result) {
        if (result != null) {
            console.log(result.type);
            console.log(result.username);

            response.cookie('email', request.body.email);
            response.cookie('type', result.type);
            response.cookie('username', result.username);

            request.session.username = result.username;
            request.session.email = request.body.email;
            request.session.type = result.type;

            console.log(request.session.email);

            console.log(request.session.username);

            if (result.type == 'admin') {
                console.log("admin in");
                response.redirect('/admin');
            } else if (result.type == 'customer') {
                console.log("customer log");
                response.redirect('/customer');

            } else if (result.type == 'doctor') {
                console.log("doctor");
                response.redirect('/doctor');

            } else if (result.type == 'manager') {
                console.log("manager");
                response.redirect('/manager');

            }


        } else {

            response.send('invalid username/password');
        }
    });

});


module.exports = router;
var express = require('express');
var userModel = require('./../models/user-model');
var router = express.Router();

router.get('*', function(request, response, next) {

    if (request.cookies['username'] != null) {
        next();
    } else {
        response.redirect('/logout');
    }

});


router.get('/', function(request, response) {
    console.log("manager");
    response.render('manager/index', { username: request.session.username, email: request.session.email });
});
// router.get('/details/:email', function(request, response) {
//     console.log("details");
//     userModel.getByEmail(request.params.email, function(result) {
//         response.render("admin/details", result);
//     })
// });
router.get('/details/:email', function(request, response) {

    userModel.getByEmail(request.params.email, function(result) {

        console.log(result);
        response.render('manager/details', result);
    });

});

router.get('/edit/:email', function(request, response) {
    console.log("edit get");

    userModel.getByEmail(request.params.email, function(result) {
        response.render('manager/edit', result);
    });

});

router.post('/edit/:email', function(request, response) {
    console.log("edit post");
    var user = {
        username: request.body.username,
        password: request.body.password,
        email: request.params.email,
        phone: request.body.phone,
        address: request.body.address,

    };

    userModel.update(user, function(status) {

        if (status) {
            response.redirect('../details/' + request.params.email);
        } else {
            response.redirect('/manager/edit/' + request.params.email);
        }
    });

});


router.get('/userList', function(request, response) {
    console.log("userlist get");

    userModel.getAll(function(result) {
        console.log("userlist get all");
        response.render('manager/userlist', { user: result });
    });
});


module.exports = router;

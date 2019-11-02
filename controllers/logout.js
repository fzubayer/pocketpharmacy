var express = require('express');
var router = express.Router();

router.get('/', function(request, response) {
    console.log("logout");

    request.session.username = null;
    request.session.email = null;
    request.session.type = null;
    response.clearCookie('username');
    response.clearCookie('type');
    response.clearCookie('email');





    response.redirect('/login');
});

module.exports = router;
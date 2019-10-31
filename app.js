//DECLARATION
var express = require('express');
var bodyParser = require('body-parser');
var expSession = require('express-session');
var cookieParser = require('cookie-parser');
var ejs = require('ejs');

var app = express();

//CONFIGURATION
app.set('view engine', 'ejs');


//MIDDLEWARE
app.use(bodyParser.urlencoded({ extended: true }));
app.use(expSession({ secret: 'my top secret value', saveUninitialized: true, resave: false }));
app.use(cookieParser());


//ROUTER
app.get('/', function(request, response) {
    response.send('index page: its time to clean up this mess !');
});




//SERVER STARTUP
app.listen(3000, function() {
    console.log('server started at 3000...');
});
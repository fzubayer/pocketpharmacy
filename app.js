//DECLARATION
var express = require('express');
var bodyParser = require('body-parser');
var expSession = require('express-session');
var cookieParser = require('cookie-parser');
var ejs = require('ejs');
var login = require('./controllers/login');
var signup = require('./controllers/signup');
var logout = require('./controllers/logout');
var home = require('./controllers/home');
var admin = require('./controllers/admin');
var customer = require('./controllers/customer');
var manager = require('./controllers/manager');
var doctor = require('./controllers/doctor');
var app = express();

//CONFIGURATION
app.set('view engine', 'ejs');


//MIDDLEWARE
app.use(bodyParser.urlencoded({ extended: true }));
app.use(expSession({ secret: 'my top secret value', saveUninitialized: true, resave: false }));
app.use(cookieParser());
app.use('/style', express.static('style'));
app.use('/home', home);
app.use('/login', login);
app.use('/signup', signup);
app.use('/logout', logout);
app.use('/admin', admin);

app.use('/customer', customer);
app.use('/manager', manager);
app.use('/doctor', doctor);


//ROUTER
app.get('/', function(request, response) {
    response.send('index page: its time to clean up this mess !');
});




//SERVER STARTUP
app.listen(3000, function() {
    console.log('server started at 3000...');
});
//DECLARATION
var express = require('express');
var bodyParser = require('body-parser');
var expSession = require('express-session');
var cookieParser = require('cookie-parser');
var ejs = require('ejs');
var socket = require('socket.io') ;
var login = require('./controllers/login');
var signup = require('./controllers/signup');
var logout = require('./controllers/logout');
var home = require('./controllers/home');
var admin = require('./controllers/admin');
var customer = require('./controllers/customer');
var manager = require('./controllers/manager');
var doctor = require('./controllers/doctor');
var cart = require('./controllers/cart');
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
app.use('/cart', cart);
app.use('/customer', customer);
app.use('/manager', manager);
app.use('/doctor', doctor);

//app.use(express.static('public'));




//ROUTER
app.get('/', function(request, response) {
    response.send('index page: its time to clean up this mess !');
});




//SERVER STARTUP
var server =app.listen(3000, function() {
    console.log('server started at 3000...');
});
var io = socket(server) ;

io.on('connection', (socket) => {

    console.log('made socket connection', socket.id);

    // Handle chat event
    socket.on('chat', function(data){
         console.log(data);
        io.sockets.emit('chat', data);
    });

    // Handle typing event
    socket.on('typing', function(data){
        socket.broadcast.emit('typing', data);
    });

});
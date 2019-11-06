var express = require('express');

var userReports = require('./../models/user-reports');
var inventoryModel = require('./../models/inventory-model');
var userModel = require('./../models/user-model');
var prescripsion = require('./../models/prescription-model');
var customerhistoryModel = require('./../models/customerhistory-model');
var router = express.Router();


router.get('/', function(request, response) {
    console.log("cart");
    var cart = request.session.cart;
    var displaycart = { items: [], total: 0 };
    var total = 0;

    for (var item in cart) {
        displaycart.items.push(cart[item]);
        total += (cart[item].qty * cart[item].price);

    }
    displaycart.total = total;
    console.log(displaycart);


    response.render('cart/index', {
        cart: displaycart
    });


});
router.get('/remove', function(request, response) {
    console.log("remove");
    request.session.cart = '';




    response.redirect('/customer');




});

router.post('/:productid', function(request, response) {
    console.log("cart post");
    request.session.cart = request.session.cart || {};
    console.log(request.session.cart);
    var cart = request.session.cart;
    console.log(request.session.cart);
    inventoryModel.getById(request.params.productid, function(result) {
        console.log("!!!!!!!!!!");
        console.log(result);

        if (cart[request.params.productid]) {
            cart[request.params.productid].qty++;

        } else {
            cart[request.params.productid] = {
                item: result.productid,
                title: result.productname,
                price: result.price,
                qty: 1


            }
            console.log(cart[request.params.productid]);

        }
        response.redirect('/cart');
    });



});









module.exports = router;
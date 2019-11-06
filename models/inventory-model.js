var db = require('./db')

module.exports = {

    getAll: function(callback) {
        var sql = "select * from inventory";

        db.getResults(sql, [], function(results) {

            if (results.length > 0) {
                console.log('Product list pise');
                callback(results);
            } else {
                console.log('Product list pise nai');
                callback([]);
            }
        });
    },
    getById: function(productid, callback) {

        var sql = "select * from inventory where productid=?";
        db.getResults(sql, [productid], function(result) {
            if (result.length > 0) {
                callback(result[0]);
            } else {
                callback([]);
            }
        });
    },
    insert: function(inventory, callback) {

        var sql = "insert into inventory values('', ? ,? ,? ,? )";
        db.execute(sql, [inventory.productname, inventory.price, inventory.quantity, inventory.image], function(status) {
            callback(status);
        });
    },
    //    update: function(user, callback) {

    //        var sql = "update customerhistory set prescription=? where email=?";
    //        console.log(user);
    //        console.log("fatt");
    //        db.execute(sql, [ user.prescription, user.email], function(status) {
    //            callback(status);
    //        });
    //    },

    //    delete: function(email, callback) {
    //        var sql = "delete from user where email=?";
    //        db.execute(sql, [email], function(status) {
    //            callback(status);
    //        });
    //    }


}
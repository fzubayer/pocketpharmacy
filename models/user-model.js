var db = require('./db')

module.exports = {

    getByEmail: function(email, callback) {

        var sql = "select * from user where email=?";
        db.getResults(sql, [email], function(result) {
            if (result.length > 0) {
                callback(result[0]);
            } else {
                callback([]);
            }
        });
    },
    validate: function(user, callback) {
        var sql = "select type , username from user where email=? and password=?";
        db.getResults(sql, [user.email, user.password, user.type], function(result) {

            if (result.length > 0) {
                console.log('result pise');
                console.log(result);
                callback(result[0]);
            } else {
                callback();
            }
        });
    },
    getAll: function(callback) {
        var sql = "select * from user";

        db.getResults(sql, [], function(results) {

            if (results.length > 0) {
                console.log('list pise');
                callback(results);
            } else {
                console.log('list pise nai');
                callback([]);
            }
        });
    },
    insert: function(user, callback) {

        var sql = "insert into user values(?, ? ,? ,? ,? ,?)";
        db.execute(sql, [user.username, user.password, user.email, user.phone, user.address, user.type], function(status) {
            callback(status);
        });
    },
    update: function(user, callback) {

        var sql = "update user set username=?, password=?, phone=? , address=? where email=?";
        console.log(user);
        console.log("fatt");
        db.execute(sql, [user.username, user.password, user.phone, user.address, user.email], function(status) {
            callback(status);
        });
    },
    // delete: function(email, callback) {
    //     var sql = "delete from user where email=?";
    //     db.execute(sql, [email], function(status) {
    //         callback(status);
    //     });
    // }
}
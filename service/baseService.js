(function(base) {
    var db = require('./../database');
    base.exec = function(query, next) {
        db.openConnection();
        if (query.exec) {
            query.exec(function(err, items) {
                db.closeConnection();
                next(err, items);
            });
        } else {
            query.then(function(err, items) {
                db.closeConnection();
                next(err, items);
            });
        }
    };
})(module.exports);

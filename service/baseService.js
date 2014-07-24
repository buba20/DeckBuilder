(function(base) {
    
    var db = require('./../database');
    
    base.exec = function(query, next) {
        
        if (query.exec) {
            query.exec(function(err, items) {
                next(err, items);
            });
        } else {
            query.then(function(err, items) {
                next(err, items);
            });
        }

    };
})(module.exports);

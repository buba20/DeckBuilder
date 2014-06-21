(function(service) {
    var db = require('./../database'),
        base = require('./baseService'),
        model = db.models.Deck;

    function isFunctionA(obj) {
        return typeof obj === "function";
    }

    service.get = function(id, next) {
        var query;
        if (id && !isFunctionA(id)) {
            query = model.findById(id);
        } else {
            query = model.find({});
        }

        base.exec(query, next);
    };

    service.add = function(name, next) {
        var query = model.create({
            name: name
        });
        base.exec(query, next);
    };

    service.update = function(obj, next) {
    	var id = obj.id;
    	delete obj.id;
        var query = model.findByIdAndUpdate(id, obj);
        base.exec(query, next);
    };
})(module.exports);

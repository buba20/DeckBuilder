(function (service) {
    var db = require('./../database'),
        base = require('./baseService'),
        model = db.models.Card;

    function isFunctionA(obj) {
        return typeof obj === "function";
    }

    service.get = function (id, next) {
        var query;
        if (id && !isFunctionA(id)) {
            query = model.findById(id);
        } else {
            query = model.find({});
        }

        base.exec(query, next);
    };

    service.add = function (m, next) {
        var query = model.create(m);
        base.exec(query, next);
    };

    service.update = function (obj, next) {
        var id = obj._id;
        delete obj._id;
        var query = model.findByIdAndUpdate(id, obj);
        base.exec(query, next);
    };

    service.deleteCard = function (id,next) {
        var query = model.findByIdAndRemove(id);
        base.exec(query,next);
    };

})(module.exports);

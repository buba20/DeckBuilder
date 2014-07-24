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
            query = model
                .findById(id)
                .lean()
                .populate('cards');
            base.exec(query, function(err, deck) {
                var options = {
                    path: 'cards.cardType',
                    model: 'CardType'
                };
                if (err) console.log(err);
                model.populate(deck, options, next);
            });

        } else {
            query = model.find({});
            base.exec(query, next);
        }
    };

    service.add = function(obj, next) {
        model.create({
            name: obj.name,
            cards: obj.cards
        }, next);
    };

    service.update = function(obj, next) {
        var id = obj._id;
        delete obj._id;
        var query = model.findByIdAndUpdate(id, obj);
        base.exec(query, next);
    };

    service.deleteDeck = function(id, next) {
        var query = model.findByIdAndRemove(id);
        base.exec(query, next);
    };

})(module.exports);

(function (service) {

    var db = require('../database');

    service.getAllDecks = function (next) {
        db.openConnection();
        db.models.Deck.find(function (err, decks) {
            db.closeConnection();
            next(err, decks);
        });
    };

    service.getDeck = function (id, next) {
        db.openConnection();
        db.models.Deck.find({ _id: id }, function (err, deck) {
            db.closeConnection();
            next(err, deck);
        });
    };


    service.addDeck = function (name, next) {
        db.openConnection();

        var model = new db.models.Deck({ name: name });
        model.save(function (err) {
            db.closeConnection();
            next(err);
        });
    };


    service.removeDeck = function (id, next) {
        db.openConnection();
        db.models.Deck.remove({ _id: id }, function (err) {
            db.closeConnection();
            next(err);
        });
    };

})(module.exports);
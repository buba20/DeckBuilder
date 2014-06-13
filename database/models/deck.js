(function (models) {
    var mongoose = require('mongoose');

    var CardShema = mongoose.Schema({
        name: { type: String, unique: true }
    });
    var DeckShema = mongoose.Schema({
        name: { type: String, unique: true },
        cards: ['Card']
    });

    models.init = function (models) {

        models.Card = mongoose.model('Card', CardShema);
        models.Deck = mongoose.model('Deck', DeckShema);
    };

})(module.exports);
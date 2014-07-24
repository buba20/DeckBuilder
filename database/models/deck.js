(function(models) {
    var mongoose = require('mongoose');

    var CardTypeShema = mongoose.Schema({
        name: {
            type: String,
            unique: true
        }
    });

    var CardShema = mongoose.Schema({
        name: {
            type: String
        },
        cardType: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'CardType'
        },
        image:String,
        level: Number,
        stars: Number,
        maxLevel: Number,
        health: Number,
        yellowDamage: Number,
        redDamage: Number,
        blueDamage: Number,
        purpleDamage: Number,
        greenDamage: Number,
        blackDamage: Number,
        criticalDamage: Number,
        emptyDamage: Number,
        powers: [{ 
            name: String,
            level: Number 
        }]
    });

    var DeckShema = mongoose.Schema({
        name: {
            type: String,
            unique: true
        },
        cards: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Card' }]
    });

    models.init = function(models) {
        models.CardType = mongoose.model('CardType', CardTypeShema);
        models.Card = mongoose.model('Card', CardShema);
        models.Deck = mongoose.model('Deck', DeckShema);
    };

})(module.exports);

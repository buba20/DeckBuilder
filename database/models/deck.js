/*jslint node: true*/
(function (models) {
    'use strict';
    var mongoose = require('mongoose'),
        gemColors = ['yellow',
            'red',
            'blue',
            'purple',
            'green',
            'black'
                    ],

        CardTypeShema = mongoose.Schema({
            name: {
                type: String,
                unique: true
            }
        }),

        CardShema = mongoose.Schema({
            name: {
                type: String
            },
            cardType: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'CardType'
            },
            image: String,
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
            specialDamage: Number,
            powers: [{
                name: String,
                level: Number,
                gemColor: {
                    type: String,
                    'enum': gemColors
                }
            }]
        }),

        DeckShema = mongoose.Schema({
            name: {
                type: String,
                unique: true
            },
            cards: [{
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Card'
            }]
        });

    models.init = function (models) {
        models.CardType = mongoose.model('CardType', CardTypeShema);
        models.Card = mongoose.model('Card', CardShema);
        models.Deck = mongoose.model('Deck', DeckShema);
    };

}(module.exports));

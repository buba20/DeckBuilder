(function (controler) {
    'use strict';
    var home = require('./home'),
        deck = require('./deck'),
        card = require('./card'),
        cardType = require('./cardType');

    controler.init = function (app) {
        home.init(app);
        deck.init(app);
        card.init(app);
        cardType.init(app);
    };

}(module.exports));

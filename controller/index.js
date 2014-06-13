(function (controler) {
    var home = require('./home'),
        deck = require('./deck');

    controler.init = function (app) {
        home.init(app);
        deck.init(app);
    };

})(module.exports);
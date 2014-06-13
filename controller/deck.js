(function (deck) {
    var service = require('../service');

    var getAll = function (req, res) {
        service.getAllDecks(function (err, decks) {
            if (err) {
                console.log(err);
            }
            res.json(decks);
        });
    };

    var getDeck = function (req, res) {
        service.getDeck(req.params.id, function (err, dbdeck) {
            if (err) { console.log(err); }

            res.json(dbdeck[0]);
        });
    }

    var addNew = function (req, res) {
        service.addDeck(req.body.name, function (err) {
            if (err) { console.log(err); }
            res.end(req.body.name + ' Ok');
        });

    }

    deck.init = function (app) {
        app.get("/api/deck", getAll);
        app.get("/api/deck/:id", getDeck);
        app.post("/api/deck", addNew);
    };

})(module.exports);
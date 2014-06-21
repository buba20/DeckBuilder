(function(deck) {
    var service = require('../service');

    var get = function(req, res) {

        service.deck.get(req.params.id, function(err, decks) {
            if (err) {
                console.log(err);
            }
            res.json(decks);
        });
    };

    var add = function(req, res) {

        service.deck.add(req.body.name, function(err) {

            if (err) {
                console.log(err);
            }
            res.end(req.body.name + ' Ok');
        });

    };

    var update = function(req, res) {

        service.deck.update(req.body, function(err) {
            if (err) {
                console.log(err);
            }
            res.end('Ok');
        });
    };

    deck.init = function(app) {
        app.get("/api/deck", get);
        app.get("/api/deck/:id", get);
        app.post("/api/deck", update);
        app.put("/api/deck", add);
    };

})(module.exports);

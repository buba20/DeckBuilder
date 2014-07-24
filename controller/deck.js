(function(deck) {
    'use strict';
    var service = require('../service'),

        get = function(req, res) {

            service.deck.get(req.params.id, function(err, decks) {
                if (err) {
                    console.log(err);
                }
                res.json(decks);
            });
        },

        add = function(req, res) {

            service.deck.add(req.body, function(err) {

                if (err) {
                    console.log(err);
                }
                res.end(req.body.name + ' Ok');
            });

        },

        update = function(req, res) {

            service.deck.update(req.body, function(err) {
                if (err) {
                    console.log(err);
                }
                res.end('Ok');
            });
        },
        deleteDeck = function(req, res) {
            service.deck.deleteDeck(req.body._id, function(err) {
                if (err) {
                    console.log(err);
                };
                res.end('Ok');
            });
        };

    deck.init = function(app) {
        app.get("/api/deck", get);
        app.get("/api/deck/:id", get);
        app.post("/api/deck", update);
        app.put("/api/deck", add);
        app.delete('/api/deck', deleteDeck);
    };

}(module.exports));

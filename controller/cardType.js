(function (cardType) {
    'use strict';
    var service = require('../service'),

        get = function (req, res) {

            service.cardType.get(function (err, cardTypes) {
                if (err) {
                    console.log(err);
                }
                res.json(cardTypes);
            });
        };

    cardType.init = function (app) {
        app.get("/api/cardType", get);
    };

}(module.exports));

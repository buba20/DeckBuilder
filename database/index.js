/*jslint node: true*/
(function (db) {
    'use strict';
    var mongoose = require('mongoose'),
        connectionString = 'mongodb://localhost/PuzzleQuest',
        deckModel = require('./models/deck'),
        seed = require('./seed');

    db.openConnection = function () {

        mongoose.connect(connectionString);

    };

    db.closeConnection = function (connection) {
        connection.close();
    };

    db.openConnection();
    db.models = {};
    deckModel.init(db.models);
    seed.run(db);

}(module.exports));

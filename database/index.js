(function (db) {

    var mongoose = require('mongoose'),
        connectionString = 'mongodb://localhost/PuzzleQuest',
        deckModel = require('./models/deck');

    db.openConnection = function () {
        mongoose.connect(connectionString);
    }

    db.closeConnection = function () {
        mongoose.connection.close();
    }

    db.models = {};
    deckModel.init(db.models);

})(module.exports);
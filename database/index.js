(function (db) {

    var mongoose = require('mongoose'),
        connectionString = 'mongodb://localhost/PuzzleQuest',
        deckModel = require('./models/deck'),
        seed = require('./seed');

    db.openConnection = function () {
        return mongoose.connect(connectionString);
    }

    db.closeConnection = function () {
        mongoose.connection.close();
    }

    db.models = {};
    deckModel.init(db.models);
    seed.run(db);

})(module.exports);
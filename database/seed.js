(function(seed) {
    var names = {
        MODERN: 'Modern',
        CLASSIC: 'Classic',
        MARVEL_NOW: 'Marvel NOW!',
        ASTONISHING_X_MEN: 'Astonishing X-Men',
        DARK_AVENGERS: 'Dark Avengers',
        MODEL_35: 'Model 35',
        MODEL_40: 'Model 40',
        X_FORCE: 'X-Force',
        INDESTRUCTIBLE: 'Indestructible',
        STEVE_ROGERS: 'Steve Rogers',
        GREY_SUITE: 'Grey Suite',
        DARK_REGION: 'Dark Region',
        MOHAWK: 'Mohawk',
        PATCH: 'Patch',
        ORIGINAL: 'Original'
    };

    var _db;

    var cardTypeSeed = function() {
        _db.openConnection();

        _db.models.CardType.find({})
            .exec(function(err, collection) {
                if (collection.length === 0) {

                    for (var name in names) {
                        _db.models.CardType.create({
                            name: names[name]
                        });
                    }
                }
            }).then(function() {
                _db.closeConnection();
            });

    };

    seed.run = function(db) {
        _db = db;
        cardTypeSeed();
    };


})(module.exports);

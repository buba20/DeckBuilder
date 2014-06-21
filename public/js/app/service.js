(function(app) {
    app.service = {};
    app.service.getDecks = function(next) {
        app.http.getJSON('/api/deck', function(data) {
            next(data);
        });
    };
    app.service.getDeck = function(id, next) {
        app.http.getJSON('api/deck/' + id, function(data) {
            next(data);
        });
    },
    app.service.newDeck = function(newDeckName, next) {
        app.http.putJSON('/api/deck', {
                name: newDeckName
            },
            function(data) {
                next(data);
            });
    };
    app.service.updateDeck = function(data, next) {
        app.http.postJSON('api/deck', data, function(data) {
            next(data);
        });
    }
})(app);

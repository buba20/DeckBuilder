(function(app) {
    app.service = {};
    app.service.getDeck = function(next) {
        app.http.getJSON('/api/deck', function(data) {
            next(data);
        });
    };
})(app);

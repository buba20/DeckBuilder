(function(app) {
    app.service = {};

    app.service.getDecks = function() {
        return $.ajax({
            url: '/api/deck',
            dataType: 'json',
            cache: false
        });
    };

    app.service.getDeck = function(id) {
        return $.ajax({
            url: 'api/deck/' + id,
            dataType: 'json',
            cache: false
        });
    };
    app.service.newDeck = function(data) {
        return $.ajax({
            url: '/api/deck',
            type: 'PUT',
            data: data,
            processData: false, // tell jQuery not to process the data
            contentType: false // tell jQuery not to set contentType

        });
    };

    app.service.updateDeck = function(data) {
        return $.ajax({
            url: 'api/deck',
            type: 'POST',
            data: data
        });
    };

    app.service.deleteDeck = function(data) {
        return $.ajax({
            url: 'api/deck',
            type: 'DELETE',
            data: data
        });
    };

    app.service.cards = {
        cardType: {
            getAll: function() {
                return $.ajax({
                    url: '/api/cardType',
                    dataType: 'json'
                });
            }
        },
        getAll: function() {
            return $.ajax({
                url: '/api/card',
                dataType: 'json'
            });
        },
        get: function(id) {
            return $.ajax({
                url: '/api/card/' + id,
                dataType: 'json'
            });
        },
        newCard: function(data) {
            return $.ajax({
                url: "api/card",
                type: "PUT",
                data: data,
                processData: false, // tell jQuery not to process the data
                contentType: false // tell jQuery not to set contentType
            });
        },
        update: function(data, next) {
            return $.ajax({
                url: '/api/card',
                dataType: 'json',
                type: 'POST',
                data: data
            });
        },
        'delete': function(card, next) {
            return $.ajax({
                url: '/api/card',
                dataType: 'json',
                data: card,
                type: 'DELETE'
            });
        }
    };
})(app);

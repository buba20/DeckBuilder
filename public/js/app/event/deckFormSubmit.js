(function(app) {
    'use strict';
    var deckFormSubmit = function() {};
    deckFormSubmit.prototype = Object.create(app.events.FormSubmitEvent.prototype);
    deckFormSubmit.prototype.submitForm = function (e) {
        var data = app.events.FormSubmitEvent.prototype.submitForm(e);
        console.log(data);
    };

    app.events = app.events || {};
    app.events.DeckFormSubmit = deckFormSubmit;
}(app));

/*global FormData, app, hasher*/
(function (app) {
    'use strict';
    var formSubmitEvent = function () {};

    formSubmitEvent.prototype = Object.create(app.event.prototype);
    formSubmitEvent.prototype.constructor = formSubmitEvent;
    formSubmitEvent.prototype.submitForm = function (e) {
        e.preventDefault();
        var data = new FormData(e.target);
        return data;
    };

    formSubmitEvent.prototype.applayTo = function (view) {
        var selectElement = view.getParentNode().querySelector('form');
        selectElement.addEventListener('submit', this.submitForm, false);
    };
    app.events = app.events || {};
    app.events.FormSubmitEvent = formSubmitEvent;
}(app));

// deck form submit
(function (app) {
    'use strict';
    var deckFormSubmit = function () {};
    deckFormSubmit.prototype = Object.create(app.events.FormSubmitEvent.prototype);
    deckFormSubmit.prototype.submitForm = function (e) {
        var data = app.events.FormSubmitEvent.prototype.submitForm(e),

            //get selected cards
            selectedCards = [],
            optionElement = e.target.querySelectorAll('option:checked'),
            i;
        for (i = 0; i < optionElement.length; i += 1) {
            selectedCards.push(optionElement[i].value);
        }

        data.append('cards', selectedCards);
        app.service.newDeck(data).done(function () {
            hasher.setHash('home');
        });
    };

    app.events = app.events || {};
    app.events.DeckFormSubmit = deckFormSubmit;
}(app));

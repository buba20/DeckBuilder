/*global app*/
(function (app, template, FormSubmitEvent) {
    'use strict';
    var deckView = function (model) {
        app.View.call(this, template, model);
    };
    deckView.prototype = Object.create(app.View.prototype);
    deckView.prototype.constructor = deckView;
    deckView.prototype.cardsViews = [];
    deckView.prototype.events = [new FormSubmitEvent()];
    deckView.prototype.addCardsViews = function (cardsViews) {
        this.cardsViews = cardsViews;
    };
    deckView.prototype.render = function () {
        var node = app.View.prototype.render.call(this),
            cardsContainer = node.querySelector('#cards');
        this.cardsViews.forEach(function (view) {
            cardsContainer.appendChild(view.render());
        });
        return this.el;
    };
    app.views = app.views || {};
    app.views.DeckView = deckView;
}(app, app.templates.newDeckTemplate, app.events.FormSubmitEvent));

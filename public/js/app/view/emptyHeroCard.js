/*global app*/
(function (app, region, template) {
    'use strict';
    var emptyCardView = function (model) {
        app.View.call(this, template, model);
    };
    emptyCardView.prototype = Object.create(app.View.prototype);
    emptyCardView.prototype.constructor = emptyCardView;
    emptyCardView.prototype.events = [new app.events.CardSelectionChange()];
    app.views = app.views || {};
    app.views.EmptyHeroCardView = emptyCardView;
}(app, app.region, app.templates.emptyCardTemplate));

/*jslint browser: true */
/*global app */
(function (app, region, template, CardSelectionChange) {
    'use strict';
    var miniCardView = function (model) {
        app.View.call(this, template, model);
    };
    miniCardView.prototype = Object.create(app.View.prototype);
    miniCardView.prototype.constructor = miniCardView;
    miniCardView.prototype.events = [new CardSelectionChange()];
    app.views = app.views || {};
    app.views.MiniCardView = miniCardView;
}(app, app.region, app.templates.miniCardTemplate, app.events.CardSelectionChange));

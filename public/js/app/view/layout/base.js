/*global app*/
(function (app) {
    'use strict';
    var layout = function (model) {
        this.model = model;
    };
    layout.prototype = Object.create(app.View.prototype);
    layout.prototype.constructor = app.layout;
    layout.prototype.render = function () {
        throw new Error('Implement render function');
    };
    app.Layout = layout;
}(app));

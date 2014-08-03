/*
    base view
 */
(function (app) {
    var view = function (template, model) {
        this.el = document.createElement('div');
        this.template = template;
        this.model = model;
    };
    view.prototype.events = [];
    view.prototype.render = function () {
        var html = this.template(this.model || {});
        this.el.innerHTML = html;
        var view = this;
        Array.prototype.forEach.call(this.events, function (event) {
            event.applayTo(view);
        });
        return this.el;
    };
    view.prototype.addEvent = function (event) {
        this.events.push(event);
    };
    view.prototype.getParentNode = function () {
        return this.el;
    };
    view.prototype.setParentNode = function (parentNode) {
        this.el = parentNode;
    };
    view.prototype.getModel = function () {
        return this.model;
    };
    view.prototype.setModel = function (model) {
        this.model = model;
    };
    view.prototype.destroy = function () {
        this.el;
    };

    app.View = view;
}(app));

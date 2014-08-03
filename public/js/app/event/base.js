(function (app) {

    var e = function () {};

    e.prototype.applayTo = function (view) {
        this.setEventsFor(view);
    };

    e.prototype.setEventsFor = function (view) {
        throw Error('Do something with view');
    };

    app.event = e;

}(app));

(function (app, $, signals) {

    app.initialized = new signals.Signal();
    app.started = new signals.Signal();

})(app || {}, $, signals);

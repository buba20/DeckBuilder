(function (app, $, signals) {

    app.initialized = new signals.Signal();
    app.started = new signals.Signals();

})(app || {}, $, signals);
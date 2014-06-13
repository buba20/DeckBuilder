(function (app, $, signals) {
    var http = {};

    http = {
        requestStarted: new signals.Signal(),
        requestEnded: new signals.Signal()
    };

    $.ajaxStart(function () {
        http.requestStarted.dispatch();
    });

    $.ajaxStop(function () {
        http.requestEnded.dispatch();
    });

    http.getJSON = function (url, next) {
        $.getJSON(url, function (data) {
            next(data);
        });
    };

    app.http = http;
    app.started.add(function () { console.log('http started'); });
})(app, $, signals);
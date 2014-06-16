(function (app, $, signals) {
    var http = {};

    http = {
        requestStarted: new signals.Signal(),
        requestEnded: new signals.Signal()
    };

    $(document).ajaxStart(function () {
        http.requestStarted.dispatch();
    });

    $(document).ajaxStop(function () {
        http.requestEnded.dispatch();
    });

    http.getJSON = function (url, next) {
        $.getJSON(url, function (data) {
            next(data);
        });
    };

    app.http = http;
    
})(app, $, signals);
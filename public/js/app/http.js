(function(app, $, signals) {
    var http = {};

    http = {
        requestStarted: new signals.Signal(),
        requestEnded: new signals.Signal()
    };

    $(document).ajaxStart(function() {
        http.requestStarted.dispatch();
    });

    $(document).ajaxStop(function() {
        http.requestEnded.dispatch();
    });

    http.getJSON = function(url, next) {
        $.getJSON(url, function(data) {
            next(data);
        });
    };

    http.postJSON = function(url, data, next) {
        $.post(url, data, function(e) {
            next(e);
        });
    };

    http.putJSON = function(url, data, next) {
        $.ajax({
            type: "PUT",
            url: url,
            data: data
        }).done(next);
    };

    app.http = http;

})(app, $, signals);

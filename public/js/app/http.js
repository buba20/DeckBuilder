(function(app, $, signals) {
    var http = {},
        defaultOption = {
            ur: '',
            dataType 'json',
            cache: false,
        };

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

    http.getJSON = function(url) {
        $.extend(requestOptions, defaultOption, {
            url: url
        });

        return $.ajax(requestOptions);
    };

    http.postJSON = function(url, data, next) {
        $.extend(requestOptions,defaultOption,{url:})
        $.post(url, data, function(e) {
            next(e);
        });
    };

    http.putJSON = function(url, data, next) {
        $.ajax({
            type: "PUT",
            url: url,
            data: data,
            contentType: false,
            processData: false
        }).done(next);
    };
    http.delete = function(url, data, next) {
        $.ajax({
            type: "DELETE",
            url: url,
            data: data
        }).done(next);
    };

    app.http = http;

})(app, $, signals);

(function (home) {
    'use strict';
    var index = function (req, res) {
        res.render('./home/index');
    };

    home.init = function (app) {
        app.get('/', index);
    };
}(module.exports));

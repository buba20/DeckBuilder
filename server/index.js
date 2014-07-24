(function (server) {

    var express = require('express');
    var bodyParser = require('body-parser');
    var app = express();
    var controler = require('../controller');
    
    app.set('views', process.cwd() + '/view');
    app.set('view engine', 'vash');
    app.use(express.static(process.cwd() + '/public'));

    app.use(bodyParser.json());       // to support JSON-encoded bodies
    app.use(bodyParser.urlencoded()); 
 
    server.start = function () {
        controler.init(app);

        app.listen(3000, function () {
            console.log('running at port 3000');
            console.log(__dirname);
        });
    }

})(module.exports)
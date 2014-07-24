(function(service) {

    var db = require('../database');
    service.deck = require('./deck');
    service.card = require('./card');
    service.cardType = require('./cardType');
      
})(module.exports);
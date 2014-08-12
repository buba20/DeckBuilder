(function (card) {
    'use strict';
    var service = require('../service'),
        formidable = require('formidable'),
        errorHandler = require('../errorHandler'),
        fs = require('fs'),
        path = require('path'),

        getExtension = function (filename) {
            var ext = path.extname(filename || '').split('.');
            return ext[ext.length - 1];
        },
        get = function (req, res) {
            
            service.card.get(req.params.id, function (err, cards) {
                if (err) {
                    console.log(err);
                }
                res.json(cards);
            });
        },

        add = function (req, res) {
            
            var form = new formidable.IncomingForm();
            form.keepExtensions = true;
            form.uploadDir = "./uploadedImages";
            
            form.parse(req, function (err, fields, files) {
                if (err) {
                    errorHandler(err, req, res);
                    return;
                }
                
                fields.image = '';
                
                if (files.image.size > 0) {
                    var p = 'images/' + fields.name + '.' + getExtension(files.image.path);
                    fields.image = p;
                    fs.rename(files.image.path, __dirname + '/../public/' + p, function () {
                        if (err) {
                            console.log(err);
                        }
                    });
                }
                
                parseModel(fields);
                delete fields._id;
                service.card.add(fields, function (err) {
                    if (err) {
                        console.log(err);
                    }
                    
                    res.end('Ok');
                });
            });
        },

        update = function (req, res) {
            service.card.update(req.body, function (err) {
                if (err) {
                    console.log(err);
                }
                res.end('Ok');
            });
        },
        deleteCard = function (req, res) {
            service.card.deleteCard(req.body._id, function (err) {
                if (err) {
                    console.log(err);
                }
                res.end('Ok');
            });
        },

        parseModel = function (m) {
            powerParser('power1', 'color', m);
            powerParser('power2', 'color', m);
            powerParser('power3', 'color', m);
            
            powerParser('power1', 'description', m);
            powerParser('power2', 'description', m);
            powerParser('power3', 'description', m);
            
            powerParser('power1', 'level', m);
            powerParser('power2', 'level', m);
            powerParser('power3', 'level', m);
            
            powerParser('power1', 'requiredGems', m);
            powerParser('power2', 'requiredGems', m);
            powerParser('power3', 'requiredGems', m);
            
            m.powers = [m.power1, m.power2, m.power3];
            delete m.power2;
            delete m.power3;
            delete m.power1;
        },

        powerParser = function (powerNumber, propertyName, model) {
            
            var fullName = [powerNumber, propertyName].join('.'),
                val = model[fullName];
            
            if (!model[powerNumber]) {
                model[powerNumber] = {};
            }
            
            model[powerNumber][propertyName] = val;
            delete model[fullName];
        };
    card.init = function (app) {
        app.get("/api/card", get);
        app.get("/api/card/:id", get);
        app.post("/api/card", update);
        app.put("/api/card", add);
        app.delete('/api/card', deleteCard);
    };

}(module.exports));

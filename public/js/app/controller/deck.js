/*deck controller*/
(function(app, $, crossroads, newDeckTemplate, service, hasher) {

    var formSubmit = function(e) {
        e.preventDefault();
        
        var newDeckName =  app.region.main.querySelector("form input[name='deckName']").value;
        var id = app.region.main.querySelector("form input[name='id']").value;

        if (!id) {
            service.newDeck(newDeckName, function(e) {
                hasher.setHash('home');
            });
        } else {
            service.updateDeck({
                name: newDeckName,
                id: id
            }, function(data) {
                hasher.setHash('home');
            });
        }
        return false;
    };

    var setupEditFrom = function(name, id) {
        var form = newDeckTemplate({
            name: name,
            id: id
        });

        app.region.clearRegion(app.region.main);
        app.region.main.innerHTML = form;
        app.region.main.querySelector('button[type=submit]').addEventListener('click', formSubmit);
    };

    var newDeck = function() {
        setupEditFrom('', '');
    };

    var editDeck = function(id) {
        service.getDeck(id, function(data) {
            if (data) {
                setupEditFrom(data.name, data._id);
            };
        });
    };
    app.initialized.add(function() {
        crossroads.addRoute('deck/new', newDeck);
        crossroads.addRoute('deck/{id}', editDeck);
    });

})(app, $, crossroads, app.templates.newDeckTemplate, app.service, hasher);

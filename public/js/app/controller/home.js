(function(app, $, crossroads, indexViewTemplate) {

    var index = function() {

        app.service.getDecks(function(data) {

            app.region.clearRegion(app.region.main);
            var el = indexViewTemplate({
                decks: data,
                'newDeckLink': '#/deck/new'

            });

            app.region.main.innerHTML = el;

        });

    }; // end index 


    app.initialized.add(function() {
        crossroads.addRoute('home', index);
    });


})(app, $, crossroads, app.templates.deckListTemplate);
